let userInput: unknown;

userInput = 51;
userInput = "Max";
userInput = "Ala";

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("this is error", 213);
