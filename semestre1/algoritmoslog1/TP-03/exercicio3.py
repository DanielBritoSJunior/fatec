print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
name = input("Insira seu nome:")
ra = (input("Insira seu RA:"))
nota1 = float(input("Qual sua nota1:"))
nota2 = float(input("Qual sua nota2:"))
 
soma = nota1 + nota2
mg = soma/2
if mg<7:
    print("Média geral insuficiente.")
    notaexame = float(input("Digite a nota do exame:"))
    mediafinal = (mg + notaexame) / 2
if mediafinal>=5:
        print("Parabéns, você aproveitou a sua chance! Está aprovado.")
elif mediafinal<5:
        print("Estude mais para a próxima. Você não alcançou o mínimo necessário.")
elif (mg>=7):
        print("Sua média geral é:", mg)
        print("Parabéns, você está aprovado!")