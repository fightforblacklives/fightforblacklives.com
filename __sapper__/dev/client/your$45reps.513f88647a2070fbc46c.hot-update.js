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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWEsd0JBQWdCLEdBQUcsVUFBQyxJQUFZO0lBQzNDLE9BQU8sT0FBTyxDQUNaLHFFQUFtRSxJQUFJLFdBQVEsQ0FDaEYsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBSyxFQUFFLEtBQUs7SUFDN0IsS0FBSyxHQUFHLEtBQUs7U0FDVixXQUFXLEVBQUU7U0FDYixJQUFJLEVBQUU7U0FDTixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUM7U0FDcEIsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQ3hDLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FDYixLQUFLO1NBQ0YsV0FBVyxFQUFFO1NBQ2IsSUFBSSxFQUFFO1NBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQXJCLENBQXFCLENBQUMsQ0FDeEMsQ0FBQztJQUVGLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssWUFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRS9ELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENB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QUMsSUFBSyxRQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLEVBQUU7NEJBQ2xELENBQUMsQ0FBQyxJQUFJO3FCQUNYLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBRUcsTUFBTSxHQUFHLGVBQUksWUFBWSxFQUFLLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdkQsYUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUEvQixDQUErQixDQUNoQyxDQUFDO2dCQUVGLFdBQU87d0JBQ0wsSUFBSTt3QkFDSixLQUFLO3dCQUNMLE1BQU07cUJBQ1AsRUFBQzs7O0tBQ0gsQ0FBQyIsImZpbGUiOiJ5b3VyJDQ1cmVwcy41MTNmODg2NDdhMjA3MGZiYzQ2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldFppcENvZGVCdW5kbGUgPSAoY29kZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiByZXF1ZXN0KFxuICAgIGBodHRwczovL2ZpZ2h0Zm9yYmxhY2tsaXZlcy5naXRodWIuaW8vZmZibC1kYXRhL3ppcC1jb2RlLWJ1bmRsZXMvJHtjb2RlfS5qc29ucGBcbiAgKTtcbn07XG5cbmNvbnN0IGZ1enp5TmFtZSA9IChuYW1lMSwgbmFtZTIpID0+IHtcbiAgbmFtZTEgPSBuYW1lMVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdChcIiBcIilcbiAgICAubWFwKCh4KSA9PiB4LnRyaW0oKSlcbiAgICAuZmlsdGVyKCh4KSA9PiB4ICE9IG51bGwgJiYgeCAhPT0gXCJcIik7XG4gIG5hbWUyID0gbmV3IFNldChcbiAgICBuYW1lMlxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgIC5tYXAoKHgpID0+IHgudHJpbSgpKVxuICAgICAgLmZpbHRlcigoeCkgPT4geCAhPSBudWxsICYmIHggIT09IFwiXCIpXG4gICk7XG5cbiAgY29uc3QgaXNNYXRjaCA9IG5hbWUxLmZpbHRlcigobjEpID0+IG5hbWUyLmhhcyhuMSkpLmxlbmd0aCA+IDE7XG5cbiAgcmV0dXJuIGlzTWF0Y2g7XG59O1xuXG5jb25zdCByZXF1ZXN0ID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdDogZmV0Y2ggfSA9IGF3YWl0IGdldEZldGNoKCk7XG5cbiAgcmV0dXJuIGZldGNoKHVybCwgeyBqc29ucENhbGxiYWNrRnVuY3Rpb246IFwiY2FsbGJhY2tcIiB9KS50aGVuKChyZXMpID0+XG4gICAgcmVzLmpzb24oKVxuICApO1xufTtcblxuY29uc3QgZ29vZ2xlQ2l2aWNBcGkgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBcIkFJemFTeURWYjZMZUkzSlpDQkw5ajIyOHVqWXoya2pxc2ZnYm5Ma1wiO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NpdmljaW5mby92Mi9yZXByZXNlbnRhdGl2ZXM/a2V5PSR7YXBpS2V5fSZhZGRyZXNzPSR7YWRkcmVzc31gLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJBY2NlcHQtTGFuZ3VhZ2VcIjogXCJlbi1VUyxlbjtxPTAuNVwiLFxuICAgICAgfSxcbiAgICAgIHJlZmVycmVyOiBcImh0dHBzOi8vbXlyZXBzLmRhdGFtYWRlLnVzL1wiLFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFCeUFkZHJlc3MgPSBhc3luYyAoemlwKSA9PiB7XG4gIGNvbnN0IGdvb2dsZUNpdmljRGF0YSA9IGF3YWl0IGdvb2dsZUNpdmljQXBpKHppcCArIFwiLCBVbml0ZWQgU3RhdGVzXCIpO1xuICBjb25zdCBhZGRsRGF0YSA9IGF3YWl0IHJlcXVlc3QoXG4gICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9maWdodGZvcmJsYWNrbGl2ZXMvZmZibC1kYXRhL21hc3Rlci96aXAtY29kZS1idW5kbGVzLyR7emlwfS5qc29ucGBcbiAgKTtcbiAgY29uc3QgYWRkbFBlb3BsZSA9IGFkZGxEYXRhLnBlb3BsZS5maWx0ZXIoXG4gICAgKHgpID0+ICFnb29nbGVDaXZpY0RhdGEub2ZmaWNpYWxzLnNvbWUoKHkpID0+IGZ1enp5TmFtZSh5Lm5hbWUsIHgubmFtZSkpXG4gICk7XG4gIGNvbnN0IGNpdHkgPSBnb29nbGVDaXZpY0RhdGEubm9ybWFsaXplZElucHV0LmNpdHk7XG4gIGNvbnN0IHN0YXRlID0gZ29vZ2xlQ2l2aWNEYXRhLm5vcm1hbGl6ZWRJbnB1dC5zdGF0ZTtcbiAgY29uc3QgZ29vZ2xlUGVvcGxlID0gZ29vZ2xlQ2l2aWNEYXRhLm9mZmljaWFscy5mbGF0TWFwKChwLCBpKSA9PiB7XG4gICAgY29uc3Qgb2ZmaWNlID0gZ29vZ2xlQ2l2aWNEYXRhLm9mZmljZXMuZmluZCgobykgPT5cbiAgICAgIG8ub2ZmaWNpYWxJbmRpY2VzLmluY2x1ZGVzKGkpXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIG9mZmljZS5uYW1lID09PSBcIlByZXNpZGVudCBvZiB0aGUgVW5pdGVkIFN0YXRlc1wiIHx8XG4gICAgICBvZmZpY2UubmFtZSA9PT0gXCJWaWNlIFByZXNpZGVudCBvZiB0aGUgVW5pdGVkIFN0YXRlc1wiXG4gICAgKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBwLm5hbWUsXG4gICAgICBpbWFnZTogcC5waG90b1VybFxuICAgICAgICA/IHAucGhvdG9VcmxcbiAgICAgICAgOiBhZGRsRGF0YS5wZW9wbGUuZmluZCgoYWRkbCkgPT4gZnV6enlOYW1lKGFkZGwubmFtZSwgcC5uYW1lKSk/LmltYWdlLFxuICAgICAgdGl0bGU6IG9mZmljZS5uYW1lLFxuICAgICAgYWRkcmVzczpcbiAgICAgICAgcC5hZGRyZXNzICYmIHAuYWRkcmVzcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBgJHtwLmFkZHJlc3NbMF0ubGluZTF9XG4ke3AuYWRkcmVzc1swXS5jaXR5fSwgJHtwLmFkZHJlc3NbMF0uc3RhdGV9LCAke3AuYWRkcmVzc1swXS56aXB9YFxuICAgICAgICAgIDogbnVsbCxcbiAgICAgIHBob25lOiBwLnBob25lcyAmJiBwLnBob25lcy5sZW5ndGggPiAwID8gcC5waG9uZXNbMF0gOiBudWxsLFxuICAgICAgdHdpdHRlcjpcbiAgICAgICAgcC5jaGFubmVscyAmJiBwLmNoYW5uZWxzLnNvbWUoKHgpID0+IHgudHlwZSA9PT0gXCJUd2l0dGVyXCIpXG4gICAgICAgICAgPyBwLmNoYW5uZWxzLmZpbmQoKHgpID0+IHgudHlwZSA9PT0gXCJUd2l0dGVyXCIpLmlkXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgcGFydHk6IHAucGFydHksXG4gICAgICBlbWFpbDogcC5lbWFpbHMgJiYgcC5lbWFpbHMubGVuZ3RoID4gMCA/IHAuZW1haWxzWzBdIDogbnVsbCxcblxuICAgICAgZmFjZWJvb2s6XG4gICAgICAgIHAuY2hhbm5lbHMgJiYgcC5jaGFubmVscy5zb21lKCh4KSA9PiB4LnR5cGUgPT09IFwiRmFjZWJvb2tcIilcbiAgICAgICAgICA/IHAuY2hhbm5lbHMuZmluZCgoeCkgPT4geC50eXBlID09PSBcIkZhY2Vib29rXCIpLmlkXG4gICAgICAgICAgOiBudWxsLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHBlb3BsZSA9IFsuLi5nb29nbGVQZW9wbGUsIC4uLmFkZGxQZW9wbGVdLm1hcCgoeCwgaSkgPT5cbiAgICBPYmplY3QuYXNzaWduKHt9LCB4LCB7IGlkOiBpIH0pXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaXR5LFxuICAgIHN0YXRlLFxuICAgIHBlb3BsZSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9