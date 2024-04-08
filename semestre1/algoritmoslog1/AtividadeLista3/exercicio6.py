print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
num = int(input("Digite um número:"))

div5 = False
div10 = False
div2 = False
if num % 10 == 0:
    print(num, "é divisivel por 10")
    div10 = True
if num % 5 == 0:
    print(num, "é divisivel por 5")
    div5 = True
if num % 2 == 0:
    print(num, "é divisivel por 2")
if div10 == False and div5 == False and div2 == False:
    print(num, "não é divisivel por 2, 5 ou 10")