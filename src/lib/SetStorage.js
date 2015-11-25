import { Set } from 'immutable'
import StorageEngine from './StorageEngine'

function set (key, items) {
  StorageEngine.setItem(key, items.toArray())
}

function get (key) {
  const rawItems = (StorageEngine.getItem(key) || '').split(',')
  return Set(rawItems)
}

export default { get, set }
