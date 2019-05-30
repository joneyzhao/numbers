
import hiker from '../src/hiker'
import { expect } from 'chai'

describe('Should Style: Answer', () => {
  it('expect 1 is 1', () => {
    expect('1').to.equal(hiker.printsNumbers(1));
  });
  it('expect 3 is 1 2 Fizz', () => {
    expect('1,2,Fizz').to.equal(hiker.printsNumbers(3));
  });
  it('expect 5 is 1 2 Fizz 4 Buzz', () => {
    expect('1,2,Fizz,4,Buzz').to.equal(hiker.printsNumbers(5));
  });
  it('expect 13 is **', () => {
    expect('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz').to.equal(hiker.printsNumbers(13));
  });
  it('expect 100 length is 100', () => {
    expect(100).to.equal(hiker.printsNumbers(100));
  });
});

