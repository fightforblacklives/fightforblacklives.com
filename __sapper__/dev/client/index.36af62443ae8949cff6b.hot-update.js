webpackHotUpdate("index",{

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.getZipCodeBundle = function (code) {
    return request("https://fightforblacklives.github.io/ffbl-data/zip-code-bundles/" + code + ".jsonp");
};
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
    return __generator(this, function (_a) {
        return [2, fetch(url, { cache: "no-cache" })
                .then(function (res) { return res.text(); })
                .then(function (res) { return new Function("callback", "return " + res)(id); })];
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWEsd0JBQWdCLEdBQUcsVUFBQyxJQUFZO0lBQzNDLE9BQU8sT0FBTyxDQUNaLHFFQUFtRSxJQUFJLFdBQVEsQ0FDaEYsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQUs7SUFDN0IsS0FBSyxHQUFHLEtBQUs7U0FDVixXQUFXLEVBQUU7U0FDYixJQUFJLEVBQUU7U0FDTixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUM7U0FDcEIsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQ3hDLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FDYixLQUFLO1NBQ0YsV0FBVyxFQUFFO1NBQ2IsSUFBSSxFQUFFO1NBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQXJCLENBQXFCLENBQUMsQ0FDeEMsQ0FBQztJQUVGLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssWUFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRS9ELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENB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Q0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFyQixDQUFxQixDQUFDLENBQUMsRUFBRTs0QkFDbEQsQ0FBQyxDQUFDLElBQUk7cUJBQ1gsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQztnQkFFRyxNQUFNLEdBQUcsZUFBSSxZQUFZLEVBQUssVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUN2RCxhQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQS9CLENBQStCLENBQ2hDLENBQUM7Z0JBRUYsV0FBTzt3QkFDTCxJQUFJO3dCQUNKLEtBQUs7d0JBQ0wsTUFBTTtxQkFDUCxFQUFDOzs7S0FDSCxDQUFDIiwiZmlsZSI6ImluZGV4LjM2YWY2MjQ0M2FlODk0OWNmZjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0WmlwQ29kZUJ1bmRsZSA9IChjb2RlOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHJlcXVlc3QoXG4gICAgYGh0dHBzOi8vZmlnaHRmb3JibGFja2xpdmVzLmdpdGh1Yi5pby9mZmJsLWRhdGEvemlwLWNvZGUtYnVuZGxlcy8ke2NvZGV9Lmpzb25wYFxuICApO1xufTtcblxuY29uc3QgZnV6enlOYW1lID0gKG5hbWUxLCBuYW1lMikgPT4ge1xuICBuYW1lMSA9IG5hbWUxXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KFwiIFwiKVxuICAgIC5tYXAoKHgpID0+IHgudHJpbSgpKVxuICAgIC5maWx0ZXIoKHgpID0+IHggIT0gbnVsbCAmJiB4ICE9PSBcIlwiKTtcbiAgbmFtZTIgPSBuZXcgU2V0KFxuICAgIG5hbWUyXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnRyaW0oKVxuICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgLm1hcCgoeCkgPT4geC50cmltKCkpXG4gICAgICAuZmlsdGVyKCh4KSA9PiB4ICE9IG51bGwgJiYgeCAhPT0gXCJcIilcbiAgKTtcblxuICBjb25zdCBpc01hdGNoID0gbmFtZTEuZmlsdGVyKChuMSkgPT4gbmFtZTIuaGFzKG4xKSkubGVuZ3RoID4gMTtcblxuICByZXR1cm4gaXNNYXRjaDtcbn07XG5cbmNvbnN0IHJlcXVlc3QgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwgeyBjYWNoZTogXCJuby1jYWNoZVwiIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAudGhlbigocmVzKSA9PiBuZXcgRnVuY3Rpb24oXCJjYWxsYmFja1wiLCBgcmV0dXJuICR7cmVzfWApKGlkKSk7XG59O1xuXG5jb25zdCBnb29nbGVDaXZpY0FwaSA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IFwiQUl6YVN5RFZiNkxlSTNKWkNCTDlqMjI4dWpZejJranFzZmdibkxrXCI7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2l2aWNpbmZvL3YyL3JlcHJlc2VudGF0aXZlcz9rZXk9JHthcGlLZXl9JmFkZHJlc3M9JHthZGRyZXNzfWAsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkFjY2VwdC1MYW5ndWFnZVwiOiBcImVuLVVTLGVuO3E9MC41XCIsXG4gICAgICB9LFxuICAgICAgcmVmZXJyZXI6IFwiaHR0cHM6Ly9teXJlcHMuZGF0YW1hZGUudXMvXCIsXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICB9XG4gICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YUJ5QWRkcmVzcyA9IGFzeW5jICh6aXApID0+IHtcbiAgY29uc3QgZ29vZ2xlQ2l2aWNEYXRhID0gYXdhaXQgZ29vZ2xlQ2l2aWNBcGkoemlwICsgXCIsIFVuaXRlZCBTdGF0ZXNcIik7XG4gIGNvbnN0IGFkZGxEYXRhID0gYXdhaXQgcmVxdWVzdChcbiAgICBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZpZ2h0Zm9yYmxhY2tsaXZlcy9mZmJsLWRhdGEvbWFzdGVyL3ppcC1jb2RlLWJ1bmRsZXMvJHt6aXB9Lmpzb25wYFxuICApO1xuICBjb25zdCBhZGRsUGVvcGxlID0gYWRkbERhdGEucGVvcGxlLmZpbHRlcihcbiAgICAoeCkgPT4gIWdvb2dsZUNpdmljRGF0YS5vZmZpY2lhbHMuc29tZSgoeSkgPT4gZnV6enlOYW1lKHkubmFtZSwgeC5uYW1lKSlcbiAgKTtcbiAgY29uc3QgY2l0eSA9IGdvb2dsZUNpdmljRGF0YS5ub3JtYWxpemVkSW5wdXQuY2l0eTtcbiAgY29uc3Qgc3RhdGUgPSBnb29nbGVDaXZpY0RhdGEubm9ybWFsaXplZElucHV0LnN0YXRlO1xuICBjb25zdCBnb29nbGVQZW9wbGUgPSBnb29nbGVDaXZpY0RhdGEub2ZmaWNpYWxzLmZsYXRNYXAoKHAsIGkpID0+IHtcbiAgICBjb25zdCBvZmZpY2UgPSBnb29nbGVDaXZpY0RhdGEub2ZmaWNlcy5maW5kKChvKSA9PlxuICAgICAgby5vZmZpY2lhbEluZGljZXMuaW5jbHVkZXMoaSlcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgb2ZmaWNlLm5hbWUgPT09IFwiUHJlc2lkZW50IG9mIHRoZSBVbml0ZWQgU3RhdGVzXCIgfHxcbiAgICAgIG9mZmljZS5uYW1lID09PSBcIlZpY2UgUHJlc2lkZW50IG9mIHRoZSBVbml0ZWQgU3RhdGVzXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHAubmFtZSxcbiAgICAgIGltYWdlOiBwLnBob3RvVXJsXG4gICAgICAgID8gcC5waG90b1VybFxuICAgICAgICA6IGFkZGxEYXRhLnBlb3BsZS5maW5kKChhZGRsKSA9PiBmdXp6eU5hbWUoYWRkbC5uYW1lLCBwLm5hbWUpKT8uaW1hZ2UsXG4gICAgICB0aXRsZTogb2ZmaWNlLm5hbWUsXG4gICAgICBhZGRyZXNzOlxuICAgICAgICBwLmFkZHJlc3MgJiYgcC5hZGRyZXNzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGAke3AuYWRkcmVzc1swXS5saW5lMX1cbiR7cC5hZGRyZXNzWzBdLmNpdHl9LCAke3AuYWRkcmVzc1swXS5zdGF0ZX0sICR7cC5hZGRyZXNzWzBdLnppcH1gXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgcGhvbmU6IHAucGhvbmVzICYmIHAucGhvbmVzLmxlbmd0aCA+IDAgPyBwLnBob25lc1swXSA6IG51bGwsXG4gICAgICB0d2l0dGVyOlxuICAgICAgICBwLmNoYW5uZWxzICYmIHAuY2hhbm5lbHMuc29tZSgoeCkgPT4geC50eXBlID09PSBcIlR3aXR0ZXJcIilcbiAgICAgICAgICA/IHAuY2hhbm5lbHMuZmluZCgoeCkgPT4geC50eXBlID09PSBcIlR3aXR0ZXJcIikuaWRcbiAgICAgICAgICA6IG51bGwsXG4gICAgICBwYXJ0eTogcC5wYXJ0eSxcbiAgICAgIGVtYWlsOiBwLmVtYWlscyAmJiBwLmVtYWlscy5sZW5ndGggPiAwID8gcC5lbWFpbHNbMF0gOiBudWxsLFxuXG4gICAgICBmYWNlYm9vazpcbiAgICAgICAgcC5jaGFubmVscyAmJiBwLmNoYW5uZWxzLnNvbWUoKHgpID0+IHgudHlwZSA9PT0gXCJGYWNlYm9va1wiKVxuICAgICAgICAgID8gcC5jaGFubmVscy5maW5kKCh4KSA9PiB4LnR5cGUgPT09IFwiRmFjZWJvb2tcIikuaWRcbiAgICAgICAgICA6IG51bGwsXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgcGVvcGxlID0gWy4uLmdvb2dsZVBlb3BsZSwgLi4uYWRkbFBlb3BsZV0ubWFwKCh4LCBpKSA9PlxuICAgIE9iamVjdC5hc3NpZ24oe30sIHgsIHsgaWQ6IGkgfSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGNpdHksXG4gICAgc3RhdGUsXG4gICAgcGVvcGxlLFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=