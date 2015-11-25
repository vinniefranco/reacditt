import { Map } from 'immutable'

const StorageEngine = (() => {
  let memoryStore = Map()

  const inMemoryStorage = {
    getItem (key) {
      return memoryStore.get(key)
    },
    setItem (key, value) {
      memoryStore.set('key', value)
    }
  }

  return window.localStorage || inMemoryStorage
})()

export default StorageEngine
