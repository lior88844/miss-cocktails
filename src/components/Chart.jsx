import {
  Chart as ChartJS,
  LineElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  PointElement
)

export function LineChart(props) {
  const spirits = props.spirits

  const data = {
    labels: Object.keys(spirits),
    datasets: [
      {
        label: 'Spirits by Users',
        data: Object.values(spirits),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Customers',
          padding: 6,
        },
      },
    },
  }

  return (
    <section className="bar-chart">
      <h1>Spirits by Users</h1>
      <Bar data={data} options={options} />
    </section>
  )
}
