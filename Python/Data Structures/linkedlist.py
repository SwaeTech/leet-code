
class Node:
    def __init__(self, val = ""):
        self.val = val
        self.next = None


head = Node("a")
head.next = Node("b")
head.next.next = Node("c")
head.next.next.next = Node("d")
head.next.next.next.next = Node("e")
tail = head.next.next.next.next.next = Node("f")

def loop_list(head: Node):
    curr = head
    while curr:
        print(curr.val)
        curr = curr.next

def reverse_list(head: Node):
    # initialize the previous and current node pointers
    prev = None
    curr = head
    # while curr is not None
    while curr:
        # save the next node in a temp variable
        next_temp = curr.next
        # reverse the direction of the current Node pointer
        curr.next = prev
        # shift the prev and curr Node pointers
        prev = curr
        curr = next_temp

loop_list(head)
reverse_list(head)
loop_list(tail)
