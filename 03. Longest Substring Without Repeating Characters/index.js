const OFFSET = ' '.charCodeAt(0);
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
  // if (!s) return 0
  const letters = s.split('');
  const len = s.length;
  let longestSubstring = []
  let qtd = 0, finalQtd = 0;
  for (let i = 0; i < len; i++) {        
      if (longestSubstring.indexOf(letters[i]) !== -1) {
          longestSubstring = longestSubstring.slice(longestSubstring.indexOf(letters[i]) + 1)
          longestSubstring.push(letters[i])
          qtd = longestSubstring.length
      } else {
          longestSubstring.push(letters[i])
          qtd++
      }
      
      finalQtd = Math.max(qtd, finalQtd);
  }

  return finalQtd;
};

// v2
var lengthOfLongestSubstringv2 = function(s) {
  const codes = new Array(100).fill(0);
  
  const len = s.length;
  let max = 0;
  let back = 0;
  
  for (let i = 0; i < len; i++) {
      const x = s.charCodeAt(i) - OFFSET;
      codes[x]++;
      while (codes[x] > 1) {
          const backCode = s.charCodeAt(back) - OFFSET;
          codes[backCode]--;
          back++;
      }
      max = Math.max(max, i + 1 - back);
  }
  
  return max;
};

console.log(lengthOfLongestSubstringv2('abcabcbb'))
