interface MetricCardProps {
  titulo: string;
  valor: string;
}

export default function MetricCard({ titulo, valor }: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-2">{titulo}</h2>
      <p className="text-2xl font-bold">{valor}</p>
    </div>
  );
}
