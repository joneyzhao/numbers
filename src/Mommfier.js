const Mommfier = {
  mommify: (str) => {
    let vowelsCount = 0;
    let vowelsRate = 0;
    vowelsCount = (str.match(/[aeiou]/ig) || []).length;
    vowelsRate = vowelsCount/str.length;
    if (vowelsCount < 1 || vowelsRate < 0.3) {
      return str;
    } else {
      return Mommfier.modifiedStr(str);
    }
  },
  modifiedStr: (str) => {
    let list = str.split('');
    for (let i = list.length - 1; i >= 0; i--) {
      if (Mommfier.isVowel(list[i])) {
        if (i > 0) {
          if (!Mommfier.isVowel(list[i - 1])) {
            list[i] = 'mommify';
          } else {
            list.splice(i, 1);
          }
        } else {
          list[i] = 'mommify';
        }
      }
    }
    return list.join('');
  },
  isVowel: (s) => {
    return s.match(/[aeiou]/ig) ? true : false;
  }
}

export default Mommfier;
