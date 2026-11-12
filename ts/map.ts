const encoding_map: Encoding[] = [
  new Encoding('i', short_value('ı'), short_value('ᛁ')),
  new Encoding('iL', { acute: 'ı́', double: 'ıı', unpack: 'ıı' }, { acute: 'ᛁ́', double: 'ᛁᛁ', unpack: 'ᛁᛁ' }),
  new Encoding('i\\', short_value('ı̣'), short_value('ᛡ')),
  new Encoding('i\\L', { acute: 'ı̣́', double: 'ı̣ı̣', unpack: 'ıo' }, { acute: 'ᛡ́', double: 'ᛡᛡ', unpack: 'ᛁᚩ' }),
  new Encoding('i\\\\', short_value('ı̨'), short_value('ᛂ')),
  new Encoding('i\\\\L', { acute: 'ı̨́', double: 'ı̨ı̨', unpack: 'ıy' }, { acute: 'ᛂ́', double: 'ᛂᛂ', unpack: 'ᛁᚣ' }),
  new Encoding('i\\\\\\', short_value('i'), short_value('ᛁ')),
  new Encoding('i\\\\\\L', { acute: 'í', double: 'ii', unpack: 'ii' }, { acute: 'ᛁ́', double: 'ᛁᛁ', unpack: 'ᛁᛁ' }),

  new Encoding('y', short_value('y'), short_value('ᚣ')),
  new Encoding('yL', { acute: 'ý', double: 'yy', unpack: 'yy' }, { acute: 'ᚣ́', double: 'ᚣᚣ', unpack: 'ᚣᚣ' }),

  new Encoding('u', short_value('u'), short_value('ᚢ')),
  new Encoding('uL', { acute: 'ú', double: 'uu', unpack: 'uu' }, { acute: 'ᚢ́', double: 'ᚢᚢ', unpack: 'ᚢᚢ' }),
  new Encoding('u\\', short_value('ų'), short_value('ᚤ')),

  new Encoding('e', short_value('e'), short_value('ᛖ')),
  new Encoding('eL', { acute: 'é', double: 'ee', unpack: 'ee' }, { acute: 'ᛖ́', double: 'ᛖᛖ', unpack: 'ᛖᛖ' }),
  new Encoding('e\\', short_value('ẹ'), short_value('ᛇ')),
  new Encoding('e\\L', { acute: 'ẹ́', double: 'ẹẹ', unpack: 'eo' }, { acute: 'ᛇ́', double: 'ᛇᛇ', unpack: 'ᛖᚩ' }),

  new Encoding('O', short_value('ɘ'), short_value('ᛟ')),
  new Encoding('OL', { acute: 'ɘ́', double: 'ɘɘ', unpack: 'ɘɘ' }, { acute: 'ᛟ́', double: 'ᛟᛟ', unpack: 'ᛟᛟ' }),

  new Encoding('o', short_value('o'), short_value('ᚩ')),
  new Encoding('oL', { acute: 'ó', double: 'oo', unpack: 'oo' }, { acute: 'ᚩ́', double: 'ᚩᚩ', unpack: 'ᚩᚩ' }),

  new Encoding('A', short_value('ɐ'), short_value('ᚫ')),
  new Encoding('AL', { acute: 'ɐ́', double: 'ɐɐ', unpack: 'ɐɐ' }, { acute: 'ᚨ́', double: 'ᚫᚫ', unpack: 'ᚫᚫ' }),
  new Encoding('A\\', short_value('ạ'), short_value('ᛠ')),
  new Encoding('A\\L', { acute: 'ạ́', double: 'ạạ', unpack: 'ɐɒ' }, { acute: 'ᛠ́', double: 'ᛠᛠ', unpack: 'ᚫᚪ' }),
  
  new Encoding('a', short_value('ɑ'), short_value('ᚪ')),
  new Encoding('aL', { acute: 'ɑ́', double: 'ɑɑ', unpack: 'ɑɑ' }, { acute: 'ᚪ́', double: 'ᚪᚪ', unpack: 'ᚪᚪ' }),
  new Encoding('a\\', short_value('ɒ'), short_value('ᚪ')),
  new Encoding('a\\L', { acute: 'ɒ́', double: 'ɒɒ', unpack: 'ɒɒ' }, { acute: 'ᚪ́', double: 'ᚪᚪ', unpack: 'ᚪᚪ' }),
  new Encoding('a\\\\', short_value('a'), short_value('ᚪ')),
  new Encoding('a\\\\L', { acute: 'á', double: 'aa', unpack: 'aa' }, { acute: 'ᚪ́', double: 'ᚪᚪ', unpack: 'ᚪᚪ' }),

  
  new Encoding('m', short_value('m'), short_value('ᛗ')),
  new Encoding('n', short_value('n'), short_value('ᚾ')),
  new Encoding('n\\', short_value('ɲ'), short_value('ᛀ')),
  new Encoding('N', short_value('ŋ'), short_value('ᛝ')),
  
  new Encoding('p', short_value('p'), short_value('ᛈ')),
  new Encoding('t', short_value('t'), short_value('ᛏ')),
  new Encoding('C', short_value('ć'), short_value('ᚲ')),
  new Encoding('q', short_value('q'), short_value('ᚳ')),
  new Encoding('k', short_value('k'), short_value('ᛣ')),
  
  new Encoding('b', short_value('b'), short_value('ᛒ')),
  new Encoding('d', short_value('d'), short_value('ᛞ')),
  new Encoding('G', short_value('ǵ'), short_value('ᚷ')),
  new Encoding('g', short_value('ḡ'), short_value('ᚸ')),
  new Encoding('g\\\\', short_value('g'), short_value('ᚸ')),
  
  new Encoding('6', short_value('6'), short_value('ᛔ')),
  new Encoding('b\\', short_value('6'), short_value('ᛔ')),
  new Encoding('d\\', short_value('δ'), short_value('ᛞ')),
  new Encoding('G\\', short_value('ȝ'), short_value('ᛄ')),
  new Encoding('g\\', short_value('ᵹ'), short_value('ᚸ')),
  
  new Encoding('f', short_value('f'), short_value('ᚠ')),
  new Encoding('T', short_value('þ'), short_value('ᚦ')),
  new Encoding('s', short_value('s'), short_value('ᛋ')),
  new Encoding('h', short_value('h'), short_value('ᚻ')),
  new Encoding('x', short_value('x'), short_value('ᚺ')),
  
  new Encoding('v', short_value('v'), short_value('ᚡ')),
  new Encoding('D', short_value('ð'), short_value('ᚧ')),
  new Encoding('z', short_value('z'), short_value('ᛉ')),
  new Encoding('H', short_value('ɦ'), short_value('ᚻ')),
  
  new Encoding('w', short_value('w'), short_value('ᚹ')),
  new Encoding('l', short_value('l'), short_value('ᛚ')),
  new Encoding('j', short_value('ȷ'), short_value('ᛃ')),
  new Encoding('r', short_value('r'), short_value('ᚱ')),

  new Encoding('+', short_value('·'), short_value('·')),
  new Encoding('\'', short_value('’'), short_value('’')),
  new Encoding('`', short_value('‘'), short_value('‘')),
  new Encoding(' ', short_value(' '), short_value('᛫')),
  new Encoding(', ', short_value(', '), short_value('᛬')),
  new Encoding('.', short_value('.'), short_value('᛭')),
].sort((a: Encoding, b: Encoding) => b.key.length - a.key.length)

