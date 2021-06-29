const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    return expr.split('**********').map(item => {
        let letters = [];
        for (let i = 0; i < item.length / 10; i++) {
          let binary = item.slice(i * 10, i * 10 + 10);
          binary = binary.slice(binary.indexOf('1'));
      
          if (binary.length > 2) {
            let morse = [];
            for (let i = 0; i < binary.length / 2; i++) {
                morse.push(binary.slice(i * 2, i * 2 + 2) == '11' ? '-' : '.');
            }
            morse = morse.join('');
          } else {
            morse = binary == '11' ? '-' : '.';
          }
          letters.push(MORSE_TABLE[morse]);
        }
        return letters.join(''); 
      }).join(' ');
}

module.exports = {
    decode
}