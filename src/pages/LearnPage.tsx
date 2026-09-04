import { useState } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, GitCompare } from 'lucide-react';

const chapters = [
  {
    title: 'What Are Two Pointers?',
    content: [
      'Two Pointers is a technique where you use two variables (pointers) to traverse a data structure — typically an array, string, or linked list.',
      'Instead of a single loop index, you use two indices that move independently based on the problem\'s logic.',
      'The key insight is that two pointers can reduce an O(n²) brute-force approach to O(n) by eliminating redundant comparisons.',
      'Common pointer names: left/right (opposite ends), slow/fast (same direction), or i/j (general).',
    ],
  },
  {
    title: 'When Should You Use Two Pointers?',
    content: [
      'Two Pointers works when the problem has a relationship between two positions that can be exploited.',
      'Look for: sorted arrays, palindromes, pairs/triplets with a target sum, in-place removal, or linked list cycle detection.',
      'It does NOT work well when you need to examine all possible subarrays (use Sliding Window) or when the search space needs halving (use Binary Search).',
      'The hallmark: you can make a decision about which pointer to move based on a comparison at the current positions.',
    ],
  },
  {
    title: 'Opposite Direction Pointers',
    content: [
      'Start left at index 0 and right at the last index. Move them inward based on a comparison.',
      'This works because the array is sorted: if the sum is too small, moving left forward increases it; if too large, moving right backward decreases it.',
      'Problems: Two Sum II, Valid Palindrome, Container With Most Water, Trapping Rain Water.',
      'The invariant: at each step, you eliminate one element that cannot be part of the solution.',
    ],
  },
  {
    title: 'Fast & Slow Pointers',
    content: [
      'Both pointers start at the same end and move in the same direction, but at different speeds or with different roles.',
      'slow marks the "write" position — where the next kept element goes. fast scans every element.',
      'When fast finds an element to keep, it copies it to slow and advances slow. This preserves order and runs in O(n) with O(1) space.',
      'Problems: Remove Duplicates, Remove Element, Move Zeroes.',
      'Key difference from left/right: slow/fast preserves element order; left/right does not.',
    ],
  },
  {
    title: 'Two Pointers + Sorting',
    content: [
      'Many problems require sorting first, then fixing one element and using two pointers on the remainder.',
      'For 3Sum: sort the array, fix element i, then run Two Sum II on the range [i+1, n-1].',
      'Sorting enables the two-pointer movement: if the sum is too small, move left to increase; too large, move right to decrease.',
      'Duplicate skipping on i, left, and right prevents repeated triplets.',
      'Problems: 3Sum, 4Sum, 3Sum Closest, Two Sum II.',
    ],
  },
  {
    title: 'Linked List Two Pointers',
    content: [
      'Floyd\'s Tortoise and Hare: slow moves 1 step, fast moves 2 steps.',
      'If there is a cycle, fast will eventually lap slow and they meet. If no cycle, fast reaches null first.',
      'For finding the middle: when fast reaches the end, slow is at the middle.',
      'Always check fast and fast.next for null before advancing — otherwise you get a null pointer error.',
      'Problems: Linked List Cycle, Middle of Linked List, Remove Nth From End.',
    ],
  },
  {
    title: 'Partition / Rearrangement',
    content: [
      'The Dutch National Flag problem: partition an array into three regions using three pointers (low, mid, high).',
      'low marks the boundary for 0s, high marks the boundary for 2s, and mid scans the unknown region.',
      'Based on nums[mid]: if 0, swap to low region and advance both; if 1, just advance mid; if 2, swap to high region and decrement high (do NOT advance mid).',
      'The critical mistake: after swapping with high, the swapped-in value is unknown, so mid must not advance.',
      'Problems: Sort Colors, Partition Array According to Given Pivot.',
    ],
  },
  {
    title: 'Two Pointers vs Sliding Window',
    content: [
      'Two Pointers: exploits a relationship between two positions. Pointers move based on a comparison.',
      'Sliding Window: examines a contiguous subarray/substring. The window expands and contracts.',
      'Use Two Pointers when you compare elements at two positions (e.g., "do these two sum to target?").',
      'Use Sliding Window when you need a contiguous range (e.g., "longest substring without repeating characters").',
      'Some problems can be solved with either technique — the key is identifying what the problem is actually asking.',
    ],
  },
  {
    title: 'Common Interview Tricks',
    content: [
      'Sort first: many two-pointer problems only work on sorted input. Sorting is O(n log n), which is cheaper than O(n²).',
      'Skip duplicates: after finding a match, skip identical values to avoid duplicate results.',
      'Use the right loop condition: left < right for opposite-direction; fast && fast.next for linked lists.',
      'Think about invariants: what is guaranteed to be true at each step? This helps you reason about correctness.',
      'Edge cases: empty input, single element, all duplicates, no solution exists.',
    ],
  },
  {
    title: 'Recognizing Two-Pointer Problems',
    content: [
      'Signal 1: "sorted array" or "non-decreasing order" in the problem statement.',
      'Signal 2: "find a pair/triplet that sums to target" — classic two-pointer setup.',
      'Signal 3: "in-place" with O(1) extra space — usually means slow/fast pointers.',
      'Signal 4: "palindrome" or "reverse" — opposite-direction string pointers.',
      'Signal 5: "linked list" + "cycle" or "middle" — Floyd\'s algorithm.',
      'Signal 6: "partition" or "three colors" — Dutch National Flag.',
      'Practice pattern recognition: the more problems you visualize, the faster you\'ll spot the pattern in interviews.',
    ],
  },
];

