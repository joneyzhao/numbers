const FIXED_COST = 50;
const RATE_CHARGE_DISTANCE = 10;
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
    let peakTimeMultiple = this.taxi.getPeakTimeMultiple();
    let preTaxiCost = this.getPreTaxiCost();
    let postTaxiCost = this.getPostTaxiCost();
    
    return (preTaxiCost + postTaxiCost) * peakTimeMultiple;
  }

  getPreTaxiCost() {
    let totalKms = this.taxi.getTotalKms();
    let preChargingInterval = Math.min(RATE_CHARGE_DISTANCE, totalKms);
    return preChargingInterval * this.taxi.getPreACRate();
  }

  getPostTaxiCost() {
    let totalKms = this.taxi.getTotalKms();
    let postChargingInterval = Math.max(0, totalKms - RATE_CHARGE_DISTANCE);
    return postChargingInterval * this.taxi.getPostACRate();
  }

}

export default Receipt;
