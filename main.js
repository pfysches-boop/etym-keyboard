
const input_element = document.getElementById('ascii-input')
const etym_element  = document.getElementById('etym-output')
const runes_element = document.getElementById('rune-output')

const long_format_dropdown = document.getElementById('long-vowel-format')
const format_expand = 'expand'
const format_double = 'double'
const format_mark = 'mark'

const main_map = [
  [ 'i', '\u0131' ],
  [ 'i\\', '\u0131\u0323' ],
  [ 'i\\\\', '\u0131\u0328' ],
  [ 'u\\', '\u0173' ],
  [ 'O', '\u0258' ],
  [ 'e\\', 'e\u0323' ],
  [ 'A', '\u0250' ],
  [ 'a', '\u0251' ],
  [ 'a\\', '\u0252' ],
  [ 'n\\', '\u0272' ],
  [ 'N', '\u014b' ],
  [ 'C', '\u0107' ],
  [ 'g', '\u0067\u0304' ],
  [ 'G', 'g\u0301' ],
  [ 'w\\', '\u028b' ],
  [ 'j', '\u0237' ],
  [ 'H', '\u0266' ],
  [ 'T', '\u00fe' ],
  [ 'D', '\u00f0' ],
  [ 'd\\', '\u03b4' ],
  [ 'g\\', '\u1d79' ],
  [ 'G\\', '\u021d' ],

  [ '+', '·' ],
  [ '\'', '\u2019' ],
  [ '`', '\u2018' ],
]
const alias_map = [
  [ 'b\\', '6' ],
]

const after_map = [
  [ '\u0252\\', 'a' ],
  [ '\u1d79\\', 'g' ],
  [ '\u0250\\', 'a\u0323' ],
  [ 'ı̨\\', 'i' ],
].sort((a, b) => (b[0].length - a[0].length))

const double_map = [
  [ 'ii', 'ıı' ],
  [ 'yy', 'yy' ],
  [ 'iy', 'ı̨ı̨' ],
  [ 'io', 'ı̣ı̣' ],
  [ 'uu', 'uu' ],
  [ 'ee', 'ee' ],
  [ 'OO', 'ɘɘ' ],
  [ 'eo', 'ẹẹ' ],
  [ 'oo', 'oo' ],
  [ 'AA', 'ɐɐ' ],
  [ 'Aa\\', 'ạạ' ],
  [ 'aa', 'ɑɑ' ],
  [ 'a\\a\\', 'ɒɒ' ],

]
const mark_map = [
  [ 'ii', 'ı́' ],
  [ 'yy', 'ý' ],
  [ 'iy', 'ı̨́' ],
  [ 'io', 'ı̣́' ],
  [ 'uu', 'ú' ],
  [ 'ee', 'é' ],
  [ 'OO', 'ɘ́' ],
  [ 'eo', 'ẹ́' ],
  [ 'oo', 'ó' ],
  [ 'AA', 'ɐ́' ],
  [ 'Aa\\', 'ạ́' ],
  [ 'aa', 'ɑ́' ],
  [ 'a\\a\\', 'ɒ́' ],
]

const rune_map = [
  [ 'ı', 'ᛁ' ],
  [ 'i', 'ᛁ' ],
  [ 'ı̣', 'ᛡ' ],
  [ 'ı̨', 'ᛂ' ],
  [ 'y', 'ᚣ' ],
  [ 'u', 'ᚢ' ],
  [ 'ų', 'ᚤ' ],
  [ 'e', 'ᛖ' ],
  [ 'ɘ', 'ᛟ' ],
  [ 'ẹ', 'ᛇ' ],
  [ 'o', 'ᚩ' ],
  [ 'ɐ', 'ᚫ' ],
  [ 'ạ', 'ᛠ' ],
  [ 'ɑ', 'ᚪ' ],
  [ 'ɒ', 'ᚪ' ],

  [ 'ı́', 'ᛁ́' ],
  [ 'ý', 'ᚣ́' ],
  [ 'ı̨́', 'ı̨́' ],
  [ 'ı̣́', 'ᛡ́' ],
  [ 'ú', 'ᚢ́' ],
  [ 'é', 'ᛖ́' ],
  [ 'ɘ́', 'ᛟ́' ],
  [ 'ẹ́', 'ᛇ́' ],
  [ 'ó', 'ᚩ́' ],
  [ 'ɐ́', 'ᚨ́' ],
  [ 'ạ́', 'ᛠ́' ],
  [ 'ɑ́', 'ᚪ́' ],
  [ 'ɒ́', 'ᚪ́' ],

  [ 'm', 'ᛗ' ],
  [ 'n', 'ᚾ' ],
  [ 'ɲ', 'ᛀ' ],
  [ 'ŋ', 'ᛝ' ],
  [ 'p', 'ᛈ' ],
  [ 't', 'ᛏ' ],
  [ 'ć', 'ᚲ' ],
  [ 'q', 'ᚳ' ],
  [ 'k', 'ᛣ' ],
  [ 'b', 'ᛒ' ],
  [ 'd', 'ᛞ' ],
  [ 'ǵ', 'ᚷ' ],
  [ 'ḡ', 'ᚸ' ],
  [ 'g', 'ᚸ' ],
  [ '6', 'ᛔ' ],
  [ 'δ', 'ᛞ' ],
  [ 'ȝ', 'ᛄ' ],
  [ 'ᵹ', 'ᚸ' ],
  [ 's', 'ᛋ' ],
  [ 'z', 'ᛉ' ],
  [ 'f', 'ᚠ' ],
  [ 'þ', 'ᚦ' ],
  [ 'h', 'ᚻ' ],
  [ 'ɦ', 'ᚻ' ],
  [ 'x', 'ᚺ' ],
  [ 'v', 'ᚡ' ],
  [ 'ð', 'ᚧ' ],
  [ 'w', 'ᚹ' ],
  [ 'l', 'ᛚ' ],
  [ 'ȷ', 'ᛃ' ],
  [ 'r', 'ᚱ' ],
  // [ ' ', '᛫' ],
].sort((a, b) => (b[0].length - a[0].length))

