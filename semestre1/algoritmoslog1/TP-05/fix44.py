nome = input("Digite seu nome: ")
def coleta(p):
    while True:
        nota = float(input("Digite a nota da"+p+": "))
        if nota<0 or nota>10:
            print("Digite uma nota válida!")
        else:
            break
    return nota

n1 = coleta(" P1")
n2 = coleta(" P2")
mg = (n1*4 + n2*6)/10

print("Nome: Daniel Brito da Silva Júnior RA: 1051392411007 Turma: DSM 2024")
if mg>=9:
    print("Sua média geral é: ", mg)
    print("Conceito: A")
    print("Situação: Aprovado")
elif mg>=7:
    print("Sua média geral é: ", mg)
    print("Conceito: B")
    print("Situação: Aprovado")
elif mg>=3:
    print("Sua média geral é: ", mg)
    print("Conceito: C")
    print("Situação: Exame")
elif mg>=0:
    print("Sua média geral é: ", mg)
    print("Conceito: D")
    print("Situação: DP")