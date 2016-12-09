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
    define(['ApiClient', 'model/JsonApiItem', 'model/ErrorArray', 'model/JsonApiCreatedItem', 'model/JsonApiCreatedItem1', 'model/JsonApiItem1', 'model/JsonApiCollection', 'model/JsonApiCollection1', 'model/JsonApiUpdateItem', 'model/JsonApiUpdateItem1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JsonApiItem'), require('../model/ErrorArray'), require('../model/JsonApiCreatedItem'), require('../model/JsonApiCreatedItem1'), require('../model/JsonApiItem1'), require('../model/JsonApiCollection'), require('../model/JsonApiCollection1'), require('../model/JsonApiUpdateItem'), require('../model/JsonApiUpdateItem1'));
  } else {
    // Browser globals (root is window)
    if (!root.ProcessMakerApi) {
      root.ProcessMakerApi = {};
    }
    root.ProcessMakerApi.ProcessmakerApi = factory(root.ProcessMakerApi.ApiClient, root.ProcessMakerApi.JsonApiItem, root.ProcessMakerApi.ErrorArray, root.ProcessMakerApi.JsonApiCreatedItem, root.ProcessMakerApi.JsonApiCreatedItem1, root.ProcessMakerApi.JsonApiItem1, root.ProcessMakerApi.JsonApiCollection, root.ProcessMakerApi.JsonApiCollection1, root.ProcessMakerApi.JsonApiUpdateItem, root.ProcessMakerApi.JsonApiUpdateItem1);
  }
}(this, function(ApiClient, JsonApiItem, ErrorArray, JsonApiCreatedItem, JsonApiCreatedItem1, JsonApiItem1, JsonApiCollection, JsonApiCollection1, JsonApiUpdateItem, JsonApiUpdateItem1) {
  'use strict';

  /**
   * Processmaker service.
   * @module api/ProcessmakerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ProcessmakerApi. 
   * @alias module:api/ProcessmakerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addGroup operation.
     * @callback module:api/ProcessmakerApi~addGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCreatedItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new group
     * @param {module:model/JsonApiItem} jsonApiItem JsonApi with the Group object to add
     * @param {module:api/ProcessmakerApi~addGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCreatedItem}
     */
    this.addGroup = function(jsonApiItem, callback) {
      var postBody = jsonApiItem;

      // verify the required parameter 'jsonApiItem' is set
      if (jsonApiItem == undefined || jsonApiItem == null) {
        throw "Missing the required parameter 'jsonApiItem' when calling addGroup";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = JsonApiCreatedItem;

      return this.apiClient.callApi(
        '/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addUser operation.
     * @callback module:api/ProcessmakerApi~addUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCreatedItem1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new user
     * @param {module:model/JsonApiItem1} jsonApiItem JsonApi with the User object to add
     * @param {module:api/ProcessmakerApi~addUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCreatedItem1}
     */
    this.addUser = function(jsonApiItem, callback) {
      var postBody = jsonApiItem;

      // verify the required parameter 'jsonApiItem' is set
      if (jsonApiItem == undefined || jsonApiItem == null) {
        throw "Missing the required parameter 'jsonApiItem' when calling addUser";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = JsonApiCreatedItem1;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/ProcessmakerApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a single item based on the ID supplied
     * @param {String} id ID of item to delete
     * @param {module:api/ProcessmakerApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroup = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteGroup";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/ProcessmakerApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a single item based on the ID supplied
     * @param {String} id ID of item to delete
     * @param {module:api/ProcessmakerApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUser = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteUser";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findGroupById operation.
     * @callback module:api/ProcessmakerApi~findGroupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCreatedItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the group based on a single ID
     * @param {String} id ID of Group to fetch
     * @param {module:api/ProcessmakerApi~findGroupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCreatedItem}
     */
    this.findGroupById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling findGroupById";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = JsonApiCreatedItem;

      return this.apiClient.callApi(
        '/groups/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findGroups operation.
     * @callback module:api/ProcessmakerApi~findGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all Groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page Nr to fetch (default to 1)
     * @param {Number} opts.perPage Amount of Items per Page (default to 15)
     * @param {module:api/ProcessmakerApi~findGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCollection}
     */
    this.findGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = JsonApiCollection;

      return this.apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findUserById operation.
     * @callback module:api/ProcessmakerApi~findUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCreatedItem1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the user based on a single ID
     * @param {String} id ID of User to fetch
     * @param {module:api/ProcessmakerApi~findUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCreatedItem1}
     */
    this.findUserById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling findUserById";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = JsonApiCreatedItem1;

      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsers operation.
     * @callback module:api/ProcessmakerApi~findUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCollection1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all Users
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page Nr to fetch (default to 1)
     * @param {Number} opts.perPage Amount of Items per Page (default to 15)
     * @param {module:api/ProcessmakerApi~findUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCollection1}
     */
    this.findUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = JsonApiCollection1;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/ProcessmakerApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCreatedItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing Group
     * @param {String} id ID of Group to fetch
     * @param {module:model/JsonApiUpdateItem} jsonApiUpdateItem Group object to edit
     * @param {module:api/ProcessmakerApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCreatedItem}
     */
    this.updateGroup = function(id, jsonApiUpdateItem, callback) {
      var postBody = jsonApiUpdateItem;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateGroup";
      }

      // verify the required parameter 'jsonApiUpdateItem' is set
      if (jsonApiUpdateItem == undefined || jsonApiUpdateItem == null) {
        throw "Missing the required parameter 'jsonApiUpdateItem' when calling updateGroup";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = JsonApiCreatedItem;

      return this.apiClient.callApi(
        '/groups/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/ProcessmakerApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCreatedItem1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing User
     * @param {String} id ID of User to fetch
     * @param {module:model/JsonApiUpdateItem1} jsonApiUpdateItem User object to edit
     * @param {module:api/ProcessmakerApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCreatedItem1}
     */
    this.updateUser = function(id, jsonApiUpdateItem, callback) {
      var postBody = jsonApiUpdateItem;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateUser";
      }

      // verify the required parameter 'jsonApiUpdateItem' is set
      if (jsonApiUpdateItem == undefined || jsonApiUpdateItem == null) {
        throw "Missing the required parameter 'jsonApiUpdateItem' when calling updateUser";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['internalApiKey', 'PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = JsonApiCreatedItem1;

      return this.apiClient.callApi(
        '/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));