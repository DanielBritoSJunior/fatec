# Nome: Daniel Brito da Silva Junior  RA:1051392411007

compra1 = float(input("Insira o valor da compra1:"))
compra2 = float(input("Insira o valor da compra2:"))
compra3 = float(input("Insira o valor da compra3:"))
# Linhas 1-3 coletada de dados do usuario passando de str para float.

print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")

# COMPRA 1

if(compra1>=0): 
    print("Valor total da compra1:", compra1)
else:
    print("Valor inválido, insira um valor maior que zero.")
if(0<=compra1<100):
    compracomdesconto1 = compra1
elif(200>compra1>=100):
    compracomdesconto1 = compra1*0.9
elif(300>compra1>=200):
    compracomdesconto1 = compra1*0.85
elif(compra1>=300):
    compracomdesconto1 = compra1*0.8
else:
    compracomdesc1 = "Valor inválido, insira um número maior que zero"
print("Valor com desconto da compra 1 é:" ,compracomdesconto1)

# Linhas 8-22, separa o valor dado em diferentes casos dependendo do valor inserido, dessa forma, aplicando o desconto esperado.

# COMPRA 2

if(compra2>=0):
    print("Valor total da compra2:", compra2)
else:
    print("Valor inválido, insira um valor maior que zero.")
if(0<=compra2<100):
    compracomdesconto2 = compra2
elif(200>compra2>=100):
    compracomdesconto2 = compra2*0.9
elif(300>compra2>=200):
    compracomdesconto2 = compra2*0.85
elif(compra2>=300):
    compracomdesconto2 = compra2*0.8
else:
    compracomdesconto2 = "Valor inválido, insira um número maior que zero"
print("Valor com desconto da compra 2 é:" ,compracomdesconto2)

# Linhas 28-42, separa o valor dado em diferentes casos dependendo do valor inserido, dessa forma, aplicando o desconto esperado.

# COMPRA 3

if(compra3>=0):
    print("Valor total da compra3:", compra3)
else:
    print("Valor inválido, insira um valor maior que zero.")
if(0<=compra3<100):
    compracomdesconto3 = compra3
elif(200>compra3>=100):
    compracomdesconto3 = compra3*0.9
elif(300>compra3>=200):
    compracomdesconto3 = compra3*0.85
elif(compra3>=300):
    compracomdesconto3 = compra3*0.8
else:
    compracomdesconto3 = "Valor inválido, insira um número maior que zero"
print("Valor com desconto da compra 3 é:" ,compracomdesconto3)

# Linhas 48-62, separa o valor dado em diferentes casos dependendo do valor inserido, dessa forma, aplicando o desconto esperado.
