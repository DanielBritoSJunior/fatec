print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
num = int(input("Digite um número de 1-9:"))
if(num == 1 or num == 2 or num == 3):
    print(num**2)
elif((num == 4 or num ==9)):
    print(num**(1/2))
elif(num == 6 or num ==7 or num ==8):
    print(num/9)
else:
    print("Número invalido, digite um número entre 1-9.")