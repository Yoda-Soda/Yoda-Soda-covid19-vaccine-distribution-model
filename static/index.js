import modelData from "./data.js";
const canvas = document.getElementById("myChart");
const ctx = canvas.getContext("2d");

//allows for dynamic fetching of the x-axis label
const fetchLabel = () => {
  let labelArray = [];
  for (const month of modelData) {
    if (month.state_abbrev == "ACT") {
      labelArray.push(month.month);
    }
  }
  return labelArray;
};

//dynamically fetches data per state Parameter: (state = String, property = String)

const fetchData = (state, property) => {
  let dataArray = [];
  state = state.toUpperCase(); //converts property to uppercase in case of an accidental lowercase
  console.log(state, property);

  for (const month of modelData) {
    if (month.state_abbrev == state) {
      console.log(state);
      dataArray.push(month[property]);
    }
  }
  return dataArray;
};
console.log(fetchData("ACT", "confirmed"));

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: fetchLabel(),
    datasets: [
      {
        label: modelData[0].state_abbrev,
        data: fetchData("ACT", "confirmed"),
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
