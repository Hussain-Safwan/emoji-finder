import emoji from './data.js';

for (let emo of emoji) {
  const Image = document.createElement('img');
  Image.src = `//cdn.jsdelivr.net/emojione/assets/png/${emo.symbol
    .codePointAt(0)
    .toString(16)}.png`;
  Image.alt = emo.title;
  Image.name = emo.title
  Image.class = emo.symbol
  document.querySelector('.emojis').append(Image);
}

$('#emojiID').on('keyup', e => {
  const emojis = $('.emojis img')
  for (let emo of emojis) {
    $(emo).hide()
  }
  const phrase = $('#emojiID').val()

  const filtered = emoji.filter(emo => findEmo(emo.keywords, phrase))
  for (let fil of filtered) {
    $(`img[name="${fil.title}"]`).show()
  }
})

const findEmo = (data, phrase) => {
  return data.includes(phrase)
}

$('body').on('click', '.emojis img',  e => {
  CopyToClipboard(e.target.class)
})

function CopyToClipboard(text) {
  var input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input);
}