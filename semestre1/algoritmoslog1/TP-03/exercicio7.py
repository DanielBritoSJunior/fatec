print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
salario = float(input("Digite o seu salário:"))

if salario<0:
    print("Valor de salário invalido!")
elif salario<=1500:
    salario = salario * 1.2
    print(salario, "é o valor do salário com acréscimo")
elif 2500>salario>1500:
    salario = salario * 1.1
    print(salario, "é o valor do salário com acrescimo")
else:
    salario = salario * 1.05
    print(salario, "é o valor do salário com acrescimo")
