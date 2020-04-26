/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 var mergeKlists = function(lists) {
     let arr = [];
     for(let i  = 0; i < lists.length; i++){
         while(lists[i]){
             arr.push(lists[i].val);
             lists[i] = lists[i].lnext;
         }
     }
     arr.sort((a, b) => a - b);
     let listNode = new ListNode();
     let head = ListNode;
     for(let i = 0; i < arr.length; i++) {
         head.next = new ListNode(arr[i])
         head = head.next
     }
     return listNode.next
 }