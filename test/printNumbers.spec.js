
import printNumbers from '../src/printNumbers'
import { expect } from 'chai'

describe('Should Style: Answer', () => {
  it('expect 1 is 1', () => {
    expect('1').to.equal(printNumbers.printsContents(1));
  });

  it('expect 2 is 1 2', () => {
    expect('1,2').to.equal(printNumbers.printsContents(2));
  });

  // it('expect 3 is 1 2 Fizz', () => {
  //   expect('1,2,Fizz').to.equal(printNumbers.printsContents(3));
  // });
  // it('expect 4 is 1 2 Fizz 4', () => {
  //   expect('1,2,Fizz,4').to.equal(printNumbers.printsContents(4));
  // });

  // it('expect 5 is 1 2 Fizz 4 Buzz', () => {
  //   expect('1,2,Fizz,4,Buzz').to.equal(printNumbers.printsContents(5));
  // });
  // it('expect 13 is **', () => {
  //   expect('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz').to.equal(printNumbers.printsContents(13));
  // });
  // it('expect 15 is **', () => {
  //   expect('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,Fizz').to.equal(printNumbers.printsContents(15));
  // });

  // it('expect 100 length is 100', () => {
  //   expect(100).to.equal(printNumbers.printsContents(100));
  // });
});

