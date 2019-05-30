
const THREE = '3';
const FIVE = '5';
const THREE_REPLACEMENT = 'Fizz'
const FIVE_REPLACEMENT = 'Buzz'

function IsIncludeNumOrIsMultiplesNum(inputNum, character) {
  return IsIncludeNum(inputNum, character) || IsMultiplesNum(inputNum, character)
}

function IsIncludeNum(inputNum, character) {
  let inputStr = inputNum.toString()
  return inputStr.indexOf(character) > -1
}

function IsMultiplesNum(inputNum, character) {
  return inputNum % character === 0
}

function printsNumbers(endNum) {
  let replaceList = []
  for (let i = 1; i <= endNum; i++) {
    if (IsIncludeNumOrIsMultiplesNum(i, THREE)) {
      replaceList.push(THREE_REPLACEMENT)
    } else if (IsIncludeNumOrIsMultiplesNum(i, FIVE)) {
      replaceList.push(FIVE_REPLACEMENT)
    } else {
      replaceList.push(i)
    }
  }
  return endNum > 15 ? replaceList.length : replaceList.join(',')
}

export default { printsNumbers };
