/////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2025, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////

define(
  'pgadmin.server.supported_servers',
  ['sources/gettext'],
  function(gettext) {
    return [
      
      {label: 'EDB Advanced Server', value: 'ppas'},
      {label: 'PostgreSQL', value: 'pg'},
      {label: gettext('Unknown'), value: ''}
    ];
  }
);