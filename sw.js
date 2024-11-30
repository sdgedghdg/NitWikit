(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/Deferred.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Deferred: function() { return Deferred; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkboxError: function() { return WorkboxError; }
});
/* ESM import */var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messageGenerator.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: function() { return finalAssertExports; }
});
/* ESM import */var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cacheMatchIgnoreParams: function() { return cacheMatchIgnoreParams; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cacheNames: function() { return cacheNames; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  canConstructResponseFromBodyStream: function() { return canConstructResponseFromBodyStream; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  executeQuotaErrorCallbacks: function() { return executeQuotaErrorCallbacks; }
});
/* ESM import */var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getFriendlyURL: function() { return getFriendlyURL; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  logger: function() { return logger; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/timeout.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  timeout: function() { return timeout; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/waitUntil.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  waitUntil: function() { return waitUntil; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js": (function () {

// @ts-ignore
try {
    self['workbox:core:7.2.0'] && _();
}
catch (e) { }


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/copyResponse.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  copyResponse: function() { return copyResponse; }
});
/* ESM import */var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* ESM import */var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messageGenerator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  messageGenerator: function() { return messageGenerator; }
});
/* ESM import */var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messages.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/messages/messages.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  messages: function() { return messages; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


}),
"./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/models/quotaErrorCallbacks.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  quotaErrorCallbacks: function() { return quotaErrorCallbacks; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: function() { return PrecacheController; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/waitUntil.js");
/* ESM import */var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/createCacheKey.js");
/* ESM import */var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* ESM import */var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* ESM import */var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* ESM import */var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* ESM import */var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheFallbackPlugin: function() { return PrecacheFallbackPlugin; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheRoute: function() { return PrecacheRoute; }
});
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* ESM import */var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheStrategy: function() { return PrecacheStrategy; }
});
/* ESM import */var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/copyResponse.js");
/* ESM import */var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/Strategy.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js": (function () {