const letter_map = [...alias_map, ...main_map].sort(
  (a, b) => (b[0].length - a[0].length)
)

const buttons = document.getElementById('buttons').getElementsByTagName('td')
for(const button of buttons) {
  if(button.innerHTML === '') { continue }
  button.style.border = '3px solid black'
  button.style.borderRadius = '6px'
  button.style.cursor = 'pointer'
  if(!button.className) button.style.backgroundColor = 'white'

  const character = button.accessKey || (button.innerHTML[button.innerHTML.length > 1 ? 1 : 0])

  button.onclick = () => {

    for(const [key, value] of main_map) {
      if(value === character) {
        input_element.value += key
        return update()
      }
    }
    
    input_element.value += character
    return update()
  }
}

const update = () => {
  let etym = input_element.value

  if(long_format_dropdown.value === format_double) {
    for(const [key, value] of double_map) {
      etym = etym.replaceAll(key, value)
    }
  } 
  if(long_format_dropdown.value === format_mark) {
    for(const [key, value] of mark_map) {
      etym = etym.replaceAll(key, value)
    }
  }

  for(const [key, value] of letter_map) {
    etym = etym.replaceAll(new RegExp(
      `${key === '+' ? '\\+' : key.replaceAll('\\', '\\\\')}(^́)*`, 'g'
    ), value)
  }
  for(const [key, value] of after_map) {
    etym = etym.replaceAll(key, value)
  }

  etym_element.value = etym

  let runes = etym
  for(const [key, value] of rune_map) {
    runes = runes.replaceAll(key, value)
  }

  runes_element.value = runes
}

input_element.addEventListener('keydown',  update)
input_element.addEventListener('keyup',    update)
input_element.addEventListener('onchange', update)


const copy_indicator = document.getElementById('copy-indicator')
const copy = () => {
  navigator.clipboard.writeText(etym_element.value)

  copy_indicator.className = 'fadeinout'
  setTimeout(() => { copy_indicator.className = '' }, 2000)
}

const keys = []
document.addEventListener('keydown', evt => {
  keys[evt.key] = true

  if(keys[ 'Control' ] && keys[ 'Shift' ] && keys[ ' ' ]) copy()

  if(evt.key === 'Escape') aboutMenu.style.visibility = 'hidden'
})
document.addEventListener('keyup', evt => {
  keys[evt.key] = false
})

document.getElementById('copy-button').onclick = copy

document.getElementById('clear-button').onclick = evt => {
  input_element.value = ''
  etym_element.value = ''
}



long_format_dropdown.onchange = evt => {
  const format = long_format_dropdown.value
  for(const button of buttons) {
    const current_text = button.innerHTML
    if(!button.title.includes('long')) { continue }

    button.innerHTML = format === format_double ?
      (double_map.find(pair => pair[0] === button.accessKey) ?? [ '', current_text ])[1]
      : format === format_mark ?
      (mark_map.find(pair => pair[0] === button.accessKey) ?? [ '', current_text ])[1]
      : (letter_map.find(pair => pair[0] === button.accessKey[0]) ?? [ '', button.accessKey[0] ])[1] + (letter_map.find(pair => pair[0] === button.accessKey[1]) ?? [ '', button.accessKey[1] ])[1]
  }
}