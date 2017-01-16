var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_array = array
  new_array.unshift(element)
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}

function addElementToEndOfArray(array, element) {
  new_array = array
  new_array.push(element)
  return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
