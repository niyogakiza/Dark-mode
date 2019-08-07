import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'

let store = {}

/** Mock the localstorage.getItem to return the value stored in the given key */
jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
  return store[key]
})

/** Mock the localstorage.setItem to return the value stored in the given key */
jest.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value )=> {
  return (store[key] = value + '')
})

/** Mock the localStorage.clear method to clear the store */
jest.spyOn(Storage.prototype, 'clear').mockImplementation(() => {
  store = {}
})