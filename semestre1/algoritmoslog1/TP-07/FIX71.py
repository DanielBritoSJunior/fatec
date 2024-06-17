def calcular_pgto(ht,vh):
    if ht<=40:
        salario = ht*vh
    else:
        salario = (40*vh)+(ht-40)*(vh*1.5)
    return salario
vh = int(input("Digite o valor o valor a ser pago por hora de trabalho(R$/h): ")) #vh = valor hora
ht = int(input("Digite a quantidade de horas que foram trabalhadas: ")) #ht = horas trabalhadas
salario = calcular_pgto(ht,vh)
print("Nome: Daniel Brito RA: 1051392411007")
print("O valor a ser pago é R$"+str(salario))