// @ts-ignore
try {
    self['workbox:precaching:7.2.0'] && _();
}
catch (e) { }


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addPlugins.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addPlugins: function() { return addPlugins; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addRoute: function() { return addRoute; }
});
/* ESM import */var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/registerRoute.js");
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cleanupOutdatedCaches: function() { return cleanupOutdatedCaches; }
});
/* ESM import */var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/createHandlerBoundToURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createHandlerBoundToURL: function() { return createHandlerBoundToURL; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/getCacheKeyForURL.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCacheKeyForURL: function() { return getCacheKeyForURL; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: function() { return /* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController; },
  PrecacheFallbackPlugin: function() { return /* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin; },
  PrecacheRoute: function() { return /* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute; },
  PrecacheStrategy: function() { return /* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy; },
  addPlugins: function() { return /* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins; },
  addRoute: function() { return /* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute; },
  cleanupOutdatedCaches: function() { return /* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches; },
  createHandlerBoundToURL: function() { return /* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL; },
  getCacheKeyForURL: function() { return /* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL; },
  matchPrecache: function() { return /* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache; },
  precache: function() { return /* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache; },
  precacheAndRoute: function() { return /* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute; }
});
/* ESM import */var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addPlugins.js");
/* ESM import */var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js");
/* ESM import */var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* ESM import */var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* ESM import */var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* ESM import */var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/matchPrecache.js");
/* ESM import */var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js");
/* ESM import */var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precacheAndRoute.js");
/* ESM import */var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js");
/* ESM import */var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* ESM import */var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* ESM import */var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/matchPrecache.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  matchPrecache: function() { return matchPrecache; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  precache: function() { return precache; }
});
/* ESM import */var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precacheAndRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  precacheAndRoute: function() { return precacheAndRoute; }
});
/* ESM import */var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/addRoute.js");
/* ESM import */var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/precache.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheCacheKeyPlugin: function() { return PrecacheCacheKeyPlugin; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheInstallReportPlugin: function() { return PrecacheInstallReportPlugin; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/createCacheKey.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCacheKey: function() { return createCacheKey; }
});
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  deleteOutdatedCaches: function() { return deleteOutdatedCaches; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/generateURLVariations.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  generateURLVariations: function() { return generateURLVariations; }
});
/* ESM import */var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrCreatePrecacheController: function() { return getOrCreatePrecacheController; }
});
/* ESM import */var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/PrecacheController.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printCleanupDetails.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printCleanupDetails: function() { return printCleanupDetails; }
});
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/printInstallDetails.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printInstallDetails: function() { return printInstallDetails; }
});
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  removeIgnoredSearchParams: function() { return removeIgnoredSearchParams; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/RegExpRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RegExpRoute: function() { return RegExpRoute; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Route: function() { return Route; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js");
/* ESM import */var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Router.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Router: function() { return Router; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js": (function () {

// @ts-ignore
try {
    self['workbox:routing:7.2.0'] && _();
}
catch (e) { }


}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/registerRoute.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerRoute: function() { return registerRoute; }
});
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Route.js");
/* ESM import */var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/RegExpRoute.js");
/* ESM import */var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/constants.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defaultMethod: function() { return defaultMethod; },
  validMethods: function() { return validMethods; }
});
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrCreateDefaultRouter: function() { return getOrCreateDefaultRouter; }
});
/* ESM import */var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/Router.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


}),
"./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/utils/normalizeHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  normalizeHandler: function() { return normalizeHandler; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.3.0/node_modules/workbox-routing/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


}),
"./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/Strategy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Strategy: function() { return Strategy; }
});
/* ESM import */var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheNames.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/StrategyHandler.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


}),
"./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/StrategyHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StrategyHandler: function() { return StrategyHandler; }
});
/* ESM import */var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/assert.js");
/* ESM import */var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* ESM import */var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/Deferred.js");
/* ESM import */var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* ESM import */var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* ESM import */var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/logger.js");
/* ESM import */var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/timeout.js");
/* ESM import */var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.3.0/node_modules/workbox-core/_private/WorkboxError.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js");
/* ESM import */var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillBeUsed()
     * - cachedResponseWillBeUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillBeUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



}),
"./node_modules/.pnpm/workbox-strategies@7.3.0/node_modules/workbox-strategies/_version.js": (function () {

// @ts-ignore
try {
    self['workbox:strategies:7.2.0'] && _();
}
catch (e) { }


}),
"./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController; },
  PrecacheFallbackPlugin: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin; },
  PrecacheRoute: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute; },
  PrecacheStrategy: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy; },
  addPlugins: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins; },
  addRoute: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute; },
  cleanupOutdatedCaches: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches; },
  createHandlerBoundToURL: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL; },
  getCacheKeyForURL: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL; },
  matchPrecache: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache; },
  precache: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache; },
  precacheAndRoute: function() { return /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute; }
});
/* ESM import */var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.js");


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.1.4";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.1.4";

})();
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* ESM import */var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@7.3.0/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://x.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"3d567f2b647564499e0264fdad1c2c77","url":"404.html"},{"revision":"beea34f3c5c27736238bd1f69a8c1701","url":"advance/bot/framework/index.html"},{"revision":"39d017fb262a2fdf99c3321fa5e75411","url":"advance/bot/general/index.html"},{"revision":"9766119b63d87613e74dcdd807bc4d58","url":"advance/bot/index.html"},{"revision":"4208244d919c320d7d7400a24a2c064d","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"839533f4e13a06c79c8b70accb8ea54d","url":"advance/index.html"},{"revision":"4d6c2d3b605b5c6dc8b4ef004f84cdb4","url":"advance/Linux/backup/index.html"},{"revision":"e8e8603f3632c4b7bb6b4f86bc2248b5","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"2250685a1257cd2bf2c4cbfa943c050c","url":"advance/Linux/frp/index.html"},{"revision":"36da5892dd489f24b277149e7e73ee0e","url":"advance/Linux/keep-running/index.html"},{"revision":"e26d581781a54e388764a5d124517417","url":"advance/Linux/start/index.html"},{"revision":"f41e708d12fe01ffda13bace3eaa2c9e","url":"advance/open-website/index.html"},{"revision":"ad672fdafd4e934be4215e329c673d3c","url":"assets/css/styles.54272f66.css"},{"revision":"afa341b7510bbd422a29ec2b78744bd3","url":"assets/js/005c270b.448eb0c8.js"},{"revision":"9976b3b528c06570672d15954323c735","url":"assets/js/013c8c14.3e818910.js"},{"revision":"62e2a180f9427893cc9561043b37efac","url":"assets/js/026f291b.75574a4c.js"},{"revision":"9051a84582909465188cca4a001ad1cc","url":"assets/js/0272dc73.830aabcd.js"},{"revision":"55514804362c72aa098dde2e2b7cfe51","url":"assets/js/035cfa77.771f956f.js"},{"revision":"3d435625f9a7fa2a2be7b14ab546bded","url":"assets/js/03b205ee.dc6cb392.js"},{"revision":"d6b16ef0755fb6c361ba60aafcdcee51","url":"assets/js/03f997a1.476e87ee.js"},{"revision":"1cfcf7d73535919350676a6e167f27d0","url":"assets/js/043fa146.5df42089.js"},{"revision":"f49f31e1501932c7c03215903699a09c","url":"assets/js/044f41a1.6cc84723.js"},{"revision":"8e29b7cac2d2ca9a4a3466321ea3b541","url":"assets/js/04f5c692.bd410fd7.js"},{"revision":"9c34e7e9e8b439409cc475128a158d6a","url":"assets/js/052366f7.798e4a89.js"},{"revision":"a5e30618e24a198b996730133a528768","url":"assets/js/053e2f33.5de12a1b.js"},{"revision":"eda197b03c680f9ab4516746eb5bd65c","url":"assets/js/058608ed.05158953.js"},{"revision":"28ea8ed6fc8a13f501ca03dd062f2879","url":"assets/js/06b0ed59.569de421.js"},{"revision":"8af1096260a0d5b42e77b69049f485c7","url":"assets/js/072384a4.5b8b1cb0.js"},{"revision":"a767c593564142647c030ef7fd6b81dd","url":"assets/js/083acdf9.7bd93295.js"},{"revision":"ab0bbd1782e254832e7f9d8dc59c5bc0","url":"assets/js/083ebe2e.5b1927db.js"},{"revision":"80d212f4ef4e94d39374e8bb534da2b5","url":"assets/js/08e7f72a.1218aa3f.js"},{"revision":"ca44fdd7ab038ac6eda861bba585af19","url":"assets/js/09156d2e.8a18c66a.js"},{"revision":"7820cd74af790540d99a3b423081f789","url":"assets/js/094a7dd6.ca13b8b3.js"},{"revision":"1452751f31c5d4ecf076ac9d84f88eb9","url":"assets/js/09714880.8f456961.js"},{"revision":"148b9365fcc203e9d351e497672a669c","url":"assets/js/0a17cf6d.e0bc59c9.js"},{"revision":"14548f9b457784a6c0d9bed43aac2512","url":"assets/js/0a1f9916.ecf0b3e7.js"},{"revision":"3d55b0c339382e31e91d2ff581bbd5d4","url":"assets/js/0ac0b3b7.cd02eeaa.js"},{"revision":"fe4c8bc73bda5cec06365ea2f023bfab","url":"assets/js/0bc00c24.ca7eb06b.js"},{"revision":"a19ab4caed0ffc4eb53719ea7f1e9569","url":"assets/js/0bcb5d9e.f45c5253.js"},{"revision":"e671953c726d8cc568f7bf2fb8a42b72","url":"assets/js/0c20e5c5.a09c9c4d.js"},{"revision":"936f20db8c846e28dfa40cb7c09ae184","url":"assets/js/0c7f12b6.09e38dea.js"},{"revision":"4fc5624794e9028ddebb5c224cc65996","url":"assets/js/0e384e19.dfda7f77.js"},{"revision":"9d1a27ae83e86c0cfd0d93a47d964de5","url":"assets/js/0e9ef1fa.7433a88b.js"},{"revision":"4110b0966f66b9e8bdb734ae1a3d02b2","url":"assets/js/0ec7bf36.58b48663.js"},{"revision":"2c533c1a7ad3d5444df9b29205ec4afb","url":"assets/js/0efa0f03.248b6869.js"},{"revision":"fb310b309ce4da7ff44737e03bfd51a6","url":"assets/js/0fc807d9.4aff0d1c.js"},{"revision":"81d2b227a4bb0e212d68c201e2e1c0e5","url":"assets/js/1127.91b1aa4c.js"},{"revision":"76c35bcb71d2b74e77082642e1a72e96","url":"assets/js/11f90be3.8cb47993.js"},{"revision":"a313047faff86a29b38ffa4c4acb7e05","url":"assets/js/1210f0b1.2da308c2.js"},{"revision":"5877a8906a7cf718aa4a1dd027b83d0b","url":"assets/js/13dd9964.0e8ac7b2.js"},{"revision":"b1805c69d29d28f57df1cec676a52bb6","url":"assets/js/144520df.9185336c.js"},{"revision":"40fa841a4c79ec1777bc76518d93bd7f","url":"assets/js/149.2218b71d.js"},{"revision":"d97910d032e10672589c203639400320","url":"assets/js/14eb3368.dc9b64b4.js"},{"revision":"1dd37d9ea87709b3544d5f5d605d1170","url":"assets/js/15daf372.31456401.js"},{"revision":"9985c17182b4e291a9e848f815069275","url":"assets/js/15db17c1.096cc5b6.js"},{"revision":"7c560635a259acb40b3a699334054a67","url":"assets/js/15e4e3ed.e96f5740.js"},{"revision":"7f2fd8e0a79ee91e79616415de310489","url":"assets/js/1603.07fc4d36.js"},{"revision":"6f3c0b7641399f61a8094decd1de2695","url":"assets/js/16731d58.fdaef6e2.js"},{"revision":"ebad505eeeca30a6115109db9cd1cdfa","url":"assets/js/175f0af4.dd013ea3.js"},{"revision":"c3953a48841676d85ccc00e607356f00","url":"assets/js/17896441.5f05125a.js"},{"revision":"a61ed4034fc135877ea90849ee666382","url":"assets/js/180bc163.492a6f72.js"},{"revision":"24f1c32677770b44790a86e8a91778b0","url":"assets/js/1856fe2a.c46bfd5d.js"},{"revision":"0621433105ca441061cc9d2da81d0380","url":"assets/js/185d6330.134acdd1.js"},{"revision":"38af09c2747871bdd1aabaf99bbfab25","url":"assets/js/1896e6f5.23d745e3.js"},{"revision":"df6da72eb82106626a90b1ead25fcebb","url":"assets/js/18b67442.431564aa.js"},{"revision":"9ab9266162bad11d6be96e67e3024afe","url":"assets/js/18bca995.357f28c9.js"},{"revision":"d983bbbdcf377d967dc9c0796a7082d3","url":"assets/js/19045c37.a53daa66.js"},{"revision":"46b60e769d80e945fabbcb801c0aa255","url":"assets/js/193a055b.7caeed6c.js"},{"revision":"c7147ffd0c7e6ca3fe1b61b39e530dd5","url":"assets/js/198ea2e3.feda9b9f.js"},{"revision":"534db19b5d89e6ed01f2dd37d3c6e0fd","url":"assets/js/19cf8050.44545df3.js"},{"revision":"19ac6fbb03877d0069b2a9651934977a","url":"assets/js/1a4e3797.93dda008.js"},{"revision":"ee03a0f7c1bd1c20e75ae2e497767ce7","url":"assets/js/1c42be93.1ecbe4a7.js"},{"revision":"2d231526ebc5d9ef640e491d6ebbe7d3","url":"assets/js/1c6846f9.339be265.js"},{"revision":"68ac62f4c5abfdfdf71d7c8edf5e403d","url":"assets/js/1cf75b4f.3ce8ac42.js"},{"revision":"94e146e6283b489a104088c23102164d","url":"assets/js/1d1b9adf.3b48b0d1.js"},{"revision":"98e6e5b063e2de40f7d357441058c5a3","url":"assets/js/1d42ad15.e3be4e7d.js"},{"revision":"0f2531d9375833d989d516520a867534","url":"assets/js/1dfd2628.8d2aa2c3.js"},{"revision":"edba91d6177f7f840327f61a5dafb149","url":"assets/js/1e47cbc1.6be3f6da.js"},{"revision":"095a65ae845ff105cba0bcb65587d992","url":"assets/js/1edb7625.6ae2fbb4.js"},{"revision":"74c6f0401e28b7cdd5a8cdf1b0fb8449","url":"assets/js/1ee6f0d4.780a319c.js"},{"revision":"a0ec44e88c5b2e6b53a9478f352f797d","url":"assets/js/1efacac9.913af847.js"},{"revision":"9edfba5f9989daf83b442927fcc6fa53","url":"assets/js/2001.9dc8abf2.js"},{"revision":"f98aafefc5538237a6c32f17e3aa5a6f","url":"assets/js/20215aa7.690155bb.js"},{"revision":"9747a9bc4cf080b51bef1251be7faddf","url":"assets/js/2067.72f75d9f.js"},{"revision":"a823bbea3530f0f4a7e9861dde690b8a","url":"assets/js/2070.2dabe3e7.js"},{"revision":"0aed0852f573e26a4c2b4dd8ebe6b1c6","url":"assets/js/2096.49fcd123.js"},{"revision":"3e217bde1afcf80e2a248953e7655646","url":"assets/js/20d69604.52e253c2.js"},{"revision":"f7c2082a2423a7e01951c93145838dd8","url":"assets/js/21484c29.36ff9335.js"},{"revision":"774dd36fede24aa6d19eec524634ef2c","url":"assets/js/21c534b6.357f3c0f.js"},{"revision":"441a246ee13c8d563e1d77454f27256b","url":"assets/js/22dd74f7.4fc2b7f0.js"},{"revision":"5d18fb2893d74bd764d1740d8020c62e","url":"assets/js/2351.25cb082d.js"},{"revision":"4f00a21a9ef4e52c869c64603d2f45b0","url":"assets/js/2367.aa2d2eba.js"},{"revision":"88c70579ade9366d9718251242692246","url":"assets/js/244418a2.dae6feb8.js"},{"revision":"526611eb0c5afca8401d73fc82fc440a","url":"assets/js/24a68a77.927c5103.js"},{"revision":"ac22c100f6f4545f684d2b74833da3b2","url":"assets/js/24d8f7d7.46d584ee.js"},{"revision":"ad9c97969b01444ee8c6be4bf01d00a1","url":"assets/js/254a43c9.8eab7ffd.js"},{"revision":"43b2513dc6a7f6d01d154f1de187dd39","url":"assets/js/2867c0df.c5d7a9d8.js"},{"revision":"5fe78fc32a7d5fcedc97928f9d07c364","url":"assets/js/28b71cf3.4384738c.js"},{"revision":"229324e05ab6bd407390823bc2b9149c","url":"assets/js/2a71d676.80b7fc27.js"},{"revision":"c7fdc525ed50117441e81936ad1c50ca","url":"assets/js/2b4e0304.07dbf8b2.js"},{"revision":"18516662239239178f6366fc2b1b7af9","url":"assets/js/2b9de2c0.782fd14e.js"},{"revision":"30b1c657e871754a9b85a548d49d620b","url":"assets/js/2ca153e3.0cc73ba0.js"},{"revision":"6bcdabaf982961666b74316c0c3300cc","url":"assets/js/2d386ab7.fb39eab1.js"},{"revision":"7bc0455849333478a6dbb80067f27ac3","url":"assets/js/2d5e3179.5a3d53a1.js"},{"revision":"7a4cc2d967bab6636a4aabd3956e8d5d","url":"assets/js/2e79c762.44d1a9c4.js"},{"revision":"affc0eeb3cf775ba32e6a0f55b10f8c8","url":"assets/js/2e938706.48bce000.js"},{"revision":"244882d8bde5de505b43218e3e6ac89b","url":"assets/js/2f39a0af.35accb2c.js"},{"revision":"1576d6f01c2f69f7ea95e0d4e85c2efd","url":"assets/js/2f8ede37.68669c03.js"},{"revision":"774b44055a4025b7346cd413b19ef14d","url":"assets/js/3095.81d0b4ba.js"},{"revision":"8108f915e650bddb1a1fe94a84151c5c","url":"assets/js/312f6c84.a3e2ac5f.js"},{"revision":"c6f6d08ae464cdc18490e2f9bfe00cfe","url":"assets/js/31735ebe.4b4d9382.js"},{"revision":"4805327197959f9242f1d90adf72254e","url":"assets/js/32cf0cce.8d902266.js"},{"revision":"4b707c6a9f13db0c4cf201c713cc1de3","url":"assets/js/33261842.1fbc45ee.js"},{"revision":"35467e17b176500eaac23b29a1730368","url":"assets/js/3425fb39.eed75373.js"},{"revision":"1334ec9d45a923fdb7292b3e643dec82","url":"assets/js/343bb2fa.39ad9833.js"},{"revision":"cb49dc2d6a8b06b2c659f7c9af214489","url":"assets/js/3448.546c43cf.js"},{"revision":"7b40fb2f69bf87443087ffe8ef5cf620","url":"assets/js/3488027e.daf91f9b.js"},{"revision":"1ec9d6decf38cfc537c9829211b76528","url":"assets/js/349d9c34.d81c9e98.js"},{"revision":"405f2e973b933a4bd173406587a95df7","url":"assets/js/35d30f29.01ba8f50.js"},{"revision":"d20a69465bd4c89d87a50335607486c6","url":"assets/js/36c75202.b2596bf1.js"},{"revision":"c7d750370c0bb35991ff2388a2eab3fe","url":"assets/js/3749f972.1da13ba2.js"},{"revision":"0563c267dacc0d404f6b87efe72bc7c8","url":"assets/js/3817.f5f103b1.js"},{"revision":"070be34dfec6c7c52ea430379d0974a3","url":"assets/js/38b0474b.224da0a3.js"},{"revision":"ddc6f9f3fefbd629fef06ec6294fa653","url":"assets/js/38b71911.95abc9c0.js"},{"revision":"0ba2b94d7a1c3c37fb3e5c40cb132a65","url":"assets/js/3966.aa8b2229.js"},{"revision":"18c93463e6734c299759733e4f0bb575","url":"assets/js/399101db.0f7427c7.js"},{"revision":"c9caba8bf18b7fe6a913f125af342690","url":"assets/js/3b8970d0.573fad27.js"},{"revision":"ad8460b7a2cb51da2611b815591bb3cb","url":"assets/js/3bb1ea30.89418260.js"},{"revision":"15122854789e0f38768606e97bfc0d9a","url":"assets/js/3bd1ba02.d6df9c50.js"},{"revision":"91a5987f48c5601966fe7ea254f1bf24","url":"assets/js/3c5393f3.34a98c80.js"},{"revision":"4f08df53d2d90f077da1af815e420852","url":"assets/js/3cd38fda.7f85f5b5.js"},{"revision":"d5f079e715e6f35e397a3c54bbde3c2f","url":"assets/js/3cd65ff0.f2413fad.js"},{"revision":"2dc815d1dcd83f769af1700663b6672a","url":"assets/js/3d7f94ff.2df0c0de.js"},{"revision":"7b24e1199a8ab1b0b314c816a294aca7","url":"assets/js/3dd749a7.033257ef.js"},{"revision":"e7e4fb1a8ae1f659a930b8e0e1da3a7b","url":"assets/js/3fbeb9b5.beddb35c.js"},{"revision":"c7dac7f16bf5abec41f906ffb82132cb","url":"assets/js/4067.06f26c93.js"},{"revision":"062137b80c42a58e39a0dbcb7e40a105","url":"assets/js/40c17158.24b745ad.js"},{"revision":"b864e90eddde48bb67715c509fa17c2a","url":"assets/js/416679ec.3716d433.js"},{"revision":"0c6260ac5227d7041ca5e6ab2ba173cd","url":"assets/js/41c0ace0.f376be93.js"},{"revision":"e11e95450165f71e8fe886751d023c94","url":"assets/js/425e3dd1.cc463429.js"},{"revision":"52d662c3e0218e0b42e6334b5f4ad5c3","url":"assets/js/43117a18.1b62fb5d.js"},{"revision":"86dfce7cdf6340f04fa903cd4fb05ffd","url":"assets/js/431266e7.22e8c33c.js"},{"revision":"429972edc26a2f3661f76d2aa98fcea6","url":"assets/js/445c22af.7ed164fe.js"},{"revision":"403d9147380036b83c58f0e1b210a319","url":"assets/js/44975943.fbe1e3b1.js"},{"revision":"a47245bf12e16769629f088041691d14","url":"assets/js/4502.a1477249.js"},{"revision":"2890d52884e17870d2fb749036499ac1","url":"assets/js/459.5e62a9b0.js"},{"revision":"a677fb44538afaf476e95bdebe368ca2","url":"assets/js/45cd711d.7568e936.js"},{"revision":"94e144bb575445efbb34e2455364d4c6","url":"assets/js/4604.64713444.js"},{"revision":"d52328c400010f72dd5a6298b993bc74","url":"assets/js/46bf3d5b.8d322aa7.js"},{"revision":"c0f26fb5c058ce30b1f7d1c6077bc118","url":"assets/js/47198c5c.fc458eb9.js"},{"revision":"8e2a6e8e4af10e69561f272be8b9d6fc","url":"assets/js/4806.b515c0a3.js"},{"revision":"72181236d8299a6462c0d765147937db","url":"assets/js/4838deb2.ea8f03ae.js"},{"revision":"215a873c07b79a73ac960bc6e2062820","url":"assets/js/4876.71c61a4a.js"},{"revision":"75cdc3a425f75cd9f9c657379c9a4ad5","url":"assets/js/4985.3e3e16d1.js"},{"revision":"b43dcc9c6c9c655f096a53c395b2ad9a","url":"assets/js/49aec60f.7e5a6bcf.js"},{"revision":"a606a591c1898b26eccd246963634d4d","url":"assets/js/4beb5b8c.c5759142.js"},{"revision":"7da91e76b3e635430729aecdb2890372","url":"assets/js/4c59ca14.abe393e3.js"},{"revision":"df32075328bbac1dc219125eee71ca3c","url":"assets/js/4c7ea6db.6540b191.js"},{"revision":"3ecdb22a350691d0ec5d7fa41c8b53a6","url":"assets/js/4cdf84ef.27a76c17.js"},{"revision":"d5bf6caf7ef8c836ecb17e85a58fa7f1","url":"assets/js/4d27c60c.4cfb7089.js"},{"revision":"e19c602413216507923cc1921e90ec91","url":"assets/js/4f644c0b.516abb75.js"},{"revision":"a877d93f894ffe190452e163b8c20a81","url":"assets/js/4f8bb2fd.32955be1.js"},{"revision":"7383ccc01eaf491179130af0bda955ec","url":"assets/js/50b793dd.88ddebd5.js"},{"revision":"fca2bf503cd594563ef31b1fdccf83e2","url":"assets/js/5133.10f92c33.js"},{"revision":"f94eff430484ddbd60b9fd66e9b42cd6","url":"assets/js/51ebfdb4.3370d672.js"},{"revision":"8b12523d5b8f6c07b163457b5d892662","url":"assets/js/522fd580.63de6e70.js"},{"revision":"3efee2d1325259d959dac0a48d171e3d","url":"assets/js/5238.1dba83ab.js"},{"revision":"b37b21631c57a06ab198a14f2cb326a4","url":"assets/js/5410.3f21a21e.js"},{"revision":"d4eb04292bffb6ccd98231d70088f72b","url":"assets/js/5416.ab24c54f.js"},{"revision":"5c85a6b61c6365b9c7f2e0f1aec35404","url":"assets/js/541d5637.070aa8c9.js"},{"revision":"60159376abbf9330ba12873eb26a6542","url":"assets/js/54a35160.7d4b4787.js"},{"revision":"983c739dd8ffd298199a34aa118e58d2","url":"assets/js/5550.1aa663e2.js"},{"revision":"bb4af79b01059905830d1378cdb3f380","url":"assets/js/5598.fd3ebbbe.js"},{"revision":"6a9ee5872c96f3c52be17894fad46cc1","url":"assets/js/55aaead0.baa03f28.js"},{"revision":"8e1f45e6b2a505a7e9c317ed35fdd22a","url":"assets/js/563b5c65.54eef0e8.js"},{"revision":"68c71ab39ae190e8aaef66c0e888908f","url":"assets/js/5722.2f5583f7.js"},{"revision":"fde89adef7229ebe2ad01ddd267e6fbc","url":"assets/js/57ecc2b7.7dd5f9a5.js"},{"revision":"a26b757a1e58654053d2ab6faec38613","url":"assets/js/58284325.17abe84f.js"},{"revision":"94a7366c6157bc1eed6b6c49344b339a","url":"assets/js/588dd44d.06f1a2bd.js"},{"revision":"3768588008d0d2346aac96aa942194f5","url":"assets/js/5893.b273a3a3.js"},{"revision":"0f4c2198bcee5f1e265c95fae43ad36c","url":"assets/js/58fa4e48.9e5685fe.js"},{"revision":"806a7b0ac502dcce69129f2f9b1f9309","url":"assets/js/594bb6c0.b994b805.js"},{"revision":"23818403ca8df312a33002b81b5859c9","url":"assets/js/5a5e1dd9.289a439d.js"},{"revision":"dd3b4eca4ed59a92abfdaff0b12b1235","url":"assets/js/5b10224b.53efaa4d.js"},{"revision":"ed290ba68754635a64191a14b0bbd675","url":"assets/js/5cdb4525.e0ff053a.js"},{"revision":"b49eedba4fdddb988075eaebfd3a0b95","url":"assets/js/5e6d1f8b.c152b911.js"},{"revision":"67008313e8c59a1916cd2770745cb7d4","url":"assets/js/5e95c892.18a36010.js"},{"revision":"719197a0992b8dbbec97f167ffae009c","url":"assets/js/5e9c3b6a.85940f23.js"},{"revision":"bf104b2971eba7aac798d3993c81b204","url":"assets/js/5fa838e0.9e1281eb.js"},{"revision":"538fd7e3ea3732ea266b08453cc0fa43","url":"assets/js/602bb363.986a6ae2.js"},{"revision":"487c25adf3ac8f09606664b12cf737a3","url":"assets/js/60c781d5.0a15037d.js"},{"revision":"942b6b09711fc3b3ed91a01f2a2baeda","url":"assets/js/6147fca6.65865848.js"},{"revision":"853565331c52119a8167b672c6c395e8","url":"assets/js/6199.b03f4008.js"},{"revision":"35edfba89860ae74b9c969160de2ccaa","url":"assets/js/6203.acd61e9b.js"},{"revision":"7cd7b1ae12ba8b5b8fc26048aa92bfec","url":"assets/js/622bc3c3.a814919a.js"},{"revision":"509f3c25bbb0021b842d607f4445d14f","url":"assets/js/635cb825.9efbd50d.js"},{"revision":"b33d708d5c67794929e87b222cdc1b4c","url":"assets/js/63bdb67b.1ab95110.js"},{"revision":"a465f10274a0ee112f32d7c0dea6daa3","url":"assets/js/6415f59a.38c10925.js"},{"revision":"cc823199eb0bc9092246a828680d9635","url":"assets/js/6444.703c278a.js"},{"revision":"979fc9bf08be5e60c5f3dadfb520a21f","url":"assets/js/64614d1a.088e98f8.js"},{"revision":"2d063e01aa82c5ecaedd4df926ac7808","url":"assets/js/6557cf1a.e38218dc.js"},{"revision":"8c6547dacd91d0b745b769efc6a09afc","url":"assets/js/6577a0df.b67f8dac.js"},{"revision":"d51942d47fbba9ab894926f38fe81b3a","url":"assets/js/65bc360d.a9b73af6.js"},{"revision":"a44aef869d99741b70d00040a59f9c71","url":"assets/js/6679.7ee7da78.js"},{"revision":"286cb2fac77c1ed48bc3161a203fc2c7","url":"assets/js/681b7af4.b70b15e7.js"},{"revision":"aca99d861564a8f79aa56c1cfb84a43e","url":"assets/js/6886.5ad77c41.js"},{"revision":"05dbda6f36803395541cf564efc07626","url":"assets/js/6951.cdc22862.js"},{"revision":"19565a902274072c67841821757afc39","url":"assets/js/6991.c08f63eb.js"},{"revision":"6997841d0e28566ca311ec2fe43809cd","url":"assets/js/69df999c.6ad26a45.js"},{"revision":"0a4688325b95e035e37e4e950b4dca73","url":"assets/js/6ad9afaa.7b10e948.js"},{"revision":"2af4aedc3037880fafc2a90309caf4ca","url":"assets/js/6b5d6c58.4611517a.js"},{"revision":"fdd47f4d2470b195c2f1ec4473158d95","url":"assets/js/6b902128.7a9a8cde.js"},{"revision":"0b9be8d90636bbabdd1f034df00d735c","url":"assets/js/6bcd55bf.6e00e06e.js"},{"revision":"7ea3841a194e5a45435b0b48810f8bcf","url":"assets/js/6cd9d647.aa71a51f.js"},{"revision":"2ec3c35434059d56bfbb6ea1109f423f","url":"assets/js/6d5efd36.23480c68.js"},{"revision":"764ebb0c366258ff81dcaa5b6923d718","url":"assets/js/6d630ffc.c8ff94b7.js"},{"revision":"33211acee226044ec85d1c5bee2c1332","url":"assets/js/6d6bd066.ae82c38a.js"},{"revision":"78ebb2eeb0b80f64872b62f103a9f4b5","url":"assets/js/6e3d6b93.e5772b87.js"},{"revision":"8028628549d770d3e681c36a86e75652","url":"assets/js/6e889b7a.a6a4af64.js"},{"revision":"30bf43cdfbfe2de07323d33bf5e67edd","url":"assets/js/6f2b2af5.cf9c2374.js"},{"revision":"b4f7acc171bd1d89f672e704eeb33b0c","url":"assets/js/6fa58fdb.4147751e.js"},{"revision":"12303d42b395ef90420d6f20e73b26d4","url":"assets/js/6fedb7a3.69c6e537.js"},{"revision":"a2cc12cf441a16fe4ff75628c186769f","url":"assets/js/70321d34.8bed245d.js"},{"revision":"acf487a27f8944c0ab36340c50658099","url":"assets/js/7051e035.56edb1dd.js"},{"revision":"4f0e58f396a8c41b66c705d0c0e34c2a","url":"assets/js/71bd92ad.f0350b6f.js"},{"revision":"d0a209fa81700bc5b685cf34b077cbaa","url":"assets/js/71c41cca.9cdb8523.js"},{"revision":"653f7fb9d5e2864bf1883180342f346c","url":"assets/js/72b3e7dc.0968898e.js"},{"revision":"1b066268c2803ac38a0b98a36df04df8","url":"assets/js/72fea898.872ed2e9.js"},{"revision":"56f2620bc324efdcd75eb69f2d28b172","url":"assets/js/7300.34e6497c.js"},{"revision":"40451fa1a0ee08d419c75c77b96e209b","url":"assets/js/73c38494.30b5075e.js"},{"revision":"e0294639922ce6ee02f47c75bc47e75f","url":"assets/js/73f32b8b.d5fbb506.js"},{"revision":"60d83caf23c32d1c9ae4521ff3581433","url":"assets/js/754296bb.5ec473ec.js"},{"revision":"77a38e3ba07043607aab7cacc8f36039","url":"assets/js/7621.e5f7c7ac.js"},{"revision":"db7fddcd30dca67230c30c0dc89280a1","url":"assets/js/76a305fc.2df724a0.js"},{"revision":"f9353f916ae6d1f47bffe0f3e1d01aae","url":"assets/js/790b642d.cde04da4.js"},{"revision":"5e0dc7f1da6a2d64ca92d173269a4058","url":"assets/js/79899b57.38f34e05.js"},{"revision":"94d3203b91d74112b5ce11b9b440e63f","url":"assets/js/79ee951b.d5c8f2cf.js"},{"revision":"f2bb35239dd6e84b39e3ad21c577af89","url":"assets/js/7b35ddea.1b7a5d81.js"},{"revision":"28e06fa290f5cf0d8bf0e100f88f4a66","url":"assets/js/7c0411e8.958dbcc0.js"},{"revision":"652de1fa614652c1f2680562693635c1","url":"assets/js/7c328fb0.00b35e6c.js"},{"revision":"c87921b403100402bc40f662bdd8a602","url":"assets/js/7e75dadf.7f0599e0.js"},{"revision":"2be017cd5c208ca14ca9e6dfd5700353","url":"assets/js/7e7a4c7b.fba0fc26.js"},{"revision":"649c56821ff4cea3e46fdbddfa42aaa5","url":"assets/js/80f373f2.5a2ab100.js"},{"revision":"b3cee01d0ce1d881f184cebd0a1f620a","url":"assets/js/817191e9.a4bf0a7c.js"},{"revision":"0a0188fdf59062b8098ea2cc7b034765","url":"assets/js/824c452b.972baaef.js"},{"revision":"4af487ef78276718c2cf922599cfe548","url":"assets/js/82c03827.2706df20.js"},{"revision":"e495c49a617a2e10c1bd488b0bdbe2cd","url":"assets/js/83236138.589471a1.js"},{"revision":"df7b41fb3ca28fac41ef36b7dc95a65e","url":"assets/js/8336.193c3398.js"},{"revision":"90acac952a86822836b624bbd712077a","url":"assets/js/83fa3eff.e79b7252.js"},{"revision":"03201c12a3da937ee7bd810d79ad19bc","url":"assets/js/8470.ed37ee88.js"},{"revision":"4f6878612af85117cf4be781ef7cdcde","url":"assets/js/854b257e.01876dc7.js"},{"revision":"9a31d0c1bdc72647155186190722d67c","url":"assets/js/85ccb835.6decdca8.js"},{"revision":"5f25b1da71ae5fab3f2ff92a8b9e6476","url":"assets/js/86170a86.623c55b8.js"},{"revision":"dfd247851c9952f3b0f43832554d3449","url":"assets/js/8648.d9a3b348.js"},{"revision":"33976ea5ee259cea08fc6e5f84e94ed8","url":"assets/js/87531641.6a56a7b0.js"},{"revision":"60c6b63b17c3b8fac38f79f8e92fa76a","url":"assets/js/8798.4070d3ed.js"},{"revision":"cad4f131c67e5ebff5a9a23a84933c5f","url":"assets/js/87d5db97.df12edce.js"},{"revision":"a65b5afd279e342554221b1539274569","url":"assets/js/883b3acd.2888217e.js"},{"revision":"2e3ab27fb7aba5dfe0e8329712c4c483","url":"assets/js/888a5ebe.6b34994d.js"},{"revision":"2c23cfab885427922c535956002613b4","url":"assets/js/8921.8e17b509.js"},{"revision":"944d74540f20dae16796e82c339cded6","url":"assets/js/893c6fee.dc1e413c.js"},{"revision":"a56e210bcc92fe8163c45772368ad856","url":"assets/js/8a578643.b1afe32f.js"},{"revision":"634b4610cab9c2312e919104d89db0eb","url":"assets/js/8b23f58f.1d9acd00.js"},{"revision":"39faedef7f3baa449be37c47e300263b","url":"assets/js/8bdaa531.2e15ef3d.js"},{"revision":"3b558739eefd5a41fbff3ff4f79c7643","url":"assets/js/8ca7e4b3.9c9b7062.js"},{"revision":"4231ec57adbc29e2f3de489921c7f685","url":"assets/js/8e0be0d1.b3cc744b.js"},{"revision":"6ae2435b646ba1fa693e991add49e580","url":"assets/js/8e6a4e74.d90747d2.js"},{"revision":"f08a7fee5f3b3e9c4188ae967ab34cb7","url":"assets/js/9076.554bf876.js"},{"revision":"cdf0052b3f7f042bdad1d7476befa8ff","url":"assets/js/9197ae7a.04363e9b.js"},{"revision":"8d991a28742671c16933be0257cd00ca","url":"assets/js/91e8ffa7.f17bc1c8.js"},{"revision":"5e4fe76e4bdf705d8c835d57a195338b","url":"assets/js/9229f78d.2d7441b8.js"},{"revision":"4a21d28c2337d93b5f78cf6ec1c69fdb","url":"assets/js/93456434.7f97b33d.js"},{"revision":"553687ee9ef3714b34f48dff71613a6c","url":"assets/js/93486759.c684609c.js"},{"revision":"f7f1110d9196a23c40c842848dfab07e","url":"assets/js/9366.bb5993a9.js"},{"revision":"488b84f78c35697186aa41e462d8738a","url":"assets/js/95bcd1dc.9e3705f7.js"},{"revision":"a60c9a01230048b835a15887142cc4d8","url":"assets/js/95d63b84.48683e75.js"},{"revision":"27c2ea5455388e35e277e0ecbae98b69","url":"assets/js/96f5d401.f1a077d3.js"},{"revision":"ef92697c4218807909e5a6cc2e8d1bbf","url":"assets/js/9857b334.cb3259d7.js"},{"revision":"731d67fd6be69b4fd90771707ad89508","url":"assets/js/9861953a.9e45efd8.js"},{"revision":"4755d6975537f3333be99b141e5eb2bf","url":"assets/js/9941.9d085007.js"},{"revision":"65b5658489d1fe07ef562c811378ded1","url":"assets/js/9992.dce71c90.js"},{"revision":"8071d509aeaa3bba31504851d8370f98","url":"assets/js/99f50fdc.781587a0.js"},{"revision":"6dd4ff2ec5dbfb5a24d501db34bbd4cf","url":"assets/js/9ac34ba0.ee2beee1.js"},{"revision":"301b3f2dc87b99d9b2817e0502579c48","url":"assets/js/9ad56985.85846e3d.js"},{"revision":"47ea7e8575e2fff1d12ee97ddffd70c8","url":"assets/js/9b59e572.38020ee8.js"},{"revision":"6c3c319a3c878cceeed16c51cfd48f8d","url":"assets/js/9b8d311d.445c665a.js"},{"revision":"3adf01ba6cc031f50411d66025b774cf","url":"assets/js/9c2278b2.e4bb31a3.js"},{"revision":"c2ac91dee801b52f1595ca9ecdf19934","url":"assets/js/9cd2fc0a.7a59a99f.js"},{"revision":"6355a2ec40d59a996a27ec4a7d314e72","url":"assets/js/9d4488d1.2d0f9186.js"},{"revision":"10c7102be0abb0761a11cfe9ec2ae625","url":"assets/js/9fdc340b.f07ee9b5.js"},{"revision":"90e571528fc7aafb755b84275ef2d1f1","url":"assets/js/9ffd9d1d.8e890056.js"},{"revision":"6dff8ccc13c3711056c505cfa25547af","url":"assets/js/a0eefd42.46c733f7.js"},{"revision":"2bc4991840acbb42e8af1c552dfd3ce4","url":"assets/js/a1a3054c.7748d354.js"},{"revision":"5a5fb35830a7475e2f84b2a85db3b10a","url":"assets/js/a21e984c.7958bd1f.js"},{"revision":"0a3dd4ae5a8a6570a11babc4f59ea6de","url":"assets/js/a2ca8fe8.06d5be37.js"},{"revision":"4e9bcde1056fb8863bcb1980d5192608","url":"assets/js/a2d5f767.916f6beb.js"},{"revision":"11cbeff6a19e8716a95030533562aed4","url":"assets/js/a2fb89b8.cc67bf47.js"},{"revision":"d68e4103e81315bc09cb9a5843ea27ec","url":"assets/js/a305e2ac.013ea547.js"},{"revision":"cc9d420cfd7018559fb9b23ee18329c4","url":"assets/js/a4c78573.2687296e.js"},{"revision":"61d4637d1944355a6a8e49460e6b83b1","url":"assets/js/a4e7ef95.3feb3b91.js"},{"revision":"837dc6d3cc0373f0535ee40a6a964a77","url":"assets/js/a562d1c2.c17587e1.js"},{"revision":"a5e79d7bb9d8d6b1ee1e33ff5a270ad4","url":"assets/js/a62eaa10.6e5cd70f.js"},{"revision":"dc5cd058cff937f05fca6a4dd5dcee4c","url":"assets/js/a6eaa2fe.efc44654.js"},{"revision":"ae228b6ac03bb7834d82cb7ad475a127","url":"assets/js/a7456010.9be04e4d.js"},{"revision":"782bea830a59090913053b8020b723c7","url":"assets/js/a74a7dec.be6c14d7.js"},{"revision":"94fe27ffdd5431452f3f7f2a37e00a0b","url":"assets/js/a757a55c.1df63235.js"},{"revision":"a756c5c5e70220974515adf46ee01a5c","url":"assets/js/a78b3ba0.0bdb587c.js"},{"revision":"1302ab269744e7531b368c8d0c6f0524","url":"assets/js/a7bd4aaa.0538e638.js"},{"revision":"bdac5005f1265a12b1373dbeceb677b2","url":"assets/js/a8bdbcd5.a60ddc87.js"},{"revision":"91ac4b3416a57a85800e7f6db27343a7","url":"assets/js/a94703ab.ce583b39.js"},{"revision":"32fe169b6a9f1a953a16b0567af48e6b","url":"assets/js/a9c868b9.ca043b0a.js"},{"revision":"322193e3224f011cf02327826fae08f0","url":"assets/js/aa276556.d9b5fa17.js"},{"revision":"54131d27356bf5bf1613bb2feb05e362","url":"assets/js/aa81450f.b0a71feb.js"},{"revision":"9b0b59c402d93629a4f69dfb23dfbc88","url":"assets/js/aba21aa0.7e561951.js"},{"revision":"3da82be40634b3c2c540dffb5ead2a8c","url":"assets/js/ac61b989.9815f31d.js"},{"revision":"8724022984aad87a776deb7a454a8403","url":"assets/js/aca8e61d.3fcafaf7.js"},{"revision":"12a9d033ac825c801da067d083912145","url":"assets/js/add4bb7a.ce6e0402.js"},{"revision":"807de708b27676a15928cfdd84c23c4b","url":"assets/js/aeb124bd.5c69a2cf.js"},{"revision":"cfc2efc86146a9c12a4f6136083d1a17","url":"assets/js/af70a4d6.e113a34d.js"},{"revision":"833762cb90b72c8f462825a401e1b618","url":"assets/js/b158dc01.0b4abbc5.js"},{"revision":"3c02bee28f37e25bdd3ab47beb24b0b7","url":"assets/js/b21946ae.21cac32e.js"},{"revision":"bf943e79941abc4d10fcc3775d30b632","url":"assets/js/b24d385c.787828ee.js"},{"revision":"13bef319097a9783f8070024861d4c47","url":"assets/js/b496f3e3.f9df663f.js"},{"revision":"8efd7f1a44bfd4cd44ba2deb09cdd248","url":"assets/js/b5210edf.511196b0.js"},{"revision":"f66bcf921d08a0c5e76563a053db107a","url":"assets/js/b60da6d7.f79933c7.js"},{"revision":"f4351ffa5e29b879f118266cb5b8b71a","url":"assets/js/b60de388.232534f8.js"},{"revision":"6856ba3d922b216759fbf7539f60b143","url":"assets/js/b6386ec9.fa7a4061.js"},{"revision":"f949f8ba8440e7c9284f004999e2944a","url":"assets/js/b6438b6d.599d2076.js"},{"revision":"3bdb004ef4c2b057cb25fa0fd528cc34","url":"assets/js/b7bb49c4.fd3281b7.js"},{"revision":"f7773973a7be3ea07757c5a3cb24d422","url":"assets/js/bba094ac.7e07c076.js"},{"revision":"44f6cc415a7dbbb932b160bd2deac4b7","url":"assets/js/bbd444ff.c726aca0.js"},{"revision":"f9496e18aa5a52c1787ff4a1a76189da","url":"assets/js/bcc35f8a.9de088ac.js"},{"revision":"2938b539510df2fdfa904bcba4709d0d","url":"assets/js/bd760347.78eb7290.js"},{"revision":"3d7561083110fe014d3d64dd3ffb77fe","url":"assets/js/becf8c88.c1f4d856.js"},{"revision":"ab0366acada37799e7128fc0c2681165","url":"assets/js/bf3ddb91.a79f64d7.js"},{"revision":"7f8e21df8b073cfdfefe6e02095a0fae","url":"assets/js/bfb1f9b7.3272eeae.js"},{"revision":"ff8e523e9b264e8650a9e87cc6519b32","url":"assets/js/c0b93d5b.7b05689a.js"},{"revision":"4a0ab349bc07a972346921a124824e62","url":"assets/js/c0dca479.de16761f.js"},{"revision":"f75b2a1b7e5eb4e92dc24d1d6cd5643c","url":"assets/js/c10e86aa.648790ad.js"},{"revision":"5a8572bdeb55b7261b40ba2a07e9ba94","url":"assets/js/c141421f.81ac4343.js"},{"revision":"96230e32666c188649491771410e2ddd","url":"assets/js/c156da02.851a2411.js"},{"revision":"bd99c0dfe746ed7756d4affe72fd3d11","url":"assets/js/c15a368e.be5f82a4.js"},{"revision":"9639b6b3f5cf35d169ac48ee38c66130","url":"assets/js/c3e6ab10.f5aa4522.js"},{"revision":"2881dc358f2a3ef326cfcda010aff7f8","url":"assets/js/c4dcc6dd.181feefc.js"},{"revision":"e364e7fc28223a6fd2079de55f855952","url":"assets/js/c4e9b37f.46528530.js"},{"revision":"23197e480b2fc72a41d13a73c2c8da97","url":"assets/js/c4f5d8e4.c74b2ace.js"},{"revision":"74363468dab18b94300968775659b331","url":"assets/js/c5f4348b.c9fd5287.js"},{"revision":"dd8f3387cab96a123910bd64f1c2eaf4","url":"assets/js/c72cf9c7.b2311973.js"},{"revision":"84158f2da9be0883535a1f1f39a76b69","url":"assets/js/c737e1a5.7abc6352.js"},{"revision":"fb20c30c362e436153e9e5c2d5f9c0b5","url":"assets/js/c78ecae9.80ff04a7.js"},{"revision":"c4f8b5d8f24ca24591b0422c0fdda506","url":"assets/js/c8018499.94807fb8.js"},{"revision":"9ad30a540c573124d8cf5e4358c64a95","url":"assets/js/c84a9914.17f4ab18.js"},{"revision":"fd71586e297df126d7494f32877f7906","url":"assets/js/c8a93e67.31111d60.js"},{"revision":"5dab0107ce879296cd326f5c0d4cd930","url":"assets/js/c9a1eaa2.ce1e780d.js"},{"revision":"da1b77bbea17f87e90b15ed73004aa26","url":"assets/js/c9ae34fa.6b49713e.js"},{"revision":"7397afaf343c007996e9a8acfb37d1e9","url":"assets/js/ca8a1b2c.e4a4eb22.js"},{"revision":"ccf94095768352153ebb1d49b585ff89","url":"assets/js/cc2fcaab.1f3fb811.js"},{"revision":"06d136e26997694aa559f7fe5d50dfec","url":"assets/js/ccdb3c45.0bfe694a.js"},{"revision":"602241bc8e3e14440b377695343c7016","url":"assets/js/ccfc7d3c.8e790cfc.js"},{"revision":"f5bb08d43bdd4f22ff396b70062c62f5","url":"assets/js/ce7e7ba1.8baf7c26.js"},{"revision":"aa66e9f8360b382a56de49b5a3f3cd6e","url":"assets/js/cedf0e63.6875b145.js"},{"revision":"419c0adb99fce829771a4ecede84fe9d","url":"assets/js/cfc0d51c.63159cca.js"},{"revision":"09376c7bfdfbde0251e4f24c154465f0","url":"assets/js/d00b9fd9.1261bf37.js"},{"revision":"a1ea5d9641c473e82b70840d5248b117","url":"assets/js/d0ab59b0.0bbf9f35.js"},{"revision":"1d649a907e9b8624db0b4e3bc61c0b18","url":"assets/js/d152d6b2.458be6b6.js"},{"revision":"24a85955bb50dbdc3469c0cadef23df1","url":"assets/js/d23efac3.2ecec8cb.js"},{"revision":"1dfc8251300dd85fc522cb857c97fe55","url":"assets/js/d26b0f2c.b40beb44.js"},{"revision":"ba36542e4fe088c44505e3b5efaeec97","url":"assets/js/d2ba5076.4172c52d.js"},{"revision":"f12fa570459d0b01ca89d64cacbc340f","url":"assets/js/d2bda2e9.709ed328.js"},{"revision":"1b95504181b068fd33ac284bd0bcedee","url":"assets/js/d3585a2b.a96a16c9.js"},{"revision":"7c82ab5a144547d59b1bcfff0313bb3c","url":"assets/js/d45ccebc.46bdd5e1.js"},{"revision":"468fe03aa75ce963b2c5d35e53d00146","url":"assets/js/d47de5fd.54919189.js"},{"revision":"006b9c1b9e60cb796c55d24ea1c672d1","url":"assets/js/d494a195.715402b3.js"},{"revision":"692d055602415c9b9c531d9caff827fe","url":"assets/js/d4e195dd.90becb40.js"},{"revision":"cebb0b8f9fcffab5fb9ce54bcb97956e","url":"assets/js/d63ab801.8b41f813.js"},{"revision":"2056f98ca91b293770ff1c43b79453d4","url":"assets/js/d89bf822.19425504.js"},{"revision":"d387328e515c3c217d84d78dba522184","url":"assets/js/d9cff955.17089ce1.js"},{"revision":"7f1f987599206e1c3127a4efc4fe6787","url":"assets/js/d9fe55b2.9a0ab82f.js"},{"revision":"b0510c24fa96c6dc099df713891686c6","url":"assets/js/da4fe776.392e6673.js"},{"revision":"b5632ddaab1e1dc27afe2d6a62a9ce94","url":"assets/js/dae64152.d121d331.js"},{"revision":"fc0fa5200c73c314232737df40a9c4db","url":"assets/js/db6afc29.96004511.js"},{"revision":"a239e106d15b983091f98da3971e85a1","url":"assets/js/dc030738.25f00c84.js"},{"revision":"db3e4aada3cf47eb2af3035681a012dd","url":"assets/js/dc109391.3faf0145.js"},{"revision":"5b9cd491b42e089797e28a24a1bfcb6c","url":"assets/js/dd1fbe6a.f3086775.js"},{"revision":"b6172a0a65a1051df279879cad8130e4","url":"assets/js/dd3d6085.ce12282b.js"},{"revision":"e9ae860590c74728b354da253bf0ba4d","url":"assets/js/df2a4a59.34cd5751.js"},{"revision":"48d6c89743e93228bb1fa747d3a0b3f4","url":"assets/js/dffb9609.88f30e02.js"},{"revision":"ffce615da2b7bf0c9f5b5e785e42ff64","url":"assets/js/e17e6af5.e4460d22.js"},{"revision":"a56d6747457a82902b502dc73dc6b209","url":"assets/js/e1a53158.f242f441.js"},{"revision":"6a7a0522079bdcde7863b9192e3d22d5","url":"assets/js/e3b728f4.f61cd1a4.js"},{"revision":"00b87e46ee4335403c95832c949b17ef","url":"assets/js/e3cb94e1.2fbe157a.js"},{"revision":"142d84a3467147bcff21932a2d25c59f","url":"assets/js/e47fd75f.55866ef8.js"},{"revision":"ca010452f33914fb3bb83dc867fc9579","url":"assets/js/e4c96358.db9f4267.js"},{"revision":"980cf95550dda7f502c4d5682fc52675","url":"assets/js/e4e92f42.68347e70.js"},{"revision":"c555ee5ca65744e1987d9eed0c51bf10","url":"assets/js/e5f7cd7b.1e2f8399.js"},{"revision":"533a3a4a75d0454dac5f03ecef470497","url":"assets/js/e6501e5b.30621c01.js"},{"revision":"bac5aef7bc7a8780fcfdb0f5e2ecb1ea","url":"assets/js/e682932b.ae44f400.js"},{"revision":"6c84a72507a754fd9197bb560c9d47c7","url":"assets/js/e69f0a50.219ab9c8.js"},{"revision":"eb25c30f325ca4181ccbff529afe1189","url":"assets/js/e6b53073.da3d4dff.js"},{"revision":"6c7c28a24094981cf4368d1b8e6e83e6","url":"assets/js/e76d69e4.04f7e29a.js"},{"revision":"f13fed59ca5c17250d8178445a48340c","url":"assets/js/e7f145e9.51e5c7d1.js"},{"revision":"d2d718952a681979bf81d1d712c928a3","url":"assets/js/e87d3b80.10453172.js"},{"revision":"0782856b1bed55c05ca505bf0201994c","url":"assets/js/e8d5b74b.e639b7cd.js"},{"revision":"e6acff1bb1b82a8b2176e2e56c571465","url":"assets/js/e8dd6634.082741eb.js"},{"revision":"d1d60bedbaefd9cb9a058dc04221c25e","url":"assets/js/ea46410f.bb224ad2.js"},{"revision":"6bb552d0ef81d2a5f7349616f4e7f2e1","url":"assets/js/eade58ca.77245c3d.js"},{"revision":"684b070c1d3bdfcae0b9e477567fd101","url":"assets/js/ece243f0.12f320ec.js"},{"revision":"45b89601d786dfbfbed24dc0df01106e","url":"assets/js/ed38b210.f807317a.js"},{"revision":"2b75483216b6940c82f0dba266a22aa0","url":"assets/js/eda49e41.e29c4666.js"},{"revision":"77f843fa16098686553cd1894511fd1a","url":"assets/js/eda784af.10eb94d9.js"},{"revision":"97a0c0005bdd898dc372aec41db0a237","url":"assets/js/ee84ef31.38465581.js"},{"revision":"c282eb425444179cfd22316e657bdca4","url":"assets/js/ef72e420.cd6c5497.js"},{"revision":"835cb749c3b10bb5992553c6adaaceff","url":"assets/js/efa09b84.74d58e35.js"},{"revision":"e33f6bbb3c0953dd71cee41bd5754912","url":"assets/js/f1f0b9c9.f827f5ed.js"},{"revision":"7964db8f2d2dea9f356fb8b42904fda0","url":"assets/js/f287ed2c.b5157456.js"},{"revision":"5536786a1945a4db97189d2d496679db","url":"assets/js/f36074be.584c26d8.js"},{"revision":"1b76daa42f6c1073ec63ac4c7b103340","url":"assets/js/f3937ce2.3021c565.js"},{"revision":"e9cbe64c1413b062ed28ae7c63e6205e","url":"assets/js/f44068e7.b588f11e.js"},{"revision":"79127739ef6b312be9243174e8a8e7b3","url":"assets/js/f4e5f89b.151c0626.js"},{"revision":"e5b8066aab51d812eca1322caef39ba9","url":"assets/js/f58ceb15.24e351db.js"},{"revision":"f056548bfc4568bf4ff8f240fffdfaa6","url":"assets/js/f6420a7d.10a02a0d.js"},{"revision":"c7977ce5fa60f3c41d75ed3827bcbd73","url":"assets/js/f7e672b1.22bf0186.js"},{"revision":"b3cd6feb4850cbae090b3695f2a3599f","url":"assets/js/f83b6261.a778ac53.js"},{"revision":"40f647feb1765f9c0555a73657b0a312","url":"assets/js/f9dd20e8.67aaba40.js"},{"revision":"f6691fa2393c2d08d7b7a4884b6a7949","url":"assets/js/fb274994.a4f08fe5.js"},{"revision":"22dcfc319f83f172c34c0e7a1f79daab","url":"assets/js/fb57057e.7527f038.js"},{"revision":"331a18616b520aefdef0adb348a2a7b1","url":"assets/js/fbcb1a27.f4be0bc4.js"},{"revision":"5acb06c4cdcaa76b81567d1a82162d48","url":"assets/js/fc419e9c.cd97323d.js"},{"revision":"8cf6f4ebf9ac5d60241d5a6fe2ab6020","url":"assets/js/fcaab584.359f4216.js"},{"revision":"bd0fd7551cf17fd89aeec71141d6060f","url":"assets/js/fe5e75f3.c7f26ab2.js"},{"revision":"457851c3cca34fb7efd0bd63e42896d7","url":"assets/js/main.f59109f1.js"},{"revision":"d9c2ac06d6f6bbfd1638ce0f3658c859","url":"assets/js/runtime~main.d824a08e.js"},{"revision":"24ea50f271c7c333ae0dbd58f7948442","url":"autoload.js"},{"revision":"c055ded39a2b668364851afd144d8c1b","url":"baidu_verify_codeva-Diwo6ExDb5.html"},{"revision":"95abd3bca1a7bb66aee48e7d898a5c2e","url":"basic/index.html"},{"revision":"0bfcfacb36833dc7dbc06c3ee412ee44","url":"Bedrock/bds-core/index.html"},{"revision":"0a12ccec937ca5e6773a0e61a9a2cee4","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"869fbc18c0d3d505744aa2ec91a6320f","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"5a48618fbad36614b6824d16a6c03fd6","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"193d81551f9c629bebe1585c7d145b51","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"79d842e2821a93155d2fac4ccdda6dce","url":"Bedrock/bds-core/process/BDSX/bdsx-install/index.html"},{"revision":"2602310189c0de2ee28dba90473d2919","url":"Bedrock/bds-core/process/BDSX/index.html"},{"revision":"e945914e04d20dc36053d3736db4926c","url":"Bedrock/bds-core/process/index.html"},{"revision":"4b2e7ebd53b4de9ee7d94848bcdadaef","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"6facf64b54fe627d5b993ca76c1bbd07","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"0d5402fb5fcec9b32c7318d1196985b0","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"61153d73eee25177d6e519f2540ec343","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"0c6d1b4f9bc70e8fa4d39a94eb5eb01d","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"0b40ae9614053dd4e43ffd6e1c078b98","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"6f0c7b749bf5a8763d8e15daec0ebf55","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"8ff94ea184c3c5b4b94c8757307ddc08","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"e624a0a8dda7ea3d4f360a33e8769483","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"299c9d538c77c544f434dce74a125480","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"0dd2f09fb8e6f9a59ad122b236188c5e","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"e2a020e6a30294cad4037a4a7814d6ea","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"c06e34491351de545ac6732b7ef388b1","url":"Bedrock/bds-core/start/index.html"},{"revision":"951fef72655dc232ce4b0cce4b72ee61","url":"Bedrock/intro/index.html"},{"revision":"057f7339745cb95bf912722a02c69299","url":"Bedrock/nukkit-core/index.html"},{"revision":"2c3beacfa0224cf8acc547678a95ec0a","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"19954b49eedc60c925dcc9668a6b011c","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"57345e7d7d7cd9db3f1613759a623486","url":"Bedrock/pnx-core/index.html"},{"revision":"a653f6f655aab53c61eb8145606acc74","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"50e5fa79222437ade6ed007831edec7c","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"31e43e718e23ecaaa28a621c9c547e30","url":"Bedrock/super-basic/index.html"},{"revision":"565a94c80ab6099f1a89fedc2bf20944","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"862976943e43d5e2a6aa9904c05d53fe","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"9901313403b1dc8b5a7f7373cc4e3d9e","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"7c8156a94164b91aadcc4b7ea168c0bb","url":"Bedrock/super-basic/version/index.html"},{"revision":"871df4c835deccddae51cb37312c606c","url":"contribution/index.html"},{"revision":"70e58da1b0adbcdbb3293a294565e35e","url":"contribution/todos/index.html"},{"revision":"5b7bd82c4e5e06aa645e1a14cfac7cc1","url":"contribution/writing-specification/blank/index.html"},{"revision":"f84b2e0037907056bb4438c18286110a","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"1c5111d16dd470e2e3cd14fd0a0f66e9","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"9949a09c9eae4336ca325eeb8e08a763","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"dba3d274c6fa954844aa94e38a65047f","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"d8a5f199316edd3c38537bbea7486ac0","url":"contribution/writing-specification/reference/index.html"},{"revision":"90ed2a41efa8ecd212c0629e3de34c10","url":"contribution/writing-specification/text/index.html"},{"revision":"77f54f1a7e57db07c84ca8ba366a6c7f","url":"contribution/writing-specification/title/index.html"},{"revision":"48883d9f0144151fa9cd4003aac5e646","url":"contribution/writing/index.html"},{"revision":"4759a2bd3e4800730d843d8f17a50c8b","url":"database/backup/index.html"},{"revision":"6dadf1b85cd466158e47c850a88f6e07","url":"database/configure/index.html"},{"revision":"4a92aa2cecaf501b007dac9600aeedaf","url":"database/index.html"},{"revision":"2488f245ed5b3f2ce271d92653208f61","url":"database/install/index.html"},{"revision":"376515335c683ee849d37d623c8de17c","url":"database/manage/index.html"},{"revision":"92e64f95b46aa70415d25f130f3364ee","url":"database/uninstall/index.html"},{"revision":"976584c29f5ddc79d6b8abcaa26f0703","url":"deploy/index.html"},{"revision":"00bd73f46be724be0d69e1558504a4ce","url":"index.html"},{"revision":"c22eae44c0cdbcb863075bfc06a13ac9","url":"intro/index.html"},{"revision":"b99763d3981fec27634ec2f89562b262","url":"Java/Advance/all-server-code/index.html"},{"revision":"caaff1b1bc7ddecdbb2932a1281de826","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"02f3315a08e355ad540aec32314b2a12","url":"Java/advance/bot/index.html"},{"revision":"7d888aefad5d275c76661857bef3cf0d","url":"Java/advance/chinese-username/index.html"},{"revision":"be03d82ee83322df5e34d50bc937a141","url":"Java/advance/command.yml/index.html"},{"revision":"bae62645692072ee271ae2a499017550","url":"Java/advance/database/index.html"},{"revision":"81340e0551ddc5072ec7d7439e579cd6","url":"Java/advance/index.html"},{"revision":"0d362d887133398c950af2eca2b8c742","url":"Java/advance/kether/basic/index.html"},{"revision":"5b1f13fc7f9f3050eba890d264850a26","url":"Java/advance/kether/idk/index.html"},{"revision":"98e21011975bc52a045e2fb0db5ecfc4","url":"Java/advance/kether/if/index.html"},{"revision":"8d7bb5a9a1457b2fa6343f0bf8a33adc","url":"Java/Advance/kether/index.html"},{"revision":"8989fb31e84a3fc53ddea719af7476e5","url":"Java/advance/kether/math/index.html"},{"revision":"3668f18cbe41ba7a490feceb9b3e2e9e","url":"Java/advance/kether/preparation/index.html"},{"revision":"2717ba48709a081743de145c06d257ff","url":"Java/advance/kether/variable/index.html"},{"revision":"c85181673fcb7a1c9d3f672b88bef9be","url":"Java/advance/Linux/index.html"},{"revision":"addc6d0489266293214f5126b33bdb72","url":"Java/advance/loginchoices/index.html"},{"revision":"4e524eea134c866f841c8b46b21bf202","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"dbf2abf9d482ce8b3f68a48c13f0f5ac","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"ae2c6a13b26695965a05602c8e850999","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"06eff1c2d0c19d32ca8713ed7d8a81a4","url":"Java/advance/slime-world/index.html"},{"revision":"be792bab182db5de94a41cf05a09812f","url":"Java/advance/YAML/extention/index.html"},{"revision":"c77dd9e5c2f8fa61ca9d8454e06be291","url":"Java/advance/YAML/foundation/index.html"},{"revision":"3232f737bc8651f7d08101e6b54ccd44","url":"Java/anticheat/index.html"},{"revision":"c53a386a6cfa0eb532a901fb3ea31d12","url":"Java/AntiGrief/index.html"},{"revision":"f0aaec4300445ebda427937fb36e1914","url":"Java/basic/index.html"},{"revision":"bb3c5e975bf005e18681b2dea60d33ef","url":"Java/build/index.html"},{"revision":"a230642cf327dbb7bf2f95750a361548","url":"Java/bungeecord/index.html"},{"revision":"05ac2b1b0dbf90136fd9ae5518012f3f","url":"Java/category/placeholderapi/index.html"},{"revision":"95ae9ae9dd0c200b17e3f4168882d6b9","url":"Java/chat/index.html"},{"revision":"f948cf3e824ced566588e8e1310d5dec","url":"Java/command/index.html"},{"revision":"e7233691876e150bad734819dd00740d","url":"Java/cross-server/index.html"},{"revision":"8f598b6b8c08dab086ba8953e7865efd","url":"Java/cross-server/plugin/index.html"},{"revision":"71b8f64a6c80511ebea275359c4a6672","url":"Java/Essentials/index.html"},{"revision":"6aa4ab75d653b442f3082557573173b3","url":"Java/Front-Plugin/index.html"},{"revision":"400a058ee130efc06a1311f0027b249d","url":"Java/game/index.html"},{"revision":"bb347efee43c202dfe5d9c7d081b8928","url":"Java/Geyser/index.html"},{"revision":"a5d27e74e9367f0d461559557dc4b0f8","url":"Java/geyser/introduction/index.html"},{"revision":"9fb02becf01aeb594e1627fbf3c71d33","url":"Java/geyser/upgrade/index.html"},{"revision":"a9a346a6a899add259959337bc4fceac","url":"Java/Geyser/Upgrade/index.html"},{"revision":"4aeda68cb195ce00c9e488923ffd279c","url":"Java/intro/index.html"},{"revision":"c176567ce068dc5b4ff950f8cbbc7bd3","url":"Java/items/index.html"},{"revision":"a80c12b0197b5b5b3769e8009aa10542","url":"Java/maintenance/Java/index.html"},{"revision":"c89a13e9611dcbadf65fe43fdc0b343f","url":"Java/ManageTool/index.html"},{"revision":"ee810ce8b0f2f8cc7d0ddc2f138e5c1e","url":"Java/more/index.html"},{"revision":"8298e75b642710e20a1725734dc17057","url":"Java/optimize/index.html"},{"revision":"d9dda1a84782c95c58a493f547d05c8a","url":"Java/optimize/jvm/common/index.html"},{"revision":"f467510eb9cf7f715dd57173fff5b790","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"cc8d54bcdfe23f9c59c5b2cf4e7d9732","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"88baba2255be22f2677b9ed9920a255a","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"db20e9412d2ea30197b8404dfe883930","url":"Java/optimize/jvm/index.html"},{"revision":"b3078d233493386c7a242e1d65f0611e","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"99d1efc3381fafa78360445f0a671dee","url":"Java/optimize/jvm/zing/index.html"},{"revision":"88f179fe6651c43fb3d7708617393763","url":"Java/OtherPlugin/index.html"},{"revision":"f701f95961e3822a019b002259dc99cd","url":"Java/permission/index.html"},{"revision":"378e39191e96c90d3d0581d5982a4e5b","url":"Java/plugin/index.html"},{"revision":"4462296e7c01c05e1a7bcba1a9aec6d9","url":"Java/PluginMagagement/index.html"},{"revision":"52cde5b372d234a6754e8ff85c6c90cd","url":"Java/plugins/other/Skript/index.html"},{"revision":"30e2b78e1f076c1520c32d0695609958","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"d1d0ba9b6e4e0394a185db9bb661b750","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"8ee54d25de10db52eee702e296c0eca3","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"2811491d5f05f3aa1265bd8d3056020a","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"99a645c4118a46611a1b800a2a6c5fb0","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"6c764718df4b05829ac20ef8567ce421","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"7111f8b65c47b47c29c4c02a524da2c6","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"bec6d4e4a267606c3e21c81539f763aa","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"5bccca0788a91383ee005d9ab159a23e","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"3dfd6e73ac0d3d030e9047b509168147","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"2d875a8184216293bc4b25d1a65f65fe","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"d97cc7e5878fe03f4aaa36822ecaf871","url":"Java/preparation/index.html"},{"revision":"209b6c6c83c03240332bddaa14d4e316","url":"Java/preparation/text-editor/index.html"},{"revision":"91147fe406e342a2470bf71286f250bc","url":"Java/preparation/websites/index.html"},{"revision":"ccfe1d7b383c6ab39e4cbd24627694ca","url":"Java/process/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"5bde08175847eac22388fd095274e57e","url":"Java/process/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"2ea295f7038ed89c1c95437ed416eb9a","url":"Java/process/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"56ba7cc0f73e346c8527e8df75250520","url":"Java/process/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"5b33ade57f0f638c2760ffddd2c87946","url":"Java/process/cross-server/hide-the-real-IP/index.html"},{"revision":"8f2d2b361f41e3b363565005df9c7c1c","url":"Java/process/cross-server/join-server/index.html"},{"revision":"f6166a521dd25b2eb1cdd9ae9b4af331","url":"Java/process/cross-server/plugin/BC&WF/index.html"},{"revision":"de55a1826e2635c9d18a8fc252c6dd55","url":"Java/process/cross-server/plugin/velocity/index.html"},{"revision":"b1ef1f2b334c0471dce47a0c339ca337","url":"Java/process/cross-server/precautions/index.html"},{"revision":"ecd7bc148a2c19c7f7cc66c5456d764d","url":"Java/process/cross-server/server-core-choose/index.html"},{"revision":"aff8084125337d1c3587f59e3a705d0f","url":"Java/process/index.html"},{"revision":"bc92212375f1f736c61c5a161b35e045","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"0e07fc3d09d6a524d47c00bd8926a345","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"2aaf40adaaf36a5a361fa2c2617ba935","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"ecf37d80779e8cd2c02aea27a9066908","url":"Java/process/maintenance/backup/index.html"},{"revision":"ba489298a8b6988e8ecd75fe5bc77d9b","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"bbe57dd619506a706f06d53f09157bfc","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"f4214464389b2c5ab1c3f15555ee7c48","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"aa9b40907fa3b6fde377139dff034574","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"1e02cc46ba3e31e73ddd96b66e1f211e","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"438f8cb9a023a2a68cef46c5c27f1ec8","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"7f4ce1323762c42a036d4c9fab159be8","url":"Java/process/maintenance/update/index.html"},{"revision":"ad425eff68122f3218911729040226c8","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"fcbdcbe56a5e4a784989e9814a795f28","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"098147c2b8ded10e1fa5fd1655a2ede1","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"b31e4796f7cfbdd3abbac95611810a54","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"4a7438ec5a48aa002212911bfbc7aa8d","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"20fc5d8d1d48e7f560018658dda27c6e","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"988510ecf6fcd6e12165433ae698d513","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"a3e11bad0b46e2bdd0e44316bc35adf3","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"1112f041c30be795e85d1a80a6b61a7c","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"b3253d3b1ecf52888811fae2e724daf0","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"4c1d58a7b226c8e1e28804ff5febb383","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"1ce28a8bbb716c6a4f781d12fd6eeeb6","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"5a4fcdab51929338dc9a99a2fefb4fcc","url":"Java/process/mobile-player/index.html"},{"revision":"6822abd3bac2c2614ab686e4e85ede6b","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"14dd496a4e1ccd0dba57d0a06e7cd2aa","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"74c041b1e4fb4fb2f3b74c546527d6a9","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"302a39ac0789a8c085e206f2ed55af1f","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"800e1370146aac6bcdcc7791f7159ab3","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"84ce29983305c172ba9914d2b1424414","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"40a00b4653a3de66d424a2e1ae8f7b6f","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"dd5166346af6e6dd39b5bfb7ea2923b3","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"c6c1b0eb255bf8426e749506c10986c5","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"bce37678ac1c8dfa118f8fd8b577c18e","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"72212ffd00e5838980431825a8692ae9","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"216c0bc23786520a4fcc45d0664f9119","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"8bc7460ba32b94230290993f5834b052","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"6a302f67f077139a9b16c1e1075e6612","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"ee0da60d57f30004203cf40a57d2048e","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"1ebb3f5d6a1a27fa7da97083a01b363b","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"120a9ccfd852fe77d5d66756f4242e4c","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"1c08d5ccd05d1fead6a229ac8c82cb90","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"0e408661dee8fa76187db71920e7f02c","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"106bf28214771af28116b3e0f9a2ac01","url":"Java/process/plugin/game/title/DeluxeTags/index.html"},{"revision":"812bc496f842482b5d3d1942cc65d0b2","url":"Java/process/plugin/game/title/MiniPlayerTitle/index.html"},{"revision":"9ca7f9e7b3033bed72f3395abda75209","url":"Java/process/plugin/game/title/MythicPrefixes/index.html"},{"revision":"f3e4822aaff16f52be456751ddda0241","url":"Java/process/plugin/game/title/PlayerTitle/index.html"},{"revision":"dd9c88f262526c4cf698795a9469eed1","url":"Java/process/plugin/game/title/UserPrefix/index.html"},{"revision":"1ede89e731e3dfcfa1f469a0d8279a68","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"aaacd903e75d4817fc02380e80f01fe1","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"e4042c20b0b324dcaa4030587aecc82d","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"91a306c6f958079a9b2eabd054e46006","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"9fe1146a058aaefdda1f90937b078c4a","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"d19f5158859912773a4574a027e4706e","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"9bf716923ab742240d8e99e655f4f48e","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"438469c191ef15faa87c28504a248013","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"d607637a39f854c8218e6830273dcd9a","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"22268e5248bf73b86c3078a404e10820","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"c7d51ee2939effb72cc82721ef75dca6","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"b4a607453cb97617b95efadcc1b86a81","url":"Java/process/plugin/ManageTool/BasicPlugins/SunLight/index.html"},{"revision":"1dd90d5db76f6433ff0504f580dc417a","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"ecfc067f753c1bef15bc9eb1bff7a483","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"91d44e43772ded4e3bba6e35d5748d7c","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"41cf5a771f41aee38203fa670766f213","url":"Java/process/plugin/ManageTool/items/Crucible/index.html"},{"revision":"623f427e5a8cb427e09968e354e6331c","url":"Java/process/plugin/ManageTool/items/EcoItems/index.html"},{"revision":"0e439c97bd84aeb1aa10dc6f95dadaba","url":"Java/process/plugin/ManageTool/items/MMOItems/index.html"},{"revision":"7f36fb4c72027e3c7b7a9ed955c55db6","url":"Java/process/plugin/ManageTool/items/NeigeItems/index.html"},{"revision":"d4ddff9a80f86a5a716d662d804b16f5","url":"Java/process/plugin/ManageTool/items/SX-Item/index.html"},{"revision":"63cc00a4cb5535841661562b0ba6452c","url":"Java/process/plugin/ManageTool/items/Zaphkiel/index.html"},{"revision":"fb45798d7e5b228246940b78c6236ed0","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"4a6614e69c3c2cdafffd364c49b2b925","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"6dd82bbb7ea843a7edb39d46e7c468fe","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"bcb6b2aa71b5005c0e4c3c49d5b420e4","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"2934112e4db0934b60503d038c5474e6","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"550076b4d45a1acd1c56814ec330bb23","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"c98f413830052cef3bcf1c18ee5e54a1","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"6251c0fd814503daa69706675df2bc21","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"28451be3c07190055061bd8cb895bc4f","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"5f4c7e1f8c9dddf9ab9a5e0edbb91d81","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"b435b1f29fc6f2377575e1010f1b51f4","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Model_Engine/index.html"},{"revision":"9b8012368ad3d62b394b9b551813909e","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"8501143b1443400a67192da8c8b70eae","url":"Java/process/plugin/ManageTool/task/BeautyQuests/index.html"},{"revision":"79650aeb8d2e1fc87b573a5957caf508","url":"Java/process/plugin/ManageTool/task/BetonQuest/index.html"},{"revision":"c62fb87ade3b6acfd8b52a6d2e185ad0","url":"Java/process/plugin/ManageTool/task/Chemdah/index.html"},{"revision":"853d8c8ccb455998a691a7c29756b59d","url":"Java/process/plugin/ManageTool/task/MangoQuest/index.html"},{"revision":"2b0416a25bd22c95c9c7919c0ac62c6e","url":"Java/process/plugin/ManageTool/task/PlayerTask/index.html"},{"revision":"63a84c102e3fcae2fcbc672e6359927d","url":"Java/process/plugin/ManageTool/task/QuestCreator/index.html"},{"revision":"7be7b9637f4da42d960bce1838aa8504","url":"Java/process/plugin/ManageTool/task/Quests/index.html"},{"revision":"9f0dd234af54a292a4b4bd2573880563","url":"Java/process/plugin/more/color-message/index.html"},{"revision":"a1f6032125738813eb250a5ef18a702f","url":"Java/process/plugin/more/faq/index.html"},{"revision":"b3d5b62d989d5b44bc41b99901485185","url":"Java/process/plugin/more/plugin-abbreviation/index.html"},{"revision":"f4d92a38dfa953f4799be2c30b4c8c11","url":"Java/process/plugin/more/plugin-backdoor/index.html"},{"revision":"6beb41ac26bddfc4752eaeb5d958af18","url":"Java/process/plugin/more/plugin-build/index.html"},{"revision":"74d1cc506ad9ce9be6ff43a85c59ebf1","url":"Java/process/plugin/more/plugin-config/index.html"},{"revision":"b37024d7bfa01eaeeb62ea0c195fc01c","url":"Java/process/plugin/more/plugin-download/index.html"},{"revision":"5c7b4908a23a94512f26b4a321484d6a","url":"Java/process/plugin/more/plugin-signature-file/index.html"},{"revision":"29423e5e483563a4f75c64af9326de16","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"f172b907737e0a8d85e220ae7e265de5","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"e28efae7031224836ab8ffb14abe1b59","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"dc21b9d1389f5e54d3cf68efd432e057","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"1ca4698b62608a2094912d15bc406e3a","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"23ae7128b6c98fbc421d5af4dd87b7ff","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"0503e3458f0aa3c082ca59e06d291494","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"009947fc1dc3e8dd798545a8fa639c6b","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"c07124e9212fcb912ae05716598c1ada","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"17fa9f711de6e22a99ba86ef210d37ae","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"a79fc55755e89c06eeb6a431045bdb8a","url":"Java/process/plugin/other/money/index.html"},{"revision":"f895a9ac1e058c3fb63d4bfa5de12717","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"a74e8428d523dbcc11e41d158ab5f5c8","url":"Java/process/plugin/other/MythicMobs/index.html"},{"revision":"0a82e0b41f9f3f722b972f3cacfbc021","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"b14253fef7d47d2fe7d0113a5a89cbdc","url":"Java/process/plugin/other/npc/Citizens/index.html"},{"revision":"e6f49bb39bc18bbb3ffa7a0c615e1bb1","url":"Java/process/plugin/other/npc/ZNPCsPlus/index.html"},{"revision":"ac6f8c37515aea471e8c865e35a2e6f3","url":"Java/process/plugin/other/QuickShop/index.html"},{"revision":"4a660fa42cb5b4afbdb82dff3e8b2d73","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"a33e75a7b12a25a31e1ec4423ae6fdd2","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"4724ba00d0acf37acdde87c0b7b4a043","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"cb44cd5ed6f01871fd889144c0558540","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"285a95f5de52d0ed3b4a38048c4d644f","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"da5ccc9cd3def5218b6ccc942695bb06","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"eea9d53b152d3061cbceb4fd7924953d","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"d3204e51856dcb47aa0b775d8008a362","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"2550917e2cfe528f8f768344fb97142e","url":"Java/process/plugin/protection/Dominion/index.html"},{"revision":"757e4cd30270fd076b886a23b327699a","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"bf479356ee11c2693d52e5cc4e0f552a","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"4eac53831252b9319f952074bd8ee2bb","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"0629b1cdfa735e9a18888b3872c9a3e4","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"8cbb69438f22863239d4c58d4a910a29","url":"Java/process/plugin/WorldManagement/FastAsyncWorldEdit/index.html"},{"revision":"d135c0129348a01cfecbb75f022ee35f","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHub/index.html"},{"revision":"5ded268c8531ad26b4849c410367d4fd","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHubReloaded/index.html"},{"revision":"05e608096efb25ad078c389ab0753651","url":"Java/process/plugin/WorldManagement/lobby/index.html"},{"revision":"2f909a5d3f279f5dc6b2aa5586cb18c6","url":"Java/process/plugin/WorldManagement/lobby/SuperLobbyDeluxe/index.html"},{"revision":"e0d533410d7f0fe9e0d41f25ade3a410","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"b4d17fd17158fa121b813c4b430afffb","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"2dcab659e8419bfdd7b9c94dfb1a956e","url":"Java/process/plugin/WorldManagement/WorldEdit/index.html"},{"revision":"84bfc5bb73f9b339e6ae5be639801b7d","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"5f883b5a9ea0fd42e9143d1455e76539","url":"Java/ResourcePackManagement/index.html"},{"revision":"b17b4212f7d359bf9d29e5cbea3caea8","url":"Java/server-core-choose/index.html"},{"revision":"7d427aeb11963623e04ba52728e2d6ab","url":"Java/services/index.html"},{"revision":"d7225ffce2d9451bfd05756eb7cb2b2e","url":"Java/Slimefun/index.html"},{"revision":"46dbbaade6366e022703bf8272d11d59","url":"Java/start/ask-for-help/index.html"},{"revision":"f98ea6d00d4edb5716de9b5bfc1a1b84","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"f2d9d8c724044b8c1be70a1673dadf55","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"3e331a04385780199406982b6a0264e9","url":"Java/start/basic/server-management-command/index.html"},{"revision":"13bf8c0f0f11b4bd8677b09dd8ba8718","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"920ed079c54c53d2bb1169b4d83df453","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"5fe37be3aa823edf64856b9fd3aaa150","url":"Java/start/basic/what-is-log/index.html"},{"revision":"9b55e04230ca8efdbfc26a598762347c","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"4bb9a58fa0e27998adabdeda42e7545d","url":"Java/start/basic/what-is-namespace/index.html"},{"revision":"a47300e9aa659c25cbc1ebd330387a3d","url":"Java/start/basic/what-is-nbt/index.html"},{"revision":"f8cd644507280b42be6bc3432dfeb60f","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"162cbffdb11938664706ce5853672a1a","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"3355c429c504a43f7960654e5ef530d2","url":"Java/start/basic/what-is-server/index.html"},{"revision":"3316f1f1335e1f0424f483e7dc0b8898","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"ab463358802548cce0aa8e640c9014ba","url":"Java/start/basic/what-is-world/index.html"},{"revision":"5be75a0ea4b6f00e89a02c6bd12e4b54","url":"Java/start/config-server/index.html"},{"revision":"88d13021b93eea20d01b1f3e655bf604","url":"Java/start/connect-to-server/index.html"},{"revision":"11a390ea80f46e261a9a51ea9de7a87d","url":"Java/start/deploy/index.html"},{"revision":"4f03ff62c3d729e9302c32d7a08d5ed8","url":"Java/start/index.html"},{"revision":"e915245886b1889af38615b93579d8fb","url":"Java/start/install-server/index.html"},{"revision":"cfeafcd3a76520011f938fb9a3d7c1a8","url":"Java/start/launch-server/index.html"},{"revision":"a22a6dedb8a3fa1c13d5f9674cc9485a","url":"Java/start/server-core-choose/folia/another/index.html"},{"revision":"e33e33ac1d185b275b1567c2e02c25cb","url":"Java/start/server-core-choose/folia/folia/index.html"},{"revision":"d8132dc69c091628af841f4ce09b2488","url":"Java/start/server-core-choose/folia/luminol/index.html"},{"revision":"ea0ef86432c04c661ba06277d891492b","url":"Java/start/server-core-choose/folia/multipaper/index.html"},{"revision":"3db03fa7164d7d6edf74a897c9031d50","url":"Java/start/server-core-choose/hybrid/index.html"},{"revision":"8cef0da93a401c1da5570f3144073bef","url":"Java/start/server-core-choose/mod/index.html"},{"revision":"853fa832b433f5193a42280afc3a71fd","url":"Java/start/server-core-choose/plugin/index.html"},{"revision":"84dd1ccb694187ab249414c1ebe7db78","url":"Java/Sundry/YAML/index.html"},{"revision":"6cc4db255b0582ec22911fb93dc2c395","url":"Java/task/index.html"},{"revision":"463605150b76eeb127526b2f2269c7a1","url":"Java/title/index.html"},{"revision":"33844232cc80973dd19f09b29e2ad8eb","url":"Java/velocity/index.html"},{"revision":"21ed0a231c4c2925aafba5891564472b","url":"love/index.html"},{"revision":"3058659a8e2659d300b117b81fcbeb21","url":"maintenance/index.html"},{"revision":"d1df9f38c990474087f32a044ff80ee3","url":"manifest.json"},{"revision":"b64d0c503b0e1afd8e7349c8ac99a27d","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"9eeee6bbee8fde5161f80cc5171c82cc","url":"preparation/dumb-script-using/index.html"},{"revision":"bcd50d4e6369bd4ffc2db154d27bf7cf","url":"preparation/index.html"},{"revision":"bc0601e03868e4c032b343c16743b277","url":"preparation/text-editor/index.html"},{"revision":"70caea8a2b15c5e6fcd8892d3fb62420","url":"process/create-art-assets/index.html"},{"revision":"3ba2944091c86d5dd52d7bc7b1bd41fa","url":"process/dashboard/index.html"},{"revision":"f0a069545611512b3afbc771805f9920","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"ee82ee9cebd914a7621086d4386c907e","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"772c9fff67513b268a3e3d599e036055","url":"process/deploy/intranet-penetration/index.html"},{"revision":"9b144ff4fb43c1ce33c8e7f0b47dd960","url":"process/deploy/optional-mode/index.html"},{"revision":"623aaa7675276bb2afa993c3f203f27b","url":"process/deploy/purchase-server/index.html"},{"revision":"b2da29c6471b342b79740e467232eefc","url":"process/index.html"},{"revision":"b89eb8c728198d0a029943f3a3a03fc9","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"ff5a95de1221540c334996a2d1894a6d","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"08a6ca9d203477d526d99daa5ef27d16","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"6eb44c0eda76fb80699a5b42b6a7cc8b","url":"reading-guide/index.html"},{"revision":"118e36e668fa955b9f50ab9f588be95f","url":"search/index.html"},{"revision":"265e5e8d27c95bdd561421959aa38933","url":"services/index.html"},{"revision":"a19d7b28d5ff64354392a57ec140d9ed","url":"start/ask-for-help/index.html"},{"revision":"efa3e43d45048d7e3685c79bdc2b1bc7","url":"start/basic/what-is-caton/index.html"},{"revision":"47c6e5127eca7b5aa48cedd1c04d96cf","url":"start/basic/what-is-log/index.html"},{"revision":"69453302e7739d34f35094c9d9ba9ee2","url":"start/basic/what-is-messy-code/index.html"},{"revision":"7a1e0c9494895db301bc29613e472fee","url":"start/basic/what-is-permission/index.html"},{"revision":"93afdad4b406f0870034b4667ef60ac1","url":"start/basic/what-is-plugin/index.html"},{"revision":"face7b274d50e584975f1c6d8e286d7f","url":"start/basic/what-is-server/index.html"},{"revision":"5c4374c0d4fd0dc7be7226ebec1886d8","url":"start/basic/what-is-startup-script/index.html"},{"revision":"79a8ffe95074e88b3ca0332e77fe037b","url":"start/index.html"},{"revision":"5ad6b3f0afad1e45bd3df452f60543d3","url":"Sundry/Advance/Linux/index.html"},{"revision":"0e4b9205234dfc24cb2ba34bda0a2578","url":"Sundry/Advance/management/index.html"},{"revision":"20dddcefdcef2bf265bec67bb308b693","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"15f3deabdb6b9795cd427429da2cb62e","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"0fea83e984a4f35dfbe51978591887dc","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"77f52bdb077963a21aaf679ca8f41a9f","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"bc38aebec1296a3965e4eacc645756fe","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"de3bf8a58a3d88c865f138189ad2e4de","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"e698d3bb26f931e88c88925798d7a329","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"7adbc9fbf3a7076f2f44271f00318288","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"b87fc97fcdc1135a8e1a616821b618bf","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"dc10a3ddac5a6e14303150149198b542","url":"assets/images/1-63c4a3ec20199e11ca19b2f9fd2a682f.png"},{"revision":"96c124e98ac524d49aec28a72d1e6889","url":"assets/images/1-731f45984c8b96902c85270b8c81ec35.png"},{"revision":"08b33fc26327da6e979ba164ea217fef","url":"assets/images/1-82f0010c14c72c5d94a32dc8fb2c504c.png"},{"revision":"2038d739d5d2942ef060c4c9b75ec9a2","url":"assets/images/1-a9f8da27e5049d58f6f741d0f12ea551.png"},{"revision":"8c7b32c86f8207eb4938e9d5649fd7ec","url":"assets/images/1-aad5ad5f1398c48d29a32a072bdad4ef.png"},{"revision":"ccca570d7ac66120837adc97c57a4c1a","url":"assets/images/1-c3bd87874195895c6be5c2ea870244d0.png"},{"revision":"24260dd5c1f60452b4ac63ebc7a6a285","url":"assets/images/1-cd6859b2cc9c315d0060fc66db710558.png"},{"revision":"1a00b0f8db51b658cbdc2535e87d85de","url":"assets/images/1-d4a8cc278e6f1ce35508601644b6f2be.png"},{"revision":"371ad4a478896137848d6f808c675ec0","url":"assets/images/1-e68001070d89747eb2792353d7674803.png"},{"revision":"3bb5ccb0daad2aece6687133150dca96","url":"assets/images/10-58d0447450e0033aff233f70b56969e0.png"},{"revision":"e0a1562132100f5a89ac07f5b9958852","url":"assets/images/11-2a5f3cc6447c99cb7ae9b02b466bc418.png"},{"revision":"6baa6d0058a927a1352928b8655d29aa","url":"assets/images/114514-1e62aac2f66b45ceb53cc2fac060a541.png"},{"revision":"843c8deefe2ee62b05cddda23645fa75","url":"assets/images/12-ebcb424357a387dee3e7a6246b368966.png"},{"revision":"18e11b38b411d39f9897e78c2751706d","url":"assets/images/13-58ef837abfe450269fe5e47f439a1daf.png"},{"revision":"60e9076514713df5fc325cace9be0972","url":"assets/images/14-f50c97314dbdd481a7afa7108f9a01c3.png"},{"revision":"8afad3e30298f6ee2c44ea6b077771a6","url":"assets/images/15-9168d62fdaa0897e3b20355bd3ac5484.png"},{"revision":"c8906eb098d678e9c238ef60830e3961","url":"assets/images/16-9fd1a097e27350717ebc802e3cbb7d6b.png"},{"revision":"3859a843d71317bacfab4ef00c5005da","url":"assets/images/17-adc869f92e3d754411b20c3bb418786c.png"},{"revision":"3db99355f4beb05a03375d41217ff9cf","url":"assets/images/18-22737ea9026c7132cb433cc7b8dafc96.png"},{"revision":"7fbde148ad63ad1094a97afc11cae232","url":"assets/images/19-03b6b776a93e85562d8de889b7711c0d.png"},{"revision":"5ee1dc9ffdd7515a18d593d308ff6edb","url":"assets/images/2-1acef7da34adea86f13cbec0472b3562.png"},{"revision":"4f547d6af1cafa71d4ecf482b46a00ca","url":"assets/images/2-51664a177bbbf2a515d9704289dcea9e.png"},{"revision":"8a3ae42717debcd6bac0c88134777186","url":"assets/images/2-556589bc73279f249458dbbbf7a052f2.png"},{"revision":"f7b7d96b7c074dc8fd7f356b21edb28d","url":"assets/images/2-55c73126d5d73e5fc0c897e359acd749.png"},{"revision":"7d1c2028f06b3edca532324db880ffa4","url":"assets/images/2-9c0f6f91dd65af014d51552ece697322.png"},{"revision":"bcd0f6c5de54a1befcc0042f05db4ee0","url":"assets/images/2-ce811015b8ce998492f1c4ed5cbcd428.png"},{"revision":"b5d75c6d706455fc2c9d8d69e237f07e","url":"assets/images/2-d12962d444e490509e3c8ccdde97ffe9.png"},{"revision":"5e2e7505b6ddea2bbfbf19964b38824d","url":"assets/images/2-df20a5e9aa3b65320c6f70000b32b260.png"},{"revision":"44d8c03c57fb92bd4ae07849b6d95907","url":"assets/images/2-e95fca36b87966d5033150aa4b7f0028.png"},{"revision":"3434ac8ae15e9cfce03418b5d790ed44","url":"assets/images/20-563f0bf4bfa9279537b59cfd43d1fee6.png"},{"revision":"3dc2005cc9fc27ba3f49774d0231e485","url":"assets/images/21-d088637eb2dac73e6e85ef7c4520cc83.png"},{"revision":"53cb6fad2c56bc7e380f4dacb6da0b1c","url":"assets/images/22-42f6cc05337327eaa1f1191503122d82.png"},{"revision":"706da148b7157b1cad2c49465d4a81cc","url":"assets/images/23-0e2a01d94460d264c762b6ca6042203f.png"},{"revision":"f8d5c66e5e6f0353dd613ee8a33dcc22","url":"assets/images/24-ce129e614f6267791eef423d18d9b6b9.png"},{"revision":"a550a5c8cbe32d257d4308f407e81614","url":"assets/images/25-9b5c9bbd61082314a6c537fc480c0b6b.png"},{"revision":"a094343d7b92fbc891764fc40e4f4210","url":"assets/images/26-642f7846d0f720ebe452d6100b96c62f.png"},{"revision":"0558f957777dfa9fc6c7dc4cf02fddb1","url":"assets/images/28-4dab12401b4028e9f9b3824ec33210b9.png"},{"revision":"e6f93fb3e4bc19f24eede3fd1107ea5b","url":"assets/images/3-1db9a2316cba4718eab2a52911330ee5.png"},{"revision":"8ef6661f35d0c523ca3a7a6021d175aa","url":"assets/images/3-66f9827f9173f1489b47dce22df687ce.png"},{"revision":"da82fc2e94d198cc9f6bf36a59d54da5","url":"assets/images/3-71ded5525c6fa68a07c8c2d37daef753.png"},{"revision":"a822a2d6db62a21e7a19521023052c6e","url":"assets/images/3-8bf0c51795432e5912a61e6eb3680cb2.png"},{"revision":"ec46cac3a3aff08215cf620bddce94ce","url":"assets/images/3-9995127cdc5a82918c881f970b13c562.png"},{"revision":"59fe242c5f9d8b1217d7bee8a948e548","url":"assets/images/3-9b1937619f453c539263557fee89efbd.png"},{"revision":"f6c62d2d3f3a8a78aa8651797807e127","url":"assets/images/3-fb220c0d99514810193107059939a377.png"},{"revision":"2a54646c4d2a6473f78bc887534c1f0d","url":"assets/images/31-932349ed508962ccd6c31ee82354f564.png"},{"revision":"ca96dcd5b0ab7e868f58de84355f194a","url":"assets/images/32-084b2ddc6f2f990004556e5b12d99817.png"},{"revision":"fe45b36e3b0f52ada1ec79074e747aab","url":"assets/images/33-d23918939eb19e7974ae9cdbce1027b5.png"},{"revision":"1fec9f8134e5a9d396d06e16e4d3c1c1","url":"assets/images/34-a3c3c3c133da75b280f24f85abc4f320.png"},{"revision":"2a68dd3ffd08062f7729f73f971b1500","url":"assets/images/35-071df367286bc1e809ba78739976f6cf.png"},{"revision":"d4482b4c3b67bee34a541ab0e23c1a10","url":"assets/images/36-6ff139a8048e566c1ab57d0fc38d32c6.png"},{"revision":"dc778be7c5e1891db629896d3693645c","url":"assets/images/38-b29821ddd2e43ca8299f1dd8c710210d.png"},{"revision":"626bd563c935c7efc272cbce3d37f5be","url":"assets/images/39-baa030bc82af91717759ca2719bf90d9.png"},{"revision":"d85a3d62627b3af1c3c03dfea3ef64ba","url":"assets/images/4-0c6b147ef7733713ebc97beaddc1c626.png"},{"revision":"d2c1eb0eaef1183a44d165b4d42e32dc","url":"assets/images/4-8a72b836d22ba18aa9389c39ba6c51c7.png"},{"revision":"b656502de4ec7f7129911a43d0169441","url":"assets/images/4-f1fd7c802a1070f8cd7574dfcb79a862.png"},{"revision":"f8743601775edd0d671a9452a328e481","url":"assets/images/4-fba804575ca6d381be9f38ea98c30139.png"},{"revision":"a9cf568e306ace85e270669d441de239","url":"assets/images/40-3b37a921c960631df874b2ce1a953662.png"},{"revision":"7bb46016779347ac29c53873f0051869","url":"assets/images/41-fdecbfa4493a777357fbb7fbb8c01ccf.png"},{"revision":"1c887d7e9a183958c868ccbb5e582640","url":"assets/images/5-41222974cba37e06e8da7989b0a14e6d.png"},{"revision":"eb277c07e539ea66f67614761d1b2970","url":"assets/images/5-d3864713009211306577087551909079.png"},{"revision":"a5b492159aadb547b17a7ff179016ab3","url":"assets/images/6-6ec3b7c0355b16ca02d14946d2a9e443.png"},{"revision":"89e87fe0a7412f27456018bdd95c2ff8","url":"assets/images/6-97c7203d853ded602085b4525f267c62.png"},{"revision":"096b74231b81bc8d18a94a076d096e8c","url":"assets/images/6-ba443fb5d2514b6cf36161896ed90df6.png"},{"revision":"1fc0f32d51d17de697e95474c3f453fc","url":"assets/images/7-2f74b6a8e030205a10793ae8fe230f6f.png"},{"revision":"9a61f30d7090f33c731e7c1e064093d4","url":"assets/images/7-583d0fa0eb03d348efb01ad6483b0540.png"},{"revision":"9ca6c5d717ca6758d28097ada0bdf687","url":"assets/images/7-fdf7daf8e71fe0dabd29883e80d5920f.png"},{"revision":"22dcaaa0e33e13c42c994fb15b2f475f","url":"assets/images/8-506a0e50715a2f984bd4bbcccc2ed496.png"},{"revision":"05525700de6f31dad6a505c0bc44e3e0","url":"assets/images/8-7362f0389744b19cb7afedf06dba78c2.png"},{"revision":"f770b26c6d92169ddd0425422e106213","url":"assets/images/8-cd31db3cd6d8eb8677727b6051f1d179.png"},{"revision":"935fd7a3e5789147f5499609608fa0cc","url":"assets/images/9-b01aa2c198ce4f9f9c5f78ea398c0088.png"},{"revision":"a0fdbe75658531611e5321a5667f2f24","url":"assets/images/add-fa823580ac441faa72470b75bac5ad3f.png"},{"revision":"7e530e321e40a157435b93858f178853","url":"assets/images/add-new-5c80d779a7b257c4e4520dead7f6c5cb.png"},{"revision":"1e571ba2dc373ae862236bdc73470ddb","url":"assets/images/add-web-db168ad7f05902ffac1260beba0c09ad.png"},{"revision":"6d958735ee195bc9e135fcec0715248f","url":"assets/images/Adyeshach-1-94a06e5e0a5a17584b564c85d25351b8.png"},{"revision":"cda571fe1e0e13743c8ad0f62a6e08c3","url":"assets/images/antixray-mode1-1-c745b72e2ef17a6b92748483fc3d86b8.png"},{"revision":"3e646e8705a0e98d69c207b97c7f17ca","url":"assets/images/antixray-nerher-mode1-d606eadfb2b2b441fac8c0225e6a244f.png"},{"revision":"d1cfe9adf5bc3efedff51d3b753884ca","url":"assets/images/api-8c0008a3d21fcf1c11d808210b463dee.png"},{"revision":"fe3ed43e00bda741573c70583ae2f440","url":"assets/images/baotadianj-966228553cc144002a83102397088650.png"},{"revision":"e751e6255e7050ecb3c6e36fa4b65366","url":"assets/images/bedrock-core-running-83afbbe75cda6866b57aefe4fb6b3957.png"},{"revision":"7ebaf9936f9023d02c27896c74a38c53","url":"assets/images/checkitem-ef98b299d527696f72526786248802a7.png"},{"revision":"d1e98d86cb8a790994abc83e73cadd43","url":"assets/images/choose-second-4d954d983d121381b12f2231865f33bb.png"},{"revision":"f0a5aa8b4b14dc0dabec24961b5c79d0","url":"assets/images/CIMM1-1a61f996e629c877ed443d26c9518569.jpg"},{"revision":"a169a3585eef7aba18724bb08bdb1afe","url":"assets/images/CIMM3-9a331b250ad1dc7305e5633020e235fb.jpg"},{"revision":"e25669c599db681391ec7f646906a836","url":"assets/images/CIMM4-2c564f2c7b5e7f399eae610730b16c73.jpg"},{"revision":"9b02f6dbc0d64696b0f2384d650f1c63","url":"assets/images/close-yellow-cloud-62884a47bbee6215fc22fcc81eac93d4.png"},{"revision":"cc0b8b6c262a6131527086a63b2a1099","url":"assets/images/cname-313f4eea05b344d3890d5f764b1fbdde.png"},{"revision":"3a083f9794197b40a2e39606e1e926a1","url":"assets/images/command-4-9e783c88970d5d2f7366091b6151fdf2.png"},{"revision":"bd308796e5496b1bf47e5775a3feefa3","url":"assets/images/command-40654439c664c458d052cca6df33df7c.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"43acd28f6f72cadfc41a0bdba63d21d0","url":"assets/images/DecentHolograms_1-ff5d6633df691781fad5a8ec3cfeff7d.png"},{"revision":"d79baf505fa092f9aaa92e485f833569","url":"assets/images/DecentHolograms_2-5a6d611b4af1493571a55349f577a13b.png"},{"revision":"e9232d9b4c15f59134e0a788d0cbb970","url":"assets/images/DecentHolograms_3-3f42239088ce622240238ba5556617df.png"},{"revision":"d356d624d9533047564b4bff136dcfd3","url":"assets/images/DecentHolograms_4-e818015ee3ab0af58af718ab2ca0a14d.png"},{"revision":"9d8e4a77fdc8b20b087d118883d5ff5c","url":"assets/images/DecentHolograms_5-0caad81e8f0a7e09db7e2c34b8e8dc0d.png"},{"revision":"25d74389ccab08aa56134a1128a8211b","url":"assets/images/DecentHolograms_6-90760721f5c802e1898d96e738b3cada.png"},{"revision":"a3b2b58b529185baa3f8b367be02fa54","url":"assets/images/dian-new-3d1d1049b492a40e5824de164d9d84d5.png"},{"revision":"8258db8df4c6d34fbe22f47bc0924247","url":"assets/images/dianji-1a0305571907c2a31a6448848035f561.png"},{"revision":"3078d1ef8f949b23f981a85f6d681f4b","url":"assets/images/dom-0fc5b2c981f39e6140f33b6a1a5a8019.png"},{"revision":"c58709027cc8c54fc8e770d19b57bbd3","url":"assets/images/Dominion-08-aa2dfb5527f036472c2a4a8b0f44f743.png"},{"revision":"0bd6dd570e38c6e658ad739037b0c61c","url":"assets/images/editor-6396d8de461a51c8fca947a207749fa1.png"},{"revision":"6aa676852ab2205d1a37a965967c25df","url":"assets/images/getinfo_1-e7c2e9072e0ab5ab73991d7d0810f74f.png"},{"revision":"92d78187bca92dbde0a99d4bb1cb4fa2","url":"assets/images/getinfo_2-7b3436f4c81485c65868c2567bc64355.png"},{"revision":"26f745f1d1d78de42362a1cd4d3f0677","url":"assets/images/Geyser4-65af38ba06e3c8b2197460e45b073778.png"},{"revision":"77184522ffe184210ee5e1cf08677f66","url":"assets/images/Geyser5-5767782dfa709a3b6bbf7207bb92c245.png"},{"revision":"8428506ecb384598104aad818d5e13da","url":"assets/images/HbuilderX展示-4c0eb9762c8df510dd1fdead73592485.png"},{"revision":"9fa252a83f65035d89ecff73cebbf83e","url":"assets/images/hd已经归档-32249dee366a00899b649d8adbb565a3.png"},{"revision":"fbaaa116cfda74345ec14fd6929b3906","url":"assets/images/holo-dc42590f8c9261569753dd97e1bb502f.png"},{"revision":"e610a92efce164a9dfd7ea65c346c72b","url":"assets/images/if_2-90c7db4f40a59b98effa79e8e636dd7c.png"},{"revision":"bca5ccf5384e8a7c3c7aebb9ae5af86f","url":"assets/images/if_3-205c9cef9690cd3f9426820f1122c6b1.png"},{"revision":"b15662c786e3440388e26c80ee0024d7","url":"assets/images/index-9d9386098791038e0bc3bcb7a4d60e5a.png"},{"revision":"e19478245ccad11ce332d2d756364f10","url":"assets/images/install-961b5ff3d59f606626482ae1aaeca596.png"},{"revision":"c97f4ea4fba6ffdd4d8345eb70341761","url":"assets/images/jieyazip-aabb717cbd34ebf3ed650fd66803a5d3.png"},{"revision":"1f74953845fb5ab78bf13c1e1a570b62","url":"assets/images/kit_1-c42f5469a7f8ac450f961fe5c7e4afb4.png"},{"revision":"786cea26ffe399387c8fac7240496870","url":"assets/images/kit_3-6091a3a5dc48ac4cf5589c748467e21e.png"},{"revision":"f5025dfbbe5fe1c00444f43de95ca59c","url":"assets/images/kit_4-64320f25f1a7ea01c78a42e78a7eae7b.png"},{"revision":"3e3e255dddf6fe9eb1b85a499b41f99c","url":"assets/images/levilamina-is-coming-b99afb6c12b22333b2a4d8220c10ac2e.png"},{"revision":"8ffe072b21d7eb9d859b4b5a86312673","url":"assets/images/levilamina-will-archived-b38aceb46a17e226c0d0298373a580e6.png"},{"revision":"0861a904462463c6b852a55bc501c522","url":"assets/images/macOS_terminal-3e17a4826476c7e694c98e88703bea66.png"},{"revision":"d423771f8bba28959ab8c2c385a259fb","url":"assets/images/mcsm-f20b3e7b3fbf022070433dcccc319d1f.png"},{"revision":"dcaf899574d7ac03db6e616e9098e4e5","url":"assets/images/memory_1-ec2a05c0e91321febb25e4549a41189f.png"},{"revision":"a2e2226081589f682be3666837f037dd","url":"assets/images/memory_3-5611ba35e80158eee2b7c86753fe39f9.png"},{"revision":"e399ac82230ef424f1567cb535457105","url":"assets/images/memory_5-8cb5f197ece911104373f98f118a9775.png"},{"revision":"53f963020496218631b6bff8b120b29b","url":"assets/images/memory_6-053f3aee6576c77c248c4f04fb048325.png"},{"revision":"7212760a7b3a57214fff89f43adada0e","url":"assets/images/memory_7-5e6c73d227dfd1b813ca04e6c8c7f7e1.png"},{"revision":"a3c5b0424afab5ed68fd42e3e596dfe5","url":"assets/images/memory_8-78c8f2969c7ebffe36c247b26c88f86e.png"},{"revision":"5135c604a94e84dc848740b4dcb25877","url":"assets/images/Minecraft_Formatting-04a724dcfe681ac715cf9c1bb542be74.gif"},{"revision":"b813410515569abd0965df8fe494e548","url":"assets/images/MiniPlayerTitle-1-2b210e32e972f7622d259979cede0c04.png"},{"revision":"0198f0f644567a5c6590875337b2d874","url":"assets/images/MiniPlayerTitle-2-9d9eefa7993524cb3f75089ada14f448.png"},{"revision":"3a0c4398d1f4cb711b8d3a5afde7e60b","url":"assets/images/mm-1ecc89ffb3cc2398697d18068c88d969.png"},{"revision":"c939dd55ffc73fd55c101fb51a555079","url":"assets/images/motd-3d72069f027158b8f6de113d70dbe479.png"},{"revision":"4bd57a588c33e2419452c7088097d017","url":"assets/images/mysql-021568c5ef1d502632950f56dbf470b9.png"},{"revision":"8f7bf62fbdfd604d76bab4fcb83c4e36","url":"assets/images/nogui-92030a95bbe6f727b682636fbe492382.jpg"},{"revision":"9dc395225c71ecd76be2e6ca6c03c28b","url":"assets/images/Npp展示-49f716bb51e81c8492ea6ffd12f1a11b.png"},{"revision":"1b98d8a7ee5aca0eb851943c5aa4100e","url":"assets/images/nukkit-core-running-29a0538bd9c9c191aee3cf4118b655c5.png"},{"revision":"1091d963a8808832206df20e2fc415ac","url":"assets/images/N减减展示-e586599c5b6e1716133361d3a34a0175.png"},{"revision":"5b5b9f619bce00550788f37eb868d631","url":"assets/images/on-63e1d541c4c9de5b41d182aeea140286.png"},{"revision":"ced9a665c3e0b3d73a0e4100a0cc9cc3","url":"assets/images/Oracle-1-bc8d29f08208e6a87a6ae710bd3d9cb3.png"},{"revision":"3d18a844e9d9022ed13b6fee5d493b8a","url":"assets/images/Oracle-2-5410980e2bdfae97bebd6000077381b7.png"},{"revision":"bf571e1a8b03d3126d62d3693fe8c8b8","url":"assets/images/Oracle-3-f1e96335c6ae9fb30025417c33d8b0a8.png"},{"revision":"53b56f7d4dbf60062c5e2e0a49512243","url":"assets/images/Oracle-4-5650da48acfb6dae1f21ff89be5e388f.png"},{"revision":"3c2c4bf1bfc9b0d424bd8665fd52ac1e","url":"assets/images/Oracle-5-d0cb65f39baf7ec8c57916a81e991914.png"},{"revision":"5f001420bc4efe43af9f92fad87bc7e9","url":"assets/images/origin-c649add2e80f8e0e56f7a69f3f6332cd.png"},{"revision":"9a6382b17d4809c96848568150796926","url":"assets/images/paste-1-f9b464488c8ef04c2b5eee57683af4e8.png"},{"revision":"cc4fdb236969a75971bc91c4b8d07c35","url":"assets/images/paste-2-be07f8b06a2413081516a54f9a990a27.png"},{"revision":"d4b224372c1304021abaeb42228dba01","url":"assets/images/plugin.yml-c6d0b15344a0ebed3694780fbb5fb9a3.png"},{"revision":"9a57aea4f9fa2cc6e0f9192f3f3466ef","url":"assets/images/pocketminemp-core-running-68610d3b3173e3b52f5f1c57736ca67e.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"d99f3b7d509d7a7ad45ef97021572cf7","url":"assets/images/powernukkitx-core-rip-a6b695ebc905f7e2b4dd1bcc7269e0e3.png"},{"revision":"6fdbc877454241afa33f415a493d9912","url":"assets/images/powernukkitx-core-running-80f78172791a434359bea8ef8d148e5b.png"},{"revision":"32f2acd77df82462590f3ef0c284290f","url":"assets/images/QuerySubclasses-b136586da8818495c77f8ead3519151d.png"},{"revision":"0d229206feb416b2b32207aa3c9ec1f6","url":"assets/images/QuickShop-6300573a93839a6234a877ca1d17e33d.jpg"},{"revision":"230ab0fee144c68671b7d30a16f6afc2","url":"assets/images/remove-item-f43d2a3789816695cbd14761938fa1ed.png"},{"revision":"421bae2e500193abce8912ef1aca1019","url":"assets/images/removeindex-2dd066ef2708c0c7a83a6c993a6cb055.png"},{"revision":"9a506953d2611cf637f8bd5518c7f1af","url":"assets/images/SearchEvent-b9e85e59fff1a78e8cb9c008aaa6c075.png"},{"revision":"b252c66b692c74b114745a58a6f46a3a","url":"assets/images/SearchMethods-3c622ec35083b3ee2105577b481535c5.png"},{"revision":"ee6c0c2157508bda29654186d2526754","url":"assets/images/shangcwenjian-a2457bedcba5664d959eb277f2a7bf6c.png"},{"revision":"7061feebc0b9f4d043c927add59d9e89","url":"assets/images/SkriptBasic1-33f7a98b82d4e1ddedbad4d651f8f136.png"},{"revision":"a9a6602efd196abce1109d66c7049309","url":"assets/images/spark_start-cbc26a47c13a46094ffc66952d3dc35d.png"},{"revision":"2af106dcbb74b265e062d63aa0065e0c","url":"assets/images/spark_stop-d1af50615b6a3e1251f179e0e8460b96.png"},{"revision":"805f0e3c4a3b3c82e80cdbb9a9e0296c","url":"assets/images/spigotmc-1a4ba445397c755bc2a08085aca98220.png"},{"revision":"3379209f06637e8fa7e802b43d521e6f","url":"assets/images/Spigot搜索-ee30023f81de65d4766f39e5fc473dd6.png"},{"revision":"4d0e0feebc2ad073bbfb2fbdac91afb4","url":"assets/images/sublime展示-c4487487f3f1d91698a5875dff5c9b0e.png"},{"revision":"5aeaf6a6722a7187a01e94c6f1a1bb4f","url":"assets/images/TAB-2-50d4189ba4a6c6cec40c1ef2ab8e4f2f.png"},{"revision":"948c73d004e7b82a372cf94c86ab3463","url":"assets/images/TAB-8-f115860381c6c6457ea6ecd06f23b60e.png"},{"revision":"96493548fcb631349a4497af353ed42a","url":"assets/images/talentsaclogo-f9d205117a31b982927bfaed34eac254.png"},{"revision":"47a1786ebe3673b03b7c4a4d33092858","url":"assets/images/termux_screenshot-1b57d43e16118967fba29ef11dffe059.jpg"},{"revision":"bb071cdd3ab62251fdb23f2bbb6a61d3","url":"assets/images/tianjiahuiy-f135045e78f3cae3ae085ca5727755b9.png"},{"revision":"7dd0f3f62a413ad01ad62d2743ef5882","url":"assets/images/tianjiazdy-642888e7f5414fdd1c20eb842a9005be.png"},{"revision":"c3e79a270fd58fd4521ee579c043f744","url":"assets/images/tianxym-f1c52737f3ba0d8fc3b0312fd6953db8.png"},{"revision":"05eb3d62470b79587ed78e939e711d24","url":"assets/images/title-360fb2dd00ad49fcebe31e6bdc489227.png"},{"revision":"da20e2a00e57ce713d1d685b5b52d9f8","url":"assets/images/trm一定要看wiki呐-08a6ca6bee2d5759a58ad7b7cb1ef43c.jpg"},{"revision":"fb9faf0fc14a74f9f3fd0e1db8628dee","url":"assets/images/troll-icon-54aae7973142365e3ebcc713a48dd2f8.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"59881838c96621c6aabff692bcfaac4f","url":"assets/images/trollstone_v-462d0ff8ed3722ec018353c67263d5d1.png"},{"revision":"f699d597ab7ad63285a23f96af51c9b3","url":"assets/images/unzip-af18aaa262463a8aa70c76f1d08d3273.png"},{"revision":"1c831746df6d6598a9a4cb90f1283775","url":"assets/images/upload-cae0c44f9dd8c5f6f2eec340c1539dfa.png"},{"revision":"6bd39cbb0c5c57443da39464e5803af2","url":"assets/images/var_3-59084dd1519d2535566639f7a7c97e04.png"},{"revision":"8f52a672afc12ebf645a88f6930b61a3","url":"assets/images/var_4-4d7a9aa93051f16e249f3a7724eae826.png"},{"revision":"e0dda297392f0b75587a9aadee0c179e","url":"assets/images/var_5-5dce266891dbee0fabb3adbda90cbb94.png"},{"revision":"7fbc187406bb234d149904c69ef7e2a9","url":"assets/images/var_6-d657d44f33fc354cc9911008de45c144.png"},{"revision":"d578846335e1540b0f4731fd03b83b11","url":"assets/images/var_7-537984bea8960acf0f2086f342c3b171.png"},{"revision":"c7163e6699d42cda33a96801f2059cfd","url":"assets/images/vercel-login-85f1377f96ab97f9f40a41b33da14872.png"},{"revision":"690b1e63f85a7fbad307401620cf62ee","url":"assets/images/VersionChoose-dabef0ba09adf92bc4c22692c26f3442.png"},{"revision":"679144f6b4402cb950e29af3b57d387c","url":"assets/images/vscode保存和自动保存-2bb449e003c2188ff00f9cb58396a2b8.png"},{"revision":"ebcfc2b0ac5603c346d3369d7fc9539e","url":"assets/images/vul-tell_color-0ea3b9e53425611de4c3b1543569ecd2.png"},{"revision":"2d1854682907074e6d1e76978a463664","url":"assets/images/vul-tell_name-af9d73a85028294ad9b3753ae6fcbe63.png"},{"revision":"8582486dc950d7b7209785d4ff13d017","url":"assets/images/vul-tell_papiNoInline-683b384943538f641267b459596c19f1.png"},{"revision":"5bf8bbbe95169333754147acaf14ae6d","url":"assets/images/vul-tell_papiWithInline-06b6263c9716a6675c655c3bb08bf0d1.png"},{"revision":"6cdcdc828321ceb7809e94e69b594af2","url":"assets/images/vul-tell_papiWithJoin-c27a3fb4f724bc42eeef7674078bcf5e.png"},{"revision":"6808c7ce294ab84882c77d5dbaad5693","url":"assets/images/vul-tell-5e89808de28630eae313c2858a6b2501.png"},{"revision":"e1deeff288c41e3473a75a000dc0eace","url":"assets/images/web-tell-97c6594cea9e90c76ea83472b06b706b.png"},{"revision":"8515e3918a2e5c46ae5bd55349039169","url":"assets/images/wenjianguanli-5cca234ebb94201386cb3cdbd1d18c92.png"},{"revision":"a02e55982393c7d44eaa802d776e5b42","url":"assets/images/WindTerm-2d39383dcd57785be954d86553986fbb.png"},{"revision":"8ddc5f27f73b3f2bcb7c22d96459bbbc","url":"assets/images/xingjianxiangm-14384bfd84edc289d8a4d63547401a4e.png"},{"revision":"b2fb67b22de319177fddef17b41ab91d","url":"assets/images/xn-login-a42488ea20b998e81cf17beac80bc0de.png"},{"revision":"ec0ad9ea450b34f0c80f9c0bc3c7a3a2","url":"assets/images/ymguanli-0505ecd4f5e9b46d2b516a5cd3dac1f6.png"},{"revision":"6e209f960b1875e76b7f163befa6d399","url":"assets/images/zidingy-d1015457c1312127574351f364ec79e9.png"},{"revision":"9b0ab0f2c3d111ee1b9e19c6b577b8fa","url":"assets/images/不要截图这个啊-998c66db45ea2f2bb5347337e55ec991.png"},{"revision":"9f3258dfa65308545c9c0da842132106","url":"assets/images/以薄面表现vs以体素表现-082a76351a058f000b0d2e0af232c728.jpg"},{"revision":"f131483616b32bdfab1d4d02b5f3869f","url":"assets/images/保持一致的比例vs拉伸变形的比例-e746565d821ca63ab8ede58a6bd3b426.jpg"},{"revision":"a873e91e65264c8d24c1517e28819b67","url":"assets/images/历史版本-bukkit-1-6b37c964ef09fbfc276ef6a1bd849201.png"},{"revision":"dc655833f3e4bbc0e4ac4e1a85402904","url":"assets/images/历史版本-bukkit-2-0a7066acfca9d9027d4704017ef62a39.png"},{"revision":"70843a24bb2361527d338040329975de","url":"assets/images/历史版本-bukkit-3-814d80c25493d70ac8fca5f3fff8b845.png"},{"revision":"583f7ae7aa0e37089902329d3f5d258c","url":"assets/images/历史版本-GitHub-1-132461e09b0e5e9454559ed0ef3cb28a.png"},{"revision":"07b9ecafaa97ff0f02acbcb3e0d01931","url":"assets/images/历史版本-GitHub-2-76dd19217be2c436ee5e5d3fd3e9b6d4.png"},{"revision":"4c8cd9f8d9a609f90d4f2e371747d5de","url":"assets/images/历史版本-GitHub-3-d85fba30028ff65c944acf177527726a.png"},{"revision":"ba7f0c841cf7660f451848ce9295a513","url":"assets/images/历史版本-modrinth-bf53ac057b0047d6429a5301f65cbf09.png"},{"revision":"991aae6596b7358fbe22c73d60c2f0d8","url":"assets/images/历史版本-spigotmc-950e29526cf78beeabbcd7b383d7f455.png"},{"revision":"53d666d4289859a1fce7cb65c25fb56e","url":"assets/images/变量下载失败-b31f486f756a27b74456d12d65a2ea64.png"},{"revision":"46a93c27858e2ad7b5796e43b5293220","url":"assets/images/同类插件评分选择-64b93731775cf6281f4c69b2fbeae7e9.png"},{"revision":"1111abc039ba4001583cedd23ae1a698","url":"assets/images/啥是TAB-10e102aa01b98106dd66dfde46e3b672.png"},{"revision":"4047317a154e932ffc558c17a3657221","url":"assets/images/啥是计分板-17c9ff778263196d2ddf5b934ed97180.png"},{"revision":"4a65ef07a93556381ffd5a715a5a911b","url":"assets/images/均衡的细节分布vs失衡的细节分布-2d93e1768c4bc2382ac45145e12d0ee1.jpg"},{"revision":"501f59c58a99ec86bf894dbe2671e02d","url":"assets/images/如何使用Mclogs-1-ed2513937c90fd4ad25a6ee07ab499dc.png"},{"revision":"29a10fb4055038b1ccd2d28bb60fb5c3","url":"assets/images/如何使用Mclogs-2-4cb7cdde4a3c82444a9d8ad2ace340c4.png"},{"revision":"e3a15d4607bc3c64b173eac0601786b8","url":"assets/images/妙妙比喻-fe69cb2383277d89317aefcee98cd09e.png"},{"revision":"141ecf8a41ad0f29f3f54ef75a4e9054","url":"assets/images/子图标写动作-1eb8459e47c81eff3c50b48fa7ee826d.png"},{"revision":"81259c96410e2ce3da744fd94aa291e2","url":"assets/images/实体纹理-0b4d37466c3feca486a63a2da526e937.jpg"},{"revision":"09455ba6e8aae800a961e27a86f023d8","url":"assets/images/常见的HSV调节面板-11bd4ddb5767fe9972dc42b4ae1c2258.jpg"},{"revision":"2dab819137ad090d14bc2203b0f650d2","url":"assets/images/括号-9a9007d0231a0e26ee8baf6dec9b249c.png"},{"revision":"568d366e3beafc02072747ae5aec6b03","url":"assets/images/插件列表-a37819243f4b7a3d3ceb4b7022730e91.png"},{"revision":"5450e3f70932445cf80fde71da400caf","url":"assets/images/文件资源管理器-391e28e4b715ca877ad9428717dc18aa.jpg"},{"revision":"dcdecfda0639163f4cf584b995925aa1","url":"assets/images/方块纹理-76c866f9d6c94bc769fb6b8b57955d38.jpg"},{"revision":"097eff14c2a9a8d8433b36e0555b6681","url":"assets/images/旋转元素vs用阶梯状表现-3cc69f75bb38ebe80922da980b628c25.jpg"},{"revision":"bc4e3d7d095a38fa95ccb0f9b1a7e6de","url":"assets/images/查看语言-crowdin-50dd19aced266accb615cb74fdcc4d9f.png"},{"revision":"63c86dcee856e86d916685f802eb70c9","url":"assets/images/查看语言-spigotmc-60ee8e42daf342c4c8b726dd4651eae9.png"},{"revision":"ee41319bbc30117471b08b6c2d005ef0","url":"assets/images/查看语言-拆开jar-afda92973ce8deecc9f1ba7c5ee3a2ab.png"},{"revision":"5e1386736b2151cbbada7f116c832752","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-0b5219e82d3fe11eb4edd18202270bf2.jpg"},{"revision":"93ee2fc3e8eca947fcf60b2702c87bb4","url":"assets/images/没事不要免费帮人-bb3ff87710753c907857781c8c4c3bf4.jpg"},{"revision":"567cd1c561f2b816fa865c2b23f2c540","url":"assets/images/灵魂画师教开群组服-7ca5cdd4358a53b85459c4a47876a709.png"},{"revision":"fc33336f9ba300fbb086496fa4eb99b8","url":"assets/images/版本兼容图-30ab4d41dbe95909ba61a1047d86ff7a.png"},{"revision":"33a62cf42b304e8be182c89ac073868c","url":"assets/images/物品纹理-d2991664f3a44e8938fd9a1776c1215c.jpg"},{"revision":"001d4735c99c69b8a305cbb3c385ad61","url":"assets/images/白点-f8b960ac4fa48c3762046b2a69c8a4bf.png"},{"revision":"635e8d85ac7ed74acd6263d0a49e01d3","url":"assets/images/直线与曲线中的锯齿表现-71f3af753d62a6d3d6a5d2d24e8e3241.jpg"},{"revision":"9e33dac3dd42fa62940d388ece11b910","url":"assets/images/箱形UV贴图-379abc8032f2d53391efc96e69182e21.jpg"},{"revision":"1f8f19475fda34e5fd76cceae7adc2be","url":"assets/images/经典老图-1-7215e8e54895c8cd3b605df02a4af7a8.jpg"},{"revision":"13f935518a4ceaac26100ad0a6fa1bc8","url":"assets/images/经典老图-2-ed83429f604efa2593c139aff0ae9469.jpg"},{"revision":"a9ccd65573590b34b793b241461aa7a1","url":"assets/images/经典老图-3-3f4709fd96c694912dba0cd6a885406b.jpg"},{"revision":"117eeed9d3c373097eb7388b24878eae","url":"assets/images/翼龙面板-9edc8c62b2290b77da427b51777c49f4.png"},{"revision":"e0461a8aceda782eb947f91fb65ce177","url":"assets/images/自动UV-0b9e8ee30aa327663e3e79c54d9585f0.jpg"},{"revision":"bb3158215934b0d25a25bdffc253fa74","url":"assets/images/识别纹理-35ce7e2a3d491825f5c83c225f6becca.jpg"},{"revision":"0c75f94da34931c093e2255fb8fa570a","url":"img/back-top.svg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"d1831df206d8be3b84aaf2ff1e25f543","url":"img/crafting-table.svg"},{"revision":"f01a98e8ab78bb5158f33bcaf91869d0","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"d1831df206d8be3b84aaf2ff1e25f543","url":"img/furnace.svg"},{"revision":"d1831df206d8be3b84aaf2ff1e25f543","url":"img/grass.svg"},{"revision":"82b7be3e7322c076f8ee5fb938edf4c6","url":"img/logo.svg"},{"revision":"db5e56bb21e1ee27ddac572199724e08","url":"img/nitwikit-banner.png"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})()
;
//# sourceMappingURL=sw.js.map