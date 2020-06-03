(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

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

/***/ "./src/components/Hero.svelte":
/*!************************************!*\
  !*** ./src/components/Hero.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var components_typer_TyperText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/typer/TyperText */ "./src/components/typer/TyperText.svelte");
/* harmony import */ var components_typer_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/typer/Slider */ "./src/components/typer/Slider.svelte");
/* harmony import */ var components_typer_Typer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typer/Typer */ "./src/components/typer/Typer.svelte");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src/components/Hero.svelte generated by Svelte v3.23.0 */





const file = "src/components/Hero.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-19bd7xu-style";
	style.textContent = ".contained.svelte-19bd7xu{padding-left:1.5rem;padding-right:1.5rem;max-width:1280px;margin-left:auto;margin-right:auto;width:100%}@media(min-width: 768px){}.hero-container.svelte-19bd7xu{font-weight:600;font-size:60px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVyby5zdmVsdGUiLCJzb3VyY2VzIjpbIkhlcm8uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBUeXBlIGZyb20gXCJjb21wb25lbnRzL3R5cGVyL1R5cGVyVGV4dFwiO1xuICBpbXBvcnQgU2xpZGVyIGZyb20gXCJjb21wb25lbnRzL3R5cGVyL1NsaWRlclwiO1xuICBpbXBvcnQgVHlwZXIgZnJvbSBcImNvbXBvbmVudHMvdHlwZXIvVHlwZXJcIjtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVkIGhlcm8tY29udGFpbmVyIG15LTI0XCI+XG4gIDxUeXBlcj5cbiAgICA8cCBjbGFzcz1cInRleHQtYnJvd24tZ3JheVwiPlxuICAgICAgPFNsaWRlciB0ZXh0PVwiRW50ZXIgeW91ciB6aXAgY29kZS5cIiAvPlxuICAgIDwvcD5cbiAgICA8cCBjbGFzcz1cInRleHQtYnJvd24tZ3JheVwiPlxuICAgICAgPFNsaWRlciB0ZXh0PVwiQ29udGFjdCB5b3VyIHJlcHJlc2VudGF0aXZlcyAod2UnbGwgaGVscCkuXCIgLz5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWJyb3duLWdyYXlcIj5cbiAgICAgIDxTbGlkZXIgdGV4dD1cIk1ha2UgdGhlbSB3cml0ZSBsYXdzIHRvIGZpeCB0aGlzLlwiIC8+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPFR5cGUgdGV4dD1cIkZpZ2h0IEZvciBCbGFjayBMaXZlcy5cIiAvPlxuICAgIDwvcD5cbiAgPC9UeXBlcj5cbjwvZGl2PlxuXG48c3R5bGU+LmNvbnRhaW5lZCB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lZC1tZCB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZWQtbWQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmhlcm8tY29udGFpbmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvY29tcG9uZW50cy9IZXJvLnN2ZWx0ZS5tYXAgKi88L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCTyxVQUFVLGVBQUMsQ0FBQyxBQUNqQixZQUFZLENBQUUsTUFBTSxDQUNwQixhQUFhLENBQUUsTUFBTSxDQUNyQixTQUFTLENBQUUsTUFBTSxDQUNqQixXQUFXLENBQUUsSUFBSSxDQUNqQixZQUFZLENBQUUsSUFBSSxDQUNsQixLQUFLLENBQUUsSUFBSSxBQUNiLENBQUMsQUFPRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBUzNCLENBQUMsQUFFRCxlQUFlLGVBQUMsQ0FBQyxBQUNmLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLFNBQVMsQ0FBRSxJQUFJLEFBQ2pCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

// (8:2) <Typer>
function create_default_slot(ctx) {
	let p0;
	let t0;
	let p1;
	let t1;
	let p2;
	let t2;
	let p3;
	let current;

	const slider0 = new components_typer_Slider__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: { text: "Enter your zip code." },
			$$inline: true
		});

	const slider1 = new components_typer_Slider__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				text: "Contact your representatives (we'll help)."
			},
			$$inline: true
		});

	const slider2 = new components_typer_Slider__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				text: "Make them write laws to fix this."
			},
			$$inline: true
		});

	const type = new components_typer_TyperText__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: { text: "Fight For Black Lives." },
			$$inline: true
		});

	const block = {
		c: function create() {
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(slider0.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(slider1.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(slider2.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(type.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true });
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(slider0.$$.fragment, p0_nodes);
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true });
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(slider1.$$.fragment, p1_nodes);
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true });
			var p2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(slider2.$$.fragment, p2_nodes);
			p2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			p3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", {});
			var p3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(type.$$.fragment, p3_nodes);
			p3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p0, "class", "text-brown-gray");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 8, 4, 222);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p1, "class", "text-brown-gray");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 11, 4, 308);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p2, "class", "text-brown-gray");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p2, file, 14, 4, 416);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p3, file, 17, 4, 515);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(slider0, p0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(slider1, p1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(slider2, p2, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(type, p3, null);
			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(slider0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(slider1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(slider2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(type.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(slider0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(slider1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(slider2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(type.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(slider0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(slider1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(slider2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(type);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(8:2) <Typer>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let current;

	const typer = new components_typer_Typer__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(typer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(typer.$$.fragment, div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "contained hero-container my-24 svelte-19bd7xu");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 6, 0, 163);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(typer, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const typer_changes = {};

			if (dirty & /*$$scope*/ 1) {
				typer_changes.$$scope = { dirty, ctx };
			}

			typer.$set(typer_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(typer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(typer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(typer);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Hero> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Hero", $$slots, []);
	$$self.$capture_state = () => ({ Type: components_typer_TyperText__WEBPACK_IMPORTED_MODULE_1__["default"], Slider: components_typer_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], Typer: components_typer_Typer__WEBPACK_IMPORTED_MODULE_3__["default"] });
	return [];
}

class Hero extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-19bd7xu-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Hero",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Hero
  = module && module.hot
    ? _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_4__["applyHmr"]({
        m: module,
        id: "\"src/components/Hero.svelte\"",
        hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true},
        Component: Hero,
        ProxyAdapter: _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        compileData: {"vars":[{"name":"Type","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"Slider","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"Typer","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false}],"accessors":false},
        compileOptions: {"filename":"/Users/samueldesota/d/fightforblacklives/fightforblacklives.com/src/components/Hero.svelte","format":"esm","dev":true,"hydratable":true},
      })
    : Hero);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ZipForm.svelte":
/*!***************************************!*\
  !*** ./src/components/ZipForm.svelte ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src/components/ZipForm.svelte generated by Svelte v3.23.0 */


const file = "src/components/ZipForm.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-82uu10-style";
	style.textContent = ".contained.svelte-82uu10{padding-left:1.5rem;padding-right:1.5rem;max-width:1280px;margin-left:auto;margin-right:auto;width:100%}.contained-md.svelte-82uu10{padding-left:0.75rem;padding-right:0.75rem}@media(min-width: 768px){.contained-md.svelte-82uu10{padding-left:1.5rem;padding-right:1.5rem;max-width:1024px;margin-left:auto;margin-right:auto;width:100%}}.zip-input.svelte-82uu10::-moz-placeholder{--text-opacity:1;color:#331E0F;color:rgba(51, 30, 15, var(--text-opacity))}.zip-input.svelte-82uu10:-ms-input-placeholder{--text-opacity:1;color:#331E0F;color:rgba(51, 30, 15, var(--text-opacity))}.zip-input.svelte-82uu10::-ms-input-placeholder{--text-opacity:1;color:#331E0F;color:rgba(51, 30, 15, var(--text-opacity))}.zip-input.svelte-82uu10::placeholder{--text-opacity:1;color:#331E0F;color:rgba(51, 30, 15, var(--text-opacity))}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwRm9ybS5zdmVsdGUiLCJzb3VyY2VzIjpbIlppcEZvcm0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGxldCB6aXBDb2RlO1xuPC9zY3JpcHQ+XG5cbjxkaXZcbiAgc3R5bGU9XCJ3aWR0aDogNjAwcHhcIlxuICBjbGFzcz1cImZsZXggbXgtYXV0byByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1icm93biBtYXgtaC1mdWxsIHskJHByb3BzLmNsYXNzIHx8ICcnfVwiPlxuICA8aW5wdXRcbiAgICBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgNS1kaWdpdCB6aXAgY29kZVwiXG4gICAgY2xhc3M9XCJ6aXAtaW5wdXQgYmctdHJhbnNwYXJlbnQgcHktNCBweC02IGZsZXgtMSB0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiXG4gICAgYmluZDp2YWx1ZT17emlwQ29kZX0gLz5cblxuICA8YnV0dG9uXG4gICAgY2xhc3M9XCJiZy1icm93biBweC0xMiB0ZXh0LWJyb3duLXdoaXRlIG0tMSByb3VuZGVkLWZ1bGwgc2VsZi1zdHJldGNoIHRleHQteGxcIj5cbiAgICBGaWdodCFcbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPHN0eWxlPi5jb250YWluZWQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZWQtbWQge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVkLW1kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi56aXAtaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAtLXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6ICMzMzFFMEY7XG4gIGNvbG9yOiByZ2JhKDUxLCAzMCwgMTUsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xufVxuXG4uemlwLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogIzMzMUUwRjtcbiAgY29sb3I6IHJnYmEoNTEsIDMwLCAxNSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG59XG5cbi56aXAtaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogIzMzMUUwRjtcbiAgY29sb3I6IHJnYmEoNTEsIDMwLCAxNSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG59XG5cbi56aXAtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjMzMxRTBGO1xuICBjb2xvcjogcmdiYSg1MSwgMzAsIDE1LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2NvbXBvbmVudHMvWmlwRm9ybS5zdmVsdGUubWFwICovPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQk8sVUFBVSxjQUFDLENBQUMsQUFDakIsWUFBWSxDQUFFLE1BQU0sQ0FDcEIsYUFBYSxDQUFFLE1BQU0sQ0FDckIsU0FBUyxDQUFFLE1BQU0sQ0FDakIsV0FBVyxDQUFFLElBQUksQ0FDakIsWUFBWSxDQUFFLElBQUksQ0FDbEIsS0FBSyxDQUFFLElBQUksQUFDYixDQUFDLEFBRUQsYUFBYSxjQUFDLENBQUMsQUFDYixZQUFZLENBQUUsT0FBTyxDQUNyQixhQUFhLENBQUUsT0FBTyxBQUN4QixDQUFDLEFBRUQsTUFBTSxBQUFDLFlBQVksS0FBSyxDQUFDLEFBQUMsQ0FBQyxBQUN6QixhQUFhLGNBQUMsQ0FBQyxBQUNiLFlBQVksQ0FBRSxNQUFNLENBQ3BCLGFBQWEsQ0FBRSxNQUFNLENBQ3JCLFNBQVMsQ0FBRSxNQUFNLENBQ2pCLFdBQVcsQ0FBRSxJQUFJLENBQ2pCLFlBQVksQ0FBRSxJQUFJLENBQ2xCLEtBQUssQ0FBRSxJQUFJLEFBQ2IsQ0FBQyxBQUNILENBQUMsQUFFRCx3QkFBVSxrQkFBa0IsQUFBQyxDQUFDLEFBQzVCLGNBQWMsQ0FBRSxDQUFDLENBQ2pCLEtBQUssQ0FBRSxPQUFPLENBQ2QsS0FBSyxDQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxBQUM5QyxDQUFDLEFBRUQsd0JBQVUsc0JBQXNCLEFBQUMsQ0FBQyxBQUNoQyxjQUFjLENBQUUsQ0FBQyxDQUNqQixLQUFLLENBQUUsT0FBTyxDQUNkLEtBQUssQ0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQUFDOUMsQ0FBQyxBQUVELHdCQUFVLHVCQUF1QixBQUFDLENBQUMsQUFDakMsY0FBYyxDQUFFLENBQUMsQ0FDakIsS0FBSyxDQUFFLE9BQU8sQ0FDZCxLQUFLLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLEFBQzlDLENBQUMsQUFFRCx3QkFBVSxhQUFhLEFBQUMsQ0FBQyxBQUN2QixjQUFjLENBQUUsQ0FBQyxDQUNqQixLQUFLLENBQUUsT0FBTyxDQUNkLEtBQUssQ0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQUFDOUMsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let div;
	let input;
	let t0;
	let button;
	let t1;
	let div_class_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Fight!");
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { style: true, class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "INPUT", { placeholder: true, class: true });
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "BUTTON", { class: true });
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button_nodes, "Fight!");
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input, "placeholder", "enter your 5-digit zip code");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input, "class", "zip-input bg-transparent py-4 px-6 flex-1 text-2xl text-center svelte-82uu10");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input, file, 7, 2, 155);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "bg-brown px-12 text-brown-white m-1 rounded-full self-stretch text-xl");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 12, 2, 314);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "width", "600px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", div_class_value = "flex mx-auto rounded-full border border-brown max-h-full " + (/*$$props*/ ctx[1].class || "") + " svelte-82uu10");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 4, 0, 35);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, input);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*zipCode*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t1);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input, "input", /*input_input_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*zipCode*/ 1 && input.value !== /*zipCode*/ ctx[0]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*zipCode*/ ctx[0]);
			}

			if (dirty & /*$$props*/ 2 && div_class_value !== (div_class_value = "flex mx-auto rounded-full border border-brown max-h-full " + (/*$$props*/ ctx[1].class || "") + " svelte-82uu10")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", div_class_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			mounted = false;
			dispose();
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
	let zipCode;
	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("ZipForm", $$slots, []);

	function input_input_handler() {
		zipCode = this.value;
		$$invalidate(0, zipCode);
	}

	$$self.$set = $$new_props => {
		$$invalidate(1, $$props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, $$props), Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["exclude_internal_props"])($$new_props)));
	};

	$$self.$capture_state = () => ({ zipCode });

	$$self.$inject_state = $$new_props => {
		$$invalidate(1, $$props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, $$props), $$new_props));
		if ("zipCode" in $$props) $$invalidate(0, zipCode = $$new_props.zipCode);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["exclude_internal_props"])($$props);
	return [zipCode, $$props, input_input_handler];
}

