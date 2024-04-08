# Nome: Daniel Brito da Silva Junior  RA:1051392411007

# Declarações condicionais...
operation = input(''' Por favor, escolha o tipo de operação que deseja:
[+] para adição
[-] para subtração
[*] para multiplicação
[/] para divisão
''')
if operation!='+'and operation!= '-' and operation!='*'and operation!='/':
    print("Tipo de operação inválida, inicie o programa novamente.")
else:
    n1 = int(input("digite o primeiro numero:")) # n1 = primeiro número
    n2 = int(input("digite o segundo numero:")) # n2 = segundo número

print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")

# Adição
if(operation == '+'):
    print('{} + {} =' .format(n1, n2))
    print(n1 + n2)

#Subtração
elif(operation == '-'):
    print('{} - {} =' .format(n1, n2))
    print(n1 - n2)

#Multiplicação
elif(operation == '*'):
    print('{} * {} =' .format(n1, n2))
    print(n1 * n2)

#Divisão
elif(operation == '/'):    
    print('{} / {} =' .format(n1, n2))
    print(n1 / n2)

