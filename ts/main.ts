const input_element:  HTMLInputElement = document.getElementById('ascii-input') as HTMLInputElement
const latin_element:  HTMLInputElement = document.getElementById('etym-output') as HTMLInputElement
const runes_element:  HTMLInputElement = document.getElementById('rune-output') as HTMLInputElement

const copy_latin_button: HTMLButtonElement = document.getElementById('copy-latin-button') as HTMLButtonElement
const copy_runes_button: HTMLButtonElement = document.getElementById('copy-runes-button') as HTMLButtonElement
const clear_button:      HTMLButtonElement = document.getElementById('clear-button')      as HTMLButtonElement
const copy_indicator: HTMLAnchorElement = document.getElementById('copy-indicator') as HTMLAnchorElement

enum LongMode {
  Acute = 'acute',
  Double = 'double',
  Unpack = 'unpack',
}
let long_mode: LongMode = LongMode.Acute

input_element.onkeydown = () => setTimeout(update, 5)
copy_latin_button.onclick = () => copy(latin_element.value)
copy_runes_button.onclick = () => copy(runes_element.value)
clear_button.onclick = () => {
  input_element.value = latin_element.value = runes_element.value = ''
}


function string_replace_at(string: string, start_index: number, count: number, replacement: string): string {
  return string.substring(0, start_index) + replacement + 
    string.substring(start_index + count)
}
function get_regexp(string: string, flags: string): RegExp {
  return RegExp(
    string.replaceAll('\\', '\\\\')
          .replaceAll('+', '\\+')
          .replaceAll('(', '\\(')
          .replaceAll(')', '\\)')
          .replaceAll('[', '\\[')
          .replaceAll(']', '\\]')
          .replaceAll('{', '\\{')
          .replaceAll('}', '\\}')
          .replaceAll('-', '\\-')
          .replaceAll('.', '\\.')
          .replaceAll('|', '\\|')
          .replaceAll('?', '\\?')
          .replaceAll('^', '\\^')
          .replaceAll('$', '\\$')
          .replaceAll('*', '\\*')
    , flags)
}

for(const button of document.getElementById('buttons')?.getElementsByTagName('td') ?? []) {  
  if(button.innerHTML === '') { continue }
  button.style.border = '3px solid black'
  button.style.borderRadius = '6px'
  button.style.cursor = 'pointer'
  if(!button.className) button.style.backgroundColor = 'white'

  const char: string = button.accessKey
  
  button.onclick = () => {
    handle_click(char)
  }
}

update_button_text()

function update_button_text(): void {
  for(const button of document.getElementById('buttons')?.getElementsByTagName('td') ?? []) {
    button.innerHTML = translate(button.accessKey).latin
  }
}


function handle_click(char: string): void {
  const key: string = char

  input_element.value += key
  update()
}


function update(): void {
  let ascii_input: string = input_element.value

  const translation = translate(ascii_input)

  latin_element.value = translation.latin
  runes_element.value = translation.runes
}

function translate(ascii: string): { latin: string, runes: string } {
  let latin_output: string[] = []
  let runes_output: string[] = []

  let ascii_input = ascii

  for(const encoding of encoding_map) {
    const match_iterator = ascii_input.matchAll(
      get_regexp(encoding.key, 'g'))

    let match: IteratorResult<RegExpExecArray, undefined>
    while((match = match_iterator.next()).value) {
      const index: number = match.value.index
      const length: number = match.value[0].length
      
      latin_output[index] = encoding.latin[long_mode]
      runes_output[index] = encoding.runes[long_mode]
      ascii_input = string_replace_at(ascii_input, index, length, '\0'.repeat(length))
    }
  }

  return {
    latin: latin_output.filter(q => !!q).join(''),
    runes: runes_output.filter(q => !!q).join(''),
  }
}

function copy(text: string): void {
  navigator.clipboard.writeText(text)

  copy_indicator.className = 'fadeinout'
  setTimeout(() => { copy_indicator.className = '' }, 2000)
}


const keys: { [key: string]: boolean } = {}
document.addEventListener('keydown', (evt: KeyboardEvent) => {
  keys[evt.key] = true
  if(keys['Control'] && keys['Shift'] && keys[' ']) copy(runes_element.value)
})
document.addEventListener('keyup', (evt: KeyboardEvent) => {
  keys[evt.key] = false
})