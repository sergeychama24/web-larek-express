class ConflictError extends Error {
  public statusCode: number;

  constructor(message: string = 'Ошибка при создании товара с уже существующим полем') {
    super(message);
    this.statusCode = 409;
  }
}

export default ConflictError;
