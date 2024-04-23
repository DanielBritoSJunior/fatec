def coletar_valor():
    while True:
        valor = float(input("Insira o valor da compra: "))
        if valor>=0:
            break
        else:
            print("Valor inválido.")
    return valor

def ver_intervalo(min,max,x):
    if x>=min and x<max:
        return True
    else:
        return False
    
while True:
    valor = coletar_valor()
    if ver_intervalo(0,199.99,valor) == True:
        valor_desconto = valor * 0.95
    elif ver_intervalo(200,299.99,valor) == True:
        valor_desconto = valor * 0.9
    else:
        valor_desconto = valor * 0.8

    print("Valor total da compra", valor)
    print("Valor com desconto é:", valor_desconto)

    escolha = input("Gostaria de consultar outra compra? Se sim, digite S, se não, digite N.").upper()
    if escolha == "N":
        break