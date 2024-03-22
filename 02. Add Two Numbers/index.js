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

var addTwoNumbers2 = function (l1, l2) {
    let dummy = new ListNode(null)
    let result = dummy
    let carry = 0
    while (l1 || l2 || carry) {
        
        const val1 = l1?.val || 0;
        const val2 = l2?.val || 0;

        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10)
        result.next = new ListNode(sum % 10)
        result = result.next

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummy.next
};
