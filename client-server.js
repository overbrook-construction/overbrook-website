'use strict';
require('express')().use(require('express')
  .static(__dirname + './public')).listen(8080, () => console.log('Client Server Up on 8080'));
