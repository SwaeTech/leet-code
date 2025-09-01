import re

def natural_sort(strings):
    """
    Sorts a list of strings naturally, handling numbers correctly.

    Args:
        strings: A list of strings to sort.

    Returns:
        A new list containing the sorted strings.
    """

    def alphanum_key(inner_list):
        """
        Turns a string into a list of string and number chunks.
        "z23a" -> ["z", 23, "a"]
        """
        split = re.split('([0-9]+)', inner_list)
        arr = [int(c) if c.isdigit() else c.lower() for c in split]
        return arr

    return sorted(strings, key=alphanum_key)


# Example Usage:
strings = ["z23a", "z12b", "z2a", "z1a", "z10a", "z1", "z02"]
sorted_strings = natural_sort(strings)
print(sorted_strings)  # Output: ['z1', 'z1a', 'z2', 'z2a', 'z10a', 'z12b', 'z23a']

strings2 = ["file1.txt", "file10.txt", "file2.txt", "file20.txt"]


strings = [["z","1","b"],["z","10","b"]]