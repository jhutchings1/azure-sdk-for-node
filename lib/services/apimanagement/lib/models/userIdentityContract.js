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
 * User identity details.
 *
 */
class UserIdentityContract {
  /**
   * Create a UserIdentityContract.
   * @property {string} [provider] Identity provider name.
   * @property {string} [id] Identifier value within provider.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserIdentityContract
   *
   * @returns {object} metadata of UserIdentityContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserIdentityContract',
      type: {
        name: 'Composite',
        className: 'UserIdentityContract',
        modelProperties: {
          provider: {
            required: false,
            serializedName: 'provider',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserIdentityContract;
