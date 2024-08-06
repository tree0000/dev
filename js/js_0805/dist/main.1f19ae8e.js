// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
// import _ from "lodash";
// import myData from "./myData.json";
// import axios from "axios";
// import cube from "./modules.js";
// import * as R from "./modules.js";

// console.log(myData);

// const user = {
//   name: "park",
//   age: 20,
//   email: ["dngus@gmail.com", "kim@gmail.com"],
// };
// console.log(user);

// const str = JSON.stringify(user);
// console.log(str);
// const obj = JSON.parse(str);
// console.log(obj);

// localStorage.setItem("user", JSON.stringify(user));
// console.log(localStorage.getItem("user"));
// console.log(JSON.parse(localStorage.getItem("user")));

// const str = localStorage.getItem("user");
// const obj = JSON.parse(str);
// Object.age = 22;
// console.log(obj);
// localStorage.setItem("user", JSON.stringify(obj));
// console.log(R.arras);
// console.log(R.getName());

// console.log(cube(2, 4));
// const user = {
//   name: "Park",
//   age: 22,
//   email: ["lhj2778@naver.com"],
// };

// const copyUser = user;
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// const copyUser = Object.assign({}, user);
// console.log(user === copyUser);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// const copyUser = {...user}
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push('heeju@naver.com')
// console.log(user.email === copyUser.email);

// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push('kim@gmail.com');
// console.log(user.email === copyUser.email);
// console.log(user);
// console.log(copyUser);

// const userA = [
//     {userID: '1', name: "mingss"},
//     {userID: '2', name: "kim"},
// ]

// const userB = [
//     {userID: '3', name: "heeju"},
//     {userID: '4', name: "Lee"},
// ]

// const userC = userA.concat(userB);
// console.log(userC);
// console.log(_.uniqBy(userC, 'userID'));

// const userD = _.unionBy(userA, userB, 'userId');
// console.log(userD);

// const users = [
//     {userId: '1', name: 'heeju'},
//     {userId: '2', name: 'kim'},
//     {userId: '3', name: 'lee'},
//     {userId: '4', name: 'park'}
// ]

// const foundUser = _.find(users, {name: 'lee'});
// console.log(foundUser);
// const foundUserIndex = _.findIndex(users, {name: 'lee'});
// console.log(foundUserIndex);
// _.remove(users, {name: 'mingss'});
// console.log(users);

// let array = [1, 2, 3, 4]
// let evens = _.remove(array, function(){
//     return n % 2 === 0
// })

// console.log(array);
// console.log(evens);

// let myFriend = [
//     {name: 'Kim', active: false},
//     {name: 'Lee', active: false},
// ]

// console.log(_.every(myFriend, {name: 'kim', active: false}));
// console.log(_.every(myFriend, ['avtive', false]));
// console.log(_.every(myFriend, 'active'));

// let mySister = [
//   { name: "kim", age: 22, city: "Seoul" },
//   { name: "lee", age: 22, city: "Daegu" },
//   { name: "park", age: 23, city: "Busan" },
//   { name: "you", age: 24, city: "Seoul" },
// ];

// console.log(_.filter(mySister), { age: 22, name: "kim" });
// console.log(_.filter(mySister, (sister) => sister.age === 22));

function getMovies(title) {
  axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c&s=".concat(title)).then(function (response) {
    console.log(response);
    var results = document.getElementById("results");
    results.innerHTML = "";
    if (response.data.Search && response.data.Search.length > 0) {
      var movies = response.data.Search.slice(0, 10);
      movies.forEach(function (movie) {
        var movieEl = document.createElement("div");
        var h1El = document.createElement("h1");
        var imgEl = document.createElement("img");
        var YearEl = document.createElement("p");
        var typeEl = document.createElement("p");
        h1El.textContent = movie.Title;
        imgEl.src = movie.Poster;
        YearEl.textContent = movie.Year;
        typeEl.textContent = movie.Type;
        movieEl.appendChild(h1El);
        movieEl.appendChild(imgEl);
        movieEl.appendChild(YearEl);
        movieEl.appendChild(typeEl);
        results.appendChild(movieEl);
      });
    } else {
      results.textContent = "영화를 찾을 수 없습니다.";
    }
  });
}
getMovies();
document.getElementById("searchButton").addEventListener("click", function () {
  var search = document.getElementById("searchInput").value;
  if (searchInput.trim() !== "") {
    getMovies(searchInput);
  } else {
    results.textContent = "영화 제목 입력";
  }
});

//자전거 지도 만들기

// const API_KEY = "";
// async function getData() {
//   const url = $`{API_KEY}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   const locations = data.rentBikeStatus.row.map((spot) => [
//     spot.stationName,
//     spot.stationLatitude,
//     spot.stationLongitude,
//     spot.parkingBikeTotCnt,
//   ]);
//   console.log(data);
//   console.log("locations", locations);
//   drawMap(locations);
// }

// function drawMap(locations) {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 13,
//     center: new google.maps.LatLng(locations[0][1], locations[0][2]),
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//   });
//   const infowindow = new google.maps.InfoWindow();
//   locations.forEach((location, i) => {
//     const markerElement = new google.maps.marker.AdvancedMarkerElement({
//       position: new google.maps.LatLng(location[1], location[2]),
//       map: map,
//       title: location[0],
//     });
//     markerElement.addListener("click", () => {
//       infowindow.setContent(
//         `<div><strong>${location[0]}</strong><br/>Bikes available: ${location[3]}</div>`
//       );
//       infowindow.open(map, markerElement);
//     });
//   });
// }

// window.onload = getData;
},{}],"../../../../.nvm/versions/node/v12.14.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60257" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../.nvm/versions/node/v12.14.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map