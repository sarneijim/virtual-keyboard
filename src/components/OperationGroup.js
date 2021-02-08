import { keyboardBgColor, keyboardColor } from '../utils/Colors'
import { GenericKey } from './type/GenericKey'
import { KeyGroup } from './type/KeyGroup'

const data = [
  { label: 'Space', value: ' ',  operation: 'add' },
  { label: 'Delete', value: null, operation: 'delete' },
  { label: 'Clear', value: null, operation: 'clear' }
]
const cols = 3
const size = {
  width: 120,
  height: 60,
}

export class OperationGroup extends KeyGroup {
  _construct() {
    this.cols = cols
    this.data = data
    this.keyComponent = ListItem
  }
  changeSelection(shift) {
    this.index = this.index + shift
    // If new index falls out of the OperationGroup,
    // move the focus to the CharacterGroup
    if (this.index < 0 || this.index > 2) {
      const focusIndex = this.index < 0 ? 36 + this.index * 2 : 2 * (this.index % 3)
      this.index = -1
      this.fireAncestors('$changeFocus', 'CharacterGroup', focusIndex)
    }
  }
}

class ListItem extends GenericKey {
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
        scale: 0.7,
        text: {
          textColor: keyboardColor,
        },
      },
    }
  }
}
