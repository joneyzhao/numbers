
import {expect} from 'chai'
import { Bester, Oreo, TV, Hall } from '../src/Bester'

describe('Bester', () => {
  it('should choose the best oreo', () => {
    const oreos = [new Oreo(2), new Oreo(1), new Oreo(3)];
    const bestOreo = Bester.chooseTheBest(oreos);

    expect(bestOreo.chocolateNumber).to.equal(3);
  });

  it('should choose the best TV', () => {
    const TVs = [new TV(20, 10), new TV(30, 10), new TV(40, 10)];
    const bestTV = Bester.chooseTheBest(TVs);

    expect(bestTV.width).to.equal(40);
    expect(bestTV.height).to.equal(10);
  });

  it('should choose the best Hall', () => {
    const Halls = [new Hall(10), new Hall(20), new Hall(30)];
    const bestHall = Bester.chooseTheBest(Halls);

    expect(bestHall.radius).to.equal(30);
  });
})

