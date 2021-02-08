import { focusKeyboardColor, keyboardBgColor, keyboardColor } from '../../utils/Colors'
import { Lightning } from '@lightningjs/sdk'

const size = {
  width: 60,
  height: 60,
}

export class GenericKey extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: size.width,
      h: size.height,
      color: keyboardBgColor,
      alpha: 0.8,
      flex: {
        alignContent: 'center',
        justifyContent: 'center',
      },
      Label: {
        text: {
          textColor: keyboardColor,
        },
      },
    }
  }

  _init() {
    this.patch({ Label: { text: { text: this.item.label } } })
  }
  _focus() {
    this.patch({
      smooth: { alpha: 1, scale: 1.2 },
      Label: { text: { textColor: focusKeyboardColor } },
    })
  }
  _unfocus() {
    this.patch({ smooth: { alpha: 0.8, scale: 1 }, Label: { text: { textColor: keyboardColor } } })
  }
}
