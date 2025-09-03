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
        // Allow opening anywhere for now.
        startOfLine: false,
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
          let selectedIndex = 0

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
            container.style.borderRadius = '6px'
            container.style.padding = '4px'
            container.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
            container.style.zIndex = '9999'
            container.style.minWidth = '180px'
            selectedIndex = Math.min(selectedIndex, Math.max(items.length - 1, 0))
            items.forEach((item: SlashCommandItem, i: number) => {
              const el = document.createElement('div')
              el.textContent = item.title
              el.style.padding = '6px 8px'
              el.style.cursor = 'pointer'
              el.style.userSelect = 'none'
              el.style.borderRadius = '4px'
              if (i === selectedIndex) {
                el.style.background = '#eef2ff'
              }
              el.addEventListener('mouseover', () => {
                selectedIndex = i
                const children = Array.from(container!.children) as HTMLDivElement[]
                children.forEach((c, j) => {
                  c.style.background = j === selectedIndex ? '#eef2ff' : 'transparent'
                })
              })
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
              const { event } = props
              // @ts-expect-error - Suggestion passes items in props
              const items = props.items as SlashCommandItem[]
              if (event.key === 'Escape') {
                container?.remove()
                return true
              }
              if (!container || !items?.length) return false
              if (event.key === 'ArrowDown') {
                selectedIndex = (selectedIndex + 1) % items.length
                update(props)
                return true
              }
              if (event.key === 'ArrowUp') {
                selectedIndex = (selectedIndex - 1 + items.length) % items.length
                update(props)
                return true
              }
              if (event.key === 'Enter') {
                // @ts-expect-error - Suggestion command expects the selected item
                props.command(items[selectedIndex])
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
