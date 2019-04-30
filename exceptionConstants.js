 let exceptionConstants = {
     'MISSING_RESOURCE_RESOLUTION_STEPS': 'Error occurred to get message from Resource bundle, Resolution steps: 1. Check if resource bundle .properties file exist and it is accessible 2. Check if required key-value pairs (projectName, code, description, httpStatusCode) exist in .properties file',
     'MISSING_EXCEPTION_TYPE': 'Exception type required',
     'MISSING_EXCEPTION_RESOURCE_BUNDLE': 'Missing Resource bundle for reading static message template',
     'DEFAULT_EXCEPTION_MESSAGE': 'Exception message should be provided either explicitly or should exist within wrapped exception',
     'MISSING_VALUE': 'Value not available',
     'MISSING_KEY': 'Key not available',
     'PROJECT_NAME': 'projectName'
 };

 module.exports = exceptionConstants;