class ZipForm extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-82uu10-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "ZipForm",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ZipForm
  = module && module.hot
    ? _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_1__["applyHmr"]({
        m: module,
        id: "\"src/components/ZipForm.svelte\"",
        hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true},
        Component: ZipForm,
        ProxyAdapter: _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        compileData: {"vars":[{"name":"zipCode","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true,"referenced_from_script":false},{"name":"$props","export_name":null,"injected":true,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false}],"accessors":false},
        compileOptions: {"filename":"/Users/samueldesota/d/fightforblacklives/fightforblacklives.com/src/components/ZipForm.svelte","format":"esm","dev":true,"hydratable":true},
      })
    : ZipForm);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/typer/Slider.svelte":
/*!********************************************!*\
  !*** ./src/components/typer/Slider.svelte ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _typer_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typer-api */ "./src/components/typer/typer-api.ts");
/* harmony import */ var _typer_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_typer_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/transition/index.mjs");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/time */ "./src/utils/time.ts");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(utils_time__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src/components/typer/Slider.svelte generated by Svelte v3.23.0 */






const file = "src/components/typer/Slider.svelte";

// (26:0) {:else}
function create_else_block(ctx) {
	let span;
	let t;
	let span_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*text*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { class: true });
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, /*text*/ ctx[1]);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span, "class", "inline-block");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 26, 2, 563);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t);
			current = true;

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(
					span,
					"introend",
					function () {
						if (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(/*introResolve*/ ctx[0])) /*introResolve*/ ctx[0].apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (!current || dirty & /*text*/ 2) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, /*text*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (!span_transition) span_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(span, svelte_transition__WEBPACK_IMPORTED_MODULE_3__["fly"], { duration: /*duration*/ ctx[2], y: -20 }, true);
				span_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!span_transition) span_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(span, svelte_transition__WEBPACK_IMPORTED_MODULE_3__["fly"], { duration: /*duration*/ ctx[2], y: -20 }, false);
			span_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(span);
			if (detaching && span_transition) span_transition.end();
			mounted = false;
			dispose();
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(26:0) {:else}",
		ctx
	});

	return block;
}

// (24:0) {#if waiting}
function create_if_block(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*text*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { class: true });
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, /*text*/ ctx[1]);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span, "class", "opacity-0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 24, 2, 515);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*text*/ 2) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, /*text*/ ctx[1]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(span);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(24:0) {#if waiting}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*waiting*/ ctx[3]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
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
	let { text } = $$props;
	let { duration = 1000 } = $$props;

	let { introResolve = () => {
		
	} } = $$props;

	const api = Object(svelte__WEBPACK_IMPORTED_MODULE_2__["getContext"])(_typer_api__WEBPACK_IMPORTED_MODULE_1__["typer"]);
	let waiting = true;

	Object(svelte__WEBPACK_IMPORTED_MODULE_2__["onMount"])(() => {
		api.register(async () => {
			$$invalidate(3, waiting = false);

			return new Promise(resolve => {
					$$invalidate(0, introResolve = resolve);
				});
		});
	});

	const writable_props = ["text", "duration", "introResolve"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Slider> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Slider", $$slots, []);

	$$self.$set = $$props => {
		if ("text" in $$props) $$invalidate(1, text = $$props.text);
		if ("duration" in $$props) $$invalidate(2, duration = $$props.duration);
		if ("introResolve" in $$props) $$invalidate(0, introResolve = $$props.introResolve);
	};

	$$self.$capture_state = () => ({
		typer: _typer_api__WEBPACK_IMPORTED_MODULE_1__["typer"],
		onMount: svelte__WEBPACK_IMPORTED_MODULE_2__["onMount"],
		getContext: svelte__WEBPACK_IMPORTED_MODULE_2__["getContext"],
		fly: svelte_transition__WEBPACK_IMPORTED_MODULE_3__["fly"],
		delay: utils_time__WEBPACK_IMPORTED_MODULE_4__["delay"],
		text,
		duration,
		introResolve,
		api,
		waiting
	});

	$$self.$inject_state = $$props => {
		if ("text" in $$props) $$invalidate(1, text = $$props.text);
		if ("duration" in $$props) $$invalidate(2, duration = $$props.duration);
		if ("introResolve" in $$props) $$invalidate(0, introResolve = $$props.introResolve);
		if ("waiting" in $$props) $$invalidate(3, waiting = $$props.waiting);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [introResolve, text, duration, waiting];
}

class Slider extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { text: 1, duration: 2, introResolve: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Slider",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*text*/ ctx[1] === undefined && !("text" in props)) {
			console.warn("<Slider> was created without expected prop 'text'");
		}
	}

	get text() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set text(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get duration() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set duration(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get introResolve() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set introResolve(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Slider
  = module && module.hot
    ? _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_5__["applyHmr"]({
        m: module,
        id: "\"src/components/typer/Slider.svelte\"",
        hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true},
        Component: Slider,
        ProxyAdapter: _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_6__["default"],
        compileData: {"vars":[{"name":"typer","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"onMount","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"getContext","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"fly","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"delay","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":false},{"name":"text","export_name":"text","injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":true,"referenced_from_script":false},{"name":"duration","export_name":"duration","injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":true,"referenced_from_script":false},{"name":"introResolve","export_name":"introResolve","injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true,"referenced_from_script":true},{"name":"api","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"waiting","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true,"referenced_from_script":true}],"accessors":false},
        compileOptions: {"filename":"/Users/samueldesota/d/fightforblacklives/fightforblacklives.com/src/components/typer/Slider.svelte","format":"esm","dev":true,"hydratable":true},
      })
    : Slider);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/typer/Typer.svelte":
/*!*******************************************!*\
  !*** ./src/components/typer/Typer.svelte ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/time */ "./src/utils/time.ts");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(utils_time__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typer/typer-api */ "./src/components/typer/typer-api.ts");
/* harmony import */ var components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src/components/typer/Typer.svelte generated by Svelte v3.23.0 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];



const file = "src/components/typer/Typer.svelte";

function create_fragment(ctx) {
	let current;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot"])(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
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
	const texts = [];
	let started = false;

	Object(svelte__WEBPACK_IMPORTED_MODULE_2__["setContext"])(components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3__["typer"], {
		register(start) {
			texts.push(start);
			console.log("test");

			if (!started) {
				started = true;
				type();
			}
		}
	});

	const type = async () => {
		for (const text of texts) {
			await text();
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Typer> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Typer", $$slots, ['default']);

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		delay: utils_time__WEBPACK_IMPORTED_MODULE_1__["delay"],
		onMount: svelte__WEBPACK_IMPORTED_MODULE_2__["onMount"],
		onDestroy: svelte__WEBPACK_IMPORTED_MODULE_2__["onDestroy"],
		setContext: svelte__WEBPACK_IMPORTED_MODULE_2__["setContext"],
		typer: components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3__["typer"],
		texts,
		started,
		type
	});

	$$self.$inject_state = $$props => {
		if ("started" in $$props) started = $$props.started;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [started, texts, type, $$scope, $$slots];
}

class Typer extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Typer",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Typer
  = module && module.hot
    ? _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_4__["applyHmr"]({
        m: module,
        id: "\"src/components/typer/Typer.svelte\"",
        hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true},
        Component: Typer,
        ProxyAdapter: _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        compileData: {"vars":[{"name":"delay","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":false},{"name":"onMount","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":false},{"name":"onDestroy","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":false},{"name":"setContext","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"typer","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"texts","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"started","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":false,"writable":true,"referenced_from_script":true},{"name":"type","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true}],"accessors":false},
        compileOptions: {"filename":"/Users/samueldesota/d/fightforblacklives/fightforblacklives.com/src/components/typer/Typer.svelte","format":"esm","dev":true,"hydratable":true},
      })
    : Typer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/typer/TyperText.svelte":
/*!***********************************************!*\
  !*** ./src/components/typer/TyperText.svelte ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/time */ "./src/utils/time.ts");
/* harmony import */ var utils_time__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(utils_time__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/typer/typer-api */ "./src/components/typer/typer-api.ts");
/* harmony import */ var components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src/components/typer/TyperText.svelte generated by Svelte v3.23.0 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];



const file = "src/components/typer/TyperText.svelte";

