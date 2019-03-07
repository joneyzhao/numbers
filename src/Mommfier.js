const Mommfier = {
  mommify: (str) => {
    let vowelsCount = (str.match(/[aeiou]/ig) || []).length;
    let vowelsRate = vowelsCount / str.length; 
    if (vowelsCount < 1 || vowelsRate < 0.3) {
      return str;
    } else {
      return Mommfier.modifiedStr(str);
    }
  },
  modifiedStr: (str) => {
    let list = str.split('');
    let expectStr = [];
    let isContinuousVowel = false;

    for (let i = 0; i < list.length; i++) {
      if (Mommfier.isVowel(list[i])) {
        if (!isContinuousVowel) {
          expectStr[expectStr.length] = 'mommify';
          isContinuousVowel = true;
        }
      } else {
        isContinuousVowel = false;
        expectStr[expectStr.length] = list[i];
      }
    }
    
    return expectStr.join('');
  },
  isVowel: (s) => {
    return s.match(/[aeiou]/ig) ? true : false;
  }
}

export default Mommfier;
