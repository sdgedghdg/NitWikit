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
	return "1.1.6";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.1.6";

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
    const precacheManifest = [{"revision":"2588c58b1f0ed47e9b97373d4d99e473","url":"404.html"},{"revision":"ee4f956625fe478178e29d78cffda081","url":"advance/bot/framework/index.html"},{"revision":"0c7ac3cafe8283de954ab50947207ead","url":"advance/bot/general/index.html"},{"revision":"2c80078353879f62ec8fbaa76670c570","url":"advance/bot/index.html"},{"revision":"b158bb4869643d7634e4c027bee401a2","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"630645a36b23e25cdd40b8e8be491160","url":"advance/index.html"},{"revision":"951f142fd2692bf4937c62f9b502d84f","url":"advance/Linux/backup/index.html"},{"revision":"d69e3d17753057fb0856d87899fc547b","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"5ab8f4a63c550f6b060d721cadcb5951","url":"advance/Linux/frp/index.html"},{"revision":"452030dc848c5ff94cb3608569c1de56","url":"advance/Linux/keep-running/index.html"},{"revision":"3a458543785961bcd85f980b31d852c5","url":"advance/Linux/start/index.html"},{"revision":"e44915d5072fb80dc6425508c277c978","url":"advance/open-website/index.html"},{"revision":"f0f2670f1f71515682a03529a1dfdfa9","url":"assets/css/styles.8c401159.css"},{"revision":"0e5da4ee5a4e33fde817c2f3c49b9fbe","url":"assets/js/005c270b.798a8efe.js"},{"revision":"949d049f603ff7f19be6bc1f88a2b940","url":"assets/js/013c8c14.8197b991.js"},{"revision":"e9756b8a800be963a02a328b2c06eba8","url":"assets/js/026f291b.2a159f5c.js"},{"revision":"808e995242c52a04eee5aca7f27f6ea6","url":"assets/js/0272dc73.6075dd0e.js"},{"revision":"b0e85a3ad0a2df67911d40c2790e9a48","url":"assets/js/035cfa77.28743fb7.js"},{"revision":"4a36e8b0fa2c0434c063a7f21fea9100","url":"assets/js/03b205ee.ee6b5e9e.js"},{"revision":"0fe089539a42083cc32646d7f08e3370","url":"assets/js/03f997a1.d39c2037.js"},{"revision":"fd7ce063c7b6e31f02eb16864abee77f","url":"assets/js/043fa146.4b91a3b3.js"},{"revision":"3d153561cf8f1a41e98e52cafad87f1c","url":"assets/js/044f41a1.e3bbb498.js"},{"revision":"a0a281fdbbaefd315c1b11980606df56","url":"assets/js/04f5c692.a0d12d0b.js"},{"revision":"6e8d700466bfa82ff75a2c4e6a1b2f82","url":"assets/js/052366f7.386c538d.js"},{"revision":"04df1e1793f0590bd5021332b69fc73c","url":"assets/js/053e2f33.13907e27.js"},{"revision":"f6fd3b6f647c632de0380a0137d46d23","url":"assets/js/058608ed.13366a93.js"},{"revision":"26e8d811cbc184cc4952cf4e8a88c70c","url":"assets/js/06b0ed59.f104f2a2.js"},{"revision":"7d4ac6bb93da0213f35a6dca2d1b7818","url":"assets/js/072384a4.bd4627aa.js"},{"revision":"99fce6ae1205960e4715c5c3ab35296e","url":"assets/js/083acdf9.7c84cbd8.js"},{"revision":"af94810c710c51e3c4e51395f38eec46","url":"assets/js/083ebe2e.d0e8eb90.js"},{"revision":"550f48ba71df2922b33b6ba420df2518","url":"assets/js/08e7f72a.d93a5e6d.js"},{"revision":"90b6d261ef5d3ec886c820ccccb09cda","url":"assets/js/09156d2e.ce743083.js"},{"revision":"0c4429d2aeb4f8c6b6df42a8a9394d9b","url":"assets/js/094a7dd6.85ec09cb.js"},{"revision":"5dd2783f6060807ba53ffed702323e93","url":"assets/js/09714880.c528e5bb.js"},{"revision":"bffa91805958991a61374b7069e06621","url":"assets/js/0a17cf6d.8bf24a6f.js"},{"revision":"d3d8d41a4ffd48bb60c308f15655147f","url":"assets/js/0a1f9916.7c69a99c.js"},{"revision":"b265bf881ebfca63db18191989f99d04","url":"assets/js/0ac0b3b7.2bab3dd1.js"},{"revision":"11faf86c88a3064706b14b4407841c31","url":"assets/js/0bc00c24.c9413dba.js"},{"revision":"7995730951a561760cf747558a463091","url":"assets/js/0bcb5d9e.9411fc7c.js"},{"revision":"b10b27f5f89791c83c85130399a6ec07","url":"assets/js/0c20e5c5.98a4378e.js"},{"revision":"d04c37a235818cf5d21f73911d706a22","url":"assets/js/0c7f12b6.78c642e0.js"},{"revision":"d500b5e381a4e2625413a45734ad4fe2","url":"assets/js/0e384e19.e09236c3.js"},{"revision":"9ee52910fd96e4f047ffd7752cea0c83","url":"assets/js/0e9ef1fa.9c004abc.js"},{"revision":"97a8c834efb05ee58c86d28ebdad006f","url":"assets/js/0ec7bf36.d9ac0976.js"},{"revision":"2f6a0bf4a0398c0aad826f8af9103fb3","url":"assets/js/0efa0f03.02b1a0e7.js"},{"revision":"7cb9c406cd511b427e1eeb92b47c4624","url":"assets/js/0fc807d9.16cc4203.js"},{"revision":"81d2b227a4bb0e212d68c201e2e1c0e5","url":"assets/js/1127.91b1aa4c.js"},{"revision":"25e36bfe0efba84f7262f27ad2362c63","url":"assets/js/11f90be3.6aa80f8f.js"},{"revision":"26961e4cb11eaebc95c82ac57ee057bc","url":"assets/js/1210f0b1.7ed3866b.js"},{"revision":"448b36c0a0a9132ebcc27a2a2952bf5f","url":"assets/js/13dd9964.fc30b0f5.js"},{"revision":"8a05677d372c2d5e353283f0a0baba4a","url":"assets/js/144520df.9b581ce1.js"},{"revision":"95d095129a9addacb72500a1a52cdc2f","url":"assets/js/1469.dc4512a7.js"},{"revision":"40fa841a4c79ec1777bc76518d93bd7f","url":"assets/js/149.2218b71d.js"},{"revision":"617c74fc8b9feeb4228ec047c746dd29","url":"assets/js/14eb3368.def9e360.js"},{"revision":"99fb293e5c385f1a49a993b50190428c","url":"assets/js/15daf372.529c96a7.js"},{"revision":"21fa0ac3db84eb7ef4fe132c0da872ef","url":"assets/js/15db17c1.821a3512.js"},{"revision":"7b390052c1ad9cf8fcbdc84507d94c1f","url":"assets/js/15e4e3ed.24ba8a6e.js"},{"revision":"80b84b3a7e963763ae5b0bc83b84099c","url":"assets/js/1603.a70edea0.js"},{"revision":"a7d98d6213406fc96029a00018bf5925","url":"assets/js/16731d58.f3010526.js"},{"revision":"8a95dee11aeb1b6435a9cc833401708f","url":"assets/js/175f0af4.dcac2227.js"},{"revision":"2c03c23ec8a7f60c3e09a66690570290","url":"assets/js/17896441.f413f84f.js"},{"revision":"f10f513354f498327a2b4ca7f848e2ba","url":"assets/js/180bc163.9f7e8c41.js"},{"revision":"6dd8b1f948276130b68e43c256762be1","url":"assets/js/1856fe2a.ce236304.js"},{"revision":"f96699b6f8df2f2b3a4d16f9b8fd3492","url":"assets/js/185d6330.f8e06a62.js"},{"revision":"3df350b3e7d0f6155e29176677e4ec50","url":"assets/js/1896e6f5.868342f5.js"},{"revision":"1e0efe256a56ed204e349cdd461a1852","url":"assets/js/18b67442.673bbed0.js"},{"revision":"539e582026687e5371321084c03de525","url":"assets/js/18bca995.e6505fab.js"},{"revision":"c418414952291057345f2393ce5e4456","url":"assets/js/19045c37.10da3595.js"},{"revision":"965f7c4926a9c757c6704debe81ab337","url":"assets/js/193a055b.6a95dc5a.js"},{"revision":"fbf30e0dd07cd046d5a9ac3d22ef82c4","url":"assets/js/198ea2e3.f10357d5.js"},{"revision":"f73f66303919f4f9a6671ea114ec785c","url":"assets/js/19cf8050.4096c6b0.js"},{"revision":"e0a08750bf3af6f03820d59a67efbc12","url":"assets/js/1a4e3797.9694bec4.js"},{"revision":"b0630b1154deeb0217fd29fd198fbd35","url":"assets/js/1c42be93.38b6ddb3.js"},{"revision":"2e3db0acc48a7d2dbc902b452057174a","url":"assets/js/1c6846f9.bb6b657e.js"},{"revision":"023723a154de4b469fe40eb466a03e58","url":"assets/js/1cf75b4f.bf346fd8.js"},{"revision":"fd39f7eb5b002f022448860f882bc294","url":"assets/js/1d1b9adf.8969f83e.js"},{"revision":"b3d9838b50858942300f51897225a9a7","url":"assets/js/1d42ad15.2684209f.js"},{"revision":"f74def163ed312ad61dc02cb44d5a72c","url":"assets/js/1dfd2628.12e13d87.js"},{"revision":"950d6dd4836298cfe7cc977d93912ea5","url":"assets/js/1e47cbc1.260f4587.js"},{"revision":"377bec84e7b94efa829b31e10826c528","url":"assets/js/1edb7625.8b7d867a.js"},{"revision":"2c1cf4cfd5c4840cd0c06e1334b6e01c","url":"assets/js/1ee6f0d4.77dca951.js"},{"revision":"b7df5ebc5c57739ffc9936d434a0c639","url":"assets/js/1efacac9.591925f6.js"},{"revision":"52da329893a86a3ef4a8e3576de7cd40","url":"assets/js/20215aa7.208c3b7a.js"},{"revision":"a823bbea3530f0f4a7e9861dde690b8a","url":"assets/js/2070.2dabe3e7.js"},{"revision":"f805dc89bd4181462c2d65bee5e8d737","url":"assets/js/2096.a76ef16f.js"},{"revision":"719d85c79d77c25218aa21bfd554fdc8","url":"assets/js/20d69604.05a61c44.js"},{"revision":"0f0dbb1d42818f391eb384e0f0f02f8c","url":"assets/js/21484c29.8a7158f8.js"},{"revision":"b5fb7e8afe1ba702c8ff055564761e24","url":"assets/js/21c534b6.480e6abe.js"},{"revision":"441a246ee13c8d563e1d77454f27256b","url":"assets/js/22dd74f7.4fc2b7f0.js"},{"revision":"8db6eecc5a8d09772db1679a0987f625","url":"assets/js/2351.83cc3a9a.js"},{"revision":"4f00a21a9ef4e52c869c64603d2f45b0","url":"assets/js/2367.aa2d2eba.js"},{"revision":"caf4472ea192b7d04946c837170760c4","url":"assets/js/2420.e1cae811.js"},{"revision":"1de9d8cc2aa34ced36c072156edc0a49","url":"assets/js/244418a2.01f2b0b1.js"},{"revision":"7489e04bf0451dbdcb9efb3db50de1fb","url":"assets/js/24a68a77.e321d59a.js"},{"revision":"e58eaf9092ecef75ee18150dfff3df49","url":"assets/js/24d8f7d7.b9d1d9e5.js"},{"revision":"17287459d725db7305f5fc18630e8398","url":"assets/js/254a43c9.23585843.js"},{"revision":"7c71abe1ffb560f7ec462367588a2d4f","url":"assets/js/2867c0df.c810110a.js"},{"revision":"f2094c1b675f2ff5244c7f211a559d0d","url":"assets/js/28b71cf3.f416d35d.js"},{"revision":"31b3b9e592f51df9b77e586b5f6ea92e","url":"assets/js/2a71d676.04d290b4.js"},{"revision":"10c2d3299e0d5934ee2790b3c8c11c55","url":"assets/js/2b4e0304.35381951.js"},{"revision":"b12696bc553023f2718e8a88d4d9a641","url":"assets/js/2b9de2c0.d6a0c252.js"},{"revision":"0c247b62cfff4141b4e9f38bc60bd99c","url":"assets/js/2ca153e3.9293ce7d.js"},{"revision":"30f301370ca973cea9126f290322e430","url":"assets/js/2d386ab7.3ce36979.js"},{"revision":"0dbd8ebe4e878330f7c9d2310365f9a9","url":"assets/js/2d5e3179.9a033770.js"},{"revision":"3b9087aec3fe4e9af288443a2396b07b","url":"assets/js/2e79c762.9a271f31.js"},{"revision":"6ecc1eb5a9303a322b2fa94fbf9b4092","url":"assets/js/2e938706.c73a6b94.js"},{"revision":"c7f132373e5bcde1fd1eb075a9f4e4cc","url":"assets/js/2f39a0af.44fb2d6e.js"},{"revision":"d9c7f726d02a2445a8322869b7b60956","url":"assets/js/2f8ede37.eb7a812c.js"},{"revision":"993413cd10982205f9f7489d0ced6142","url":"assets/js/312f6c84.dba97899.js"},{"revision":"bdf3051eacb0cfd10d745af89427b426","url":"assets/js/31735ebe.625887e7.js"},{"revision":"372aac869f4205c1ebd49f27fadfaf55","url":"assets/js/32cf0cce.aec90290.js"},{"revision":"fd84dd47802d5b577e130358ffc1c26c","url":"assets/js/33261842.3ce0c0e8.js"},{"revision":"e9068de184eb2f03abf44c0515157171","url":"assets/js/3425fb39.b7ee4e3a.js"},{"revision":"c407bfc7d136df5314fb1ebedf8052f4","url":"assets/js/343bb2fa.90d80bd4.js"},{"revision":"b1f8e47dbb91ae5946e15215d06cee7e","url":"assets/js/3448.a00f5493.js"},{"revision":"747e48c036923de23b1a9ef456e09906","url":"assets/js/3488027e.67ae2e34.js"},{"revision":"1ec9d6decf38cfc537c9829211b76528","url":"assets/js/349d9c34.d81c9e98.js"},{"revision":"1ea42953b57ba7b7e55de8bf93b35895","url":"assets/js/35d30f29.d01fae5b.js"},{"revision":"2f791f963b6c5ff4f1ce437a28d5bf10","url":"assets/js/3629.68ffdcfd.js"},{"revision":"fb4205d164a88e3873b1e3a92e198efb","url":"assets/js/3697.a1c985ed.js"},{"revision":"dcf45940d38a37421c737009d34b3251","url":"assets/js/36c75202.434b1f54.js"},{"revision":"6c42e23c861f02f5cbed3017c0b3fb11","url":"assets/js/3749f972.ee060550.js"},{"revision":"58b51f49403fb880a2bcf37340e50672","url":"assets/js/3817.229f8674.js"},{"revision":"cc087e28f31f417ad825d0c777fae0f7","url":"assets/js/38b0474b.36660979.js"},{"revision":"be629f133e63ebfb1094e8aaca3cd4c2","url":"assets/js/38b71911.2b3dac4e.js"},{"revision":"0ba2b94d7a1c3c37fb3e5c40cb132a65","url":"assets/js/3966.aa8b2229.js"},{"revision":"e1c0c105c5c9fb77168f077e988c0ebc","url":"assets/js/399101db.a63130fa.js"},{"revision":"da040a2538bc6ffc6f499293338e21f2","url":"assets/js/3b8970d0.cc8b39d0.js"},{"revision":"39235b065d2d52cdf0f78c4e1b4b29f0","url":"assets/js/3bb1ea30.3ae81932.js"},{"revision":"9e1799c7d250f8262b5a641aa86ff5e7","url":"assets/js/3bd1ba02.cba8e51c.js"},{"revision":"0e42137a548aee25cabbc86bf23a7b03","url":"assets/js/3c5393f3.66252db8.js"},{"revision":"ff5b38a8b9a3ddf17e04d5dcc2ed6369","url":"assets/js/3cd38fda.23ef786a.js"},{"revision":"84a4a3c8dfd3778bdfa8ccd12460311f","url":"assets/js/3cd65ff0.63e0f5df.js"},{"revision":"0bea5cde1f03fa9e931bd8e4495a243d","url":"assets/js/3d7f94ff.1d3bcd4f.js"},{"revision":"15e87ccabf43e4dcd67a2f4b922fcd45","url":"assets/js/3dd749a7.a641b58a.js"},{"revision":"77265755da3c584013f475f9eceb1cdf","url":"assets/js/3fbeb9b5.d1dafe02.js"},{"revision":"c7dac7f16bf5abec41f906ffb82132cb","url":"assets/js/4067.06f26c93.js"},{"revision":"19eadab4b62b8b699c38c79beea5ed7b","url":"assets/js/40c17158.82355b46.js"},{"revision":"feea220efc9dae5faeaa15a7d5067af3","url":"assets/js/416679ec.1895c6f3.js"},{"revision":"ea7c8f687842a9ee61d20c84d15a74e9","url":"assets/js/41c0ace0.e7a39130.js"},{"revision":"ba37bd971d78b85a31219ee4bf80c332","url":"assets/js/425e3dd1.14139fc7.js"},{"revision":"52d662c3e0218e0b42e6334b5f4ad5c3","url":"assets/js/43117a18.1b62fb5d.js"},{"revision":"887cc5109f6a8fc06b3444dd96d5b26d","url":"assets/js/431266e7.ef58b648.js"},{"revision":"c8a9a66d1a21b18cb26e5a1c1a755182","url":"assets/js/445c22af.16d62238.js"},{"revision":"22e5bc87f88fd07af3e60e34f908370b","url":"assets/js/44975943.e49e87c6.js"},{"revision":"a47245bf12e16769629f088041691d14","url":"assets/js/4502.a1477249.js"},{"revision":"509abee78fd699be8b5dd2adc9b0c379","url":"assets/js/459.48f58ccc.js"},{"revision":"9f573318c8eb5e9b6b23930330fe7bf0","url":"assets/js/45cd711d.a3baed5a.js"},{"revision":"2a67021dafc6d3c29d555b1cf4177152","url":"assets/js/46bf3d5b.6d45ef68.js"},{"revision":"2411c98788984ac4b0113757c7a52b63","url":"assets/js/47198c5c.3f05786f.js"},{"revision":"8e2a6e8e4af10e69561f272be8b9d6fc","url":"assets/js/4806.b515c0a3.js"},{"revision":"85a9c49cbd43ddbffd48b5e7edd9c550","url":"assets/js/4838deb2.7eea0044.js"},{"revision":"215a873c07b79a73ac960bc6e2062820","url":"assets/js/4876.71c61a4a.js"},{"revision":"75cdc3a425f75cd9f9c657379c9a4ad5","url":"assets/js/4985.3e3e16d1.js"},{"revision":"92df2d43c8c32f15c681cb5d0bacac16","url":"assets/js/49aec60f.9315b979.js"},{"revision":"652655e2193186b6144ec8559b43bda9","url":"assets/js/4beb5b8c.16ffcd13.js"},{"revision":"9f29ebb5034f20693fe12410a5c7dafe","url":"assets/js/4c59ca14.4b4ee267.js"},{"revision":"62d1b50332f443631b9d21174b10b4c4","url":"assets/js/4c7ea6db.972f0316.js"},{"revision":"c3ea21d9d6767d83867e2efa159cd952","url":"assets/js/4cdf84ef.8723b4ec.js"},{"revision":"dd985bb8bcc0978f3bf572d1b97d71b3","url":"assets/js/4d27c60c.66e06c0b.js"},{"revision":"82c6e0fe5b89aaa333e03638572c19e5","url":"assets/js/4f644c0b.8d1a4487.js"},{"revision":"217fa170ddd5fcbb3871aa1c6b85f635","url":"assets/js/4f8bb2fd.8edd98e9.js"},{"revision":"ce0cccc9d27363851936395f2ed24425","url":"assets/js/50b793dd.77fbffa3.js"},{"revision":"fca2bf503cd594563ef31b1fdccf83e2","url":"assets/js/5133.10f92c33.js"},{"revision":"c3b4ec5285363ad42e90affd38906349","url":"assets/js/51ebfdb4.67e184df.js"},{"revision":"4870f1925c8321aa0e3efc1a52aad50d","url":"assets/js/522fd580.93f5f0e2.js"},{"revision":"3efee2d1325259d959dac0a48d171e3d","url":"assets/js/5238.1dba83ab.js"},{"revision":"b37b21631c57a06ab198a14f2cb326a4","url":"assets/js/5410.3f21a21e.js"},{"revision":"d4eb04292bffb6ccd98231d70088f72b","url":"assets/js/5416.ab24c54f.js"},{"revision":"e195476167914c63ab94d4e17d4a44d4","url":"assets/js/541d5637.57d56ea3.js"},{"revision":"e72d5ee7e3993b33358ed499cb2f7471","url":"assets/js/54a35160.4e12d387.js"},{"revision":"66c4199bedc5cd75bef2bc721b997ae6","url":"assets/js/5550.48b04937.js"},{"revision":"1b1009db31535237863aa64f49e89876","url":"assets/js/55aaead0.03740259.js"},{"revision":"c08b8bc9e93ccf3ffc399281f02c35e0","url":"assets/js/5627.0b584de7.js"},{"revision":"9d87319c2d17d7b7d472ec29e07681e1","url":"assets/js/563b5c65.f09867f1.js"},{"revision":"92438443c3ff490b041e619e6fb08b3e","url":"assets/js/5722.17ffa2b2.js"},{"revision":"9f51dbdb67508535dc5f2de3b6e9e2f1","url":"assets/js/57ecc2b7.337e1acf.js"},{"revision":"8795f387b207f1e0004b9acb5d59a96b","url":"assets/js/58284325.0164b35b.js"},{"revision":"633a8bfea6e24a114ca9a04f8fbd944b","url":"assets/js/588dd44d.872917c7.js"},{"revision":"24d226d1cd5047b242ecbd885ac92f2b","url":"assets/js/5893.ada31b13.js"},{"revision":"7b65dd0fefb2e873fbf5e8786ef5d0cf","url":"assets/js/58fa4e48.cbd9243c.js"},{"revision":"9c44111aefa8a7468af14ed33ade8e91","url":"assets/js/594bb6c0.675fa90e.js"},{"revision":"a94bea29345dd55743803740f9190d7e","url":"assets/js/5a5e1dd9.b7be723a.js"},{"revision":"ebf7540fa9b1068e68bc8b7244ac9756","url":"assets/js/5b10224b.5e7ec0ef.js"},{"revision":"a5f57de4a890932e43f5c2088147b560","url":"assets/js/5cdb4525.97e8d1f4.js"},{"revision":"c7a7f9ead6bd9f23349426e476d4cff8","url":"assets/js/5e6d1f8b.55dbfd4e.js"},{"revision":"232480b39fa2b74a0dd7dc2b2144f61c","url":"assets/js/5e95c892.35ae8e92.js"},{"revision":"4db85519b8ad437d94578203ceb12259","url":"assets/js/5e9c3b6a.df3f89bf.js"},{"revision":"f8fbe7ee5c4d3ecb203a9d093363a3fe","url":"assets/js/5fa838e0.0fef7345.js"},{"revision":"738fd8253fb2f397fbf8a0403fc79a8e","url":"assets/js/6011.73825235.js"},{"revision":"72ca0019d536b0abf5a33f59bdc22a18","url":"assets/js/602bb363.fea9d53f.js"},{"revision":"6d0f90551f5b49c488e289338376a166","url":"assets/js/60c781d5.4e6210cd.js"},{"revision":"ee8d0f9d67ffb0fba3ceb0d3b68abd67","url":"assets/js/6147fca6.1305a792.js"},{"revision":"35edfba89860ae74b9c969160de2ccaa","url":"assets/js/6203.acd61e9b.js"},{"revision":"18c7b6db9e3126999e65938b5eb45998","url":"assets/js/622bc3c3.9ed6ddda.js"},{"revision":"de6da04910c938faa01a8f368f1c6a6e","url":"assets/js/635cb825.94fcd0a0.js"},{"revision":"4da3d5b9812bc16101d47e71ed69e6d1","url":"assets/js/63bdb67b.e9df147d.js"},{"revision":"1de80fc3a51eb4079e4036e1860c224a","url":"assets/js/6415f59a.24e38e2a.js"},{"revision":"cc823199eb0bc9092246a828680d9635","url":"assets/js/6444.703c278a.js"},{"revision":"a7a8409d7192a22594c41f544b93cd55","url":"assets/js/64614d1a.492ec8af.js"},{"revision":"a7d40eedef7ac878c1001347d14df33f","url":"assets/js/6557cf1a.0fa5e761.js"},{"revision":"4bd101c11ff047e8c35d7654a3afcf42","url":"assets/js/6577a0df.6ca3c608.js"},{"revision":"6198d63fc25481eabed5fdc2adf63db2","url":"assets/js/65bc360d.43abe942.js"},{"revision":"a44aef869d99741b70d00040a59f9c71","url":"assets/js/6679.7ee7da78.js"},{"revision":"813ac3ede1de45974e721f5f6e8ff381","url":"assets/js/681b7af4.4be1e784.js"},{"revision":"5c83bd02dce574e747fcc0e0bfd37778","url":"assets/js/6886.2de0fb61.js"},{"revision":"460b9d19d9e7d03aa8e965337a0a8681","url":"assets/js/69df999c.dea673b0.js"},{"revision":"5bc2ecafdbff39722049f9d25b788892","url":"assets/js/6ad9afaa.f20ee24a.js"},{"revision":"e5730f4e20658f42b50c74df72f34972","url":"assets/js/6b555c96.c01e44a9.js"},{"revision":"414b5d9b9f43e5955c02859beab76357","url":"assets/js/6b5d6c58.ff9f08a1.js"},{"revision":"6bb2500b1880a68ecd5ab9a99e1ecc63","url":"assets/js/6b902128.d34338e5.js"},{"revision":"eff0144a46a787aebcbe0986dfc57832","url":"assets/js/6bcd55bf.734552ab.js"},{"revision":"a4a56022ef5b010526bb5a03d60091ca","url":"assets/js/6cd9d647.bb269f61.js"},{"revision":"ebfb7fc0bce4dc5155c56b983861ca11","url":"assets/js/6d5efd36.c22893b4.js"},{"revision":"aa43de3de6415457a22cd66fe98f58c2","url":"assets/js/6d630ffc.32136260.js"},{"revision":"9fe049946e24d1feb942a1f24d2dbf8c","url":"assets/js/6d6bd066.a75ff576.js"},{"revision":"633f558a168b37d7aa20359abefca395","url":"assets/js/6e3d6b93.3fffc5db.js"},{"revision":"9262eb86cf78204b6f187efe4605c5a3","url":"assets/js/6e889b7a.d77c82e8.js"},{"revision":"8caaf884fd0bad5686f07fa98e69af5d","url":"assets/js/6f2b2af5.97bfc98f.js"},{"revision":"8a50fde2d3d38f21100fd76adae83799","url":"assets/js/6fa58fdb.a202e484.js"},{"revision":"f3f50fa4a03ce42954737eaf990f362a","url":"assets/js/6fedb7a3.779925be.js"},{"revision":"da78343e1d14905a7caeac6df520cd40","url":"assets/js/70321d34.2c414896.js"},{"revision":"b33971925ff0689ffb6f976f33ae4ed4","url":"assets/js/7051e035.3a9db825.js"},{"revision":"343657c5aebb115e9fa14648b513cb9a","url":"assets/js/71bd92ad.c1b904db.js"},{"revision":"8b154262ecdb2fcd59e078462bdc93d1","url":"assets/js/71c41cca.1a2ed4f8.js"},{"revision":"154f8d088b90cfd26913d7e8993deabf","url":"assets/js/72b3e7dc.8db4993a.js"},{"revision":"a3ec9946d049552b6ef72176f0744958","url":"assets/js/72fea898.fa45a7de.js"},{"revision":"56f2620bc324efdcd75eb69f2d28b172","url":"assets/js/7300.34e6497c.js"},{"revision":"b55fc776830d4c520d7be0493996e6a8","url":"assets/js/73c38494.7a74efcb.js"},{"revision":"34e9b4c639ab90a7ef3cc43b6c106778","url":"assets/js/73f32b8b.b924bf4e.js"},{"revision":"37475c6823233a741cea29f1e2d6c029","url":"assets/js/754296bb.dd0bd100.js"},{"revision":"0afc9c251d9b6299bd440ef5eb3a96a0","url":"assets/js/7621.ce91278e.js"},{"revision":"2794c46b757ff2626014a78fafbb737c","url":"assets/js/76a305fc.5ba6ab06.js"},{"revision":"383a2e86c95d1eb2eff58f64d989f609","url":"assets/js/790b642d.89892acf.js"},{"revision":"ad0d8cff67d1803280b351834c69ae53","url":"assets/js/79899b57.bff473df.js"},{"revision":"7ebdd136f3b084117e9e34a1b5849ce9","url":"assets/js/79ee951b.70c31d4e.js"},{"revision":"bb760e8ae2f21042ce679b548ddff774","url":"assets/js/7b35ddea.6eb518ac.js"},{"revision":"b7f56224809f76c57cbd879c79692f55","url":"assets/js/7c0411e8.b4db23b9.js"},{"revision":"bf18db71eab3bd77fc8d04ca4b0e5caa","url":"assets/js/7c328fb0.2b6656aa.js"},{"revision":"2c4f98560a65f00c7ef34bc0ca0940d6","url":"assets/js/7e75dadf.c105a071.js"},{"revision":"079a3b5b98cbb7f382c0780f6cb4aed2","url":"assets/js/7e7a4c7b.bfea591b.js"},{"revision":"3d8c10a1f055cd95355158ed8adc8072","url":"assets/js/80f373f2.d64f41ae.js"},{"revision":"3afb4e01e075ab238b80148d4c25baf0","url":"assets/js/817191e9.1b6e7ac7.js"},{"revision":"479268a071f97f2f62193543cfdd6dce","url":"assets/js/824c452b.d87bd409.js"},{"revision":"c242b804a30ff37f4346d230a8521b78","url":"assets/js/82c03827.b2138ee9.js"},{"revision":"79f0e570e5ffb12c6576150610e41329","url":"assets/js/83236138.496e0645.js"},{"revision":"df7b41fb3ca28fac41ef36b7dc95a65e","url":"assets/js/8336.193c3398.js"},{"revision":"ac1df2901293c5355ed4e0b6e586e2db","url":"assets/js/83fa3eff.63974866.js"},{"revision":"03201c12a3da937ee7bd810d79ad19bc","url":"assets/js/8470.ed37ee88.js"},{"revision":"5f664e800a15e951940213e92ca5357d","url":"assets/js/854b257e.04e29f4c.js"},{"revision":"36d280e96648e3e1d9331deb9314bce0","url":"assets/js/85ccb835.08a08c51.js"},{"revision":"69a72f03925c3b71672067882f882d63","url":"assets/js/86170a86.a8806818.js"},{"revision":"dfd247851c9952f3b0f43832554d3449","url":"assets/js/8648.d9a3b348.js"},{"revision":"9ea15e761711bb81c12d93093fbe21c6","url":"assets/js/87531641.311888d4.js"},{"revision":"60c6b63b17c3b8fac38f79f8e92fa76a","url":"assets/js/8798.4070d3ed.js"},{"revision":"4f829078b11698e24336a7e3742968be","url":"assets/js/87d5db97.7562fb3e.js"},{"revision":"fba98f7dafb3538ff381bbb5852919de","url":"assets/js/883b3acd.71a7564e.js"},{"revision":"ce5db52e812da7ee4571ce6ccc75a2a1","url":"assets/js/888a5ebe.d8b2c8cc.js"},{"revision":"2c23cfab885427922c535956002613b4","url":"assets/js/8921.8e17b509.js"},{"revision":"36efe1ab39e0e32940fe9eafe137db5f","url":"assets/js/893c6fee.61b06a95.js"},{"revision":"68145706eeb1c7a2cb4871e83d8acc16","url":"assets/js/8a082959.7333529c.js"},{"revision":"007edb9edf5a98095e57071080845315","url":"assets/js/8a578643.7714618e.js"},{"revision":"0fa7605d9b5fbd7db98d927db9a30d7a","url":"assets/js/8b23f58f.b02d7f41.js"},{"revision":"af1acd3cc49f62ee99ec98486426d227","url":"assets/js/8bdaa531.5067248a.js"},{"revision":"8de31bbf8bfc94ca5edf1125be5cb53a","url":"assets/js/8ca7e4b3.f6b60bd2.js"},{"revision":"74a950ee9e0231f0aa6762ee8b93a11e","url":"assets/js/8e0be0d1.cf4583f0.js"},{"revision":"236761d8019c8f6aedbd76b1849d05da","url":"assets/js/8e6a4e74.00da900f.js"},{"revision":"f08a7fee5f3b3e9c4188ae967ab34cb7","url":"assets/js/9076.554bf876.js"},{"revision":"5882f78835ef4ca288dba18fd8b9811a","url":"assets/js/9197ae7a.fa26edbc.js"},{"revision":"952fd2b799e128a0aa1229b13e963f49","url":"assets/js/91e8ffa7.7c2f06de.js"},{"revision":"84251c73a7fa937c91e036132f551e81","url":"assets/js/9229f78d.cb9ad761.js"},{"revision":"7b06658b40ad879f9bd9b5d5ede8a5c1","url":"assets/js/93456434.0042230d.js"},{"revision":"d3ab332198cd9cf3692ae75a475feec7","url":"assets/js/93486759.7b4a5121.js"},{"revision":"89dc87cb3d637d3a77ed4059cc234ceb","url":"assets/js/9366.6c839f27.js"},{"revision":"b0b86e26164a5161a82aab42532aa2dd","url":"assets/js/95bcd1dc.f81c81bc.js"},{"revision":"6036953e89add78b25fd3b1665dbee20","url":"assets/js/95d63b84.df85f32c.js"},{"revision":"29426518cf5644abf2bc32b88e037bc6","url":"assets/js/9640.1a1df431.js"},{"revision":"e082d729024d8fae3c57dc60fda7f917","url":"assets/js/9642.6ffd9be0.js"},{"revision":"d9a28075b285071c4463a76415b5ca8f","url":"assets/js/96f5d401.d54f5fce.js"},{"revision":"d4f9ffea4eabebc2a7a32a8a607077c9","url":"assets/js/9857b334.c4317b33.js"},{"revision":"801fc36d9bea186859de2b7cda53b369","url":"assets/js/9861953a.09f16bfb.js"},{"revision":"660df44c5af0e5e32542cd0668b6dfa9","url":"assets/js/9889.a6b455ad.js"},{"revision":"4755d6975537f3333be99b141e5eb2bf","url":"assets/js/9941.9d085007.js"},{"revision":"6b5c89f666fffecd4e525a1f9f093dc3","url":"assets/js/99f50fdc.683ffb59.js"},{"revision":"1e22380eff2aedbe134b3fb9dc0d8ad2","url":"assets/js/9ac34ba0.f5344faa.js"},{"revision":"5dbee0dc189d4fc9a83fb2e246af1b18","url":"assets/js/9ad56985.0f28ed3e.js"},{"revision":"eb9d0286741fa0902a1ba05e54464b65","url":"assets/js/9b59e572.547b98f6.js"},{"revision":"0bbee01c0ae465eb531f4ccbd615d243","url":"assets/js/9b8d311d.ede068f4.js"},{"revision":"e2638da748a54f56bfe92a9427bb40b4","url":"assets/js/9c2278b2.57841e88.js"},{"revision":"a04ee9d27768fb00f818f0c6427229de","url":"assets/js/9cd2fc0a.7e3a80ba.js"},{"revision":"116b8b2d0005d173e9a12296c5411ee0","url":"assets/js/9d4488d1.4057de41.js"},{"revision":"8b06748a730deb07f3a070ee389cfd88","url":"assets/js/9fdc340b.9d970a60.js"},{"revision":"c96403b9cd42e9e95d952b75bd1992f9","url":"assets/js/9ffd9d1d.ab8cb021.js"},{"revision":"171f2b867d02b7d0e7250c25c6f94e58","url":"assets/js/a0eefd42.95b38935.js"},{"revision":"a41ac419aa282262f50997b6aa4ef647","url":"assets/js/a0f7a8f6.480da3fb.js"},{"revision":"c6348ded012bb1efe1428f7f635f0c89","url":"assets/js/a1a3054c.cd2db583.js"},{"revision":"608ae4bccced1c0ae3c0cfcc99520449","url":"assets/js/a21e984c.18b9bccb.js"},{"revision":"ef3f905dcd9919425e10a521321cb1a1","url":"assets/js/a2ca8fe8.237c37ca.js"},{"revision":"0ff95f2c6cb4183339e7da80af9b07f2","url":"assets/js/a2d5f767.c08c8352.js"},{"revision":"bbe819a7837209d5b0bb6612b04e437d","url":"assets/js/a2fb89b8.bb8be335.js"},{"revision":"13e102e9bb0aa2e16dc26498127e604b","url":"assets/js/a305e2ac.a68a0e34.js"},{"revision":"1423dd18b610a28b95ac0ab35b0a58fa","url":"assets/js/a4c78573.f899bbd2.js"},{"revision":"65fd689aef2398df712f76e665a56cdd","url":"assets/js/a4e7ef95.5eacb025.js"},{"revision":"b94d51bf0dbe6395cbe95e94b5d53bf5","url":"assets/js/a562d1c2.55cf79ac.js"},{"revision":"d963846489f1fa52ff0a531b37c3949a","url":"assets/js/a62eaa10.64c5806c.js"},{"revision":"e938168e6770de0aefff141bc9fa7bfa","url":"assets/js/a6eaa2fe.3ef08a11.js"},{"revision":"ae228b6ac03bb7834d82cb7ad475a127","url":"assets/js/a7456010.9be04e4d.js"},{"revision":"7683d71010edb8012322b02e0bca80b8","url":"assets/js/a74a7dec.9607b939.js"},{"revision":"465924746fc6f97c12b826bddc696f15","url":"assets/js/a757a55c.54fde21b.js"},{"revision":"104513cfe6bff7e21550e591509150a7","url":"assets/js/a78b3ba0.0305f999.js"},{"revision":"9261b20cb04bb36c78ffcdd96c20f8f4","url":"assets/js/a7bd4aaa.db4c12cb.js"},{"revision":"b602f6ba4e6e8628860d264634197cc2","url":"assets/js/a8bdbcd5.171d1621.js"},{"revision":"d75d66dc616e9890d8a0caf314b49d8f","url":"assets/js/a94703ab.e1990e7a.js"},{"revision":"b8c8d71a6b3901bad3324fb44a6d9de2","url":"assets/js/a9c868b9.00e3a7bf.js"},{"revision":"dd39ffe353f187baee26f45f82ecd486","url":"assets/js/aa276556.97de3419.js"},{"revision":"e9102d1dea9ed36273c77e8fa998a649","url":"assets/js/aa81450f.bf60fb49.js"},{"revision":"9b0b59c402d93629a4f69dfb23dfbc88","url":"assets/js/aba21aa0.7e561951.js"},{"revision":"6d75e1967fb41a1989ba53cc04971952","url":"assets/js/ac61b989.218fa755.js"},{"revision":"174d915008bc76ae397839d2563620c2","url":"assets/js/aca8e61d.58191826.js"},{"revision":"bd207123fee16fd06703df8f9afb52d2","url":"assets/js/add4bb7a.fc1550a5.js"},{"revision":"4bfa6985cd08c6386fa33df4b2f8badc","url":"assets/js/aeb124bd.3cb52da2.js"},{"revision":"559b8c221cc2b9ae5d9d53a7dbaab034","url":"assets/js/af70a4d6.575cf001.js"},{"revision":"88a4857cb6a4e0c190f523cd3c41f423","url":"assets/js/b158dc01.49a9be69.js"},{"revision":"75e320c2d92574e2413e3df3bd252e90","url":"assets/js/b21946ae.9fab102b.js"},{"revision":"2f76f32efaf3fd87f565eaa2b22a731b","url":"assets/js/b24d385c.9a16255a.js"},{"revision":"9ab4fa6c58f1474e4b72dc7a24ce9f86","url":"assets/js/b496f3e3.e4a541f5.js"},{"revision":"a16d9493c113e446509dd74054078cce","url":"assets/js/b5210edf.a4bdb69b.js"},{"revision":"bbe55ac40af85bf0d6dcfea1cd6d8672","url":"assets/js/b60da6d7.3822fa99.js"},{"revision":"6760a33064049e2dcb2df3fcf8d856ec","url":"assets/js/b60de388.18fab882.js"},{"revision":"c29a420a0372589cf4d9ed969a52bcca","url":"assets/js/b6386ec9.0795c643.js"},{"revision":"900fd1bf2661b63f20445f3fb9ea4635","url":"assets/js/b6438b6d.5c694849.js"},{"revision":"262d175d60629196f00ea925102a7ec4","url":"assets/js/b7bb49c4.c3f17d16.js"},{"revision":"5d3531dd5b24b72cf5f78bb0092fd15f","url":"assets/js/bba094ac.ba6dbf04.js"},{"revision":"2f6c54d9d531f7888143fe57cd437549","url":"assets/js/bbd444ff.9a148a24.js"},{"revision":"3206c69cc8b729701483e03ad38951d7","url":"assets/js/bcc35f8a.97af642f.js"},{"revision":"9367bdcbff47d32ded8c7dd8659467b4","url":"assets/js/bd760347.42703467.js"},{"revision":"89449ed9858a08d082bba31e39762b6e","url":"assets/js/becf8c88.741b7a14.js"},{"revision":"088e36c15da28c1872574b811804a3f5","url":"assets/js/bf3ddb91.05297b57.js"},{"revision":"9150cd0e1a316e1b7ea14dd4fc83dd17","url":"assets/js/bfb1f9b7.403c313c.js"},{"revision":"913d010df3772c6458474c824fc42d0d","url":"assets/js/c0b93d5b.2775b4bb.js"},{"revision":"efd7c497ecf27a8a29db095162247125","url":"assets/js/c0dca479.1e7caffb.js"},{"revision":"97915f16badeb3ad4f0f946199f6546a","url":"assets/js/c10e86aa.e34992e0.js"},{"revision":"5a8572bdeb55b7261b40ba2a07e9ba94","url":"assets/js/c141421f.81ac4343.js"},{"revision":"0e15496ded3e8cbf9dc3d4246fad3028","url":"assets/js/c156da02.a49037f6.js"},{"revision":"64aa47c3106aadec6e3cb330c6e35f32","url":"assets/js/c15a368e.dd551986.js"},{"revision":"0060f123bd37544ee86345acbb46e428","url":"assets/js/c3e6ab10.60de614f.js"},{"revision":"78a71d9e6face88758f0532220f6fe37","url":"assets/js/c4dcc6dd.0a951abc.js"},{"revision":"4bbc2db17369384b9698b91697f39674","url":"assets/js/c4e9b37f.f601648b.js"},{"revision":"6493c6d3b151d594374142297e9a3df6","url":"assets/js/c4f5d8e4.d5494829.js"},{"revision":"853075337a95bc1b26340ed738b396c1","url":"assets/js/c5f4348b.d5a98e60.js"},{"revision":"98513afd91c872d623ef1325dadbd697","url":"assets/js/c72cf9c7.47e12292.js"},{"revision":"31bb236d0ca3872e335e336a61e62a30","url":"assets/js/c737e1a5.ba76a752.js"},{"revision":"e196e370fd3460c5e6d197a79755ce71","url":"assets/js/c78ecae9.325debab.js"},{"revision":"edb751e3b2479819333b74a8d58b318a","url":"assets/js/c8018499.aec96c12.js"},{"revision":"eb335f3ae78246f357ae0c1308df633b","url":"assets/js/c84a9914.df94aaa1.js"},{"revision":"3ece06fa57dea5d502631149c4693bca","url":"assets/js/c8a93e67.82e4b86a.js"},{"revision":"beb0a337cca609bccb8abf84ae906faa","url":"assets/js/c9a1eaa2.99daea9c.js"},{"revision":"820c73bb5149dc607361489f1ea40a39","url":"assets/js/c9ae34fa.f23c5335.js"},{"revision":"4dff8c4d9cd90e9d3c124bb3e21e7577","url":"assets/js/ca8a1b2c.d5b39ccf.js"},{"revision":"666ce3f4715830b23f927d388e01bfa1","url":"assets/js/cc2fcaab.eeea4f4c.js"},{"revision":"fe1e3719cca49a6e6589dfbd244dd99f","url":"assets/js/ccdb3c45.014e53ae.js"},{"revision":"4c1f091f8e6b7dc77d27877e32af0aa3","url":"assets/js/ccfc7d3c.01755d33.js"},{"revision":"9e8ea870339310bcb1396ff27b4a7a05","url":"assets/js/ce7e7ba1.2ffd5e6d.js"},{"revision":"31e6a2bd936ac8115016013d90cbe75e","url":"assets/js/cedf0e63.96966b9b.js"},{"revision":"b6b8c98db399944503f3448bb9b9bad3","url":"assets/js/cfc0d51c.c99471ef.js"},{"revision":"863f8854c2cbb93854c21340ac0c70b7","url":"assets/js/d00b9fd9.2b2ac509.js"},{"revision":"01469ae88a6ff5a744fb5314c305240e","url":"assets/js/d0ab59b0.a62f8897.js"},{"revision":"da58611b6b7ea19c563684d7c4875675","url":"assets/js/d152d6b2.5ec00de4.js"},{"revision":"79e3d074e533623a5b3c6ec88d9bd7cc","url":"assets/js/d23efac3.0d0a70e8.js"},{"revision":"4ec789884add7915e925154224762c26","url":"assets/js/d26b0f2c.602d2336.js"},{"revision":"eeed974d01dff7741da5d4f857e49f73","url":"assets/js/d2ba5076.fda8810d.js"},{"revision":"56858bde841bdaa87a543983cb8101d8","url":"assets/js/d2bda2e9.bf9cc71a.js"},{"revision":"cd5bc9d4c3cda5f8cad18476b3bf32aa","url":"assets/js/d3585a2b.934559b9.js"},{"revision":"a97c4e85e1fb3d49435c56d12723d7c8","url":"assets/js/d45ccebc.d43d897f.js"},{"revision":"b56bf1ba3b1fd1187c8fd2bcc3bff316","url":"assets/js/d47de5fd.3f634f94.js"},{"revision":"435fdc4350d4ce32e927c87d8b4efada","url":"assets/js/d494a195.c55a36b0.js"},{"revision":"565687a7f75012df53d4125a0c996afa","url":"assets/js/d4e195dd.6dbfaa45.js"},{"revision":"fb2ba8f39ea49ca1a6f2a12395d8c769","url":"assets/js/d63ab801.7c83b996.js"},{"revision":"b9cf07e80ccdaf12972dcde25180626f","url":"assets/js/d89bf822.8dad53be.js"},{"revision":"f35743f55bf6ee50b64f2c1f6cceee9a","url":"assets/js/d9cff955.448d5288.js"},{"revision":"1a561d08f3023515a11a25e543500d18","url":"assets/js/d9fe55b2.21671c24.js"},{"revision":"b7ed3d2680d0b53c229369555d177efd","url":"assets/js/da4fe776.4a5532b5.js"},{"revision":"737a1f1705cde2fd20980da6e57648bf","url":"assets/js/dae64152.85486393.js"},{"revision":"58ff7cde5fdf07eee4bd453e34d39a0b","url":"assets/js/db6afc29.789ff272.js"},{"revision":"d619408ba82a4242d60261384397faa0","url":"assets/js/dc030738.e85295e8.js"},{"revision":"bb098ed5c36462a2235f26511e6f2cb0","url":"assets/js/dc109391.4953f0f6.js"},{"revision":"a077adf9c2d34dd9e5aa0ed76019d82d","url":"assets/js/dd1fbe6a.2c266b9c.js"},{"revision":"d727c0e945f23df58fea8b430d3c0b00","url":"assets/js/dd3d6085.d7d601a8.js"},{"revision":"b1745b975041b8560eb6f4fb2a3b630b","url":"assets/js/df2a4a59.302b13cc.js"},{"revision":"513ddab2cdb284655d1f7ca811e1ade3","url":"assets/js/dffb9609.d9c7720e.js"},{"revision":"847bdecbbce77c2e02133e646fb07c27","url":"assets/js/e17e6af5.92012615.js"},{"revision":"1872788bfeadc01189362b9732a69158","url":"assets/js/e1a53158.757c7049.js"},{"revision":"dbf12b2f1c6420ceb37fb93be0c1d8d7","url":"assets/js/e3b728f4.138072fe.js"},{"revision":"59d06c7bb94a047d3908269890731466","url":"assets/js/e3cb94e1.f72f53f5.js"},{"revision":"dfbe01db9aa3a74bcb76f65b41b87374","url":"assets/js/e47fd75f.b5ed7b8f.js"},{"revision":"b64efbb84f8141f7ab62b725d05d8ed1","url":"assets/js/e4c96358.220f404e.js"},{"revision":"429108461ff17589c76ab4c9cea920ee","url":"assets/js/e4e92f42.d2525d7b.js"},{"revision":"cdeb3f018c69a809f3cc7dba7f81fbf8","url":"assets/js/e5f7cd7b.9b21da6b.js"},{"revision":"b2ba3251cfacf4d831948531776c795e","url":"assets/js/e6501e5b.7740dd4d.js"},{"revision":"246c2a1ea773db1e4b7cdb5f8aa76e76","url":"assets/js/e682932b.8c98efdb.js"},{"revision":"7f1818fefb52e0c0d62d380915e3ea56","url":"assets/js/e69f0a50.48eb56d1.js"},{"revision":"a45ff81eb6747c9d1b5e91e6018afa91","url":"assets/js/e6b53073.c96d19b0.js"},{"revision":"6f325b67b42c3ac7bdf89042243849e9","url":"assets/js/e76d69e4.0673f03d.js"},{"revision":"7c5a44747e7ba186878eb4906c9b18a2","url":"assets/js/e7f145e9.3026405b.js"},{"revision":"25ede62ae09fa6a626d771dfedf66cd5","url":"assets/js/e87d3b80.3eecbd84.js"},{"revision":"25c8839c19641e209f3cb0d607ba0d0b","url":"assets/js/e8d5b74b.9602d6ba.js"},{"revision":"7f79734f57886f0d05866b67e5dbb59d","url":"assets/js/e8dd6634.97e5ba9b.js"},{"revision":"a0968869255bbe1218cff71fab381cb3","url":"assets/js/ea46410f.a0eff0cd.js"},{"revision":"f49ade8ba10b5fbc18bad54949e0adfa","url":"assets/js/eade58ca.3165d20b.js"},{"revision":"de58875f2722855e09428472e9b21d65","url":"assets/js/ece243f0.5e71ccd2.js"},{"revision":"0a982af08d2d319ff4993b1c4460af09","url":"assets/js/ed38b210.9cd26e46.js"},{"revision":"2cdf803cce0080bdc572b97d82aacd23","url":"assets/js/eda49e41.a5213b39.js"},{"revision":"af918fce6ff8075aedf871fdf07e44c6","url":"assets/js/eda784af.488a42fb.js"},{"revision":"5c7a53f30dd95a306900f0daa242f29b","url":"assets/js/ee84ef31.30c0c69b.js"},{"revision":"fdfce0f9909327e3583e3c50fd83b387","url":"assets/js/ef72e420.af0bcece.js"},{"revision":"fa9b31dd67dab82c606e03ccfe5f02ad","url":"assets/js/efa09b84.cb4d4f31.js"},{"revision":"50fd7c752d476beffa979d3d2c471dc4","url":"assets/js/f1f0b9c9.ea2914fe.js"},{"revision":"c9d4535848f980d28530b750cd0d04ce","url":"assets/js/f287ed2c.b3ecd1fd.js"},{"revision":"55fa17d4650663327893bf3aa5b2cdf2","url":"assets/js/f36074be.916a85c5.js"},{"revision":"78c218b4a7f8ec8f9e429f26a170a545","url":"assets/js/f3937ce2.4e54b46a.js"},{"revision":"560d807b84859e746935dd5852fc7fd8","url":"assets/js/f44068e7.5f6940c8.js"},{"revision":"f294e8e086600dac35b549ea62042fb4","url":"assets/js/f4e5f89b.dd011eac.js"},{"revision":"d2b84ae74a2fa42678ba50f87dc5f285","url":"assets/js/f58ceb15.3300d482.js"},{"revision":"38108d02cef483cf82fb011c280624c5","url":"assets/js/f6420a7d.58d7677d.js"},{"revision":"72b6cc06e0f22eaa736227271b3bd4a0","url":"assets/js/f7e672b1.60a550f4.js"},{"revision":"28101bb9daa730f496d9a4fca1afc6ce","url":"assets/js/f83b6261.4a9d0733.js"},{"revision":"08c1545bfe136cb170c5ad50c54cbe72","url":"assets/js/f9dd20e8.fcb1f608.js"},{"revision":"ae0f6cf0a40ff442cd9717e60f26b61d","url":"assets/js/fb274994.2d0de9e5.js"},{"revision":"22dcfc319f83f172c34c0e7a1f79daab","url":"assets/js/fb57057e.7527f038.js"},{"revision":"70eb6c9fb5e27734a001fb5687771a83","url":"assets/js/fbcb1a27.bc6062d5.js"},{"revision":"d1d7731688a319e22bedb1bf8a4d7834","url":"assets/js/fc419e9c.3dbfeebf.js"},{"revision":"fe7f02a21e56f32cf16094d6c44cb7a1","url":"assets/js/fcaab584.1dce1e9c.js"},{"revision":"8087d862e21aa6a25be9f12da9b6cc18","url":"assets/js/fe5e75f3.9fb2129e.js"},{"revision":"14c7299eba66d55f96fd19a110e5669d","url":"assets/js/main.88808c04.js"},{"revision":"7f7d19f06b3e80dc6418bf6b27f44f07","url":"assets/js/runtime~main.2d05c852.js"},{"revision":"24ea50f271c7c333ae0dbd58f7948442","url":"autoload.js"},{"revision":"c055ded39a2b668364851afd144d8c1b","url":"baidu_verify_codeva-Diwo6ExDb5.html"},{"revision":"587be2c6eea33cdc59c6a5fd742851d0","url":"basic/index.html"},{"revision":"9746d79d4f3b013d883e83c3a0aa948b","url":"Bedrock/bds-core/index.html"},{"revision":"05ee5187757b44178e393fa03748bde1","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"f8ead881af59843fc25646a9c8ec1d0e","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"43c377827cfc804790f6cd20d2271c7f","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"b997c7bd91b37a96bb26dd36c3d06404","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"d48b3635ea3ba584fd4c4ff0ebc7595e","url":"Bedrock/bds-core/process/BDSX/bdsx-install/index.html"},{"revision":"b7529ce36f2a0d9c08d7a292b9d29f5e","url":"Bedrock/bds-core/process/BDSX/index.html"},{"revision":"96e8cea31e912e46d9a9a0adc0393e58","url":"Bedrock/bds-core/process/EndStone/EndStone-install/index.html"},{"revision":"e2a52c6a9e359308e214147948d0093a","url":"Bedrock/bds-core/process/EndStone/EndStone-plugins/index.html"},{"revision":"9c99e6f9e15bc14a101ce9464d245568","url":"Bedrock/bds-core/process/EndStone/index.html"},{"revision":"39ce8c23010dd052ef20f1f8f4590c9e","url":"Bedrock/bds-core/process/index.html"},{"revision":"9d00b97d345f7dac8493f448832b65c1","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"3a74d75edb866fc003a07bdab109fb35","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"21b935aa76d60fda9558a50399bd52a5","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"331d2addae9e891d021f8f182130612a","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"f8b4e5ad948eb2df2af9e4d4398fcda0","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"2c86d23d4d62cd875f7dd419aa765237","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"e1b6498c47080a2b550933bc0944d35f","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"0b773b35375e6410101139c1ed161989","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"c39d0ffd7d72ca1ccd859635a83148c2","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"663991c497d8a5aad8f7a889eb7c19c9","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"4ae3c4a75d5f63a1d012a9d685313c65","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"f2074354385be4c482ef0095da489082","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"7b5cb5aa885f3ad49b68145c88b8d7b3","url":"Bedrock/bds-core/start/index.html"},{"revision":"0f4ecfde29ad63b91ae0cc5c53dd95e9","url":"Bedrock/intro/index.html"},{"revision":"b421b1fa5ac64aa1c6060c47e806e9fe","url":"Bedrock/nukkit-core/index.html"},{"revision":"2a514334de6c2a356e7b648ec6ca8e9a","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"07b0cfd9a1afe8605fbae16afc683316","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"02e1eea1cb3b9d5562b4513658964d76","url":"Bedrock/pnx-core/index.html"},{"revision":"31bc3bd3320ba3be92f36779788e030f","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"2257c5c0efc79833f0dc7b78a6007fac","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"6d46e674762d199fb8799f78f11c6ba7","url":"Bedrock/super-basic/index.html"},{"revision":"22ad928d6ca440a94fbc9aaf85ea486c","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"90f362f493bdcaca5e10b0e396e6b809","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"98e294f9373b5e5b9958f7ce409e4f86","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"9d4a2f70283556707545b25e49bf09df","url":"Bedrock/super-basic/version/index.html"},{"revision":"1e5b2a31da2c7032ebf4504241dc69a1","url":"contribution/index.html"},{"revision":"a7a0003bb8beec2377aac4c86ba3fb3e","url":"contribution/todos/index.html"},{"revision":"e8bbc9a434a71cb0bf41056a0df8dbad","url":"contribution/writing-specification/blank/index.html"},{"revision":"aef6c41a7617d8da0436605682a3dc9c","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"332ecdfb02cf3f82f1ea4176aa5120eb","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"87080bb4e4d93bfdf3cbb06a7d2aa4e2","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"936d70beea73d63c43af64c479cf94fa","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"8276e077e93da31f1a4ea5d47562019a","url":"contribution/writing-specification/reference/index.html"},{"revision":"0d69101d29b486f6467eac6d49e7bbb0","url":"contribution/writing-specification/text/index.html"},{"revision":"c290dc705526152b09d7229a0ef28f37","url":"contribution/writing-specification/title/index.html"},{"revision":"766709149c9bc03348bbdf65da3eaa26","url":"contribution/writing/index.html"},{"revision":"8227504e6776ffaa632e2daabe4cac9c","url":"database/backup/index.html"},{"revision":"027780fd5a330aab46f0c85514a8896c","url":"database/configure/index.html"},{"revision":"8ab20ab3991c7a49165db62525f2f21a","url":"database/index.html"},{"revision":"68d57e31c36737bb4aaa1a9e46a1d498","url":"database/install/index.html"},{"revision":"cf34b8f77715ab0b126e075f91d0f934","url":"database/manage/index.html"},{"revision":"392a46ecbfd99dedcfd6ab0073c3af2a","url":"database/uninstall/index.html"},{"revision":"0202c93cc35ed5eed60ffb57a8a35f07","url":"deploy/index.html"},{"revision":"75026d6dfec83082b93d67d68a4a1cb6","url":"index.html"},{"revision":"492308464eb1449f2fc1a85ee203384f","url":"intro/index.html"},{"revision":"5982f5867a4a59a777fae6a269978395","url":"Java/Advance/all-server-code/index.html"},{"revision":"78fa3cf7ce6a17a700b62646c09be8f7","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"5e42444e605eac1e2bd0997cdd5ce3c7","url":"Java/advance/bot/index.html"},{"revision":"1379544d9d309bab9a358a42c31d98d3","url":"Java/advance/chinese-username/index.html"},{"revision":"0591ad484a7052964064a2b33ddba789","url":"Java/advance/command.yml/index.html"},{"revision":"0d4ec32ca66d19008e05f3561ec99830","url":"Java/advance/database/index.html"},{"revision":"5131fae2f25b42e4dd965fba55adbe40","url":"Java/advance/index.html"},{"revision":"010430e3c1e0639e139248a6a709b402","url":"Java/advance/kether/basic/index.html"},{"revision":"87024ad65d131b72cf57b8aee72546de","url":"Java/advance/kether/idk/index.html"},{"revision":"4136777e53130494f8c3d27acffd1c62","url":"Java/advance/kether/if/index.html"},{"revision":"9f5461881332c4305c52d46e49a782f6","url":"Java/Advance/kether/index.html"},{"revision":"243de1fde5c7341ab94b8189211cb1a3","url":"Java/advance/kether/math/index.html"},{"revision":"a1840cda4159a15169b39cb8b9b1213e","url":"Java/advance/kether/preparation/index.html"},{"revision":"d48ca748089c5b80afe41311056cbd4b","url":"Java/advance/kether/variable/index.html"},{"revision":"79beb2bf5b871a9306fd67479609014c","url":"Java/advance/Linux/index.html"},{"revision":"9b0b6b32bfd0b1e71ba77b8e9b07f9f3","url":"Java/advance/loginchoices/index.html"},{"revision":"d8eff64e7dc383071a71f4e21806fe9c","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"423de840e3d8292e38088819c51f286a","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"788275239b8389c3dcf093b31ba5bcec","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"471691e33a169a12af3a1b1c9fef1e9f","url":"Java/advance/slime-world/index.html"},{"revision":"33cba598be363313d7920a1c10c1a8f8","url":"Java/advance/YAML/extention/index.html"},{"revision":"dd647d502afe26dc1405d00411c059f5","url":"Java/advance/YAML/foundation/index.html"},{"revision":"b43b5e1e0883a4e7cc90fe881ad56e18","url":"Java/anticheat/index.html"},{"revision":"00a68ba26957f0b5145833ed675910c5","url":"Java/AntiGrief/index.html"},{"revision":"3512bfcfbf6acdb282cf821befc52e2a","url":"Java/basic/index.html"},{"revision":"356fc583c3936451f678fb97673aadec","url":"Java/build/index.html"},{"revision":"73b67d9efea6e6e5c62897363369f71f","url":"Java/bungeecord/index.html"},{"revision":"e7045e21a49d5ea5df075818f47f6a6d","url":"Java/category/placeholderapi/index.html"},{"revision":"014188d69f45ebad96b94893d01b0ee1","url":"Java/chat/index.html"},{"revision":"4b927f02ec5e95ad7354fc5be12794db","url":"Java/command/index.html"},{"revision":"07647f57da07996aa93d9f69f5ffb235","url":"Java/cross-server/index.html"},{"revision":"00c4c917fb0a8d12cdc7c2b7f5017de6","url":"Java/cross-server/plugin/index.html"},{"revision":"488b0267f5de369a98a469b2ed7e075f","url":"Java/Essentials/index.html"},{"revision":"300aabdb7b451246458a1959f0b72f54","url":"Java/Front-Plugin/index.html"},{"revision":"ecac70daa3b164981d75a945fad3d057","url":"Java/game/index.html"},{"revision":"0d7ec45cd9958fb0e92a60d558f2388e","url":"Java/Geyser/index.html"},{"revision":"bd29aaea7159ffad93d98f20e286bea7","url":"Java/geyser/introduction/index.html"},{"revision":"81a4c540808b4a367eed6731da379e07","url":"Java/geyser/upgrade/index.html"},{"revision":"72a28010bca975a0b0922b9cb7f38ed3","url":"Java/Geyser/Upgrade/index.html"},{"revision":"ff0fce10255bca700ca0c2a6d62ae24d","url":"Java/intro/index.html"},{"revision":"d501c5b0f5102de4b4e1f6e74e5bd853","url":"Java/items/index.html"},{"revision":"4984d5113d89abd0375c5ecbafb5bace","url":"Java/maintenance/Java/index.html"},{"revision":"4ac6108ba9bf5ecaed22345e009c93d0","url":"Java/ManageTool/index.html"},{"revision":"c76a39e114613c1fdce452ce5bcea905","url":"Java/more/index.html"},{"revision":"f7886760ddc6879c554449fd92322dd7","url":"Java/optimize/index.html"},{"revision":"56ace2810588947a33358e5e99d671ba","url":"Java/optimize/jvm/common/index.html"},{"revision":"7d3a7a78334d2601f6314ff1fa93949d","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"31393103512be695ef3f778afd1a3b64","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"b64ae4053f84a3e3cba205a99d9df3ee","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"6afd902cc22caabab3af1a9fe9a0c176","url":"Java/optimize/jvm/index.html"},{"revision":"0765c0687bd46f3d82143220be910f58","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"25307de756bd463086589a664b0d3d4a","url":"Java/optimize/jvm/zing/index.html"},{"revision":"92732aa0e56835fb24881198445be8a8","url":"Java/OtherPlugin/index.html"},{"revision":"91c8f53f734436ddc74168ca9cfc1ad1","url":"Java/permission/index.html"},{"revision":"5fa9e31c4d6e772e8db5421232274f15","url":"Java/plugin/index.html"},{"revision":"79ca98916f75b9d8b9d1f8077a7a4a00","url":"Java/PluginMagagement/index.html"},{"revision":"e68b4f3b534e71512b83c2e7e661584e","url":"Java/plugins/other/Skript/index.html"},{"revision":"377c911fc731d035c055d0174bf66768","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"a7a04c38b813116f6d3f02662f0caf4b","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"66cda91abe0cd802b05601df3392e74a","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"636acc4eaf77bb8d98e83a5c15cb3293","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"432f84a3240a0770e76ec07d6351da29","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"dbc71b15d79eb81359950257dd702687","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"d4d0f75e3858459e6fd7df27c1046828","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"b25632060d2bee5e926befc66375b39b","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"5a8f05cbab7c1250fa594801e976d78f","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"1cf9935e5aae56b0614aa8d5da681b25","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"fd0c9c92d980c265cc4ad1228c6724b5","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"2f956247bb99e78fe7f778f7316c3221","url":"Java/preparation/index.html"},{"revision":"47290e41b4ceacf758ada52700ecc614","url":"Java/preparation/text-editor/index.html"},{"revision":"a98c055749132cd1ecf109ea2b554af6","url":"Java/preparation/websites/index.html"},{"revision":"84b11fa990edb6962c526813ab4c8297","url":"Java/process/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"deeba1f072ecb8ff6705e3a1b153920c","url":"Java/process/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"e6dec25429819ff81be87054b8eb60e4","url":"Java/process/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"7105e9692791ab004e1f82f3013be760","url":"Java/process/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"d9aa494b3616ebe8cd2f1803ef250c8d","url":"Java/process/cross-server/hide-the-real-IP/index.html"},{"revision":"df9cd7071aad41f00242b6608ae8b4ae","url":"Java/process/cross-server/join-server/index.html"},{"revision":"76b48843626ce49375551f5f39da9dc7","url":"Java/process/cross-server/plugin/BC&WF/index.html"},{"revision":"6f67956cd47380cb832e2d467cf07c8a","url":"Java/process/cross-server/plugin/velocity/index.html"},{"revision":"63eae9633c3d9775b42d32837be64be3","url":"Java/process/cross-server/precautions/index.html"},{"revision":"2bbc665001445d828408bbf1465ffe08","url":"Java/process/cross-server/server-core-choose/index.html"},{"revision":"831f84ca14219619b9aa0450f727ccc8","url":"Java/process/index.html"},{"revision":"e1b69737522e4defea2e981db0e7e5a3","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"a8f29a5056a1a2cece6b6153fb2d69f0","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"0f95dc0364039e47bf57b805cb3648b3","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"d7a783d6da5551fee90a6cfe1c00f9cc","url":"Java/process/maintenance/backup/index.html"},{"revision":"85b5e3087a7988ca7bdd0a73ef3e0678","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"aae3d6afcbc8e151c5dc35ec65babeec","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"fb5220fbb7ebdb2e32b5c878ab592fb0","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"0086ac58d8c329017832a41dbc167c9b","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"28c86b6a62c8f87378398d87b8f16c8e","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"d8fdc1e3374b5862169b23ab5884c691","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"cf920e4d5cfd0faa99e18435a9036404","url":"Java/process/maintenance/update/index.html"},{"revision":"bf94aebc158173644c962880924687d3","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"bd2947966bf1ba37dd8d263c1d735978","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"d343ac112accf21913a52574483977a3","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"71cb6a7861eb6858b0d9707563a6c2f9","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"bd2c41cf9eaa2902988fed9d60286a52","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"26e11cd5dc7e0c985af9782b2e8fc95a","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"60a6ab3d1befa290f9d00eb791fd1eeb","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"9fc893c1126356338b513f06394bf47d","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"41d8406876c7c7744060043bbeedb3cd","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"2a3c2fccadffc20fffd3e8c1295cfc4d","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"f7c9ccdeb3c629fbbbe4fa90959cd4ba","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"75426d456f1070c21ad805111d4650d7","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"1dea8a33d07758382b9c1b61cac45a8f","url":"Java/process/mobile-player/index.html"},{"revision":"f77eb4559b601856396177a79adf2844","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"179aa118d1fe814b5d430ce177ec9229","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"01285bccdc825db927ed7626905adf47","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"6c1b22acceeccfea35ef65db8800166a","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"95fd240a49ce1b65d30b5adb8208f149","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"3932c6eb6a6a4cd7459b197b4ecf7d61","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"05d73f71203befd566d6607bf07ed2dd","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"e6221df79b517dac28601b54e5e6f61e","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"0250d2002691401010b30e769538210b","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"fbba43b4293008bbaaffdb2fcdb81b3e","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"8761c55ca06a4a6d2dbc6e689defec11","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"784786097cecb7c92f8e89c7939d6d81","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"3436cc179e715b5bfd6fb2f1c8cc080f","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"de07b29e36177908e9a6e0b8f6a33d57","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"faf573bbe532770d208fdf76be192e43","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"917ab1571ef928293d99e7a077cb3175","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"84ded47c5c2c4066fde25c049fe3668e","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"a3f23a5258469c27a43c9ba6ce919efc","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"807aa6d8a02059269450ec9b6fcfcedd","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"bf8e359a5afd829085e62a4edd825442","url":"Java/process/plugin/game/title/DeluxeTags/index.html"},{"revision":"ed4557e21814126b75357e2ab62a3d31","url":"Java/process/plugin/game/title/MiniPlayerTitle/index.html"},{"revision":"4d7057144ae6ca36a721bbce4e60692f","url":"Java/process/plugin/game/title/MythicPrefixes/index.html"},{"revision":"02dbabe6a9af176b49f106b4a0f8c495","url":"Java/process/plugin/game/title/PlayerTitle/index.html"},{"revision":"5d53ddbd05de7ee17e82f80e3d1f1633","url":"Java/process/plugin/game/title/UserPrefix/index.html"},{"revision":"e8ddc4e1fb488c922319dc7d9505e7e5","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"e1485cae76307a170c0c242d13218b4a","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"7a713814b43888cca091ac9537b6a78b","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"3a3da071417bcb9947e205782cca6043","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"a00640616c992ce93dd3ebd65a0d21bb","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"d872d201270ab7d470eb85959b80ec3a","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"8fedc2e7d45e61e9fd86df99fc54f2fc","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"df2ac5718e5922858dd6b11396570bde","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"b691661510c0bcb9673192177c1fbb63","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"b60e9bb23aaf2a659abd622b56230e06","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"ef3dc4f9cd2600e38ce7eaa8bbe08ff8","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"5976f4581ea9f69ea6705a5aeb24d5e9","url":"Java/process/plugin/ManageTool/BasicPlugins/SunLight/index.html"},{"revision":"b6adc2380b193a0f85a3d2c67700d684","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"7a713ad42ee4a3c248009ee2fcfa36c2","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"86908c7bb5aed8a9057fdbfdf12e075c","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"97b6e393d9ee20359c3d07e06585d8ea","url":"Java/process/plugin/ManageTool/items/Crucible/index.html"},{"revision":"5095afaa1100f4e629cbadb103e83a8e","url":"Java/process/plugin/ManageTool/items/EcoItems/index.html"},{"revision":"09f71a58e082048057829f68c84c6e2a","url":"Java/process/plugin/ManageTool/items/MMOItems/index.html"},{"revision":"28b471c37158af950277d6b94be1c397","url":"Java/process/plugin/ManageTool/items/NeigeItems/index.html"},{"revision":"f5eae4a0146e0171415a14ccea417d3b","url":"Java/process/plugin/ManageTool/items/SX-Item/index.html"},{"revision":"0fda10cd577266e20b7c5dbb0efb2efd","url":"Java/process/plugin/ManageTool/items/Zaphkiel/index.html"},{"revision":"e41ec519f33b4226c7ae3750a4714a78","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"03a94ac12f1815f6f17a5dbc87f55285","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"5e0f2b02537cc55733a93bb65ee93668","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"2b668c40099b0400d45a172ee7fce3ea","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"8ea54e74456d2d75415d18bfd33a16de","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"12d2f891a2b5d99a43c4c19ce759c6af","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"e4445e49fc42f9420b6942319e70df96","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"2ddf3ce27807e8aaafc9dc6e8c5a0b32","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"2cd73d00411578471583b2a2c383f66d","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"dbd2ed4ab14c2587906d98c40e43bcff","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"f1e264f34ab901501c35b2e673cbe4b8","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Model_Engine/index.html"},{"revision":"77924c3c012f565ceaebc3f180dc26ea","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"ad95cd6aeda12e803ba8fbcfc9870221","url":"Java/process/plugin/ManageTool/task/BeautyQuests/index.html"},{"revision":"9d8b2b22e3c744a572974773c0c500ae","url":"Java/process/plugin/ManageTool/task/BetonQuest/index.html"},{"revision":"d0dea35a04fae639980bf6c23c35e185","url":"Java/process/plugin/ManageTool/task/Chemdah/index.html"},{"revision":"66ee3ab3ef0bc95d488d84a5dc80a838","url":"Java/process/plugin/ManageTool/task/MangoQuest/index.html"},{"revision":"dc286faf69d5f83e1ddb15c306fe5345","url":"Java/process/plugin/ManageTool/task/PlayerTask/index.html"},{"revision":"57f882c6bebf21c2610e273335fb9c8c","url":"Java/process/plugin/ManageTool/task/QuestCreator/index.html"},{"revision":"c6b5422d4687a7b84e31dd32af4a7d87","url":"Java/process/plugin/ManageTool/task/Quests/index.html"},{"revision":"205d7d60250a2e4ed670c631e8c13192","url":"Java/process/plugin/more/color-message/index.html"},{"revision":"b12da5efbdb3fbd24ee8f6ace9ac4604","url":"Java/process/plugin/more/faq/index.html"},{"revision":"a042cce168a38b9aea9e4b2e95d7ba2d","url":"Java/process/plugin/more/plugin-abbreviation/index.html"},{"revision":"b497aafe9f683bc05dff70f3eb52ce89","url":"Java/process/plugin/more/plugin-backdoor/index.html"},{"revision":"bc07bafc4cdbd5e828e169da2b893b27","url":"Java/process/plugin/more/plugin-build/index.html"},{"revision":"14b3771bfb7087ddc16a69c072454ffa","url":"Java/process/plugin/more/plugin-config/index.html"},{"revision":"7a3254af4c61cc57ddc724a1663d878e","url":"Java/process/plugin/more/plugin-download/index.html"},{"revision":"11f77f4b65b4d434b25fe8fd9d79a330","url":"Java/process/plugin/more/plugin-signature-file/index.html"},{"revision":"f8905ecb703371813d6d7adcbe5c7fab","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"130e8cb470911c883912c2fb33c77b27","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"0e1f64f9f0236bf235b434a44bf7ff31","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"1a97f49ad0398e84f9efd3320b14d639","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"ecf75007709f75933a07bf5322625f2e","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"747c3830e6fcf9995c8da4838b11b4e4","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"75def177627af5b01a671030fbc74b4a","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"bf36ec8c2e90db158d3925e9d3ed011c","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"b5f776eb55c01056974df19c2e31c6c4","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"e2064e601c3403061d007d1fd9784962","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"84d8e0fa95ba27294ae0480779e8e892","url":"Java/process/plugin/other/money/index.html"},{"revision":"9600d4cf6696c77d5041560ec3908f23","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"53ebc34f7a1c23d05361dc694d1d1fec","url":"Java/process/plugin/other/MythicMobs/index.html"},{"revision":"87b459f8c116eed8548fbca86905ec96","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"36d5bdeb115124fcb8ba26bfe65e9799","url":"Java/process/plugin/other/npc/Citizens/index.html"},{"revision":"479807bdeac6026eb1e6baea1ae2d68c","url":"Java/process/plugin/other/npc/ZNPCsPlus/index.html"},{"revision":"876d2ba964db9f3c3a1b9dbb84df88c9","url":"Java/process/plugin/other/QuickShop/index.html"},{"revision":"714d3327618083b294ef7c432008724d","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"67d1e05fc69cb682df4d9950f38058b1","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"ce8a2ab3410c4b4e2d26e0e564ea6f2d","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"b32288a71f6ba8e03aa01ac486adf48b","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"99c58632f7c1989b1e977f6eb6c062a8","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"476dfb0b8015dce83a3ef4513c5157be","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"d23ea83933c167e4c32f5b9ed4e943ec","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"d02149e4f5975e5bc450f1f70791c186","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"3b0f90ef6ec06af6693dcee4c5eeed80","url":"Java/process/plugin/protection/Dominion/index.html"},{"revision":"105dd3823913edf764ab1b64c781d8ab","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"5d7605e4fed887f354c2823fee437066","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"6ddcdc43730620531bb9517d6897aa46","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"a16196a4db50095756b7e6f6f10b7389","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"3fb14e0321c2cb569f7c2a1b5925f042","url":"Java/process/plugin/WorldManagement/FastAsyncWorldEdit/index.html"},{"revision":"9a1353f4adcb1da278f19c18c125ac40","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHub/index.html"},{"revision":"6416212a869ff9a130ec71ec8ed0115c","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHubReloaded/index.html"},{"revision":"37fddebf630de133ddc3f66ecd5a5a2a","url":"Java/process/plugin/WorldManagement/lobby/index.html"},{"revision":"032c639d398ee50870c1078b11c6708f","url":"Java/process/plugin/WorldManagement/lobby/SuperLobbyDeluxe/index.html"},{"revision":"4771dd8fdc4662284d9c937fe7f69b27","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"7eb411cd407de8fe08b548d788d33e7e","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"0673692417aba80687e7c6715269c1fd","url":"Java/process/plugin/WorldManagement/WorldEdit/index.html"},{"revision":"f046f930f6ad1d1c3efe4f87be5118a7","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"dae368ac46b1bd47e821bd897958a0f7","url":"Java/ResourcePackManagement/index.html"},{"revision":"d01b6d9488c10827ae6d16c7a17cf3b8","url":"Java/server-core-choose/index.html"},{"revision":"28d1b872164578fe51fb3cfb9adb8f5a","url":"Java/services/index.html"},{"revision":"e9427380e49784d08a4a83aece2f0605","url":"Java/Slimefun/index.html"},{"revision":"193e86cfb84c44f8efba1e8c199e960f","url":"Java/start/ask-for-help/index.html"},{"revision":"9d31cabbbb011b523e23b94becc9ef08","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"55cbb99f4a4ab77b1e32b4de0a4f7fd6","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"99dcdf56d2be78bd50dce78cc683e22a","url":"Java/start/basic/server-management-command/index.html"},{"revision":"1fa0725a5d3dd6d3ce413ada4fc1cb8f","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"5fd4613d6a3577b9ddc1f928114bcd80","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"807c07ea7bcd8e1b9cd36036ace7fbd6","url":"Java/start/basic/what-is-log/index.html"},{"revision":"a254e6cffbbf2d46b804cb7dd73326cd","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"ed3950e64734f4b929da1a7b5ba735dc","url":"Java/start/basic/what-is-namespace/index.html"},{"revision":"8fbb4680b00175a47b8649dfc6bf5283","url":"Java/start/basic/what-is-nbt/index.html"},{"revision":"3c8c0a706f1753f217c52f5aeb33e93f","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"47ed49b948b9235e4fe22b389c8e7c1f","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"566d8209ef9fa0f11898b01813e9fabf","url":"Java/start/basic/what-is-server/index.html"},{"revision":"ac1312ae39f3bc0b92a23b2d2cee114a","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"ba368c2168565a4e38ef6885aa932a44","url":"Java/start/basic/what-is-world/index.html"},{"revision":"04d5eb4e5ad2a88a0d5eff5d7fb25a2e","url":"Java/start/config-server/index.html"},{"revision":"433b56fe8d51ababa0668eeb28aa820e","url":"Java/start/connect-to-server/index.html"},{"revision":"0d9dbff98bf3e60223d92002fb397645","url":"Java/start/deploy/index.html"},{"revision":"03bbba818642aebf8859f1fcf04027e5","url":"Java/start/index.html"},{"revision":"203855355f437b974fa6780b5a76a593","url":"Java/start/install-server/index.html"},{"revision":"a34004bd499a4a9eb7c90e9821ac6209","url":"Java/start/launch-server/index.html"},{"revision":"f0cf394d5b4ce57238836a9a90a991bd","url":"Java/start/server-core-choose/folia/another/index.html"},{"revision":"668b50d2832cd002f8b3a73c9a4ba4bc","url":"Java/start/server-core-choose/folia/folia/index.html"},{"revision":"2061aaaf2d8914267b18c0ebf32e640d","url":"Java/start/server-core-choose/folia/luminol/index.html"},{"revision":"41b925f4736ca3c9ac973dbb056f5139","url":"Java/start/server-core-choose/folia/multipaper/index.html"},{"revision":"1aaa68ae0689d6f32782438bcaf21878","url":"Java/start/server-core-choose/hybrid/index.html"},{"revision":"5e44a24edf3bb1a9da566578f385ca32","url":"Java/start/server-core-choose/mod/index.html"},{"revision":"d40be66b3354910965f3b7a2f0f2e812","url":"Java/start/server-core-choose/plugin/index.html"},{"revision":"16eab55290686845fe8c44d5bb39dc8f","url":"Java/Sundry/YAML/index.html"},{"revision":"1d6dd6c7153a0ddbeeb8e27c1f586af3","url":"Java/task/index.html"},{"revision":"67daef39b6f5edecdd0f617216bb04cc","url":"Java/title/index.html"},{"revision":"9f3955196b8614d650a7a9562e211e56","url":"Java/velocity/index.html"},{"revision":"abb29d7360faa37988ce8a895cd4a68b","url":"love/index.html"},{"revision":"dd4238b394654ed99abfba04c0324423","url":"maintenance/index.html"},{"revision":"d1df9f38c990474087f32a044ff80ee3","url":"manifest.json"},{"revision":"7343caac1d64298b34ba5f08095dd605","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"0a265756a2228e8d1de6d4db42964f50","url":"preparation/dumb-script-using/index.html"},{"revision":"a6d59a99f5ef0c8d76dd0c7edaf022a8","url":"preparation/index.html"},{"revision":"7dd35dff312983ebc15462f1dde2444d","url":"preparation/text-editor/index.html"},{"revision":"bf2e265ad6f888d28b4778a66084df83","url":"process/create-art-assets/index.html"},{"revision":"731d3d34da4243776240ef3508054eb0","url":"process/dashboard/index.html"},{"revision":"6111ada8a61421985304dbe6441b356d","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"f08a206662f95ced5a2f1e0ad076a1ff","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"93aede80594d51d4208187d7d563300f","url":"process/deploy/intranet-penetration/index.html"},{"revision":"20b0429b3cedbbd41d9ff66f9afd3310","url":"process/deploy/optional-mode/index.html"},{"revision":"a25d6df1c6a5e4be1efb00f3240496d9","url":"process/deploy/purchase-server/index.html"},{"revision":"31f43bb8452e50920c52475335bad6da","url":"process/index.html"},{"revision":"3a3622a11fd6a92d3c6136cee1fff5f2","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"24e42f66eeac9144e5da51023a3f5a0c","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"f8783f7b20304575db765f745f1357a9","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"ac135dffd9bcb793c33b2158eace0b86","url":"reading-guide/index.html"},{"revision":"41063bacee08fbb2a4c9a20608aeea82","url":"search/index.html"},{"revision":"40c238b66854d2143118832169531b44","url":"services/index.html"},{"revision":"923d74b70b9c4fdbf8292b9c577bb6b3","url":"start/ask-for-help/index.html"},{"revision":"114c32c0ded18e1b1f00144d1f73c9ae","url":"start/basic/what-is-caton/index.html"},{"revision":"fbcdd99291b4178681d5b59744e1aa3f","url":"start/basic/what-is-log/index.html"},{"revision":"4fede55b5ba13cea9a182c11d1542832","url":"start/basic/what-is-messy-code/index.html"},{"revision":"2c8fdecdc1002bb0cb12fcea32e2d38e","url":"start/basic/what-is-permission/index.html"},{"revision":"2158edbb7841b0f2c72e3f9e7bd3fa43","url":"start/basic/what-is-plugin/index.html"},{"revision":"dd3abdfd63482dc4eb9a67136e9dca44","url":"start/basic/what-is-server/index.html"},{"revision":"f1bf83c1abc79da2ad21430791afb384","url":"start/basic/what-is-startup-script/index.html"},{"revision":"3562b295160fbf0b833762d43504f83f","url":"start/index.html"},{"revision":"95bd71cb9a0822c1a37e65979449f579","url":"Sundry/Advance/Linux/index.html"},{"revision":"0b2b2386c7bb16f95ac0979792d5cb70","url":"Sundry/Advance/management/index.html"},{"revision":"e2d7322e4603248694d88e79ca6daff6","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"f75cf12f6a81212d9ba041c022c30c5b","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"5fb2b10975a34fe72c0172a790cc03d5","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"841b571346736e0e2cfb01b93237180e","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"d77fb3713d8af38dbc46421d7d462c2d","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"ac11954184d8782dfb7d84ae61910429","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"3461d7c1a7cdfa7c502fcb1b696159da","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"4ee240c9f5aaa05535161eb807f73f94","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"18efc30891fee8e326088f3352f6b3c9","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"b32ebb8b892303cbcf98a71b8b9a7efb","url":"assets/images/1-028c672df80f095993c8683959036eb4.png"},{"revision":"faee793b9ecfd8767c90688c81772eba","url":"assets/images/1-1-7b2f6ab85eefa58dd60267165575d968.png"},{"revision":"68c56a694908b1aa2aeeb62be855a55b","url":"assets/images/1-2-18658a66b20c773553f977eb0a5ed921.png"},{"revision":"8b50ea053f5445c7653c6bed19e0e9ca","url":"assets/images/1-3-d8d44e55701a834cca3b694a3014c83f.png"},{"revision":"fbcf3c632fe9305b7bd8b715c112dd51","url":"assets/images/1-4-05ad3b6565383a683f30be218a2b2f84.png"},{"revision":"15012695ab4b4742e2588ca5fa49161a","url":"assets/images/1-44d027a3dc86baba11087c220453d59d.png"},{"revision":"4ad4a94df9dd2c1544b18bcddbf807b8","url":"assets/images/1-5-1ecd5178b9f87bb1dbe1e66cab6457e7.png"},{"revision":"7dcd16bd241c4ea318886a9e481bf649","url":"assets/images/1-6-649d43559d679c2975f59235addddae0.png"},{"revision":"dc10a3ddac5a6e14303150149198b542","url":"assets/images/1-63c4a3ec20199e11ca19b2f9fd2a682f.png"},{"revision":"ced955e30b60a30ec05c5684ae2fdc7d","url":"assets/images/1-7-e001182a0bde463db04a14d1f462fb6e.png"},{"revision":"96c124e98ac524d49aec28a72d1e6889","url":"assets/images/1-731f45984c8b96902c85270b8c81ec35.png"},{"revision":"1f9c3c57774c792ff952e9558f6dc862","url":"assets/images/1-8-df4563b1786e4b0f638b03f2c003fdd5.png"},{"revision":"08b33fc26327da6e979ba164ea217fef","url":"assets/images/1-82f0010c14c72c5d94a32dc8fb2c504c.png"},{"revision":"8e11e24936839d01798d8bc4ad470d23","url":"assets/images/1-9-c90d58107c1f4428a38513323a7906c5.png"},{"revision":"2038d739d5d2942ef060c4c9b75ec9a2","url":"assets/images/1-a9f8da27e5049d58f6f741d0f12ea551.png"},{"revision":"8c7b32c86f8207eb4938e9d5649fd7ec","url":"assets/images/1-aad5ad5f1398c48d29a32a072bdad4ef.png"},{"revision":"ccca570d7ac66120837adc97c57a4c1a","url":"assets/images/1-c3bd87874195895c6be5c2ea870244d0.png"},{"revision":"24260dd5c1f60452b4ac63ebc7a6a285","url":"assets/images/1-cd6859b2cc9c315d0060fc66db710558.png"},{"revision":"1a00b0f8db51b658cbdc2535e87d85de","url":"assets/images/1-d4a8cc278e6f1ce35508601644b6f2be.png"},{"revision":"371ad4a478896137848d6f808c675ec0","url":"assets/images/1-e68001070d89747eb2792353d7674803.png"},{"revision":"f696788fe53854d952e7d9ed78e0b82c","url":"assets/images/1-e81e15b7582946dfd327aeaf8519d2ae.png"},{"revision":"3bb5ccb0daad2aece6687133150dca96","url":"assets/images/10-58d0447450e0033aff233f70b56969e0.png"},{"revision":"b1c805662af1dfe673d6cee567ccf82a","url":"assets/images/10-79c11f2996066593ddeba91d1a9f6180.png"},{"revision":"e0a1562132100f5a89ac07f5b9958852","url":"assets/images/11-2a5f3cc6447c99cb7ae9b02b466bc418.png"},{"revision":"6baa6d0058a927a1352928b8655d29aa","url":"assets/images/114514-1e62aac2f66b45ceb53cc2fac060a541.png"},{"revision":"843c8deefe2ee62b05cddda23645fa75","url":"assets/images/12-ebcb424357a387dee3e7a6246b368966.png"},{"revision":"18e11b38b411d39f9897e78c2751706d","url":"assets/images/13-58ef837abfe450269fe5e47f439a1daf.png"},{"revision":"60e9076514713df5fc325cace9be0972","url":"assets/images/14-f50c97314dbdd481a7afa7108f9a01c3.png"},{"revision":"8afad3e30298f6ee2c44ea6b077771a6","url":"assets/images/15-9168d62fdaa0897e3b20355bd3ac5484.png"},{"revision":"c8906eb098d678e9c238ef60830e3961","url":"assets/images/16-9fd1a097e27350717ebc802e3cbb7d6b.png"},{"revision":"3859a843d71317bacfab4ef00c5005da","url":"assets/images/17-adc869f92e3d754411b20c3bb418786c.png"},{"revision":"3db99355f4beb05a03375d41217ff9cf","url":"assets/images/18-22737ea9026c7132cb433cc7b8dafc96.png"},{"revision":"7fbde148ad63ad1094a97afc11cae232","url":"assets/images/19-03b6b776a93e85562d8de889b7711c0d.png"},{"revision":"5433ae66fd463f4095ec5f30bdf9730f","url":"assets/images/2-1-c8d736d92f46f281cf99dfe785fd43fc.png"},{"revision":"73d862dabd772accccb40e8046818900","url":"assets/images/2-10-5d744a4763b4dbb5e1b86c82ba687b88.png"},{"revision":"87be4ad3f839de1911e9876e8f2247d4","url":"assets/images/2-11-709f9e72ea3c12df9f63f0d29e741f8c.png"},{"revision":"5ee1dc9ffdd7515a18d593d308ff6edb","url":"assets/images/2-1acef7da34adea86f13cbec0472b3562.png"},{"revision":"c04bcf8bc9422a59f6b411ac6c40a76c","url":"assets/images/2-2-ac473eace1924af50f493dbb97c04027.png"},{"revision":"6a93199caf4c36d145ae66d58b7d5edc","url":"assets/images/2-3-cf06bc179c164e5d1b9e983edfa28412.png"},{"revision":"afb627b89e1fe2010eced8e182d692b6","url":"assets/images/2-4-e67d806fa8d93ba71e31c9f799abcd80.png"},{"revision":"945748c9cf235228aff740eb486af53c","url":"assets/images/2-5-7a7bd93f62aaaeb34447423e4c68bd59.png"},{"revision":"4f547d6af1cafa71d4ecf482b46a00ca","url":"assets/images/2-51664a177bbbf2a515d9704289dcea9e.png"},{"revision":"8a3ae42717debcd6bac0c88134777186","url":"assets/images/2-556589bc73279f249458dbbbf7a052f2.png"},{"revision":"f7b7d96b7c074dc8fd7f356b21edb28d","url":"assets/images/2-55c73126d5d73e5fc0c897e359acd749.png"},{"revision":"593cce7020a26d2d0a55463258a9a288","url":"assets/images/2-6-9acf45a1ef22a7cde491b0e99c917901.png"},{"revision":"271fce2cc8fbe3e0f4e4938a54302462","url":"assets/images/2-7-d434403125983862a35ac879fee0b61a.png"},{"revision":"40732a53711be50db5d1d5568770cfb4","url":"assets/images/2-8-47171419b85b57dd9929fb0e06e6a681.png"},{"revision":"6a2af29b06ca8112aa83eac83e238ac0","url":"assets/images/2-9-fbd5ff8d3f8ae5ba6f31a1186106f1b8.png"},{"revision":"7d1c2028f06b3edca532324db880ffa4","url":"assets/images/2-9c0f6f91dd65af014d51552ece697322.png"},{"revision":"91de35f714906f89db4344cef519016e","url":"assets/images/2-b21dac91fc2dd187030a000846b9061e.png"},{"revision":"bcd0f6c5de54a1befcc0042f05db4ee0","url":"assets/images/2-ce811015b8ce998492f1c4ed5cbcd428.png"},{"revision":"b5d75c6d706455fc2c9d8d69e237f07e","url":"assets/images/2-d12962d444e490509e3c8ccdde97ffe9.png"},{"revision":"5e2e7505b6ddea2bbfbf19964b38824d","url":"assets/images/2-df20a5e9aa3b65320c6f70000b32b260.png"},{"revision":"44d8c03c57fb92bd4ae07849b6d95907","url":"assets/images/2-e95fca36b87966d5033150aa4b7f0028.png"},{"revision":"44b24fd5656a8250513e304c9041436d","url":"assets/images/2-f05e09a60b2283c4c783286ea72f0749.png"},{"revision":"3434ac8ae15e9cfce03418b5d790ed44","url":"assets/images/20-563f0bf4bfa9279537b59cfd43d1fee6.png"},{"revision":"3dc2005cc9fc27ba3f49774d0231e485","url":"assets/images/21-d088637eb2dac73e6e85ef7c4520cc83.png"},{"revision":"53cb6fad2c56bc7e380f4dacb6da0b1c","url":"assets/images/22-42f6cc05337327eaa1f1191503122d82.png"},{"revision":"706da148b7157b1cad2c49465d4a81cc","url":"assets/images/23-0e2a01d94460d264c762b6ca6042203f.png"},{"revision":"f8d5c66e5e6f0353dd613ee8a33dcc22","url":"assets/images/24-ce129e614f6267791eef423d18d9b6b9.png"},{"revision":"a550a5c8cbe32d257d4308f407e81614","url":"assets/images/25-9b5c9bbd61082314a6c537fc480c0b6b.png"},{"revision":"a094343d7b92fbc891764fc40e4f4210","url":"assets/images/26-642f7846d0f720ebe452d6100b96c62f.png"},{"revision":"0558f957777dfa9fc6c7dc4cf02fddb1","url":"assets/images/28-4dab12401b4028e9f9b3824ec33210b9.png"},{"revision":"e6f93fb3e4bc19f24eede3fd1107ea5b","url":"assets/images/3-1db9a2316cba4718eab2a52911330ee5.png"},{"revision":"1e9be35247b84c0144514fd4f96107a1","url":"assets/images/3-55cf90ce30a5b26b512e4fb031dd01b4.png"},{"revision":"8ef6661f35d0c523ca3a7a6021d175aa","url":"assets/images/3-66f9827f9173f1489b47dce22df687ce.png"},{"revision":"da82fc2e94d198cc9f6bf36a59d54da5","url":"assets/images/3-71ded5525c6fa68a07c8c2d37daef753.png"},{"revision":"a822a2d6db62a21e7a19521023052c6e","url":"assets/images/3-8bf0c51795432e5912a61e6eb3680cb2.png"},{"revision":"ec46cac3a3aff08215cf620bddce94ce","url":"assets/images/3-9995127cdc5a82918c881f970b13c562.png"},{"revision":"59fe242c5f9d8b1217d7bee8a948e548","url":"assets/images/3-9b1937619f453c539263557fee89efbd.png"},{"revision":"f6c62d2d3f3a8a78aa8651797807e127","url":"assets/images/3-fb220c0d99514810193107059939a377.png"},{"revision":"72d0c4dbe45f7d297332a37c4e9a048a","url":"assets/images/3-fe9463a3e5f63e2e349440726f0d81fd.png"},{"revision":"2a54646c4d2a6473f78bc887534c1f0d","url":"assets/images/31-932349ed508962ccd6c31ee82354f564.png"},{"revision":"ca96dcd5b0ab7e868f58de84355f194a","url":"assets/images/32-084b2ddc6f2f990004556e5b12d99817.png"},{"revision":"fe45b36e3b0f52ada1ec79074e747aab","url":"assets/images/33-d23918939eb19e7974ae9cdbce1027b5.png"},{"revision":"1fec9f8134e5a9d396d06e16e4d3c1c1","url":"assets/images/34-a3c3c3c133da75b280f24f85abc4f320.png"},{"revision":"2a68dd3ffd08062f7729f73f971b1500","url":"assets/images/35-071df367286bc1e809ba78739976f6cf.png"},{"revision":"d4482b4c3b67bee34a541ab0e23c1a10","url":"assets/images/36-6ff139a8048e566c1ab57d0fc38d32c6.png"},{"revision":"dc778be7c5e1891db629896d3693645c","url":"assets/images/38-b29821ddd2e43ca8299f1dd8c710210d.png"},{"revision":"626bd563c935c7efc272cbce3d37f5be","url":"assets/images/39-baa030bc82af91717759ca2719bf90d9.png"},{"revision":"d85a3d62627b3af1c3c03dfea3ef64ba","url":"assets/images/4-0c6b147ef7733713ebc97beaddc1c626.png"},{"revision":"e62eb90a25be5832a1fe8b2cabb5c812","url":"assets/images/4-0e82318f58f07efb57c82b133b38d3d0.png"},{"revision":"d2c1eb0eaef1183a44d165b4d42e32dc","url":"assets/images/4-8a72b836d22ba18aa9389c39ba6c51c7.png"},{"revision":"b656502de4ec7f7129911a43d0169441","url":"assets/images/4-f1fd7c802a1070f8cd7574dfcb79a862.png"},{"revision":"f8743601775edd0d671a9452a328e481","url":"assets/images/4-fba804575ca6d381be9f38ea98c30139.png"},{"revision":"a9cf568e306ace85e270669d441de239","url":"assets/images/40-3b37a921c960631df874b2ce1a953662.png"},{"revision":"7bb46016779347ac29c53873f0051869","url":"assets/images/41-fdecbfa4493a777357fbb7fbb8c01ccf.png"},{"revision":"1c887d7e9a183958c868ccbb5e582640","url":"assets/images/5-41222974cba37e06e8da7989b0a14e6d.png"},{"revision":"eb277c07e539ea66f67614761d1b2970","url":"assets/images/5-d3864713009211306577087551909079.png"},{"revision":"c32e341dcb31794220621e226972831a","url":"assets/images/5-f07d38cf9490a1e57d3f67afe2cdbffd.png"},{"revision":"d174a56992cb05eac938e2f6caa7fd91","url":"assets/images/6-129b6bb40f689333a684b72625f91f88.png"},{"revision":"a5b492159aadb547b17a7ff179016ab3","url":"assets/images/6-6ec3b7c0355b16ca02d14946d2a9e443.png"},{"revision":"89e87fe0a7412f27456018bdd95c2ff8","url":"assets/images/6-97c7203d853ded602085b4525f267c62.png"},{"revision":"096b74231b81bc8d18a94a076d096e8c","url":"assets/images/6-ba443fb5d2514b6cf36161896ed90df6.png"},{"revision":"1fc0f32d51d17de697e95474c3f453fc","url":"assets/images/7-2f74b6a8e030205a10793ae8fe230f6f.png"},{"revision":"9a61f30d7090f33c731e7c1e064093d4","url":"assets/images/7-583d0fa0eb03d348efb01ad6483b0540.png"},{"revision":"86d6c841175ac0391320bdada1f282ac","url":"assets/images/7-a4c8006f86d035d3f9fc40d11862bd16.png"},{"revision":"9ca6c5d717ca6758d28097ada0bdf687","url":"assets/images/7-fdf7daf8e71fe0dabd29883e80d5920f.png"},{"revision":"bc6ce3a2ea9ce7f0de2ba9802d52ed92","url":"assets/images/8-255bf14fc8482571d8abcc90a2e51c55.png"},{"revision":"22dcaaa0e33e13c42c994fb15b2f475f","url":"assets/images/8-506a0e50715a2f984bd4bbcccc2ed496.png"},{"revision":"05525700de6f31dad6a505c0bc44e3e0","url":"assets/images/8-7362f0389744b19cb7afedf06dba78c2.png"},{"revision":"f770b26c6d92169ddd0425422e106213","url":"assets/images/8-cd31db3cd6d8eb8677727b6051f1d179.png"},{"revision":"5da974fa6ad4ea9a407d2260adf1eef6","url":"assets/images/9-361355951f44b7ac2739f1874efb6283.png"},{"revision":"935fd7a3e5789147f5499609608fa0cc","url":"assets/images/9-b01aa2c198ce4f9f9c5f78ea398c0088.png"},{"revision":"a0fdbe75658531611e5321a5667f2f24","url":"assets/images/add-fa823580ac441faa72470b75bac5ad3f.png"},{"revision":"7e530e321e40a157435b93858f178853","url":"assets/images/add-new-5c80d779a7b257c4e4520dead7f6c5cb.png"},{"revision":"1e571ba2dc373ae862236bdc73470ddb","url":"assets/images/add-web-db168ad7f05902ffac1260beba0c09ad.png"},{"revision":"6d958735ee195bc9e135fcec0715248f","url":"assets/images/Adyeshach-1-94a06e5e0a5a17584b564c85d25351b8.png"},{"revision":"cda571fe1e0e13743c8ad0f62a6e08c3","url":"assets/images/antixray-mode1-1-c745b72e2ef17a6b92748483fc3d86b8.png"},{"revision":"3e646e8705a0e98d69c207b97c7f17ca","url":"assets/images/antixray-nerher-mode1-d606eadfb2b2b441fac8c0225e6a244f.png"},{"revision":"d1cfe9adf5bc3efedff51d3b753884ca","url":"assets/images/api-8c0008a3d21fcf1c11d808210b463dee.png"},{"revision":"fe3ed43e00bda741573c70583ae2f440","url":"assets/images/baotadianj-966228553cc144002a83102397088650.png"},{"revision":"e751e6255e7050ecb3c6e36fa4b65366","url":"assets/images/bedrock-core-running-83afbbe75cda6866b57aefe4fb6b3957.png"},{"revision":"7ebaf9936f9023d02c27896c74a38c53","url":"assets/images/checkitem-ef98b299d527696f72526786248802a7.png"},{"revision":"d1e98d86cb8a790994abc83e73cadd43","url":"assets/images/choose-second-4d954d983d121381b12f2231865f33bb.png"},{"revision":"f0a5aa8b4b14dc0dabec24961b5c79d0","url":"assets/images/CIMM1-1a61f996e629c877ed443d26c9518569.jpg"},{"revision":"a169a3585eef7aba18724bb08bdb1afe","url":"assets/images/CIMM3-9a331b250ad1dc7305e5633020e235fb.jpg"},{"revision":"e25669c599db681391ec7f646906a836","url":"assets/images/CIMM4-2c564f2c7b5e7f399eae610730b16c73.jpg"},{"revision":"9b02f6dbc0d64696b0f2384d650f1c63","url":"assets/images/close-yellow-cloud-62884a47bbee6215fc22fcc81eac93d4.png"},{"revision":"cc0b8b6c262a6131527086a63b2a1099","url":"assets/images/cname-313f4eea05b344d3890d5f764b1fbdde.png"},{"revision":"3a083f9794197b40a2e39606e1e926a1","url":"assets/images/command-4-9e783c88970d5d2f7366091b6151fdf2.png"},{"revision":"bd308796e5496b1bf47e5775a3feefa3","url":"assets/images/command-40654439c664c458d052cca6df33df7c.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"43acd28f6f72cadfc41a0bdba63d21d0","url":"assets/images/DecentHolograms_1-ff5d6633df691781fad5a8ec3cfeff7d.png"},{"revision":"d79baf505fa092f9aaa92e485f833569","url":"assets/images/DecentHolograms_2-5a6d611b4af1493571a55349f577a13b.png"},{"revision":"e9232d9b4c15f59134e0a788d0cbb970","url":"assets/images/DecentHolograms_3-3f42239088ce622240238ba5556617df.png"},{"revision":"d356d624d9533047564b4bff136dcfd3","url":"assets/images/DecentHolograms_4-e818015ee3ab0af58af718ab2ca0a14d.png"},{"revision":"9d8e4a77fdc8b20b087d118883d5ff5c","url":"assets/images/DecentHolograms_5-0caad81e8f0a7e09db7e2c34b8e8dc0d.png"},{"revision":"25d74389ccab08aa56134a1128a8211b","url":"assets/images/DecentHolograms_6-90760721f5c802e1898d96e738b3cada.png"},{"revision":"a3b2b58b529185baa3f8b367be02fa54","url":"assets/images/dian-new-3d1d1049b492a40e5824de164d9d84d5.png"},{"revision":"8258db8df4c6d34fbe22f47bc0924247","url":"assets/images/dianji-1a0305571907c2a31a6448848035f561.png"},{"revision":"3078d1ef8f949b23f981a85f6d681f4b","url":"assets/images/dom-0fc5b2c981f39e6140f33b6a1a5a8019.png"},{"revision":"c58709027cc8c54fc8e770d19b57bbd3","url":"assets/images/Dominion-08-aa2dfb5527f036472c2a4a8b0f44f743.png"},{"revision":"0bd6dd570e38c6e658ad739037b0c61c","url":"assets/images/editor-6396d8de461a51c8fca947a207749fa1.png"},{"revision":"6aa676852ab2205d1a37a965967c25df","url":"assets/images/getinfo_1-e7c2e9072e0ab5ab73991d7d0810f74f.png"},{"revision":"92d78187bca92dbde0a99d4bb1cb4fa2","url":"assets/images/getinfo_2-7b3436f4c81485c65868c2567bc64355.png"},{"revision":"26f745f1d1d78de42362a1cd4d3f0677","url":"assets/images/Geyser4-65af38ba06e3c8b2197460e45b073778.png"},{"revision":"77184522ffe184210ee5e1cf08677f66","url":"assets/images/Geyser5-5767782dfa709a3b6bbf7207bb92c245.png"},{"revision":"8428506ecb384598104aad818d5e13da","url":"assets/images/HbuilderX展示-4c0eb9762c8df510dd1fdead73592485.png"},{"revision":"9fa252a83f65035d89ecff73cebbf83e","url":"assets/images/hd已经归档-32249dee366a00899b649d8adbb565a3.png"},{"revision":"fbaaa116cfda74345ec14fd6929b3906","url":"assets/images/holo-dc42590f8c9261569753dd97e1bb502f.png"},{"revision":"e610a92efce164a9dfd7ea65c346c72b","url":"assets/images/if_2-90c7db4f40a59b98effa79e8e636dd7c.png"},{"revision":"bca5ccf5384e8a7c3c7aebb9ae5af86f","url":"assets/images/if_3-205c9cef9690cd3f9426820f1122c6b1.png"},{"revision":"b15662c786e3440388e26c80ee0024d7","url":"assets/images/index-9d9386098791038e0bc3bcb7a4d60e5a.png"},{"revision":"e19478245ccad11ce332d2d756364f10","url":"assets/images/install-961b5ff3d59f606626482ae1aaeca596.png"},{"revision":"c97f4ea4fba6ffdd4d8345eb70341761","url":"assets/images/jieyazip-aabb717cbd34ebf3ed650fd66803a5d3.png"},{"revision":"1f74953845fb5ab78bf13c1e1a570b62","url":"assets/images/kit_1-c42f5469a7f8ac450f961fe5c7e4afb4.png"},{"revision":"786cea26ffe399387c8fac7240496870","url":"assets/images/kit_3-6091a3a5dc48ac4cf5589c748467e21e.png"},{"revision":"f5025dfbbe5fe1c00444f43de95ca59c","url":"assets/images/kit_4-64320f25f1a7ea01c78a42e78a7eae7b.png"},{"revision":"3e3e255dddf6fe9eb1b85a499b41f99c","url":"assets/images/levilamina-is-coming-b99afb6c12b22333b2a4d8220c10ac2e.png"},{"revision":"8ffe072b21d7eb9d859b4b5a86312673","url":"assets/images/levilamina-will-archived-b38aceb46a17e226c0d0298373a580e6.png"},{"revision":"0861a904462463c6b852a55bc501c522","url":"assets/images/macOS_terminal-3e17a4826476c7e694c98e88703bea66.png"},{"revision":"d423771f8bba28959ab8c2c385a259fb","url":"assets/images/mcsm-f20b3e7b3fbf022070433dcccc319d1f.png"},{"revision":"dcaf899574d7ac03db6e616e9098e4e5","url":"assets/images/memory_1-ec2a05c0e91321febb25e4549a41189f.png"},{"revision":"a2e2226081589f682be3666837f037dd","url":"assets/images/memory_3-5611ba35e80158eee2b7c86753fe39f9.png"},{"revision":"e399ac82230ef424f1567cb535457105","url":"assets/images/memory_5-8cb5f197ece911104373f98f118a9775.png"},{"revision":"53f963020496218631b6bff8b120b29b","url":"assets/images/memory_6-053f3aee6576c77c248c4f04fb048325.png"},{"revision":"7212760a7b3a57214fff89f43adada0e","url":"assets/images/memory_7-5e6c73d227dfd1b813ca04e6c8c7f7e1.png"},{"revision":"a3c5b0424afab5ed68fd42e3e596dfe5","url":"assets/images/memory_8-78c8f2969c7ebffe36c247b26c88f86e.png"},{"revision":"5135c604a94e84dc848740b4dcb25877","url":"assets/images/Minecraft_Formatting-04a724dcfe681ac715cf9c1bb542be74.gif"},{"revision":"b813410515569abd0965df8fe494e548","url":"assets/images/MiniPlayerTitle-1-2b210e32e972f7622d259979cede0c04.png"},{"revision":"0198f0f644567a5c6590875337b2d874","url":"assets/images/MiniPlayerTitle-2-9d9eefa7993524cb3f75089ada14f448.png"},{"revision":"3a0c4398d1f4cb711b8d3a5afde7e60b","url":"assets/images/mm-1ecc89ffb3cc2398697d18068c88d969.png"},{"revision":"c939dd55ffc73fd55c101fb51a555079","url":"assets/images/motd-3d72069f027158b8f6de113d70dbe479.png"},{"revision":"4bd57a588c33e2419452c7088097d017","url":"assets/images/mysql-021568c5ef1d502632950f56dbf470b9.png"},{"revision":"8f7bf62fbdfd604d76bab4fcb83c4e36","url":"assets/images/nogui-92030a95bbe6f727b682636fbe492382.jpg"},{"revision":"9dc395225c71ecd76be2e6ca6c03c28b","url":"assets/images/Npp展示-49f716bb51e81c8492ea6ffd12f1a11b.png"},{"revision":"1b98d8a7ee5aca0eb851943c5aa4100e","url":"assets/images/nukkit-core-running-29a0538bd9c9c191aee3cf4118b655c5.png"},{"revision":"1091d963a8808832206df20e2fc415ac","url":"assets/images/N减减展示-e586599c5b6e1716133361d3a34a0175.png"},{"revision":"5b5b9f619bce00550788f37eb868d631","url":"assets/images/on-63e1d541c4c9de5b41d182aeea140286.png"},{"revision":"ced9a665c3e0b3d73a0e4100a0cc9cc3","url":"assets/images/Oracle-1-bc8d29f08208e6a87a6ae710bd3d9cb3.png"},{"revision":"3d18a844e9d9022ed13b6fee5d493b8a","url":"assets/images/Oracle-2-5410980e2bdfae97bebd6000077381b7.png"},{"revision":"bf571e1a8b03d3126d62d3693fe8c8b8","url":"assets/images/Oracle-3-f1e96335c6ae9fb30025417c33d8b0a8.png"},{"revision":"53b56f7d4dbf60062c5e2e0a49512243","url":"assets/images/Oracle-4-5650da48acfb6dae1f21ff89be5e388f.png"},{"revision":"3c2c4bf1bfc9b0d424bd8665fd52ac1e","url":"assets/images/Oracle-5-d0cb65f39baf7ec8c57916a81e991914.png"},{"revision":"5f001420bc4efe43af9f92fad87bc7e9","url":"assets/images/origin-c649add2e80f8e0e56f7a69f3f6332cd.png"},{"revision":"9a6382b17d4809c96848568150796926","url":"assets/images/paste-1-f9b464488c8ef04c2b5eee57683af4e8.png"},{"revision":"cc4fdb236969a75971bc91c4b8d07c35","url":"assets/images/paste-2-be07f8b06a2413081516a54f9a990a27.png"},{"revision":"d4b224372c1304021abaeb42228dba01","url":"assets/images/plugin.yml-c6d0b15344a0ebed3694780fbb5fb9a3.png"},{"revision":"9a57aea4f9fa2cc6e0f9192f3f3466ef","url":"assets/images/pocketminemp-core-running-68610d3b3173e3b52f5f1c57736ca67e.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"d99f3b7d509d7a7ad45ef97021572cf7","url":"assets/images/powernukkitx-core-rip-a6b695ebc905f7e2b4dd1bcc7269e0e3.png"},{"revision":"6fdbc877454241afa33f415a493d9912","url":"assets/images/powernukkitx-core-running-80f78172791a434359bea8ef8d148e5b.png"},{"revision":"32f2acd77df82462590f3ef0c284290f","url":"assets/images/QuerySubclasses-b136586da8818495c77f8ead3519151d.png"},{"revision":"0d229206feb416b2b32207aa3c9ec1f6","url":"assets/images/QuickShop-6300573a93839a6234a877ca1d17e33d.jpg"},{"revision":"230ab0fee144c68671b7d30a16f6afc2","url":"assets/images/remove-item-f43d2a3789816695cbd14761938fa1ed.png"},{"revision":"421bae2e500193abce8912ef1aca1019","url":"assets/images/removeindex-2dd066ef2708c0c7a83a6c993a6cb055.png"},{"revision":"9a506953d2611cf637f8bd5518c7f1af","url":"assets/images/SearchEvent-b9e85e59fff1a78e8cb9c008aaa6c075.png"},{"revision":"b252c66b692c74b114745a58a6f46a3a","url":"assets/images/SearchMethods-3c622ec35083b3ee2105577b481535c5.png"},{"revision":"ee6c0c2157508bda29654186d2526754","url":"assets/images/shangcwenjian-a2457bedcba5664d959eb277f2a7bf6c.png"},{"revision":"7061feebc0b9f4d043c927add59d9e89","url":"assets/images/SkriptBasic1-33f7a98b82d4e1ddedbad4d651f8f136.png"},{"revision":"a9a6602efd196abce1109d66c7049309","url":"assets/images/spark_start-cbc26a47c13a46094ffc66952d3dc35d.png"},{"revision":"2af106dcbb74b265e062d63aa0065e0c","url":"assets/images/spark_stop-d1af50615b6a3e1251f179e0e8460b96.png"},{"revision":"805f0e3c4a3b3c82e80cdbb9a9e0296c","url":"assets/images/spigotmc-1a4ba445397c755bc2a08085aca98220.png"},{"revision":"3379209f06637e8fa7e802b43d521e6f","url":"assets/images/Spigot搜索-ee30023f81de65d4766f39e5fc473dd6.png"},{"revision":"4d0e0feebc2ad073bbfb2fbdac91afb4","url":"assets/images/sublime展示-c4487487f3f1d91698a5875dff5c9b0e.png"},{"revision":"5aeaf6a6722a7187a01e94c6f1a1bb4f","url":"assets/images/TAB-2-50d4189ba4a6c6cec40c1ef2ab8e4f2f.png"},{"revision":"948c73d004e7b82a372cf94c86ab3463","url":"assets/images/TAB-8-f115860381c6c6457ea6ecd06f23b60e.png"},{"revision":"96493548fcb631349a4497af353ed42a","url":"assets/images/talentsaclogo-f9d205117a31b982927bfaed34eac254.png"},{"revision":"47a1786ebe3673b03b7c4a4d33092858","url":"assets/images/termux_screenshot-1b57d43e16118967fba29ef11dffe059.jpg"},{"revision":"bb071cdd3ab62251fdb23f2bbb6a61d3","url":"assets/images/tianjiahuiy-f135045e78f3cae3ae085ca5727755b9.png"},{"revision":"7dd0f3f62a413ad01ad62d2743ef5882","url":"assets/images/tianjiazdy-642888e7f5414fdd1c20eb842a9005be.png"},{"revision":"c3e79a270fd58fd4521ee579c043f744","url":"assets/images/tianxym-f1c52737f3ba0d8fc3b0312fd6953db8.png"},{"revision":"05eb3d62470b79587ed78e939e711d24","url":"assets/images/title-360fb2dd00ad49fcebe31e6bdc489227.png"},{"revision":"da20e2a00e57ce713d1d685b5b52d9f8","url":"assets/images/trm一定要看wiki呐-08a6ca6bee2d5759a58ad7b7cb1ef43c.jpg"},{"revision":"fb9faf0fc14a74f9f3fd0e1db8628dee","url":"assets/images/troll-icon-54aae7973142365e3ebcc713a48dd2f8.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"59881838c96621c6aabff692bcfaac4f","url":"assets/images/trollstone_v-462d0ff8ed3722ec018353c67263d5d1.png"},{"revision":"f699d597ab7ad63285a23f96af51c9b3","url":"assets/images/unzip-af18aaa262463a8aa70c76f1d08d3273.png"},{"revision":"1c831746df6d6598a9a4cb90f1283775","url":"assets/images/upload-cae0c44f9dd8c5f6f2eec340c1539dfa.png"},{"revision":"6bd39cbb0c5c57443da39464e5803af2","url":"assets/images/var_3-59084dd1519d2535566639f7a7c97e04.png"},{"revision":"8f52a672afc12ebf645a88f6930b61a3","url":"assets/images/var_4-4d7a9aa93051f16e249f3a7724eae826.png"},{"revision":"e0dda297392f0b75587a9aadee0c179e","url":"assets/images/var_5-5dce266891dbee0fabb3adbda90cbb94.png"},{"revision":"7fbc187406bb234d149904c69ef7e2a9","url":"assets/images/var_6-d657d44f33fc354cc9911008de45c144.png"},{"revision":"d578846335e1540b0f4731fd03b83b11","url":"assets/images/var_7-537984bea8960acf0f2086f342c3b171.png"},{"revision":"c7163e6699d42cda33a96801f2059cfd","url":"assets/images/vercel-login-85f1377f96ab97f9f40a41b33da14872.png"},{"revision":"690b1e63f85a7fbad307401620cf62ee","url":"assets/images/VersionChoose-dabef0ba09adf92bc4c22692c26f3442.png"},{"revision":"679144f6b4402cb950e29af3b57d387c","url":"assets/images/vscode保存和自动保存-2bb449e003c2188ff00f9cb58396a2b8.png"},{"revision":"ebcfc2b0ac5603c346d3369d7fc9539e","url":"assets/images/vul-tell_color-0ea3b9e53425611de4c3b1543569ecd2.png"},{"revision":"2d1854682907074e6d1e76978a463664","url":"assets/images/vul-tell_name-af9d73a85028294ad9b3753ae6fcbe63.png"},{"revision":"8582486dc950d7b7209785d4ff13d017","url":"assets/images/vul-tell_papiNoInline-683b384943538f641267b459596c19f1.png"},{"revision":"5bf8bbbe95169333754147acaf14ae6d","url":"assets/images/vul-tell_papiWithInline-06b6263c9716a6675c655c3bb08bf0d1.png"},{"revision":"6cdcdc828321ceb7809e94e69b594af2","url":"assets/images/vul-tell_papiWithJoin-c27a3fb4f724bc42eeef7674078bcf5e.png"},{"revision":"6808c7ce294ab84882c77d5dbaad5693","url":"assets/images/vul-tell-5e89808de28630eae313c2858a6b2501.png"},{"revision":"e1deeff288c41e3473a75a000dc0eace","url":"assets/images/web-tell-97c6594cea9e90c76ea83472b06b706b.png"},{"revision":"8515e3918a2e5c46ae5bd55349039169","url":"assets/images/wenjianguanli-5cca234ebb94201386cb3cdbd1d18c92.png"},{"revision":"a02e55982393c7d44eaa802d776e5b42","url":"assets/images/WindTerm-2d39383dcd57785be954d86553986fbb.png"},{"revision":"8ddc5f27f73b3f2bcb7c22d96459bbbc","url":"assets/images/xingjianxiangm-14384bfd84edc289d8a4d63547401a4e.png"},{"revision":"b2fb67b22de319177fddef17b41ab91d","url":"assets/images/xn-login-a42488ea20b998e81cf17beac80bc0de.png"},{"revision":"ec0ad9ea450b34f0c80f9c0bc3c7a3a2","url":"assets/images/ymguanli-0505ecd4f5e9b46d2b516a5cd3dac1f6.png"},{"revision":"6e209f960b1875e76b7f163befa6d399","url":"assets/images/zidingy-d1015457c1312127574351f364ec79e9.png"},{"revision":"9b0ab0f2c3d111ee1b9e19c6b577b8fa","url":"assets/images/不要截图这个啊-998c66db45ea2f2bb5347337e55ec991.png"},{"revision":"9f3258dfa65308545c9c0da842132106","url":"assets/images/以薄面表现vs以体素表现-082a76351a058f000b0d2e0af232c728.jpg"},{"revision":"f131483616b32bdfab1d4d02b5f3869f","url":"assets/images/保持一致的比例vs拉伸变形的比例-e746565d821ca63ab8ede58a6bd3b426.jpg"},{"revision":"a873e91e65264c8d24c1517e28819b67","url":"assets/images/历史版本-bukkit-1-6b37c964ef09fbfc276ef6a1bd849201.png"},{"revision":"dc655833f3e4bbc0e4ac4e1a85402904","url":"assets/images/历史版本-bukkit-2-0a7066acfca9d9027d4704017ef62a39.png"},{"revision":"70843a24bb2361527d338040329975de","url":"assets/images/历史版本-bukkit-3-814d80c25493d70ac8fca5f3fff8b845.png"},{"revision":"583f7ae7aa0e37089902329d3f5d258c","url":"assets/images/历史版本-GitHub-1-132461e09b0e5e9454559ed0ef3cb28a.png"},{"revision":"07b9ecafaa97ff0f02acbcb3e0d01931","url":"assets/images/历史版本-GitHub-2-76dd19217be2c436ee5e5d3fd3e9b6d4.png"},{"revision":"4c8cd9f8d9a609f90d4f2e371747d5de","url":"assets/images/历史版本-GitHub-3-d85fba30028ff65c944acf177527726a.png"},{"revision":"ba7f0c841cf7660f451848ce9295a513","url":"assets/images/历史版本-modrinth-bf53ac057b0047d6429a5301f65cbf09.png"},{"revision":"991aae6596b7358fbe22c73d60c2f0d8","url":"assets/images/历史版本-spigotmc-950e29526cf78beeabbcd7b383d7f455.png"},{"revision":"53d666d4289859a1fce7cb65c25fb56e","url":"assets/images/变量下载失败-b31f486f756a27b74456d12d65a2ea64.png"},{"revision":"46a93c27858e2ad7b5796e43b5293220","url":"assets/images/同类插件评分选择-64b93731775cf6281f4c69b2fbeae7e9.png"},{"revision":"1111abc039ba4001583cedd23ae1a698","url":"assets/images/啥是TAB-10e102aa01b98106dd66dfde46e3b672.png"},{"revision":"4047317a154e932ffc558c17a3657221","url":"assets/images/啥是计分板-17c9ff778263196d2ddf5b934ed97180.png"},{"revision":"4a65ef07a93556381ffd5a715a5a911b","url":"assets/images/均衡的细节分布vs失衡的细节分布-2d93e1768c4bc2382ac45145e12d0ee1.jpg"},{"revision":"501f59c58a99ec86bf894dbe2671e02d","url":"assets/images/如何使用Mclogs-1-ed2513937c90fd4ad25a6ee07ab499dc.png"},{"revision":"29a10fb4055038b1ccd2d28bb60fb5c3","url":"assets/images/如何使用Mclogs-2-4cb7cdde4a3c82444a9d8ad2ace340c4.png"},{"revision":"e3a15d4607bc3c64b173eac0601786b8","url":"assets/images/妙妙比喻-fe69cb2383277d89317aefcee98cd09e.png"},{"revision":"141ecf8a41ad0f29f3f54ef75a4e9054","url":"assets/images/子图标写动作-1eb8459e47c81eff3c50b48fa7ee826d.png"},{"revision":"81259c96410e2ce3da744fd94aa291e2","url":"assets/images/实体纹理-0b4d37466c3feca486a63a2da526e937.jpg"},{"revision":"09455ba6e8aae800a961e27a86f023d8","url":"assets/images/常见的HSV调节面板-11bd4ddb5767fe9972dc42b4ae1c2258.jpg"},{"revision":"2dab819137ad090d14bc2203b0f650d2","url":"assets/images/括号-9a9007d0231a0e26ee8baf6dec9b249c.png"},{"revision":"568d366e3beafc02072747ae5aec6b03","url":"assets/images/插件列表-a37819243f4b7a3d3ceb4b7022730e91.png"},{"revision":"5450e3f70932445cf80fde71da400caf","url":"assets/images/文件资源管理器-391e28e4b715ca877ad9428717dc18aa.jpg"},{"revision":"dcdecfda0639163f4cf584b995925aa1","url":"assets/images/方块纹理-76c866f9d6c94bc769fb6b8b57955d38.jpg"},{"revision":"097eff14c2a9a8d8433b36e0555b6681","url":"assets/images/旋转元素vs用阶梯状表现-3cc69f75bb38ebe80922da980b628c25.jpg"},{"revision":"bc4e3d7d095a38fa95ccb0f9b1a7e6de","url":"assets/images/查看语言-crowdin-50dd19aced266accb615cb74fdcc4d9f.png"},{"revision":"63c86dcee856e86d916685f802eb70c9","url":"assets/images/查看语言-spigotmc-60ee8e42daf342c4c8b726dd4651eae9.png"},{"revision":"ee41319bbc30117471b08b6c2d005ef0","url":"assets/images/查看语言-拆开jar-afda92973ce8deecc9f1ba7c5ee3a2ab.png"},{"revision":"5e1386736b2151cbbada7f116c832752","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-0b5219e82d3fe11eb4edd18202270bf2.jpg"},{"revision":"93ee2fc3e8eca947fcf60b2702c87bb4","url":"assets/images/没事不要免费帮人-bb3ff87710753c907857781c8c4c3bf4.jpg"},{"revision":"567cd1c561f2b816fa865c2b23f2c540","url":"assets/images/灵魂画师教开群组服-7ca5cdd4358a53b85459c4a47876a709.png"},{"revision":"fc33336f9ba300fbb086496fa4eb99b8","url":"assets/images/版本兼容图-30ab4d41dbe95909ba61a1047d86ff7a.png"},{"revision":"33a62cf42b304e8be182c89ac073868c","url":"assets/images/物品纹理-d2991664f3a44e8938fd9a1776c1215c.jpg"},{"revision":"001d4735c99c69b8a305cbb3c385ad61","url":"assets/images/白点-f8b960ac4fa48c3762046b2a69c8a4bf.png"},{"revision":"635e8d85ac7ed74acd6263d0a49e01d3","url":"assets/images/直线与曲线中的锯齿表现-71f3af753d62a6d3d6a5d2d24e8e3241.jpg"},{"revision":"9e33dac3dd42fa62940d388ece11b910","url":"assets/images/箱形UV贴图-379abc8032f2d53391efc96e69182e21.jpg"},{"revision":"1f8f19475fda34e5fd76cceae7adc2be","url":"assets/images/经典老图-1-7215e8e54895c8cd3b605df02a4af7a8.jpg"},{"revision":"13f935518a4ceaac26100ad0a6fa1bc8","url":"assets/images/经典老图-2-ed83429f604efa2593c139aff0ae9469.jpg"},{"revision":"a9ccd65573590b34b793b241461aa7a1","url":"assets/images/经典老图-3-3f4709fd96c694912dba0cd6a885406b.jpg"},{"revision":"117eeed9d3c373097eb7388b24878eae","url":"assets/images/翼龙面板-9edc8c62b2290b77da427b51777c49f4.png"},{"revision":"e0461a8aceda782eb947f91fb65ce177","url":"assets/images/自动UV-0b9e8ee30aa327663e3e79c54d9585f0.jpg"},{"revision":"bb3158215934b0d25a25bdffc253fa74","url":"assets/images/识别纹理-35ce7e2a3d491825f5c83c225f6becca.jpg"},{"revision":"0c75f94da34931c093e2255fb8fa570a","url":"img/back-top.svg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"f01a98e8ab78bb5158f33bcaf91869d0","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"1665c999a63140588921d0508265f205","url":"img/logo.svg"},{"revision":"db5e56bb21e1ee27ddac572199724e08","url":"img/nitwikit-banner.png"}];
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