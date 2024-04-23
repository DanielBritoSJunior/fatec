def div5(x):
    if x % 5 == 0:
        return True
    else:
        return False

def div2(x):
    if x % 2 == 0:
        return True
    else:
        return False

def div10(x):
    if x % 10 == 0:
        return True
    else:
        return False
    
print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
num = float(input("Insira um numero: "))
por2 = div2(num)
por5 = div5(num)
por10 = div10(num)

if por2 == True:
    print(num, "é divisivel por 2")
if por5 == True:
    print(num, "é divisivel por 5")
if por10 == True:
    print(num, "é divisivel por 10")
if por2 == False and por5 == False and por10 == False:
    print(num, "não é divisivel por 2,5 ou 10")
