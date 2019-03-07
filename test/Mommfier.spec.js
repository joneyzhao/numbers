import Mommfier from '../src/Mommfier'
import {expect} from 'chai'

describe('Mommfier', () => {
  it('should not change an empty string', () => {
    expect('').to.equal(Mommfier.mommify(''));
  });

  it('should mommify a vowel', () => {
    expect('mommify').to.equal(Mommfier.mommify('i'));
  });

  it('should not mommify a consonant', () => {
    expect('b').to.equal(Mommfier.mommify('b'));
  });

  it('should mommify multiple vowels', () => {
    expect('mommify').to.equal(Mommfier.mommify('aeiou'));
  });

  it('should mommify zhh vowels', () => {
    expect('bmommifybb').to.equal(Mommfier.mommify('baeioubb'));
  });

  it('should mommify the string which has vowels more than 30%', () => {
    expect('hmommifys').to.equal(Mommfier.mommify('his'));
  });

  it('should not mommify the string which has vowels less than 30%', () => {
    expect('hard').to.equal(Mommfier.mommify('hard'));
  });
})
