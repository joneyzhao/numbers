
import printNumbers from '../src/printNumbers'
import { expect } from 'chai'

describe('Should Style: Answer', () => {
  it('expect 1 is 1', () => {
    expect('1').to.equal(printNumbers.printsContents(1));
  });

  it('expect 2 is 1 2', () => {
    expect('1,2').to.equal(printNumbers.printsContents(2));
  });

  it('expect 3 is 1 2 Fizz', () => {
    expect('1,2,Fizz').to.equal(printNumbers.printsContents(3));
  });
  it('expect 4 is 1 2 Fizz 4', () => {
    expect('1,2,Fizz,4').to.equal(printNumbers.printsContents(4));
  });

  it('expect 5 is 1 2 Fizz 4 Buzz', () => {
    expect('1,2,Fizz,4,Buzz').to.equal(printNumbers.printsContents(5));
  });
  it('expect 13 is **', () => {
    expect('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz').to.equal(printNumbers.printsContents(13));
  });
  it('expect 15 is **', () => {
    expect('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz').to.equal(printNumbers.printsContents(15));
  });

  it('expect 35 is **', () => {
    expect('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,Fizz,Fizz,Fizz,Fizz,FizzBuzz').to.equal(printNumbers.printsContents(35));
  });

  it('expect 53 is **', () => {
    expect('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,Fizz,Fizz,Fizz,Fizz,FizzBuzz,Fizz,Fizz,Fizz,Fizz,Buzz,41,Fizz,Fizz,44,FizzBuzz,46,47,Fizz,49,Buzz,FizzBuzz,Buzz,FizzBuzz').to.equal(printNumbers.printsContents(53));
  });

  // it('expect 100 length is 100', () => {
  //   expect(100).to.equal(printNumbers.printsContents(100));
  // });
});

