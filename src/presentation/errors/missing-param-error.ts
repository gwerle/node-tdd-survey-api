export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing parm: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
