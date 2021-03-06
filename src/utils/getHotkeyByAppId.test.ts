import { Hotkeys } from '../main/store'
import { getHotkeyByAppId } from './getHotkeyByAppId'

const cases: [Hotkeys, string, ReturnType<typeof getHotkeyByAppId>][] = [
  // Does not exist
  [{}, '', undefined],
  [{}, 'com.example', undefined],
  [{ s: 'com.apple.Safari' }, 'com.example', undefined],
  // Exists
  [{ s: 'com.apple.Safari' }, 'com.apple.Safari', 's'],
  [{ s: 'com.apple.Safari', e: 'com.example' }, 'com.apple.Safari', 's'],
  [{ s: 'com.apple.Safari', e: 'com.example' }, 'com.example', 'e'],
]

test.each(cases)('given %p return %p', (hotkeys, appId, expected) => {
  expect(getHotkeyByAppId(hotkeys, appId)).toBe(expected)
})
