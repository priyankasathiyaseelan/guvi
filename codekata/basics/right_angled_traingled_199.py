def checkvalidity(a,b,c):
	if(a+b<=c) or (a+c<=b) or (b+c<=a):
		return False
	else:
		return True
a,b,c=map(int,input().split())
if checkvalidity(a,b,c):
	print("yes")
else:
	print("no")