export function LearnPage() {
  const [chapter, setChapter] = useState(0);
  const ch = chapters[chapter];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Learn Two Pointers</h1>
        <p className="text-slate-400">A structured guide from fundamentals to interview-ready pattern recognition.</p>
      </div>

      {/* Chapter list */}
      <div className="flex flex-wrap gap-2 mb-6">
        {chapters.map((c, i) => (
          <button
            key={i}
            onClick={() => setChapter(i)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              i === chapter
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {i + 1}. {c.title}
          </button>
        ))}
      </div>

      {/* Chapter content */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-sky-400" />
          <h2 className="text-xl font-semibold text-white">
            Chapter {chapter + 1}: {ch.title}
          </h2>
        </div>
        <div className="space-y-4">
          {ch.content.map((para, i) => (
            <p key={i} className="text-slate-300 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800">
          <button
            onClick={() => setChapter((c) => Math.max(0, c - 1))}
            disabled={chapter === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <span className="text-sm text-slate-500 font-mono">
            {chapter + 1} / {chapters.length}
          </span>
          <button
            onClick={() => setChapter((c) => Math.min(chapters.length - 1, c + 1))}
            disabled={chapter === chapters.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm font-medium"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Comparison card */}
      {chapter === 7 && (
        <div className="mt-6 bg-slate-900/60 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <GitCompare className="w-5 h-5 text-violet-400" />
            <h3 className="text-lg font-semibold text-white">Technique Comparison</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <ComparisonCard name="Two Pointers" desc="Relationship between two positions" example="Two Sum, Palindrome" color="sky" />
            <ComparisonCard name="Sliding Window" desc="Contiguous subarrays/substrings" example="Max Sum Subarray" color="violet" />
            <ComparisonCard name="Binary Search" desc="Search space halved each step" example="Find in Sorted Array" color="emerald" />
          </div>
        </div>
      )}
    </div>
  );
}

function ComparisonCard({ name, desc, example, color }: { name: string; desc: string; example: string; color: string }) {
  const colors: Record<string, string> = {
    sky: 'border-sky-500/30 bg-sky-500/5 text-sky-300',
    violet: 'border-violet-500/30 bg-violet-500/5 text-violet-300',
    emerald: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300',
  };
  return (
    <div className={`rounded-xl border p-4 ${colors[color]}`}>
      <h4 className="font-semibold mb-2">{name}</h4>
      <p className="text-sm text-slate-400 mb-2">{desc}</p>
      <p className="text-xs font-mono text-slate-500">e.g. {example}</p>
    </div>
  );
}