const settings = {
  'i': 'ı',
  'O': 'œ',
  'A': 'æ',
  'a': 'ɑ',
  'a\\': 'ą',
  'n\\': 'ń',
  'q': 'q',
  'g': 'ḡ',
  'w': 'w',
  'j': 'ȷ',
}
function update_settings(): void {
  update_settings_i(settings['i'])
  update_settings_O(settings['O'])
  update_settings_A(settings['O'])
  update_settings_a(settings['O'])
  update_settings_a_(settings['O'])
  update_settings_consonant('n\\', settings['n\\'])
  update_settings_consonant('q', settings['q'])
  update_settings_consonant('g', settings['g'])
  update_settings_consonant('w', settings['w'])
  update_settings_consonant('j', settings['j'])
}

function get_encoding_index(key: string): number {
  return encoding_map.findIndex((encoding: Encoding) =>
    encoding.key === key
  )
}
function update_settings_i(char: string): void {
  const index_i    = get_encoding_index('i')
  const index_iL   = get_encoding_index('iL')
  const index_i_   = get_encoding_index('i\\')
  const index_i_L  = get_encoding_index('i\\L')
  const index_i__  = get_encoding_index('i\\\\')
  const index_i__L = get_encoding_index('i\\\\L')

  switch(char) {
    case 'ı':
      encoding_map[index_i] = new Encoding('i', short_value('ı'), short_value('ᛁ'))
      encoding_map[index_iL] = new Encoding('iL', { acute: 'ı́', double: 'ıı', unpack: 'ıı' }, { acute: 'ᛁ́', double: 'ᛁᛁ', unpack: 'ᛁᛁ' })
      encoding_map[index_i_] = new Encoding('i\\', short_value('ı̣'), short_value('ᛡ'))
      encoding_map[index_i_L] = new Encoding('i\\L', { acute: 'ı̣́', double: 'ı̣ı̣', unpack: 'ıo' }, { acute: 'ᛡ́', double: 'ᛡᛡ', unpack: 'ᛁᚩ' })
      encoding_map[index_i__] = new Encoding('i\\\\', short_value('ı̨'), short_value('ᛂ'))
      encoding_map[index_i__L] = new Encoding('i\\\\L', { acute: 'ı̨́', double: 'ı̨ı̨', unpack: 'ıy' }, { acute: 'ᛂ́', double: 'ᛂᛂ', unpack: 'ᛁᚣ' })
      break
    case 'i':
      encoding_map[index_i] = new Encoding('i', short_value('i'), short_value('ᛁ'))
      encoding_map[index_iL] = new Encoding('iL', { acute: 'í', double: 'ii', unpack: 'ii' }, { acute: 'ᛁ́', double: 'ᛁᛁ', unpack: 'ᛁᛁ' })
      encoding_map[index_i_] = new Encoding('i\\', short_value('ị'), short_value('ᛡ'))
      encoding_map[index_i_L] = new Encoding('i\\L', { acute: 'ị́', double: 'ịị', unpack: 'io' }, { acute: 'ᛡ́', double: 'ᛡᛡ', unpack: 'ᛁᚩ' })
      encoding_map[index_i__] = new Encoding('i\\\\', short_value('į'), short_value('ᛂ'))
      encoding_map[index_i__L] = new Encoding('i\\\\L', { acute: 'į́', double: 'įį', unpack: 'iy' }, { acute: 'ᛂ́', double: 'ᛂᛂ', unpack: 'ᛁᚣ' })
      break
  }
}
function update_settings_O(char: string): void {
  const index_O  = get_encoding_index('O')
  const index_OL = get_encoding_index('OL')

  switch(char) {
    case 'ɘ':
      encoding_map[index_O]  = new Encoding('O', short_value('ɘ'), short_value('ᛟ'))
      encoding_map[index_OL] = new Encoding('OL', { acute: 'ɘ́', double: 'ɘɘ', unpack: 'ɘɘ' }, { acute: 'ᛟ́', double: 'ᛟᛟ', unpack: 'ᛟᛟ' })
      break
    case 'œ':
      encoding_map[index_O]  = new Encoding('O', short_value('œ'), short_value('ᛟ'))
      encoding_map[index_OL] = new Encoding('OL', { acute: 'œ́', double: 'œœ', unpack: 'œœ' }, { acute: 'ᛟ́', double: 'ᛟᛟ', unpack: 'ᛟᛟ' })
      break
  }
}
function update_settings_A(char: string): void {
  const index_A  = get_encoding_index('A')
  const index_AL = get_encoding_index('AL')
  const index_A_L = get_encoding_index('A\\L')

  switch(char) {
    case 'ɐ':
      encoding_map[index_A]   = new Encoding('A', short_value('ɐ'), short_value('ᚫ'))
      encoding_map[index_AL]  = new Encoding('AL', { acute: 'ɐ́', double: 'ɐɐ', unpack: 'ɐɐ' }, { acute: 'ᚨ́', double: 'ᚫᚫ', unpack: 'ᚫᚫ' })
      encoding_map[index_A_L] = new Encoding('A\\L', { acute: 'ạ́', double: 'ạạ', unpack: 'ɐɒ' }, { acute: 'ᛠ́', double: 'ᛠᛠ', unpack: 'ᚫᚪ' })
      break
    case 'æ':
      encoding_map[index_A]   = new Encoding('A', short_value('æ'), short_value('ᚫ'))
      encoding_map[index_AL]  = new Encoding('AL', { acute: 'ǽ', double: 'ææ', unpack: 'ææ' }, { acute: 'ᚨ́', double: 'ᚫᚫ', unpack: 'ᚫᚫ' })
      encoding_map[index_A_L] = new Encoding('A\\L', { acute: 'ạ́', double: 'ạạ', unpack: 'æɒ' }, { acute: 'ᛠ́', double: 'ᛠᛠ', unpack: 'ᚫᚪ' })
      break
  }
}
function update_settings_a(char: string): void {
  const index_a  = get_encoding_index('a')
  const index_aL = get_encoding_index('aL')

  switch(char) {
    case 'ɑ':
      encoding_map[index_a]  = new Encoding('a', short_value('ɑ'), short_value('ᚪ'))
      encoding_map[index_aL] = new Encoding('aL', { acute: 'ɑ́', double: 'ɑɑ', unpack: 'ɑɑ' }, { acute: 'ᚪ́', double: 'ᚪᚪ', unpack: 'ᚪᚪ' })
      break
    case 'a':
      encoding_map[index_a]  = new Encoding('a', short_value('a'), short_value('ᚪ'))
      encoding_map[index_aL] = new Encoding('aL', { acute: 'á', double: 'aa', unpack: 'aa' }, { acute: 'ᚪ́', double: 'ᚪᚪ', unpack: 'ᚪᚪ' })
      break
  }
}
function update_settings_a_(char: string): void {
  const index_a_  = get_encoding_index('a\\')
  const index_a_L = get_encoding_index('a\\L')

  switch(char) {
    case 'ɒ':
      encoding_map[index_a_]  = new Encoding('a\\', short_value('ɒ'), short_value('ᚪ'))
      encoding_map[index_a_L] = new Encoding('a\\L', { acute: 'ɒ́', double: 'ɒɒ', unpack: 'ɒɒ' }, { acute: 'ᚪ́', double: 'ᚪᚪ', unpack: 'ᚪᚪ' })
      break
    case 'ą':
      encoding_map[index_a_]  = new Encoding('a\\', short_value('ą'), short_value('ᚪ'))
      encoding_map[index_a_L] = new Encoding('a\\L', { acute: 'ą́', double: 'ąą', unpack: 'ąą' }, { acute: 'ᚪ́', double: 'ᚪᚪ', unpack: 'ᚪᚪ' })
      break
    case 'ɑ̨':
      encoding_map[index_a_]  = new Encoding('a\\', short_value('ɑ̨'), short_value('ᚪ'))
      encoding_map[index_a_L] = new Encoding('a\\L', { acute: 'ɑ̨́', double: 'ɑ̨ɑ̨', unpack: 'ɑ̨ɑ̨' }, { acute: 'ᚪ́', double: 'ᚪᚪ', unpack: 'ᚪᚪ' })
      break
  }
}
function update_settings_consonant(key: string, char: string): void {
  const index  = get_encoding_index(key)
  encoding_map[index] = new Encoding(key, short_value(char), short_value('ᛀ'))
}