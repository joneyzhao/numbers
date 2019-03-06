const Mommfier = {
  mommify: (str) => {
    console.log('===str==' + str)
    let vowelsCount = 0;
    let vowelRate = 0;
    vowelsCount = (str.match(/[aeiou]/ig) || []).length;
    vowelRate = vowelsCount/str.length;
    console.log('===vowelRate==' + vowelRate)
    console.log('===vowelsCount==' + vowelsCount)
    if (vowelsCount < 1 || vowelRate < 0.3) {
      return str;
    } else {
      console.log('===str.length==' + str.length)
      if (str.length == 1) {
        console.log('===vowelsCount=22=')
        return 'mommify';
      } else {
        let list = str.split('');
        console.log('===listLength==' + list.length)
        for (let i = list.length-1; i >= 0; i--) {
          console.log('==isVowel(list[i])==' + Mommfier.isVowel(list[i]))
          if (Mommfier.isVowel(list[i])) {
            if (i > 0) {
              if (!Mommfier.isVowel(list[i-1])) {
                list[i] = 'mommify';
              } else {
                list.splice(i,1);
              }
            } else {
              list[i] = 'mommify';
            }
          }
        }
        console.log('===list.join===' + list.join(''))
        return list.join('');
      }
    }
  },
  isVowel: (s) => {
    if (s.match(/[aeiou]/ig) && '' !== s.match(/[aeiou]/ig)) {
      return true
    } else {
      return false
    }
  }
}

export default Mommfier;
