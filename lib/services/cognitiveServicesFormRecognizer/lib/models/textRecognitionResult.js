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
 * An object representing a recognized text region
 *
 */
class TextRecognitionResult {
  /**
   * Create a TextRecognitionResult.
   * @property {number} [page] The 1-based page number of the recognition
   * result.
   * @property {number} [clockwiseOrientation] The orientation of the image in
   * degrees in the clockwise direction. Range between [0, 360).
   * @property {number} [width] The width of the image in pixels or the PDF in
   * inches.
   * @property {number} [height] The height of the image in pixels or the PDF
   * in inches.
   * @property {string} [unit] The unit used in the Width, Height and
   * BoundingBox. For images, the unit is 'pixel'. For PDF, the unit is 'inch'.
   * Possible values include: 'pixel', 'inch'
   * @property {array} lines A list of recognized text lines.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TextRecognitionResult
   *
   * @returns {object} metadata of TextRecognitionResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TextRecognitionResult',
      type: {
        name: 'Composite',
        className: 'TextRecognitionResult',
        modelProperties: {
          page: {
            required: false,
            serializedName: 'page',
            type: {
              name: 'Number'
            }
          },
          clockwiseOrientation: {
            required: false,
            serializedName: 'clockwiseOrientation',
            type: {
              name: 'Number'
            }
          },
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'Number'
            }
          },
          unit: {
            required: false,
            nullable: true,
            serializedName: 'unit',
            type: {
              name: 'Enum',
              allowedValues: [ 'pixel', 'inch' ]
            }
          },
          lines: {
            required: true,
            serializedName: 'lines',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LineElementType',
                  type: {
                    name: 'Composite',
                    className: 'Line'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TextRecognitionResult;