import { ChevronDown, Map, Trophy } from 'lucide-react';
import { problemsByPattern } from '@/data/registry';
import type { Pattern } from '@/types';

interface RoadmapPageProps {
  onNavigate: (page: string, params?: Record<string, unknown>) => void;
}

const dsaTopics = [
  'Arrays', 'Two Pointers', 'Sliding Window', 'Hashing', 'Stack',
  'Binary Search', 'Linked List', 'Trees', 'Graphs', 'Heap',
  'Backtracking', 'Dynamic Programming',
];

const twoPointerLevels: { level: number; name: string; pattern: Pattern | null; desc: string }[] = [
  { level: 1, name: 'Fundamentals', pattern: null, desc: 'Understand what two pointers are and when to use them.' },
  { level: 2, name: 'Opposite Direction', pattern: 'Opposite Direction', desc: 'Left and right pointers moving inward on sorted arrays.' },
  { level: 3, name: 'Fast & Slow', pattern: 'Fast & Slow', desc: 'Same-direction pointers for in-place filtering and deduplication.' },
  { level: 4, name: 'Sorting + Two Pointers', pattern: 'Sorting + Two Pointers', desc: 'Sort first, then fix one element and use two pointers.' },
  { level: 5, name: 'Linked List', pattern: 'Linked List', desc: 'Floyd\'s Tortoise and Hare for cycles and midpoints.' },
  { level: 6, name: 'Partitioning', pattern: 'Partition', desc: 'Dutch National Flag and region-based rearrangement.' },
  { level: 7, name: 'Advanced Problems', pattern: 'String', desc: 'String two pointers, complex multi-pointer problems.' },
];

export function RoadmapPage({ onNavigate }: RoadmapPageProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Map className="w-6 h-6 text-sky-400" />
          <h1 className="text-2xl font-bold text-white">FANG DSA Roadmap</h1>
        </div>
        <p className="text-slate-400">A structured path from arrays to dynamic programming, with Two Pointers as the focus.</p>
      </div>

      {/* Full DSA roadmap */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 mb-8">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Full DSA Path</h2>
        <div className="flex flex-wrap items-center gap-2">
          {dsaTopics.map((topic, i) => (
            <div key={topic} className="flex items-center gap-2">
              <span
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  topic === 'Two Pointers'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    : 'bg-slate-800/60 text-slate-400 border border-slate-700'
                }`}
              >
                {topic}
              </span>
              {i < dsaTopics.length - 1 && <ChevronDown className="w-3 h-3 text-slate-600 rotate-[-90deg]" />}
            </div>
          ))}
        </div>
      </div>

      {/* Two-Pointer deep dive */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white mb-1">Two-Pointer Mastery Path</h2>
        <p className="text-sm text-slate-400 mb-4">Progress through 7 levels from fundamentals to FANG-ready.</p>
      </div>

      <div className="space-y-3">
        {twoPointerLevels.map((lvl, idx) => {
          const probs = lvl.pattern ? problemsByPattern[lvl.pattern] ?? [] : [];
          return (
            <div key={lvl.level}>
              <div className={`rounded-xl border p-5 transition-colors ${
                idx === twoPointerLevels.length - 1
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-slate-800 bg-slate-900/60'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    idx === twoPointerLevels.length - 1
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {lvl.level}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1">{lvl.name}</h3>
                    <p className="text-sm text-slate-400 mb-3">{lvl.desc}</p>
                    {probs.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {probs.map((p) => (
                          <button
                            key={p.metadata.id}
                            onClick={() => onNavigate('visualizer', { problemId: p.metadata.id })}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/60 hover:bg-slate-700 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                          >
                            {p.metadata.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {idx === twoPointerLevels.length - 1 && (
                    <Trophy className="w-6 h-6 text-emerald-400 shrink-0" />
                  )}
                </div>
              </div>
              {idx < twoPointerLevels.length - 1 && (
                <div className="flex justify-center py-1">
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
