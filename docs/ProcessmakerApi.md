# ProcessMakerApi.ProcessmakerApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroup**](ProcessmakerApi.md#addGroup) | **POST** /groups | 
[**addUser**](ProcessmakerApi.md#addUser) | **POST** /users | 
[**deleteGroup**](ProcessmakerApi.md#deleteGroup) | **DELETE** /groups/{id} | 
[**deleteUser**](ProcessmakerApi.md#deleteUser) | **DELETE** /users/{id} | 
[**findGroupById**](ProcessmakerApi.md#findGroupById) | **GET** /groups/{id} | 
[**findGroups**](ProcessmakerApi.md#findGroups) | **GET** /groups | 
[**findUserById**](ProcessmakerApi.md#findUserById) | **GET** /users/{id} | 
[**findUsers**](ProcessmakerApi.md#findUsers) | **GET** /users | 
[**updateGroup**](ProcessmakerApi.md#updateGroup) | **PUT** /groups/{id} | 
[**updateUser**](ProcessmakerApi.md#updateUser) | **PUT** /users/{id} | 


<a name="addGroup"></a>
# **addGroup**
> JsonApiCreatedItem addGroup(jsonApiItem)



Creates a new group

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var jsonApiItem = new ProcessMakerApi.JsonApiItem(); // JsonApiItem | JsonApi with the Group object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addGroup(jsonApiItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonApiItem** | [**JsonApiItem**](JsonApiItem.md)| JsonApi with the Group object to add | 

### Return type

[**JsonApiCreatedItem**](JsonApiCreatedItem.md)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addUser"></a>
# **addUser**
> JsonApiCreatedItem1 addUser(jsonApiItem)



Creates a new user

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var jsonApiItem = new ProcessMakerApi.JsonApiItem1(); // JsonApiItem1 | JsonApi with the User object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUser(jsonApiItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonApiItem** | [**JsonApiItem1**](JsonApiItem1.md)| JsonApi with the User object to add | 

### Return type

[**JsonApiCreatedItem1**](JsonApiCreatedItem1.md)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(id)



Deletes a single item based on the ID supplied

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var id = "id_example"; // String | ID of item to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroup(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of item to delete | 

### Return type

null (empty response body)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(id)



Deletes a single item based on the ID supplied

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var id = "id_example"; // String | ID of item to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of item to delete | 

### Return type

null (empty response body)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findGroupById"></a>
# **findGroupById**
> JsonApiCreatedItem findGroupById(id)



Returns the group based on a single ID

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var id = "id_example"; // String | ID of Group to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGroupById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of Group to fetch | 

### Return type

[**JsonApiCreatedItem**](JsonApiCreatedItem.md)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findGroups"></a>
# **findGroups**
> JsonApiCollection findGroups(opts)



Returns all Groups

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var opts = { 
  'page': 1, // Number | Page Nr to fetch
  'perPage': 15 // Number | Amount of Items per Page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Nr to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of Items per Page | [optional] [default to 15]

### Return type

[**JsonApiCollection**](JsonApiCollection.md)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findUserById"></a>
# **findUserById**
> JsonApiCreatedItem1 findUserById(id)



Returns the user based on a single ID

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var id = "id_example"; // String | ID of User to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUserById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of User to fetch | 

### Return type

[**JsonApiCreatedItem1**](JsonApiCreatedItem1.md)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findUsers"></a>
# **findUsers**
> JsonApiCollection1 findUsers(opts)



Returns all Users

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var opts = { 
  'page': 1, // Number | Page Nr to fetch
  'perPage': 15 // Number | Amount of Items per Page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page Nr to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of Items per Page | [optional] [default to 15]

### Return type

[**JsonApiCollection1**](JsonApiCollection1.md)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateGroup"></a>
# **updateGroup**
> JsonApiCreatedItem updateGroup(id, jsonApiUpdateItem)



Update existing Group

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var id = "id_example"; // String | ID of Group to fetch

var jsonApiUpdateItem = new ProcessMakerApi.JsonApiUpdateItem(); // JsonApiUpdateItem | Group object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGroup(id, jsonApiUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of Group to fetch | 
 **jsonApiUpdateItem** | [**JsonApiUpdateItem**](JsonApiUpdateItem.md)| Group object to edit | 

### Return type

[**JsonApiCreatedItem**](JsonApiCreatedItem.md)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateUser"></a>
# **updateUser**
> JsonApiCreatedItem1 updateUser(id, jsonApiUpdateItem)



Update existing User

### Example
```javascript
var ProcessMakerApi = require('process_maker_api');
var defaultClient = ProcessMakerApi.ApiClient.default;

// Configure API key authorization: internalApiKey
var internalApiKey = defaultClient.authentications['internalApiKey'];
internalApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//internalApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ProcessMakerApi.ProcessmakerApi();

var id = "id_example"; // String | ID of User to fetch

var jsonApiUpdateItem = new ProcessMakerApi.JsonApiUpdateItem1(); // JsonApiUpdateItem1 | User object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUser(id, jsonApiUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of User to fetch | 
 **jsonApiUpdateItem** | [**JsonApiUpdateItem1**](JsonApiUpdateItem1.md)| User object to edit | 

### Return type

[**JsonApiCreatedItem1**](JsonApiCreatedItem1.md)

### Authorization

[internalApiKey](../README.md#internalApiKey), [PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

