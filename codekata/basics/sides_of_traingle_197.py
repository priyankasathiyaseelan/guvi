def triangle():  
    A, B,C = map(int, input().split())
    y="yes"
    n="no"
    if (A + B <= C) or (A + C <= B) or (B + C <= A) :       # check condition  
        print(n)
    else: 
        print(y)
    return y,n
res=triangle()
print()
