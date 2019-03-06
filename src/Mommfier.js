const Mommfier = {
  mommify: (str) => {
    let vowelsCount = 0;
    let vowelRate = 0;
    vowelsCount = (str.match(/[aeiou]/ig) || []).length;
    vowelRate = vowelRate/str.length;

    if (vowelsCount < 1 || vowelRate < 0.3) {
      return str;
    } else {
      if (list.length == 1) {
        return 'mommify';
      } else {
        let list = str.split('');
        for (let i = 1; i < list.length; i++) {
          if (isVowel(list[i])) {
            if (!isVowel(list[i-1])) {
              list[i] = 'mommify';
            } else {
              list.splice(i,1);
            }
          }
        }
        return list.join('');
      }
    }
  },
  isVowel: (s) => {
    return (s.match(/[aeiou]/ig) == true);
  }
}

export default Mommfier;
