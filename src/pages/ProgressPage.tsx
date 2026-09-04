import { problems, allPatterns, problemsByPattern } from '@/data/registry';
import { Target, Flame, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

interface ProgressPageProps {
  onNavigate: (page: string, params?: Record<string, unknown>) => void;
}

const badges = [
  { name: 'Pointer Beginner', icon: '🎯', desc: 'Visualize your first problem', earned: true },
  { name: 'Opposite Pointer Master', icon: '↔', desc: 'Master Opposite Direction pattern', earned: false },
  { name: 'Fast & Slow Expert', icon: '🐢', desc: 'Master Fast & Slow pattern', earned: false },
  { name: 'Linked List Hunter', icon: '🔗', desc: 'Master Linked List pattern', earned: false },
  { name: '3Sum Survivor', icon: '🔥', desc: 'Visualize 3Sum', earned: false },
  { name: 'FANG Ready', icon: '🏆', desc: 'Complete all patterns', earned: false },
];

export function ProgressPage({ onNavigate }: ProgressPageProps) {
  const totalProblems = problems.length;
  const visualized = 3;
  const solved = 1;
  const streak = 1;
  const readiness = Math.round((solved / totalProblems) * 100);

  const patternProgress = allPatterns.map((p) => {
    const probs = problemsByPattern[p] ?? [];
    return {
      pattern: p,
      total: probs.length,
      done: 0,
      pct: 0,
    };
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Your Progress</h1>
        <p className="text-slate-400">Track your journey toward Two-Pointer mastery.</p>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <ProgressCard icon={<CheckCircle2 className="w-5 h-5" />} value={`${solved}`} label="Problems Solved" color="emerald" />
        <ProgressCard icon={<Target className="w-5 h-5" />} value={`${visualized}`} label="Problems Visualized" color="sky" />
        <ProgressCard icon={<Flame className="w-5 h-5" />} value={`${streak}`} label="Day Streak" color="amber" />
        <ProgressCard icon={<TrendingUp className="w-5 h-5" />} value={`${readiness}%`} label="Interview Readiness" color="violet" />
      </div>

      {/* Mastery bar */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-white">Two-Pointer Mastery</h2>
          <span className="text-sm font-mono text-slate-400">{solved} / {totalProblems} Problems</span>
        </div>
        <div className="h-4 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-500"
            style={{ width: `${readiness}%` }}
          />
        </div>
        <p className="text-sm text-slate-400 mt-2">
          {readiness}% complete. {readiness >= 80 ? 'You\'re FANG interview ready!' : 'Keep visualizing problems to increase your readiness.'}
        </p>
      </div>

      {/* Pattern mastery */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Pattern Mastery</h2>
        <div className="space-y-4">
          {patternProgress.map((pp) => (
            <div key={pp.pattern}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-slate-300">{pp.pattern}</span>
                <span className="text-xs font-mono text-slate-500">{pp.done} / {pp.total}</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-sky-500/60 transition-all duration-500"
                  style={{ width: `${pp.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Badges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map((b) => (
            <div
              key={b.name}
              className={`rounded-xl border p-4 text-center transition-all ${
                b.earned
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-slate-800 bg-slate-900/40 opacity-50'
              }`}
            >
              <div className="text-2xl mb-2">{b.icon}</div>
              <div className="text-xs font-semibold text-slate-200 mb-1">{b.name}</div>
              <div className="text-xs text-slate-500">{b.desc}</div>
              {b.earned && <Award className="w-4 h-4 text-emerald-400 mx-auto mt-2" />}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <button
          onClick={() => onNavigate('problems')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/15 text-sky-300 hover:bg-sky-500/25 border border-sky-500/30 font-medium transition-colors"
        >
          Continue Practicing
        </button>
      </div>
    </div>
  );
}

function ProgressCard({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) {
  const colors: Record<string, string> = {
    emerald: 'text-emerald-400 bg-emerald-500/10',
    sky: 'text-sky-400 bg-sky-500/10',
    amber: 'text-amber-400 bg-amber-500/10',
    violet: 'text-violet-400 bg-violet-500/10',
  };
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
      <div className={`p-2.5 rounded-lg w-fit mb-3 ${colors[color]}`}>{icon}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}
