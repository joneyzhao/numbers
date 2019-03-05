const PEAK_TIME_MULTIPLIER = 1.2;
const OFF_PEAK_MULTIPLIER = 1.0;
const PRE_RATE_CHARGE_NON_AC_RATE = 15;
const POST_RATE_CHARGE_NON_AC_RATE = 12;
const PRE_RATE_CHARGE_AC_RATE = 20;
const POST_RATE_CHARGE_AC_RATE = 17;
const RATE_CHARGE_DISTANCE = 10;

class TaxiOrder{
  constructor(airConditioned, totalKms, peakTime) {
    this.airConditioned = airConditioned;
    this.totalKms = totalKms;
    this.peakTime = peakTime;
  }

  getPeakTimeMultiple() {
    return this.peakTime ? PEAK_TIME_MULTIPLIER : OFF_PEAK_MULTIPLIER;
  }

  getPreACRate() {
    return this.airConditioned ? PRE_RATE_CHARGE_AC_RATE : PRE_RATE_CHARGE_NON_AC_RATE;
  }

  getPostACRate() {
    return this.airConditioned ? POST_RATE_CHARGE_AC_RATE : POST_RATE_CHARGE_NON_AC_RATE;
  }

  calculateTaxiCost() {
    let peakTimeMultiple = this.getPeakTimeMultiple();
    let preTaxiCost = this.getPreTaxiCost();
    let postTaxiCost = this.getPostTaxiCost();

    return (preTaxiCost + postTaxiCost) * peakTimeMultiple;
  }

  getPreTaxiCost() {
    let totalKms = this.totalKms;
    let preChargingInterval = Math.min(RATE_CHARGE_DISTANCE, totalKms);
    return preChargingInterval * this.getPreACRate();
  }

  getPostTaxiCost() {
    let totalKms = this.totalKms;
    let postChargingInterval = Math.max(0, totalKms - RATE_CHARGE_DISTANCE);
    return postChargingInterval * this.getPostACRate();
  }

}

export default TaxiOrder;
