import EscPosEncoder from 'esc-pos-encoder';

// @ts-ignore
const encoder = new EscPosEncoder({
  // @ts-ignore
  printer_model: 'pos-5890',
});

const result = encoder
  .initialize()
  .text('The quick brown fox jumps over the lazy dog')
  .newline()
  .qrcode('https://nielsleenheer.com')
  .encode();

console.log(result);
