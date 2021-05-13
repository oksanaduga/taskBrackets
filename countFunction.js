const fs = require("fs");
const esprima = require('esprima');

const countArgument = (someFile) => {
  let file = fs.readFileSync(someFile, "utf8");

  const obj = esprima.parseScript(file);
  const body = obj.body;

  let res = [];

  for (let i = 0; i < body.length; i++) {
    const el = body[i];
    if (el.type === 'FunctionDeclaration') {
      const id = el['id'];
      const name = id['name'];
      const params =  el['params'];

      const countParams = params.reduce((acc, param) => {
        return acc = acc + 1;
      }, 0);

      res = [...res, { [name]: countParams }];
    }

  }
  return res;
}

export default countArgument;
