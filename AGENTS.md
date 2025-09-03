# textio
The vibe text editor, that you can create for yourself

--Research if there already is something like the following. 
 Идея «пустого» текстового редактора, в который можно добавлять функции с помощью ИИ.  Можно добавлять и удалять разделы интерфейса, ситуативные функции, возможности обработки текста «под себя». Тоесть максимально кастомизируемый текстовый редактор с минимальным начальным интерфейсом. 

 --Короткий ответ: «Голого» текстового редактора, который сам (через ИИ) динамически добавляет/удаляет панели и функции «под пользователя» как основной сценарий — в массовом виде ещё нет. Но есть несколько очень близких классов решений и строительных блоков, на которых такой продукт реально собрать уже сейчас.

# Что уже есть и что близко к идее

1. **Сверх-кастомизируемые редакторы с ИИ-плагинами (готово «сегодня»)**

* **Emacs + gptel** — Emacs изначально “пустой”, всё — через Elisp. Пакет gptel даёт ИИ-клиента и даже «tools» (локальные функции), которые LLM может вызывать, т.е. фактически добавлять поведенческие функции по запросу. Панели/меню в Emacs тоже настраиваемы. ([GitHub][1], [blogbyben.com][2])
* **VS Code + Continue.dev / Cline** — Continue позволяет делать собственные ассистенты, «slash-команды» и Actions, то есть быстро прикручивать ситуативные функции в редактор. Сама VS Code UI панель «тонкая» и расширяется экосистемой расширений. ([docs.continue.dev][3], [Visual Studio Marketplace][4])
* **Zed AI** — позиционируется как «прозрачная, расширяемая» среда с ИИ-возможностями; направление к кастомизации и контролю пользователя явно заявлено. ([Zed][5])
* **Obsidian** — сам по себе «пустой» markdown-редактор с тысячами плагинов; есть ИИ-плагины и идеи/плагины для пользовательских команд/панелей (командные панели, риббон-иконки, макросы). Это не «ИИ добавляет панели сам», но пользователь может гибко менять интерфейс и команды. ([Obsidian][6], [Obsidian Stats][7], [Obsidian Forum][8])

2. **Конструкторы редакторов (для разработчиков) с AI-надстройкой**

* **Tiptap (на ProseMirror)** — headless-фреймворк: вы сами решаете, какие панели/меню вообще существуют. У Tiptap есть «Content AI» с готовыми AI-командами (тон, автодополнение, генерация и пр.). На этом реально собрать «пустой» редактор и включать/выключать UI-модули по подсказкам ИИ. ([Tiptap][9])
* **Lexical (Meta)** — современный модульный движок с акцентом на расширяемость и производительность; ИИ-функции легко навешиваются разработчиком. ([GitHub][10])
* Тренд инструментов, где ИИ генерирует/правит UI (для разработчиков и дизайнеров): **Google Stitch** (генерация UI кода по промпту) и **Figma Make** (динамичные интерактивные прототипы). Это не про текст, но подтверждает направление «ИИ формирует интерфейс». ([The Verge][11], [Figma][12])

3. **Исследования и прототипы «мягких/генеративных UI»**

* Работы про «генеративные и податливые интерфейсы», где ИИ по естественному языку меняет модель и интерфейс; близко к идее «ИИ добавляет разделы UI по необходимости». ([arXiv][13])
* Исследования о динамическом синтезе виджетов для редактирования визуализаций — ещё один пример автоматической сборки UI под контекст. ([ACM Digital Library][14])

# Вывод

* **Готового “из коробки” редактора, где ИИ сам проектирует/вкручивает панели на лету для конечного пользователя — не вижу.** Есть мощные пути собрать это: Emacs/VS Code/Obsidian (практично для power-users) или Tiptap/Lexical (сделать свой продукт с нуля). ([GitHub][1], [docs.continue.dev][3], [Obsidian][6], [Tiptap][9])

# Если делать MVP сейчас (реально за короткий цикл)

* Веб-путь: **Tiptap + «Content AI»** как базовый каркас. Стартовый UI — поле ввода и палитра «/». ИИ исполняет «/add panel …», «/add transform …», «/hide …» как команды, которые **монтируют/демонтируют** расширения (панели форматирования, боковые инструменты, меню). ([Tiptap][15])
* Десктоп-путь: **Obsidian** как «пустая оболочка» + набор плагинов/макросов, где LLM генерирует/изменяет пользовательские команды и последовательности (Sequence). Это даст быстрый эксперимент с «ситуативными функциями» без собственного рендеринга. ([Obsidian Stats][7])
* Для «хардкорного» уровня кастомизации: **Emacs+gptel tools** — ИИ реально может предлагать и писать elisp-функции под сценарий, а вы показываете/прячете UI-элементы. ([GitHub][1])


