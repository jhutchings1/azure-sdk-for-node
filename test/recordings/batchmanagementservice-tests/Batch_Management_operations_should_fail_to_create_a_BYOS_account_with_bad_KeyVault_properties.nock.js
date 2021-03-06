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
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdkbyos?api-version=2020-03-01', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidRequestBody\",\"message\":\"The specified Request Body is not syntactically valid.\\nRequestId:e2dcc098-7786-4ab2-bd3a-1254f791ae89\\nTime:2020-05-02T07:30:33.5635113Z\",\"target\":\"BatchAccount\",\"details\":[{\"code\":\"Reason\",\"message\":\"keyVaultReference must be set if poolAllocationMode is specified as 'UserSubscription' on a PUT request\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '359',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': 'cd314b00-a0a9-4772-8e36-65352cd82239',
  'x-ms-request-id': 'e2dcc098-7786-4ab2-bd3a-1254f791ae89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200502T073034Z:cd314b00-a0a9-4772-8e36-65352cd82239',
  date: 'Sat, 02 May 2020 07:30:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdkbyos?api-version=2020-03-01', '*')
  .reply(400, "{\"error\":{\"code\":\"LinkedInvalidPropertyId\",\"message\":\"Property id 'abc' at path 'properties.keyVaultReference.id' is invalid. Expect fully qualified resource Id that start with '/subscriptions/{subscriptionId}' or '/providers/{resourceProviderNamespace}/'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b336987a-6aab-4d9d-af95-3a083f25dc17',
  'x-ms-correlation-request-id': 'b336987a-6aab-4d9d-af95-3a083f25dc17',
  'x-ms-routing-request-id':
   'WESTUS:20200502T073034Z:b336987a-6aab-4d9d-af95-3a083f25dc17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 02 May 2020 07:30:34 GMT',
  connection: 'close',
  'content-length': '259' });
 return result; }]];