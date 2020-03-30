# Caesar-cipher-CLI-tool

CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

CLI tool accept 4 options:

-s, --shift: a shift

-i, --input: an input file

-o, --output: an output file

-a, --action: an action encode/decode

**Examples:**

`$ node index.js -a encode -s 3 -i`

`$ node index.js -a decode -s 7 -i "./input.txt" -o "./output.txt"`