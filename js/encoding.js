function short_value(value) {
    return { acute: value, double: value, unpack: value };
}
class Encoding {
    key;
    latin;
    runes;
    constructor(key, latin, runes) {
        this.key = key;
        this.latin = latin;
        this.runes = runes;
    }
}
