senhas = 0
while True:
    with open("C:/Users/1051392411007/Desktop/fatec/semestre1/algoritmoslog1/TP-06/senha.txt","a+", encoding="utf-8") as doc:
        senhanova = input("Digite a senha que quer cadastrar: ") + "\n"
        doc.write(senhanova) #.write escrever oq a pessoa escreveu no terminal.
    senhas += 1
    if senhas == 5:
        break

with open("C:/Users/1051392411007/Desktop/fatec/semestre1/algoritmoslog1/TP-06/senha.txt", "a+", encoding="utf-8") as doc:
    print(doc.read()) #printar oque esta ecrito no documento .txt