[1]: https://github.com/karthink/gptel?utm_source=chatgpt.com "karthink/gptel: A simple LLM client for Emacs"
[2]: https://www.blogbyben.com/2024/08/gptel-mindblowing-integration-between.html?utm_source=chatgpt.com "gptel: Mindblowing integration between Emacs and ChatGPT"
[3]: https://docs.continue.dev/getting-started/overview?utm_source=chatgpt.com "Overview - Docs | Continue"
[4]: https://marketplace.visualstudio.com/items?itemName=Continue.continue&utm_source=chatgpt.com "Continue - open-source AI code assistant - Visual Studio Marketplace"
[5]: https://zed.dev/blog/zed-ai?utm_source=chatgpt.com "Introducing Zed AI — Zed's Blog"
[6]: https://obsidian.md/plugins?utm_source=chatgpt.com "Plugins"
[7]: https://www.obsidianstats.com/plugins/custom-commands?utm_source=chatgpt.com "Custom Commands"
[8]: https://forum.obsidian.md/t/draggable-custom-command-panel/67023?utm_source=chatgpt.com "Draggable Custom Command Panel - Plugins ideas"
[9]: https://tiptap.dev/docs/editor/getting-started/overview?utm_source=chatgpt.com "Get started | Tiptap Editor Docs"
[10]: https://github.com/facebook/lexical?utm_source=chatgpt.com "facebook/lexical: Lexical is an extensible text editor ..."
[11]: https://www.theverge.com/news/670773/google-labs-stitch-ui-coding-design-tool?utm_source=chatgpt.com "Google made an AI coding tool specifically for UI design"
[12]: https://www.figma.com/blog/introducing-figma-make/?utm_source=chatgpt.com "Introducing Figma Make: A New Way to Test, Edit, and ..."
[13]: https://arxiv.org/html/2503.04084v1?utm_source=chatgpt.com "Generative and Malleable User Interfaces with ..."
[14]: https://dl.acm.org/doi/10.1145/3613904.3642639?utm_source=chatgpt.com "Dynamically Synthesized UI Widgets for Visualization Editing"
[15]: https://tiptap.dev/docs?utm_source=chatgpt.com "Tiptap Docs"


--В случае с Tiptap/Lexical, значит ли это, что система будет сама писать исполняемый код под функции, которые хочет добавить юзер? Я бы хотел чтобы это было так. Тоесть LLM должна кодить новые возможности для редактора, а не просто брать в их предварительных настройках. 
--Коротко: **да, можно сделать так, чтобы LLM реально “дописывал” исполняемый код расширений под Tiptap/Lexical на лету** — не только переключал готовые пресеты. Но это требует аккуратной архитектуры: генерация кода → песочница → регистрация расширения/плагина → управление правами и UI-манифестами.

# Почему это реально

* **Tiptap — всё есть расширение.** Он прямым текстом поощряет писать свои ноды/марк-и/команды, а не только юзать готовое. ([Tiptap][1])
* **Lexical — плагинная модель с кастомными командами и нодами.** Любая новая функция — это кастомный `Plugin`/`Node`/`Command`. ([Lexical][2])
* **Песочницы для исполнения сгенерированного кода существуют.** На фронте: SES/Compartments (object-capabilities) и QuickJS (WASM-движок). Для тяжёлых сценариев — WebContainers (Node.js в браузере) с сильной изоляцией. ([npm][3], [GitHub][4], [agoric.com][5], [til.simonwillison.net][6], [Wasmer][7], [blog.stackblitz.com][8], [Bits and Pieces][9])

# Архитектура “LLM кодит расширения”

1. **Промпт → код**
   LLM получает: (а) задание пользователя (“хочу панель тезисов”, “сделай команду swap-case”), (б) контракт API редактора (минимальные типы/хелперы), (в) шаблон расширения. На выходе — TypeScript модуль с **минимальными, явно разрешёнными** импортами.

2. **Сборка и проверка**

   * Быстрый путь: транслировать в JS и грузить в **изолированный контекст** (Web Worker + SES/QuickJS). Запрещаем `fetch`, прямой `DOM`, глобалы — отдаём только узкое API-окно редактора. ([npm][3])
   * Альтернатива: крутить мини-Node в браузере через **WebContainers** и собирать там (удобно для TS/линтинга), тоже **внутри песочницы**. ([blog.stackblitz.com][8], [Bits and Pieces][9])

3. **Регистрация в редакторе**

   * **Tiptap:** загруженный модуль экспортирует `Extension` (или Node/Mark) с `addCommands()`/`addKeyboardShortcuts()` — редактор “поднимает” и монтирует его. ([Tiptap][10])
   * **Lexical:** модуль регистрирует `createCommand()`/плагин, опционально — кастомные `Nodes`. ([Lexical][2])

4. **UI без HTML от модели**
   Во избежание XSS и странной верстки: LLM возвращает **UI-манифест** (декларативно: “кнопка ‘Swap Case’ в тулбаре, хоткей Alt+U”), а реальный DOM рисует ваш хост-приложение по whitelist-схеме. Код расширения получает только “командный” API редактора.

