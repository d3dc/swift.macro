// ast-pretty-print is really handy :)
const printAST = require('ast-pretty-print')
const {createMacro} = require('babel-macros')

const { createMacro } = require('babel-plugin-macros');

// Constructs an if-let statement.
const _if_let = (c, t) => {
  c.parentPath.replaceWith(
    //TODO
  );
};

// Constructs an if-const statement.
const _if_const = (c, t) => {
  c.parentPath.replaceWith(
    //TODO
  );
};

// Constructs a guard-let statement.
const _guard_let = (c, t) => {
  c.parentPath.replaceWith(
    //TODO
  );
};

// Constructs a guard-let statement.
const _guard_const = (c, t) => {
  c.parentPath.replaceWith(
    //TODO
  );
};

// Constructs a defer statement.
const _defer = (c, t) => {
  c.parentPath.replaceWith(
    //TODO
  );
};

const traverseLang = (rootPath, t) => {
  rootPath.parentPath.traverse({
    Expression(path) {
      let attr = path.node.name.name;
      //TODO
    }
  });
};

// Identify and process any statements with a swift expression.
const swiftMacro = ({ references, state, babel: { types: t } }) => {
  references.default.forEach(referencePath => {
    traverseLang(referencePath, t);
    referencePath.node.name = '';
  })
};

module.exports = createMacro(tersusMacro);
