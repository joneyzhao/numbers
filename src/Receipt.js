const FIXED_COST = 50;
const PEAK_TIME_MULTIPLIER = 1.2;
const OFF_PEAK_MULTIPLIER = 1.0;
const RATE_CHANGE_DISTANCE = 10;
const PRE_RATE_CHANGE_NON_AC_RATE = 15;
const POST_RATE_CHANGE_NON_AC_RATE = 12;
const PRE_RATE_CHANGE_AC_RATE = 20;
const POST_RATE_CHANGE_AC_RATE = 17;
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
    let PreChargingInterval = Math.min(RATE_CHANGE_DISTANCE, totalKms);
    let PostChargingInterval = Math.max(0, totalKms - RATE_CHANGE_DISTANCE);
    let PreTaxiCost = 0;
    let PostTaxiCost = 0;

    PreTaxiCost = PreChargingInterval * (this.taxi.isAirConditioned() ? PRE_RATE_CHANGE_AC_RATE : PRE_RATE_CHANGE_NON_AC_RATE);
    PostTaxiCost = PostChargingInterval * (this.taxi.isAirConditioned() ? POST_RATE_CHANGE_AC_RATE : POST_RATE_CHANGE_NON_AC_RATE);
    taxiCost = (PreTaxiCost + PostTaxiCost) * peakTimeMultiple;

    return taxiCost;
  }
}

export default Receipt;
