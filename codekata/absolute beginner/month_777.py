n=int(input(""))
def month():
  if(n==1 or n==3 or n==5 or n==7 or n==8 or n==10 or n==12):
    print("31")
  if(n==4 or n==6 or n==9 or n==11):
    print("30")
  if(n==2):
    print("28")
  else:
    print("Error") 
month() 
