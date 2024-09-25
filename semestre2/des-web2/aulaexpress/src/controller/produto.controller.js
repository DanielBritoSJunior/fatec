import { validationResult } from 'express-validator'
import Produto from '../models/produto.model.js'


export default class ProdutoController {
    static async index(req, res) {
        const produtos = await Produto.findMany()
        res.json(produtos)
    }

    static async create(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() })
        }

        const produto = await Produto.create({
            data: req.body
        })

        res.json(produto)
    }

    static async show(req, res) {
        const produto = await Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' })
        }
        res.json(produto)
    }

    static async update(req, res) {
        const user = await User.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }
        const updatedUser = await User.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedUser)
    }
}