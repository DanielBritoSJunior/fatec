print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
name = input("Insira seu nome:")
ra = int(input("Insira seu RA:"))
execucao = True
while execucao == True:
    nota1 = float(input("Qual sua nota1:"))
    nota2 = float(input("Qual sua nota2:"))

    soma = nota1 + nota2
    mg = soma/2
    if mg>=7:
        print("Sua média geral é:", mg)
        print("Parabéns, você está aprovado!")
        execucao = False
    elif mg<7 and nota1>=0 and nota2>=0:
        print("Sua média geral é:", mg)
        print("Você  ainda  tem  uma  chance!  Estude  mais  para  o exame.")
        execucao = False
    else:
        print("Nota invalida, insira uma nota maior que zero!")

