emails = 0
while True:
    with open("C:/Users/1051392411007/Desktop/fatec/semestre1/algoritmoslog1/TP-06/email.txt","a+", encoding="utf-8") as doc:
        emailnovo = input("Digite o email que quer cadastrar: ") + "\n"
        doc.write(emailnovo) #.write escrever oq a pessoa escreveu no terminal.
    emails += 1
    if emails == 3:
        break

with open("C:/Users/1051392411007/Desktop/fatec/semestre1/algoritmoslog1/TP-06/email.txt", "a+", encoding="utf-8") as doc:
    print(doc.read()) #printar oque esta ecrito no documento .txt

