# Exactly! 🌟 When you call the dfs function, each call is added to the call stack. 
# The traversal list is updated with each node as you go deeper. Since traversal is
# a reference to the same list across all function calls, it retains all the nodes
# added, even as functions complete and are popped off the stack. T
# his way, you end up with a complete traversal of the tree! Keep exploring! 🚀


def search(tree, root, visited, path):
    path.append(root)
    visited.add(root)
    print(f' -> {root}')

    for child in tree[root]:
        if child not in visited:
            search(tree, child, visited, path)

visited = set()
path = []

tree = {
    'A': ['B', 'C', 'D'],
    'B': ['A', 'E', 'F'],
    'C': ['A'],
    'D': ['A', 'G', 'H'],
    'E': ['B'],
    'F': ['B', 'I', 'J'],
    'G': ['D'],
    'H': ['D'],
    'I': ['F'],
    'J': ['F'],
}

search(tree, 'A', visited, path)

