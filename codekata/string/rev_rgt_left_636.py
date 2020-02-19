def string_reverse(a):
    rstr1 = ''
    index = len(a)
    while index > 0:
        rstr1 += a[ index - 1 ]
        index = index - 1
        
    return rstr1
#Get input from user
a=input()
#Calling the function
b=string_reverse(a)
print(string_reverse(a).capitalize())
