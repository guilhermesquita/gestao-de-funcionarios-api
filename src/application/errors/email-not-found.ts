export class EmailNotFoundError extends Error {
  constructor() {
    super('Email not found')
    this.name = 'EmailNotFoundError'
  }
}
