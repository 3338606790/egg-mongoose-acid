'use strict';

module.exports = app => {
  if (app.config.acid.app) require('./lib/acid')(app);
};
