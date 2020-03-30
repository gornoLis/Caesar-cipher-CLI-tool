
const alphabet = ['a', 'A','b', 'B','c','C', 'd','D', 'e','E', 'f', 'F',
				 'g', 'G', 'h', 'H','i', 'I','j','J','k','K','l','L',
				 'm','M','n','N','o','O','p','P','q','Q','r','R','s','S',
				 't','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];

var cipher= function (action,shift, arr){
let newArr = [];

switch(action){
	case "encode":
		for (var i = 0; i < arr.length; i++) {
			if (alphabet.includes(arr[i],0)) {
				var index = alphabet.indexOf(arr[i],0) + shift*2;
				if (index > alphabet.length-1) index = index - alphabet.length;
				newArr.push(alphabet[index]);
			}
			else {
				newArr.push(arr[i]);
			}
		}
	break;
	case "decode":
		for (var i = 0; i < arr.length; i++) {
			if (alphabet.includes(arr[i],0)) {
				var index = alphabet.indexOf(arr[i],0) - shift*2;
				if (index < 0) {
					index = alphabet.length + index;
				}
				newArr.push(alphabet[index]);
			}
			else {
				newArr.push(arr[i]);
			}
		}
	break;
	}
return newArr.join('');

} 
module.exports = cipher;