import { Lightning } from '@lightningjs/sdk'
import { keyboardWidth } from '../../utils/Constants'

const data = []
const cols = 3

export class KeyGroup extends Lightning.Component {
  construct() {
    this.cols = cols
    this.data = data
    this.keyComponent = {}
  }
  static _template() {
    return {
      w: keyboardWidth,
      rect: true,
      flex: {
        direction: 'row',
        wrap: true,
      },
    }
  }
  _init() {
    this.index = 0
    this.children = this.data.map(item => {
      return {
        type: this.keyComponent,
        item,
      }
    })
  }
  _getFocused() {
    // index is -1 when the group receives the focus
    if (this.index === -1) {
      this.index = this.focusIndex
    }
    return this.children[this.index]
  }
  _handleLeft() {
    this.changeSelection(-1)
  }
  _handleRight() {
    this.changeSelection(+1)
  }
  _handleUp() {
    this.changeSelection(-this.cols)
  }
  _handleDown() {
    this.changeSelection(+this.cols)
  }
  _handleEnter() {
    this.signal('updateText', this.data[this.index].operation, this.data[this.index].value)
  }
  changeSelection(shift) {
    this.index = this.index + shift
  }
}
