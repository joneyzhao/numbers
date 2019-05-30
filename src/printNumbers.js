

function printsContents(endNum) {
  let replaceList = []
  for (let i = 1; i <= endNum; i++) {
    replaceList.push(i)
  }
  return replaceList.join(',')
}

export default { printsContents };
