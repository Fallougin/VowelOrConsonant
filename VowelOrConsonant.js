function isVowel(char) {
  const vowels = "AEIOUaeiou";
  return vowels.includes(char);
}

function isConsonants(char){
	  const consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
  return consonants.includes(char);
}

function countVowelsConsonants(string){
	const counts = {}
  const result = []
  let vowelResult = 0
  let consonantResult = 0
  
  for (const char of string){
    if (isVowel(char)){
    	vowelResult++
    }
    else if (isConsonants(char)){
    	consonantResult++
    }
  }
  return `Vowels:${vowelResult} Consonants:${consonantResult}`
}
