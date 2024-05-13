def verif(n):
    if n < 0:
        print("Digite um número válido.")
    else:
        return True

def interv(salario_):
    if salario_<=1500:
        return 1
    elif 2500>salario_>1500:
        return 2
    elif salario_>=2500:
        return 3
    
while True:
    salario = float(input("Digite o seu salário: "))
    if verif(salario) == True:
        break
print("Nome: Daniel Brito da Silva Júnior RA: 1051392411007 Turma: DSM 2024")
if interv(salario) == 1:
    novosalario = salario * 1.2
    print("Seu salário é: ", novosalario)
elif interv(salario) == 2:
    novosalario = salario * 1.1
    print("Seu salário é: ", novosalario)
elif interv(salario) == 3:
    novosalario = salario * 1.05
    print("Seu salário é: ", novosalario)