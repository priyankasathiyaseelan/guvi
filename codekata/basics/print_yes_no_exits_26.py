N,K=map(int,input().split())
n=list(map(int,input().split()))
count=0
for i in range(len(n)):
	if(n[i]==K):
		count=count+1
if(count!=0):        
	print("yes")
else:
	print("no")  
