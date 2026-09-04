import { useState, useCallback } from 'react';
import { Github, Keyboard, X } from 'lucide-react';
import { HomePage } from '@/pages/HomePage';
import { VisualizerPage } from '@/pages/VisualizerPage';
import { ProblemsPage } from '@/pages/ProblemsPage';
import { PatternsPage } from '@/pages/PatternsPage';
import { LearnPage } from '@/pages/LearnPage';
import { RoadmapPage } from '@/pages/RoadmapPage';
import { ProgressPage } from '@/pages/ProgressPage';

type Page = 'home' | 'visualizer' | 'problems' | 'patterns' | 'learn' | 'roadmap' | 'progress';

const navItems: { id: Page; label: string }[] = [
  { id: 'visualizer', label: 'Visualizer' },
  { id: 'problems', label: 'Problems' },
  { id: 'patterns', label: 'Patterns' },
  { id: 'learn', label: 'Learn' },
  { id: 'roadmap', label: 'FANG Roadmap' },
  { id: 'progress', label: 'Progress' },
];

function App() {
  const [page, setPage] = useState<Page>('home');
  const [problemId, setProblemId] = useState<number | undefined>(undefined);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useCallback((target: string, params?: Record<string, unknown>) => {
    setPage(target as Page);
    if (params?.problemId) setProblemId(params.problemId as number);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button onClick={() => navigate('home')} className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center">
                <span className="text-slate-950 font-bold text-sm">2P</span>
              </div>
              <span className="font-bold text-white hidden sm:block">PointerLab</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    page === item.id
                      ? 'bg-slate-800 text-sky-300'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowShortcuts(true)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
                title="Keyboard Shortcuts"
              >
                <Keyboard className="w-4 h-4" />
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen((o) => !o)}
                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden flex flex-col gap-1 pb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors ${
                    page === item.id
                      ? 'bg-slate-800 text-sky-300'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'visualizer' && <VisualizerPage initialProblemId={problemId} onNavigate={navigate} />}
        {page === 'problems' && <ProblemsPage onNavigate={navigate} />}
        {page === 'patterns' && <PatternsPage onNavigate={navigate} />}
        {page === 'learn' && <LearnPage />}
        {page === 'roadmap' && <RoadmapPage onNavigate={navigate} />}
        {page === 'progress' && <ProgressPage onNavigate={navigate} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-slate-500">
            PointerLab — Master Two Pointers, One Movement at a Time
          </p>
        </div>
      </footer>

      {/* Keyboard shortcuts modal */}
      {showShortcuts && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowShortcuts(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Keyboard Shortcuts</h2>
              <button
                onClick={() => setShowShortcuts(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { key: 'Space', desc: 'Play / Pause animation' },
                { key: '←', desc: 'Previous step' },
                { key: '→', desc: 'Next step' },
                { key: 'R', desc: 'Reset to beginning' },
              ].map((s) => (
                <div key={s.key} className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">{s.desc}</span>
                  <kbd className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-sm font-mono text-sky-300">
                    {s.key}
                  </kbd>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Shortcuts are active on the Visualizer page when not typing in an input field.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
