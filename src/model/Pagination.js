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
    define(['ApiClient', 'model/PaginationLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaginationLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.ProcessMakerApi) {
      root.ProcessMakerApi = {};
    }
    root.ProcessMakerApi.Pagination = factory(root.ProcessMakerApi.ApiClient, root.ProcessMakerApi.PaginationLinks);
  }
}(this, function(ApiClient, PaginationLinks) {
  'use strict';




  /**
   * The Pagination model module.
   * @module model/Pagination
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:model/Pagination
   * @class
   * @param total {Number} 
   * @param count {Number} 
   * @param perPage {Number} 
   * @param currentPage {Number} 
   * @param totalPages {Number} 
   */
  var exports = function(total, count, perPage, currentPage, totalPages) {
    var _this = this;

    _this['total'] = total;
    _this['count'] = count;
    _this['per_page'] = perPage;
    _this['current_page'] = currentPage;
    _this['total_pages'] = totalPages;

  };

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('current_page')) {
        obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
      }
      if (data.hasOwnProperty('total_pages')) {
        obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = PaginationLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * @member {Number} current_page
   */
  exports.prototype['current_page'] = undefined;
  /**
   * @member {Number} total_pages
   */
  exports.prototype['total_pages'] = undefined;
  /**
   * @member {module:model/PaginationLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


