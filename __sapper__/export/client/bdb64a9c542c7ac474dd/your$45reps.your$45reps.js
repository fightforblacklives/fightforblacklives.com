(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["your$45reps"],{

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

/***/ "./src/routes/your-reps.svelte":
/*!*************************************!*\
  !*** ./src/routes/your-reps.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/api */ "./src/utils/api.ts");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(utils_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src/routes/your-reps.svelte generated by Svelte v3.23.0 */




const file = "src/routes/your-reps.svelte";

// (19:0) {#if zipCodeBundle}
function create_if_block(ctx) {
	let t_value = JSON.stringify(/*zipCodeBundle*/ ctx[0]) + "";
	let t;

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
		},
		l: function claim(nodes) {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, t_value);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*zipCodeBundle*/ 1 && t_value !== (t_value = JSON.stringify(/*zipCodeBundle*/ ctx[0]) + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(19:0) {#if zipCodeBundle}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let if_block_anchor;
	let if_block = /*zipCodeBundle*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (/*zipCodeBundle*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(if_block_anchor);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let zipCode = window.location.hash.slice(1, 6);
	let zipCodeBundle;

	const getZipCode = () => {
		Object(utils_api__WEBPACK_IMPORTED_MODULE_1__["getZipCodeBundle"])(zipCode).then(res => {
			$$invalidate(0, zipCodeBundle = res);
		});
	};

	Object(svelte__WEBPACK_IMPORTED_MODULE_2__["onMount"])(() => {
		getZipCode();
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Your_reps> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Your_reps", $$slots, []);

	$$self.$capture_state = () => ({
		getZipCodeBundle: utils_api__WEBPACK_IMPORTED_MODULE_1__["getZipCodeBundle"],
		onMount: svelte__WEBPACK_IMPORTED_MODULE_2__["onMount"],
		zipCode,
		zipCodeBundle,
		getZipCode
	});

	$$self.$inject_state = $$props => {
		if ("zipCode" in $$props) zipCode = $$props.zipCode;
		if ("zipCodeBundle" in $$props) $$invalidate(0, zipCodeBundle = $$props.zipCodeBundle);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [zipCodeBundle];
}

class Your_reps extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Your_reps",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Your_reps
  = module && module.hot
    ? _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_3__["applyHmr"]({
        m: module,
        id: "\"src/routes/your-reps.svelte\"",
        hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true},
        Component: Your_reps,
        ProxyAdapter: _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        compileData: {"vars":[{"name":"getZipCodeBundle","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"onMount","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"zipCode","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":true,"referenced_from_script":true},{"name":"zipCodeBundle","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true,"referenced_from_script":true},{"name":"getZipCode","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true}],"accessors":false},
        compileOptions: {"filename":"/Users/samueldesota/d/fightforblacklives/fightforblacklives.com/src/routes/your-reps.svelte","format":"esm","dev":true,"hydratable":true},
      })
    : Your_reps);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
exports.__esModule = true;
exports.getZipCodeBundle = void 0;
var memo_1 = __webpack_require__(/*! ./memo */ "./src/utils/memo.ts");
exports.getZipCodeBundle = function (code) {
    return request("https://fightforblacklives.github.io/ffbl-data/zip-code-bundles/" + code + ".jsonp");
};
var getFetch = memo_1.memoOnce(function () {
    return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! fetch-jsonp */ "./node_modules/fetch-jsonp/build/fetch-jsonp.js")); });
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmV0Y2gtanNvbnAvYnVpbGQvZmV0Y2gtanNvbnAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy95b3VyLXJlcHMuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL21lbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNLElBQTBDO0FBQ2hELElBQUksaUNBQU8sQ0FBQyxPQUFTLEVBQUUsTUFBUSxDQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDMUMsR0FBRyxNQUFNLFlBUU47QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIOEM7QUFDWjs7Ozs7ZUFnQmYsSUFBSSxDQUFDLFNBQVMsbUJBQUMsR0FBYTs7Ozs7Ozs7Ozs7Ozs7NkRBQTVCLElBQUksQ0FBQyxTQUFTLG1CQUFDLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUEzQyxHQUFhOzs7Ozs7Ozs7Ozs7Ozs7O3lCQUFiLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWRaLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDekMsYUFBYTs7T0FFWCxVQUFVO0VBQ2Qsa0VBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO21CQUNoQyxhQUFhLEdBQUcsR0FBRzs7OztDQUl2QixzREFBTztFQUNMLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RkLHNFQUFrQztBQUVyQix3QkFBZ0IsR0FBRyxVQUFDLElBQVk7SUFDM0MsT0FBTyxPQUFPLENBQ1oscUVBQW1FLElBQUksV0FBUSxDQUNoRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsZUFBUSxDQUFDO0lBQ3hCLG9GQUFjLG9FQUFhLE9BQUU7QUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLE9BQU8sR0FBRyxVQUFPLEdBQVc7Ozs7b0JBQ0wsV0FBTSxRQUFRLEVBQUU7O2dCQUExQixLQUFLLEdBQUssVUFBZ0IsWUFBckI7Z0JBRXRCLFdBQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRzt3QkFDaEUsVUFBRyxDQUFDLElBQUksRUFBRTtvQkFBVixDQUFVLENBQ1gsRUFBQzs7O0tBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFakIsZ0JBQVEsR0FBRyxVQUFxQixFQUFLO0lBQ2hELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixJQUFJLFlBQVksQ0FBQztJQUVqQixPQUFRLENBQUMsVUFBQyxHQUFHO1FBQ1gsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFO1lBQ3JCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUMsQ0FBYyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsImZpbGUiOiJiZGI2NGE5YzU0MmM3YWM0NzRkZC95b3VyJDQ1cmVwcy55b3VyJDQ1cmVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydleHBvcnRzJywgJ21vZHVsZSddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBtb2QpO1xuICAgIGdsb2JhbC5mZXRjaEpzb25wID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBtb2R1bGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiA1MDAwLFxuICAgIGpzb25wQ2FsbGJhY2s6ICdjYWxsYmFjaycsXG4gICAganNvbnBDYWxsYmFja0Z1bmN0aW9uOiBudWxsXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDYWxsYmFja0Z1bmN0aW9uKCkge1xuICAgIHJldHVybiAnanNvbnBfJyArIERhdGUubm93KCkgKyAnXycgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckZ1bmN0aW9uKGZ1bmN0aW9uTmFtZSkge1xuICAgIC8vIElFOCB0aHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4geW91IHRyeSB0byBkZWxldGUgYSBwcm9wZXJ0eSBvbiB3aW5kb3dcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODI0MjI4Lzc1MTA4OVxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgd2luZG93W2Z1bmN0aW9uTmFtZV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgd2luZG93W2Z1bmN0aW9uTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2NyaXB0KHNjcmlwdElkKSB7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmlwdElkKTtcbiAgICBpZiAoc2NyaXB0KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hKc29ucChfdXJsKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIHRvIGF2b2lkIHBhcmFtIHJlYXNzaWduXG4gICAgdmFyIHVybCA9IF91cmw7XG4gICAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgZGVmYXVsdE9wdGlvbnMudGltZW91dDtcbiAgICB2YXIganNvbnBDYWxsYmFjayA9IG9wdGlvbnMuanNvbnBDYWxsYmFjayB8fCBkZWZhdWx0T3B0aW9ucy5qc29ucENhbGxiYWNrO1xuXG4gICAgdmFyIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IG9wdGlvbnMuanNvbnBDYWxsYmFja0Z1bmN0aW9uIHx8IGdlbmVyYXRlQ2FsbGJhY2tGdW5jdGlvbigpO1xuICAgICAgdmFyIHNjcmlwdElkID0ganNvbnBDYWxsYmFjayArICdfJyArIGNhbGxiYWNrRnVuY3Rpb247XG5cbiAgICAgIHdpbmRvd1tjYWxsYmFja0Z1bmN0aW9uXSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBvazogdHJ1ZSxcbiAgICAgICAgICAvLyBrZWVwIGNvbnNpc3RlbnQgd2l0aCBmZXRjaCBBUElcbiAgICAgICAgICBqc29uOiBmdW5jdGlvbiBqc29uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGltZW91dElkKSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuICAgICAgICByZW1vdmVTY3JpcHQoc2NyaXB0SWQpO1xuXG4gICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICB9O1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBzZXQgdGhlaXIgb3duIHBhcmFtcywgYW5kIGlmIG5vdCBhZGQgYSA/IHRvIHN0YXJ0IGEgbGlzdCBvZiBwYXJhbXNcbiAgICAgIHVybCArPSB1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcblxuICAgICAgdmFyIGpzb25wU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBqc29ucFNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnICsgdXJsICsganNvbnBDYWxsYmFjayArICc9JyArIGNhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCkge1xuICAgICAgICBqc29ucFNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2NoYXJzZXQnLCBvcHRpb25zLmNoYXJzZXQpO1xuICAgICAgfVxuICAgICAganNvbnBTY3JpcHQuaWQgPSBzY3JpcHRJZDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoanNvbnBTY3JpcHQpO1xuXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSlNPTlAgcmVxdWVzdCB0byAnICsgX3VybCArICcgdGltZWQgb3V0JykpO1xuXG4gICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIHJlbW92ZVNjcmlwdChzY3JpcHRJZCk7XG4gICAgICAgIHdpbmRvd1tjYWxsYmFja0Z1bmN0aW9uXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbGVhckZ1bmN0aW9uKGNhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgIC8vIENhdWdodCBpZiBnb3QgNDA0LzUwMFxuICAgICAganNvbnBTY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSlNPTlAgcmVxdWVzdCB0byAnICsgX3VybCArICcgZmFpbGVkJykpO1xuXG4gICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIHJlbW92ZVNjcmlwdChzY3JpcHRJZCk7XG4gICAgICAgIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGV4cG9ydCBhcyBnbG9iYWwgZnVuY3Rpb25cbiAgLypcbiAgbGV0IGxvY2FsO1xuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbCA9IHNlbGY7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgIH1cbiAgfVxuICBsb2NhbC5mZXRjaEpzb25wID0gZmV0Y2hKc29ucDtcbiAgKi9cblxuICBtb2R1bGUuZXhwb3J0cyA9IGZldGNoSnNvbnA7XG59KTsiLCI8c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRaaXBDb2RlQnVuZGxlIH0gZnJvbSBcInV0aWxzL2FwaVwiO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGxldCB6aXBDb2RlID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSwgNik7XG4gIGxldCB6aXBDb2RlQnVuZGxlO1xuXG4gIGNvbnN0IGdldFppcENvZGUgPSAoKSA9PiB7XG4gICAgZ2V0WmlwQ29kZUJ1bmRsZSh6aXBDb2RlKS50aGVuKHJlcyA9PiB7XG4gICAgICB6aXBDb2RlQnVuZGxlID0gcmVzO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGdldFppcENvZGUoKTtcbiAgfSk7XG48L3NjcmlwdD5cblxueyNpZiB6aXBDb2RlQnVuZGxlfXtKU09OLnN0cmluZ2lmeSh6aXBDb2RlQnVuZGxlKX17L2lmfVxuIiwiaW1wb3J0IHsgbWVtb09uY2UgfSBmcm9tIFwiLi9tZW1vXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRaaXBDb2RlQnVuZGxlID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gcmVxdWVzdChcbiAgICBgaHR0cHM6Ly9maWdodGZvcmJsYWNrbGl2ZXMuZ2l0aHViLmlvL2ZmYmwtZGF0YS96aXAtY29kZS1idW5kbGVzLyR7Y29kZX0uanNvbnBgXG4gICk7XG59O1xuXG5jb25zdCBnZXRGZXRjaCA9IG1lbW9PbmNlKCgpID0+IHtcbiAgcmV0dXJuIGltcG9ydChcImZldGNoLWpzb25wXCIpO1xufSk7XG5cbmNvbnN0IHJlcXVlc3QgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0OiBmZXRjaCB9ID0gYXdhaXQgZ2V0RmV0Y2goKTtcblxuICByZXR1cm4gZmV0Y2godXJsLCB7IGpzb25wQ2FsbGJhY2tGdW5jdGlvbjogXCJjYWxsYmFja1wiIH0pLnRoZW4oKHJlcykgPT5cbiAgICByZXMuanNvbigpXG4gICk7XG59O1xuIiwiY29uc3QgZW1wdHkgPSBTeW1ib2woXCJlbXB0eVwiKTtcblxuZXhwb3J0IGNvbnN0IG1lbW9PbmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oZm46IFQpOiBUID0+IHtcbiAgbGV0IGNhY2hlZEFyZyA9IGVtcHR5O1xuICBsZXQgY2FjaGVkUmV0dXJuO1xuXG4gIHJldHVybiAoKChhcmcpID0+IHtcbiAgICBpZiAoY2FjaGVkQXJnID09PSBhcmcpIHtcbiAgICAgIHJldHVybiBjYWNoZWRSZXR1cm47XG4gICAgfVxuXG4gICAgY2FjaGVkQXJnID0gYXJnO1xuICAgIGNhY2hlZFJldHVybiA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlZFJldHVybjtcbiAgfSkgYXMgYW55KSBhcyBUO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=