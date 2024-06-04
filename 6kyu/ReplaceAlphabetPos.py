def alphabet_position(text):
    chars = { chr(i + 96):i for i in range(1,27) }
    string = "".join(text.split(" "))
    pos = []

    for letter in string.lower():
        if letter in chars:
            pos.append(str(chars[letter]))

    return " ".join(pos)