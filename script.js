//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = this.constructor.name;
  }
}

function evalString(str) {
  try {
    if (/[\+\-\*\/]{2,}/.test(str)) {
      throw new InvalidExprError();
    }
    if (/^[\+\*\/]/.test(str)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }
    if (/[\+\*\/\-]$/.test(str)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }
    const result = eval(str);
    if (!Number.isInteger(result)) {
      throw new OutOfRangeError("non-integer result");
    }
    return result;
  } catch (e) {
    if (e instanceof OutOfRangeError || e instanceof InvalidExprError || e instanceof SyntaxError) {
      throw e;
    }
    throw new OutOfRangeError(e.message);
  }
}
