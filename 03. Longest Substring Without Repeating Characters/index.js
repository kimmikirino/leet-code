const OFFSET = ' '.charCodeAt(0);
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring0 = function (s) {
    const arr = s.split('')
    let mapCombo = {}
    let auxCombo = {}
    
    let lastIndex = 0
    let result = 0

    arr.forEach((item, idx) => {
        if (mapCombo[item]) {
            const copyItemIdx = mapCombo[item]
             for(let i = lastIndex; i <= copyItemIdx; i ++) {
                console.log(auxCombo[i], i, mapCombo[item])
                if(mapCombo[auxCombo[i]] <= copyItemIdx) delete mapCombo[auxCombo[i]]
             }
             lastIndex = copyItemIdx
        }
        mapCombo[item] = idx
        auxCombo[idx] = item
        const cLength = Object.keys(mapCombo).length
        result = result > cLength ? result : cLength

    })

    return result
};

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

var lengthOfLongestSubstringv3 = function (s) {
    var chars = new Set();
    var left = 0;
    var right = 0;
    var maxLength = 0;

    while (right < s.length) {
        var char = s[right];
        while (chars.has(char)) {
            chars.delete(s[left]);
            left++;
        }
        chars.add(char);
        if (maxLength < right - left + 1) {
            maxLength = right - left + 1;
        }
        right++;
    }

    return maxLength;
};

console.log(lengthOfLongestSubstringv2('abcabcbb'))
