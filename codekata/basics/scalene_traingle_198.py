def checkvalid(a,b,c):
    if((a!=b) and (b!=c) and (a!=c)):
        return True
    else:
        return False
a,b,c=map(int,input().split())
if checkvalid(a,b,c):
    print("yes")
else:
    print("no")
