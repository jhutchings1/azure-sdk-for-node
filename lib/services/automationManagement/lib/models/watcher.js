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
 * Definition of the watcher type.
 *
 * @extends models['TrackedResource']
 */
class Watcher extends models['TrackedResource'] {
  /**
   * Create a Watcher.
   * @member {number} [executionFrequencyInSeconds] Gets or sets the frequency
   * at which the watcher is invoked.
   * @member {string} [scriptName] Gets or sets the name of the script the
   * watcher is attached to, i.e. the name of an existing runbook.
   * @member {object} [scriptParameters] Gets or sets the parameters of the
   * script.
   * @member {string} [scriptRunOn] Gets or sets the name of the hybrid worker
   * group the watcher will run on.
   * @member {string} [status] Gets the current status of the watcher.
   * @member {date} [creationTime] Gets or sets the creation time.
   * @member {date} [lastModifiedTime] Gets or sets the last modified time.
   * @member {string} [lastModifiedBy] Details of the user who last modified
   * the watcher.
   * @member {string} [description] Gets or sets the description.
   * @member {string} [etag] Gets or sets the etag of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Watcher
   *
   * @returns {object} metadata of Watcher
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Watcher',
      type: {
        name: 'Composite',
        className: 'Watcher',
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
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          executionFrequencyInSeconds: {
            required: false,
            serializedName: 'properties.executionFrequencyInSeconds',
            type: {
              name: 'Number'
            }
          },
          scriptName: {
            required: false,
            serializedName: 'properties.scriptName',
            type: {
              name: 'String'
            }
          },
          scriptParameters: {
            required: false,
            serializedName: 'properties.scriptParameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          scriptRunOn: {
            required: false,
            serializedName: 'properties.scriptRunOn',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          creationTime: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedTime: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedBy: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModifiedBy',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Watcher;