class Veiculo {
    marca: string
    modelo: string
    ano: number
  
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca
      this.modelo = modelo
      this.ano = ano
    }
  
    descrever(): void {
      console.log(`Veículo: ${this.marca} ${this.modelo}, Ano: ${this.ano}`)
    }
  }
  
  class Carro extends Veiculo { //extends herda veiculos
    numeroDePortas: number
  
    constructor(marca: string, modelo: string, ano: number, numeroDePortas: number) {
      super(marca, modelo, ano)
      this.numeroDePortas = numeroDePortas
    }
  
    descrever(): void {
      console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Portas: ${this.numeroDePortas}`)
    }
  }
  
  class Moto extends Veiculo {
    temCarenagem: boolean
  
    constructor(marca: string, modelo: string, ano: number, temCarenagem: boolean) {
      super(marca, modelo, ano)
      this.temCarenagem = temCarenagem
    }
  
    descrever(): void {
      const carenagemInfo = this.temCarenagem ? 'com carenagem' : 'sem carenagem'
      console.log(`Moto: ${this.marca} ${this.modelo}, Ano: ${this.ano}, ${carenagemInfo}`)
    }
  }
  
  const carro1 = new Carro('Toyota', 'Corolla', 2021, 4)
  const moto1 = new Moto('Honda', 'CB500F', 2022, false)
  
  carro1.descrever()
  moto1.descrever()