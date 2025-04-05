/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/
const convertButton = document.getElementById("convert-btn");
const input = document.getElementById("input");

convertButton.addEventListener("click", () => {
	const value = input.value;

	if (isNaN(value) || value < 0) {
		alert("Veuillez entrer un nombre valide et positif.");
		return;
	}

	// const metersToFeet = (value * 3.281).toFixed(2);
	const metersToFeet = Math.round(value * 3.281 * 100) / 100;

	const feetToMeters = Math.round((value / 3.281) * 100) / 100;

	const litersToGallons = Math.round(value * 0.264 * 100) / 100;
	const gallonsToLiters = Math.round((value / 0.264) * 100) / 100;

	const kilogramsToPounds = Math.round(value * 2.204 * 100) / 100;
	const poundsToKilograms = Math.round((value / 2.204) * 100) / 100;
	document.getElementById("length-result").textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
	document.getElementById("volume-result").textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
	document.getElementById("mass-result").textContent = `${value} kilograms = ${kilogramsToPounds} pounds | ${value} pounds = ${poundsToKilograms} kilograms`;
});
