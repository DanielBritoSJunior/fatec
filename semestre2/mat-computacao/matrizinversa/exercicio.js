let sistemaOriginal = [[2,-3,1,9],[3,-1,3,8],[1,2,-2,5]]
const determinanteOriginal = (sistemaOriginal[0][0]*sistemaOriginal[1][1]*sistemaOriginal[2][2] + sistemaOriginal[0][1]*sistemaOriginal[1][2]*sistemaOriginal[2][0] + sistemaOriginal[0][2]*sistemaOriginal[1][0]*sistemaOriginal[2][1])-(sistemaOriginal[0][2]*sistemaOriginal[1][1]*sistemaOriginal[2][0] + sistemaOriginal[0][0]*sistemaOriginal[1][2]*sistemaOriginal[2][1] + sistemaOriginal[0][1]*sistemaOriginal[1][0]*sistemaOriginal[2][2])
console.log(determinanteOriginal)

const determinanteX = (sistemaOriginal[0][1]*sistemaOriginal[1][2]*sistemaOriginal[2][3] + sistemaOriginal[0][2]*sistemaOriginal[1][3]*sistemaOriginal[2][1] + sistemaOriginal[0][3]*sistemaOriginal[1][1]*sistemaOriginal[2][2]) - (sistemaOriginal[0][3]*sistemaOriginal[1][2]*sistemaOriginal[2][1] + sistemaOriginal[0][1]* sistemaOriginal[1][3]*sistemaOriginal[2][2] + sistemaOriginal[0][2]*sistemaOriginal[1][1]*sistemaOriginal[2][3])
console.log(determinanteX)

if (determinanteOriginal != 0){
    x = determinanteX/determinanteOriginal
    console.log(`Valor de X = ${x}`)
} else if (determinanteX == 0){
    console.log('Indeterminado')
} else {
    console.log('Inexistente')
}