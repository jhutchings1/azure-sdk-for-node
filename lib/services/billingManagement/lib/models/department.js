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
 * A department resource.
 *
 * @extends models['Resource']
 */
class Department extends models['Resource'] {
  /**
   * Create a Department.
   * @property {string} [departmentName] The name for department.
   * @property {string} [costCenter] The cost center name.
   * @property {string} [status] The status for department.
   * @property {array} [enrollmentAccounts] Associated enrollment accounts. By
   * default this is not populated, unless it's specified in $expand.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Department
   *
   * @returns {object} metadata of Department
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Department',
      type: {
        name: 'Composite',
        className: 'Department',
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
          departmentName: {
            required: false,
            serializedName: 'properties.departmentName',
            type: {
              name: 'String'
            }
          },
          costCenter: {
            required: false,
            serializedName: 'properties.costCenter',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          enrollmentAccounts: {
            required: false,
            serializedName: 'properties.enrollmentAccounts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EnrollmentAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'EnrollmentAccount'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Department;