const FIXED_COST = 50;
const SALES_TAX_RATE = 0.1;

class Receipt {
  constructor(taxiOrder) {
    this.taxiOrder = taxiOrder;
  }

  getTotalCost() {
    let totalCost = FIXED_COST;

    totalCost += this.taxiOrder.calculateTaxiCost();

    return totalCost * (1 + SALES_TAX_RATE);
  }

}

export default Receipt;
