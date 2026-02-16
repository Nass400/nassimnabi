import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Menu, X, BookOpen, Wrench, Download, Sparkles } from 'lucide-react';
import { CURATED_PROJECTS } from '@/lib/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const NAV_SECTIONS = [
  { id: 'about', label: 'About', icon: BookOpen },
  { id: 'features', label: 'Features', icon: Sparkles },
  { id: 'installation', label: 'Installation', icon: Download },
  { id: 'usage', label: 'Usage', icon: Wrench },
] as const;

export function ProjectDocsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const project = CURATED_PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.docs) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-text-light/60 dark:text-text-dark/60 mb-6">Project not found</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  const docs = project.docs;

  const sections = NAV_SECTIONS.filter((section) => {
    if (section.id === 'features') return !!docs.features;
    return true;
  });

  const getSectionContent = (id: string): string => {
    switch (id) {
      case 'about':
        return docs.about;
      case 'features':
        return docs.features || '';
      case 'installation':
        return docs.installation;
      case 'usage':
        return docs.usage;
      default:
        return '';
    }
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      const isCode = block.startsWith('git ') || block.startsWith('npm ') || block.startsWith('chmod ') || block.startsWith('cd ') || block.startsWith('cp ') || block.startsWith('nass-keys ') || block.startsWith('./');
      if (isCode) {
        return (
          <pre
            key={i}
            className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-sm overflow-x-auto my-3"
          >
            <code>{block}</code>
          </pre>
        );
      }

      if (block.startsWith('- ')) {
        const items = block.split('\n').filter((l) => l.startsWith('- '));
        return (
          <ul key={i} className="list-disc list-inside space-y-1 my-3 text-text-light/70 dark:text-text-dark/70">
            {items.map((item, j) => (
              <li key={j}>{item.slice(2)}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={i} className="text-text-light/70 dark:text-text-dark/70 leading-relaxed my-3">
          {block}
        </p>
      );
    });
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      {/* Top bar for mobile */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle sidebar"
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <span className="font-semibold truncate mx-4">{project.title}</span>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-40 bg-surface-light dark:bg-surface-dark border-r border-black/5 dark:border-white/5 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex-1 overflow-y-auto">
          {/* Project title */}
          <div className="mb-8">
            <h1 className="text-xl font-bold mb-1">{project.title}</h1>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav className="space-y-1 mb-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-light/60 dark:text-text-dark/60 hover:bg-primary/5 hover:text-text-light dark:hover:text-text-dark'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="border-t border-black/5 dark:border-white/5 my-4" />

          {/* External links */}
          <div className="space-y-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-text-light/60 dark:text-text-dark/60 hover:bg-primary/5 hover:text-text-light dark:hover:text-text-dark transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub Repository
            </a>
            {(project.liveUrl || docs.websiteUrl) && (
              <a
                href={project.liveUrl || docs.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-text-light/60 dark:text-text-dark/60 hover:bg-primary/5 hover:text-text-light dark:hover:text-text-dark transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Website
              </a>
            )}
          </div>
        </div>

        {/* Back link at bottom */}
        <div className="p-4 border-t border-black/5 dark:border-white/5">
          <div className="hidden lg:block mb-3">
            <ThemeToggle />
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-light/60 dark:text-text-dark/60 hover:bg-primary/5 hover:text-text-light dark:hover:text-text-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </aside>

      {/* Content area */}
      <main className="lg:ml-72 min-h-screen pt-14 lg:pt-0">
        <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                {sections.find((s) => s.id === activeSection)?.label}
              </h2>
              <div className="prose-custom">{renderContent(getSectionContent(activeSection))}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
