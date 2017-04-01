const castle = require('castle-core');
const types = castle.types;

const puts = new castle.Extern('puts',
  [new castle.Arg('line', types.str)], types.int
);

module.exports = new castle.Module([
  puts,

  new castle.Define('main', [], types.int, new castle.Block([
    puts.callOp([new types.StrLiteral('Hello, world!')]),
    new castle.Return(new types.IntLiteral(0))
  ]))
]);
