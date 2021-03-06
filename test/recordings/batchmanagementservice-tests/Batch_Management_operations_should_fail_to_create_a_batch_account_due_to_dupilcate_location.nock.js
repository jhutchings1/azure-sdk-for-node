// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2?api-version=2020-03-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/0b5d32ce-d82e-416c-ae62-f1d870626f1f?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': '0b5d32ce-d82e-416c-ae62-f1d870626f1f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'e4854b55-562c-44e1-8b9e-1f535930b02a',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072223Z:e4854b55-562c-44e1-8b9e-1f535930b02a',
  date: 'Sat, 02 May 2020 07:22:23 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/0b5d32ce-d82e-416c-ae62-f1d870626f1f?api-version=2020-03-01')
  .reply(409, "{\"error\":{\"code\":\"SubscriptionQuotaExceeded\",\"message\":\"The regional Batch account quota for the specified subscription has been reached.\\nRequestId:bb06fe54-4c68-44dd-a20d-ba4f211b8615\\nTime:2020-05-02T07:22:54.0265956Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '247',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': '5c79cd15-084b-4792-a718-2e11e27ae5fc',
  'x-ms-request-id': 'bb06fe54-4c68-44dd-a20d-ba4f211b8615',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072254Z:5c79cd15-084b-4792-a718-2e11e27ae5fc',
  date: 'Sat, 02 May 2020 07:22:53 GMT',
  connection: 'close' });
 return result; }]];