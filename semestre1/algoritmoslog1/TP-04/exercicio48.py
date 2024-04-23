def coletar_salario():
    while True:
        salario_ = float(input("Insira o salário: "))
        if salario_>=0:
            break
        else:
            print("Salário inválido.")
    return salario_

def acrescimo(salario_,acrescimo):
    return salario_*acrescimo

salario = coletar_salario()
if salario<=1500:
    novosalario = acrescimo(salario,1.2)
    print(salario, "é o seu salário sem acréscimo.")
    print(novosalario, "é o valor do salário com acréscimo")
elif 2500>salario>1500:
    novosalario = acrescimo(salario,1.1)
    print(salario, "é o seu salário sem acréscimo.")
    print(novosalario, "é o valor do salário com acrescimo")
else:
    novosalario = acrescimo(salario,1.05)
    print(salario, "é o seu salário sem acréscimo.")
    print(novosalario, "é o valor do salário com acrescimo")

aumento = str(novosalario - salario)
print("O seu salario aumentou R$ "+aumento)