const salePriceInput = document.getElementById("sale-price-input");
const agencyFeeInput = document.getElementById("agency-fee-input");
const salePricePercent = document.getElementById("sale-price-percent");
const agencyFeePercent = document.getElementById("agency-fee-percent");
const pricePlan = document.getElementById("price-plan");
const amountAgency = document.getElementById("amount-agency");
const amountSaved = document.getElementById("amount-saved");

// Function to format numbers with commas as thousand separators
function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   // return number;
}

function calculateSavings() {
	const salePrice = parseInt(salePriceInput.value);
	const agencyFee = parseInt(agencyFeeInput.value);

	salePricePercent.textContent = salePrice + "€";
	agencyFeePercent.textContent = agencyFee + "%";

	const commissionSaved = (agencyFee / 100) * salePrice;
	const pricePlanSaved = parseInt(pricePlan.textContent.replace(",", ""));
	const totalSaved = commissionSaved - pricePlanSaved;
	console.log(totalSaved);
	console.log("Commision", commissionSaved);
	console.log("PricePlan", pricePlanSaved);

	amountAgency.textContent = "€" + formatNumber(commissionSaved);
	amountSaved.textContent = "€" + formatNumber(totalSaved);
}

salePriceInput.addEventListener("input", calculateSavings);
agencyFeeInput.addEventListener("input", calculateSavings);
