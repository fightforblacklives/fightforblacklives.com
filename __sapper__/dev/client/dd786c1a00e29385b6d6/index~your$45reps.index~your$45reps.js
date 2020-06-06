(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index~your$45reps"],{

/***/ "./node_modules/fetch-jsonp/build/fetch-jsonp.js":
/*!*******************************************************!*\
  !*** ./node_modules/fetch-jsonp/build/fetch-jsonp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, module) {
  'use strict';

  var defaultOptions = {
    timeout: 5000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null
  };

  function generateCallbackFunction() {
    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
  }

  function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
      delete window[functionName];
    } catch (e) {
      window[functionName] = undefined;
    }
  }

  function removeScript(scriptId) {
    var script = document.getElementById(scriptId);
    if (script) {
      document.getElementsByTagName('head')[0].removeChild(script);
    }
  }

  function fetchJsonp(_url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // to avoid param reassign
    var url = _url;
    var timeout = options.timeout || defaultOptions.timeout;
    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    var timeoutId = undefined;

    return new Promise(function (resolve, reject) {
      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
      var scriptId = jsonpCallback + '_' + callbackFunction;

      window[callbackFunction] = function (response) {
        resolve({
          ok: true,
          // keep consistent with fetch API
          json: function json() {
            return Promise.resolve(response);
          }
        });

        if (timeoutId) clearTimeout(timeoutId);

        removeScript(scriptId);

        clearFunction(callbackFunction);
      };

      // Check if the user set their own params, and if not add a ? to start a list of params
      url += url.indexOf('?') === -1 ? '?' : '&';

      var jsonpScript = document.createElement('script');
      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
      if (options.charset) {
        jsonpScript.setAttribute('charset', options.charset);
      }
      jsonpScript.id = scriptId;
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

      timeoutId = setTimeout(function () {
        reject(new Error('JSONP request to ' + _url + ' timed out'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        window[callbackFunction] = function () {
          clearFunction(callbackFunction);
        };
      }, timeout);

      // Caught if got 404/500
      jsonpScript.onerror = function () {
        reject(new Error('JSONP request to ' + _url + ' failed'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    });
  }

  // export as global function
  /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

  module.exports = fetchJsonp;
});

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getDataByAddress = exports.getZipCodeBundle = void 0;
var memo_1 = __webpack_require__(/*! ./memo */ "./src/utils/memo.ts");
exports.getZipCodeBundle = function (code) {
    return request("https://fightforblacklives.github.io/ffbl-data/zip-code-bundles/" + code + ".jsonp");
};
var getFetch = memo_1.memoOnce(function () {
    return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! fetch-jsonp */ "./node_modules/fetch-jsonp/build/fetch-jsonp.js")); });
});
var fuzzyName = function (name1, name2) {
    name1 = name1
        .toLowerCase()
        .trim()
        .split(" ")
        .map(function (x) { return x.trim(); })
        .filter(function (x) { return x != null && x !== ""; });
    name2 = new Set(name2
        .toLowerCase()
        .trim()
        .split(" ")
        .map(function (x) { return x.trim(); })
        .filter(function (x) { return x != null && x !== ""; }));
    var isMatch = name1.filter(function (n1) { return name2.has(n1); }).length > 1;
    return isMatch;
};
var request = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var fetch;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, getFetch()];
            case 1:
                fetch = (_a.sent())["default"];
                return [2, fetch(url, { jsonpCallbackFunction: "callback" }).then(function (res) {
                        return res.json();
                    })];
        }
    });
}); };
var googleCivicApi = function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var apiKey, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                apiKey = "AIzaSyDVb6LeI3JZCBL9j228ujYz2kjqsfgbnLk";
                return [4, fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=" + apiKey + "&address=" + address, {
                        headers: {
                            Accept: "application/json",
                            "Accept-Language": "en-US,en;q=0.5"
                        },
                        referrer: "https://myreps.datamade.us/",
                        method: "GET",
                        mode: "cors"
                    }).then(function (res) { return res.json(); })];
            case 1:
                data = _a.sent();
                return [2, data];
        }
    });
}); };
exports.getDataByAddress = function (zip) { return __awaiter(void 0, void 0, void 0, function () {
    var googleCivicData, addlData, addlPeople, city, state, googlePeople, people;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, googleCivicApi(zip + ", United States")];
            case 1:
                googleCivicData = _a.sent();
                return [4, request("https://raw.githubusercontent.com/fightforblacklives/ffbl-data/master/zip-code-bundles/" + zip + ".jsonp")];
            case 2:
                addlData = _a.sent();
                addlPeople = addlData.people.filter(function (x) { return !googleCivicData.officials.some(function (y) { return fuzzyName(y.name, x.name); }); });
                city = googleCivicData.normalizedInput.city;
                state = googleCivicData.normalizedInput.state;
                googlePeople = googleCivicData.officials.flatMap(function (p, i) {
                    var _a;
                    var office = googleCivicData.offices.find(function (o) {
                        return o.officialIndices.includes(i);
                    });
                    if (office.name === "President of the United States" ||
                        office.name === "Vice President of the United States") {
                        return [];
                    }
                    return {
                        name: p.name,
                        image: p.photoUrl
                            ? p.photoUrl
                            : (_a = addlData.people.find(function (addl) { return fuzzyName(addl.name, p.name); })) === null || _a === void 0 ? void 0 : _a.image,
                        title: office.name,
                        address: p.address && p.address.length > 0
                            ? p.address[0].line1 + "\n" + p.address[0].city + ", " + p.address[0].state + ", " + p.address[0].zip
                            : null,
                        phone: p.phones && p.phones.length > 0 ? p.phones[0] : null,
                        twitter: p.channels && p.channels.some(function (x) { return x.type === "Twitter"; })
                            ? p.channels.find(function (x) { return x.type === "Twitter"; }).id
                            : null,
                        party: p.party,
                        email: p.emails && p.emails.length > 0 ? p.emails[0] : null,
                        facebook: p.channels && p.channels.some(function (x) { return x.type === "Facebook"; })
                            ? p.channels.find(function (x) { return x.type === "Facebook"; }).id
                            : null
                    };
                });
                people = __spreadArrays(googlePeople, addlPeople).map(function (x, i) {
                    return Object.assign({}, x, { id: i });
                });
                return [2, {
                        city: city,
                        state: state,
                        people: people
                    }];
        }
    });
}); };


