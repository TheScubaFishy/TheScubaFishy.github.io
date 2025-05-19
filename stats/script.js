let globalData = [];
const dataColumn = "Value"; // Always summarize this column

window.onload = () => {
  fetch("NCHS_-_Death_rates_and_life_expectancy_at_birth.csv")
    .then((response) => response.text())
    .then((csvText) => {
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          globalData = results.data.filter((row) =>
            Object.values(row).some((cell) => cell !== null && cell !== "")
          );
          populateGenderSelect();
          populateRaceSelect();
        },
      });
    })
    .catch((error) => {
      console.error("Error loading CSV:", error);
      document.querySelector(
        ".container"
      ).innerHTML += `<p style="color:red;">Failed to load CSV file.</p>`;
    });
};

function populateGenderSelect() {
  const genderSelect = document.getElementById("genderSelect");
  const genderValues = [...new Set(globalData.map((row) => row["Sex"]))].filter(
    (v) => v !== undefined && v !== null
  );
  genderSelect.innerHTML = `<option value="">Select Gender</option>`;
  genderValues.forEach((value) => {
    genderSelect.innerHTML += `<option value="${value}">${value}</option>`;
  });
  genderSelect.disabled = false;

  genderSelect.onchange = () => {
    const selectedGender = genderSelect.value;
    updateStats("Sex", selectedGender);
  };
}

function populateRaceSelect() {
  const raceSelect = document.getElementById("raceSelect");
  const raceValues = [...new Set(globalData.map((row) => row["Race"]))].filter(
    (v) => v !== undefined && v !== null
  );
  raceSelect.innerHTML = `<option value="">Select Race</option>`;
  raceValues.forEach((value) => {
    raceSelect.innerHTML += `<option value="${value}">${value}</option>`;
  });
  raceSelect.disabled = false;

  raceSelect.onchange = () => {
    const selectedRace = raceSelect.value;
    updateStats("Race", selectedRace);
  };
}

function changeTitle() {
  const genderSelect = document.getElementById("genderSelect").value;
  const raceSelect = document.getElementById("raceSelect").value;
  document.getElementById(
    "right_title"
  ).innerHTML = `Life Expectancy - ${genderSelect} & ${raceSelect}`;
}

let graph = 0;

function changeGraph() {
  const currentGraph = document.getElementById("graph");
  if (graph == 0) {
    currentGraph.innerHTML = `<img
              src="race_expectancy.png"
              alt="Life Expectancy Graph - Race"
              id="currentgraph"
            />`;
    graph = 1;
  } else if (graph == 1) {
    currentGraph.innerHTML = `<img
              src="trendline_expectancy.png"
              alt="Life Expectancy Graph - Trendline"
              id="currentgraph"
            />`;
    graph = 2;
  } else {
    currentGraph.innerHTML = `<img
              src="gender_expectancy.png"
              alt="Life Expectancy Graph - Gender"
              id="currentgraph"
            />`;
    graph = 0;
  }
}

function updateStats(rowKey, rowValue) {
  changeTitle();
  if (!rowValue) return;

  // Filter data by selected row value (Gender or Race)
  const filtered = globalData.filter((row) => String(row[rowKey]) === rowValue);
  const columnData = filtered
    .map((row) => row[dataColumn])
    .filter((val) => typeof val === "number");

  if (columnData.length === 0) {
    document.getElementById(
      "stats"
    ).innerHTML = `<p>No numeric data found for that filter.</p>`;
    return;
  }

  const mean = columnData.reduce((a, b) => a + b, 0) / columnData.length;
  const sorted = [...columnData].sort((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];
  const mode = [...new Set(columnData)].sort(
    (a, b) =>
      columnData.filter((v) => v === b).length -
      columnData.filter((v) => v === a).length
  )[0];
  const min = Math.min(...columnData);
  const max = Math.max(...columnData);
  const stdDev = Math.sqrt(
    columnData.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) /
      columnData.length
  );
  document
    .getElementById("stats")
    .rows[1].cells.item(1).innerHTML = `${columnData.length}`;
  document
    .getElementById("stats")
    .rows[2].cells.item(1).innerHTML = `${mean.toFixed(2)}`;
  document
    .getElementById("stats")
    .rows[3].cells.item(1).innerHTML = `${median.toFixed(2)}`;
  document
    .getElementById("stats")
    .rows[4].cells.item(1).innerHTML = `${mode.toFixed(2)}`;
  document
    .getElementById("stats")
    .rows[5].cells.item(1).innerHTML = `${min.toFixed(2)}`;
  document
    .getElementById("stats")
    .rows[6].cells.item(1).innerHTML = `${max.toFixed(2)}`;
}
