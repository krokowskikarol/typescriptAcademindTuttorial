"use strict";
let userInput;
userInput = 51;
userInput = "Max";
userInput = "Ala";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("this is error", 213);
