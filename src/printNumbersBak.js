// 重构最终版
const THREE = '3'
const FIVE = '5'
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

function printsContents(endNum) {
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


// 1
function printsContents(endNum) {
  return endNum.toString()
}

// 2
function printsContents(endNum) {
  let replaceList = []
  for (let i = 1; i <= endNum; i++) {
    replaceList.push(i)
  }
  return replaceList.join(',')
}

// 3 4
function IsIncludeThree(inputNum) {
  let inputStr = inputNum.toString()
  return inputStr.indexOf(3) > -1
}

function IsMultiplesThree(inputNum) {
  return inputNum % 3 === 0
}

function printsContents(endNum) {
  let replaceList = []
  for (let i = 1; i <= endNum; i++) {
    if (IsIncludeThree(i) || IsMultiplesThree(i)) {
      replaceList.push('Fizz')
    } else {
      replaceList.push(i)
    }
  }
  return replaceList.join(',')
}

// 5 13 15
function IsIncludeThree(inputNum) {
  let inputStr = inputNum.toString()
  return inputStr.indexOf(3) > -1
}

function IsMultiplesThree(inputNum) {
  return inputNum % 3 === 0
}

function IsIncludeFive(inputNum) {
  let inputStr = inputNum.toString()
  return inputStr.indexOf(5) > -1
}

function IsMultiplesFive(inputNum) {
  return inputNum % 5 === 0
}

function printsContents(endNum) {
  let replaceList = []
  for (let i = 1; i <= endNum; i++) {
    if (IsIncludeThree(i) || IsMultiplesThree(i)) {
      replaceList.push('Fizz')
    } else if (IsIncludeFive(i) || IsMultiplesFive(i)) {
      replaceList.push('Buzz')
    } else {
      replaceList.push(i)
    }
  }
  return replaceList.join(',')
}


export default { printsContents };
