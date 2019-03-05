const FIXED_COST = 50;
const PEAK_TIME_MULTIPLIER = 1.2;
const OFF_PEAK_MULTIPLIER = 1.0;
const RATE_COST_DISTANCE = 10;
const PRE_RATE_COST_NON_AC_RATE = 15;
const POST_RATE_COST_NON_AC_RATE = 12;
const PRE_RATE_COST_AC_RATE = 20;
const POST_RATE_COST_AC_RATE = 17;
const SALES_TAX_RATE = 0.1;

class Receipt {
  constructor(taxi) {
    this.taxi = taxi;
  }

  getTotalCost() {
    let totalCost = 0;
    // fixed cost
    totalCost += FIXED_COST;

    // add taxi cost
    totalCost += this.calculateTaxiCost();

    return totalCost * (1 + SALES_TAX_RATE);
  }

  calculateTaxiCost() {
    let taxiCost = 0;
    let totalKms = this.taxi.getTotalKms();
    let peakTimeMultiple = this.taxi.isPeakTime() ? PEAK_TIME_MULTIPLIER : OFF_PEAK_MULTIPLIER;
    
    if (this.taxi.isAirConditioned()) {
      taxiCost = Math.min(RATE_COST_DISTANCE, totalKms) * PRE_RATE_COST_AC_RATE;
      taxiCost += Math.max(0, totalKms - RATE_COST_DISTANCE) * POST_RATE_COST_AC_RATE;
    }
    else {
      taxiCost = Math.min(RATE_COST_DISTANCE, totalKms) * PRE_RATE_COST_NON_AC_RATE;
      taxiCost += Math.max(0, totalKms - RATE_COST_DISTANCE) * POST_RATE_COST_NON_AC_RATE;
    }
    return taxiCost * peakTimeMultiple;
  }
}

export default Receipt;
