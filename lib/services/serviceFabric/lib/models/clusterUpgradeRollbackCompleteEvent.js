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
 * Cluster Upgrade Rollback Complete event.
 *
 * @extends models['ClusterEvent']
 */
class ClusterUpgradeRollbackCompleteEvent extends models['ClusterEvent'] {
  /**
   * Create a ClusterUpgradeRollbackCompleteEvent.
   * @member {string} targetClusterVersion Target Cluster version.
   * @member {string} failureReason Describes failure.
   * @member {number} overallUpgradeElapsedTimeInMs Overall duration of upgrade
   * in milli-seconds.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ClusterUpgradeRollbackCompleteEvent
   *
   * @returns {object} metadata of ClusterUpgradeRollbackCompleteEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClusterUpgradeRollbackComplete',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'FabricEvent',
        className: 'ClusterUpgradeRollbackCompleteEvent',
        modelProperties: {
          eventInstanceId: {
            required: true,
            serializedName: 'EventInstanceId',
            type: {
              name: 'String'
            }
          },
          timeStamp: {
            required: true,
            serializedName: 'TimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          hasCorrelatedEvents: {
            required: false,
            serializedName: 'HasCorrelatedEvents',
            type: {
              name: 'Boolean'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          targetClusterVersion: {
            required: true,
            serializedName: 'TargetClusterVersion',
            type: {
              name: 'String'
            }
          },
          failureReason: {
            required: true,
            serializedName: 'FailureReason',
            type: {
              name: 'String'
            }
          },
          overallUpgradeElapsedTimeInMs: {
            required: true,
            serializedName: 'OverallUpgradeElapsedTimeInMs',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ClusterUpgradeRollbackCompleteEvent;