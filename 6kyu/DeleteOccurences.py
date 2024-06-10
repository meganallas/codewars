def delete_nth(list, max_e):
    ans = []
    for num in list:
        if ans.count(num) < max_e: ans.append(num)
    return ans


# delete_nth([20, 37, 20, 21, 20], 1) # [20, 37, 21]

# delete_nth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3) # [1, 1, 3, 3, 7, 2, 2, 2]

# delete_nth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3) # [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]

# delete_nth([1, 1, 1, 1, 1], 5) # [1, 1, 1, 1, 1]

# delete_nth([], 5) #[]

# delete_nth([12, 39, 19, 39, 39, 19, 12], 1) # [12, 39, 19],

# def delete_nth(list, max_e):
#     counts = dict()
#     index_list = []

#     for index, num in enumerate(list):
#         if counts.get(num, 0) >= max_e:
#             index_list.append(index)
#         counts[num] = counts.get(num, 0) + 1

#     for position in index_list[::-1]:
#         list.pop(position)

#     return list