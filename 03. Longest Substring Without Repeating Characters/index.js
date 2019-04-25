/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
  if (!s) return 0
  const letters = s.split('');
  let longestSubstring = []
  let qtd = 0, finalQtd = 0;
  for (let i = 0; i < letters.length; i++) {        
      if (longestSubstring.indexOf(letters[i]) !== -1) {
          longestSubstring = longestSubstring.slice(longestSubstring.indexOf(letters[i]) + 1)
          longestSubstring.push(letters[i])
          qtd = longestSubstring.length
      } else {
          longestSubstring.push(letters[i])
          qtd++
      }
      
      if (qtd > finalQtd) {
          finalQtd = qtd;
      }
  }

  return finalQtd;
};