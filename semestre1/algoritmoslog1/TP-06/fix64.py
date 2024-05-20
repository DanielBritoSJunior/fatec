with open("semestre1/algoritmoslog1/TP-06/mensagem.txt", "r", encoding="utf-8") as doc:
    texto = doc.read()
    lista = texto.split(" ")
    print(len(texto))
    print(lista)