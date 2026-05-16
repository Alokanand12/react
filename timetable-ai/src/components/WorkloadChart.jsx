import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { calculateWorkload } from "../utils/workload";

// ✅ Register Chart.js components (required)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function WorkloadChart({ timetable }) {
  if (!timetable) return null;

  const load = calculateWorkload(timetable);

  const data = {
    labels: Object.keys(load),
    datasets: [
      {
        label: "Classes per Teacher",
        data: Object.values(load),
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(168, 85, 247, 0.8)",
          "rgba(251, 146, 60, 0.8)",
        ],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(168, 85, 247, 1)",
          "rgba(251, 146, 60, 1)",
        ],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "white" } },
      title: {
        display: true,
        text: "📊 Teacher Workload Distribution",
        color: "white",
        font: { size: 16 },
      },
    },
    scales: {
      x: { ticks: { color: "white" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: {
        ticks: { color: "white", stepSize: 1 },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="mx-4 mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
      <Bar data={data} options={options} />
    </div>
  );
}