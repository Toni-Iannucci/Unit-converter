/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/
const convertButton = document.getElementById("convert-btn");
const lengthInput = document.getElementById("length-input");

convertButton.addEventListener("click", () => {
  const value = Number(lengthInput.value);
  const metersToFeet = Number(value * 3.281).toFixed(2);
  const litersToGallons = Number(value * 0.264).toFixed(2);
  const kilogramsToPounds = Number(value * 2.204).toFixed(2);
});
