class Oreo {
  constructor(chocolateNumber) {
    this.chocolateNumber = chocolateNumber;
  }

  isBetterThan(oreo) {
    return this.chocolateNumber > oreo.chocolateNumber;
  }
}

class TV {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isBetterThan(tv) {
    return this.width * this.height > tv.width * tv.height;
  }
}

class Hall {
  constructor(radius) {
    this.radius = radius;
  }

  isBetterThan(hall) {
    return this.radius > hall.radius;
  }
}

const Bester = {
  chooseTheBest: (items) => { 
    var besterOne = items[0];

    for (let i = 1; i < items.length; i++) {
      // if (Bester.calculate(items[i]) < Bester.calculate(items[i+1])) {
      //   besterOne = items[i+1];
      // }
      console.log('besterOne.isBetterThan(items[i])===' + besterOne.isBetterThan(items[i]))
      if (items[i].isBetterThan(besterOne)) {
        besterOne = items[i];
      }
    }
    
    return besterOne;
  },
  // calculate: (item) => {
  //   let result = 0;

  //   if (item instanceof Hall) {
  //     result = item.radius;
  //   } else if (item instanceof TV) {
  //     result = item.width * item.height;
  //   } else {
  //     result = item.chocolateNumber;
  //   }
  //   return result;
  // }
}


export { Bester, Oreo, TV, Hall};
