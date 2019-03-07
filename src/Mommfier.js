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
    
    for (let i = 0; i < list.length; i++) {
      if (Mommfier.isVowel(list[i])) {
        expectStr[expectStr.length] = 'mommify';
        console.log('==expectStr==1===' + expectStr);
        // Mommfier.stopUntilNotIsVowel(i);
        for (let j = i+1; j < list.length; j++) {
          if (Mommfier.isVowel(list[j])) {
            console.log('==expectStr==2===' + expectStr);
            continue;
          } 
          else {
            i = j;
            expectStr[expectStr.length] = list[i];
            console.log('==expectStr==3===' + expectStr);
            continue;
          }
        } 
        break;
      } else {
        expectStr[expectStr.length] = list[i];
        console.log('==expectStr==4===' + expectStr);
      }
    }
    
    return expectStr.join('');

    // for (let i = list.length - 1; i >= 0; i--) {
    //   if (Mommfier.isVowel(list[i])) {
    //     if (i > 0) {
    //       if (!Mommfier.isVowel(list[i - 1])) {
    //         list[i] = 'mommify';
    //       } else {
    //         list.splice(i, 1);
    //       }
    //     } else {
    //       list[i] = 'mommify';
    //     }
    //   }
    // }
    // return list.join('');
  },
  stopUntilNotIsVowel: (i) => {

  },
  isVowel: (s) => {
    return s.match(/[aeiou]/ig) ? true : false;
  }
}

export default Mommfier;
