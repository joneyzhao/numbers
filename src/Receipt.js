const FIXED_COST = 50;
const PEAK_TIME_MULTIPLIER = 1.2;
const OFF_PEAK_MULTIPLIER = 1.0;
const RATE_CHARGE_DISTANCE = 10;
const PRE_RATE_CHARGE_NON_AC_RATE = 15;
const POST_RATE_CHARGE_NON_AC_RATE = 12;
const PRE_RATE_CHARGE_AC_RATE = 20;
const POST_RATE_CHARGE_AC_RATE = 17;
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
    let preTaxiCost = this.getPreTaxiCost();
    let postTaxiCost = this.getPostTaxiCost();
    let taxiCost = preTaxiCost + postTaxiCost;
    
    return taxiCost ;
  }

  getPreTaxiCost() {
    let totalKms = this.taxi.getTotalKms();
    let peakTimeMultiple = this.getPeakTimeMultiple();
    let preChargingInterval = Math.min(RATE_CHARGE_DISTANCE, totalKms);
    return preChargingInterval * this.getPreACRate() * peakTimeMultiple;
  }
  getPostTaxiCost() {
    let totalKms = this.taxi.getTotalKms();
    let peakTimeMultiple = this.getPeakTimeMultiple();
    let postChargingInterval = Math.max(0, totalKms - RATE_CHARGE_DISTANCE);
    return postChargingInterval * this.getPostACRate() * peakTimeMultiple;
  }

  getPeakTimeMultiple() {
    return this.taxi.isPeakTime() ? PEAK_TIME_MULTIPLIER : OFF_PEAK_MULTIPLIER;
  }

  getPreACRate() {
    return this.taxi.isAirConditioned() ? PRE_RATE_CHARGE_AC_RATE : PRE_RATE_CHARGE_NON_AC_RATE;
  }
  getPostACRate() {
    return this.taxi.isAirConditioned() ? POST_RATE_CHARGE_AC_RATE : POST_RATE_CHARGE_NON_AC_RATE;
  }
}

export default Receipt;
