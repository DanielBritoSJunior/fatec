print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
name = input("Insira seu nome:")
ra = int(input("Insira seu RA:"))
nota1 = float(input("Qual sua nota1:"))
nota2 = float(input("Qual sua nota2:"))

def cal_media(nota1,nota2):
    mg = (nota1+nota2)/2
    return mg

def cal_exame(mg,nota3):
    mg_exame = (mg + nota3)/2
    return mg_exame

mg = cal_media(nota1,nota2)
if mg>=7:
    print("Sua média geral é:", mg)
    print("Parabéns, você está aprovado!")
elif mg<7:
    print("Sua média geral é:", mg)
    print("Você  ainda  tem  uma  chance!  Estude  mais  para  o exame.")
    nota3 = float(input("Insira a nota do exame:"))
    cal_exame(mg,nota3)
    media_final = cal_exame(mg,nota3)
    if media_final>=5:
        print("A sua média final e:", media_final) 
        print("Voce aproveitou sua chance, parabens!!")
    elif media_final<5:
        print("Sua media final foi:", media_final)
        print("Você está reprovado.")
else:
    print("Nota inválida...")

