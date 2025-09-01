

# singly linked binary tree
class tree_node:
    def __init__(self, val):
        self.val = val
        self.right = None
        self.left = None

# root = tree_node(1)
# root.left = tree_node(2)
# root.right = tree_node(3)
# root.left.left = tree_node(4)
# root.left.right = tree_node(5)
# root.right.left = tree_node(6)
# root.right.right = tree_node(7)
# root.left.left.left = tree_node(8)
# root.left.left.right = tree_node(9)
# root.left.right.left = tree_node(10)
# root.left.right.right = tree_node(11)


root = tree_node(1)
root.left = tree_node(2)
root.right = tree_node(3)
root.left.left = tree_node(4)
root.right.right = tree_node(5)
root.right.right.right = tree_node(6)

'''
      1
   2     3
 4   5   6 7
8 9 10 11
'''

# first go all the way left until you hit the left most node
# then go up one, print that value and continue right
# 

def inorder(root: tree_node):
    if root is None:
        return
    inorder(root.left)
    print(root.val)
    inorder(root.right)

def maxDepth(root: tree_node) -> int:
    if root is None:
        return 0
    else:
        left_height = maxDepth(root.left)
        right_height = maxDepth(root.right)
    return max(left_height, right_height) + 1

# inorder(root)
print(maxDepth(root))

# find the max depth of a binary tree
# def max_depth(tree: Tree) -> int:
#     return -1