const REWORD = 'mommify';
const REGSTR = /[aeiou]/ig;
const THRESHOLD = 0.3;

const Mommfier = {
  mommify: (str) => {
    if (Mommfier.isModify(str)) {
      return Mommfier.modifiedStr(str);
    } else {
      return str;
    }
  },
  isModify: (str) => {
    let vowelsCount = (str.match(REGSTR) || []).length;
    let vowelsRate = vowelsCount / str.length; 

    return vowelsRate >= THRESHOLD;
  },
  modifiedStr: (str) => {
    let list = str.split('');
    let expectStr = '';

    for (let i = 0; i < list.length; i++) {
      let currentChar = list[i];

      if (!Mommfier.isVowel(currentChar)) {
        expectStr += currentChar;
      } else if (Mommfier.isLastContinuousVowel(i, list)) {
        expectStr += REWORD;
      }
    }

    return expectStr;
  },
  isLastContinuousVowel: (index, list) => {
    if(Mommfier.isVowel(list[index])) {
      return !((list.length > index + 1) && Mommfier.isVowel(list[index + 1]))
    }

    return  false;
  },
  isVowel: (s) => {
    return s.match(REGSTR) ? true : false;
  }
}

export default Mommfier;
