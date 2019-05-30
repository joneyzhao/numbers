
const THREE = '3'
const FIVE = '5'
const THREE_REPLACEMENT = 'Fizz'
const FIVE_REPLACEMENT = 'Buzz'
const THREE_FIVE_REPLACEMENT = 'FizzBuzz'

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

function printsContents(endNum) {
  let replaceList = []
  for (let i = 1; i <= endNum; i++) {
    let str = '';
    if (IsIncludeNumOrIsMultiplesNum(i, THREE)) {
      str = THREE_REPLACEMENT
    }
    if (IsIncludeNumOrIsMultiplesNum(i, FIVE)) {
      str += FIVE_REPLACEMENT
    }
    replaceList.push(str || i)
  }
  return replaceList.join(',')
}
export default { printsContents };
