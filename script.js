function convertTemp() {
  var input = document.getElementById("temperature").value;

  if (input.trim() === "") {
    alert("Please enter a temperature value.");
    return;
  }

  if (!isNaN(input)) {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultF = document.getElementById("result");

    if (unit === "farenheit") {
      var result = (temperature * 9) / 5 + 32;
      resultF.value = result.toFixed(2) + " \u00B0F";
    } else {
      var result = ((temperature - 32) * 5) / 9;
      resultF.value = result.toFixed(2) + " \u00B0C";
    }
  } else {
    alert("Please enter valid number for the Temperature.");
  }
}
