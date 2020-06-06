(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scratch"],{

/***/ "./src/routes/scratch.svelte":
/*!***********************************!*\
  !*** ./src/routes/scratch.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var components_StoryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/StoryCard */ "./src/components/StoryCard.svelte");
/* harmony import */ var components_StoryCard2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/StoryCard2 */ "./src/components/StoryCard2.svelte");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src/routes/scratch.svelte generated by Svelte v3.23.0 */




const file = "src/routes/scratch.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1vb90hr-style";
	style.textContent = ".contained.svelte-1vb90hr{max-width:1280px;margin-left:auto;margin-right:auto;width:100%}@media only screen and (max-width: 1304px){.contained.svelte-1vb90hr{margin-left:1.5rem;margin-right:1.5rem;width:calc(100% - 48px)}}@media(min-width: 768px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXRjaC5zdmVsdGUiLCJzb3VyY2VzIjpbInNjcmF0Y2guc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBTdG9yeUNhcmQgZnJvbSBcImNvbXBvbmVudHMvU3RvcnlDYXJkXCI7XG4gIGltcG9ydCBTdG9yeUNhcmQyIGZyb20gXCJjb21wb25lbnRzL1N0b3J5Q2FyZDJcIjtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVkIHB5LTI0IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gIDxTdG9yeUNhcmQgLz5cblxuICA8U3RvcnlDYXJkMiBzdHlsZT1cIm1hcmdpbi10b3A6IDYwMHB4XCIgLz5cbjwvZGl2PlxuXG48c3R5bGU+LmNvbnRhaW5lZCB7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzA0cHgpIHtcbiAgLmNvbnRhaW5lZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XG4gIH1cbn1cblxuLmNvbnRhaW5lZC1tZCB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZWQtbWQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL3JvdXRlcy9zY3JhdGNoLnN2ZWx0ZS5tYXAgKi88L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdPLFVBQVUsZUFBQyxDQUFDLEFBQ2pCLFNBQVMsQ0FBRSxNQUFNLENBQ2pCLFdBQVcsQ0FBRSxJQUFJLENBQ2pCLFlBQVksQ0FBRSxJQUFJLENBQ2xCLEtBQUssQ0FBRSxJQUFJLEFBQ2IsQ0FBQyxBQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxNQUFNLENBQUMsQUFBQyxDQUFDLEFBQzFDLFVBQVUsZUFBQyxDQUFDLEFBQ1YsV0FBVyxDQUFFLE1BQU0sQ0FDbkIsWUFBWSxDQUFFLE1BQU0sQ0FDcEIsS0FBSyxDQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQUFDMUIsQ0FBQyxBQUNILENBQUMsQUFPRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBUzNCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let div;
	let t;
	let current;
	const storycard = new components_StoryCard__WEBPACK_IMPORTED_MODULE_1__["default"]({ $$inline: true });

	const storycard2 = new components_StoryCard2__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: { style: "margin-top: 600px" },
			$$inline: true
		});

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(storycard.$$.fragment);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(storycard2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(storycard.$$.fragment, div_nodes);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(storycard2.$$.fragment, div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "contained py-24 flex flex-col items-center svelte-1vb90hr");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 5, 0, 118);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(storycard, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(storycard2, div, null);
			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(storycard.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(storycard2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(storycard.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(storycard2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(storycard);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(storycard2);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Scratch> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Scratch", $$slots, []);
	$$self.$capture_state = () => ({ StoryCard: components_StoryCard__WEBPACK_IMPORTED_MODULE_1__["default"], StoryCard2: components_StoryCard2__WEBPACK_IMPORTED_MODULE_2__["default"] });
	return [];
}

class Scratch extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1vb90hr-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Scratch",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Scratch
  = module && module.hot
    ? _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_3__["applyHmr"]({
        m: module,
        id: "\"src/routes/scratch.svelte\"",
        hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true},
        Component: Scratch,
        ProxyAdapter: _Users_samueldesota_d_fightforblacklives_fightforblacklives_com_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        compileData: {"vars":[{"name":"StoryCard","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"StoryCard2","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false}],"accessors":false},
        compileOptions: {"filename":"/Users/samueldesota/d/fightforblacklives/fightforblacklives.com/src/routes/scratch.svelte","format":"esm","dev":true,"hydratable":true},
      })
    : Scratch);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy4vc3JjL3JvdXRlcy9zY3JhdGNoLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ0UiLCJmaWxlIjoiMTA3ODdmMzgzMTM2ZWZmNDA5MGQvc2NyYXRjaC5zY3JhdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IFN0b3J5Q2FyZCBmcm9tIFwiY29tcG9uZW50cy9TdG9yeUNhcmRcIjtcbiAgaW1wb3J0IFN0b3J5Q2FyZDIgZnJvbSBcImNvbXBvbmVudHMvU3RvcnlDYXJkMlwiO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZWQgcHktMjQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgPFN0b3J5Q2FyZCAvPlxuXG4gIDxTdG9yeUNhcmQyIHN0eWxlPVwibWFyZ2luLXRvcDogNjAwcHhcIiAvPlxuPC9kaXY+XG5cbjxzdHlsZT4uY29udGFpbmVkIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDRweCkge1xuICAuY29udGFpbmVkIHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcbiAgfVxufVxuXG4uY29udGFpbmVkLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lZC1tZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvcm91dGVzL3NjcmF0Y2guc3ZlbHRlLm1hcCAqLzwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9