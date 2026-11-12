const input_element = document.getElementById('ascii-input');
const latin_element = document.getElementById('etym-output');
const runes_element = document.getElementById('rune-output');
const copy_latin_button = document.getElementById('copy-latin-button');
const copy_runes_button = document.getElementById('copy-runes-button');
const clear_button = document.getElementById('clear-button');
const copy_indicator = document.getElementById('copy-indicator');
var LongMode;
(function (LongMode) {
    LongMode["Acute"] = "acute";
    LongMode["Double"] = "double";
    LongMode["Unpack"] = "unpack";
})(LongMode || (LongMode = {}));
let long_mode = LongMode.Acute;
input_element.onkeydown = () => setTimeout(update, 5);
copy_latin_button.onclick = () => copy(latin_element.value);
copy_runes_button.onclick = () => copy(runes_element.value);
clear_button.onclick = () => {
    input_element.value = latin_element.value = runes_element.value = '';
};
function string_replace_at(string, start_index, count, replacement) {
    return string.substring(0, start_index) + replacement +
        string.substring(start_index + count);
}
function get_regexp(string, flags) {
    return RegExp(string.replaceAll('\\', '\\\\')
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
        .replaceAll('*', '\\*'), flags);
}
for (const button of document.getElementById('buttons')?.getElementsByTagName('td') ?? []) {
    if (button.innerHTML === '') {
        continue;
    }
    button.style.border = '3px solid black';
    button.style.borderRadius = '6px';
    button.style.cursor = 'pointer';
    if (!button.className)
        button.style.backgroundColor = 'white';
    const char = button.accessKey;
    button.onclick = () => {
        handle_click(char);
    };
}
update_button_text();
function update_button_text() {
    for (const button of document.getElementById('buttons')?.getElementsByTagName('td') ?? []) {
        button.innerHTML = translate(button.accessKey).latin;
    }
}
function handle_click(char) {
    const key = char;
    input_element.value += key;
    update();
}
function update() {
    let ascii_input = input_element.value;
    const translation = translate(ascii_input);
    latin_element.value = translation.latin;
    runes_element.value = translation.runes;
}
function translate(ascii) {
    let latin_output = [];
    let runes_output = [];
    let ascii_input = ascii;
    for (const encoding of encoding_map) {
        const match_iterator = ascii_input.matchAll(get_regexp(encoding.key, 'g'));
        let match;
        while ((match = match_iterator.next()).value) {
            const index = match.value.index;
            const length = match.value[0].length;
            latin_output[index] = encoding.latin[long_mode];
            runes_output[index] = encoding.runes[long_mode];
            ascii_input = string_replace_at(ascii_input, index, length, '\0'.repeat(length));
        }
    }
    return {
        latin: latin_output.filter(q => !!q).join(''),
        runes: runes_output.filter(q => !!q).join(''),
    };
}
function copy(text) {
    navigator.clipboard.writeText(text);
    copy_indicator.className = 'fadeinout';
    setTimeout(() => { copy_indicator.className = ''; }, 2000);
}
const keys = {};
document.addEventListener('keydown', (evt) => {
    keys[evt.key] = true;
    if (keys['Control'] && keys['Shift'] && keys[' '])
        copy(runes_element.value);
});
document.addEventListener('keyup', (evt) => {
    keys[evt.key] = false;
});
