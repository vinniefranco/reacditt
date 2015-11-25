import { Set } from 'immutable'

export function set(key, items) {
  localStorage.setItem(key, items.toArray())
}

export function get(key) {
  const rawItems = (localStorage.getItem(key) || '').split(',')
  return Set(rawItems)
}
