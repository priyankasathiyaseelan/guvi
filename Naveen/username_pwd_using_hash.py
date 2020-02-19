import hashlib
user="priya"
password="prider"
task=hashlib.sha256(password.encode()).hexdigest()
for i in range(1,6):
  usr=input("Enter user name : ")
  pwd=input("Enter password : ")
  task1=hashlib.sha256(pwd.encode()).hexdigest()
  if(user==usr):
    if(password==pwd):
      print("ok")
      break
  
