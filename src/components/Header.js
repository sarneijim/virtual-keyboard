import { headerBgColor } from '../utils/Colors'
import { Lightning } from '@lightningjs/sdk'

export class Header extends Lightning.Component {
  static _template() {
    const headerSize = { width: window.innerWidth, height: 50 }
    return {
      rect: true,
      w: headerSize.width,
      h: headerSize.height,
      color: headerBgColor,
      Title: {
        text: { text: 'Virtual Keyboard' },
      },
    }
  }
}