/***/ }),

/***/ "./src/utils/memo.ts":
/*!***************************!*\
  !*** ./src/utils/memo.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.memoOnce = void 0;
var empty = Symbol("empty");
exports.memoOnce = function (fn) {
    var cachedArg = empty;
    var cachedReturn;
    return (function (arg) {
        if (cachedArg === arg) {
            return cachedReturn;
        }
        cachedArg = arg;
        cachedReturn = fn(arg);
        return cachedReturn;
    });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLi9ub2RlX21vZHVsZXMvZmV0Y2gtanNvbnAvYnVpbGQvZmV0Y2gtanNvbnAuanMiLCJ3ZWJwYWNrOi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy4vc3JjL3V0aWxzL2FwaS50cyIsIndlYnBhY2s6Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLi9zcmMvdXRpbHMvbWVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxpQ0FBTyxDQUFDLE9BQVMsRUFBRSxNQUFRLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUMxQyxHQUFHLE1BQU0sWUFRTjtBQUNILENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEU7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFD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SSxLQUFLLFVBQVUsRUFBckIsQ0FBcUIsQ0FBQzs0QkFDekQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFyQixDQUFxQixDQUFDLENBQUMsRUFBRTs0QkFDbEQsQ0FBQyxDQUFDLElBQUk7cUJBQ1gsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQztnQkFFRyxNQUFNLEdBQUcsZUFBSSxZQUFZLEVBQUssVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUN2RCxhQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQS9CLENBQStCLENBQ2hDLENBQUM7Z0JBRUYsV0FBTzt3QkFDTCxJQUFJO3dCQUNKLEtBQUs7d0JBQ0wsTUFBTTtxQkFDUCxFQUFDOzs7S0FDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEhGLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVqQixnQkFBUSxHQUFHLFVBQXFCLEVBQUs7SUFDaEQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLElBQUksWUFBWSxDQUFDO0lBRWpCLE9BQVEsQ0FBQyxVQUFDLEdBQUc7UUFDWCxJQUFJLFNBQVMsS0FBSyxHQUFHLEVBQUU7WUFDckIsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFFRCxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLFlBQVksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQyxDQUFjLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwiZmlsZSI6ImRkNzg2YzFhMDBlMjkzODViNmQ2L2luZGV4fnlvdXIkNDVyZXBzLmluZGV4fnlvdXIkNDVyZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAnbW9kdWxlJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgbW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIG1vZCk7XG4gICAgZ2xvYmFsLmZldGNoSnNvbnAgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIG1vZHVsZSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAganNvbnBDYWxsYmFjazogJ2NhbGxiYWNrJyxcbiAgICBqc29ucENhbGxiYWNrRnVuY3Rpb246IG51bGxcbiAgfTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICdqc29ucF8nICsgRGF0ZS5ub3coKSArICdfJyArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRnVuY3Rpb24oZnVuY3Rpb25OYW1lKSB7XG4gICAgLy8gSUU4IHRocm93cyBhbiBleGNlcHRpb24gd2hlbiB5b3UgdHJ5IHRvIGRlbGV0ZSBhIHByb3BlcnR5IG9uIHdpbmRvd1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MjQyMjgvNzUxMDg5XG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSB3aW5kb3dbZnVuY3Rpb25OYW1lXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3aW5kb3dbZnVuY3Rpb25OYW1lXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTY3JpcHQoc2NyaXB0SWQpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NyaXB0SWQpO1xuICAgIGlmIChzY3JpcHQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0ucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaEpzb25wKF91cmwpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gdG8gYXZvaWQgcGFyYW0gcmVhc3NpZ25cbiAgICB2YXIgdXJsID0gX3VybDtcbiAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCBkZWZhdWx0T3B0aW9ucy50aW1lb3V0O1xuICAgIHZhciBqc29ucENhbGxiYWNrID0gb3B0aW9ucy5qc29ucENhbGxiYWNrIHx8IGRlZmF1bHRPcHRpb25zLmpzb25wQ2FsbGJhY2s7XG5cbiAgICB2YXIgdGltZW91dElkID0gdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gb3B0aW9ucy5qc29ucENhbGxiYWNrRnVuY3Rpb24gfHwgZ2VuZXJhdGVDYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgICB2YXIgc2NyaXB0SWQgPSBqc29ucENhbGxiYWNrICsgJ18nICsgY2FsbGJhY2tGdW5jdGlvbjtcblxuICAgICAgd2luZG93W2NhbGxiYWNrRnVuY3Rpb25dID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIG9rOiB0cnVlLFxuICAgICAgICAgIC8vIGtlZXAgY29uc2lzdGVudCB3aXRoIGZldGNoIEFQSVxuICAgICAgICAgIGpzb246IGZ1bmN0aW9uIGpzb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXG4gICAgICAgIHJlbW92ZVNjcmlwdChzY3JpcHRJZCk7XG5cbiAgICAgICAgY2xlYXJGdW5jdGlvbihjYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIHNldCB0aGVpciBvd24gcGFyYW1zLCBhbmQgaWYgbm90IGFkZCBhID8gdG8gc3RhcnQgYSBsaXN0IG9mIHBhcmFtc1xuICAgICAgdXJsICs9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuXG4gICAgICB2YXIganNvbnBTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIGpzb25wU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJycgKyB1cmwgKyBqc29ucENhbGxiYWNrICsgJz0nICsgY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICBpZiAob3B0aW9ucy5jaGFyc2V0KSB7XG4gICAgICAgIGpzb25wU2NyaXB0LnNldEF0dHJpYnV0ZSgnY2hhcnNldCcsIG9wdGlvbnMuY2hhcnNldCk7XG4gICAgICB9XG4gICAgICBqc29ucFNjcmlwdC5pZCA9IHNjcmlwdElkO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChqc29ucFNjcmlwdCk7XG5cbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdKU09OUCByZXF1ZXN0IHRvICcgKyBfdXJsICsgJyB0aW1lZCBvdXQnKSk7XG5cbiAgICAgICAgY2xlYXJGdW5jdGlvbihjYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgICAgcmVtb3ZlU2NyaXB0KHNjcmlwdElkKTtcbiAgICAgICAgd2luZG93W2NhbGxiYWNrRnVuY3Rpb25dID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgLy8gQ2F1Z2h0IGlmIGdvdCA0MDQvNTAwXG4gICAgICBqc29ucFNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdKU09OUCByZXF1ZXN0IHRvICcgKyBfdXJsICsgJyBmYWlsZWQnKSk7XG5cbiAgICAgICAgY2xlYXJGdW5jdGlvbihjYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgICAgcmVtb3ZlU2NyaXB0KHNjcmlwdElkKTtcbiAgICAgICAgaWYgKHRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZXhwb3J0IGFzIGdsb2JhbCBmdW5jdGlvblxuICAvKlxuICBsZXQgbG9jYWw7XG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsID0gc2VsZjtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgfVxuICB9XG4gIGxvY2FsLmZldGNoSnNvbnAgPSBmZXRjaEpzb25wO1xuICAqL1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZmV0Y2hKc29ucDtcbn0pOyIsImltcG9ydCB7IG1lbW9PbmNlIH0gZnJvbSBcIi4vbWVtb1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0WmlwQ29kZUJ1bmRsZSA9IChjb2RlOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHJlcXVlc3QoXG4gICAgYGh0dHBzOi8vZmlnaHRmb3JibGFja2xpdmVzLmdpdGh1Yi5pby9mZmJsLWRhdGEvemlwLWNvZGUtYnVuZGxlcy8ke2NvZGV9Lmpzb25wYFxuICApO1xufTtcblxuY29uc3QgZ2V0RmV0Y2ggPSBtZW1vT25jZSgoKSA9PiB7XG4gIHJldHVybiBpbXBvcnQoXCJmZXRjaC1qc29ucFwiKTtcbn0pO1xuXG5jb25zdCBmdXp6eU5hbWUgPSAobmFtZTEsIG5hbWUyKSA9PiB7XG4gIG5hbWUxID0gbmFtZTFcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLm1hcCgoeCkgPT4geC50cmltKCkpXG4gICAgLmZpbHRlcigoeCkgPT4geCAhPSBudWxsICYmIHggIT09IFwiXCIpO1xuICBuYW1lMiA9IG5ldyBTZXQoXG4gICAgbmFtZTJcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAubWFwKCh4KSA9PiB4LnRyaW0oKSlcbiAgICAgIC5maWx0ZXIoKHgpID0+IHggIT0gbnVsbCAmJiB4ICE9PSBcIlwiKVxuICApO1xuXG4gIGNvbnN0IGlzTWF0Y2ggPSBuYW1lMS5maWx0ZXIoKG4xKSA9PiBuYW1lMi5oYXMobjEpKS5sZW5ndGggPiAxO1xuXG4gIHJldHVybiBpc01hdGNoO1xufTtcblxuY29uc3QgcmVxdWVzdCA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICBjb25zdCB7IGRlZmF1bHQ6IGZldGNoIH0gPSBhd2FpdCBnZXRGZXRjaCgpO1xuXG4gIHJldHVybiBmZXRjaCh1cmwsIHsganNvbnBDYWxsYmFja0Z1bmN0aW9uOiBcImNhbGxiYWNrXCIgfSkudGhlbigocmVzKSA9PlxuICAgIHJlcy5qc29uKClcbiAgKTtcbn07XG5cbmNvbnN0IGdvb2dsZUNpdmljQXBpID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcbiAgY29uc3QgYXBpS2V5ID0gXCJBSXphU3lEVmI2TGVJM0paQ0JMOWoyMjh1all6MmtqcXNmZ2JuTGtcIjtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jaXZpY2luZm8vdjIvcmVwcmVzZW50YXRpdmVzP2tleT0ke2FwaUtleX0mYWRkcmVzcz0ke2FkZHJlc3N9YCxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQWNjZXB0LUxhbmd1YWdlXCI6IFwiZW4tVVMsZW47cT0wLjVcIixcbiAgICAgIH0sXG4gICAgICByZWZlcnJlcjogXCJodHRwczovL215cmVwcy5kYXRhbWFkZS51cy9cIixcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIH1cbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhQnlBZGRyZXNzID0gYXN5bmMgKHppcCkgPT4ge1xuICBjb25zdCBnb29nbGVDaXZpY0RhdGEgPSBhd2FpdCBnb29nbGVDaXZpY0FwaSh6aXAgKyBcIiwgVW5pdGVkIFN0YXRlc1wiKTtcbiAgY29uc3QgYWRkbERhdGEgPSBhd2FpdCByZXF1ZXN0KFxuICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZmlnaHRmb3JibGFja2xpdmVzL2ZmYmwtZGF0YS9tYXN0ZXIvemlwLWNvZGUtYnVuZGxlcy8ke3ppcH0uanNvbnBgXG4gICk7XG4gIGNvbnN0IGFkZGxQZW9wbGUgPSBhZGRsRGF0YS5wZW9wbGUuZmlsdGVyKFxuICAgICh4KSA9PiAhZ29vZ2xlQ2l2aWNEYXRhLm9mZmljaWFscy5zb21lKCh5KSA9PiBmdXp6eU5hbWUoeS5uYW1lLCB4Lm5hbWUpKVxuICApO1xuICBjb25zdCBjaXR5ID0gZ29vZ2xlQ2l2aWNEYXRhLm5vcm1hbGl6ZWRJbnB1dC5jaXR5O1xuICBjb25zdCBzdGF0ZSA9IGdvb2dsZUNpdmljRGF0YS5ub3JtYWxpemVkSW5wdXQuc3RhdGU7XG4gIGNvbnN0IGdvb2dsZVBlb3BsZSA9IGdvb2dsZUNpdmljRGF0YS5vZmZpY2lhbHMuZmxhdE1hcCgocCwgaSkgPT4ge1xuICAgIGNvbnN0IG9mZmljZSA9IGdvb2dsZUNpdmljRGF0YS5vZmZpY2VzLmZpbmQoKG8pID0+XG4gICAgICBvLm9mZmljaWFsSW5kaWNlcy5pbmNsdWRlcyhpKVxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBvZmZpY2UubmFtZSA9PT0gXCJQcmVzaWRlbnQgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcIiB8fFxuICAgICAgb2ZmaWNlLm5hbWUgPT09IFwiVmljZSBQcmVzaWRlbnQgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcIlxuICAgICkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcC5uYW1lLFxuICAgICAgaW1hZ2U6IHAucGhvdG9VcmxcbiAgICAgICAgPyBwLnBob3RvVXJsXG4gICAgICAgIDogYWRkbERhdGEucGVvcGxlLmZpbmQoKGFkZGwpID0+IGZ1enp5TmFtZShhZGRsLm5hbWUsIHAubmFtZSkpPy5pbWFnZSxcbiAgICAgIHRpdGxlOiBvZmZpY2UubmFtZSxcbiAgICAgIGFkZHJlc3M6XG4gICAgICAgIHAuYWRkcmVzcyAmJiBwLmFkZHJlc3MubGVuZ3RoID4gMFxuICAgICAgICAgID8gYCR7cC5hZGRyZXNzWzBdLmxpbmUxfVxuJHtwLmFkZHJlc3NbMF0uY2l0eX0sICR7cC5hZGRyZXNzWzBdLnN0YXRlfSwgJHtwLmFkZHJlc3NbMF0uemlwfWBcbiAgICAgICAgICA6IG51bGwsXG4gICAgICBwaG9uZTogcC5waG9uZXMgJiYgcC5waG9uZXMubGVuZ3RoID4gMCA/IHAucGhvbmVzWzBdIDogbnVsbCxcbiAgICAgIHR3aXR0ZXI6XG4gICAgICAgIHAuY2hhbm5lbHMgJiYgcC5jaGFubmVscy5zb21lKCh4KSA9PiB4LnR5cGUgPT09IFwiVHdpdHRlclwiKVxuICAgICAgICAgID8gcC5jaGFubmVscy5maW5kKCh4KSA9PiB4LnR5cGUgPT09IFwiVHdpdHRlclwiKS5pZFxuICAgICAgICAgIDogbnVsbCxcbiAgICAgIHBhcnR5OiBwLnBhcnR5LFxuICAgICAgZW1haWw6IHAuZW1haWxzICYmIHAuZW1haWxzLmxlbmd0aCA+IDAgPyBwLmVtYWlsc1swXSA6IG51bGwsXG5cbiAgICAgIGZhY2Vib29rOlxuICAgICAgICBwLmNoYW5uZWxzICYmIHAuY2hhbm5lbHMuc29tZSgoeCkgPT4geC50eXBlID09PSBcIkZhY2Vib29rXCIpXG4gICAgICAgICAgPyBwLmNoYW5uZWxzLmZpbmQoKHgpID0+IHgudHlwZSA9PT0gXCJGYWNlYm9va1wiKS5pZFxuICAgICAgICAgIDogbnVsbCxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBwZW9wbGUgPSBbLi4uZ29vZ2xlUGVvcGxlLCAuLi5hZGRsUGVvcGxlXS5tYXAoKHgsIGkpID0+XG4gICAgT2JqZWN0LmFzc2lnbih7fSwgeCwgeyBpZDogaSB9KVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgY2l0eSxcbiAgICBzdGF0ZSxcbiAgICBwZW9wbGUsXG4gIH07XG59O1xuIiwiY29uc3QgZW1wdHkgPSBTeW1ib2woXCJlbXB0eVwiKTtcblxuZXhwb3J0IGNvbnN0IG1lbW9PbmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oZm46IFQpOiBUID0+IHtcbiAgbGV0IGNhY2hlZEFyZyA9IGVtcHR5O1xuICBsZXQgY2FjaGVkUmV0dXJuO1xuXG4gIHJldHVybiAoKChhcmcpID0+IHtcbiAgICBpZiAoY2FjaGVkQXJnID09PSBhcmcpIHtcbiAgICAgIHJldHVybiBjYWNoZWRSZXR1cm47XG4gICAgfVxuXG4gICAgY2FjaGVkQXJnID0gYXJnO1xuICAgIGNhY2hlZFJldHVybiA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlZFJldHVybjtcbiAgfSkgYXMgYW55KSBhcyBUO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=