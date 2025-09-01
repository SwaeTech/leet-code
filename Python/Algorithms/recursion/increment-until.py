# def increment_until(n, target):
#     if n == target:
#         return n
#     return increment_until(n + 1, target)

# # Example usage
# result = increment_until(5, 10)
# print(result)  # Output: 10

def increment_until(n):
    if n == 0:
        return n
    n = n - 1
    return 2 + increment_until(n)

# Example usage
result = increment_until(3)
print(result)  # Output: 10

n = 3
2 + increment_until(3) = 2 + 2 + increment_until(2) = 2 + 2 + increment_until(1) = 2 + 2 + 2 + 0

def increment_until(n):
    if n == 3:
        return n
    return increment_until(n-1)

# Example usage
result = increment_until(3)
print(result)  # Output: 10

n = 3
increment_until(3) = increment_until(2) = increment_until(1) = 3