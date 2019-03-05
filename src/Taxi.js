const PEAK_TIME_MULTIPLIER = 1.2;
const OFF_PEAK_MULTIPLIER = 1.0;
const PRE_RATE_CHARGE_NON_AC_RATE = 15;
const POST_RATE_CHARGE_NON_AC_RATE = 12;
const PRE_RATE_CHARGE_AC_RATE = 20;
const POST_RATE_CHARGE_AC_RATE = 17;

class Taxi{
  constructor(airConditioned, totalKms, peakTime) {
    this.airConditioned = airConditioned;
    this.totalKms = totalKms;
    this.peakTime = peakTime;
  }

  isAirConditioned() {
    return this.airConditioned;
  }

  getTotalKms() {
    return this.totalKms;
  }

  isPeakTime() {
    return this.peakTime;
  }

  getPeakTimeMultiple() {
    return this.isPeakTime() ? PEAK_TIME_MULTIPLIER : OFF_PEAK_MULTIPLIER;
  }

  getPreACRate() {
    return this.isAirConditioned() ? PRE_RATE_CHARGE_AC_RATE : PRE_RATE_CHARGE_NON_AC_RATE;
  }

  getPostACRate() {
    return this.isAirConditioned() ? POST_RATE_CHARGE_AC_RATE : POST_RATE_CHARGE_NON_AC_RATE;
  }
}

export default Taxi;
