require('./eslinter');
require('./helpers/diagnostics')();
require('./helpers/setup')();
describe('Execution', function () {
  require('./evaluators/complex')();
  require('./evaluators/dates')();
  require('./evaluators/numbers')();
  require('./evaluators/objects')();
  require('./evaluators/simple')();
  require('./evaluators/strings')();
  require('./reflection/is')();
});
