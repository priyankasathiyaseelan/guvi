import math
n = float(input(''))
def tri(side):
	Area = 1/4*((math.sqrt(3)*(side * side)))
	return Area
tri(n)
print("%.2f" %tri(n))
