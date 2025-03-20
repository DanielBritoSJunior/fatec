function calcularTinta(area: number): void {
    const coberturaPorLitro = 6;
    const litrosPorLata = 18;
    const precoLata = 80;
    const litrosPorGalao = 3.6;
    const precoGalao = 25;

    const litrosNecessarios = area / coberturaPorLitro

    //Apenas latas

    const latasApenas = Math.ceil(litrosNecessarios / litrosPorLata)
    const custoLatas = latasApenas * precoLata

    //Apenas Galões

    const galoesApenas = Math.ceil(litrosNecessarios / litrosPorGalao)
    const custoGaloes = galoesApenas * precoGalao

    // Mistura

    const latas = Math.floor(litrosNecessarios / litrosPorLata)
    const restante = litrosNecessarios - (latas * litrosPorLata)
    const galoes = Math.ceil(restante / litrosPorGalao)
    const custoOtimizado = (latas * precoLata) + (galoes * precoGalao)

    console.log(`Para pintar ${area}m²:`)
    console.log(`1. Apenas latas: ${latasApenas} latas - R$ ${custoLatas.toFixed(2)}`)
    console.log(`2. Apenas galões: ${galoesApenas} galões - R$ ${custoGaloes.toFixed(2)}`)
    console.log(`3. Mistura Otimizada: ${latas} latas e ${galoes} galões - R$ ${custoOtimizado.toFixed(2)}`)
}

calcularTinta(100)
console.log()
calcularTinta(250)