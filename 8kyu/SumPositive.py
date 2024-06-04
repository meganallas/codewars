def positive_sum(arr):
    sum = 0
    for num in arr:
        if num > 0:
            sum += num
    return sum

positive_sum([1,2,3,4,5])
positive_sum([1,-2,3,4,5])
positive_sum([-1,2,3,4,-5])