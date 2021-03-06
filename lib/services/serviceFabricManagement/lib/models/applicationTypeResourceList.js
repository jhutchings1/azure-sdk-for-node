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
 * The list of application type names.
 *
 */
class ApplicationTypeResourceList {
  /**
   * Create a ApplicationTypeResourceList.
   * @member {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationTypeResourceList
   *
   * @returns {object} metadata of ApplicationTypeResourceList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationTypeResourceList',
      type: {
        name: 'Composite',
        className: 'ApplicationTypeResourceList',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationTypeResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationTypeResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationTypeResourceList;
