function convert() {
  // Get the input value and unit of temperature to convert from
  var temperature = parseFloat(document.getElementById("temperature").value);
  var from = document.getElementById("from").value;

  // Convert the temperature to Celsius
  var celsius;
  switch (from) {
    case "celsius":
      celsius = temperature;
      break;
    case "fahrenheit":
      celsius = (temperature - 32) * 5 / 9;
      break;
    case "kelvin":
      celsius = temperature - 273.15;
      break;
    default:
      celsius = temperature;
  }

  // Convert the temperature to the desired unit
  var to = document.getElementById("to").value;
  var result;
  switch (to) {
    case "celsius":
      result = celsius;
      break;
    case "fahrenheit":
      result = (celsius * 9 / 5) + 32;
      break;
    case "kelvin":
      result = celsius + 273.15;
      break;
    default:
      result = celsius;
  }

  // Display the result
  document.getElementById("result").innerHTML = temperature + " " + from + " = " + result.toFixed(2) + " " + to;
  // document.getElementById("result").innerHTML = result;

}
