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
	return "1.1.5";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.1.5";

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
    const precacheManifest = [{"revision":"8b1a8cbd3f2732410fa3f48b6a4afd29","url":"404.html"},{"revision":"da30008a3dc72e39c16b83cc20f26726","url":"advance/bot/framework/index.html"},{"revision":"7b288383caf52f867cbdc9bdff74b3a1","url":"advance/bot/general/index.html"},{"revision":"7ad68a41d39e5e7535cb545609b96010","url":"advance/bot/index.html"},{"revision":"364d7348fe5c4bdf8f08b8e6ff223bdc","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"7bcd4903a07b568253703bcbb2840aa9","url":"advance/index.html"},{"revision":"98c1b33602851c780d92d2582d5cff83","url":"advance/Linux/backup/index.html"},{"revision":"c4468127364ac20d19acd7b818adb049","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"cf49ce0bf0c77bf6abff5a1946820c14","url":"advance/Linux/frp/index.html"},{"revision":"fe2b34432e1b220dac78239220964b5d","url":"advance/Linux/keep-running/index.html"},{"revision":"1e367456cf263f72663f643805e71a8b","url":"advance/Linux/start/index.html"},{"revision":"4d7d7b0cfa80477618172b16990f91c2","url":"advance/open-website/index.html"},{"revision":"960aeaa2cc96f84a452db5cc02f4d2fe","url":"assets/css/styles.5ba70662.css"},{"revision":"12a5ec3d6ffc750002afbd7456766a9f","url":"assets/js/005c270b.29b15869.js"},{"revision":"0c5af6254cf986b1a39982cc77afc2b7","url":"assets/js/013c8c14.46f372ca.js"},{"revision":"7675f54772608836d1b00d3007f09e27","url":"assets/js/026f291b.ef4e001b.js"},{"revision":"c40ac835b9de6fd399ee229c916bd527","url":"assets/js/0272dc73.f8a2ed9c.js"},{"revision":"bc237e18b35c8440c55c9c8269eba080","url":"assets/js/035cfa77.d9466a99.js"},{"revision":"fa0da1b6212274e3c3c3b459a349b110","url":"assets/js/03b205ee.9c22c7cd.js"},{"revision":"22c663fd327186402baf59c0e64112fd","url":"assets/js/03f997a1.c21271c3.js"},{"revision":"1fcd9120bb06bd84d49a595bf28f4029","url":"assets/js/043fa146.73d43fef.js"},{"revision":"fd47b7d1d1989abec5bc878a216b6c57","url":"assets/js/044f41a1.2026124f.js"},{"revision":"111267e7ac95209c7230d9d4d6f24355","url":"assets/js/04f5c692.b2909b28.js"},{"revision":"6cf63168cdb6d00bf5f5d3527eda713a","url":"assets/js/052366f7.7d5f225f.js"},{"revision":"01c11a391f2674da097acea6dd86ed0d","url":"assets/js/053e2f33.d404b971.js"},{"revision":"4a8b99a52f564396dcb4d29d98929216","url":"assets/js/058608ed.83f28fa8.js"},{"revision":"87996152b652082e362ecbadf2d60122","url":"assets/js/06b0ed59.566c14b4.js"},{"revision":"d84ab54a1531f1971a2976dd401ecb33","url":"assets/js/072384a4.f8538cab.js"},{"revision":"38f8219b8ccc3566266a27a46eb9f8df","url":"assets/js/083acdf9.6aa6f73e.js"},{"revision":"11b399e1c65ccb59adfde37e35b95744","url":"assets/js/083ebe2e.d4240d4a.js"},{"revision":"a56b77460927f7a98ff8b5f2e1e87bd4","url":"assets/js/08e7f72a.491dbc5e.js"},{"revision":"6f1b42c7dc084420c3266c5aa757b035","url":"assets/js/09156d2e.83884c8b.js"},{"revision":"0d2f2f0814aef0c16af0e922677befc6","url":"assets/js/094a7dd6.bcf78c84.js"},{"revision":"0894ce26aea7d9f8d2ba6ae6d8efc0a9","url":"assets/js/09714880.d41f2ba7.js"},{"revision":"61c84b101c6a3ccf746c57e2a207e8b8","url":"assets/js/0a17cf6d.070a25fa.js"},{"revision":"f52df0007d68f63fc4c883ecfbfc0f0e","url":"assets/js/0a1f9916.e015989a.js"},{"revision":"32cc25b5fe9254d1651fb2f344999906","url":"assets/js/0ac0b3b7.9f9e53fb.js"},{"revision":"5f8f9ae9e4f8cbd5acacf1e0a5470872","url":"assets/js/0bc00c24.b3c03f94.js"},{"revision":"4dbb14faf84cc6503143278304034132","url":"assets/js/0bcb5d9e.0f6aeb28.js"},{"revision":"47d57946351262a61b2aa4f485e12adb","url":"assets/js/0c20e5c5.b5e3b50d.js"},{"revision":"2b2bc045b864d7e55b664eda4adf06e8","url":"assets/js/0c7f12b6.dbf93998.js"},{"revision":"7e414207a69e568cfb344829d4817eea","url":"assets/js/0e384e19.4f84fb9f.js"},{"revision":"bdf248a75b465dae3f319dec102a405b","url":"assets/js/0e9ef1fa.5c5a5c6e.js"},{"revision":"bf0f2abeb199acee0544878b86e32a7d","url":"assets/js/0ec7bf36.deed3ad5.js"},{"revision":"fb3c907dc6438a3acf8e6b5039788179","url":"assets/js/0efa0f03.2c58362b.js"},{"revision":"3eb590c25c867103270023e3e3abce9a","url":"assets/js/0fc807d9.8fcbbd61.js"},{"revision":"81d2b227a4bb0e212d68c201e2e1c0e5","url":"assets/js/1127.91b1aa4c.js"},{"revision":"f2b8e4865c941c8c4430423ddf5dafba","url":"assets/js/11f90be3.7cb15036.js"},{"revision":"b219e5b14a2a987ce8395345956c2b15","url":"assets/js/1210f0b1.b518c31e.js"},{"revision":"864b253e2d3d92dbe8dd2f7efd48c167","url":"assets/js/13dd9964.3af0c305.js"},{"revision":"10082871a1491a846d472392410fac4c","url":"assets/js/144520df.315f6a7f.js"},{"revision":"40fa841a4c79ec1777bc76518d93bd7f","url":"assets/js/149.2218b71d.js"},{"revision":"a8f144fee6ea27728c2122ddc378eaaa","url":"assets/js/14eb3368.910ef780.js"},{"revision":"86533923536ee914cc47f314fac539f0","url":"assets/js/15daf372.d71edd5d.js"},{"revision":"0558bcc2222221f2803ba07741117d91","url":"assets/js/15db17c1.ed78852c.js"},{"revision":"52386369af5936dd9449423e6324c432","url":"assets/js/15e4e3ed.41599ff9.js"},{"revision":"80b84b3a7e963763ae5b0bc83b84099c","url":"assets/js/1603.a70edea0.js"},{"revision":"84df43dac345403dbc4a0f265a46317f","url":"assets/js/16731d58.aa67ceeb.js"},{"revision":"dab0ac152607aa12ee6aa84101445797","url":"assets/js/175f0af4.41bf4894.js"},{"revision":"7272d38992ae0a4345f85cd6e24fe03e","url":"assets/js/17896441.978c054c.js"},{"revision":"1f576cb8fc19809dac488a6eada0a48b","url":"assets/js/180bc163.0db5fe21.js"},{"revision":"4b90ace65625b82dbb44517cff8a9b49","url":"assets/js/1856fe2a.dbcff4e8.js"},{"revision":"140fa5c59b3303614794159626e9b3b1","url":"assets/js/185d6330.41b8d66f.js"},{"revision":"11df5061afea8da8f78b3f3dbbbf6ea0","url":"assets/js/1896e6f5.b1e44b7d.js"},{"revision":"848be10b1a6355ac2d089d2c5bc0286a","url":"assets/js/18b67442.2669e1d6.js"},{"revision":"ed353e382d63334ef0d6e9acbcf6aa10","url":"assets/js/18bca995.2958579a.js"},{"revision":"e197a8762d22f0d3aafbe8a2ea02ad92","url":"assets/js/19045c37.f3f870d7.js"},{"revision":"26135c769ae824b7c699a77ccb23fd0a","url":"assets/js/193a055b.25239187.js"},{"revision":"95ed2a630b005635a636d80734695b1e","url":"assets/js/198ea2e3.7f2fe60d.js"},{"revision":"bb32d9ee2d05b1cb6f88d39553adfb8f","url":"assets/js/19cf8050.a6166b2a.js"},{"revision":"35033b2656b9f9df84db74f437f05080","url":"assets/js/1a4e3797.e9368844.js"},{"revision":"494adec8e4f3d463f7573dcd86112b23","url":"assets/js/1c42be93.372f5f12.js"},{"revision":"df2c945d9564da2016ec79ed30bf30ab","url":"assets/js/1c6846f9.f11ac7ba.js"},{"revision":"4e532f8fdae0375e6c6509c13a5921c7","url":"assets/js/1cf75b4f.5d57679a.js"},{"revision":"c6585707a1ca4d500cbff725c1905610","url":"assets/js/1d1b9adf.19ddbe4e.js"},{"revision":"90f784ed3c650bc2c42983b7a88f4e25","url":"assets/js/1d42ad15.f34c1db3.js"},{"revision":"18db72d7bd1ded8179cf94b679fa8612","url":"assets/js/1dfd2628.0b98e6d7.js"},{"revision":"b2bb93dd219372a573230abced987ece","url":"assets/js/1e47cbc1.22809fb0.js"},{"revision":"a780e88262d27cfef254ec376c9ecd35","url":"assets/js/1edb7625.7c36d968.js"},{"revision":"8ebe12e3d831d934481f2a28b59e8230","url":"assets/js/1ee6f0d4.b5a6a1a4.js"},{"revision":"c648fda2e61b6a50934747091d374c6b","url":"assets/js/1efacac9.8c1d8594.js"},{"revision":"73119211469bdbb8f437aae57e4394cb","url":"assets/js/20215aa7.e592c181.js"},{"revision":"a823bbea3530f0f4a7e9861dde690b8a","url":"assets/js/2070.2dabe3e7.js"},{"revision":"f805dc89bd4181462c2d65bee5e8d737","url":"assets/js/2096.a76ef16f.js"},{"revision":"ad0ea6af661d499c6702c4d85fcd6a3a","url":"assets/js/20d69604.05c6dad3.js"},{"revision":"5ff9644d128e7236934b92ba44e6378f","url":"assets/js/2148.0e000603.js"},{"revision":"57a74e7fa9abc264ae8a2fea518951e6","url":"assets/js/21484c29.5997124f.js"},{"revision":"c568982fd0e38231f62586d43c5aa975","url":"assets/js/21c534b6.70e0b2c6.js"},{"revision":"441a246ee13c8d563e1d77454f27256b","url":"assets/js/22dd74f7.4fc2b7f0.js"},{"revision":"8db6eecc5a8d09772db1679a0987f625","url":"assets/js/2351.83cc3a9a.js"},{"revision":"4f00a21a9ef4e52c869c64603d2f45b0","url":"assets/js/2367.aa2d2eba.js"},{"revision":"e42747f949adce1c406cbe9f6c51b453","url":"assets/js/244418a2.a4e77030.js"},{"revision":"c98c0d96f17d027f16ef260b3cdf9e66","url":"assets/js/24a68a77.1cd8ea69.js"},{"revision":"4dd542a3a69068f759910402e1a7537e","url":"assets/js/24d8f7d7.32e6313e.js"},{"revision":"b9bccb0f73aa601433710bb6049f62be","url":"assets/js/254a43c9.fabe77d9.js"},{"revision":"70466b766105e327152d64e578f5a48e","url":"assets/js/2867c0df.532eecc5.js"},{"revision":"d61267de5201a1bcf8c1f5985d31de3e","url":"assets/js/28b71cf3.0ad757c5.js"},{"revision":"6b15b98cd16e6af1840c73029da7b82f","url":"assets/js/2a71d676.9ba3e2b3.js"},{"revision":"a8969bdaa547ac826928e86c46602b33","url":"assets/js/2b4e0304.79152b5b.js"},{"revision":"e114fcbe15fb574d2586885cc954f055","url":"assets/js/2b9de2c0.c0770a66.js"},{"revision":"5c37b4c9fdada102b976df4586024558","url":"assets/js/2ca153e3.97b304c0.js"},{"revision":"7652bf1d9f834a70510b66a7dec051d1","url":"assets/js/2d386ab7.19b100ce.js"},{"revision":"a6bd762c8f5a2dfbc93ab04b4eeb3821","url":"assets/js/2d5e3179.21eadc2e.js"},{"revision":"23352935f28c3101bfe0b2e68293100c","url":"assets/js/2e79c762.fa7b7eaf.js"},{"revision":"aba734b837374bbad095ddb765c52f0a","url":"assets/js/2e938706.03775b8d.js"},{"revision":"77224e3b92e9c48ff325a428473a702e","url":"assets/js/2f39a0af.75dba535.js"},{"revision":"d3f1e738d68ae636b84857fda9d2aac5","url":"assets/js/2f8ede37.d53c663a.js"},{"revision":"02f8218cce49cd2f2f414a0252cae667","url":"assets/js/312f6c84.36ff83fc.js"},{"revision":"2d617c18bb935280e66da40904978238","url":"assets/js/31735ebe.9812c729.js"},{"revision":"953b695f133a5e7781a42743fe537d59","url":"assets/js/32cf0cce.42ad5d2f.js"},{"revision":"8930958d2a5bdf6a6510d57765da69c3","url":"assets/js/33261842.a52acadc.js"},{"revision":"d06faa188047b99675427e93919aa3fe","url":"assets/js/3425fb39.d3fd6ac7.js"},{"revision":"acc405af2a3cf3d3f08decc30eca0225","url":"assets/js/343bb2fa.9f5530f6.js"},{"revision":"b1f8e47dbb91ae5946e15215d06cee7e","url":"assets/js/3448.a00f5493.js"},{"revision":"7ab6b6ab5d773693079fd5c5517d4e30","url":"assets/js/3488027e.75f7998f.js"},{"revision":"1ec9d6decf38cfc537c9829211b76528","url":"assets/js/349d9c34.d81c9e98.js"},{"revision":"250588f4dbf2dab822cb15eac7e20a15","url":"assets/js/35d30f29.2596d255.js"},{"revision":"0497e2a9d9b9c253f66778040fd43cce","url":"assets/js/36c75202.6b28edd2.js"},{"revision":"897d1359c403bd89531b2b00ef4c66b3","url":"assets/js/3749f972.6c06eb13.js"},{"revision":"58b51f49403fb880a2bcf37340e50672","url":"assets/js/3817.229f8674.js"},{"revision":"36c02f037da852f2fc764ce0657e2c77","url":"assets/js/3884.83d303c3.js"},{"revision":"91f4094621bc3f1f8005ccdf33e7fd6b","url":"assets/js/38b0474b.b766550d.js"},{"revision":"fd7f9480970208c224f976bfec95675f","url":"assets/js/38b71911.3416f7eb.js"},{"revision":"0ba2b94d7a1c3c37fb3e5c40cb132a65","url":"assets/js/3966.aa8b2229.js"},{"revision":"617a4ccd730b6fa54dea4580f0b61f63","url":"assets/js/399101db.18ed1940.js"},{"revision":"713839cf02fdbace51f710aa5624d0a9","url":"assets/js/3b8970d0.ed9ed149.js"},{"revision":"dc37919d22fcbecb97e46d246e3c8d6b","url":"assets/js/3bb1ea30.dcc96f01.js"},{"revision":"6ca4d98bb6dfbb366b3d75e3d6a3b3e6","url":"assets/js/3bd1ba02.988fa144.js"},{"revision":"b1db5efb97d7e94f4ac36f8e47791779","url":"assets/js/3c5393f3.73efa1cb.js"},{"revision":"64806f1e3e384ec45bd3f81d7e93ef78","url":"assets/js/3cd38fda.aa81e341.js"},{"revision":"a3f1e6ae96d1b4a0f3117e8526fec783","url":"assets/js/3cd65ff0.4799c351.js"},{"revision":"9b0a6c8bd020d78babe41d0f5e727328","url":"assets/js/3d7f94ff.3801ce82.js"},{"revision":"ba6eb8b6365aca1cda4e98519c0525aa","url":"assets/js/3dd749a7.df428515.js"},{"revision":"1e8e100b25339d7e3cf7c2ea55a7d402","url":"assets/js/3fbeb9b5.a8e6cb88.js"},{"revision":"c7dac7f16bf5abec41f906ffb82132cb","url":"assets/js/4067.06f26c93.js"},{"revision":"88bd35495fa688e61fa428f668af0598","url":"assets/js/4090.34b6f359.js"},{"revision":"bcb41a252a68d79b12e911ca0667bbd7","url":"assets/js/40c17158.e7521298.js"},{"revision":"2ee8aa7d48b45f5128df9efe94d287a8","url":"assets/js/416679ec.4e3f6b87.js"},{"revision":"65c7321384a86ee6b91ea6698f710df6","url":"assets/js/41c0ace0.cbcf2adf.js"},{"revision":"b63af6376690f68782c7c35e2fc26e04","url":"assets/js/425e3dd1.c9006195.js"},{"revision":"52d662c3e0218e0b42e6334b5f4ad5c3","url":"assets/js/43117a18.1b62fb5d.js"},{"revision":"6700e949612de9985344d5dc1aac624d","url":"assets/js/431266e7.03b9a157.js"},{"revision":"df217e33d60635ce6cff77428b48a36a","url":"assets/js/445c22af.ed2b101a.js"},{"revision":"6e0a7c80d1365890511b3218685d98ec","url":"assets/js/4487.72172008.js"},{"revision":"ce455a65c6f933864fdc26fd70e50b03","url":"assets/js/44975943.183a228f.js"},{"revision":"a47245bf12e16769629f088041691d14","url":"assets/js/4502.a1477249.js"},{"revision":"9efdaba350e85f6dd3f14851942b21b8","url":"assets/js/459.53989398.js"},{"revision":"5f4489a862f840ba3738106990935cf2","url":"assets/js/45cd711d.9f451c5f.js"},{"revision":"0c33264fe767c7e8729e8f8f6c86c825","url":"assets/js/46bf3d5b.ca7f375a.js"},{"revision":"2b0d817908fafc7347ff0ba1c4468f79","url":"assets/js/47198c5c.47d26571.js"},{"revision":"8e2a6e8e4af10e69561f272be8b9d6fc","url":"assets/js/4806.b515c0a3.js"},{"revision":"7fb6f209ca755e288d5b4e2a5195b000","url":"assets/js/4838deb2.0b873023.js"},{"revision":"215a873c07b79a73ac960bc6e2062820","url":"assets/js/4876.71c61a4a.js"},{"revision":"75cdc3a425f75cd9f9c657379c9a4ad5","url":"assets/js/4985.3e3e16d1.js"},{"revision":"a3c449deef61d1f9c60ec71f2c655eeb","url":"assets/js/49aec60f.ea75310b.js"},{"revision":"21c04d52933617348a5eb866dcc3c731","url":"assets/js/4beb5b8c.09dbd67f.js"},{"revision":"ff3a4de2a2267ccaf106531e6a83468d","url":"assets/js/4c59ca14.a4037c13.js"},{"revision":"f6c01d7164e32885067928a624847f95","url":"assets/js/4c7ea6db.48e730a8.js"},{"revision":"63111e37600649ae5d2e661b5855be01","url":"assets/js/4cdf84ef.e47ba07e.js"},{"revision":"b8b1ccc1f2d988d70fa66c5f708989d9","url":"assets/js/4d27c60c.81298f5a.js"},{"revision":"721b10fdd19107a1259d5ce0c4f0f1a5","url":"assets/js/4f644c0b.500a66b9.js"},{"revision":"edf65c2437bf8a48e03721a74fb829da","url":"assets/js/4f8bb2fd.db33aef0.js"},{"revision":"7ba4b2c58feede94fb1a365a407f984a","url":"assets/js/50b793dd.a8ce8544.js"},{"revision":"b1fa3443b5298e7c7ec9563b084a2a8b","url":"assets/js/5123.87695849.js"},{"revision":"fca2bf503cd594563ef31b1fdccf83e2","url":"assets/js/5133.10f92c33.js"},{"revision":"99415636f38bdc89904395083c8b7cbe","url":"assets/js/51ebfdb4.2320ce1e.js"},{"revision":"ddda383c1bf185a60204f92cd4af2bf8","url":"assets/js/522fd580.72450efb.js"},{"revision":"3efee2d1325259d959dac0a48d171e3d","url":"assets/js/5238.1dba83ab.js"},{"revision":"b37b21631c57a06ab198a14f2cb326a4","url":"assets/js/5410.3f21a21e.js"},{"revision":"d4eb04292bffb6ccd98231d70088f72b","url":"assets/js/5416.ab24c54f.js"},{"revision":"69f6199c98b9610f926e79e9d8ddd209","url":"assets/js/541d5637.de91c674.js"},{"revision":"d6a9c480d42f8471b7a9bd80456fbf0c","url":"assets/js/54a35160.379cabc7.js"},{"revision":"66c4199bedc5cd75bef2bc721b997ae6","url":"assets/js/5550.48b04937.js"},{"revision":"ea09487c9f9f1b7426970a6a52772000","url":"assets/js/55aaead0.85eb10ee.js"},{"revision":"072c28bb979c739d1a03e717327acd18","url":"assets/js/563b5c65.c2dfa778.js"},{"revision":"92438443c3ff490b041e619e6fb08b3e","url":"assets/js/5722.17ffa2b2.js"},{"revision":"29a9b2cc5752b3449de3662b90c7c0dd","url":"assets/js/57ecc2b7.20fc83c2.js"},{"revision":"214332d0c8df1e55a8df3c6a45f56f99","url":"assets/js/58284325.cbf0d9c9.js"},{"revision":"ece96122fed0d4a723d1ec816ebc6a15","url":"assets/js/5840.2bb71604.js"},{"revision":"6689d25d4ac63c6040fc1c6954e3b968","url":"assets/js/588dd44d.b4c7f471.js"},{"revision":"24d226d1cd5047b242ecbd885ac92f2b","url":"assets/js/5893.ada31b13.js"},{"revision":"a94837bec03ce2766e9157ba5a27522e","url":"assets/js/58fa4e48.c032878c.js"},{"revision":"772492d629c885bc75878718689cf592","url":"assets/js/594bb6c0.2ae85301.js"},{"revision":"b8cd4e9d936ae6022fc46ade1e315e1c","url":"assets/js/5a5e1dd9.03848dce.js"},{"revision":"5fd142ba85a5a20a575c4f73ddcaca24","url":"assets/js/5b10224b.2a43a9a7.js"},{"revision":"8e216e30ee89fe6c051c02984d5d5671","url":"assets/js/5cdb4525.0810a3a9.js"},{"revision":"6ac56de88b1e5bb93dfd0a8507d70a96","url":"assets/js/5e6d1f8b.a41db8d3.js"},{"revision":"231366a1679cc5324b389c3d478648e3","url":"assets/js/5e95c892.e3211ffe.js"},{"revision":"19932dabe73408cb2049982472f88d8c","url":"assets/js/5e9c3b6a.89b964c7.js"},{"revision":"0a8c03efad0c67580481b065194db559","url":"assets/js/5fa838e0.cabd530d.js"},{"revision":"c1f1d8aef9878921f1e87c8b73a284b0","url":"assets/js/602bb363.33a6d57a.js"},{"revision":"ed90e66332ce31e56949af50bce16073","url":"assets/js/60c781d5.68ad0b38.js"},{"revision":"91ba01314b4840b3aaa6c2a83ce1ea3a","url":"assets/js/6147fca6.1d0dd9a1.js"},{"revision":"35edfba89860ae74b9c969160de2ccaa","url":"assets/js/6203.acd61e9b.js"},{"revision":"f4f786a330520826638b931ef0b11a71","url":"assets/js/622bc3c3.4e55944a.js"},{"revision":"2b6bcbb233793d8277e5a7be7f6d9832","url":"assets/js/6309.f717687e.js"},{"revision":"6a4d4991e5ee82bacab6143fb6b601cb","url":"assets/js/635cb825.08ed08cf.js"},{"revision":"fa1948ee8596dabb2835aab064615ade","url":"assets/js/63bdb67b.723ab39e.js"},{"revision":"5b0aa4f2c481fd1f78df3d440a3e2b68","url":"assets/js/6415f59a.44e7dab5.js"},{"revision":"cc823199eb0bc9092246a828680d9635","url":"assets/js/6444.703c278a.js"},{"revision":"f4087cbc8a4a438f910f3c469c6b9159","url":"assets/js/64614d1a.a044f739.js"},{"revision":"10992246b15e6732d8a56e56899582f6","url":"assets/js/6557cf1a.eeb90a2c.js"},{"revision":"682f3aa3bd311ecb05460bedccc6e198","url":"assets/js/6577a0df.3eb76ad0.js"},{"revision":"7d82ddc85f044d1341b2755084a2cd38","url":"assets/js/65bc360d.abce1415.js"},{"revision":"a44aef869d99741b70d00040a59f9c71","url":"assets/js/6679.7ee7da78.js"},{"revision":"9adfbf2b020d8cbc6579359de4604e4a","url":"assets/js/681b7af4.f2b5f76b.js"},{"revision":"5c83bd02dce574e747fcc0e0bfd37778","url":"assets/js/6886.2de0fb61.js"},{"revision":"0df95e82ba0de665663118e9c76217c7","url":"assets/js/69df999c.93134de1.js"},{"revision":"8b3a775f1dceeeebf41029fa0b53e3a1","url":"assets/js/6ad9afaa.97733782.js"},{"revision":"e08fca342931e675389ac552fae3aec3","url":"assets/js/6b555c96.b2c485f6.js"},{"revision":"e39692ed7b38b69275e3bd127f25e660","url":"assets/js/6b5d6c58.aefea91b.js"},{"revision":"1ce3b9daaf111168ab89db14964f6bd0","url":"assets/js/6b902128.eda37a28.js"},{"revision":"d27b7369a57e649f2fd693ba7c810da9","url":"assets/js/6bcd55bf.33e02180.js"},{"revision":"00c3531974e82185c387b0388564fde8","url":"assets/js/6cd9d647.9f7fc9f2.js"},{"revision":"d448916232ed0803b07a8cf26722ced4","url":"assets/js/6d5efd36.ca0ebadd.js"},{"revision":"566c6d60463efddd7b8a2bde74b2c47a","url":"assets/js/6d630ffc.89b7ebe0.js"},{"revision":"d330adb55c1921bc1befd0194c8877f9","url":"assets/js/6d6bd066.310be1ab.js"},{"revision":"99008c3c53473c16b3d1a9f9b6a79743","url":"assets/js/6e3d6b93.917c861a.js"},{"revision":"3b9fc67923203478c367e919963ef0e3","url":"assets/js/6e889b7a.dee16569.js"},{"revision":"03a77af9cea8cd6cec8ca72aa1b421d7","url":"assets/js/6f2b2af5.4ecd39be.js"},{"revision":"58887f42513e137b4d915652d4994ac1","url":"assets/js/6fa58fdb.7b6a16b1.js"},{"revision":"e588fc6d09c09d3f3e927eb2c57898f7","url":"assets/js/6fedb7a3.ec13dbb7.js"},{"revision":"15a7895e9645cbbd6a1fed90ab1a05f3","url":"assets/js/70321d34.342e05d8.js"},{"revision":"8a11e1741d58cfb062a666d416796336","url":"assets/js/7051e035.7f679256.js"},{"revision":"1e3b3665937f83f4c5d4d3f0fd4c2463","url":"assets/js/71bd92ad.6c673d58.js"},{"revision":"4ed3ccc8da1ea191ba642780ec7ad9d5","url":"assets/js/71c41cca.64f73567.js"},{"revision":"e490a6383d6c92961048b8b27bf43651","url":"assets/js/72b3e7dc.35739dd9.js"},{"revision":"3c710d09ac82e536c552a3c3c9dd98df","url":"assets/js/72fea898.2dc65d13.js"},{"revision":"56f2620bc324efdcd75eb69f2d28b172","url":"assets/js/7300.34e6497c.js"},{"revision":"a0766690c7547e94b63fca8b72b53054","url":"assets/js/73c38494.9fee8dbf.js"},{"revision":"c9ea36a2688cc47f535aa0dc8cea791d","url":"assets/js/73f32b8b.3da341a6.js"},{"revision":"bafaa7c983298eccd68dcd2f7b909c48","url":"assets/js/754296bb.72d84359.js"},{"revision":"0afc9c251d9b6299bd440ef5eb3a96a0","url":"assets/js/7621.ce91278e.js"},{"revision":"307885c6c16526d1db578e520fe22651","url":"assets/js/76a305fc.6699f9b8.js"},{"revision":"8154c74f9291ff550facbad3e60d9213","url":"assets/js/790b642d.a2de4f52.js"},{"revision":"6388a1f8586079e304287cb3e4094aa0","url":"assets/js/79899b57.4cb4d4f4.js"},{"revision":"919d793523f466eff9e1e6a7eed6c125","url":"assets/js/79ee951b.42aac127.js"},{"revision":"110472190e7730e5244f99cbfeee93c3","url":"assets/js/7b35ddea.66b2266a.js"},{"revision":"ec3700c95afc3ad9860d0746efe0c81b","url":"assets/js/7c0411e8.46c7bf9f.js"},{"revision":"1e1711f140ca1f90f0019e7797c8724b","url":"assets/js/7c328fb0.8c0e9366.js"},{"revision":"96b8656265ebae43aa473b8b6f7e91f0","url":"assets/js/7e75dadf.f12340d9.js"},{"revision":"6b6326f8a8f912edd294bdb1a0b14afe","url":"assets/js/7e7a4c7b.4be5c043.js"},{"revision":"7e6ea7ac3e3a01b335a4c3b6639f7443","url":"assets/js/80f373f2.5aeda224.js"},{"revision":"5603ca34409e6963dc8dc5752fb37c00","url":"assets/js/817191e9.2a8b8760.js"},{"revision":"a1ad94703edd994346bbf1a25a41ecc3","url":"assets/js/824c452b.2616caa2.js"},{"revision":"d63f9ff1688d2c6485b76494fa7e6a86","url":"assets/js/82c03827.66a8cd08.js"},{"revision":"224a214b71a0f36e7bd71563d1345efd","url":"assets/js/83236138.51b66e5d.js"},{"revision":"df7b41fb3ca28fac41ef36b7dc95a65e","url":"assets/js/8336.193c3398.js"},{"revision":"20ae4847edbbc72a20662cb4cd07ae07","url":"assets/js/83fa3eff.0b48b9ae.js"},{"revision":"03201c12a3da937ee7bd810d79ad19bc","url":"assets/js/8470.ed37ee88.js"},{"revision":"f75a8897bbf9c32b99344f20f667381f","url":"assets/js/854b257e.6e4ef12b.js"},{"revision":"8c79444d4e57756dc5ffe370fa9328bd","url":"assets/js/85ccb835.b4aff11f.js"},{"revision":"dd58bf89f24fa913f00aab0093ad96be","url":"assets/js/86170a86.dccc69fc.js"},{"revision":"dfd247851c9952f3b0f43832554d3449","url":"assets/js/8648.d9a3b348.js"},{"revision":"096add9173d0dc7659c2906289c365da","url":"assets/js/8660.adad2101.js"},{"revision":"287a437f9cfd7b26a6ed62a9183c136d","url":"assets/js/87531641.fb0c4f66.js"},{"revision":"60c6b63b17c3b8fac38f79f8e92fa76a","url":"assets/js/8798.4070d3ed.js"},{"revision":"6a411e33ccefb102bbce9dff8cdd8a75","url":"assets/js/87d5db97.42c5c315.js"},{"revision":"e9efe8a262d78c06c94a6c08193513a6","url":"assets/js/883b3acd.f2c49446.js"},{"revision":"5382c5f802dc5d68a7ac9c83e14527ce","url":"assets/js/888a5ebe.56cb4df0.js"},{"revision":"2c23cfab885427922c535956002613b4","url":"assets/js/8921.8e17b509.js"},{"revision":"9195002f0f7a69df65cc59f707343004","url":"assets/js/893c6fee.95008ed5.js"},{"revision":"14a41b2607930e0e9cc5606078b0ae5d","url":"assets/js/8a082959.087aaea3.js"},{"revision":"e407fe7802b2b88b0e8308d9b5740afb","url":"assets/js/8a578643.5b70d361.js"},{"revision":"0ea73b519e44506b0ded455e64f6aa46","url":"assets/js/8b23f58f.34079c75.js"},{"revision":"bd7a0fb19de3606161680ceb6d1eb741","url":"assets/js/8bdaa531.06fe8ddb.js"},{"revision":"644b32c5698d43256eca2420ce1bf234","url":"assets/js/8ca7e4b3.fcbb52a8.js"},{"revision":"1f6229b239180969273e84b243abb081","url":"assets/js/8e0be0d1.81ba1e50.js"},{"revision":"d4155dad260d4900d83640a3d2a82836","url":"assets/js/8e6a4e74.d9404516.js"},{"revision":"f08a7fee5f3b3e9c4188ae967ab34cb7","url":"assets/js/9076.554bf876.js"},{"revision":"7d1765b0eafad3bcc19001994be6446d","url":"assets/js/9197ae7a.0b9cc0d8.js"},{"revision":"488361f79094d0bcb7d70d209d9ed090","url":"assets/js/91e8ffa7.98e06ff0.js"},{"revision":"0be826526e4edc914b826c9e18b59a5e","url":"assets/js/9229f78d.14d70a84.js"},{"revision":"ff1429152e3055b569436d38a8d3aff9","url":"assets/js/93456434.e00102d0.js"},{"revision":"d9cc29a21f3cb7542b422e5268a3d898","url":"assets/js/93486759.bfa7bdd6.js"},{"revision":"89dc87cb3d637d3a77ed4059cc234ceb","url":"assets/js/9366.6c839f27.js"},{"revision":"b503a919c7cc9fb807d9d35fee18f4e3","url":"assets/js/95bcd1dc.662bd666.js"},{"revision":"1448d7779c3a3572584ce3978e028bb0","url":"assets/js/95d63b84.81040938.js"},{"revision":"b32b245db9bdc1e328510fad0287a32b","url":"assets/js/96f5d401.ec3e3a16.js"},{"revision":"d4617be58daaa688d4484aeaeef0ffaa","url":"assets/js/9857b334.799f7e3a.js"},{"revision":"893c70c56332e0ed932bea4ea28e3778","url":"assets/js/9861953a.a82c1d3d.js"},{"revision":"e0f44fe9a43dccdc5b623c8612af14a4","url":"assets/js/9898.1a8fcc91.js"},{"revision":"4755d6975537f3333be99b141e5eb2bf","url":"assets/js/9941.9d085007.js"},{"revision":"7c01f34c9f5aa5ca414a56d4766957f6","url":"assets/js/99f50fdc.97706337.js"},{"revision":"96f920c7691a5d07fcfd76905bbbb74e","url":"assets/js/9ac34ba0.89342c1a.js"},{"revision":"9df8dae4bea0d424ab3fd5af2fd8ca97","url":"assets/js/9ad56985.80941d3b.js"},{"revision":"bdec33f230faf864a49d62fdb4d13cb8","url":"assets/js/9b59e572.2dee5d5e.js"},{"revision":"f60df3d07072cc4d0943695fc1a48cc9","url":"assets/js/9b8d311d.f94a62f7.js"},{"revision":"069863959f5f3ebd7a30d5c97007ad9d","url":"assets/js/9c2278b2.9a906378.js"},{"revision":"5f4a26f4c79092eae83f64915caf2d11","url":"assets/js/9cd2fc0a.03a8948b.js"},{"revision":"a9f9cfe88fff030153a2b376fd603949","url":"assets/js/9d4488d1.c39c7f9e.js"},{"revision":"bd153f2550f401d5c117227936feec3e","url":"assets/js/9fdc340b.6283d2e7.js"},{"revision":"e3214ba4c1ec2108f15b6e263f6bba10","url":"assets/js/9ffd9d1d.68bc8950.js"},{"revision":"81f012cd1a997283982ca5474cf8e452","url":"assets/js/a0eefd42.a6daddba.js"},{"revision":"7361752a10c36be7caf10382c1c48451","url":"assets/js/a0f7a8f6.62715358.js"},{"revision":"55dd70163c801ec8d6dfb5845ec66380","url":"assets/js/a1a3054c.688064a5.js"},{"revision":"f8b94df53526159e9bb54f4301910a7e","url":"assets/js/a21e984c.46a125cd.js"},{"revision":"868496e8e562b01bb58c31f086534948","url":"assets/js/a2ca8fe8.8753664b.js"},{"revision":"97501016117b478b411ccb83d5cc48f5","url":"assets/js/a2d5f767.70497a2c.js"},{"revision":"5c1832207bd1d14525ac7ed0f2faa6fc","url":"assets/js/a2fb89b8.4d0d340c.js"},{"revision":"d475b45519bc75e76523f58e8b53f639","url":"assets/js/a305e2ac.47aaae28.js"},{"revision":"ace55fc5c3e31a0c4f327464cf68bfaa","url":"assets/js/a4c78573.c0390767.js"},{"revision":"bf74dea540b7d4a7ffb2a298eaa07ee4","url":"assets/js/a4e7ef95.8ef6fd8d.js"},{"revision":"c12feeb8ee111acd5ebf580d0f09ee45","url":"assets/js/a562d1c2.ec032a58.js"},{"revision":"a67f2aa5a88afa8efba775d470a1b437","url":"assets/js/a62eaa10.e1db19e7.js"},{"revision":"a0a76e2874708e09843ef8fdbd2a8b1d","url":"assets/js/a6eaa2fe.8503d6d9.js"},{"revision":"ae228b6ac03bb7834d82cb7ad475a127","url":"assets/js/a7456010.9be04e4d.js"},{"revision":"c5bdb771441170dae8f57566a3c7763e","url":"assets/js/a74a7dec.ffd1e39e.js"},{"revision":"e24ced739cb2d17fdc1fef52f28f7c65","url":"assets/js/a757a55c.8cc208dd.js"},{"revision":"8d58db588866018a1c1e94a11f01becf","url":"assets/js/a78b3ba0.839cc9ac.js"},{"revision":"bbe956406d417d9438d1549b158f3083","url":"assets/js/a7bd4aaa.2ec23224.js"},{"revision":"b2b4cbe5285cbdfef8d25f4b7d71269e","url":"assets/js/a8bdbcd5.9e113505.js"},{"revision":"d10ba795ff1feef11ba8092a992dfdbf","url":"assets/js/a94703ab.1cef97af.js"},{"revision":"f3bc9796b17e14d8608a0f28da61f085","url":"assets/js/a9c868b9.877b66dd.js"},{"revision":"3576fd99b6d928ae1e8f1d31ce89ef24","url":"assets/js/aa276556.951b0c20.js"},{"revision":"891843ab61b061756a9eac637df95759","url":"assets/js/aa81450f.f44ef8b7.js"},{"revision":"9b0b59c402d93629a4f69dfb23dfbc88","url":"assets/js/aba21aa0.7e561951.js"},{"revision":"e9d37856bc716e781993845570ed8b8d","url":"assets/js/ac61b989.18d66820.js"},{"revision":"b7b0e9ab9986f673a13de74f1cff2ded","url":"assets/js/aca8e61d.70b666bd.js"},{"revision":"73a2f441a0a597742c1b82795efc0590","url":"assets/js/add4bb7a.f9f32a8e.js"},{"revision":"805c6cf152df525dd22cd65fa53ed42e","url":"assets/js/aeb124bd.1d5645e8.js"},{"revision":"33a982f6785a3868752669fe643e687c","url":"assets/js/af70a4d6.a3b0e329.js"},{"revision":"1030f4e645c5430c8197837649a571fc","url":"assets/js/b158dc01.4373cc7d.js"},{"revision":"91f720fd42182c6e796f8275bc71ebc0","url":"assets/js/b21946ae.3fa17947.js"},{"revision":"1ec2b2e207643056c3b1f0025fd71810","url":"assets/js/b24d385c.0c122edb.js"},{"revision":"f4978a1364504979feebf24200717db2","url":"assets/js/b496f3e3.c3672a77.js"},{"revision":"de341435a315a2241a5daa9857f98b47","url":"assets/js/b5210edf.d973b55d.js"},{"revision":"ab1087afd81ede3ba1f171955f9fe372","url":"assets/js/b60da6d7.8b833f37.js"},{"revision":"f2e3f2bd12992a04397d964c1241c3a7","url":"assets/js/b60de388.a3a39084.js"},{"revision":"b17f887d3ee492eedf2d6313df8627a6","url":"assets/js/b6386ec9.44eb0de7.js"},{"revision":"233f5aa440f6a64aa98607d91d4509f7","url":"assets/js/b6438b6d.1f64fe79.js"},{"revision":"9fc52e5262b98c0daf54bf65a8272d94","url":"assets/js/b7bb49c4.9df6d159.js"},{"revision":"7b905d602c90cf042351f23c98f33028","url":"assets/js/bba094ac.15539ee7.js"},{"revision":"03186ca8fec5bcc78877a036ef9c06bd","url":"assets/js/bbd444ff.540cd88c.js"},{"revision":"60de7d823641a3dfeec6dd8e1f5d2e12","url":"assets/js/bcc35f8a.bc91a261.js"},{"revision":"8de87291a921f9dfd2c3ff49166b5476","url":"assets/js/bd760347.b7ce482e.js"},{"revision":"3700864372301838aeddcd01edac2fb4","url":"assets/js/becf8c88.e2d042b9.js"},{"revision":"4198b5f16a887af289dbec0d50a59757","url":"assets/js/bf3ddb91.3dc4486a.js"},{"revision":"28250a65138c040c0093188ba519887a","url":"assets/js/bfb1f9b7.76593eb4.js"},{"revision":"945406b7f995082d308470c533b4d722","url":"assets/js/c0b93d5b.bda30b5f.js"},{"revision":"4dd491b752d18019e4a3daddf1dbe915","url":"assets/js/c0dca479.62805183.js"},{"revision":"7f19c86a68fedce5eb5e47d9418fa86d","url":"assets/js/c10e86aa.478489d5.js"},{"revision":"5a8572bdeb55b7261b40ba2a07e9ba94","url":"assets/js/c141421f.81ac4343.js"},{"revision":"7dcb4b0c31f6530dfd23c91838977a3f","url":"assets/js/c156da02.1ccb85c5.js"},{"revision":"9ad621396d15cf46a807a698da86c171","url":"assets/js/c15a368e.50d262cf.js"},{"revision":"10c6963bba7524264b17d16643227cec","url":"assets/js/c3e6ab10.6e6917bb.js"},{"revision":"0216ebbf9a3d63167fab6a835bd7a8e4","url":"assets/js/c4dcc6dd.67606d43.js"},{"revision":"7ae55afff9158224e300c8051486de6a","url":"assets/js/c4e9b37f.0c5afc5d.js"},{"revision":"29eef58fe72d2a87542fed2227bc8c63","url":"assets/js/c4f5d8e4.d6c743ba.js"},{"revision":"3685babab6edcef68aa56909a01068c2","url":"assets/js/c5f4348b.764ebc61.js"},{"revision":"21f8fbb4a7fce11d954251785ad7a3d4","url":"assets/js/c72cf9c7.f27a7eb1.js"},{"revision":"21362a3a85f81b391d9718917fb82920","url":"assets/js/c737e1a5.9170b82a.js"},{"revision":"7ddc9fca8c0d021817b34f1d844e0fb3","url":"assets/js/c78ecae9.28e84ace.js"},{"revision":"b8017e78d15e30798d30eb308b98cdb8","url":"assets/js/c8018499.6ebf62dd.js"},{"revision":"439c9c666440679aa051a22a5a130d7e","url":"assets/js/c84a9914.14976687.js"},{"revision":"3eab31ca4ce5d3d735567a7adc35d230","url":"assets/js/c8a93e67.780af310.js"},{"revision":"9505f61e88ae68355956d8f6edf5adde","url":"assets/js/c9a1eaa2.4182eb93.js"},{"revision":"f882c52e4be544cff2af0b009c91580b","url":"assets/js/c9ae34fa.d9768e1f.js"},{"revision":"e2b5f1162c489b815192d2006c12b60f","url":"assets/js/ca8a1b2c.1c00d3d3.js"},{"revision":"0e11c9a273d29fb9de7479c04abf7fa4","url":"assets/js/cc2fcaab.ae14822e.js"},{"revision":"41256161f37fdcfa40fa412cba2715e3","url":"assets/js/ccdb3c45.a1419974.js"},{"revision":"ab14d24e4309cef72faa329417b20c81","url":"assets/js/ccfc7d3c.b647dd40.js"},{"revision":"2df7a307f4b604bf4730a8e39f2c3244","url":"assets/js/ce7e7ba1.f9984f84.js"},{"revision":"ccba123d609892abaa72fc61c59b0718","url":"assets/js/cedf0e63.0f15e5d7.js"},{"revision":"d935158eadfe339190470749c71d6a3e","url":"assets/js/cfc0d51c.6db0b0c1.js"},{"revision":"c91f19a687ba93aebca5cdc732e09913","url":"assets/js/d00b9fd9.bb8d22ef.js"},{"revision":"ae9ae1cae95e53863e7ff1169f53e029","url":"assets/js/d0ab59b0.b928dac8.js"},{"revision":"55e3ea8f7c1bf43f4df95a71276e0d4f","url":"assets/js/d152d6b2.983645dd.js"},{"revision":"d8bcf86e5a9b1d3e6d6e42ede6aa95fe","url":"assets/js/d23efac3.992c8b70.js"},{"revision":"eb7e7a4844d69264e587d92c2515373e","url":"assets/js/d26b0f2c.d5f735f9.js"},{"revision":"9c7d8c1c0e9aa53b582f852cc8b2d47f","url":"assets/js/d2ba5076.357cb263.js"},{"revision":"493b8955dd70ec08d3f606e00304563c","url":"assets/js/d2bda2e9.a487897b.js"},{"revision":"ffcb1545ba5b29ff5909cf61493c5948","url":"assets/js/d3585a2b.d8d3313f.js"},{"revision":"b81e9ee5e30c984d6f7ed71c6d5d03d6","url":"assets/js/d45ccebc.c9759bf6.js"},{"revision":"bb530b9a0068fb97167c4dfdddafc020","url":"assets/js/d47de5fd.62ce073f.js"},{"revision":"2fabcc64c7c01b5e0410b223c5c94536","url":"assets/js/d494a195.2749b44f.js"},{"revision":"07d91ec3501b03161550bfaa3aec65d0","url":"assets/js/d4e195dd.93bcee03.js"},{"revision":"eb7c9bb6656bd9bc3f5b5346d68ea9b7","url":"assets/js/d63ab801.e9d51a57.js"},{"revision":"5406ef1b8cf955930994b69e6c127b27","url":"assets/js/d89bf822.ec7309b9.js"},{"revision":"f0ab5698dfa5290cee6bc576785f24f2","url":"assets/js/d9cff955.cce23c4c.js"},{"revision":"e660f4d3452c6378056e0215934ae0da","url":"assets/js/d9fe55b2.9bd05009.js"},{"revision":"b8d71c3d6f1693cf223586f2de610c2c","url":"assets/js/da4fe776.e3a51004.js"},{"revision":"2e97ad4608bd7f8060fdf5f9ddb9d07d","url":"assets/js/dae64152.78cd4292.js"},{"revision":"c4a937c844cd9f3009ca6d2865041bb1","url":"assets/js/db6afc29.ffbb310d.js"},{"revision":"11a4f0828fc2b5be9109efe7a22ce324","url":"assets/js/dc030738.e32a2c34.js"},{"revision":"dbaf0a56694fe11e5bc158f0f6117168","url":"assets/js/dc109391.d940d7e1.js"},{"revision":"94490d873380ba4ba6870dede1e060c3","url":"assets/js/dd1fbe6a.8ab26ce2.js"},{"revision":"690b55efe1163bb4024f62f3ca03a6d5","url":"assets/js/dd3d6085.4a6ebcaf.js"},{"revision":"a42b4e5260db7fe141fa4199f136e8d3","url":"assets/js/df2a4a59.876a53bd.js"},{"revision":"0ecfa2b41365c364001bd9e7ca1f11c2","url":"assets/js/dffb9609.1682caa5.js"},{"revision":"528eaf02fbda0dae6c0a407d447c5c3f","url":"assets/js/e17e6af5.9b9f3c96.js"},{"revision":"8b90777ee554336f2b3ada5ded6cf459","url":"assets/js/e1a53158.2640bed7.js"},{"revision":"315a4b17a7ea1f38ed97d9f78ec3ddc1","url":"assets/js/e3b728f4.d6dd7bc0.js"},{"revision":"f0835282f9eb07ba220a11d3606b59dc","url":"assets/js/e3cb94e1.ad3287d5.js"},{"revision":"eff86be3917e0d632b9ea6c69b5b1c28","url":"assets/js/e47fd75f.e33af1e3.js"},{"revision":"67927fb6041a3eb87ab9ee9feacba2b3","url":"assets/js/e4c96358.532cb915.js"},{"revision":"4e0e0b62db482788636cdb27fcbde03c","url":"assets/js/e4e92f42.adeca4ad.js"},{"revision":"bb3b49d04a1ce251f17403bdfb80c0bc","url":"assets/js/e5f7cd7b.2802c011.js"},{"revision":"73471113b2ec086716d2d36e26dc1b04","url":"assets/js/e6501e5b.a7f1d380.js"},{"revision":"e58593d7d1033f0fb40c8fddf1c09a00","url":"assets/js/e682932b.797a5a96.js"},{"revision":"2380ef575ac6ecc36e1c2bc3eea25709","url":"assets/js/e69f0a50.25064cfc.js"},{"revision":"93aceb3fe3250128093b644fd96b6100","url":"assets/js/e6b53073.574c90b1.js"},{"revision":"9008bb5f95f5cbc6590d21f7821da79a","url":"assets/js/e76d69e4.fd22ccac.js"},{"revision":"7f41c3d5e1b49cd02c8bfef6f3ea05eb","url":"assets/js/e7f145e9.02526263.js"},{"revision":"e27dc2f3abfe69572903fe2d0618938c","url":"assets/js/e87d3b80.a79831df.js"},{"revision":"84a866027bb3907d2e7a227cec03dac5","url":"assets/js/e8d5b74b.24777550.js"},{"revision":"d2813a8307eb8b9d6c6f733ecb3ae0df","url":"assets/js/e8dd6634.2b857458.js"},{"revision":"277c4986571f3d0088018260420e8e8b","url":"assets/js/ea46410f.ef7d26a5.js"},{"revision":"fcd00527078339baa26bac4babfc8d30","url":"assets/js/eade58ca.bf3cbc9d.js"},{"revision":"01614102fb44cedd435851be7f54fd1f","url":"assets/js/ece243f0.40571d1c.js"},{"revision":"1448ccac7a78e7c7c5f72115ec6221c0","url":"assets/js/ed38b210.a127dd0c.js"},{"revision":"42c0dbfb1774e3f07c0374f311083986","url":"assets/js/eda49e41.54d2acd0.js"},{"revision":"dd4c7c719381cb6a1af40d651f5be11f","url":"assets/js/eda784af.e7ce9249.js"},{"revision":"c7fc6d06f0756090b7347b820ef5805e","url":"assets/js/ee84ef31.080a743a.js"},{"revision":"ee08c63308a55254cd9dc2eed1f4e23d","url":"assets/js/ef72e420.5caef42b.js"},{"revision":"4afaf8a0b676f3c235c4381ee0afe5c7","url":"assets/js/efa09b84.b98123bc.js"},{"revision":"50fd7c752d476beffa979d3d2c471dc4","url":"assets/js/f1f0b9c9.ea2914fe.js"},{"revision":"248ce8af879e129874bc2480c90bafbd","url":"assets/js/f287ed2c.4e0e8554.js"},{"revision":"6db48cd9d4e23bca43cdb224848205ab","url":"assets/js/f36074be.2a185de5.js"},{"revision":"fe8a29460adfbf6b8eab3aa71a98b38b","url":"assets/js/f3937ce2.c7851236.js"},{"revision":"4ca94ac723b579b826fd5ffae8e7b06d","url":"assets/js/f44068e7.f0178497.js"},{"revision":"9529de51c20dbca5aab39d2989e40256","url":"assets/js/f4e5f89b.645ec56b.js"},{"revision":"e4e89ab97524c00b48cd2e04c19703d1","url":"assets/js/f58ceb15.d33c87ce.js"},{"revision":"c124d54b51b0516cea79322d98cc55fc","url":"assets/js/f6420a7d.9553111b.js"},{"revision":"ed1a3460b9045709b58ea4491f3e2cf5","url":"assets/js/f7e672b1.86c4c4df.js"},{"revision":"511f23f58f3a85a962c43a4c0950d185","url":"assets/js/f83b6261.d4e4f206.js"},{"revision":"014db8ef9803883930bc3de0fe84d511","url":"assets/js/f9dd20e8.f35030d2.js"},{"revision":"b93ad47385a8a38e18a08c87d74d7b44","url":"assets/js/fb274994.f6b90fb2.js"},{"revision":"22dcfc319f83f172c34c0e7a1f79daab","url":"assets/js/fb57057e.7527f038.js"},{"revision":"18fa4214d41e976a31f0802438aee3c5","url":"assets/js/fbcb1a27.f0fdb50e.js"},{"revision":"e2bee75733b3a409cce0d49c11c187b0","url":"assets/js/fc419e9c.b808e0be.js"},{"revision":"0c007c5c8dec46e10a4ebf71e5db842d","url":"assets/js/fcaab584.0e5522b9.js"},{"revision":"dcadc256e05b99eb3098e7c60795a6b3","url":"assets/js/fe5e75f3.5f6d2607.js"},{"revision":"bb0273a3ad5a9a7d9c6cf79d04b0c558","url":"assets/js/main.91af2894.js"},{"revision":"f2c199b183c4488c28f59731404d1faa","url":"assets/js/runtime~main.0c994f22.js"},{"revision":"24ea50f271c7c333ae0dbd58f7948442","url":"autoload.js"},{"revision":"c055ded39a2b668364851afd144d8c1b","url":"baidu_verify_codeva-Diwo6ExDb5.html"},{"revision":"72b1157e97df8a0b2c4dbb164b78506f","url":"basic/index.html"},{"revision":"3f15447e80d5fbd304171ece384b6f1a","url":"Bedrock/bds-core/index.html"},{"revision":"96ad76b77900bafe69bad45431cae8e3","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"2d4254611678f2e420bfa6767e725a56","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"73c75e8b711434991cd78d20b329c629","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"c31f71c21608e8dabe6a4dd513465435","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"7b612d68b5f12df8f5bd288d635da67b","url":"Bedrock/bds-core/process/BDSX/bdsx-install/index.html"},{"revision":"0b6b5e7ba3ac28c3c16634f9c8609278","url":"Bedrock/bds-core/process/BDSX/index.html"},{"revision":"d71e0c5b39c9d98173e84df736a8c4e4","url":"Bedrock/bds-core/process/EndStone/EndStone-install/index.html"},{"revision":"c7b4bf6f7d43b0fb6a5d6975dfca9048","url":"Bedrock/bds-core/process/EndStone/EndStone-plugins/index.html"},{"revision":"018601334f8a29e12cceb98ac189b6c3","url":"Bedrock/bds-core/process/EndStone/index.html"},{"revision":"4396433f94b1918c15ee206afebc0c7b","url":"Bedrock/bds-core/process/index.html"},{"revision":"7117f684e22893e2afbcb72b97a7ce56","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"87791d92c37f5952047469cc4e2c987d","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"4cc47adbc31a1865d012398ed7c6aae0","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"024d644f97ce060f18fe83bdcf04db34","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"be77e43fb5e5c532970375c2120209ae","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"652a6f0da1c2a17ef719ff987f665e25","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"1ccf4490c43deb0a9786400ca777bc50","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"7f7e8fbd5695b2cdeb2f3f3f754c1c50","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"af5526f91ef4d3f8d9cb143b75db8dc4","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"aa25253413eb5984fdffbac563c11658","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"5fd0b52188c5b4c293abce966a62369e","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"b0d93480be91d54d7abc498ca307dc8d","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"dc0a5b38df954c589be6f206678e9db3","url":"Bedrock/bds-core/start/index.html"},{"revision":"432d382c030358ba6c35b2dad7bd9511","url":"Bedrock/intro/index.html"},{"revision":"399b6c89183c40ed689038047d0598cf","url":"Bedrock/nukkit-core/index.html"},{"revision":"2f267f1bb1dc3cc5d738ff4b47a60c7a","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"5f947b7853b6f272632b999691105527","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"95eecd23a2a2b2539ccbda6570aa7f04","url":"Bedrock/pnx-core/index.html"},{"revision":"2312a6558e198d66138530555bc786e8","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"85133f318e91a9bd0f586227f41ab6b5","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"da224baa7643eba1fb75379ff85de6f5","url":"Bedrock/super-basic/index.html"},{"revision":"817dbc8263e574d06bb7633ae804279c","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"fc2afe32e90c356909dadee6d0f3c0dd","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"cda831821f6c3584b4925e0e4902ce13","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"f29da324ec1a4d3c2e3c03cd2b790c26","url":"Bedrock/super-basic/version/index.html"},{"revision":"e3574d673e37feea34a2b94258afaaa5","url":"contribution/index.html"},{"revision":"8e2b66a7a198cf71daff263fa4f207fc","url":"contribution/todos/index.html"},{"revision":"12d79cc96932e39a63ecc8c83f5a5780","url":"contribution/writing-specification/blank/index.html"},{"revision":"9ed57e285be49c22a2c3d608fc871a1b","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"4a16ccbd78d72c7a07123c56ceb26062","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"ecc980fd95e906e8e13436f99146aa40","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"c77a3ea7e779952e092d8c8d8733267a","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"321422fefc422ccb5df9fa3fcb967ca0","url":"contribution/writing-specification/reference/index.html"},{"revision":"82d094477ae419537bdecbb94acc69af","url":"contribution/writing-specification/text/index.html"},{"revision":"b7434dc920a85355550712d1639d32f7","url":"contribution/writing-specification/title/index.html"},{"revision":"97942abe46a07c8e59a117208c15843f","url":"contribution/writing/index.html"},{"revision":"323ed8f6b2fcfb4ca5fa8bbad305136a","url":"database/backup/index.html"},{"revision":"f5c1b6b550467a80d22cc78c1838fdd0","url":"database/configure/index.html"},{"revision":"78142bb41be8ed0ba791cdb49a423ad1","url":"database/index.html"},{"revision":"a1b222c4a7f7eea8601f57c18fbdb0b2","url":"database/install/index.html"},{"revision":"ce1f4bfaacc4f27d2e2ffd074267f877","url":"database/manage/index.html"},{"revision":"d3af05ed79cdacbe89de4b3d0bbb868a","url":"database/uninstall/index.html"},{"revision":"d0135b9fd3df243c473f89a667354213","url":"deploy/index.html"},{"revision":"483f901289d86e001e632af91a10a6cb","url":"index.html"},{"revision":"a4bf3c2d28643da6b0a393136c27feca","url":"intro/index.html"},{"revision":"1504115e24460bc89c5387535d8cb76a","url":"Java/Advance/all-server-code/index.html"},{"revision":"922885e1b676b1cc551890c5b3c28c7a","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"1440920647d13b46895cc15e1ae173e9","url":"Java/advance/bot/index.html"},{"revision":"504cf879745ad1aad28a54239d6ff645","url":"Java/advance/chinese-username/index.html"},{"revision":"5c35110dae920a121af0f7984761438e","url":"Java/advance/command.yml/index.html"},{"revision":"556636fde3ee729463a456f4c6a49dd3","url":"Java/advance/database/index.html"},{"revision":"852c4b67b6858840d41c464daf6b7e29","url":"Java/advance/index.html"},{"revision":"3be0f0b7a5350915b1741c93b28714d8","url":"Java/advance/kether/basic/index.html"},{"revision":"8c2b0275e73fbbf1ba92acca5c486c36","url":"Java/advance/kether/idk/index.html"},{"revision":"9fa56be93411a815b5822a23758f3e61","url":"Java/advance/kether/if/index.html"},{"revision":"a05a51d29911c4c67aed1820733e438c","url":"Java/Advance/kether/index.html"},{"revision":"ac107902caab9da3358e0c38eb2b1c16","url":"Java/advance/kether/math/index.html"},{"revision":"347fd76c436cbcdb2cab916d9128c88a","url":"Java/advance/kether/preparation/index.html"},{"revision":"c83503bb475c73fba3832649a61fa52b","url":"Java/advance/kether/variable/index.html"},{"revision":"04d8dc87623132a090ee1d336c616e9f","url":"Java/advance/Linux/index.html"},{"revision":"83e636311074260cadcce579f2308dbd","url":"Java/advance/loginchoices/index.html"},{"revision":"8e187f23b99ed156d967b05cb75d1b9b","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"1cc95ee291f195cfd6165eb9f5a16c04","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"afb65135216465ddd83ea7773895a91a","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"681e4dcb4c15f1d3d3367c1e25550ef0","url":"Java/advance/slime-world/index.html"},{"revision":"cbbb331fd3bb6d42f13074427e15bf42","url":"Java/advance/YAML/extention/index.html"},{"revision":"b3bb702c83f93ac5d01c6c4ab4ba901a","url":"Java/advance/YAML/foundation/index.html"},{"revision":"a19bdf983caac7e87aa5407b68f696ae","url":"Java/anticheat/index.html"},{"revision":"bfcb91a915c69ed74e1b067b66001946","url":"Java/AntiGrief/index.html"},{"revision":"a07ff4dc5c5848db1def376ae9eaf86a","url":"Java/basic/index.html"},{"revision":"9bbcf2544caa053e6766ccfb3f02d05a","url":"Java/build/index.html"},{"revision":"229ed44070a0dae5c8bdb95bbe64db84","url":"Java/bungeecord/index.html"},{"revision":"92308e0d6b71ad09661c93694db7202f","url":"Java/category/placeholderapi/index.html"},{"revision":"0338f3ac42b45f0a5f0ce6631c69c7db","url":"Java/chat/index.html"},{"revision":"4fa4e1c0a1ba440f42d35bc47370565b","url":"Java/command/index.html"},{"revision":"831ead21da8ecb8bf017c7f2d719cbc1","url":"Java/cross-server/index.html"},{"revision":"ae9744a0223ba430ebf4a2f42e80db4a","url":"Java/cross-server/plugin/index.html"},{"revision":"620bc8d033e209e978c702e17cc1cd30","url":"Java/Essentials/index.html"},{"revision":"f15c14ad8d7eb83d8ec8d51124698cf5","url":"Java/Front-Plugin/index.html"},{"revision":"330abccafab143fd3836710ff0e06a45","url":"Java/game/index.html"},{"revision":"055da3dc987ae5d24fb2660a0ff97c9b","url":"Java/Geyser/index.html"},{"revision":"8d63c4b9f03b7d2ccb46264fec3b0f78","url":"Java/geyser/introduction/index.html"},{"revision":"14019ec3138ca71b358de119437e8e49","url":"Java/geyser/upgrade/index.html"},{"revision":"5a0570b07996a7500f1246bc7c969ff0","url":"Java/Geyser/Upgrade/index.html"},{"revision":"3755ad1530192b27f3706b2df25043ac","url":"Java/intro/index.html"},{"revision":"bcaf0201d790d6b7caeff68a3faa156b","url":"Java/items/index.html"},{"revision":"4eb7a2508d9f62f3256bf9a1548b887c","url":"Java/maintenance/Java/index.html"},{"revision":"655f20549082734b4258654e3a783335","url":"Java/ManageTool/index.html"},{"revision":"56acb07179a12a15e6767b92c2c405df","url":"Java/more/index.html"},{"revision":"9f162d73a50016ed76d816a7a5537681","url":"Java/optimize/index.html"},{"revision":"6713d14a3019cbbe5691162f841767b8","url":"Java/optimize/jvm/common/index.html"},{"revision":"4f3aae3f383f729ff38942049f7b3d18","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"a5370ba5aa273b593ac7bac2cf501866","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"e627dcdfa9e651e9e810a2d2dbd65759","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"9d43a39ae1ee69da2b2d804067357cab","url":"Java/optimize/jvm/index.html"},{"revision":"a5a3d95d082d2c19e706f8c857dd96b7","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"9c4ad4a047128f16cb5966fbf97548a0","url":"Java/optimize/jvm/zing/index.html"},{"revision":"d22da26d57c9977306bd414525eddb23","url":"Java/OtherPlugin/index.html"},{"revision":"7e6bf497a42e7985a5e91c71e70ec898","url":"Java/permission/index.html"},{"revision":"45281d1ae7911be7940fc1dff8de49a7","url":"Java/plugin/index.html"},{"revision":"5118b26bc9bd09e224836e9af855d657","url":"Java/PluginMagagement/index.html"},{"revision":"8083fb066abb981f098e189318f967e9","url":"Java/plugins/other/Skript/index.html"},{"revision":"2e31904f3a031a898e1422c4fe084afc","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"6d56463c04a87e12a79e8f1a686bb6ef","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"bc2ccc2226adbb6d0e475fa4857b9d4e","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"57c1efb19bb46ca722c14b582a59de37","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"e714d89ba45f38d301b6088b16922ac8","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"cf700e013e97ed7691bd20792c3a807c","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"7f17b8c6286009626441125e280e6fa3","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"8d259939ada25015aed7963ca0fcb8e9","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"6515015e23e7dc017a2088d47f8c596f","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"0b34d2fbb7d42892510cbffc5176c1ed","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"05e125aa140d7b4a3ae31e307003f66c","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"b9d44bc747fe0afec5d94160160a1a7e","url":"Java/preparation/index.html"},{"revision":"27a6c67a954127f728c0f97656422e29","url":"Java/preparation/text-editor/index.html"},{"revision":"feee0c24c40127e7fb2056a4d0608b71","url":"Java/preparation/websites/index.html"},{"revision":"244d7019f02864182838ccc7147374df","url":"Java/process/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"2c918bd51cb769593769bfeefb5ab63f","url":"Java/process/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"98e740061752d9cf5d93db669c35dcd4","url":"Java/process/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"f482df71a4efe7fd702d207734fbdd57","url":"Java/process/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"f90672acf94bf4da1eb9e14459cc0f82","url":"Java/process/cross-server/hide-the-real-IP/index.html"},{"revision":"47f0355c1d08a5a3366f8e2164d976da","url":"Java/process/cross-server/join-server/index.html"},{"revision":"368c92e2e20fd36303c5241d13772211","url":"Java/process/cross-server/plugin/BC&WF/index.html"},{"revision":"08406a2d7a6d3dd3d353e4c12ff1ecaa","url":"Java/process/cross-server/plugin/velocity/index.html"},{"revision":"8fac2009c7fa49b334c72beb4df5c086","url":"Java/process/cross-server/precautions/index.html"},{"revision":"7640f1353d9c08387436a3384bef1265","url":"Java/process/cross-server/server-core-choose/index.html"},{"revision":"0fdcec7ed837a4107e11fa97f4668e5f","url":"Java/process/index.html"},{"revision":"32276d206f3032b6d05cd097d3d9306c","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"7296535cc207f49bc355afad09b1346a","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"59d2efa50f1b36183fa7c423410bbb26","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"e6419bccce6d85558a25717115df70f2","url":"Java/process/maintenance/backup/index.html"},{"revision":"22465bc0298bcbe55ee6cd84693abb11","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"516fa729a75dd6a891e0d1c108c73e2f","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"941d05e0fe37be8cf04fb0ac970ccec4","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"f982b19e4e79fb3fe94ff6cec6c93a88","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"aa95a3ab967360d3a3dda3fa61ba9e4f","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"69b286dd07c3d99afb933dca038b5495","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"933773cffe041218bd479f3387bce52f","url":"Java/process/maintenance/update/index.html"},{"revision":"6694f56922ab5e585b94b36accaf2146","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"40328d76c789d039a607565bedd3327a","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"8ebdf82c5550171fc2157241bc486eae","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"efaa161e69d8c2d047ec654642d699cc","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"8899351d2e7ad87f97f70c1b4c415818","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"fcc1c82c8429128443223e5c35352dda","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"2878760a7f40b8b32cd1e49b66c9a0f1","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"0ab0d16c042f8acbf6e5832201375cc8","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"71be91acce03efaabf2346d0991b003e","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"61060db5a245817b9aaf0fd6a6541c57","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"63413e06656cc1066a13bb00a2ef9692","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"64d0482fa25cf22e508fbcdf3d2501ee","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"a587d03843497dc45afd67996fffb5d9","url":"Java/process/mobile-player/index.html"},{"revision":"de475c9978e951dedb5fd753446e24d8","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"834b1260b74026d654a298ef04091212","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"adda9ed53d38a145b56ae99b6bd6443d","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"7161557406b9a9a3422c27967adef415","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"34641159eaad76eab3adf01bb4b1c211","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"51807de4b0ee75305a3b3d8523634e04","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"d4e93c495e58e57ad6d6c8a70b321b85","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"aa405f12d23d4a94d9954e8747756e82","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"c0497e45dd102c94c8da6f944fc22bc1","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"f581bae83b30d8d307224be3be87eb1a","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"8e47c5a6b35b442fa9d10a83bb057df5","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"bc6402ed7a360a0217e4b2331fbff069","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"bbc6145d6ef53b8bcf88453251424b0a","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"5b5e3f4f422b528b7f8053106bc161e7","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"760581913ea01090d4de7c4b8683eff8","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"330c069cbc4d9d3314e949bc0628e063","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"e63935b06ca3d2669e9453f86c1d97d2","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"69ac49732d62e35a774884fcfa667e70","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"4f625aaad8059e26a645e1f6057acb0c","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"1244728fd2740cce6d88ea71df6c8029","url":"Java/process/plugin/game/title/DeluxeTags/index.html"},{"revision":"fa604a4fd48e50e84ab63e02e2a0f726","url":"Java/process/plugin/game/title/MiniPlayerTitle/index.html"},{"revision":"b67a8ff264e7e466e878eeed9515b81f","url":"Java/process/plugin/game/title/MythicPrefixes/index.html"},{"revision":"09916874ce4bbe71cee88236ec29358f","url":"Java/process/plugin/game/title/PlayerTitle/index.html"},{"revision":"a6feed12e611534d43290192d919b6dc","url":"Java/process/plugin/game/title/UserPrefix/index.html"},{"revision":"045decdd4ef679ff0f9ca7a6206a7c22","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"b82bb4f8b3c02344dc7597c1abedf468","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"c50633551b66da935d94accea6687431","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"16059bc8b47dca0ae916e0997eee9566","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"9f193871309e808218b3536284dfa6fb","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"cf4b853d5cd1712dcf73486eab5d36de","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"b7a294a84c1076cf3a6ca01c9df18689","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"db4879631205d7ff52b586bd5bed0c5b","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"48ab13e5ef257820239489fd8deafc46","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"26717df014c7c272c5e70cbc2a935751","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"624dae41252c79c5d2711b0e716718e2","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"8d2ea36da8045674cb7b47dfe2f434a1","url":"Java/process/plugin/ManageTool/BasicPlugins/SunLight/index.html"},{"revision":"370035e189b06140e0a0960a5e2d6dad","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"f8fd3e4b24964088fcdc005f872d34e7","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"4ab3d03ba9eade1924feb75f69a97db5","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"13ff78ff431d690d25661c301d9338ff","url":"Java/process/plugin/ManageTool/items/Crucible/index.html"},{"revision":"0e2fee0b94fcdcf974d9608a66072030","url":"Java/process/plugin/ManageTool/items/EcoItems/index.html"},{"revision":"e763707d688572721b560ba9c6cc9ccc","url":"Java/process/plugin/ManageTool/items/MMOItems/index.html"},{"revision":"3fec9b49d492fa7cb12afb2d18975c37","url":"Java/process/plugin/ManageTool/items/NeigeItems/index.html"},{"revision":"be265b1305650fba747f636be94589e9","url":"Java/process/plugin/ManageTool/items/SX-Item/index.html"},{"revision":"d3683e6738de01dc39a7a8ea9ce07f61","url":"Java/process/plugin/ManageTool/items/Zaphkiel/index.html"},{"revision":"d0aaa150e6a0bb751af0e2362bb20c7a","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"10dd60e7a4b5ad9d2ed8ae2beb5991be","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"54f7c1b4ca2447a6c8cbb41d5d2ade0a","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"1b3ff78ef9a4d2ae7e115ed5ecb872a4","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"822ff2c92d014b20e6cc9cddbeb8c9aa","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"68afd055d69a477ee9242d2462e4bf30","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"b48c782d7c86e783d3709c710e1cb201","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"8118bef7dd5ecf14c8ae5506a723bca9","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"20d4ad36e899ef937e4e132252533ebf","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"bf6f30b0bfc81adb3eb51eb90308b504","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"0de07ec2d4e6007a55ec440988d3caf4","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Model_Engine/index.html"},{"revision":"8d79b13952ae3c6537c823f341cd8eb0","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"bba39b23a2fa6ea7a1a17689756ce4c3","url":"Java/process/plugin/ManageTool/task/BeautyQuests/index.html"},{"revision":"4ecc27d45ecaf0ddcd4f5bb873e8516b","url":"Java/process/plugin/ManageTool/task/BetonQuest/index.html"},{"revision":"2445cf32fd81d9cee00aebd5984c6c38","url":"Java/process/plugin/ManageTool/task/Chemdah/index.html"},{"revision":"95f05cff354f70f8b9f615461e379f9c","url":"Java/process/plugin/ManageTool/task/MangoQuest/index.html"},{"revision":"917165cbf3184f37181e6d56702790b8","url":"Java/process/plugin/ManageTool/task/PlayerTask/index.html"},{"revision":"f36ab4c4a9f212b147651e136521b008","url":"Java/process/plugin/ManageTool/task/QuestCreator/index.html"},{"revision":"6686f2d90f97b347dde9fbdebf8ccb99","url":"Java/process/plugin/ManageTool/task/Quests/index.html"},{"revision":"5e21f043a443d91049659f59512fb05b","url":"Java/process/plugin/more/color-message/index.html"},{"revision":"1ebdc6fdf57b8be99ca20317f5984126","url":"Java/process/plugin/more/faq/index.html"},{"revision":"ae75a290c5cb6f3ea7fd6ff580e7eb98","url":"Java/process/plugin/more/plugin-abbreviation/index.html"},{"revision":"794ec968ce48fbf58c581c1d8fc0fdaa","url":"Java/process/plugin/more/plugin-backdoor/index.html"},{"revision":"f07d3c314e64c4bdd4c6e503131e2747","url":"Java/process/plugin/more/plugin-build/index.html"},{"revision":"6f8b0889523e7ff399f6ed252fd20738","url":"Java/process/plugin/more/plugin-config/index.html"},{"revision":"b2136be59ddb9aa3951fb2b512a2dd8a","url":"Java/process/plugin/more/plugin-download/index.html"},{"revision":"6689099943dcdb22419c2ec3d4dbe186","url":"Java/process/plugin/more/plugin-signature-file/index.html"},{"revision":"863f1256422d2056c94b9a203ec1d3c8","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"42dc80367472a3658542069169e59cc2","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"c0dd99ce3a702929c46f0c8a30a12cea","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"5b3973943f00c5bb3cb1600d290fbb0d","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"eff669af5df4080692f6101594d70d54","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"51c06dab155f7fb531380df2d3b18324","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"6137ed2afba07dd20a278a748b944ce3","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"d7a723670019bab8d49d83e73249687a","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"fea190344afda083b3303c6e7824d845","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"38665bce568d091d38d7ccc4d0ccbd89","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"3d5a9ccb46126dc088c4313075d8d8e0","url":"Java/process/plugin/other/money/index.html"},{"revision":"4cdc8ef047d3c82a87273dced82484d4","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"99b1e6624e492d1fa8ceaf3070c292c0","url":"Java/process/plugin/other/MythicMobs/index.html"},{"revision":"16216a9ac52395dd3eaef869488a204c","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"dd997d63aa86a85fa46c6cce8eff268d","url":"Java/process/plugin/other/npc/Citizens/index.html"},{"revision":"08992d4a5d249397ac4c58f1e6ac8bba","url":"Java/process/plugin/other/npc/ZNPCsPlus/index.html"},{"revision":"32522b100b426e9d1d89e9e052836a62","url":"Java/process/plugin/other/QuickShop/index.html"},{"revision":"98decab20925ee113a731a466d38e4d5","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"9ea69e9abc245f082371d75103639b7a","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"d657090f7cdd9d873687f044b5111c25","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"2b9d0d92c526f61f0cc772ee98306df3","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"ecfe2cf25a1b8292fdc6eabca1f986f6","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"3d3060276e7d5aba9e98f63b71e1811d","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"f7535ab2a243ca3eca3551432b776c4f","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"d1e57b6bd53ca04a0e7fff3d6dc3db79","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"b3242a39ad30cb1ad894d7cdba8231f8","url":"Java/process/plugin/protection/Dominion/index.html"},{"revision":"a8d9ff86b554297c313e447f8675b409","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"8f37ccb046d5e0844138baef1e8f3d90","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"b730386130c124d2cf81a7e468c102b5","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"217c796fd4554d53260143d16aecd460","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"6fa340ba488bbcbaf446a8f2f47055c4","url":"Java/process/plugin/WorldManagement/FastAsyncWorldEdit/index.html"},{"revision":"cf6b4e043a2b55d7b627b8a27623ed00","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHub/index.html"},{"revision":"3b7ea1dc8332685dfe07465f0fea8134","url":"Java/process/plugin/WorldManagement/lobby/DeluxeHubReloaded/index.html"},{"revision":"5689bf1692c891f3230f3e365d53c53c","url":"Java/process/plugin/WorldManagement/lobby/index.html"},{"revision":"3192b161a6122dacc0c471b55bd3782a","url":"Java/process/plugin/WorldManagement/lobby/SuperLobbyDeluxe/index.html"},{"revision":"a74cb5d888fea593dbef57090c12bbe9","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"6f9739ad7eb07116ca9ad1a3d17c7ba6","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"b57094fb7f85e892cf8c1f1c8e93f885","url":"Java/process/plugin/WorldManagement/WorldEdit/index.html"},{"revision":"e2aa406811046a3b27aa2ff34e50183d","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"ec4faa3e1dbc74ab1d3bb6ecd6fc8408","url":"Java/ResourcePackManagement/index.html"},{"revision":"bed2e18dcd8be2afe182a94f3ab74c72","url":"Java/server-core-choose/index.html"},{"revision":"605f7c16f75b640bdc332130c14f0e16","url":"Java/services/index.html"},{"revision":"05c62b8c186a234086c85bed09e6d277","url":"Java/Slimefun/index.html"},{"revision":"32891df001fba925317add67b04441f2","url":"Java/start/ask-for-help/index.html"},{"revision":"849c0e2ad37ee795cad91a6583eb6702","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"678beae28bb5b6a09e611b6f8fbe336b","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"26078dc127bd6806003f079b63f3d04a","url":"Java/start/basic/server-management-command/index.html"},{"revision":"474d8ddb9b72739fd9a13db5eb3ebcac","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"5938c4b4c0956d12b97b00e7ca3f60c5","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"73150a940774cb6cbd2e8b1015c1ac32","url":"Java/start/basic/what-is-log/index.html"},{"revision":"37fd8e0cee6dbaad85eaee4a7581362b","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"7409e2ef9cbb321f70ff1285f1e64dab","url":"Java/start/basic/what-is-namespace/index.html"},{"revision":"86b269407e67d7b184e64fbb9acde602","url":"Java/start/basic/what-is-nbt/index.html"},{"revision":"d2936dc567951eaf79d010206711d4b4","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"304ac5085704f596ea0633bba8b765c4","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"bce6a70f9e734d773ed164b5ed879a63","url":"Java/start/basic/what-is-server/index.html"},{"revision":"fcdd22c4c7764644bd8adce482e57e79","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"2acb463661953b02c98039d486648b77","url":"Java/start/basic/what-is-world/index.html"},{"revision":"673e70dce0fc68fbf4509826be08e507","url":"Java/start/config-server/index.html"},{"revision":"7d6e7b3e1cc73eb9ac46987dc8983324","url":"Java/start/connect-to-server/index.html"},{"revision":"7bd7e858713c6ff47a6aef8cd37ef9d9","url":"Java/start/deploy/index.html"},{"revision":"6ae8178ecd0c5312e6a960d58a88bbed","url":"Java/start/index.html"},{"revision":"0ebf58fc858dc58b9aa58f71313dad2e","url":"Java/start/install-server/index.html"},{"revision":"6922ea825e98d9fa2749ff44829e99b3","url":"Java/start/launch-server/index.html"},{"revision":"853c3c0ea5963740ae98bdd3edd0cfd9","url":"Java/start/server-core-choose/folia/another/index.html"},{"revision":"21e2466af9e42fbe80a7b4ad0ff2d226","url":"Java/start/server-core-choose/folia/folia/index.html"},{"revision":"76ab5a9108408c52a58a6df0394ac1a4","url":"Java/start/server-core-choose/folia/luminol/index.html"},{"revision":"4d6abf904aa4cb6da6e16fe5b0e460e8","url":"Java/start/server-core-choose/folia/multipaper/index.html"},{"revision":"e0b073ee440335d6c655f48d5cf6a37a","url":"Java/start/server-core-choose/hybrid/index.html"},{"revision":"e705c7b26176f98ff2a8100cb7c9d893","url":"Java/start/server-core-choose/mod/index.html"},{"revision":"12fd69c8a5804bb0d8a7ef269c78ddf4","url":"Java/start/server-core-choose/plugin/index.html"},{"revision":"2aebf438b9eaa5c3658a3a3d4a92a7c9","url":"Java/Sundry/YAML/index.html"},{"revision":"289a3c6497e9b15bc924880d8fc76f7e","url":"Java/task/index.html"},{"revision":"c488e36f2671af392932ecad4c317873","url":"Java/title/index.html"},{"revision":"5b3c8d224ecaaaf5f7227cdfc0781093","url":"Java/velocity/index.html"},{"revision":"92b22604aadb060bba0ff340c4d52c16","url":"love/index.html"},{"revision":"aa9ce3d3483b56f3bcf4e9d0cb9c4b8c","url":"maintenance/index.html"},{"revision":"d1df9f38c990474087f32a044ff80ee3","url":"manifest.json"},{"revision":"ec0d61e9c42f216221187825f2ab5511","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"0130459b2a4ccb4f11db4064e62a6353","url":"preparation/dumb-script-using/index.html"},{"revision":"5877bdc77348e8f6c8d5768ea04efa3d","url":"preparation/index.html"},{"revision":"fa65ec0b9b15232f3cbe6502718d76a9","url":"preparation/text-editor/index.html"},{"revision":"17b6ceb28b78b4f6a06d7e47a746f079","url":"process/create-art-assets/index.html"},{"revision":"ffb1765a51c33996e13a5ca38d411963","url":"process/dashboard/index.html"},{"revision":"7b75d3f4bf4d96001766682128e54f61","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"3ee808d3970a31365e67087bb42f43e7","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"e3fc52c016a50750978095c3a1f8a05e","url":"process/deploy/intranet-penetration/index.html"},{"revision":"bcd04fd3af2cb8a6f2ff394ec363adbc","url":"process/deploy/optional-mode/index.html"},{"revision":"ec8210336de70ef53365b0f2fc14f1bb","url":"process/deploy/purchase-server/index.html"},{"revision":"6d198eb9f02138f369299946aeb65d36","url":"process/index.html"},{"revision":"ab7e3b84ce9867aa3d94ab11de550cbf","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"cffe52db5c9d614e0954626648c97a63","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"7c12f3fbdcf6c80039e912d14a606776","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"4a11566230199bf0742fcd4ccc0ec1bc","url":"reading-guide/index.html"},{"revision":"c037d71aa9d45fa5556f71d944135061","url":"search/index.html"},{"revision":"311325242783ee31788bfa00faed88ce","url":"services/index.html"},{"revision":"e63c73e0ad06145ac432ed232608f870","url":"start/ask-for-help/index.html"},{"revision":"b7477731c92973d1d79b17b54df885f1","url":"start/basic/what-is-caton/index.html"},{"revision":"75fe5f49dce8b9ee07c01e45d8c31b35","url":"start/basic/what-is-log/index.html"},{"revision":"5663b92efba0df3015fc0f9e5c807b95","url":"start/basic/what-is-messy-code/index.html"},{"revision":"36e3429ccd0027cac45832f31373850d","url":"start/basic/what-is-permission/index.html"},{"revision":"52c1e2a887f8436a79df454b003bffac","url":"start/basic/what-is-plugin/index.html"},{"revision":"be6c4a85fcc5c7debb50b009bf6d98f2","url":"start/basic/what-is-server/index.html"},{"revision":"c260107f7a9b28f14df7aa33a2a28548","url":"start/basic/what-is-startup-script/index.html"},{"revision":"3fc39b8f763e24c29dd0164a530b8534","url":"start/index.html"},{"revision":"418549270190b6667aca372037f1fd65","url":"Sundry/Advance/Linux/index.html"},{"revision":"ebbc42d356270c47976f1c3a7552b050","url":"Sundry/Advance/management/index.html"},{"revision":"5004ea7053d2be4a7927c7e617ece9c9","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"d5093601dc9918b729b48c42d80f20e6","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"5f0c8253b7ffce78eaf99f4613bcfcf4","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"46ba1e8cd6d73c8601bbfb2340484f68","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"1dc3830194f92419afc6dbe2a2ff1b6f","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"15281cd0e2bcc563c43e02d53fb1eccc","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"a0688a268365c0f1f875daad181d30ee","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"e1f858468aef6ae7faf61e1bf6da413d","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"fa92d7f569683c3c9d0ab9a50ee7c014","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"faee793b9ecfd8767c90688c81772eba","url":"assets/images/1-1-7b2f6ab85eefa58dd60267165575d968.png"},{"revision":"68c56a694908b1aa2aeeb62be855a55b","url":"assets/images/1-2-18658a66b20c773553f977eb0a5ed921.png"},{"revision":"8b50ea053f5445c7653c6bed19e0e9ca","url":"assets/images/1-3-d8d44e55701a834cca3b694a3014c83f.png"},{"revision":"fbcf3c632fe9305b7bd8b715c112dd51","url":"assets/images/1-4-05ad3b6565383a683f30be218a2b2f84.png"},{"revision":"15012695ab4b4742e2588ca5fa49161a","url":"assets/images/1-44d027a3dc86baba11087c220453d59d.png"},{"revision":"4ad4a94df9dd2c1544b18bcddbf807b8","url":"assets/images/1-5-1ecd5178b9f87bb1dbe1e66cab6457e7.png"},{"revision":"7dcd16bd241c4ea318886a9e481bf649","url":"assets/images/1-6-649d43559d679c2975f59235addddae0.png"},{"revision":"dc10a3ddac5a6e14303150149198b542","url":"assets/images/1-63c4a3ec20199e11ca19b2f9fd2a682f.png"},{"revision":"ced955e30b60a30ec05c5684ae2fdc7d","url":"assets/images/1-7-e001182a0bde463db04a14d1f462fb6e.png"},{"revision":"96c124e98ac524d49aec28a72d1e6889","url":"assets/images/1-731f45984c8b96902c85270b8c81ec35.png"},{"revision":"1f9c3c57774c792ff952e9558f6dc862","url":"assets/images/1-8-df4563b1786e4b0f638b03f2c003fdd5.png"},{"revision":"08b33fc26327da6e979ba164ea217fef","url":"assets/images/1-82f0010c14c72c5d94a32dc8fb2c504c.png"},{"revision":"8e11e24936839d01798d8bc4ad470d23","url":"assets/images/1-9-c90d58107c1f4428a38513323a7906c5.png"},{"revision":"2038d739d5d2942ef060c4c9b75ec9a2","url":"assets/images/1-a9f8da27e5049d58f6f741d0f12ea551.png"},{"revision":"8c7b32c86f8207eb4938e9d5649fd7ec","url":"assets/images/1-aad5ad5f1398c48d29a32a072bdad4ef.png"},{"revision":"ccca570d7ac66120837adc97c57a4c1a","url":"assets/images/1-c3bd87874195895c6be5c2ea870244d0.png"},{"revision":"24260dd5c1f60452b4ac63ebc7a6a285","url":"assets/images/1-cd6859b2cc9c315d0060fc66db710558.png"},{"revision":"1a00b0f8db51b658cbdc2535e87d85de","url":"assets/images/1-d4a8cc278e6f1ce35508601644b6f2be.png"},{"revision":"371ad4a478896137848d6f808c675ec0","url":"assets/images/1-e68001070d89747eb2792353d7674803.png"},{"revision":"3bb5ccb0daad2aece6687133150dca96","url":"assets/images/10-58d0447450e0033aff233f70b56969e0.png"},{"revision":"b1c805662af1dfe673d6cee567ccf82a","url":"assets/images/10-79c11f2996066593ddeba91d1a9f6180.png"},{"revision":"e0a1562132100f5a89ac07f5b9958852","url":"assets/images/11-2a5f3cc6447c99cb7ae9b02b466bc418.png"},{"revision":"6baa6d0058a927a1352928b8655d29aa","url":"assets/images/114514-1e62aac2f66b45ceb53cc2fac060a541.png"},{"revision":"843c8deefe2ee62b05cddda23645fa75","url":"assets/images/12-ebcb424357a387dee3e7a6246b368966.png"},{"revision":"18e11b38b411d39f9897e78c2751706d","url":"assets/images/13-58ef837abfe450269fe5e47f439a1daf.png"},{"revision":"60e9076514713df5fc325cace9be0972","url":"assets/images/14-f50c97314dbdd481a7afa7108f9a01c3.png"},{"revision":"8afad3e30298f6ee2c44ea6b077771a6","url":"assets/images/15-9168d62fdaa0897e3b20355bd3ac5484.png"},{"revision":"c8906eb098d678e9c238ef60830e3961","url":"assets/images/16-9fd1a097e27350717ebc802e3cbb7d6b.png"},{"revision":"3859a843d71317bacfab4ef00c5005da","url":"assets/images/17-adc869f92e3d754411b20c3bb418786c.png"},{"revision":"3db99355f4beb05a03375d41217ff9cf","url":"assets/images/18-22737ea9026c7132cb433cc7b8dafc96.png"},{"revision":"7fbde148ad63ad1094a97afc11cae232","url":"assets/images/19-03b6b776a93e85562d8de889b7711c0d.png"},{"revision":"5433ae66fd463f4095ec5f30bdf9730f","url":"assets/images/2-1-c8d736d92f46f281cf99dfe785fd43fc.png"},{"revision":"73d862dabd772accccb40e8046818900","url":"assets/images/2-10-5d744a4763b4dbb5e1b86c82ba687b88.png"},{"revision":"87be4ad3f839de1911e9876e8f2247d4","url":"assets/images/2-11-709f9e72ea3c12df9f63f0d29e741f8c.png"},{"revision":"5ee1dc9ffdd7515a18d593d308ff6edb","url":"assets/images/2-1acef7da34adea86f13cbec0472b3562.png"},{"revision":"c04bcf8bc9422a59f6b411ac6c40a76c","url":"assets/images/2-2-ac473eace1924af50f493dbb97c04027.png"},{"revision":"6a93199caf4c36d145ae66d58b7d5edc","url":"assets/images/2-3-cf06bc179c164e5d1b9e983edfa28412.png"},{"revision":"afb627b89e1fe2010eced8e182d692b6","url":"assets/images/2-4-e67d806fa8d93ba71e31c9f799abcd80.png"},{"revision":"945748c9cf235228aff740eb486af53c","url":"assets/images/2-5-7a7bd93f62aaaeb34447423e4c68bd59.png"},{"revision":"4f547d6af1cafa71d4ecf482b46a00ca","url":"assets/images/2-51664a177bbbf2a515d9704289dcea9e.png"},{"revision":"8a3ae42717debcd6bac0c88134777186","url":"assets/images/2-556589bc73279f249458dbbbf7a052f2.png"},{"revision":"f7b7d96b7c074dc8fd7f356b21edb28d","url":"assets/images/2-55c73126d5d73e5fc0c897e359acd749.png"},{"revision":"593cce7020a26d2d0a55463258a9a288","url":"assets/images/2-6-9acf45a1ef22a7cde491b0e99c917901.png"},{"revision":"271fce2cc8fbe3e0f4e4938a54302462","url":"assets/images/2-7-d434403125983862a35ac879fee0b61a.png"},{"revision":"40732a53711be50db5d1d5568770cfb4","url":"assets/images/2-8-47171419b85b57dd9929fb0e06e6a681.png"},{"revision":"6a2af29b06ca8112aa83eac83e238ac0","url":"assets/images/2-9-fbd5ff8d3f8ae5ba6f31a1186106f1b8.png"},{"revision":"7d1c2028f06b3edca532324db880ffa4","url":"assets/images/2-9c0f6f91dd65af014d51552ece697322.png"},{"revision":"bcd0f6c5de54a1befcc0042f05db4ee0","url":"assets/images/2-ce811015b8ce998492f1c4ed5cbcd428.png"},{"revision":"b5d75c6d706455fc2c9d8d69e237f07e","url":"assets/images/2-d12962d444e490509e3c8ccdde97ffe9.png"},{"revision":"5e2e7505b6ddea2bbfbf19964b38824d","url":"assets/images/2-df20a5e9aa3b65320c6f70000b32b260.png"},{"revision":"44d8c03c57fb92bd4ae07849b6d95907","url":"assets/images/2-e95fca36b87966d5033150aa4b7f0028.png"},{"revision":"44b24fd5656a8250513e304c9041436d","url":"assets/images/2-f05e09a60b2283c4c783286ea72f0749.png"},{"revision":"3434ac8ae15e9cfce03418b5d790ed44","url":"assets/images/20-563f0bf4bfa9279537b59cfd43d1fee6.png"},{"revision":"3dc2005cc9fc27ba3f49774d0231e485","url":"assets/images/21-d088637eb2dac73e6e85ef7c4520cc83.png"},{"revision":"53cb6fad2c56bc7e380f4dacb6da0b1c","url":"assets/images/22-42f6cc05337327eaa1f1191503122d82.png"},{"revision":"706da148b7157b1cad2c49465d4a81cc","url":"assets/images/23-0e2a01d94460d264c762b6ca6042203f.png"},{"revision":"f8d5c66e5e6f0353dd613ee8a33dcc22","url":"assets/images/24-ce129e614f6267791eef423d18d9b6b9.png"},{"revision":"a550a5c8cbe32d257d4308f407e81614","url":"assets/images/25-9b5c9bbd61082314a6c537fc480c0b6b.png"},{"revision":"a094343d7b92fbc891764fc40e4f4210","url":"assets/images/26-642f7846d0f720ebe452d6100b96c62f.png"},{"revision":"0558f957777dfa9fc6c7dc4cf02fddb1","url":"assets/images/28-4dab12401b4028e9f9b3824ec33210b9.png"},{"revision":"e6f93fb3e4bc19f24eede3fd1107ea5b","url":"assets/images/3-1db9a2316cba4718eab2a52911330ee5.png"},{"revision":"8ef6661f35d0c523ca3a7a6021d175aa","url":"assets/images/3-66f9827f9173f1489b47dce22df687ce.png"},{"revision":"da82fc2e94d198cc9f6bf36a59d54da5","url":"assets/images/3-71ded5525c6fa68a07c8c2d37daef753.png"},{"revision":"a822a2d6db62a21e7a19521023052c6e","url":"assets/images/3-8bf0c51795432e5912a61e6eb3680cb2.png"},{"revision":"ec46cac3a3aff08215cf620bddce94ce","url":"assets/images/3-9995127cdc5a82918c881f970b13c562.png"},{"revision":"59fe242c5f9d8b1217d7bee8a948e548","url":"assets/images/3-9b1937619f453c539263557fee89efbd.png"},{"revision":"f6c62d2d3f3a8a78aa8651797807e127","url":"assets/images/3-fb220c0d99514810193107059939a377.png"},{"revision":"72d0c4dbe45f7d297332a37c4e9a048a","url":"assets/images/3-fe9463a3e5f63e2e349440726f0d81fd.png"},{"revision":"2a54646c4d2a6473f78bc887534c1f0d","url":"assets/images/31-932349ed508962ccd6c31ee82354f564.png"},{"revision":"ca96dcd5b0ab7e868f58de84355f194a","url":"assets/images/32-084b2ddc6f2f990004556e5b12d99817.png"},{"revision":"fe45b36e3b0f52ada1ec79074e747aab","url":"assets/images/33-d23918939eb19e7974ae9cdbce1027b5.png"},{"revision":"1fec9f8134e5a9d396d06e16e4d3c1c1","url":"assets/images/34-a3c3c3c133da75b280f24f85abc4f320.png"},{"revision":"2a68dd3ffd08062f7729f73f971b1500","url":"assets/images/35-071df367286bc1e809ba78739976f6cf.png"},{"revision":"d4482b4c3b67bee34a541ab0e23c1a10","url":"assets/images/36-6ff139a8048e566c1ab57d0fc38d32c6.png"},{"revision":"dc778be7c5e1891db629896d3693645c","url":"assets/images/38-b29821ddd2e43ca8299f1dd8c710210d.png"},{"revision":"626bd563c935c7efc272cbce3d37f5be","url":"assets/images/39-baa030bc82af91717759ca2719bf90d9.png"},{"revision":"d85a3d62627b3af1c3c03dfea3ef64ba","url":"assets/images/4-0c6b147ef7733713ebc97beaddc1c626.png"},{"revision":"e62eb90a25be5832a1fe8b2cabb5c812","url":"assets/images/4-0e82318f58f07efb57c82b133b38d3d0.png"},{"revision":"d2c1eb0eaef1183a44d165b4d42e32dc","url":"assets/images/4-8a72b836d22ba18aa9389c39ba6c51c7.png"},{"revision":"b656502de4ec7f7129911a43d0169441","url":"assets/images/4-f1fd7c802a1070f8cd7574dfcb79a862.png"},{"revision":"f8743601775edd0d671a9452a328e481","url":"assets/images/4-fba804575ca6d381be9f38ea98c30139.png"},{"revision":"a9cf568e306ace85e270669d441de239","url":"assets/images/40-3b37a921c960631df874b2ce1a953662.png"},{"revision":"7bb46016779347ac29c53873f0051869","url":"assets/images/41-fdecbfa4493a777357fbb7fbb8c01ccf.png"},{"revision":"1c887d7e9a183958c868ccbb5e582640","url":"assets/images/5-41222974cba37e06e8da7989b0a14e6d.png"},{"revision":"eb277c07e539ea66f67614761d1b2970","url":"assets/images/5-d3864713009211306577087551909079.png"},{"revision":"c32e341dcb31794220621e226972831a","url":"assets/images/5-f07d38cf9490a1e57d3f67afe2cdbffd.png"},{"revision":"d174a56992cb05eac938e2f6caa7fd91","url":"assets/images/6-129b6bb40f689333a684b72625f91f88.png"},{"revision":"a5b492159aadb547b17a7ff179016ab3","url":"assets/images/6-6ec3b7c0355b16ca02d14946d2a9e443.png"},{"revision":"89e87fe0a7412f27456018bdd95c2ff8","url":"assets/images/6-97c7203d853ded602085b4525f267c62.png"},{"revision":"096b74231b81bc8d18a94a076d096e8c","url":"assets/images/6-ba443fb5d2514b6cf36161896ed90df6.png"},{"revision":"1fc0f32d51d17de697e95474c3f453fc","url":"assets/images/7-2f74b6a8e030205a10793ae8fe230f6f.png"},{"revision":"9a61f30d7090f33c731e7c1e064093d4","url":"assets/images/7-583d0fa0eb03d348efb01ad6483b0540.png"},{"revision":"86d6c841175ac0391320bdada1f282ac","url":"assets/images/7-a4c8006f86d035d3f9fc40d11862bd16.png"},{"revision":"9ca6c5d717ca6758d28097ada0bdf687","url":"assets/images/7-fdf7daf8e71fe0dabd29883e80d5920f.png"},{"revision":"bc6ce3a2ea9ce7f0de2ba9802d52ed92","url":"assets/images/8-255bf14fc8482571d8abcc90a2e51c55.png"},{"revision":"22dcaaa0e33e13c42c994fb15b2f475f","url":"assets/images/8-506a0e50715a2f984bd4bbcccc2ed496.png"},{"revision":"05525700de6f31dad6a505c0bc44e3e0","url":"assets/images/8-7362f0389744b19cb7afedf06dba78c2.png"},{"revision":"f770b26c6d92169ddd0425422e106213","url":"assets/images/8-cd31db3cd6d8eb8677727b6051f1d179.png"},{"revision":"5da974fa6ad4ea9a407d2260adf1eef6","url":"assets/images/9-361355951f44b7ac2739f1874efb6283.png"},{"revision":"935fd7a3e5789147f5499609608fa0cc","url":"assets/images/9-b01aa2c198ce4f9f9c5f78ea398c0088.png"},{"revision":"a0fdbe75658531611e5321a5667f2f24","url":"assets/images/add-fa823580ac441faa72470b75bac5ad3f.png"},{"revision":"7e530e321e40a157435b93858f178853","url":"assets/images/add-new-5c80d779a7b257c4e4520dead7f6c5cb.png"},{"revision":"1e571ba2dc373ae862236bdc73470ddb","url":"assets/images/add-web-db168ad7f05902ffac1260beba0c09ad.png"},{"revision":"6d958735ee195bc9e135fcec0715248f","url":"assets/images/Adyeshach-1-94a06e5e0a5a17584b564c85d25351b8.png"},{"revision":"cda571fe1e0e13743c8ad0f62a6e08c3","url":"assets/images/antixray-mode1-1-c745b72e2ef17a6b92748483fc3d86b8.png"},{"revision":"3e646e8705a0e98d69c207b97c7f17ca","url":"assets/images/antixray-nerher-mode1-d606eadfb2b2b441fac8c0225e6a244f.png"},{"revision":"d1cfe9adf5bc3efedff51d3b753884ca","url":"assets/images/api-8c0008a3d21fcf1c11d808210b463dee.png"},{"revision":"fe3ed43e00bda741573c70583ae2f440","url":"assets/images/baotadianj-966228553cc144002a83102397088650.png"},{"revision":"e751e6255e7050ecb3c6e36fa4b65366","url":"assets/images/bedrock-core-running-83afbbe75cda6866b57aefe4fb6b3957.png"},{"revision":"7ebaf9936f9023d02c27896c74a38c53","url":"assets/images/checkitem-ef98b299d527696f72526786248802a7.png"},{"revision":"d1e98d86cb8a790994abc83e73cadd43","url":"assets/images/choose-second-4d954d983d121381b12f2231865f33bb.png"},{"revision":"f0a5aa8b4b14dc0dabec24961b5c79d0","url":"assets/images/CIMM1-1a61f996e629c877ed443d26c9518569.jpg"},{"revision":"a169a3585eef7aba18724bb08bdb1afe","url":"assets/images/CIMM3-9a331b250ad1dc7305e5633020e235fb.jpg"},{"revision":"e25669c599db681391ec7f646906a836","url":"assets/images/CIMM4-2c564f2c7b5e7f399eae610730b16c73.jpg"},{"revision":"9b02f6dbc0d64696b0f2384d650f1c63","url":"assets/images/close-yellow-cloud-62884a47bbee6215fc22fcc81eac93d4.png"},{"revision":"cc0b8b6c262a6131527086a63b2a1099","url":"assets/images/cname-313f4eea05b344d3890d5f764b1fbdde.png"},{"revision":"3a083f9794197b40a2e39606e1e926a1","url":"assets/images/command-4-9e783c88970d5d2f7366091b6151fdf2.png"},{"revision":"bd308796e5496b1bf47e5775a3feefa3","url":"assets/images/command-40654439c664c458d052cca6df33df7c.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"43acd28f6f72cadfc41a0bdba63d21d0","url":"assets/images/DecentHolograms_1-ff5d6633df691781fad5a8ec3cfeff7d.png"},{"revision":"d79baf505fa092f9aaa92e485f833569","url":"assets/images/DecentHolograms_2-5a6d611b4af1493571a55349f577a13b.png"},{"revision":"e9232d9b4c15f59134e0a788d0cbb970","url":"assets/images/DecentHolograms_3-3f42239088ce622240238ba5556617df.png"},{"revision":"d356d624d9533047564b4bff136dcfd3","url":"assets/images/DecentHolograms_4-e818015ee3ab0af58af718ab2ca0a14d.png"},{"revision":"9d8e4a77fdc8b20b087d118883d5ff5c","url":"assets/images/DecentHolograms_5-0caad81e8f0a7e09db7e2c34b8e8dc0d.png"},{"revision":"25d74389ccab08aa56134a1128a8211b","url":"assets/images/DecentHolograms_6-90760721f5c802e1898d96e738b3cada.png"},{"revision":"a3b2b58b529185baa3f8b367be02fa54","url":"assets/images/dian-new-3d1d1049b492a40e5824de164d9d84d5.png"},{"revision":"8258db8df4c6d34fbe22f47bc0924247","url":"assets/images/dianji-1a0305571907c2a31a6448848035f561.png"},{"revision":"3078d1ef8f949b23f981a85f6d681f4b","url":"assets/images/dom-0fc5b2c981f39e6140f33b6a1a5a8019.png"},{"revision":"c58709027cc8c54fc8e770d19b57bbd3","url":"assets/images/Dominion-08-aa2dfb5527f036472c2a4a8b0f44f743.png"},{"revision":"0bd6dd570e38c6e658ad739037b0c61c","url":"assets/images/editor-6396d8de461a51c8fca947a207749fa1.png"},{"revision":"6aa676852ab2205d1a37a965967c25df","url":"assets/images/getinfo_1-e7c2e9072e0ab5ab73991d7d0810f74f.png"},{"revision":"92d78187bca92dbde0a99d4bb1cb4fa2","url":"assets/images/getinfo_2-7b3436f4c81485c65868c2567bc64355.png"},{"revision":"26f745f1d1d78de42362a1cd4d3f0677","url":"assets/images/Geyser4-65af38ba06e3c8b2197460e45b073778.png"},{"revision":"77184522ffe184210ee5e1cf08677f66","url":"assets/images/Geyser5-5767782dfa709a3b6bbf7207bb92c245.png"},{"revision":"8428506ecb384598104aad818d5e13da","url":"assets/images/HbuilderX展示-4c0eb9762c8df510dd1fdead73592485.png"},{"revision":"9fa252a83f65035d89ecff73cebbf83e","url":"assets/images/hd已经归档-32249dee366a00899b649d8adbb565a3.png"},{"revision":"fbaaa116cfda74345ec14fd6929b3906","url":"assets/images/holo-dc42590f8c9261569753dd97e1bb502f.png"},{"revision":"e610a92efce164a9dfd7ea65c346c72b","url":"assets/images/if_2-90c7db4f40a59b98effa79e8e636dd7c.png"},{"revision":"bca5ccf5384e8a7c3c7aebb9ae5af86f","url":"assets/images/if_3-205c9cef9690cd3f9426820f1122c6b1.png"},{"revision":"b15662c786e3440388e26c80ee0024d7","url":"assets/images/index-9d9386098791038e0bc3bcb7a4d60e5a.png"},{"revision":"e19478245ccad11ce332d2d756364f10","url":"assets/images/install-961b5ff3d59f606626482ae1aaeca596.png"},{"revision":"c97f4ea4fba6ffdd4d8345eb70341761","url":"assets/images/jieyazip-aabb717cbd34ebf3ed650fd66803a5d3.png"},{"revision":"1f74953845fb5ab78bf13c1e1a570b62","url":"assets/images/kit_1-c42f5469a7f8ac450f961fe5c7e4afb4.png"},{"revision":"786cea26ffe399387c8fac7240496870","url":"assets/images/kit_3-6091a3a5dc48ac4cf5589c748467e21e.png"},{"revision":"f5025dfbbe5fe1c00444f43de95ca59c","url":"assets/images/kit_4-64320f25f1a7ea01c78a42e78a7eae7b.png"},{"revision":"3e3e255dddf6fe9eb1b85a499b41f99c","url":"assets/images/levilamina-is-coming-b99afb6c12b22333b2a4d8220c10ac2e.png"},{"revision":"8ffe072b21d7eb9d859b4b5a86312673","url":"assets/images/levilamina-will-archived-b38aceb46a17e226c0d0298373a580e6.png"},{"revision":"0861a904462463c6b852a55bc501c522","url":"assets/images/macOS_terminal-3e17a4826476c7e694c98e88703bea66.png"},{"revision":"d423771f8bba28959ab8c2c385a259fb","url":"assets/images/mcsm-f20b3e7b3fbf022070433dcccc319d1f.png"},{"revision":"dcaf899574d7ac03db6e616e9098e4e5","url":"assets/images/memory_1-ec2a05c0e91321febb25e4549a41189f.png"},{"revision":"a2e2226081589f682be3666837f037dd","url":"assets/images/memory_3-5611ba35e80158eee2b7c86753fe39f9.png"},{"revision":"e399ac82230ef424f1567cb535457105","url":"assets/images/memory_5-8cb5f197ece911104373f98f118a9775.png"},{"revision":"53f963020496218631b6bff8b120b29b","url":"assets/images/memory_6-053f3aee6576c77c248c4f04fb048325.png"},{"revision":"7212760a7b3a57214fff89f43adada0e","url":"assets/images/memory_7-5e6c73d227dfd1b813ca04e6c8c7f7e1.png"},{"revision":"a3c5b0424afab5ed68fd42e3e596dfe5","url":"assets/images/memory_8-78c8f2969c7ebffe36c247b26c88f86e.png"},{"revision":"5135c604a94e84dc848740b4dcb25877","url":"assets/images/Minecraft_Formatting-04a724dcfe681ac715cf9c1bb542be74.gif"},{"revision":"b813410515569abd0965df8fe494e548","url":"assets/images/MiniPlayerTitle-1-2b210e32e972f7622d259979cede0c04.png"},{"revision":"0198f0f644567a5c6590875337b2d874","url":"assets/images/MiniPlayerTitle-2-9d9eefa7993524cb3f75089ada14f448.png"},{"revision":"3a0c4398d1f4cb711b8d3a5afde7e60b","url":"assets/images/mm-1ecc89ffb3cc2398697d18068c88d969.png"},{"revision":"c939dd55ffc73fd55c101fb51a555079","url":"assets/images/motd-3d72069f027158b8f6de113d70dbe479.png"},{"revision":"4bd57a588c33e2419452c7088097d017","url":"assets/images/mysql-021568c5ef1d502632950f56dbf470b9.png"},{"revision":"8f7bf62fbdfd604d76bab4fcb83c4e36","url":"assets/images/nogui-92030a95bbe6f727b682636fbe492382.jpg"},{"revision":"9dc395225c71ecd76be2e6ca6c03c28b","url":"assets/images/Npp展示-49f716bb51e81c8492ea6ffd12f1a11b.png"},{"revision":"1b98d8a7ee5aca0eb851943c5aa4100e","url":"assets/images/nukkit-core-running-29a0538bd9c9c191aee3cf4118b655c5.png"},{"revision":"1091d963a8808832206df20e2fc415ac","url":"assets/images/N减减展示-e586599c5b6e1716133361d3a34a0175.png"},{"revision":"5b5b9f619bce00550788f37eb868d631","url":"assets/images/on-63e1d541c4c9de5b41d182aeea140286.png"},{"revision":"ced9a665c3e0b3d73a0e4100a0cc9cc3","url":"assets/images/Oracle-1-bc8d29f08208e6a87a6ae710bd3d9cb3.png"},{"revision":"3d18a844e9d9022ed13b6fee5d493b8a","url":"assets/images/Oracle-2-5410980e2bdfae97bebd6000077381b7.png"},{"revision":"bf571e1a8b03d3126d62d3693fe8c8b8","url":"assets/images/Oracle-3-f1e96335c6ae9fb30025417c33d8b0a8.png"},{"revision":"53b56f7d4dbf60062c5e2e0a49512243","url":"assets/images/Oracle-4-5650da48acfb6dae1f21ff89be5e388f.png"},{"revision":"3c2c4bf1bfc9b0d424bd8665fd52ac1e","url":"assets/images/Oracle-5-d0cb65f39baf7ec8c57916a81e991914.png"},{"revision":"5f001420bc4efe43af9f92fad87bc7e9","url":"assets/images/origin-c649add2e80f8e0e56f7a69f3f6332cd.png"},{"revision":"9a6382b17d4809c96848568150796926","url":"assets/images/paste-1-f9b464488c8ef04c2b5eee57683af4e8.png"},{"revision":"cc4fdb236969a75971bc91c4b8d07c35","url":"assets/images/paste-2-be07f8b06a2413081516a54f9a990a27.png"},{"revision":"d4b224372c1304021abaeb42228dba01","url":"assets/images/plugin.yml-c6d0b15344a0ebed3694780fbb5fb9a3.png"},{"revision":"9a57aea4f9fa2cc6e0f9192f3f3466ef","url":"assets/images/pocketminemp-core-running-68610d3b3173e3b52f5f1c57736ca67e.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"d99f3b7d509d7a7ad45ef97021572cf7","url":"assets/images/powernukkitx-core-rip-a6b695ebc905f7e2b4dd1bcc7269e0e3.png"},{"revision":"6fdbc877454241afa33f415a493d9912","url":"assets/images/powernukkitx-core-running-80f78172791a434359bea8ef8d148e5b.png"},{"revision":"32f2acd77df82462590f3ef0c284290f","url":"assets/images/QuerySubclasses-b136586da8818495c77f8ead3519151d.png"},{"revision":"0d229206feb416b2b32207aa3c9ec1f6","url":"assets/images/QuickShop-6300573a93839a6234a877ca1d17e33d.jpg"},{"revision":"230ab0fee144c68671b7d30a16f6afc2","url":"assets/images/remove-item-f43d2a3789816695cbd14761938fa1ed.png"},{"revision":"421bae2e500193abce8912ef1aca1019","url":"assets/images/removeindex-2dd066ef2708c0c7a83a6c993a6cb055.png"},{"revision":"9a506953d2611cf637f8bd5518c7f1af","url":"assets/images/SearchEvent-b9e85e59fff1a78e8cb9c008aaa6c075.png"},{"revision":"b252c66b692c74b114745a58a6f46a3a","url":"assets/images/SearchMethods-3c622ec35083b3ee2105577b481535c5.png"},{"revision":"ee6c0c2157508bda29654186d2526754","url":"assets/images/shangcwenjian-a2457bedcba5664d959eb277f2a7bf6c.png"},{"revision":"7061feebc0b9f4d043c927add59d9e89","url":"assets/images/SkriptBasic1-33f7a98b82d4e1ddedbad4d651f8f136.png"},{"revision":"a9a6602efd196abce1109d66c7049309","url":"assets/images/spark_start-cbc26a47c13a46094ffc66952d3dc35d.png"},{"revision":"2af106dcbb74b265e062d63aa0065e0c","url":"assets/images/spark_stop-d1af50615b6a3e1251f179e0e8460b96.png"},{"revision":"805f0e3c4a3b3c82e80cdbb9a9e0296c","url":"assets/images/spigotmc-1a4ba445397c755bc2a08085aca98220.png"},{"revision":"3379209f06637e8fa7e802b43d521e6f","url":"assets/images/Spigot搜索-ee30023f81de65d4766f39e5fc473dd6.png"},{"revision":"4d0e0feebc2ad073bbfb2fbdac91afb4","url":"assets/images/sublime展示-c4487487f3f1d91698a5875dff5c9b0e.png"},{"revision":"5aeaf6a6722a7187a01e94c6f1a1bb4f","url":"assets/images/TAB-2-50d4189ba4a6c6cec40c1ef2ab8e4f2f.png"},{"revision":"948c73d004e7b82a372cf94c86ab3463","url":"assets/images/TAB-8-f115860381c6c6457ea6ecd06f23b60e.png"},{"revision":"96493548fcb631349a4497af353ed42a","url":"assets/images/talentsaclogo-f9d205117a31b982927bfaed34eac254.png"},{"revision":"47a1786ebe3673b03b7c4a4d33092858","url":"assets/images/termux_screenshot-1b57d43e16118967fba29ef11dffe059.jpg"},{"revision":"bb071cdd3ab62251fdb23f2bbb6a61d3","url":"assets/images/tianjiahuiy-f135045e78f3cae3ae085ca5727755b9.png"},{"revision":"7dd0f3f62a413ad01ad62d2743ef5882","url":"assets/images/tianjiazdy-642888e7f5414fdd1c20eb842a9005be.png"},{"revision":"c3e79a270fd58fd4521ee579c043f744","url":"assets/images/tianxym-f1c52737f3ba0d8fc3b0312fd6953db8.png"},{"revision":"05eb3d62470b79587ed78e939e711d24","url":"assets/images/title-360fb2dd00ad49fcebe31e6bdc489227.png"},{"revision":"da20e2a00e57ce713d1d685b5b52d9f8","url":"assets/images/trm一定要看wiki呐-08a6ca6bee2d5759a58ad7b7cb1ef43c.jpg"},{"revision":"fb9faf0fc14a74f9f3fd0e1db8628dee","url":"assets/images/troll-icon-54aae7973142365e3ebcc713a48dd2f8.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"59881838c96621c6aabff692bcfaac4f","url":"assets/images/trollstone_v-462d0ff8ed3722ec018353c67263d5d1.png"},{"revision":"f699d597ab7ad63285a23f96af51c9b3","url":"assets/images/unzip-af18aaa262463a8aa70c76f1d08d3273.png"},{"revision":"1c831746df6d6598a9a4cb90f1283775","url":"assets/images/upload-cae0c44f9dd8c5f6f2eec340c1539dfa.png"},{"revision":"6bd39cbb0c5c57443da39464e5803af2","url":"assets/images/var_3-59084dd1519d2535566639f7a7c97e04.png"},{"revision":"8f52a672afc12ebf645a88f6930b61a3","url":"assets/images/var_4-4d7a9aa93051f16e249f3a7724eae826.png"},{"revision":"e0dda297392f0b75587a9aadee0c179e","url":"assets/images/var_5-5dce266891dbee0fabb3adbda90cbb94.png"},{"revision":"7fbc187406bb234d149904c69ef7e2a9","url":"assets/images/var_6-d657d44f33fc354cc9911008de45c144.png"},{"revision":"d578846335e1540b0f4731fd03b83b11","url":"assets/images/var_7-537984bea8960acf0f2086f342c3b171.png"},{"revision":"c7163e6699d42cda33a96801f2059cfd","url":"assets/images/vercel-login-85f1377f96ab97f9f40a41b33da14872.png"},{"revision":"690b1e63f85a7fbad307401620cf62ee","url":"assets/images/VersionChoose-dabef0ba09adf92bc4c22692c26f3442.png"},{"revision":"679144f6b4402cb950e29af3b57d387c","url":"assets/images/vscode保存和自动保存-2bb449e003c2188ff00f9cb58396a2b8.png"},{"revision":"ebcfc2b0ac5603c346d3369d7fc9539e","url":"assets/images/vul-tell_color-0ea3b9e53425611de4c3b1543569ecd2.png"},{"revision":"2d1854682907074e6d1e76978a463664","url":"assets/images/vul-tell_name-af9d73a85028294ad9b3753ae6fcbe63.png"},{"revision":"8582486dc950d7b7209785d4ff13d017","url":"assets/images/vul-tell_papiNoInline-683b384943538f641267b459596c19f1.png"},{"revision":"5bf8bbbe95169333754147acaf14ae6d","url":"assets/images/vul-tell_papiWithInline-06b6263c9716a6675c655c3bb08bf0d1.png"},{"revision":"6cdcdc828321ceb7809e94e69b594af2","url":"assets/images/vul-tell_papiWithJoin-c27a3fb4f724bc42eeef7674078bcf5e.png"},{"revision":"6808c7ce294ab84882c77d5dbaad5693","url":"assets/images/vul-tell-5e89808de28630eae313c2858a6b2501.png"},{"revision":"e1deeff288c41e3473a75a000dc0eace","url":"assets/images/web-tell-97c6594cea9e90c76ea83472b06b706b.png"},{"revision":"8515e3918a2e5c46ae5bd55349039169","url":"assets/images/wenjianguanli-5cca234ebb94201386cb3cdbd1d18c92.png"},{"revision":"a02e55982393c7d44eaa802d776e5b42","url":"assets/images/WindTerm-2d39383dcd57785be954d86553986fbb.png"},{"revision":"8ddc5f27f73b3f2bcb7c22d96459bbbc","url":"assets/images/xingjianxiangm-14384bfd84edc289d8a4d63547401a4e.png"},{"revision":"b2fb67b22de319177fddef17b41ab91d","url":"assets/images/xn-login-a42488ea20b998e81cf17beac80bc0de.png"},{"revision":"ec0ad9ea450b34f0c80f9c0bc3c7a3a2","url":"assets/images/ymguanli-0505ecd4f5e9b46d2b516a5cd3dac1f6.png"},{"revision":"6e209f960b1875e76b7f163befa6d399","url":"assets/images/zidingy-d1015457c1312127574351f364ec79e9.png"},{"revision":"9b0ab0f2c3d111ee1b9e19c6b577b8fa","url":"assets/images/不要截图这个啊-998c66db45ea2f2bb5347337e55ec991.png"},{"revision":"9f3258dfa65308545c9c0da842132106","url":"assets/images/以薄面表现vs以体素表现-082a76351a058f000b0d2e0af232c728.jpg"},{"revision":"f131483616b32bdfab1d4d02b5f3869f","url":"assets/images/保持一致的比例vs拉伸变形的比例-e746565d821ca63ab8ede58a6bd3b426.jpg"},{"revision":"a873e91e65264c8d24c1517e28819b67","url":"assets/images/历史版本-bukkit-1-6b37c964ef09fbfc276ef6a1bd849201.png"},{"revision":"dc655833f3e4bbc0e4ac4e1a85402904","url":"assets/images/历史版本-bukkit-2-0a7066acfca9d9027d4704017ef62a39.png"},{"revision":"70843a24bb2361527d338040329975de","url":"assets/images/历史版本-bukkit-3-814d80c25493d70ac8fca5f3fff8b845.png"},{"revision":"583f7ae7aa0e37089902329d3f5d258c","url":"assets/images/历史版本-GitHub-1-132461e09b0e5e9454559ed0ef3cb28a.png"},{"revision":"07b9ecafaa97ff0f02acbcb3e0d01931","url":"assets/images/历史版本-GitHub-2-76dd19217be2c436ee5e5d3fd3e9b6d4.png"},{"revision":"4c8cd9f8d9a609f90d4f2e371747d5de","url":"assets/images/历史版本-GitHub-3-d85fba30028ff65c944acf177527726a.png"},{"revision":"ba7f0c841cf7660f451848ce9295a513","url":"assets/images/历史版本-modrinth-bf53ac057b0047d6429a5301f65cbf09.png"},{"revision":"991aae6596b7358fbe22c73d60c2f0d8","url":"assets/images/历史版本-spigotmc-950e29526cf78beeabbcd7b383d7f455.png"},{"revision":"53d666d4289859a1fce7cb65c25fb56e","url":"assets/images/变量下载失败-b31f486f756a27b74456d12d65a2ea64.png"},{"revision":"46a93c27858e2ad7b5796e43b5293220","url":"assets/images/同类插件评分选择-64b93731775cf6281f4c69b2fbeae7e9.png"},{"revision":"1111abc039ba4001583cedd23ae1a698","url":"assets/images/啥是TAB-10e102aa01b98106dd66dfde46e3b672.png"},{"revision":"4047317a154e932ffc558c17a3657221","url":"assets/images/啥是计分板-17c9ff778263196d2ddf5b934ed97180.png"},{"revision":"4a65ef07a93556381ffd5a715a5a911b","url":"assets/images/均衡的细节分布vs失衡的细节分布-2d93e1768c4bc2382ac45145e12d0ee1.jpg"},{"revision":"501f59c58a99ec86bf894dbe2671e02d","url":"assets/images/如何使用Mclogs-1-ed2513937c90fd4ad25a6ee07ab499dc.png"},{"revision":"29a10fb4055038b1ccd2d28bb60fb5c3","url":"assets/images/如何使用Mclogs-2-4cb7cdde4a3c82444a9d8ad2ace340c4.png"},{"revision":"e3a15d4607bc3c64b173eac0601786b8","url":"assets/images/妙妙比喻-fe69cb2383277d89317aefcee98cd09e.png"},{"revision":"141ecf8a41ad0f29f3f54ef75a4e9054","url":"assets/images/子图标写动作-1eb8459e47c81eff3c50b48fa7ee826d.png"},{"revision":"81259c96410e2ce3da744fd94aa291e2","url":"assets/images/实体纹理-0b4d37466c3feca486a63a2da526e937.jpg"},{"revision":"09455ba6e8aae800a961e27a86f023d8","url":"assets/images/常见的HSV调节面板-11bd4ddb5767fe9972dc42b4ae1c2258.jpg"},{"revision":"2dab819137ad090d14bc2203b0f650d2","url":"assets/images/括号-9a9007d0231a0e26ee8baf6dec9b249c.png"},{"revision":"568d366e3beafc02072747ae5aec6b03","url":"assets/images/插件列表-a37819243f4b7a3d3ceb4b7022730e91.png"},{"revision":"5450e3f70932445cf80fde71da400caf","url":"assets/images/文件资源管理器-391e28e4b715ca877ad9428717dc18aa.jpg"},{"revision":"dcdecfda0639163f4cf584b995925aa1","url":"assets/images/方块纹理-76c866f9d6c94bc769fb6b8b57955d38.jpg"},{"revision":"097eff14c2a9a8d8433b36e0555b6681","url":"assets/images/旋转元素vs用阶梯状表现-3cc69f75bb38ebe80922da980b628c25.jpg"},{"revision":"bc4e3d7d095a38fa95ccb0f9b1a7e6de","url":"assets/images/查看语言-crowdin-50dd19aced266accb615cb74fdcc4d9f.png"},{"revision":"63c86dcee856e86d916685f802eb70c9","url":"assets/images/查看语言-spigotmc-60ee8e42daf342c4c8b726dd4651eae9.png"},{"revision":"ee41319bbc30117471b08b6c2d005ef0","url":"assets/images/查看语言-拆开jar-afda92973ce8deecc9f1ba7c5ee3a2ab.png"},{"revision":"5e1386736b2151cbbada7f116c832752","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-0b5219e82d3fe11eb4edd18202270bf2.jpg"},{"revision":"93ee2fc3e8eca947fcf60b2702c87bb4","url":"assets/images/没事不要免费帮人-bb3ff87710753c907857781c8c4c3bf4.jpg"},{"revision":"567cd1c561f2b816fa865c2b23f2c540","url":"assets/images/灵魂画师教开群组服-7ca5cdd4358a53b85459c4a47876a709.png"},{"revision":"fc33336f9ba300fbb086496fa4eb99b8","url":"assets/images/版本兼容图-30ab4d41dbe95909ba61a1047d86ff7a.png"},{"revision":"33a62cf42b304e8be182c89ac073868c","url":"assets/images/物品纹理-d2991664f3a44e8938fd9a1776c1215c.jpg"},{"revision":"001d4735c99c69b8a305cbb3c385ad61","url":"assets/images/白点-f8b960ac4fa48c3762046b2a69c8a4bf.png"},{"revision":"635e8d85ac7ed74acd6263d0a49e01d3","url":"assets/images/直线与曲线中的锯齿表现-71f3af753d62a6d3d6a5d2d24e8e3241.jpg"},{"revision":"9e33dac3dd42fa62940d388ece11b910","url":"assets/images/箱形UV贴图-379abc8032f2d53391efc96e69182e21.jpg"},{"revision":"1f8f19475fda34e5fd76cceae7adc2be","url":"assets/images/经典老图-1-7215e8e54895c8cd3b605df02a4af7a8.jpg"},{"revision":"13f935518a4ceaac26100ad0a6fa1bc8","url":"assets/images/经典老图-2-ed83429f604efa2593c139aff0ae9469.jpg"},{"revision":"a9ccd65573590b34b793b241461aa7a1","url":"assets/images/经典老图-3-3f4709fd96c694912dba0cd6a885406b.jpg"},{"revision":"117eeed9d3c373097eb7388b24878eae","url":"assets/images/翼龙面板-9edc8c62b2290b77da427b51777c49f4.png"},{"revision":"e0461a8aceda782eb947f91fb65ce177","url":"assets/images/自动UV-0b9e8ee30aa327663e3e79c54d9585f0.jpg"},{"revision":"bb3158215934b0d25a25bdffc253fa74","url":"assets/images/识别纹理-35ce7e2a3d491825f5c83c225f6becca.jpg"},{"revision":"0c75f94da34931c093e2255fb8fa570a","url":"img/back-top.svg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"f01a98e8ab78bb5158f33bcaf91869d0","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"1665c999a63140588921d0508265f205","url":"img/logo.svg"},{"revision":"db5e56bb21e1ee27ddac572199724e08","url":"img/nitwikit-banner.png"}];
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