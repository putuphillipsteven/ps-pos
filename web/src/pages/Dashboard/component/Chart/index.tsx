import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total Sales per Day",
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Rupiah",
      },
      min: 0,
      ticks: {
        stepSize: 50000,
      },
    },
  },
};

interface ChartData {
  labels: number[];
  datasets: {
    fill: boolean;
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

interface DataPoint {
  label: number;
  price: number;
}

const initialChartData: ChartData = {
  labels: [],
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [],
      borderColor: "rgb(255, 121, 64)",
      backgroundColor: "rgb(239, 163, 130, 0.0)",
    },
  ],
};

export const AreaChart = () => {
  const [chartData, setChartData]: [
    ChartData,
    Dispatch<SetStateAction<ChartData>>
  ] = useState(initialChartData);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/transaction/filter/bydate"
      );
      const responseData = response?.data?.data;
      console.log(responseData);

      if (!responseData) {
        console.error("Invalid response data");
        return;
      }

      const dataPoints: DataPoint[] = responseData.map(
        (data: any) => {
          const timestamp = data.date;
          // console.log("timestamp", timestamp);

          const dateObject = new Date(timestamp);
          // console.log("date", dateObject);

          const label = dateObject.getDate();
          // console.log("getdate", label);

          return {
            label,
            price: data?.total,
          };
        }
      );
      // dataPoints.sort((a, b) => b.label - a.label);

      const last3DataPoints = dataPoints.slice(-7);

      const labels = last3DataPoints.map(
        (dataPoint) => dataPoint.label
      );
      const prices = last3DataPoints.map(
        (dataPoint) => dataPoint.price
      );

      const newData: ChartData = {
        labels,
        datasets: [
          {
            fill: true,
            label: "Sales per Day",
            data: prices,
            borderColor: "#ED1C24",
            backgroundColor: "#fafafa",
          },
        ],
      };
      setChartData(newData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Line
        options={options}
        data={chartData}
        width="500px"
        height="250px"
      />
    </>
  );
};
