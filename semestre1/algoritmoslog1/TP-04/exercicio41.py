print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
num = int(input("Digite um número de 1-9:"))
def potenciacao(base,expoente):
    resultado = base**expoente
    return resultado

def raiz(radicando,indice):
    resultado = radicando**(1/indice)
    return resultado

def divisao(dividendo,divisor):
    resultado = dividendo/divisor
    return resultado


if(num == 1 or num == 2 or num == 3):
    num = potenciacao(num,2)
    print("O valor do numero inserido, elevado ao quadrado, é:", num)
elif((num == 4 or num ==9)):
    num = raiz(num,2)
    print("A raiz quadrada do número inserido é:", num)
elif(num == 6 or num ==7 or num ==8):
    num = divisao(num,9)
    print("O número inserido, divido por 9, é:", num)
else:
    print("Número invalido, digite um número entre 1-9.")