function create_fragment(ctx) {
	let span2;
	let span0;
	let t0_value = /*text*/ ctx[0].slice(0, /*slice*/ ctx[1]) + "";
	let t0;
	let t1;
	let span1;
	let t2;

	const block = {
		c: function create() {
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*text*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { class: true });
			var span2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span2);
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(span2_nodes, "SPAN", { class: true });
			var span0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span0);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span0_nodes, t0_value);
			span0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(span2_nodes);
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(span2_nodes, "SPAN", { class: true });
			var span1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span1);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span1_nodes, /*text*/ ctx[0]);
			span1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			span2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span0, "class", "absolute inline-block");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 40, 2, 773);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span1, "class", "opacity-0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 41, 2, 841);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span2, "class", "relative inline-block");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span2, file, 39, 0, 734);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, span2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span2, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span2, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span2, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span1, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*text, slice*/ 3 && t0_value !== (t0_value = /*text*/ ctx[0].slice(0, /*slice*/ ctx[1]) + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t0, t0_value);
			if (dirty & /*text*/ 1) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t2, /*text*/ ctx[0]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(span2);
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
	let { text } = $$props;
	let { mounted = true } = $$props;
	let { typeDelayDuration = 40 } = $$props;
	const api = Object(svelte__WEBPACK_IMPORTED_MODULE_2__["getContext"])(components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3__["typer"]);
	let slice = 0;

	const typeDelay = async () => {
		if (mounted === false) {
			throw "done";
		}

		await Object(utils_time__WEBPACK_IMPORTED_MODULE_1__["delay"])(typeDelayDuration + Math.floor(Math.random() * 30));
	};

	const type = async () => {
		for ($$invalidate(1, slice = 0); slice < text.length; $$invalidate(1, slice++, slice)) {
			await typeDelay();
		}
	};

	Object(svelte__WEBPACK_IMPORTED_MODULE_2__["onMount"])(() => {
		$$invalidate(2, mounted = true);
		console.log("ran");
		api.register(type);
	});

	Object(svelte__WEBPACK_IMPORTED_MODULE_2__["onDestroy"])(() => {
		$$invalidate(2, mounted = false);
	});

	const writable_props = ["text", "mounted", "typeDelayDuration"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<TyperText> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("TyperText", $$slots, []);

	$$self.$set = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
		if ("mounted" in $$props) $$invalidate(2, mounted = $$props.mounted);
		if ("typeDelayDuration" in $$props) $$invalidate(3, typeDelayDuration = $$props.typeDelayDuration);
	};

	$$self.$capture_state = () => ({
		delay: utils_time__WEBPACK_IMPORTED_MODULE_1__["delay"],
		onMount: svelte__WEBPACK_IMPORTED_MODULE_2__["onMount"],
		onDestroy: svelte__WEBPACK_IMPORTED_MODULE_2__["onDestroy"],
		getContext: svelte__WEBPACK_IMPORTED_MODULE_2__["getContext"],
		typer: components_typer_typer_api__WEBPACK_IMPORTED_MODULE_3__["typer"],
		text,
		mounted,
		typeDelayDuration,
		api,
		slice,
		typeDelay,
		type
	});

	$$self.$inject_state = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
		if ("mounted" in $$props) $$invalidate(2, mounted = $$props.mounted);
		if ("typeDelayDuration" in $$props) $$invalidate(3, typeDelayDuration = $$props.typeDelayDuration);
		if ("slice" in $$props) $$invalidate(1, slice = $$props.slice);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [text, slice, mounted, typeDelayDuration];
}

