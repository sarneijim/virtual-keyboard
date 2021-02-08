import { Launch } from '@lightningjs/sdk'
import { bgColor } from './utils/Colors'
import App from './App.js'

export default function() {
  const options = { stage: { w: window.innerWidth, h: window.innerHeight, clearColor: bgColor } }
  options.keys = {
    8: 'Delete',
  }
  return Launch(App, options, ...arguments)
}
