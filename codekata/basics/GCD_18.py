n,k=map(int,input().split())
if(n>k):
    G=n
else:
	G=k
for i in range (1,G+1):
	if(n%i==0 and k%i==0):
		gcd=i
print(gcd)
