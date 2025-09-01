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

# use visited because there are cyclic paths
# You have to pass the whole tree object when you don't create individual tree nodes

def find_path(tree, start, end, visited, path):
    
    path = path + [start]
    visited.add(start)

    if start == end:
        return path

    for node in tree[start]:
        if node not in visited:
            new_path = find_path(tree, node, end, visited, path)
            # if any path was found, return that back up the chain
            # but what if I initialized the new_path variable outside the function
            # and then just viewed it after running this function?
            if new_path:
                return new_path
    
    return None



def find_path_outside(tree, start, end, visited, path, new_path):
    
    path = path + [start]
    visited.add(start)

    if start == end:
        new_path.extend(path)

    for node in tree[start]:
        if node not in visited:
            find_path_outside(tree, node, end, visited, path, new_path)
            # if any path was found, return that back up the chain
            # but what if I initialized the new_path variable outside the function
            # and then just viewed it after running this function?

    return None

visited = set()
path = []
new_path = []


find_path_outside(tree, 'A', 'J', visited, path, new_path)
print(new_path)
