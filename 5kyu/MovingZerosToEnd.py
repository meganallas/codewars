def move_zeros(list):
    for num in list:
        if num == 0:
            list.remove(num)
            list.append(0)
    return list