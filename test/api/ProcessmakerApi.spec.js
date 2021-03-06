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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProcessMakerApi);
  }
}(this, function(expect, ProcessMakerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProcessMakerApi.ProcessmakerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProcessmakerApi', function() {
    describe('addGroup', function() {
      it('should call addGroup successfully', function(done) {
        //uncomment below and update the code to test addGroup
        //instance.addGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addUser', function() {
      it('should call addUser successfully', function(done) {
        //uncomment below and update the code to test addUser
        //instance.addUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroup', function() {
      it('should call deleteGroup successfully', function(done) {
        //uncomment below and update the code to test deleteGroup
        //instance.deleteGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        //uncomment below and update the code to test deleteUser
        //instance.deleteUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findGroupById', function() {
      it('should call findGroupById successfully', function(done) {
        //uncomment below and update the code to test findGroupById
        //instance.findGroupById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findGroups', function() {
      it('should call findGroups successfully', function(done) {
        //uncomment below and update the code to test findGroups
        //instance.findGroups(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUserById', function() {
      it('should call findUserById successfully', function(done) {
        //uncomment below and update the code to test findUserById
        //instance.findUserById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsers', function() {
      it('should call findUsers successfully', function(done) {
        //uncomment below and update the code to test findUsers
        //instance.findUsers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGroup', function() {
      it('should call updateGroup successfully', function(done) {
        //uncomment below and update the code to test updateGroup
        //instance.updateGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
