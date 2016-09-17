var Interfake = require('interfake');
var interfake = new Interfake();
interfake.post('/api/graphs/scatter').delay('50..250').status(200).body({
  ok: true,
  result: {
    x: [1, 2, 3, 4, 5],
    y: [2, 3, 4, 5, 6],
  },
  error: null,
});
interfake.listen(9000);
