webpackHotUpdate("your$45reps",{

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
var id = function (x) { return ix; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWEsd0JBQWdCLEdBQUcsVUFBQyxJQUFZO0lBQzNDLE9BQU8sT0FBTyxDQUNaLHFFQUFtRSxJQUFJLFdBQVEsQ0FDaEYsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQUs7SUFDN0IsS0FBSyxHQUFHLEtBQUs7U0FDVixXQUFXLEVBQUU7U0FDYixJQUFJLEVBQUU7U0FDTixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUM7U0FDcEIsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQ3hDLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FDYixLQUFLO1NBQ0YsV0FBVyxFQUFFO1NBQ2IsSUFBSSxFQUFFO1NBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQXJCLENBQXFCLENBQUMsQ0FDeEMsQ0FBQztJQUVGLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssWUFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRS9ELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENB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QyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFyQixDQUFxQixDQUFDOzRCQUN6RCxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQXJCLENBQXFCLENBQUMsQ0FBQyxFQUFFOzRCQUNsRCxDQUFDLENBQUMsSUFBSTtxQkFDWCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUVHLE1BQU0sR0FBRyxlQUFJLFlBQVksRUFBSyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZELGFBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFBL0IsQ0FBK0IsQ0FDaEMsQ0FBQztnQkFFRixXQUFPO3dCQUNMLElBQUk7d0JBQ0osS0FBSzt3QkFDTCxNQUFNO3FCQUNQLEVBQUM7OztLQUNILENBQUMiLCJmaWxlIjoieW91ciQ0NXJlcHMuMzgyMDlmNzE2YjgxYThlMTk3YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRaaXBDb2RlQnVuZGxlID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gcmVxdWVzdChcbiAgICBgaHR0cHM6Ly9maWdodGZvcmJsYWNrbGl2ZXMuZ2l0aHViLmlvL2ZmYmwtZGF0YS96aXAtY29kZS1idW5kbGVzLyR7Y29kZX0uanNvbnBgXG4gICk7XG59O1xuXG5jb25zdCBmdXp6eU5hbWUgPSAobmFtZTEsIG5hbWUyKSA9PiB7XG4gIG5hbWUxID0gbmFtZTFcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLm1hcCgoeCkgPT4geC50cmltKCkpXG4gICAgLmZpbHRlcigoeCkgPT4geCAhPSBudWxsICYmIHggIT09IFwiXCIpO1xuICBuYW1lMiA9IG5ldyBTZXQoXG4gICAgbmFtZTJcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAubWFwKCh4KSA9PiB4LnRyaW0oKSlcbiAgICAgIC5maWx0ZXIoKHgpID0+IHggIT0gbnVsbCAmJiB4ICE9PSBcIlwiKVxuICApO1xuXG4gIGNvbnN0IGlzTWF0Y2ggPSBuYW1lMS5maWx0ZXIoKG4xKSA9PiBuYW1lMi5oYXMobjEpKS5sZW5ndGggPiAxO1xuXG4gIHJldHVybiBpc01hdGNoO1xufTtcblxuY29uc3QgaWQgPSAoeCkgPT4gaXg7XG5cbmNvbnN0IHJlcXVlc3QgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwgeyBjYWNoZTogXCJuby1jYWNoZVwiIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAudGhlbigocmVzKSA9PiBuZXcgRnVuY3Rpb24oXCJjYWxsYmFja1wiLCBgcmV0dXJuICR7cmVzfWApKGlkKSk7XG59O1xuXG5jb25zdCBnb29nbGVDaXZpY0FwaSA9IGFzeW5jIChhZGRyZXNzKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IFwiQUl6YVN5RFZiNkxlSTNKWkNCTDlqMjI4dWpZejJranFzZmdibkxrXCI7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2l2aWNpbmZvL3YyL3JlcHJlc2VudGF0aXZlcz9rZXk9JHthcGlLZXl9JmFkZHJlc3M9JHthZGRyZXNzfWAsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkFjY2VwdC1MYW5ndWFnZVwiOiBcImVuLVVTLGVuO3E9MC41XCIsXG4gICAgICB9LFxuICAgICAgcmVmZXJyZXI6IFwiaHR0cHM6Ly9teXJlcHMuZGF0YW1hZGUudXMvXCIsXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICB9XG4gICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YUJ5QWRkcmVzcyA9IGFzeW5jICh6aXApID0+IHtcbiAgY29uc3QgZ29vZ2xlQ2l2aWNEYXRhID0gYXdhaXQgZ29vZ2xlQ2l2aWNBcGkoemlwICsgXCIsIFVuaXRlZCBTdGF0ZXNcIik7XG4gIGNvbnN0IGFkZGxEYXRhID0gYXdhaXQgcmVxdWVzdChcbiAgICBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZpZ2h0Zm9yYmxhY2tsaXZlcy9mZmJsLWRhdGEvbWFzdGVyL3ppcC1jb2RlLWJ1bmRsZXMvJHt6aXB9Lmpzb25wYFxuICApO1xuICBjb25zdCBhZGRsUGVvcGxlID0gYWRkbERhdGEucGVvcGxlLmZpbHRlcihcbiAgICAoeCkgPT4gIWdvb2dsZUNpdmljRGF0YS5vZmZpY2lhbHMuc29tZSgoeSkgPT4gZnV6enlOYW1lKHkubmFtZSwgeC5uYW1lKSlcbiAgKTtcbiAgY29uc3QgY2l0eSA9IGdvb2dsZUNpdmljRGF0YS5ub3JtYWxpemVkSW5wdXQuY2l0eTtcbiAgY29uc3Qgc3RhdGUgPSBnb29nbGVDaXZpY0RhdGEubm9ybWFsaXplZElucHV0LnN0YXRlO1xuICBjb25zdCBnb29nbGVQZW9wbGUgPSBnb29nbGVDaXZpY0RhdGEub2ZmaWNpYWxzLmZsYXRNYXAoKHAsIGkpID0+IHtcbiAgICBjb25zdCBvZmZpY2UgPSBnb29nbGVDaXZpY0RhdGEub2ZmaWNlcy5maW5kKChvKSA9PlxuICAgICAgby5vZmZpY2lhbEluZGljZXMuaW5jbHVkZXMoaSlcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgb2ZmaWNlLm5hbWUgPT09IFwiUHJlc2lkZW50IG9mIHRoZSBVbml0ZWQgU3RhdGVzXCIgfHxcbiAgICAgIG9mZmljZS5uYW1lID09PSBcIlZpY2UgUHJlc2lkZW50IG9mIHRoZSBVbml0ZWQgU3RhdGVzXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHAubmFtZSxcbiAgICAgIGltYWdlOiBwLnBob3RvVXJsXG4gICAgICAgID8gcC5waG90b1VybFxuICAgICAgICA6IGFkZGxEYXRhLnBlb3BsZS5maW5kKChhZGRsKSA9PiBmdXp6eU5hbWUoYWRkbC5uYW1lLCBwLm5hbWUpKT8uaW1hZ2UsXG4gICAgICB0aXRsZTogb2ZmaWNlLm5hbWUsXG4gICAgICBhZGRyZXNzOlxuICAgICAgICBwLmFkZHJlc3MgJiYgcC5hZGRyZXNzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGAke3AuYWRkcmVzc1swXS5saW5lMX1cbiR7cC5hZGRyZXNzWzBdLmNpdHl9LCAke3AuYWRkcmVzc1swXS5zdGF0ZX0sICR7cC5hZGRyZXNzWzBdLnppcH1gXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgcGhvbmU6IHAucGhvbmVzICYmIHAucGhvbmVzLmxlbmd0aCA+IDAgPyBwLnBob25lc1swXSA6IG51bGwsXG4gICAgICB0d2l0dGVyOlxuICAgICAgICBwLmNoYW5uZWxzICYmIHAuY2hhbm5lbHMuc29tZSgoeCkgPT4geC50eXBlID09PSBcIlR3aXR0ZXJcIilcbiAgICAgICAgICA/IHAuY2hhbm5lbHMuZmluZCgoeCkgPT4geC50eXBlID09PSBcIlR3aXR0ZXJcIikuaWRcbiAgICAgICAgICA6IG51bGwsXG4gICAgICBwYXJ0eTogcC5wYXJ0eSxcbiAgICAgIGVtYWlsOiBwLmVtYWlscyAmJiBwLmVtYWlscy5sZW5ndGggPiAwID8gcC5lbWFpbHNbMF0gOiBudWxsLFxuXG4gICAgICBmYWNlYm9vazpcbiAgICAgICAgcC5jaGFubmVscyAmJiBwLmNoYW5uZWxzLnNvbWUoKHgpID0+IHgudHlwZSA9PT0gXCJGYWNlYm9va1wiKVxuICAgICAgICAgID8gcC5jaGFubmVscy5maW5kKCh4KSA9PiB4LnR5cGUgPT09IFwiRmFjZWJvb2tcIikuaWRcbiAgICAgICAgICA6IG51bGwsXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgcGVvcGxlID0gWy4uLmdvb2dsZVBlb3BsZSwgLi4uYWRkbFBlb3BsZV0ubWFwKCh4LCBpKSA9PlxuICAgIE9iamVjdC5hc3NpZ24oe30sIHgsIHsgaWQ6IGkgfSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGNpdHksXG4gICAgc3RhdGUsXG4gICAgcGVvcGxlLFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=