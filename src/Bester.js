class Oreo {
  constructor(chocolateNumber) {
    this.chocolateNumber = chocolateNumber
  }
}

class TV {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Hall {
  constructor(radius) {
    this.radius = radius;
  }
}

const Bester = {
  chooseTheBest: (items) => { 
    var besterOne = items[0];

    for (let i = 0; i < items.length - 1; i++) {
      if (Bester.calculate(items[i]) < Bester.calculate(items[i+1])) {
        besterOne = items[i+1];
      }
    }
    
    return besterOne;
  },
  calculate: (item) => {
    let result = 0;

    if (item instanceof Hall) {
      result = item.radius;
    } else if (item instanceof TV) {
      result = item.width * item.height;
    } else {
      result = item.chocolateNumber;
    }
    return result;
  }
}


export { Bester, Oreo, TV, Hall};
