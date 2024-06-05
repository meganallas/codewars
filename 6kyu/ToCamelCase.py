import re

def to_camel_case(text):
    arr = re.split("-|_", text)
    for word in arr:
        if word is not arr[0]:
            arr[arr.index(word)] = word.capitalize()
    return "".join(arr)