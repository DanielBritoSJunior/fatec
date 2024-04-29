print("Nome: Daniel Brito da Silva Júnior RA:1051392411007")

def verif_idade(idade_):
    if idade_>65:
        return 1
    elif idade_>18:
        return 2
    else:
        return 3

nome = input("Insira seu nome: ")
idade = int(input("Insira sua idade: "))

verif_idade = verif_idade(idade)
if verif_idade == 1:
    print("Bem vindo(a)", nome, "você é maior de 65 anos.")
if verif_idade == 2:
    print("Bem vindo(a)", nome, "você é maior de idade.")
if verif_idade == 3:
    print("Bem vindo(a)", nome, "você é menor de idade;")