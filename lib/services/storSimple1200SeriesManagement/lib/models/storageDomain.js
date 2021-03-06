/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The storage domain.
 *
 * @extends models['BaseModel']
 */
class StorageDomain extends models['BaseModel'] {
  /**
   * Create a StorageDomain.
   * @member {array} storageAccountCredentialIds The storage account
   * credentials.
   * @member {object} [encryptionKey] The encryption key used to encrypt the
   * data. This is a user secret.
   * @member {string} [encryptionKey.value] The value of the secret itself. If
   * the secret is in plaintext then EncryptionAlgorithm will be none and
   * EncryptionCertThumbprint will be null.
   * @member {string} [encryptionKey.encryptionCertificateThumbprint]
   * Thumbprint certificate that was used to encrypt "Value"
   * @member {string} [encryptionKey.encryptionAlgorithm] Algorithm used to
   * encrypt "Value". Possible values include: 'None', 'AES256',
   * 'RSAES_PKCS1_v_1_5'
   * @member {string} encryptionStatus The encryption status "Enabled |
   * Disabled". Possible values include: 'Enabled', 'Disabled'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StorageDomain
   *
   * @returns {object} metadata of StorageDomain
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageDomain',
      type: {
        name: 'Composite',
        className: 'StorageDomain',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          storageAccountCredentialIds: {
            required: true,
            serializedName: 'properties.storageAccountCredentialIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          encryptionKey: {
            required: false,
            serializedName: 'properties.encryptionKey',
            type: {
              name: 'Composite',
              className: 'AsymmetricEncryptedSecret'
            }
          },
          encryptionStatus: {
            required: true,
            serializedName: 'properties.encryptionStatus',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          }
        }
      }
    };
  }
}

module.exports = StorageDomain;
