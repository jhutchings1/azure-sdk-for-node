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
 * An object representing a recognized word.
 *
 */
class Word {
  /**
   * Create a Word.
   * @property {array} boundingBox Bounding box of a recognized word.
   * @property {string} text The text content of the word.
   * @property {string} [confidence] Qualitative confidence measure. Possible
   * values include: 'High', 'Low'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Word
   *
   * @returns {object} metadata of Word
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Word',
      type: {
        name: 'Composite',
        className: 'Word',
        modelProperties: {
          boundingBox: {
            required: true,
            serializedName: 'boundingBox',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          text: {
            required: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          confidence: {
            required: false,
            nullable: true,
            serializedName: 'confidence',
            type: {
              name: 'Enum',
              allowedValues: [ 'High', 'Low' ]
            }
          }
        }
      }
    };
  }
}

module.exports = Word;