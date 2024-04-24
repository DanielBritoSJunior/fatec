print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")
execucao = True
while execucao == True:
    compra = float(input("Digite o valor da compra:"))
    if compra>300:
        compradesc = compra*0.8
        print("Valor total da compra é R$", compra)
        print("Valor final com desconto é R$", compradesc)
        execucao = False
    elif 300>compra>200:
        compradesc = compra*0.9
        print("Valor total da compra é R$", compra)
        print("Valor final com desconto é R$", compradesc)
        execucao = False
    elif 0<compra<200:
        compradesc = compra*0.95
        print("Valor total da compra é R$", compra)
        print("Valor final com desconto é R$", compradesc)
        execucao = False
    else:
        print("Valor invalido, insira um valor maior que zero!")
        
        