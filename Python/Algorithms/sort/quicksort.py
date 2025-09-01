# quicksort is a divide and conquer algorithm
# It works by selecting a pivot element from the list
# and then partitioning the other elements into two sub-arrays
# - elements less than the pivot
# - elements greater than the pivot
# The sub arrays are then recursively sorted.
# This process continues until the base case is reached (a list with zero or one element)

# ELI5 - the base case is the last condition for returning a result before more recursion
# every recursive problem has two distinct return statements (the normal one, and the base case one)

arr = [1,5,7,8,32,1,5]

def quicksort(arr):
    # base case first for recursion (when to stop and start bubbling up)
    if (len(arr) <= 1):
        return arr
    
    # step 1: choose the pivot (commonly the last element)
    pivot = arr[-1]

    # step 2: partition (the other elements into) all but the last index
    lessThanPivot = []
    greaterThanPivot = []

    for num in arr[0:-1]:
        if num <= pivot:
            lessThanPivot.append(num)
        else:
            greaterThanPivot.append(num)

    # step 3: bubble up the merge and recursively sort the partitions
    partitionMerge = quicksort(lessThanPivot) + [pivot] + quicksort(greaterThanPivot)
    return partitionMerge


sorted = quicksort(arr)
print(sorted)