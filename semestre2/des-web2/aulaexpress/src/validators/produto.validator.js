import { body } from 'express-validator'

export const produtoValidator = [
    body('nome') .isString().withMessage('Nome é obrigatório'),
    body('preco') .isNumeric().withMessage('Preço é obrigatório'),
    body('descricao') .isString().withMessage('Descrição é obrigatório')
]