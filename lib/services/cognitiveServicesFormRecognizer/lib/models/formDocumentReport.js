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
 * Class representing a FormDocumentReport.
 */
class FormDocumentReport {
  /**
   * Create a FormDocumentReport.
   * @property {string} [documentName] Reference to the data that the report is
   * for.
   * @property {number} [pages] Total number of pages trained on.
   * @property {array} [errors] List of errors per page.
   * @property {string} [status] Status of the training operation. Possible
   * values include: 'success', 'partialSuccess', 'failure'
   */
  constructor() {
  }

  /**
   * Defines the metadata of FormDocumentReport
   *
   * @returns {object} metadata of FormDocumentReport
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FormDocumentReport',
      type: {
        name: 'Composite',
        className: 'FormDocumentReport',
        modelProperties: {
          documentName: {
            required: false,
            serializedName: 'documentName',
            type: {
              name: 'String'
            }
          },
          pages: {
            required: false,
            serializedName: 'pages',
            type: {
              name: 'Number'
            }
          },
          errors: {
            required: false,
            serializedName: 'errors',
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
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FormDocumentReport;