class TyperText extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
			text: 0,
			mounted: 2,
			typeDelayDuration: 3
		});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "TyperText",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*text*/ ctx[0] === undefined && !("text" in props)) {
			console_1.warn("<TyperText> was created without expected prop 'text'");
		}
	}

	get text() {
		throw new Error("<TyperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set text(value) {
		throw new Error("<TyperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get mounted() {
		throw new Error("<TyperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set mounted(value) {
		throw new Error("<TyperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get typeDelayDuration() {
		throw new Error("<TyperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set typeDelayDuration(value) {
		throw new Error("<TyperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (TyperText
  = module && module.hot
    ? _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_4__["applyHmr"]({
        m: module,
        id: "\"src/components/typer/TyperText.svelte\"",
        hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true},
        Component: TyperText,
        ProxyAdapter: _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        compileData: {"vars":[{"name":"delay","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"onMount","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"onDestroy","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"getContext","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"typer","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"text","export_name":"text","injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":true,"referenced_from_script":true},{"name":"mounted","export_name":"mounted","injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":false,"writable":true,"referenced_from_script":true},{"name":"typeDelayDuration","export_name":"typeDelayDuration","injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":true,"referenced_from_script":true},{"name":"api","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"slice","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true,"referenced_from_script":true},{"name":"typeDelay","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"type","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true}],"accessors":false},
        compileOptions: {"filename":"/Users/samueldesota/d/fightforblacklives/fightforblacklives.com/src/components/typer/TyperText.svelte","format":"esm","dev":true,"hydratable":true},
      })
    : TyperText);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/typer/typer-api.ts":
/*!*******************************************!*\
  !*** ./src/components/typer/typer-api.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.typer = void 0;
exports.typer = Symbol("typer");


/***/ }),

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/api */ "./src/utils/api.ts");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(utils_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Hero */ "./src/components/Hero.svelte");
/* harmony import */ var components_ZipForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ZipForm */ "./src/components/ZipForm.svelte");
/* harmony import */ var components_StoryCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/StoryCard */ "./src/components/StoryCard.svelte");
/* harmony import */ var components_StoryCard2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/StoryCard2 */ "./src/components/StoryCard2.svelte");
/* harmony import */ var mixins_scrollLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mixins/scrollLink */ "./src/mixins/scrollLink.ts");
/* harmony import */ var mixins_scrollLink__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mixins_scrollLink__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src/routes/index.svelte generated by Svelte v3.23.0 */








const file = "src/routes/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1cvvi5f-style";
	style.textContent = ".contained.svelte-1cvvi5f.svelte-1cvvi5f.svelte-1cvvi5f{padding-left:1.5rem;padding-right:1.5rem;max-width:1280px;margin-left:auto;margin-right:auto;width:100%}@media(min-width: 768px){}.hero-container.svelte-1cvvi5f.svelte-1cvvi5f.svelte-1cvvi5f{font-weight:600;font-size:50px}.text-section.svelte-1cvvi5f.svelte-1cvvi5f.svelte-1cvvi5f{font-size:1.3rem}.text-section.svelte-1cvvi5f.svelte-1cvvi5f p.svelte-1cvvi5f.svelte-1cvvi5f:not(:first-child){padding-top:1.5rem}ul.list.svelte-1cvvi5f.svelte-1cvvi5f.svelte-1cvvi5f{list-style:none}ul.list.svelte-1cvvi5f.svelte-1cvvi5f>li.svelte-1cvvi5f.svelte-1cvvi5f{display:flex}ul.list.svelte-1cvvi5f.svelte-1cvvi5f>li.svelte-1cvvi5f.svelte-1cvvi5f:not(:first-child){margin-top:1rem}ul.list.svelte-1cvvi5f.svelte-1cvvi5f>li.svelte-1cvvi5f.svelte-1cvvi5f:before{content:\"•\";padding-right:16px}ul.list.svelte-1cvvi5f>li.svelte-1cvvi5f>span.svelte-1cvvi5f{display:inline-block}.section-header.svelte-1cvvi5f.svelte-1cvvi5f.svelte-1cvvi5f{font-size:2.25rem;font-weight:600;--text-opacity:1;color:#94837B;color:rgba(148, 131, 123, var(--text-opacity));margin-bottom:1.5rem}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0WmlwQ29kZUJ1bmRsZSB9IGZyb20gXCJ1dGlscy9hcGlcIjtcbiAgaW1wb3J0IEhlcm8gZnJvbSBcImNvbXBvbmVudHMvSGVyb1wiO1xuICBpbXBvcnQgWmlwRm9ybSBmcm9tIFwiY29tcG9uZW50cy9aaXBGb3JtXCI7XG4gIGltcG9ydCBTdG9yeUNhcmQgZnJvbSBcImNvbXBvbmVudHMvU3RvcnlDYXJkXCI7XG4gIGltcG9ydCBTdG9yeUNhcmQyIGZyb20gXCJjb21wb25lbnRzL1N0b3J5Q2FyZDJcIjtcbiAgaW1wb3J0IHNjcm9sbExpbmsgZnJvbSBcIm1peGlucy9zY3JvbGxMaW5rXCI7XG5cbiAgbGV0IHppcENvZGUgPSBcIlwiO1xuICBsZXQgcHJpc3RpbmUgPSB0cnVlO1xuXG4gIGNvbnN0IHppcENvZGVQYXR0ZXJuID0gL15bMC05XXs1fSQvO1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoemlwQ29kZVBhdHRlcm4udGVzdCgpKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaXN0aW5lID0gZmFsc2U7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cbjxkaXYgaWQ9XCJlbnRlci15b3VyLXppcC1jb2RlXCIgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGZsZXgtMSBzZWxmLXN0cmV0Y2hcIj5cbiAgPEhlcm8gLz5cbiAgPFppcEZvcm0gY2xhc3M9XCJtdC0yIG1iLTMyXCIgLz5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVkIG1iLTMyXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtc2VjdGlvbiBmbGV4LTEgdGV4dC14bCBwci02XCI+XG4gICAgICAgIDxoMSBpZD1cIndoYXQtY2FuLWktZG9cIiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+V2hhdCBjYW4gSSBkbz88L2gxPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIERlbWFuZCBjaGFuZ2UgYnkgd2F5IG9mIGxlZ2lzbGF0aW9uIGZyb20gZXZlcnkgbGV2ZWwgb2YgZ292ZXJubWVudC5cbiAgICAgICAgICBUaGVzZSBlbGVjdGVkIG9mZmljaWFscyBzZXJ2ZSBZT1UuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2UgdGhpcyB0b29sIHRvIGdldCBjb250YWN0IGluZm8gZm9yIHlvdXIgTG9jYWwsIFN0YXRlICYgRmVkZXJhbFxuICAgICAgICAgIHJlcHJlc2VudGF0aXZlcyDvvI0gdGhhdOKAmXMgZW1haWwsIHBob25lIG51bWJlcnMsIG9mZmljZSBhZGRyZXNzZXMsXG4gICAgICAgICAgc29jaWFsIG1lZGlhLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgcHJvdmlkZSBjYW5uZWQgbWVzc2FnZXMgeW91IGNhbiB0d2VldCwgZW1haWwgb3Igd3JpdGUgb24gYSBudW1iZXJcbiAgICAgICAgICBvZiB0b3BpY3MgdGhhdCBhbGwgc3VwcG9ydCBlbmRpbmcgcG9saWNlIHZpb2xlbmNlIGFnYWluc3QgYmxhY2sgYW5kXG4gICAgICAgICAgYnJvd24gcGVvcGxlIGluIEFtZXJpY2EuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8YVxuICAgICAgICAgIHVzZTpzY3JvbGxMaW5rXG4gICAgICAgICAgaHJlZj1cIiNlbnRlci15b3VyLXppcC1jb2RlXCJcbiAgICAgICAgICBjbGFzcz1cInRleHQtYnJvd24td2hpdGUgaW5saW5lLWJsb2NrIGJnLWJyb3duIHB5LTQgcHgtOCByb3VuZGVkLWZ1bGxcbiAgICAgICAgICB0ZXh0LXhsIG10LTE2XCI+XG4gICAgICAgICAgRW50ZXIgeW91ciB6aXAgY29kZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGltZ1xuICAgICAgICBjbGFzcz1cImZsZXgtMVwiXG4gICAgICAgIGFsdD1cIlR3ZWV0IHNheWluZyB7YFwiRmluZCByZWxpYWJsZSBmZWRlcmFsIHRyYWNraW5nIGFuZCByZXBvcnRpbmcgb2YgYWxsIGluY2VkZW50cyBpbnZvbHZpbmcgdGhlIHVzZSBvZiBkZWFkbHkgZm9yY2UgYnkgbGF3IGVuZm9yY2VtZW50LCB3aGV0aGVyIGxldGhhbCBvciBub3QuIERvIHNvbWV0aGluZyFcImB9XCJcbiAgICAgICAgc3JjPVwiL21vY2tfdHdlZXQucG5nXCIgLz5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVkIG1iLTMyXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggYi0yNCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNlY3Rpb24gZmxleC0xIHByLTZcIj5cbiAgICAgICAgPGgxIGlkPVwid2h5LXNob3VsZC1pLWRvLWl0XCIgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgIFdoeSBzaG91bGQgSSBkbyBpdD9cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBTaW5jZSBKYW51YXJ5IDFzdCAyMDE1LFxuICAgICAgICAgIDxiPjEyNjI8L2I+XG4gICAgICAgICAgQmxhY2sgbWVuIGFuZCB3b21lbiB3ZXJlIHNob3QgYW5kIGtpbGxlZCBieSBwb2xpY2UgaW4gQW1lcmljYS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Yj43MTc8L2I+XG4gICAgICAgICAgb2YgdGhlc2UgdmljdGltcyB3ZXJlIG5vdCBmbGVlaW5nIHRoZSBzY2VuZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIDxiPjI0NjwvYj5cbiAgICAgICAgICB3ZXJlIHNob3Qgd2hpbGUgcnVubmluZyBhd2F5LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gb25seVxuICAgICAgICAgIDxiPjE5NDwvYj5cbiAgICAgICAgICAoMTUuNCUpIG9mIHRoZXNlIGluY2lkZW50cyB3ZXJlIHBvbGljZSBjb25maXJtZWQgdG8gaGF2ZSBiZWVuIHdlYXJpbmdcbiAgICAgICAgICBhIGJvZHkgY2FtZXJhLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hpbGUgQmxhY2sgcGVvcGxlIHRocm91Z2hvdXQgdGhlIGNvdW50cnkgZGVhbCB3aXRoIHRoZVxuICAgICAgICAgIGRpc3Byb3BvcnRpb25hdGUgZWZmZWN0cyBvZiBhIGdsb2JhbCBwYW5kZW1pYywgbW9udW1lbnRhbCBnYXBzIGluXG4gICAgICAgICAgYWNjZXNzIHRvIGhlYWx0aGNhcmUsIGVkdWNhdGlvbiBhbmQgdGh1cyBpbmNvbWUgZXF1YWxpdHksIEJsYWNrIHBlb3BsZVxuICAgICAgICAgIGFsc28gaGF2ZSB0byBmaWd1cmUgaG93IHRvIHN0YXkgYWxpdmUsIGV2ZXJ5IGRhee+8jXRoYXTigJlzIGdvaW5nIGZvciBhXG4gICAgICAgICAgam9nLCBkcml2aW5nIGEgY2FyLCBzbGVlcGluZyBpbiB0aGVpciBob21lLCBvciBnb2luZyB0byB0aGUgZ3JvY2VyeVxuICAgICAgICAgIHN0b3JlLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgbXVzdFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1zZW1pYm9sZFwiPkZpZ2h0IEZvciBCbGFjayBMaXZlczwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxTdG9yeUNhcmQyIHN0eWxlPVwiZmxleDogMCAwIDQ1MHB4O1wiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxaaXBGb3JtIGNsYXNzPVwibXktOFwiIC8+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lZCBteS0zMlwiPlxuICAgIDxoMSBpZD1cImhvdy1lbHNlLWNhbi1pLWhlbHBcIiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICBIb3cgZWxzZSBjYW4gSSBoZWxwP1xuICAgIDwvaDE+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBiLTI0IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zZWN0aW9uIGZsZXgtMSB0ZXh0LTJ4bCBwci02XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFlvdSBjYW7igJl0IGRvbmF0ZSB0byB1cyAod2XigJlsbCBhbHdheXMgYmUgZnJlZSksIGJ1dCB5b3UgY2FuIGRvbmF0ZSB0b1xuICAgICAgICAgIG91ciBzaG9ydCBsaXN0IG9mIG9yZ2FuaXphdGlvbnMgd29ya2luZyB0byBmaWdodCBzeXN0ZW1hdGljIGluanVzdGljZVxuICAgICAgICAgIGZvciBCbGFjayBwZW9wbGUgaW4gQW1lcmljYS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzPVwibWItNlwiPlRoZXNlIG9yZ2FuaXphdGlvbnMgZm9jdXMgb24gdGhlIGZvbGxvd2luZzo8L3A+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBSZWFjaGluZyBsYXdtYWtlcnMgdG8gY2hhbmdlIGRpc2NyaW1pbmF0b3J5IG9yIG5lZ2xlZ2VudCBsYXdcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBTdXBwb3J0aW5nIGVmZm9ydHMgZm9yIGJldHRlciBoZWFsdGhjYXJlIGFuZCBlZHVjYXRpb24gaW5cbiAgICAgICAgICAgICAgY29tbXVuaXRpZXMgb2YgY29sb3JcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBNb3ZpbmcgY29ycG9yYXRpb25zIHRvIGNvbnRyaWJ1dGUgdG8gYSBtb3JlIGp1c3Qgd29ybGQgZm9yIHBlb3BsZVxuICAgICAgICAgICAgICBvZiBjb2xvciBuYXRpb253aWRlXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgRmlnaHRpbmcgdG8gZmluYWxseSBwdXQgYW4gZW5kIHRvIHN0YXRlLXNhbmN0aW9uZWQgdmlvbGVuY2UgYnlcbiAgICAgICAgICAgICAgcG9saWNlIGFnYWluc3QgQmxhY2sgcGVvcGxlXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj5Qcm92aWRpbmcgYmFpbCBhbmQgbGVnYWwgZnVuZHMgZm9yIHByb3Rlc3RlcnM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lZCBoZXJvLWNvbnRhaW5lciBtYi0yNFwiPlxuICAgIDxwIGNsYXNzPVwidGV4dC1icm93bi1ncmF5XCI+U3RpbGwgc2Nyb2xsaW5nPzwvcD5cbiAgICA8cCBjbGFzcz1cInRleHQtYnJvd24tZ3JheVwiPkVudGVyIHlvdXIgemlwIGNvZGUuPC9wPlxuICAgIDxwIGNsYXNzPVwidGV4dC1icm93bi1ncmF5XCI+Q29udGFjdCB5b3VyIHJlcHJlc2VudGF0aXZlcy48L3A+XG4gICAgPHA+RmlnaHQgRm9yIEJsYWNrIExpdmVzLjwvcD5cbiAgPC9kaXY+XG5cbiAgPFppcEZvcm0gY2xhc3M9XCJtYi0yNFwiIC8+XG48L2Rpdj5cblxuPHN0eWxlPi5jb250YWluZWQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZWQtbWQge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVkLW1kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5oZXJvLWNvbnRhaW5lciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLnRleHQtc2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4udGV4dC1zZWN0aW9uIHA6bm90KDpmaXJzdC1jaGlsZCkge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xufVxuXG51bC5saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxudWwubGlzdCA+IGxpIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxudWwubGlzdCA+IGxpOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxudWwubGlzdCA+IGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbnVsLmxpc3QgPiBsaSA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjOTQ4MzdCO1xuICBjb2xvcjogcmdiYSgxNDgsIDEzMSwgMTIzLCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZS5tYXAgKi88L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThLTyxVQUFVLDZDQUFDLENBQUMsQUFDakIsWUFBWSxDQUFFLE1BQU0sQ0FDcEIsYUFBYSxDQUFFLE1BQU0sQ0FDckIsU0FBUyxDQUFFLE1BQU0sQ0FDakIsV0FBVyxDQUFFLElBQUksQ0FDakIsWUFBWSxDQUFFLElBQUksQ0FDbEIsS0FBSyxDQUFFLElBQUksQUFDYixDQUFDLEFBT0QsTUFBTSxBQUFDLFlBQVksS0FBSyxDQUFDLEFBQUMsQ0FBQyxBQVMzQixDQUFDLEFBRUQsZUFBZSw2Q0FBQyxDQUFDLEFBQ2YsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsU0FBUyxDQUFFLElBQUksQUFDakIsQ0FBQyxBQUVELGFBQWEsNkNBQUMsQ0FBQyxBQUNiLFNBQVMsQ0FBRSxNQUFNLEFBQ25CLENBQUMsQUFFRCwyQ0FBYSxDQUFDLCtCQUFDLEtBQUssWUFBWSxDQUFDLEFBQUMsQ0FBQyxBQUNqQyxXQUFXLENBQUUsTUFBTSxBQUNyQixDQUFDLEFBRUQsRUFBRSxLQUFLLDZDQUFDLENBQUMsQUFDUCxVQUFVLENBQUUsSUFBSSxBQUNsQixDQUFDLEFBRUQsRUFBRSxtQ0FBSyxDQUFHLEVBQUUsOEJBQUMsQ0FBQyxBQUNaLE9BQU8sQ0FBRSxJQUFJLEFBQ2YsQ0FBQyxBQUVELEVBQUUsbUNBQUssQ0FBRyxnQ0FBRSxLQUFLLFlBQVksQ0FBQyxBQUFDLENBQUMsQUFDOUIsVUFBVSxDQUFFLElBQUksQUFDbEIsQ0FBQyxBQUVELEVBQUUsbUNBQUssQ0FBRyxnQ0FBRSxPQUFPLEFBQUMsQ0FBQyxBQUNuQixPQUFPLENBQUUsR0FBRyxDQUNaLGFBQWEsQ0FBRSxJQUFJLEFBQ3JCLENBQUMsQUFFRCxFQUFFLG9CQUFLLENBQUcsaUJBQUUsQ0FBRyxJQUFJLGVBQUMsQ0FBQyxBQUNuQixPQUFPLENBQUUsWUFBWSxBQUN2QixDQUFDLEFBRUQsZUFBZSw2Q0FBQyxDQUFDLEFBQ2YsU0FBUyxDQUFFLE9BQU8sQ0FDbEIsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsY0FBYyxDQUFFLENBQUMsQ0FDakIsS0FBSyxDQUFFLE9BQU8sQ0FDZCxLQUFLLENBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQy9DLGFBQWEsQ0FBRSxNQUFNLEFBQ3ZCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let div11;
	let t0;
	let t1;
	let div2;
	let div1;
	let div0;
	let h10;
	let t2;
	let t3;
	let p0;
	let t4;
	let t5;
	let p1;
	let t6;
	let t7;
	let p2;
	let t8;
	let t9;
	let a;
	let t10;
	let scrollLink_action;
	let t11;
	let img;
	let img_alt_value;
	let img_src_value;
	let t12;
	let div5;
	let div4;
	let div3;
	let h11;
	let t13;
	let t14;
	let p3;
	let t15;
	let b0;
	let t16;
	let t17;
	let t18;
	let p4;
	let b1;
	let t19;
	let t20;
	let t21;
	let p5;
	let b2;
	let t22;
	let t23;
	let t24;
	let p6;
	let t25;
	let b3;
	let t26;
	let t27;
	let t28;
	let p7;
	let t29;
	let t30;
	let p8;
	let t31;
	let span0;
	let t32;
	let t33;
	let t34;
	let t35;
	let div9;
	let h12;
	let t36;
	let t37;
	let div8;
	let div6;
	let p9;
	let t38;
	let t39;
	let p10;
	let t40;
	let t41;
	let ul;
	let li0;
	let span1;
	let t42;
	let t43;
	let li1;
	let span2;
	let t44;
	let t45;
	let li2;
	let span3;
	let t46;
	let t47;
	let li3;
	let span4;
	let t48;
	let t49;
	let li4;
	let span5;
	let t50;
	let t51;
	let div7;
	let t52;
	let div10;
	let p11;
	let t53;
	let t54;
	let p12;
	let t55;
	let t56;
	let p13;
	let t57;
	let t58;
	let p14;
	let t59;
	let t60;
	let current;
	let mounted;
	let dispose;
	const hero = new components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"]({ $$inline: true });

	const zipform0 = new components_ZipForm__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: { class: "mt-2 mb-32" },
			$$inline: true
		});

	const storycard2 = new components_StoryCard2__WEBPACK_IMPORTED_MODULE_5__["default"]({
			props: { style: "flex: 0 0 450px;" },
			$$inline: true
		});

	const zipform1 = new components_ZipForm__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: { class: "my-8" }, $$inline: true });

	const zipform2 = new components_ZipForm__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: { class: "mb-24" },
			$$inline: true
		});

	const block = {
		c: function create() {
			div11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(hero.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(zipform0.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("What can I do?");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Demand change by way of legislation from every level of government.\n          These elected officials serve YOU.");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Use this tool to get contact info for your Local, State & Federal\n          representatives － that’s email, phone numbers, office addresses,\n          social media.");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("We provide canned messages you can tweet, email or write on a number\n          of topics that all support ending police violence against black and\n          brown people in America.");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Enter your zip code");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Why should I do it?");
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Since January 1st 2015,\n          ");
			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("1262");
			t17 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n          Black men and women were shot and killed by police in America.");
			t18 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			t19 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("717");
			t20 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n          of these victims were not fleeing the scene.");
			t21 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			b2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			t22 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("246");
			t23 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n          were shot while running away.");
			t24 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t25 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("In only\n          ");
			b3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("b");
			t26 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("194");
			t27 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n          (15.4%) of these incidents were police confirmed to have been wearing\n          a body camera.");
			t28 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t29 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("While Black people throughout the country deal with the\n          disproportionate effects of a global pandemic, monumental gaps in\n          access to healthcare, education and thus income equality, Black people\n          also have to figure how to stay alive, every day－that’s going for a\n          jog, driving a car, sleeping in their home, or going to the grocery\n          store.");
			t30 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t31 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("We must\n          ");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t32 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Fight For Black Lives");
			t33 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(storycard2.$$.fragment);
			t34 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(zipform1.$$.fragment);
			t35 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t36 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("How else can I help?");
			t37 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t38 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("You can’t donate to us (we’ll always be free), but you can donate to\n          our short list of organizations working to fight systematic injustice\n          for Black people in America.");
			t39 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t40 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("These organizations focus on the following:");
			t41 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t42 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Reaching lawmakers to change discriminatory or neglegent law");
			t43 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t44 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Supporting efforts for better healthcare and education in\n              communities of color");
			t45 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			span3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t46 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Moving corporations to contribute to a more just world for people\n              of color nationwide");
			t47 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			span4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t48 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Fighting to finally put an end to state-sanctioned violence by\n              police against Black people");
			t49 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			span5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t50 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Providing bail and legal funds for protesters");
			t51 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t52 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			p11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t53 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Still scrolling?");
			t54 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t55 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Enter your zip code.");
			t56 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t57 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Contact your representatives.");
			t58 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t59 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Fight For Black Lives.");
			t60 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(zipform2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { id: true, class: true });
			var div11_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(hero.$$.fragment, div11_nodes);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div11_nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(zipform0.$$.fragment, div11_nodes);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div11_nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div11_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			h10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "H1", { id: true, class: true });
			var h10_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h10);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h10_nodes, "What can I do?");
			h10_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "P", { class: true });
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "Demand change by way of legislation from every level of government.\n          These elected officials serve YOU.");
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "P", { class: true });
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "Use this tool to get contact info for your Local, State & Federal\n          representatives － that’s email, phone numbers, office addresses,\n          social media.");
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "P", { class: true });
			var p2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p2);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p2_nodes, "We provide canned messages you can tweet, email or write on a number\n          of topics that all support ending police violence against black and\n          brown people in America.");
			p2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div0_nodes);
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "A", { href: true, class: true });
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, "Enter your zip code");
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "IMG", { class: true, alt: true, src: true });
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div11_nodes);
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div11_nodes, "DIV", { class: true });
			var div5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div5);
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div5_nodes, "DIV", { class: true });
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
			h11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "H1", { id: true, class: true });
			var h11_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h11);
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h11_nodes, "Why should I do it?");
			h11_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			p3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "P", { class: true });
			var p3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p3);
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p3_nodes, "Since January 1st 2015,\n          ");
			b0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p3_nodes, "B", {});
			var b0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b0);
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(b0_nodes, "1262");
			b0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t17 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p3_nodes, "\n          Black men and women were shot and killed by police in America.");
			p3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t18 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			p4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "P", { class: true });
			var p4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p4);
			b1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p4_nodes, "B", {});
			var b1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b1);
			t19 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(b1_nodes, "717");
			b1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t20 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p4_nodes, "\n          of these victims were not fleeing the scene.");
			p4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t21 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			p5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "P", { class: true });
			var p5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p5);
			b2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p5_nodes, "B", {});
			var b2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b2);
			t22 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(b2_nodes, "246");
			b2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t23 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p5_nodes, "\n          were shot while running away.");
			p5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t24 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			p6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "P", { class: true });
			var p6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p6);
			t25 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p6_nodes, "In only\n          ");
			b3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p6_nodes, "B", {});
			var b3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(b3);
			t26 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(b3_nodes, "194");
			b3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t27 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p6_nodes, "\n          (15.4%) of these incidents were police confirmed to have been wearing\n          a body camera.");
			p6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t28 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			p7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "P", { class: true });
			var p7_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p7);
			t29 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p7_nodes, "While Black people throughout the country deal with the\n          disproportionate effects of a global pandemic, monumental gaps in\n          access to healthcare, education and thus income equality, Black people\n          also have to figure how to stay alive, every day－that’s going for a\n          jog, driving a car, sleeping in their home, or going to the grocery\n          store.");
			p7_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t30 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			p8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "P", { class: true });
			var p8_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p8);
			t31 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p8_nodes, "We must\n          ");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p8_nodes, "SPAN", { class: true });
			var span0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span0);
			t32 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span0_nodes, "Fight For Black Lives");
			span0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			p8_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t33 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div4_nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(storycard2.$$.fragment, div4_nodes);
			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t34 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div11_nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(zipform1.$$.fragment, div11_nodes);
			t35 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div11_nodes);
			div9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div11_nodes, "DIV", { class: true });
			var div9_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div9);
			h12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div9_nodes, "H1", { id: true, class: true });
			var h12_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h12);
			t36 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h12_nodes, "How else can I help?");
			h12_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t37 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div9_nodes);
			div8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div9_nodes, "DIV", { class: true });
			var div8_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div8);
			div6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div8_nodes, "DIV", { class: true });
			var div6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div6);
			p9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div6_nodes, "P", { class: true });
			var p9_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p9);
			t38 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p9_nodes, "You can’t donate to us (we’ll always be free), but you can donate to\n          our short list of organizations working to fight systematic injustice\n          for Black people in America.");
			p9_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t39 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div6_nodes);
			p10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div6_nodes, "P", { class: true });
			var p10_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p10);
			t40 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p10_nodes, "These organizations focus on the following:");
			p10_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t41 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div6_nodes);
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div6_nodes, "UL", { class: true });
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true });
			var li0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li0);
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li0_nodes, "SPAN", { class: true });
			var span1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span1);
			t42 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span1_nodes, "Reaching lawmakers to change discriminatory or neglegent law");
			span1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t43 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(ul_nodes);
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true });
			var li1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li1);
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li1_nodes, "SPAN", { class: true });
			var span2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span2);
			t44 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span2_nodes, "Supporting efforts for better healthcare and education in\n              communities of color");
			span2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t45 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(ul_nodes);
			li2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true });
			var li2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li2);
			span3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li2_nodes, "SPAN", { class: true });
			var span3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span3);
			t46 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span3_nodes, "Moving corporations to contribute to a more just world for people\n              of color nationwide");
			span3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t47 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(ul_nodes);
			li3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true });
			var li3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li3);
			span4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li3_nodes, "SPAN", { class: true });
			var span4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span4);
			t48 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span4_nodes, "Fighting to finally put an end to state-sanctioned violence by\n              police against Black people");
			span4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t49 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(ul_nodes);
			li4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(ul_nodes, "LI", { class: true });
			var li4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li4);
			span5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li4_nodes, "SPAN", { class: true });
			var span5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span5);
			t50 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span5_nodes, "Providing bail and legal funds for protesters");
			span5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t51 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div8_nodes);
			div7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div8_nodes, "DIV", { class: true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div7).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div8_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div9_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t52 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div11_nodes);
			div10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div11_nodes, "DIV", { class: true });
			var div10_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div10);
			p11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div10_nodes, "P", { class: true });
			var p11_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p11);
			t53 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p11_nodes, "Still scrolling?");
			p11_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t54 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div10_nodes);
			p12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div10_nodes, "P", { class: true });
			var p12_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p12);
			t55 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p12_nodes, "Enter your zip code.");
			p12_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t56 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div10_nodes);
			p13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div10_nodes, "P", { class: true });
			var p13_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p13);
			t57 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p13_nodes, "Contact your representatives.");
			p13_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t58 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div10_nodes);
			p14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div10_nodes, "P", {});
			var p14_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p14);
			t59 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p14_nodes, "Fight For Black Lives.");
			p14_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div10_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t60 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div11_nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(zipform2.$$.fragment, div11_nodes);
			div11_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h10, "id", "what-can-i-do");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h10, "class", "section-header svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h10, file, 29, 8, 732);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p0, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 31, 8, 807);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p1, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 36, 8, 956);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p2, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p2, file, 42, 8, 1157);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", "#enter-your-zip-code");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "class", "text-brown-white inline-block bg-brown py-4 px-8 rounded-full\n          text-xl mt-16");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 48, 8, 1375);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "text-section flex-1 text-xl pr-6 svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 28, 6, 677);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "class", "flex-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "alt", img_alt_value = "Tweet saying " + `"Find reliable federal tracking and reporting of all incedents involving the use of deadly force by law enforcement, whether lethal or not. Do something!"`);
			if (img.src !== (img_src_value = "/mock_tweet.png")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "src", img_src_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img, file, 57, 6, 1609);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "flex items-start");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 27, 4, 640);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "contained mb-32 svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 25, 2, 605);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h11, "id", "why-should-i-do-it");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h11, "class", "section-header svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h11, file, 68, 8, 2004);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b0, file, 74, 10, 2157);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p3, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p3, file, 72, 8, 2109);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b1, file, 78, 10, 2277);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p4, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p4, file, 77, 8, 2263);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b2, file, 83, 10, 2379);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p5, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p5, file, 82, 8, 2365);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(b3, file, 89, 10, 2484);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p6, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p6, file, 87, 8, 2452);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p7, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p7, file, 94, 8, 2622);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span0, "class", "font-semibold");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 105, 10, 3076);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p8, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p8, file, 103, 8, 3044);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "text-section flex-1 pr-6 svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 67, 6, 1957);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div4, "class", "flex b-24 items-center");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 66, 4, 1914);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div5, "class", "contained mb-32 svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div5, file, 65, 2, 1880);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h12, "id", "how-else-can-i-help");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h12, "class", "section-header svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h12, file, 116, 4, 3291);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p9, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p9, file, 122, 8, 3484);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p10, "class", "mb-6 svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p10, file, 128, 8, 3708);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span1, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 132, 12, 3838);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li0, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li0, file, 131, 10, 3821);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span2, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span2, file, 137, 12, 3983);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li1, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li1, file, 136, 10, 3966);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span3, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span3, file, 143, 12, 4160);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li2, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li2, file, 142, 10, 4143);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span4, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span4, file, 149, 12, 4344);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li3, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li3, file, 148, 10, 4327);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span5, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span5, file, 155, 12, 4533);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(li4, "class", "svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li4, file, 154, 10, 4516);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(ul, "class", "list font-medium svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 130, 8, 3781);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div6, "class", "text-section flex-1 text-2xl pr-6 svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div6, file, 121, 6, 3428);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div7, "class", "flex-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div7, file, 160, 6, 4642);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div8, "class", "flex b-24 items-start");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div8, file, 120, 4, 3386);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div9, "class", "contained my-32 svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div9, file, 115, 2, 3257);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p11, "class", "text-brown-gray");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p11, file, 165, 4, 4737);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p12, "class", "text-brown-gray");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p12, file, 166, 4, 4789);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p13, "class", "text-brown-gray");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p13, file, 167, 4, 4845);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p14, file, 168, 4, 4910);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div10, "class", "contained hero-container mb-24 svelte-1cvvi5f");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div10, file, 164, 2, 4688);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div11, "id", "enter-your-zip-code");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div11, "class", "flex flex-col flex-1 self-stretch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div11, file, 21, 0, 485);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div11, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(hero, div11, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(zipform0, div11, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h10, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p0, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p1, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p2, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, div5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div5, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, h11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h11, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t14);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, p3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p3, t15);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p3, b0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b0, t16);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p3, t17);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t18);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, p4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p4, b1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b1, t19);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p4, t20);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t21);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, p5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p5, b2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b2, t22);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p5, t23);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t24);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, p6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p6, t25);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p6, b3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(b3, t26);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p6, t27);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t28);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, p7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p7, t29);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t30);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, p8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p8, t31);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p8, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span0, t32);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, t33);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(storycard2, div4, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, t34);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(zipform1, div11, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, t35);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, div9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div9, h12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h12, t36);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div9, t37);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div9, div8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div8, div6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div6, p9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p9, t38);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div6, t39);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div6, p10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p10, t40);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div6, t41);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div6, ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li0, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span1, t42);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, t43);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li1, span2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span2, t44);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, t45);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li2, span3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span3, t46);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, t47);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li3, span4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span4, t48);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, t49);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(ul, li4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li4, span5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span5, t50);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div8, t51);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div8, div7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, t52);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, div10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div10, p11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p11, t53);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div10, t54);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div10, p12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p12, t55);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div10, t56);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div10, p13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p13, t57);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div10, t58);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div10, p14);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p14, t59);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div11, t60);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(zipform2, div11, null);
			current = true;

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["action_destroyer"])(scrollLink_action = mixins_scrollLink__WEBPACK_IMPORTED_MODULE_6___default.a.call(null, a));
				mounted = true;
			}
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(hero.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(zipform0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(storycard2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(zipform1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(zipform2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(hero.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(zipform0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(storycard2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(zipform1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(zipform2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(hero);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(zipform0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(storycard2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(zipform1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(zipform2);
			mounted = false;
			dispose();
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

const zipCodePattern = /^[0-9]{5}$/;

function instance($$self, $$props, $$invalidate) {
	let zipCode = "";
	let pristine = true;

	const submit = () => {
		if (zipCodePattern.test()) {
			
		} else {
			pristine = false;
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Routes", $$slots, []);

	$$self.$capture_state = () => ({
		getZipCodeBundle: utils_api__WEBPACK_IMPORTED_MODULE_1__["getZipCodeBundle"],
		Hero: components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"],
		ZipForm: components_ZipForm__WEBPACK_IMPORTED_MODULE_3__["default"],
		StoryCard: components_StoryCard__WEBPACK_IMPORTED_MODULE_4__["default"],
		StoryCard2: components_StoryCard2__WEBPACK_IMPORTED_MODULE_5__["default"],
		scrollLink: (mixins_scrollLink__WEBPACK_IMPORTED_MODULE_6___default()),
		zipCode,
		pristine,
		zipCodePattern,
		submit
	});

	$$self.$inject_state = $$props => {
		if ("zipCode" in $$props) zipCode = $$props.zipCode;
		if ("pristine" in $$props) pristine = $$props.pristine;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [];
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1cvvi5f-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes
  = module && module.hot
    ? _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_7__["applyHmr"]({
        m: module,
        id: "\"src/routes/index.svelte\"",
        hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true},
        Component: Routes,
        ProxyAdapter: _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_8__["default"],
        compileData: {"vars":[{"name":"getZipCodeBundle","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":false},{"name":"Hero","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"ZipForm","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"StoryCard","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":false},{"name":"StoryCard2","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"scrollLink","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"zipCode","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":true,"referenced_from_script":false},{"name":"pristine","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":false,"writable":true,"referenced_from_script":true},{"name":"zipCodePattern","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true},{"name":"submit","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":false}],"accessors":false},
        compileOptions: {"filename":"/Users/samueldesota/d/fightforblacklives/fightforblacklives.com/src/routes/index.svelte","format":"esm","dev":true,"hydratable":true},
      })
    : Routes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmV0Y2gtanNvbnAvYnVpbGQvZmV0Y2gtanNvbnAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVyby5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvWmlwRm9ybS5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHlwZXIvU2xpZGVyLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90eXBlci9UeXBlci5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHlwZXIvVHlwZXJUZXh0LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90eXBlci9UeXBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9tZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTSxJQUEwQztBQUNoRCxJQUFJLGlDQUFPLENBQUMsT0FBUyxFQUFFLE1BQVEsQ0FBQyxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQzFDLEdBQUcsTUFBTSxZQVFOO0FBQ0gsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRTs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SCtDO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0tDR3NCLEdBQU8sSUFBQyxLQUFLLElBQUksRUFBRTs7Ozs7OzhGQUl0RSxHQUFPOzs7Ozs7Ozs7Ozs0REFBUCxHQUFPOytGQUFQLEdBQU87OztrSkFKNEMsR0FBTyxJQUFDLEtBQUssSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBTGhGLE9BQU87Ozs7O0VBU0csT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ1M7QUFDTDtBQUNMOzs7Ozs7Ozs7Ozs7Ozs7NkVBMEJoQyxHQUFJOzs7Ozs7K0ZBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytGQUZRLEdBQVksdUJBQVosR0FBWTs7Ozs7Ozs7Ozs7O3dIQUV4QixHQUFJOzs7Ozs7bU1BRGEsUUFBUSxlQUFSLEdBQVEsS0FBRSxDQUFDLEdBQUcsRUFBRTs7Ozs7OztrTUFBaEIsUUFBUSxlQUFSLEdBQVEsS0FBRSxDQUFDLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RUFMWCxHQUFJOzs7Ozs7K0ZBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs0R0FBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFEMUIsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWpCQyxJQUFJO09BQ0osUUFBUSxHQUFHLElBQUk7O09BQ2YsWUFBWTs7OztPQUVqQixHQUFHLEdBQUcseURBQVUsQ0FBQyxnREFBSztLQUN4QixPQUFPLEdBQUcsSUFBSTs7Q0FFbEIsc0RBQU87RUFDTCxHQUFHLENBQUMsUUFBUTttQkFDVixPQUFPLEdBQUcsS0FBSzs7Y0FDSixPQUFPLENBQUMsT0FBTztxQkFDeEIsWUFBWSxHQUFHLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQk87QUFDcUI7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUU3QyxLQUFLO0tBQ1AsT0FBTyxHQUFHLEtBQUs7O0NBRW5CLHlEQUFVLENBQUMsZ0VBQUs7RUFDZCxRQUFRLENBQUMsS0FBSztHQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztHQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07O1FBRWIsT0FBTztJQUNWLE9BQU8sR0FBRyxJQUFJO0lBQ2QsSUFBSTs7Ozs7T0FLSixJQUFJO2FBQ0csSUFBSSxJQUFJLEtBQUs7U0FDaEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCcUI7QUFDcUI7QUFDTDs7Ozs7O3lCQXFDZCxHQUFJLElBQUMsS0FBSyxDQUFDLENBQUMsWUFBRSxHQUFLOzs7Ozs7Ozs7Ozs7OzhFQUMvQixHQUFJOzs7Ozs7Ozs7Ozs7O2lHQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0VBRFEsR0FBSSxJQUFDLEtBQUssQ0FBQyxDQUFDLFlBQUUsR0FBSzs2R0FDL0IsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcENsQixJQUFJO09BQ0osT0FBTyxHQUFHLElBQUk7T0FDZCxpQkFBaUIsR0FBRyxFQUFFO09BRTNCLEdBQUcsR0FBRyx5REFBVSxDQUFDLGdFQUFLO0tBRXhCLEtBQUssR0FBRyxDQUFDOztPQUVQLFNBQVM7TUFDVCxPQUFPLEtBQUssS0FBSztTQUNiLE1BQU07OztRQUdSLHdEQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUU7OztPQUd6RCxJQUFJO3VCQUNILEtBQUssR0FBRyxDQUFDLEdBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLGtCQUFFLEtBQUs7U0FDbEMsU0FBUzs7OztDQUluQixzREFBTztrQkFDTCxPQUFPLEdBQUcsSUFBSTtFQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSztFQUNqQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUk7OztDQUduQix3REFBUztrQkFDUCxPQUFPLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ04sYUFBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NVO0FBQ1Y7QUFDTTtBQUNJO0FBQ0U7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUtyQyxjQUFjLEdBQUcsWUFBWTs7O0tBSC9CLE9BQU8sR0FBRyxFQUFFO0tBQ1osUUFBUSxHQUFHLElBQUk7O09BSWIsTUFBTTtNQUNOLGNBQWMsQ0FBQyxJQUFJOzs7R0FFckIsUUFBUSxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnRCLHNFQUFrQztBQUVyQix3QkFBZ0IsR0FBRyxVQUFDLElBQVk7SUFDM0MsT0FBTyxPQUFPLENBQ1oscUVBQW1FLElBQUksV0FBUSxDQUNoRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsZUFBUSxDQUFDO0lBQ3hCLG9GQUFjLG9FQUFhLE9BQUU7QUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLE9BQU8sR0FBRyxVQUFPLEdBQVc7Ozs7b0JBQ0wsV0FBTSxRQUFRLEVBQUU7O2dCQUExQixLQUFLLEdBQUssVUFBZ0IsWUFBckI7Z0JBRXRCLFdBQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRzt3QkFDaEUsVUFBRyxDQUFDLElBQUksRUFBRTtvQkFBVixDQUFVLENBQ1gsRUFBQzs7O0tBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFakIsZ0JBQVEsR0FBRyxVQUFxQixFQUFLO0lBQ2hELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixJQUFJLFlBQVksQ0FBQztJQUVqQixPQUFRLENBQUMsVUFBQyxHQUFHO1FBQ1gsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFO1lBQ3JCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUMsQ0FBYyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsImZpbGUiOiJiZGI2NGE5YzU0MmM3YWM0NzRkZC9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydleHBvcnRzJywgJ21vZHVsZSddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBtb2QpO1xuICAgIGdsb2JhbC5mZXRjaEpzb25wID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBtb2R1bGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiA1MDAwLFxuICAgIGpzb25wQ2FsbGJhY2s6ICdjYWxsYmFjaycsXG4gICAganNvbnBDYWxsYmFja0Z1bmN0aW9uOiBudWxsXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDYWxsYmFja0Z1bmN0aW9uKCkge1xuICAgIHJldHVybiAnanNvbnBfJyArIERhdGUubm93KCkgKyAnXycgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckZ1bmN0aW9uKGZ1bmN0aW9uTmFtZSkge1xuICAgIC8vIElFOCB0aHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4geW91IHRyeSB0byBkZWxldGUgYSBwcm9wZXJ0eSBvbiB3aW5kb3dcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODI0MjI4Lzc1MTA4OVxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgd2luZG93W2Z1bmN0aW9uTmFtZV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgd2luZG93W2Z1bmN0aW9uTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2NyaXB0KHNjcmlwdElkKSB7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmlwdElkKTtcbiAgICBpZiAoc2NyaXB0KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hKc29ucChfdXJsKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIHRvIGF2b2lkIHBhcmFtIHJlYXNzaWduXG4gICAgdmFyIHVybCA9IF91cmw7XG4gICAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgZGVmYXVsdE9wdGlvbnMudGltZW91dDtcbiAgICB2YXIganNvbnBDYWxsYmFjayA9IG9wdGlvbnMuanNvbnBDYWxsYmFjayB8fCBkZWZhdWx0T3B0aW9ucy5qc29ucENhbGxiYWNrO1xuXG4gICAgdmFyIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IG9wdGlvbnMuanNvbnBDYWxsYmFja0Z1bmN0aW9uIHx8IGdlbmVyYXRlQ2FsbGJhY2tGdW5jdGlvbigpO1xuICAgICAgdmFyIHNjcmlwdElkID0ganNvbnBDYWxsYmFjayArICdfJyArIGNhbGxiYWNrRnVuY3Rpb247XG5cbiAgICAgIHdpbmRvd1tjYWxsYmFja0Z1bmN0aW9uXSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBvazogdHJ1ZSxcbiAgICAgICAgICAvLyBrZWVwIGNvbnNpc3RlbnQgd2l0aCBmZXRjaCBBUElcbiAgICAgICAgICBqc29uOiBmdW5jdGlvbiBqc29uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGltZW91dElkKSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuICAgICAgICByZW1vdmVTY3JpcHQoc2NyaXB0SWQpO1xuXG4gICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICB9O1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBzZXQgdGhlaXIgb3duIHBhcmFtcywgYW5kIGlmIG5vdCBhZGQgYSA/IHRvIHN0YXJ0IGEgbGlzdCBvZiBwYXJhbXNcbiAgICAgIHVybCArPSB1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcblxuICAgICAgdmFyIGpzb25wU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBqc29ucFNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnICsgdXJsICsganNvbnBDYWxsYmFjayArICc9JyArIGNhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCkge1xuICAgICAgICBqc29ucFNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2NoYXJzZXQnLCBvcHRpb25zLmNoYXJzZXQpO1xuICAgICAgfVxuICAgICAganNvbnBTY3JpcHQuaWQgPSBzY3JpcHRJZDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoanNvbnBTY3JpcHQpO1xuXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSlNPTlAgcmVxdWVzdCB0byAnICsgX3VybCArICcgdGltZWQgb3V0JykpO1xuXG4gICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIHJlbW92ZVNjcmlwdChzY3JpcHRJZCk7XG4gICAgICAgIHdpbmRvd1tjYWxsYmFja0Z1bmN0aW9uXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbGVhckZ1bmN0aW9uKGNhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgIC8vIENhdWdodCBpZiBnb3QgNDA0LzUwMFxuICAgICAganNvbnBTY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSlNPTlAgcmVxdWVzdCB0byAnICsgX3VybCArICcgZmFpbGVkJykpO1xuXG4gICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIHJlbW92ZVNjcmlwdChzY3JpcHRJZCk7XG4gICAgICAgIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGV4cG9ydCBhcyBnbG9iYWwgZnVuY3Rpb25cbiAgLypcbiAgbGV0IGxvY2FsO1xuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbCA9IHNlbGY7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgIH1cbiAgfVxuICBsb2NhbC5mZXRjaEpzb25wID0gZmV0Y2hKc29ucDtcbiAgKi9cblxuICBtb2R1bGUuZXhwb3J0cyA9IGZldGNoSnNvbnA7XG59KTsiLCI8c2NyaXB0PlxuICBpbXBvcnQgVHlwZSBmcm9tIFwiY29tcG9uZW50cy90eXBlci9UeXBlclRleHRcIjtcbiAgaW1wb3J0IFNsaWRlciBmcm9tIFwiY29tcG9uZW50cy90eXBlci9TbGlkZXJcIjtcbiAgaW1wb3J0IFR5cGVyIGZyb20gXCJjb21wb25lbnRzL3R5cGVyL1R5cGVyXCI7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lZCBoZXJvLWNvbnRhaW5lciBteS0yNFwiPlxuICA8VHlwZXI+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWJyb3duLWdyYXlcIj5cbiAgICAgIDxTbGlkZXIgdGV4dD1cIkVudGVyIHlvdXIgemlwIGNvZGUuXCIgLz5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWJyb3duLWdyYXlcIj5cbiAgICAgIDxTbGlkZXIgdGV4dD1cIkNvbnRhY3QgeW91ciByZXByZXNlbnRhdGl2ZXMgKHdlJ2xsIGhlbHApLlwiIC8+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzPVwidGV4dC1icm93bi1ncmF5XCI+XG4gICAgICA8U2xpZGVyIHRleHQ9XCJNYWtlIHRoZW0gd3JpdGUgbGF3cyB0byBmaXggdGhpcy5cIiAvPlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxUeXBlIHRleHQ9XCJGaWdodCBGb3IgQmxhY2sgTGl2ZXMuXCIgLz5cbiAgICA8L3A+XG4gIDwvVHlwZXI+XG48L2Rpdj5cblxuPHN0eWxlPi5jb250YWluZWQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZWQtbWQge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVkLW1kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5oZXJvLWNvbnRhaW5lciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2NvbXBvbmVudHMvSGVyby5zdmVsdGUubWFwICovPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gIGxldCB6aXBDb2RlO1xuPC9zY3JpcHQ+XG5cbjxkaXZcbiAgc3R5bGU9XCJ3aWR0aDogNjAwcHhcIlxuICBjbGFzcz1cImZsZXggbXgtYXV0byByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1icm93biBtYXgtaC1mdWxsIHskJHByb3BzLmNsYXNzIHx8ICcnfVwiPlxuICA8aW5wdXRcbiAgICBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgNS1kaWdpdCB6aXAgY29kZVwiXG4gICAgY2xhc3M9XCJ6aXAtaW5wdXQgYmctdHJhbnNwYXJlbnQgcHktNCBweC02IGZsZXgtMSB0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiXG4gICAgYmluZDp2YWx1ZT17emlwQ29kZX0gLz5cblxuICA8YnV0dG9uXG4gICAgY2xhc3M9XCJiZy1icm93biBweC0xMiB0ZXh0LWJyb3duLXdoaXRlIG0tMSByb3VuZGVkLWZ1bGwgc2VsZi1zdHJldGNoIHRleHQteGxcIj5cbiAgICBGaWdodCFcbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPHN0eWxlPi5jb250YWluZWQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZWQtbWQge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVkLW1kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi56aXAtaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAtLXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6ICMzMzFFMEY7XG4gIGNvbG9yOiByZ2JhKDUxLCAzMCwgMTUsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xufVxuXG4uemlwLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogIzMzMUUwRjtcbiAgY29sb3I6IHJnYmEoNTEsIDMwLCAxNSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG59XG5cbi56aXAtaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogIzMzMUUwRjtcbiAgY29sb3I6IHJnYmEoNTEsIDMwLCAxNSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG59XG5cbi56aXAtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjMzMxRTBGO1xuICBjb2xvcjogcmdiYSg1MSwgMzAsIDE1LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2NvbXBvbmVudHMvWmlwRm9ybS5zdmVsdGUubWFwICovPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IHR5cGVyIH0gZnJvbSBcIi4vdHlwZXItYXBpXCI7XG4gIGltcG9ydCB7IG9uTW91bnQsIGdldENvbnRleHQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIGltcG9ydCB7IGZseSB9IGZyb20gXCJzdmVsdGUvdHJhbnNpdGlvblwiO1xuICBpbXBvcnQgeyBkZWxheSB9IGZyb20gXCJ1dGlscy90aW1lXCI7XG5cbiAgZXhwb3J0IGxldCB0ZXh0O1xuICBleHBvcnQgbGV0IGR1cmF0aW9uID0gMTAwMDtcbiAgZXhwb3J0IGxldCBpbnRyb1Jlc29sdmUgPSAoKSA9PiB7fTtcblxuICBjb25zdCBhcGkgPSBnZXRDb250ZXh0KHR5cGVyKTtcbiAgbGV0IHdhaXRpbmcgPSB0cnVlO1xuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGFwaS5yZWdpc3Rlcihhc3luYyAoKSA9PiB7XG4gICAgICB3YWl0aW5nID0gZmFsc2U7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGludHJvUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG48L3NjcmlwdD5cblxueyNpZiB3YWl0aW5nfVxuICA8c3BhbiBjbGFzcz1cIm9wYWNpdHktMFwiPnt0ZXh0fTwvc3Bhbj5cbns6ZWxzZX1cbiAgPHNwYW5cbiAgICBjbGFzcz1cImlubGluZS1ibG9ja1wiXG4gICAgb246aW50cm9lbmQ9e2ludHJvUmVzb2x2ZX1cbiAgICB0cmFuc2l0aW9uOmZseT17eyBkdXJhdGlvbiwgeTogLTIwIH19PlxuICAgIHt0ZXh0fVxuICA8L3NwYW4+XG57L2lmfVxuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwidXRpbHMvdGltZVwiO1xuICBpbXBvcnQgeyBvbk1vdW50LCBvbkRlc3Ryb3ksIHNldENvbnRleHQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIGltcG9ydCB7IHR5cGVyIH0gZnJvbSBcImNvbXBvbmVudHMvdHlwZXIvdHlwZXItYXBpXCI7XG5cbiAgY29uc3QgdGV4dHMgPSBbXTtcbiAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcblxuICBzZXRDb250ZXh0KHR5cGVyLCB7XG4gICAgcmVnaXN0ZXIoc3RhcnQpIHtcbiAgICAgIHRleHRzLnB1c2goc3RhcnQpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XG5cbiAgICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgdHlwZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdHlwZSA9IGFzeW5jICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHRleHQgb2YgdGV4dHMpIHtcbiAgICAgIGF3YWl0IHRleHQoKTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuPHNsb3QgLz5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlbGF5IH0gZnJvbSBcInV0aWxzL3RpbWVcIjtcbiAgaW1wb3J0IHsgb25Nb3VudCwgb25EZXN0cm95LCBnZXRDb250ZXh0IH0gZnJvbSBcInN2ZWx0ZVwiO1xuICBpbXBvcnQgeyB0eXBlciB9IGZyb20gXCJjb21wb25lbnRzL3R5cGVyL3R5cGVyLWFwaVwiO1xuXG4gIGV4cG9ydCBsZXQgdGV4dDtcbiAgZXhwb3J0IGxldCBtb3VudGVkID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCB0eXBlRGVsYXlEdXJhdGlvbiA9IDQwO1xuXG4gIGNvbnN0IGFwaSA9IGdldENvbnRleHQodHlwZXIpO1xuXG4gIGxldCBzbGljZSA9IDA7XG5cbiAgY29uc3QgdHlwZURlbGF5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChtb3VudGVkID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgXCJkb25lXCI7XG4gICAgfVxuXG4gICAgYXdhaXQgZGVsYXkodHlwZURlbGF5RHVyYXRpb24gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkpO1xuICB9O1xuXG4gIGNvbnN0IHR5cGUgPSBhc3luYyAoKSA9PiB7XG4gICAgZm9yIChzbGljZSA9IDA7IHNsaWNlIDwgdGV4dC5sZW5ndGg7IHNsaWNlKyspIHtcbiAgICAgIGF3YWl0IHR5cGVEZWxheSgpO1xuICAgIH1cbiAgfTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBtb3VudGVkID0gdHJ1ZTtcblxuICAgIGNvbnNvbGUubG9nKFwicmFuXCIpO1xuICAgIGFwaS5yZWdpc3Rlcih0eXBlKTtcbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBtb3VudGVkID0gZmFsc2U7XG4gIH0pO1xuPC9zY3JpcHQ+XG5cbjxzcGFuIGNsYXNzPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrXCI+XG4gIDxzcGFuIGNsYXNzPVwiYWJzb2x1dGUgaW5saW5lLWJsb2NrXCI+e3RleHQuc2xpY2UoMCwgc2xpY2UpfTwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJvcGFjaXR5LTBcIj57dGV4dH08L3NwYW4+XG48L3NwYW4+XG4iLCJleHBvcnQgY29uc3QgdHlwZXIgPSBTeW1ib2woXCJ0eXBlclwiKTtcbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldFppcENvZGVCdW5kbGUgfSBmcm9tIFwidXRpbHMvYXBpXCI7XG4gIGltcG9ydCBIZXJvIGZyb20gXCJjb21wb25lbnRzL0hlcm9cIjtcbiAgaW1wb3J0IFppcEZvcm0gZnJvbSBcImNvbXBvbmVudHMvWmlwRm9ybVwiO1xuICBpbXBvcnQgU3RvcnlDYXJkIGZyb20gXCJjb21wb25lbnRzL1N0b3J5Q2FyZFwiO1xuICBpbXBvcnQgU3RvcnlDYXJkMiBmcm9tIFwiY29tcG9uZW50cy9TdG9yeUNhcmQyXCI7XG4gIGltcG9ydCBzY3JvbGxMaW5rIGZyb20gXCJtaXhpbnMvc2Nyb2xsTGlua1wiO1xuXG4gIGxldCB6aXBDb2RlID0gXCJcIjtcbiAgbGV0IHByaXN0aW5lID0gdHJ1ZTtcblxuICBjb25zdCB6aXBDb2RlUGF0dGVybiA9IC9eWzAtOV17NX0kLztcblxuICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHppcENvZGVQYXR0ZXJuLnRlc3QoKSkge1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmlzdGluZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG48ZGl2IGlkPVwiZW50ZXIteW91ci16aXAtY29kZVwiIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBmbGV4LTEgc2VsZi1zdHJldGNoXCI+XG4gIDxIZXJvIC8+XG4gIDxaaXBGb3JtIGNsYXNzPVwibXQtMiBtYi0zMlwiIC8+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lZCBtYi0zMlwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtc3RhcnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNlY3Rpb24gZmxleC0xIHRleHQteGwgcHItNlwiPlxuICAgICAgICA8aDEgaWQ9XCJ3aGF0LWNhbi1pLWRvXCIgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPldoYXQgY2FuIEkgZG8/PC9oMT5cblxuICAgICAgICA8cD5cbiAgICAgICAgICBEZW1hbmQgY2hhbmdlIGJ5IHdheSBvZiBsZWdpc2xhdGlvbiBmcm9tIGV2ZXJ5IGxldmVsIG9mIGdvdmVybm1lbnQuXG4gICAgICAgICAgVGhlc2UgZWxlY3RlZCBvZmZpY2lhbHMgc2VydmUgWU9VLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVXNlIHRoaXMgdG9vbCB0byBnZXQgY29udGFjdCBpbmZvIGZvciB5b3VyIExvY2FsLCBTdGF0ZSAmIEZlZGVyYWxcbiAgICAgICAgICByZXByZXNlbnRhdGl2ZXMg77yNIHRoYXTigJlzIGVtYWlsLCBwaG9uZSBudW1iZXJzLCBvZmZpY2UgYWRkcmVzc2VzLFxuICAgICAgICAgIHNvY2lhbCBtZWRpYS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIHByb3ZpZGUgY2FubmVkIG1lc3NhZ2VzIHlvdSBjYW4gdHdlZXQsIGVtYWlsIG9yIHdyaXRlIG9uIGEgbnVtYmVyXG4gICAgICAgICAgb2YgdG9waWNzIHRoYXQgYWxsIHN1cHBvcnQgZW5kaW5nIHBvbGljZSB2aW9sZW5jZSBhZ2FpbnN0IGJsYWNrIGFuZFxuICAgICAgICAgIGJyb3duIHBlb3BsZSBpbiBBbWVyaWNhLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICB1c2U6c2Nyb2xsTGlua1xuICAgICAgICAgIGhyZWY9XCIjZW50ZXIteW91ci16aXAtY29kZVwiXG4gICAgICAgICAgY2xhc3M9XCJ0ZXh0LWJyb3duLXdoaXRlIGlubGluZS1ibG9jayBiZy1icm93biBweS00IHB4LTggcm91bmRlZC1mdWxsXG4gICAgICAgICAgdGV4dC14bCBtdC0xNlwiPlxuICAgICAgICAgIEVudGVyIHlvdXIgemlwIGNvZGVcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJmbGV4LTFcIlxuICAgICAgICBhbHQ9XCJUd2VldCBzYXlpbmcge2BcIkZpbmQgcmVsaWFibGUgZmVkZXJhbCB0cmFja2luZyBhbmQgcmVwb3J0aW5nIG9mIGFsbCBpbmNlZGVudHMgaW52b2x2aW5nIHRoZSB1c2Ugb2YgZGVhZGx5IGZvcmNlIGJ5IGxhdyBlbmZvcmNlbWVudCwgd2hldGhlciBsZXRoYWwgb3Igbm90LiBEbyBzb21ldGhpbmchXCJgfVwiXG4gICAgICAgIHNyYz1cIi9tb2NrX3R3ZWV0LnBuZ1wiIC8+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lZCBtYi0zMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGItMjQgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zZWN0aW9uIGZsZXgtMSBwci02XCI+XG4gICAgICAgIDxoMSBpZD1cIndoeS1zaG91bGQtaS1kby1pdFwiIGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICBXaHkgc2hvdWxkIEkgZG8gaXQ/XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2luY2UgSmFudWFyeSAxc3QgMjAxNSxcbiAgICAgICAgICA8Yj4xMjYyPC9iPlxuICAgICAgICAgIEJsYWNrIG1lbiBhbmQgd29tZW4gd2VyZSBzaG90IGFuZCBraWxsZWQgYnkgcG9saWNlIGluIEFtZXJpY2EuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGI+NzE3PC9iPlxuICAgICAgICAgIG9mIHRoZXNlIHZpY3RpbXMgd2VyZSBub3QgZmxlZWluZyB0aGUgc2NlbmUuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5cbiAgICAgICAgICA8Yj4yNDY8L2I+XG4gICAgICAgICAgd2VyZSBzaG90IHdoaWxlIHJ1bm5pbmcgYXdheS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIG9ubHlcbiAgICAgICAgICA8Yj4xOTQ8L2I+XG4gICAgICAgICAgKDE1LjQlKSBvZiB0aGVzZSBpbmNpZGVudHMgd2VyZSBwb2xpY2UgY29uZmlybWVkIHRvIGhhdmUgYmVlbiB3ZWFyaW5nXG4gICAgICAgICAgYSBib2R5IGNhbWVyYS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoaWxlIEJsYWNrIHBlb3BsZSB0aHJvdWdob3V0IHRoZSBjb3VudHJ5IGRlYWwgd2l0aCB0aGVcbiAgICAgICAgICBkaXNwcm9wb3J0aW9uYXRlIGVmZmVjdHMgb2YgYSBnbG9iYWwgcGFuZGVtaWMsIG1vbnVtZW50YWwgZ2FwcyBpblxuICAgICAgICAgIGFjY2VzcyB0byBoZWFsdGhjYXJlLCBlZHVjYXRpb24gYW5kIHRodXMgaW5jb21lIGVxdWFsaXR5LCBCbGFjayBwZW9wbGVcbiAgICAgICAgICBhbHNvIGhhdmUgdG8gZmlndXJlIGhvdyB0byBzdGF5IGFsaXZlLCBldmVyeSBkYXnvvI10aGF04oCZcyBnb2luZyBmb3IgYVxuICAgICAgICAgIGpvZywgZHJpdmluZyBhIGNhciwgc2xlZXBpbmcgaW4gdGhlaXIgaG9tZSwgb3IgZ29pbmcgdG8gdGhlIGdyb2NlcnlcbiAgICAgICAgICBzdG9yZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIG11c3RcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtc2VtaWJvbGRcIj5GaWdodCBGb3IgQmxhY2sgTGl2ZXM8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8U3RvcnlDYXJkMiBzdHlsZT1cImZsZXg6IDAgMCA0NTBweDtcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8WmlwRm9ybSBjbGFzcz1cIm15LThcIiAvPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZWQgbXktMzJcIj5cbiAgICA8aDEgaWQ9XCJob3ctZWxzZS1jYW4taS1oZWxwXCIgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgSG93IGVsc2UgY2FuIEkgaGVscD9cbiAgICA8L2gxPlxuXG4gICAgPGRpdiBjbGFzcz1cImZsZXggYi0yNCBpdGVtcy1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtc2VjdGlvbiBmbGV4LTEgdGV4dC0yeGwgcHItNlwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBZb3UgY2Fu4oCZdCBkb25hdGUgdG8gdXMgKHdl4oCZbGwgYWx3YXlzIGJlIGZyZWUpLCBidXQgeW91IGNhbiBkb25hdGUgdG9cbiAgICAgICAgICBvdXIgc2hvcnQgbGlzdCBvZiBvcmdhbml6YXRpb25zIHdvcmtpbmcgdG8gZmlnaHQgc3lzdGVtYXRpYyBpbmp1c3RpY2VcbiAgICAgICAgICBmb3IgQmxhY2sgcGVvcGxlIGluIEFtZXJpY2EuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cCBjbGFzcz1cIm1iLTZcIj5UaGVzZSBvcmdhbml6YXRpb25zIGZvY3VzIG9uIHRoZSBmb2xsb3dpbmc6PC9wPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgUmVhY2hpbmcgbGF3bWFrZXJzIHRvIGNoYW5nZSBkaXNjcmltaW5hdG9yeSBvciBuZWdsZWdlbnQgbGF3XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgU3VwcG9ydGluZyBlZmZvcnRzIGZvciBiZXR0ZXIgaGVhbHRoY2FyZSBhbmQgZWR1Y2F0aW9uIGluXG4gICAgICAgICAgICAgIGNvbW11bml0aWVzIG9mIGNvbG9yXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgTW92aW5nIGNvcnBvcmF0aW9ucyB0byBjb250cmlidXRlIHRvIGEgbW9yZSBqdXN0IHdvcmxkIGZvciBwZW9wbGVcbiAgICAgICAgICAgICAgb2YgY29sb3IgbmF0aW9ud2lkZVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIEZpZ2h0aW5nIHRvIGZpbmFsbHkgcHV0IGFuIGVuZCB0byBzdGF0ZS1zYW5jdGlvbmVkIHZpb2xlbmNlIGJ5XG4gICAgICAgICAgICAgIHBvbGljZSBhZ2FpbnN0IEJsYWNrIHBlb3BsZVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4+UHJvdmlkaW5nIGJhaWwgYW5kIGxlZ2FsIGZ1bmRzIGZvciBwcm90ZXN0ZXJzPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZWQgaGVyby1jb250YWluZXIgbWItMjRcIj5cbiAgICA8cCBjbGFzcz1cInRleHQtYnJvd24tZ3JheVwiPlN0aWxsIHNjcm9sbGluZz88L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWJyb3duLWdyYXlcIj5FbnRlciB5b3VyIHppcCBjb2RlLjwvcD5cbiAgICA8cCBjbGFzcz1cInRleHQtYnJvd24tZ3JheVwiPkNvbnRhY3QgeW91ciByZXByZXNlbnRhdGl2ZXMuPC9wPlxuICAgIDxwPkZpZ2h0IEZvciBCbGFjayBMaXZlcy48L3A+XG4gIDwvZGl2PlxuXG4gIDxaaXBGb3JtIGNsYXNzPVwibWItMjRcIiAvPlxuPC9kaXY+XG5cbjxzdHlsZT4uY29udGFpbmVkIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVkLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lZC1tZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaGVyby1jb250YWluZXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi50ZXh0LXNlY3Rpb24ge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnRleHQtc2VjdGlvbiBwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cblxudWwubGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsLmxpc3QgPiBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbnVsLmxpc3QgPiBsaTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbnVsLmxpc3QgPiBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG51bC5saXN0ID4gbGkgPiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogIzk0ODM3QjtcbiAgY29sb3I6IHJnYmEoMTQ4LCAxMzEsIDEyMywgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL3JvdXRlcy9pbmRleC5zdmVsdGUubWFwICovPC9zdHlsZT5cbiIsImltcG9ydCB7IG1lbW9PbmNlIH0gZnJvbSBcIi4vbWVtb1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0WmlwQ29kZUJ1bmRsZSA9IChjb2RlOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHJlcXVlc3QoXG4gICAgYGh0dHBzOi8vZmlnaHRmb3JibGFja2xpdmVzLmdpdGh1Yi5pby9mZmJsLWRhdGEvemlwLWNvZGUtYnVuZGxlcy8ke2NvZGV9Lmpzb25wYFxuICApO1xufTtcblxuY29uc3QgZ2V0RmV0Y2ggPSBtZW1vT25jZSgoKSA9PiB7XG4gIHJldHVybiBpbXBvcnQoXCJmZXRjaC1qc29ucFwiKTtcbn0pO1xuXG5jb25zdCByZXF1ZXN0ID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdDogZmV0Y2ggfSA9IGF3YWl0IGdldEZldGNoKCk7XG5cbiAgcmV0dXJuIGZldGNoKHVybCwgeyBqc29ucENhbGxiYWNrRnVuY3Rpb246IFwiY2FsbGJhY2tcIiB9KS50aGVuKChyZXMpID0+XG4gICAgcmVzLmpzb24oKVxuICApO1xufTtcbiIsImNvbnN0IGVtcHR5ID0gU3ltYm9sKFwiZW1wdHlcIik7XG5cbmV4cG9ydCBjb25zdCBtZW1vT25jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KGZuOiBUKTogVCA9PiB7XG4gIGxldCBjYWNoZWRBcmcgPSBlbXB0eTtcbiAgbGV0IGNhY2hlZFJldHVybjtcblxuICByZXR1cm4gKCgoYXJnKSA9PiB7XG4gICAgaWYgKGNhY2hlZEFyZyA9PT0gYXJnKSB7XG4gICAgICByZXR1cm4gY2FjaGVkUmV0dXJuO1xuICAgIH1cblxuICAgIGNhY2hlZEFyZyA9IGFyZztcbiAgICBjYWNoZWRSZXR1cm4gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZWRSZXR1cm47XG4gIH0pIGFzIGFueSkgYXMgVDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9