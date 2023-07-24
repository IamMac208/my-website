var emoji = process.argv[2]

let hex = emoji.codePointAt(0).toString(16)
let emo = String.fromCodePoint('0x' + hex)
console.log(
 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/' +
  hex +
  '.svg',
)
