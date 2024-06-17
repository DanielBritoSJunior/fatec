nome = input("Digite seu nome: ")
def coleta(p):
    while True:
        nota = float(input("Digite a nota da"+p+": "))
        if nota<0 and nota>10:
            print("Nota inválida. Insira um valor entre 0-10!")
        else:
            break
    return nota

n1 = coleta(" P1")
n2 = coleta(" P2")
mg = (n1*4 + n2*6)/10

print("Nome: Daniel Brito RA: 1051392411007")
if mg>=9:
    print("Sua média geral foi: ", mg)
    print("Conceito: A")
    print("Situação: Aprovado.")
elif mg>=7:
    print("Sua média geral é: ", mg)
    print("Conceito: B")
    print("Situação: Aprovado.")
elif mg>=3:
    print("Sua média geral é: ", mg)
    print("Conceito: C")
    print("Situação: Exame.")
elif mg>=0:
    print("Sua média geral é: ", mg)
    print("Conceito: D")
    print("Situação: DP.")