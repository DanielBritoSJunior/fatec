# Nome: Daniel Brito da Silva Junior  RA:1051392411007

sexo = input('''Qual seu sexo? Escolha entre:
Masculino (M)
Feminino (F)
''')

h = float(input("Digite tua altura, em metros: ")) # h= altura

p_ideal_m = (72.7 * float(h)) - 58 # p_ideal_m= peso ideal masculinolo
p_ideal_f = (62.1 * float(h)) - 44.7 # p_ideal_f= peso ideal feminino

print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")

if h<0:
    print("Altura inválida!")
elif sexo != "M"and sexo != "F":
    print("Sexo inválido.")
elif sexo == "M":
    print("Seu peso ideal: %.2f" %p_ideal_m)
elif sexo == "F":
    print("Seu peso ideal:%.2f" %p_ideal_f)