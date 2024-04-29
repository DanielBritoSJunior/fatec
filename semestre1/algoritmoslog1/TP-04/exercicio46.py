print("Nome: Daniel Brito da Silva Júnior RA: 1051392411007")

valor = float(input("Insira um valor: "))

def modulo(x):
    if x<0:
        mod = x * -1
    else:
        mod = x
    return mod

def diferenca(x,y):
    diferenca = x-y
    if dif < 0:
        dif = dif * -1
    return dif

def divisao(x,y):
    divisao = x/y
    return divisao

if valor <0:
    print("O valor é:", modulo(valor))
elif valor>10:
    valor2 = float(input("Digite um outro valor:"))
    print("O valor é:", diferenca(valor,valor2))
else:
    print("O valor :", divisao(valor,5))
    
