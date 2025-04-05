/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/
const convertButton = document.getElementById("convert-btn");
const input = document.getElementById("input");

convertButton.addEventListener("click", () => {
	const value = input.value;

	const metersToFeet = (value * 3.281).toFixed(2);
	const feetToMeters = (value / 3.281).toFixed(2);

	const litersToGallons = (value * 0.264).toFixed(2);
	const gallonsToLiters = (value / 0.264).toFixed(2);

	const kilogramsToPounds = (value * 2.204).toFixed(2);
	const poundsToKilograms = (value / 2.204).toFixed(2);
	document.getElementById("length-result").textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
	document.getElementById("volume-result").textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
	document.getElementById("mass-result").textContent = `${value} kilograms = ${kilogramsToPounds} pounds | ${value} pounds = ${poundsToKilograms} kilograms`;
});
