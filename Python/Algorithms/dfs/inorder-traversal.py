# dfs for a binary search tree


class tree_node():
    def __init__(self, val):
        self.left = None
        self.right = None
        self.val = val

node1 = tree_node(1)
node2 = tree_node(2)
node3 = tree_node(3)
node4 = tree_node(4)

node1.left = node2
node1.right = node3
node2.left = node4

def inorder(root: tree_node):

    if root is None:
        return 

    inorder(root.left)
    print(root.val)
    inorder(root.left)


inorder(node1)