var convertToArray = function (ln) {
  let next = ln.next
  let val = [ln.val]
  while (next) {
      val.push(next.val)
      next = next.next
 }
  
  return val
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let arrl1 = BigInt(convertToArray(l1).reverse().join(''))
  let arrl2 = BigInt(convertToArray(l2).reverse().join(''))
  let sum = arrl1 + arrl2 
  return sum.toString().split('').reduce((next, val) => ({ val, next }), null)
};

