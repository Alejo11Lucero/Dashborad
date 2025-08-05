import { useEffect, useState } from 'react';
import MetricCard from './components/MetricCard';
import Chart from './components/Chart';
import { fakeMetrics } from './data/fakeMetrics';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Botón modo */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded transition"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">
          📊 Dashboard de Métricas Falsas
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fakeMetrics.map((m) => (
            <MetricCard key={m.id} titulo={m.titulo} valor={m.valor} />
          ))}
        </div>

        <Chart />
      </div>
    </div>
  );
}
