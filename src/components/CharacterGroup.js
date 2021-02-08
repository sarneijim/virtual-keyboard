import { GenericKey } from './type/GenericKey'
import { KeyGroup } from './type/KeyGroup'
const data = [
  { label: 'a', value: 'a', operation: 'add'},
  { label: 'b', value: 'b', operation: 'add'},
  { label: 'c', value: 'c', operation: 'add'},
  { label: 'd', value: 'd', operation: 'add'},
  { label: 'e', value: 'e', operation: 'add'},
  { label: 'f', value: 'f', operation: 'add'},
  { label: 'g', value: 'g', operation: 'add'},
  { label: 'h', value: 'h', operation: 'add'},
  { label: 'i', value: 'i', operation: 'add'},
  { label: 'j', value: 'j', operation: 'add'},
  { label: 'k', value: 'k', operation: 'add'},
  { label: 'l', value: 'l', operation: 'add'},
  { label: 'm', value: 'm', operation: 'add'},
  { label: 'n', value: 'n', operation: 'add'},
  { label: 'o', value: 'o', operation: 'add'},
  { label: 'p', value: 'p', operation: 'add'},
  { label: 'q', value: 'q', operation: 'add'},
  { label: 'r', value: 'r', operation: 'add'},
  { label: 's', value: 's', operation: 'add'},
  { label: 't', value: 't', operation: 'add'},
  { label: 'u', value: 'u', operation: 'add'},
  { label: 'v', value: 'v', operation: 'add'},
  { label: 'w', value: 'w', operation: 'add'},
  { label: 'x', value: 'x', operation: 'add'},
  { label: 'y', value: 'y', operation: 'add'},
  { label: 'z', value: 'z', operation: 'add'},
  { label: '1', value: '1', operation: 'add'},
  { label: '2', value: '2', operation: 'add'},
  { label: '3', value: '3', operation: 'add'},
  { label: '4', value: '4', operation: 'add'},
  { label: '5', value: '5', operation: 'add'},
  { label: '6', value: '6', operation: 'add'},
  { label: '7', value: '7', operation: 'add'},
  { label: '8', value: '8', operation: 'add'},
  { label: '9', value: '9', operation: 'add'},
  { label: '0', value: '0', operation: 'add'},
]
const cols = 6
const dataSize = 36

export class CharacterGroup extends KeyGroup {
  _construct() {
    this.cols = cols
    this.data = data
    this.keyComponent = GenericKey
  }
  changeSelection(shift) {
    this.index = this.index + shift
    // If new index falls out of the CharacterGroup,
    // move the focus to the OperationGroup
    if (this.index < 0 || this.index > dataSize - 1) {
      if (this.index < 0) {
        this.index += cols
      }
      const focusIndex = Math.floor((this.index % dataSize) / 2)
      this.index = -1
      this.fireAncestors('$changeFocus', 'OperationGroup', focusIndex)
    }
  }
}
