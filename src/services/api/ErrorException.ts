//transforma o erro em uma classe para ser tratado no catch
export class ApiException extends Error{
  public readonly message: string = ''

  constructor(message: string){
    super()
    this.message = message;
  }
}