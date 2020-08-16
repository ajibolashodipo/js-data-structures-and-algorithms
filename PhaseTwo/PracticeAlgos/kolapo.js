def validPairs(numbers, k):
    count = 0
    numbers.sort()
    a = 0
    b = 0
    n = len(numbers)
    diff = numbers[b] - numbers[a]
    pairs=[]
    while b < n:
        if numbers[a] + k == numbers[b]:
            count +=1
            a +=1
            b +=1
            pairs.append((a,b))
        elif numbers[a] + k < numbers[b]:
            a +=1
        else :
            b +=1
        # print(numbers[a])
        # print(k)
        print(pairs)
    return count

print(validPairs([1,1,2,2,3,3],1)) 