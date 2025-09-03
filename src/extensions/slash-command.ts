import { Extension, Range, Editor } from '@tiptap/core'
import Suggestion, { SuggestionKeyDownProps } from '@tiptap/suggestion'

export interface SlashCommandItem {
  title: string
  command: ({ editor, range }: { editor: Editor; range: Range }) => void
}

export default Extension.create<{ items: SlashCommandItem[] }>({
  name: 'slash-command',

  addOptions() {
    return {
      items: []
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        char: '/',
        startOfLine: true,
        items: ({ query }) => {
          return this.options.items.filter(item =>
            item.title.toLowerCase().startsWith(query.toLowerCase())
          )
        },
        command: ({ editor, range, props }) => {
          props.command({ editor, range })
        },
        render: () => {
          let container: HTMLDivElement | null = null

          const update = (props: any) => {
            if (!container) return
            const { clientRect, items } = props
            container.innerHTML = ''
            const rect = clientRect()
            container.style.position = 'absolute'
            container.style.left = rect.left + 'px'
            container.style.top = rect.bottom + 'px'
            container.style.background = 'white'
            container.style.border = '1px solid #ccc'
            container.style.borderRadius = '4px'
            container.style.padding = '4px'
            container.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
            items.forEach((item: SlashCommandItem) => {
              const el = document.createElement('div')
              el.textContent = item.title
              el.style.padding = '2px 6px'
              el.style.cursor = 'pointer'
              el.addEventListener('mousedown', e => {
                e.preventDefault()
                props.command(item)
              })
              container!.appendChild(el)
            })
          }

          return {
            onStart: props => {
              container = document.createElement('div')
              update(props)
              document.body.appendChild(container!)
            },
            onUpdate: props => {
              update(props)
            },
            onKeyDown(props: SuggestionKeyDownProps) {
              if (props.event.key === 'Escape') {
                container?.remove()
                return true
              }
              return false
            },
            onExit: () => {
              container?.remove()
            }
          }
        }
      })
    ]
  }
})
