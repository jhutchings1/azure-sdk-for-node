// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-cff2ab63c8c955aaf71989efa641b906558d9fb7?api-version=2020-03-01')
  .reply(200, "{\"name\":\"sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"type\":\"Microsoft.Batch/batchAccounts/certificates\",\"etag\":\"W/\\\"0x8D7EE69A7BCA638\\\"\",\"properties\":{\"thumbprintAlgorithm\":\"sha1\",\"thumbprint\":\"cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2020-05-02T07:23:04.9278519Z\",\"format\":\"Pfx\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Sat, 02 May 2020 07:23:04 GMT',
  etag: 'W/"0x8D7EE69A7BCA638"',
  'x-ms-correlation-request-id': '0a09dc9d-3fb0-45f2-855c-be5f993be53f',
  'x-ms-request-id': 'e0e54e5f-a28c-4cb7-94bb-c90e34b73d80',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072306Z:0a09dc9d-3fb0-45f2-855c-be5f993be53f',
  date: 'Sat, 02 May 2020 07:23:05 GMT',
  connection: 'close' });
 return result; }]];