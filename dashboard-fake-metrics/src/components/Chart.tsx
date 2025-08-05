import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { nombre: 'Ene', usuarios: 400 },
  { nombre: 'Feb', usuarios: 800 },
  { nombre: 'Mar', usuarios: 600 },
  { nombre: 'Abr', usuarios: 1000 },
  { nombre: 'May', usuarios: 900 },
  { nombre: 'Jun', usuarios: 1200 },
];

export default function Chart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 mt-10">
      <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
        Usuarios activos por mes
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="usuarios"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
