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
 * The EngagementFabric SKU
 *
 */
class SKU {
  /**
   * Create a SKU.
   * @property {string} name The name of the SKU
   * @property {string} [tier] The price tier of the SKU
   */
  constructor() {
  }

  /**
   * Defines the metadata of SKU
   *
   * @returns {object} metadata of SKU
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SKU',
      type: {
        name: 'Composite',
        className: 'SKU',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SKU;