5. **Политики безопасности**

   * Песочница: SES/Compartments **или** QuickJS-WASM. Никаких сторонних побочных эффектов без явных эндоументов (например, доступ к выделенному storage). ([npm][3], [GitHub][4])
   * Time/memory лимиты, измерение CPU (abort controller).
   * Подпись/версионирование модулей, журнал изменений, “panic button” отката.
   * Опционально — статанализ до запуска (ESLint/типчек), но это уже организаторская часть.

# Мини-скелеты (как это выглядит)

**Tiptap: расширение с кастомной командой**

```ts
// LLM-OUTPUT (пример)
import { Extension } from '@tiptap/core';

export const SwapCase = Extension.create({
  name: 'swapCase',

  addCommands() {
    return {
      swapCase:
        () =>
        ({ tr, state, dispatch }) => {
          const { from, to } = state.selection;
          const text = state.doc.textBetween(from, to);
          const swapped = text.replace(/[a-zA-Z]/g, ch =>
            ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()
          );
          if (dispatch) tr.insertText(swapped, from, to);
          return true;
        },
    };
  },
});
```

Это ровно тот тип кода, который LLM умеет генерировать, а вы — грузить в изолятор и регистрировать как расширение. (В Tiptap команды — норма.) ([Tiptap][11])

**Lexical: команда + обработчик**

```ts
// LLM-OUTPUT (пример)
import { createCommand } from 'lexical';
export const SWAP_CASE_COMMAND = createCommand<void>();

export function registerSwapCase(editor) {
  return editor.registerCommand(
    SWAP_CASE_COMMAND,
    () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const text = selection.getTextContent();
          const swapped = text.replace(/[a-zA-Z]/g, ch =>
            ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()
          );
          selection.insertText(swapped);
        }
      });
      return true;
    },
    0
  );
}
```

Lexical официально строится вокруг `createCommand()/dispatchCommand()`. ([Lexical][2])

# Что важно учесть

* **Безопасность > удобство.** Не исполняйте сырой код в основном окне. Используйте SES/QuickJS/WebContainers и давайте коду **только** capability-интерфейс редактора. ([npm][3], [til.simonwillison.net][6], [blog.stackblitz.com][8])
* **Детерминизм.** Фиксируйте версию “успешного” модуля (hash), храните миграции.
* **UX-контроль.** Модель не рисует UI напрямую — она только объявляет намерения (манифест кнопок/панелей).
* **Review-порог.** Для “опасных” прав (сетевые вызовы, доступ к файлам) — явное подтверждение пользователя.

# Ответ на твой вопрос в лоб

> “Значит ли это, что система будет сама писать исполняемый код под функции, которые хочет добавить юзер?”

**Да.** С Tiptap/Lexical это совершенно практично: LLM генерирует мини-расширения/плагины/команды, вы их компилируете/изолируете и регистрируете динамически. Это не ограничивается готовыми настройками — это **реальная генерация нового исполняемого поведения** под запрос пользователя, при условии песочницы и явных разрешений. ([Tiptap][1], [Lexical][2])

Хочешь — набросаю минимальный “скелет” приложения (Vite + Tiptap или Lexical) с: (1) API-окном для песочницы, (2) загрузчиком LLM-модулей, (3) JSON-манифестом UI и (4) кнопкой “Сгенерировать и подключить”.

[1]: https://tiptap.dev/docs/editor/extensions/custom-extensions?utm_source=chatgpt.com "Custom extension | Tiptap Editor Docs"
[2]: https://lexical.dev/docs/intro?utm_source=chatgpt.com "Introduction"
[3]: https://www.npmjs.com/package/ses?utm_source=chatgpt.com "ses"
[4]: https://github.com/tc39/proposal-ses?utm_source=chatgpt.com "Draft proposal for SES (Secure EcmaScript)"
[5]: https://agoric.com/blog/technology/securing-js-modules/?utm_source=chatgpt.com "Securing JavaScript Modules"
[6]: https://til.simonwillison.net/npm/self-hosted-quickjs?utm_source=chatgpt.com "Running self-hosted QuickJS in a browser"
[7]: https://wasmer.io/saghul/quickjs?utm_source=chatgpt.com "QuickJS is a small and embeddable JavaScript engine. It..."
[8]: https://blog.stackblitz.com/posts/introducing-webcontainers/?utm_source=chatgpt.com "Introducing WebContainers: Run Node.js natively in your ..."
[9]: https://blog.bitsrc.io/running-node-js-in-your-browser-with-webcontainers-48ada077518e?utm_source=chatgpt.com "Running Node.js in Your Browser with WebContainers"
[10]: https://tiptap.dev/docs/editor/extensions/custom-extensions/create-new/extension?utm_source=chatgpt.com "Extension API | Tiptap Editor Docs"
[11]: https://tiptap.dev/docs/editor/api/commands?utm_source=chatgpt.com "Commands | Tiptap Editor Docs"
