import { expect } from 'chai'

import { getMenu, addSubreddit } from '../../src/actions/menuActions'

describe('menuActions', () => {
  describe('getMenu()', () => {
    it('returns items from storage.get("reacditt_menu") as a MENU_ITEMS_LOADED action', () => {
      const fakeDispatch = (response) => response
      let givenKey

      const fakeStorage = {
        get(key) {
          givenKey = key

          return ['one', 'two', 'three']
        }
      }

      expect(getMenu(fakeStorage)(fakeDispatch)).to.deep.equal({
        type: 'MENU_ITEMS_LOADED', items: ['one', 'two', 'three']
      })

      expect(givenKey).to.equal('reacditt_menu')
    })
  })
})
