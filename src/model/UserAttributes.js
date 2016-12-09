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
    define(['ApiClient', 'model/DateFull'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DateFull'));
  } else {
    // Browser globals (root is window)
    if (!root.ProcessMakerApi) {
      root.ProcessMakerApi = {};
    }
    root.ProcessMakerApi.UserAttributes = factory(root.ProcessMakerApi.ApiClient, root.ProcessMakerApi.DateFull);
  }
}(this, function(ApiClient, DateFull) {
  'use strict';




  /**
   * The UserAttributes model module.
   * @module model/UserAttributes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserAttributes</code>.
   * @alias module:model/UserAttributes
   * @class
   * @param username {String} 
   * @param password {String} 
   * @param email {String} 
   */
  var exports = function(username, password, email) {
    var _this = this;

    _this['username'] = username;
    _this['password'] = password;


    _this['email'] = email;


















  };

  /**
   * Constructs a <code>UserAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAttributes} obj Optional instance to populate.
   * @return {module:model/UserAttributes} The populated <code>UserAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('expire_date')) {
        obj['expire_date'] = DateFull.constructFromObject(data['expire_date']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('cellular')) {
        obj['cellular'] = ApiClient.convertToType(data['cellular'], 'String');
      }
      if (data.hasOwnProperty('zip_code')) {
        obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'String');
      }
      if (data.hasOwnProperty('resume')) {
        obj['resume'] = ApiClient.convertToType(data['resume'], 'String');
      }
      if (data.hasOwnProperty('birthday')) {
        obj['birthday'] = ApiClient.convertToType(data['birthday'], 'String');
      }
      if (data.hasOwnProperty('bookmark_start_cases')) {
        obj['bookmark_start_cases'] = ApiClient.convertToType(data['bookmark_start_cases'], 'String');
      }
      if (data.hasOwnProperty('time_zone')) {
        obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
      }
      if (data.hasOwnProperty('default_lang')) {
        obj['default_lang'] = ApiClient.convertToType(data['default_lang'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = DateFull.constructFromObject(data['created_at']);
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = DateFull.constructFromObject(data['updated_at']);
      }
    }
    return obj;
  }

  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/DateFull} expire_date
   */
  exports.prototype['expire_date'] = undefined;
  /**
   * @member {module:model/UserAttributes.StatusEnum} status
   * @default 'ACTIVE'
   */
  exports.prototype['status'] = 'ACTIVE';
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * @member {String} cellular
   */
  exports.prototype['cellular'] = undefined;
  /**
   * @member {String} zip_code
   */
  exports.prototype['zip_code'] = undefined;
  /**
   * @member {String} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {String} resume
   */
  exports.prototype['resume'] = undefined;
  /**
   * @member {String} birthday
   */
  exports.prototype['birthday'] = undefined;
  /**
   * @member {String} bookmark_start_cases
   */
  exports.prototype['bookmark_start_cases'] = undefined;
  /**
   * @member {String} time_zone
   */
  exports.prototype['time_zone'] = undefined;
  /**
   * @member {String} default_lang
   * @default 'en_US'
   */
  exports.prototype['default_lang'] = 'en_US';
  /**
   * @member {module:model/DateFull} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {module:model/DateFull} updated_at
   */
  exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE",
    /**
     * value: "VACATION"
     * @const
     */
    "VACATION": "VACATION",
    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED"  };


  return exports;
}));


