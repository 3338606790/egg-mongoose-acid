'use strict';

module.exports = app => {
  if (app.mongoose && app.config.acid.app) require('./lib/acid')(app);
};
