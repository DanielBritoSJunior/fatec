def coletanota(cont):
    while True:
        nota = float(input("Digite a"+cont+"nota: "))
        if 0 <= nota <= 10:
            break
        else:
            print("Dado inválido, tente novamente")
    return nota

n1 = coletanota(" primeira ")
n2 = coletanota(" segunda ")
n3 = coletanota(" terceira ")
n4 = coletanota(" quarta ")
n5 = coletanota(" quinta ")

ordem = [n1,n2,n3,n4,n5]
while True:
    if ordem [3] < ordem [4]:
        maior = ordem.pop(4)    #.pop(delete o 4 e devolve o valor)
        ordem.insert(3,maior)   #.insert(inserir no lugar q quer)
    if ordem [2] < ordem [3]:
        maior = ordem.pop(3)
        ordem.insert(2,maior)
    if ordem [1] < ordem [2]:
        maior = ordem.pop(2)
        ordem.insert(1,maior)
    if ordem [0] < ordem [1]:
        maior = ordem.pop(1)
        ordem.insert(0,maior)
    if ordem [0] >= ordem [1] >= ordem [2] >= ordem [3] >= ordem [4]:
        break

print("Nome: Daniel Brito da Silva Júnior RA: 1051392411007 Turma: DSM 2024")
print("A maior nota é: ", ordem[0]) 