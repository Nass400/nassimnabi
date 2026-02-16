import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 80;
const CONNECTION_DISTANCE = 2.2;

function NetworkNodes() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      pos.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ]);
    }
    return pos;
  }, []);

  const velocities = useMemo(() => {
    return positions.map(() => [
      (Math.random() - 0.5) * 0.003,
      (Math.random() - 0.5) * 0.003,
      (Math.random() - 0.5) * 0.002,
    ] as [number, number, number]);
  }, [positions]);

  useFrame(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i][0] += velocities[i][0];
      positions[i][1] += velocities[i][1];
      positions[i][2] += velocities[i][2];

      for (let a = 0; a < 3; a++) {
        const limit = a === 2 ? 2 : a === 1 ? 3 : 4;
        if (Math.abs(positions[i][a]) > limit) velocities[i][a] *= -1;
      }

      dummy.position.set(...positions[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
      <sphereGeometry args={[0.025, 12, 12]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.7} />
    </instancedMesh>
  );
}

function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const positionsRef = useRef<Float32Array>(new Float32Array(NODE_COUNT * NODE_COUNT * 6));
  const colorsRef = useRef<Float32Array>(new Float32Array(NODE_COUNT * NODE_COUNT * 6));

  const nodePositions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      pos.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ]);
    }
    return pos;
  }, []);

  const velocities = useMemo(() => {
    return nodePositions.map(() => [
      (Math.random() - 0.5) * 0.004,
      (Math.random() - 0.5) * 0.004,
      (Math.random() - 0.5) * 0.003,
    ] as [number, number, number]);
  }, [nodePositions]);

  useFrame(() => {
    if (!lineRef.current) return;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodePositions[i][0] += velocities[i][0];
      nodePositions[i][1] += velocities[i][1];
      nodePositions[i][2] += velocities[i][2];

      for (let a = 0; a < 3; a++) {
        const limit = a === 2 ? 2 : a === 1 ? 3 : 4;
        if (Math.abs(nodePositions[i][a]) > limit) velocities[i][a] *= -1;
      }
    }

    let lineIndex = 0;
    const positions = positionsRef.current;
    const colors = colorsRef.current;

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = nodePositions[i][0] - nodePositions[j][0];
        const dy = nodePositions[i][1] - nodePositions[j][1];
        const dz = nodePositions[i][2] - nodePositions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          const idx = lineIndex * 6;

          positions[idx] = nodePositions[i][0];
          positions[idx + 1] = nodePositions[i][1];
          positions[idx + 2] = nodePositions[i][2];
          positions[idx + 3] = nodePositions[j][0];
          positions[idx + 4] = nodePositions[j][1];
          positions[idx + 5] = nodePositions[j][2];

          const r = 0.39, g = 0.4, b = 0.95;
          colors[idx] = r; colors[idx + 1] = g; colors[idx + 2] = b;
          colors[idx + 3] = r * alpha; colors[idx + 4] = g * alpha; colors[idx + 5] = b * alpha;

          lineIndex++;
        }
      }
    }

    const geom = lineRef.current.geometry;
    geom.setAttribute('position', new THREE.BufferAttribute(positions.slice(0, lineIndex * 6), 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors.slice(0, lineIndex * 6), 3));
    geom.attributes.position.needsUpdate = true;
    geom.attributes.color.needsUpdate = true;
    geom.setDrawRange(0, lineIndex * 2);
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial vertexColors transparent opacity={0.15} blending={THREE.AdditiveBlending} />
    </lineSegments>
  );
}

export function ParticleField() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      <NetworkNodes />
      <ConnectionLines />
    </group>
  );
}
