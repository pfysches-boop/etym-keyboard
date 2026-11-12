type EncodingValue = { acute: string, double: string, unpack: string }
type EncodingEntry = { key: string, latin: EncodingValue, runes: EncodingValue }

function short_value(value: string): EncodingValue {
  return { acute: value, double: value, unpack: value }
}

class Encoding {
  key: string
  latin: EncodingValue
  runes: EncodingValue

  constructor(key: string, latin: EncodingValue, runes: EncodingValue) {
    this.key = key
    this.latin = latin
    this.runes = runes
  }

  // get entries(): EncodingEntry[] {
  //   return this.keys.map((key: string) => ({ key: key, latin: this.latin, runes: this.runes }))
  // }
}