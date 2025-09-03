import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import SlashCommand, { SlashCommandItem } from '../extensions/slash-command'

export function createEditor(element: HTMLElement) {
  const items: SlashCommandItem[] = [
    {
      title: 'Bold',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBold().run()
      }
    },
    {
      title: 'Italic',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleItalic().run()
      }
    }
  ]

  return new Editor({
    element,
    extensions: [
      StarterKit,
      SlashCommand.configure({ items })
    ],
    content: '<p>Type / to open command menu</p>'
  })
}
