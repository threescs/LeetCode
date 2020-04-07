/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head == null) {
        return head;
    }
    let headItem = head;
    while(headItem.next !== null) {
        if(headItem.val == headItem.next.val) {
            headItem.next = headItem.next.next
        }else {
            headItem = headItem.next
        }
    }
    return head
}