/**
 * ProcessMaker API
 * An API to access ProcessMaker core functionality
 *
 * OpenAPI spec version: 1.0.0
 * Contact: oleg@processmaker.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProcessMakerApi) {
      root.ProcessMakerApi = {};
    }
    root.ProcessMakerApi.DateFull = factory(root.ProcessMakerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DateFull model module.
   * @module model/DateFull
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DateFull</code>.
   * @alias module:model/DateFull
   * @class
   * @param _date {String} 
   * @param timezoneType {Number} 
   * @param timezone {String} 
   */
  var exports = function(_date, timezoneType, timezone) {
    var _this = this;

    _this['date'] = _date;
    _this['timezone_type'] = timezoneType;
    _this['timezone'] = timezone;
  };

  /**
   * Constructs a <code>DateFull</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateFull} obj Optional instance to populate.
   * @return {module:model/DateFull} The populated <code>DateFull</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('timezone_type')) {
        obj['timezone_type'] = ApiClient.convertToType(data['timezone_type'], 'Number');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} timezone_type
   */
  exports.prototype['timezone_type'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;



  return exports;
}));


