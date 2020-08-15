import modelData from "./data.js";
const canvas = document.getElementById("myChart");
const ctx = canvas.getContext("2d");
const fetchLabel = () => {
  let labelArray = [];
  for (const month of modelData) {
    if (month.state_abbrev == "ACT") {
      labelArray.push(month.month);
    }
  }
  return labelArray;
};

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: fetchLabel(),
    datasets: [
      {
        label: modelData[0].state_abbrev,
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "new thing",
        data: [1, 20, 4, 5, 6, 7],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
