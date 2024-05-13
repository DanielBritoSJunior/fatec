while True:
    peso = float(input("Insira o seu peso: "))
    if peso < 0:
        print("Insira um dado válido!")
    else:
        break

while True:
    sexo = input("Insira o seu sexo, use F para feminino e M para masculino: ").lower() #transforma em minúsculo.
    if sexo != "f" and sexo != "m":
        print("Insira um dado válido!")
    else:
        break

while True:
    altura = float(input("Insira sua altura: "))
    if altura < 0:
        print("Insira uma altura válida!")
    else:
        break

print("Nome: Daniel Brito da Silva Júnior RA: 1051392411007 Turma: DSM 2024")
if sexo == "f":
    r = peso/(altura**2)
    if r<19:
        print("Você está abaixo do peso!")
    elif 19<=r<24:
        print("Você está no seu peso ideal!")
    elif r>=24:
        print("Você está acima do peso!")

if sexo == "m":
    r = peso/(altura**2)
    if r<20:
        print("Você está abaixo do peso!")
    elif 20<=r<25:
        print("Você está no seu peso ideal!")
    elif r>=25:
        print("Você está acima do peso!")

