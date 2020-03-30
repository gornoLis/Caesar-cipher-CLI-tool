const cipher =require('./cipher.js');
const opts = require('./validate_args.js');
const fs = require('fs');

const input = (opts.input) ? fs.createReadStream(opts.input) : process.stdin;
input.on('data', (chunk) => {	
	const arr = chunk.toString().split('');
	const newText = cipher(opts.action,opts.shift, arr);
	(opts.output) ? fs.appendFileSync(opts.output, newText) : process.stdout.write(newText);	
});
input.on('error',(error)=> {
	console.log(error.message);
});