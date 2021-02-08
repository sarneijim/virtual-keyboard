import { Lightning } from '@lightningjs/sdk'
import { Header } from './components/Header'
import { Keyboard } from './components/Keyboard'
import { keyboardWidth } from './utils/Constants'

const width = window.innerWidth
export default class App extends Lightning.Component {
  static _template() {
    return {
      Header: {
        type: Header
      },
      Keyboard: { type: Keyboard, x: (width - keyboardWidth) / 2, y: 100 }
    }
  }
  _getFocused() {
    return this.tag('Keyboard')
  }
}