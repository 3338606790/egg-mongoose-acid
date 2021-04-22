'use strict';

module.exports = app => {
  if (app.mongoose && app.config.acid) require('./lib/acid')(app);
};
