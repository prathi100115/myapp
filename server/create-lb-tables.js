var server = require('./server');
var ds = server.dataSources.db;
//var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role','offerLetter','offerTemplate','salaryTemplate','appConfig'];
//var lbTables = ['bank_detail','offerLetter','offerTemplate','salaryTemplate','userDetail','appConfig','appConfig','salaryTemplate','user_information','family_detail','professional_detail','communication_detail','education_skill_detail','document_detail','skill',leave_ledger','leave_transaction','leave_balance','leave_history'];
//var lbTables = ['leave_type','supervisor'];
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role','Todo'];


ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});
