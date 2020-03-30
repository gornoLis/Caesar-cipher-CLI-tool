const commander = require('commander');
commander
	.storeOptionsAsProperties(false)
	.requiredOption('-s, --shift <shift>', 'a shift')
	.option('-i, --input [input]', 'an input file')
	.option('-o, --output [output]', 'an output file')
	.requiredOption('-a,--action <action>', 'an action encode/decode')
	.parse(process.argv);
module.exports = commander.opts();