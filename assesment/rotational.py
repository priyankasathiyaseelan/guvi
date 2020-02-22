n=int(input())
a=input().split()
b=input().split()
s1=''
s2=''
for i in range(n):
  s1+=a[i]
  s2+=b[i]
c=s1+s1
print(c.index(s2))
