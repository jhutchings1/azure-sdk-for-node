// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-3840119875_2-20180309t224543z/disablescheduling?api-version=2018-03-01.6.1')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c05ac55c-c688-493d-afa4-01d7c1be17a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_2-20180309t224543z/disablescheduling',
  date: 'Fri, 09 Mar 2018 22:59:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-3840119875_2-20180309t224543z/disablescheduling?api-version=2018-03-01.6.1')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c05ac55c-c688-493d-afa4-01d7c1be17a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_2-20180309t224543z/disablescheduling',
  date: 'Fri, 09 Mar 2018 22:59:15 GMT',
  connection: 'close' });
 return result; }]];