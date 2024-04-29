print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
name = input("Insira seu nome:")
ra = int(input("Insira seu RA:"))
nota1 = float(input("Qual sua nota1:"))
nota2 = float(input("Qual sua nota2:"))

def cal_media(nota1,nota2):
    mg = (nota1+nota2)/2
    return mg

mg = cal_media(nota1,nota2)
if mg>=7:
    print("Sua média geral é:", mg)
    print("Parabéns, você está aprovado!")
elif mg<7:
    print("Sua média geral é:", mg)
    print("Você  ainda  tem  uma  chance!  Estude  mais  para  o exame.")
else:
    print("Nota inválida...")