const Mommfier = {
  mommify: (str) => {
    console.log('str====' + str);
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
    let expectStr = '';

    for (let i = 0; i < list.length; i++) {
      let currentChar = list[i];

      console.log('i====' + i);
      console.log('list====' + list);
      if (!Mommfier.isVowel(currentChar)) {
        expectStr += currentChar;
      } else if (Mommfier.isLastContinuousVowel(i, list)) {
        expectStr += 'mommify'
      }
    }
    console.log('expectStr====' + expectStr);

    return expectStr;
  },
  isLastContinuousVowel: (index, list) => {
    console.log('===index===' + index);
    console.log('===list===' + list);
    console.log('===list.length===' + list.length);
    if (index >= list.length-1) {
      return true;
    } else {
      if (Mommfier.isVowel(list[index + 1])) {
          return false;
      } else {
          return true;
      }
    }
  },
  isVowel: (s) => {
    return s.match(/[aeiou]/ig) ? true : false;
  }
}

export default Mommfier;
