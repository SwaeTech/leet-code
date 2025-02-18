# reverse singly linked list

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


head = Node("a")
head.next = Node("b")
head.next.next = Node("c")
head.next.next.next = Node("d")
head.next.next.next.next = Node("e")
tail = head.next.next.next.next.next = Node("f")


def traverse_list(init: Node):
    curr = init
    while curr:
        print(curr.val)
        curr = curr.next

def reverse_list(init: Node):
    prev = None
    curr = init
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp

traverse_list(head)
reverse_list(head)
traverse_list(tail)