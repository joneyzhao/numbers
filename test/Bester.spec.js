import {Bester, Oreo} from '../src/Bester'
import {expect} from 'chai'

describe('Bester', () => {
  it('should choose the best oreo', () => {
    const oreos = [new Oreo(2), new Oreo(1), new Oreo(3)];
    const bestOreo = Bester.chooseTheBest(oreos);

    expect(bestOreo.chocolateNumber).to.equal(3);
  });
})

