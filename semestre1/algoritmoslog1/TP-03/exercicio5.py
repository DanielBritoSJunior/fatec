print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
valor = float(input("Digite um valor:"))

if valor <0:
    valor = valor * -1
    print("O valor é:", valor)
elif valor>10:
    valor2 = float(input("Digite um outro valor:"))
    valor2 = valor - valor2
    print("O valor é:", valor2)
else:
    valor = valor/5
    print("O valor é:", valor)
