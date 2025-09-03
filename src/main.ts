import { createEditor } from './editor/index'

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#editor') as HTMLElement | null
  if (element) {
    createEditor(element)
  }
})
