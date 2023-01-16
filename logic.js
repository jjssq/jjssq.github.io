hexahue = {}
hexahue["magenta red green yellow blue cyan"] = 'a'
hexahue["red magenta green yellow blue cyan"] = 'b'
hexahue["red green magenta yellow blue cyan"] = 'c'
hexahue["red green yellow magenta blue cyan"] = 'd'
hexahue["red green yellow blue magenta cyan"] = 'e'
hexahue["red green yellow blue cyan magenta"] = 'f'
hexahue["green red yellow blue cyan magenta"] = 'g'
hexahue["green yellow red blue cyan magenta"] = 'h'
hexahue["green yellow blue red cyan magenta"] = 'i'
hexahue["green yellow blue cyan red magenta"] = 'j'
hexahue["green yellow blue cyan magenta red"] = 'k'
hexahue["yellow green blue cyan magenta red"] = 'l'
hexahue["yellow blue green cyan magenta red"] = 'm'
hexahue["yellow blue cyan green magenta red"] = 'n'
hexahue["yellow blue cyan magenta green red"] = 'o'
hexahue["yellow blue cyan magenta red green"] = 'p'
hexahue["blue yellow cyan magenta red green"] = 'q'
hexahue["blue cyan yellow magenta red green"] = 'r'
hexahue["blue cyan magenta yellow red green"] = 's'
hexahue["blue cyan magenta red yellow green"] = 't'
hexahue["blue cyan magenta red green yellow"] = 'u'
hexahue["cyan blue magenta red green yellow"] = 'v'
hexahue["cyan magenta blue red green yellow"] = 'w'
hexahue["cyan magenta red blue green yellow"] = 'x'
hexahue["cyan magenta red green blue yellow"] = 'y'
hexahue["cyan magenta red green yellow blue"] = 'z'
hexahue["black white white black black white"] = '.'
hexahue["white black black white white black"] = ''
hexahue["white white white white white white"] = ' '
hexahue["black black black black black black"] = ' '
hexahue["black gray white black gray white"] = '0'
hexahue["gray black white black gray white"] = '1'
hexahue["gray white black black gray white"] = '2'
hexahue["gray white black gray black white"] = '3'
hexahue["gray white black gray white black"] = '4'
hexahue["white gray black gray white black"] = '5'
hexahue["white black gray gray white black"] = '6'
hexahue["white black gray white gray black"] = '7'
hexahue["white black gray white black gray"] = '8'
hexahue["black white gray white black gray"] = '9'

function decodeHex() {
    // Get the hexahue value from the input field
    var hexahue_str = document.getElementById("color-input").value.trim();

    hexahue_arr = hexahue_str.split(" ");
    
    i = 0;
    decoded_str = "";
    while (i < hexahue_arr.length) {
        decoded_str += hexahue[hexahue_arr.slice(i, i+6).join(" ")];
        i += 6;
    }
    document.getElementById("decoded-colors").innerHTML = decoded_str;
}