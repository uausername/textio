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
    },
    {
      title: 'Heading 1',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleHeading({ level: 1 }).run()
      }
    },
    {
      title: 'Heading 2',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleHeading({ level: 2 }).run()
      }
    },
    {
      title: 'Heading 3',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleHeading({ level: 3 }).run()
      }
    },
    {
      title: 'Bullet List',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run()
      }
    },
    {
      title: 'Ordered List',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleOrderedList().run()
      }
    },
    {
      title: 'Code Block',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
      }
    },
    {
      title: 'Blockquote',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBlockquote().run()
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
