const FIXED_COST = 50;
const SALES_TAX_RATE = 0.1;

class Receipt {
  constructor(taxi) {
    this.taxi = taxi;
  }

  getTotalCost() {
    let totalCost = FIXED_COST;

    totalCost += this.taxi.calculateTaxiCost();

    return totalCost * (1 + SALES_TAX_RATE);
  }

}

export default Receipt;
