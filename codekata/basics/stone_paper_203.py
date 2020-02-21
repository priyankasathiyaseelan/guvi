#Get two input
G1,G2=input().split()
#check gaming condition
if(G1=="R" and G2=="P" or (G1=="S" and G2=="R")or (G1=="P" and G2=="S")):
    print(G2)
elif(G1=="R" and G2=="S" or(G1=="P" and G2=="R")or(G1=="S" and G2=="P") ):
    print(G1)
elif(G1==G2):
    print("D")
