import { useState, useEffect } from 'react';
import { Play, BookOpen, ArrowRight, Zap, Code2, GitBranch, Target } from 'lucide-react';
import { problems } from '@/data/registry';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, unknown>) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 25% 30%, rgba(56,189,248,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(168,85,247,0.1) 0%, transparent 50%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm font-medium mb-6">
                <Zap className="w-3.5 h-3.5" />
                FANG Interview Prep · Two Pointer Mastery
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Master Two Pointers.
                <br />
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  One Movement at a Time.
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Visualize every comparison, pointer movement, and decision behind the most important Two-Pointer interview problems.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('visualizer')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30"
                >
                  <Play className="w-5 h-5" />
                  Start Visualizing
                </button>
                <button
                  onClick={() => onNavigate('problems')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors border border-slate-700"
                >
                  Explore Problems
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('learn')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors border border-slate-700"
                >
                  <BookOpen className="w-5 h-5" />
                  Learn Two Pointers
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <MiniAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat icon={<Code2 className="w-5 h-5" />} value={String(problems.length)} label="Problems" />
            <Stat icon={<GitBranch className="w-5 h-5" />} value="6" label="Patterns" />
            <Stat icon={<Target className="w-5 h-5" />} value="3" label="Languages" />
            <Stat icon={<Zap className="w-5 h-5" />} value="100%" label="Real Execution" />
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Why This Platform</h2>
        <p className="text-slate-400 mb-8">Everything you need to master the Two-Pointer technique for FANG interviews.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature
            icon={<Play className="w-5 h-5" />}
            title="Real Algorithm Execution"
            desc="Every step is generated from the actual algorithm — no fake animations. See exactly what the code does."
          />
          <Feature
            icon={<Code2 className="w-5 h-5" />}
            title="C, C++ & Java Code"
            desc="Synchronized code highlighting shows exactly which line executes at each step, in your language of choice."
          />
          <Feature
            icon={<GitBranch className="w-5 h-5" />}
            title="6 Pattern Categories"
            desc="Learn to recognize patterns: Opposite Direction, Fast & Slow, Linked List, Partition, String, and Sorting."
          />
          <Feature
            icon={<Target className="w-5 h-5" />}
            title="Why It Works"
            desc="Every problem explains the invariant and reasoning — not just the code, but the why behind the approach."
          />
          <Feature
            icon={<Zap className="w-5 h-5" />}
            title="Custom Input Playground"
            desc="Enter your own arrays, strings, or linked lists and watch the algorithm run on your data."
          />
          <Feature
            icon={<BookOpen className="w-5 h-5" />}
            title="FANG Roadmap"
            desc="A structured learning path from fundamentals to advanced problems, tracking your progress along the way."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to master Two Pointers?</h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Jump straight into the visualizer and see the algorithm in action.
          </p>
          <button
            onClick={() => onNavigate('visualizer')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all shadow-lg shadow-sky-500/20"
          >
            <Play className="w-5 h-5" />
            Launch Visualizer
          </button>
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-lg bg-slate-800/60 text-sky-400">{icon}</div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-slate-500">{label}</div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
      <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 w-fit mb-3">{icon}</div>
      <h3 className="font-semibold text-slate-100 mb-1.5">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function MiniAnimation() {
  const arr = [2, 7, 11, 15];
  const target = 9;
  const steps = [
    { left: 0, right: 3, label: 'left=0, right=3' },
    { left: 0, right: 3, label: '2+15=17 > 9' },
    { left: 0, right: 2, label: 'right--' },
    { left: 0, right: 2, label: '2+11=13 > 9' },
    { left: 0, right: 1, label: 'right--' },
    { left: 0, right: 1, label: '2+7=9 = target!' },
  ];
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStepIdx((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(id);
  }, [steps.length]);

  const s = steps[stepIdx];

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 w-full max-w-md">
      <div className="text-xs text-slate-500 font-mono mb-4">target = {target}</div>
      <div className="flex justify-center gap-3 mb-6">
        {arr.map((val, i) => {
          const isLeft = i === s.left;
          const isRight = i === s.right;
          const isActive = isLeft || isRight;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="h-5 flex flex-col items-center justify-end">
                {isLeft && <span className="text-xs font-bold text-sky-400">L</span>}
                {isRight && <span className="text-xs font-bold text-rose-400">R</span>}
              </div>
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 font-mono text-xl font-bold transition-all duration-500 ${
                  isActive
                    ? 'border-sky-400 bg-sky-500/20 text-sky-100'
                    : 'border-slate-700 bg-slate-800/50 text-slate-300'
                }`}
              >
                {val}
              </div>
              <div className="text-xs text-slate-600 font-mono">{i}</div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <div className="inline-block px-3 py-1.5 rounded-lg bg-slate-800 text-sm font-mono text-slate-300 transition-all">
          {s.label}
        </div>
      </div>
    </div>
  );
}
