import { Lightning } from '@lightningjs/sdk'
import { CharacterGroup } from './CharacterGroup'
import { OperationGroup } from './OperationGroup'
import { inputBgColor, inputColor } from '../utils/Colors'
import { keyboardWidth } from '../utils/Constants'

export class Keyboard extends Lightning.Component {
  static _template() {
    return {
      scale: 0.7,
      TextField: {
        texture: Lightning.Tools.getRoundRect(
          keyboardWidth,
          60 /* h */,
          4 /* radius */,
          3 /* strokeWidth */,
          inputColor,
          true /* fill */,
          inputBgColor
        ),
        flex: {
          alignContent: "center",
          justifyContent: "flex-end"
        },
        Input: {
          clipping: true,
          y: 2,
          w: keyboardWidth - 20,
          flex: {
            alignContent: "center",
            justifyContent: "flex-end"
          },
          TextValue: {
            x: -4,
            text: { text: "", textColor: inputColor }
          },
          BarAnimation: {
            x: -10,
            text: { text: "|", textColor: inputColor, alpha: 1 }
          }
        }
      },
      CharacterGroup: {
        y: 80,
        type: CharacterGroup,
        signals: { updateText: true },
        focusIndex: 0
      },
      OperationGroup: {
        y: 450,
        type: OperationGroup,
        signals: { updateText: true },
        focusIndex: 0
      }
    }
  }
  _init() {
    this.inputText = ''
    this._setState('CharacterGroup')
    this.barAnimation = this.tag('BarAnimation').animation({
      duration: 1.5,
      repeat: -1,
      actions: [{ p: 'alpha', v: { 0: 0, 0.65: 0, 0.7: 1, 1: 1 } }],
    })
    this.barAnimation.start()
  }
  static _states() {
    return [
      class OperationGroup extends this {
        _getFocused() {
          return this.tag('OperationGroup')
        }
      },
      class CharacterGroup extends this {
        _getFocused() {
          return this.tag('CharacterGroup')
        }
      },
    ]
  }
  $changeFocus(componentName, focusIndex) {
    this.tag(componentName).patch({ focusIndex: focusIndex })
    this._setState(componentName)
  }
  updateText(operation = 'add', value = null) {
    this.inputText = this.resolveAction(operation, this.inputText, value)
    this.tag('TextValue').patch({ text: { text: this.inputText } })
  }
  resolveAction(operation, text, value) {
    switch (operation) {
      case 'add':
        return text + value
      case 'clear':
        return ''
      case 'delete':
        return text.slice(0, -1)
      default:
        return text
    }
  }
  _handleDelete() {
    this.updateText('delete')
  }
}
