
/**
 * Linked List Node
 */

class node {
    constructor(val = null){
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {head} head (head of linked list)
 * @param {string} n (node to remove from the end)
 * @return {node} (head of linked list with nth node removed)
 */
export var removeNthNode = function(head, n) {

    // handle edge case of list with 1 or 0 nodes
    if (!head){
        return null;
    }

    if (!head.next && n === 1){
        return null;
    }

    let originalHead = head;
    let nodes = [];
    nodes.push(head);
    head = head.next

    // use a stack
    // delete from the bottom of the stack when it reaches a length of n+1
    while (head){
        nodes.push(head);
        if (nodes.length > n){
            // remove the first index
            nodes.shift();
        }
        head = head.next
    }

    let nodeToRemove = nodes[0];
    head = originalHead;

    // handle edge case where the first node is the one to remove
    if (head === nodeToRemove){
        originalHead = head.next;
        head = null;
    }

    while (head){
        if (head.next === nodeToRemove){
            head.next = head.next.next;
            nodeToRemove.next = null;
            break;
        }
        head = head.next;
    }

    return originalHead;

};


