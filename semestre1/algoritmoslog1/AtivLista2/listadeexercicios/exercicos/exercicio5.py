# Nome: Daniel Brito da Silva Junior  RA:1051392411007

area = float(input("Digite o valor da area, em metros quadrado:"))

print("Nome: Daniel Brito da Silva Junior  RA:1051392411007 Turma: DSM 2024")

#1 lata = 108m^2
# quando a area a ser pintada exige um numero nao inteiro de latas, compra uma lata de tinta adicional.
qntd_latas = int(area//108)
if area%108 != 0:
    qntd_latas = qntd_latas+1
preço_latas = qntd_latas*80
print("Para pintar a área inserida, você precisará de:")
print("%i lata(s), com o preço de R$%i" %(qntd_latas,preço_latas))

#1 galao = 21,6m^2
#quando a area a ser pintada exige um numero nao inteiro de galoes tem a necessidade de adicionar outro galao.
qntd_galoes = int(area//21.6)
if area%21.6 != 0:
    qntd_galoes = qntd_galoes+1
preço_galoes = qntd_galoes*35
print("Para pintar a área inserida, você precisará de:")
print("%i galão(galões), com o preço de R$%i" %(qntd_galoes,preço_galoes))

# qntdlatasmistura e qntdmistura sao setados como 0 no começo para evitar erros.
# bloco 1, caso mais rentavel comprar apenas latas, quando a area a ser pintada seja maior que 43,2m^2(considerando 10% de folga).
# bloco 2, mais rentavel comprar apenas galoes, quando a area total a ser pintada, seja menor de 43,2m^2(considerando os 10% de folga).
# bloco 3, mais rentavel misturar os dois, quando tanto a area total a ser pintada quanto a area a ser pintada sao maiores que 43,2m^2
qntdlatasmistura = 0
qntdgaloes = 0
qntdlatas = 0
if ((area*1.1)%108)>43.2 or ((area*1.1)%108)==0:
    qntdlatas = int(area//108)
    if area%108 != 0:
        qntdlatas = qntdlatas + 1
    precolatas = qntdlatas * 80
elif (area*1.1)<108 and ((area*1.1)%108)<=43.2:
    qntdgaloes = int(area//21.6)
    if area%21.6 != 0:
        qntdgaloes = qntdgaloes + 1
    precogaloes = qntdgaloes * 35
elif (area*1.1)>108 and ((area*1.1)%108)<=43.2:
    qntdlatasmistura = int((area//108))
    qntdgaloesmistura = int((area%108)//21.6)
    if (area%108)%21.6 != 0:
        qntdgaloesmistura = qntdgaloesmistura + 1
    precomistura = (qntdgaloesmistura*35)+(qntdlatasmistura*80)

if qntdlatas != 0:
    print("A forma mais barata é comprando apenas latas, o número de latas necessário é %i, pelo preço de R$%i" %(qntdlatas,precolatas))
if qntdgaloes != 0:
    print("A forma mais barata é comprando apenas galões, o número de galões necessário é %i, pelo preço de R$%i" %(qntdgaloes,precogaloes))
if qntdlatasmistura != 0:
    print("A forma mais barata é comprando %i lata(s) e %i galão(galões), isso irá te custar R$%i" %(qntdlatasmistura,qntdgaloesmistura,precomistura))




