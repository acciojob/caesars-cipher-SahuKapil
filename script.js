const lookup = {
  'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
  'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
  'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
  'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
  'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
  'Y': 'L', 'Z': 'M', '?': '?', ',': ','
};

// function rot13(encodedStr) 
// {
//   let decodedArr = [];
//   for (let i = 0; i < encodedStr.length; i++) 
//   {
//     const encodedChar = encodedStr[i];
//     const decodedChar = lookup[encodedChar];
//     decodedArr.push(decodedChar !== undefined ? decodedChar : encodedChar);
//   }
//   return decodedArr.join('');
// }
function rot13(encodedStr)
{
	let outputString = "";
	for(let i = 0 ; i < encodedStr. length ; i++)
		{
			if(lookup[ encodedStr[i] ] === undefined) 
			{
				outputString += encodedStr[i] ;
			}
			else{
				outputString += lookup[ encodedStr[i] ]
			}
		}
	return outputString
}

console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;

