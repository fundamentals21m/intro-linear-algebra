import { useState } from 'react';
import { Header, Sidebar } from '@/components/layout';
import { COURSE_NAME } from '@/config';

// =============================================================================
// THEOREM DEFINITIONS - Add your theorems here
// =============================================================================
interface TheoremEntry {
  id: string;
  title: string;
  statement: string;
  sectionId: number;
  sectionTitle: string;
  category?: string;
}

const theorems: TheoremEntry[] = [
  // Example theorems - replace with your course content
  {
    id: 'thm-1',
    title: 'Example Theorem',
    statement: 'This is an example theorem statement.',
    sectionId: 0,
    sectionTitle: 'Welcome',
    category: 'Fundamentals',
  },
];
// =============================================================================

export default function Theorems() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTheorems = theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.statement.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [...new Set(theorems.map((t) => t.category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-dark-950">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Theorems & Definitions</h1>
          <p className="text-dark-400 mb-8">
            Quick reference for all theorems in {COURSE_NAME}
          </p>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search theorems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500"
            />
          </div>

          {/* Theorems by category */}
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-xl font-semibold text-dark-200 mb-4">{category}</h2>
              <div className="space-y-4">
                {filteredTheorems
                  .filter((t) => t.category === category)
                  .map((theorem) => (
                    <div
                      key={theorem.id}
                      className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-dark-100">{theorem.title}</h3>
                        <a
                          href={`#/section/${theorem.sectionId}`}
                          className="text-xs text-amber-400 hover:text-amber-300 whitespace-nowrap"
                        >
                          Section {theorem.sectionId}
                        </a>
                      </div>
                      <p className="text-dark-300">{theorem.statement}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {filteredTheorems.length === 0 && (
            <div className="text-center py-12 text-dark-400">
              No theorems found matching your search.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
