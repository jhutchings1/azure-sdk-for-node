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
 * The paths that are included in indexing
 *
 */
class IncludedPath {
  /**
   * Create a IncludedPath.
   * @property {string} [path] The path for which the indexing behavior applies
   * to. Index paths typically start with root and end with wildcard (/path/*)
   * @property {array} [indexes] List of indexes for this path
   */
  constructor() {
  }

  /**
   * Defines the metadata of IncludedPath
   *
   * @returns {object} metadata of IncludedPath
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IncludedPath',
      type: {
        name: 'Composite',
        className: 'IncludedPath',
        modelProperties: {
          path: {
            required: false,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          indexes: {
            required: false,
            serializedName: 'indexes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IndexesElementType',
                  type: {
                    name: 'Composite',
                    className: 'Indexes'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = IncludedPath;