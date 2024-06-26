import { HttpResponse } from "application/contracts"
import { UnauthorizedError } from "../../application/errors"

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  message: 'Request com sintaxe errada',
  body: error.message
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  message: 'Não autorizado',
  body: new UnauthorizedError()
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  message: 'Autorização negada',
  body: error.message
})

export const notAcceptable = (error: Error): HttpResponse => ({
  statusCode: 406,
  message: 'Algo não encontrado',
  body: error.message
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  message: 'Erro Interno no Servidor',
  body: error.message
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  message: 'Sucesso',
  body: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  message: 'Criado com sucesso',
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  message: 'Nenhum conteúdo encontrado'
})
