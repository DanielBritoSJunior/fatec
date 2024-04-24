print("Nome: Daniel Brito da Silva Júnior RA: 1051392411007")
valor = float(input("Insira um número: "))
import math

def pot(x,y):
    pot = x**y
    return pot

def fat(x):
    return math.factorial(x)


def div(divisor,dividendo):
    div = divisor/dividendo
    return div

if valor == 1 or valor == 2:
    print("O valor elevado ao cubo é: ", pot(valor,3))
elif (valor % 3) == 0 and valor >= 0:
    print("O fatorial do valor inserido é: ", fat(valor))
elif valor == 4 or valor == 5 or valor == 7 or valor == 8:
    print("O valor inserido dividido por 9 é: ", div(valor,9))
else:
    print("Valor inválido!")