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

/**
 * The parameters used to generate credentials for a specified token or user of
 * a container registry.
 *
 */
class GenerateCredentialsParameters {
  /**
   * Create a GenerateCredentialsParameters.
   * @property {string} [tokenId] The resource ID of the token for which
   * credentials have to be generated.
   * @property {date} [expiry] The expiry date of the generated credentials
   * after which the credentials become invalid. Default value: new
   * Date('9999-12-31T15:59:59.9999999-08:00') .
   * @property {string} [name] Specifies name of the password which should be
   * regenerated if any -- password or password2. Possible values include:
   * 'password1', 'password2'
   */
  constructor() {
  }

  /**
   * Defines the metadata of GenerateCredentialsParameters
   *
   * @returns {object} metadata of GenerateCredentialsParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GenerateCredentialsParameters',
      type: {
        name: 'Composite',
        className: 'GenerateCredentialsParameters',
        modelProperties: {
          tokenId: {
            required: false,
            serializedName: 'tokenId',
            type: {
              name: 'String'
            }
          },
          expiry: {
            required: false,
            serializedName: 'expiry',
            defaultValue: new Date('9999-12-31T15:59:59.9999999-08:00'),
            type: {
              name: 'DateTime'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GenerateCredentialsParameters;