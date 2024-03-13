// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j2YDk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var _footballTeamJs = require("./Football_Team.js");
var _footballPlayerJs = require("./Football_Player.js");
var _gsapanimationJs = require("./modules/gsapanimation.js");
// Create players for Arsenal
const ramsdale = new (0, _footballPlayerJs.Goalkeeper)("Ramsdale", "Goalkeeper", "images/ramsdale.png", 9, 30, 2);
const saliba = new (0, _footballPlayerJs.Defender)("Saliba", "Centre Back", "images/saliba.png", 28, 26, 50);
const gabriel = new (0, _footballPlayerJs.Defender)("Gabriel", "Centre Back", "images/gabriel.png", 26, 31, 57);
const odegaard = new (0, _footballPlayerJs.Midfielder)("Odegaard", "Attacking Midfielder", "images/odegaard.png", 25, 1364, 6);
const rice = new (0, _footballPlayerJs.Midfielder)("Rice", "Defensive Midfielder", "images/rice.png", 28, 1763, 6);
const saka = new (0, _footballPlayerJs.Forward)("Saka", "Right Winger", "images/saka.png", 27, 13, 7);
const martinelli = new (0, _footballPlayerJs.Forward)("Martinelli", "Left Winger", "images/martinelli.png", 25, 6, 4);
const jesus = new (0, _footballPlayerJs.Forward)("Gabriel Jesus", "Forward", "images/jesus.png", 19, 4, 3);
// Create players for Aston Villa
const dibu = new (0, _footballPlayerJs.Goalkeeper)("Martinez", "Goalkeeper", "images/dibu.png", 27, 6, 74);
const cash = new (0, _footballPlayerJs.Defender)("Cash", "Full Back", "images/cash.png", 25, 41, 14);
const digne = new (0, _footballPlayerJs.Defender)("Digne", "Full Back", "images/digne.png", 28, 1240, 3);
const douglas = new (0, _footballPlayerJs.Midfielder)("Douglas", "Central Midfielder", "images/douglas.png", 17, 846, 1);
const mcginn = new (0, _footballPlayerJs.Midfielder)("McGinn", "Central Midfielder", "images/mcginn.png", 21, 920, 4);
const tielemans = new (0, _footballPlayerJs.Midfielder)("Tielemans", "Central Midfielder", "images/tielemans.png", 23, 113, 2);
const duran = new (0, _footballPlayerJs.Forward)("Duran", "Striker", "images/duran.png", 20, 5, 7);
const watkins = new (0, _footballPlayerJs.Forward)("Watkins", "Striker", "images/watkins.png", 22, 7, 9);
// Create players for Manchester City
const ederson = new (0, _footballPlayerJs.Goalkeeper)("Ederson", "Goalkeeper", "images/ederson.png", 24, 10, 120);
const dias = new (0, _footballPlayerJs.Defender)("Dias", "Centre Back", "images/dias.png", 20, 60, 40);
const ake = new (0, _footballPlayerJs.Defender)("Ake", "Centre Back", "images/ake.png", 23, 33, 80);
const foden = new (0, _footballPlayerJs.Midfielder)("Foden", "Right Winger", "images/foden.png", 22, 1143, 6);
const deBruyne = new (0, _footballPlayerJs.Midfielder)("De Bruyne", "Attacking Midfielder", "images/debruyne.png", 22, 1540, 8);
const silva = new (0, _footballPlayerJs.Midfielder)("Silva", "Attacking Midfielder", "images/silva.png", 21, 1142, 4);
const haaland = new (0, _footballPlayerJs.Forward)("Haaland", "Striker", "images/haaland.png", 22, 18, 5);
const alvarez = new (0, _footballPlayerJs.Forward)("Alvarez", "Striker", "images/alvarez.png", 28, 8, 9);
// Create players for Liverpool
const alisson = new (0, _footballPlayerJs.Goalkeeper)("Alisson", "Goalkeeper", "images/alisson.png", 24, 9, 68);
const joeGomez = new (0, _footballPlayerJs.Defender)("Gomez", "Centre Back", "images/joe.png", 39, 66, 62);
const vanDijk = new (0, _footballPlayerJs.Defender)("Van Dijk", "Centre Back", "images/vandijk.png", 34, 39, 168);
const trent = new (0, _footballPlayerJs.Defender)("Trent", "Right Back", "images/trent.png", 29, 37, 17);
const szoboszlai = new (0, _footballPlayerJs.Midfielder)("szoboszlai", "Central Midfielder", "images/szoboszlai.png", 31, 1361, 6);
const macallister = new (0, _footballPlayerJs.Midfielder)("Mac Allister", "Central Midfielder", "images/alexis.png", 33, 1716, 4);
const diaz = new (0, _footballPlayerJs.Forward)("Luis Diaz", "Left Winger", "images/luisdiaz.png", 38, 11, 3);
const salah = new (0, _footballPlayerJs.Forward)("Mohamed Salah", "Right Winger", "images/salah.png", 30, 19, 9);
// Create players for Manchester United
const onana = new (0, _footballPlayerJs.Goalkeeper)("Onana", "Goalkeeper", "images/onana.png", 38, 12, 135);
const victor = new (0, _footballPlayerJs.Defender)("Victor Lindel\xf6f", "Centre Back", "images/lindelof.png", 25, 10, 27);
const maguire = new (0, _footballPlayerJs.Defender)("Maguire", "Centre Back", "images/maguire.png", 23, 15, 72);
const casemiro = new (0, _footballPlayerJs.Midfielder)("Casemiro", "Defensive Midfielder", "images/casemiro.png", 21, 431, 5);
const mount = new (0, _footballPlayerJs.Midfielder)("Mason Mount", " Attacking Midfielder", "images/mount.png", 12, 158, 2);
const bruno = new (0, _footballPlayerJs.Midfielder)("Bruno Fernandes", " Attacking Midfielder", "images/bruno.png", 37, 1058, 8);
const garnacho = new (0, _footballPlayerJs.Forward)("Garnacho", "Left Winger", "images/garnacho.png", 37, 7, 5);
const rashford = new (0, _footballPlayerJs.Forward)("Rashford", "Forward", "images/rashford.png", 34, 7, 10);
// Create players for Tottenham
const vicario = new (0, _footballPlayerJs.Goalkeeper)("Vicario", "Goalkeeper", "images/vicario.png", 27, 6, 78);
const romero = new (0, _footballPlayerJs.Defender)("Cuti Romero", "Centre Back", "images/romero.png", 22, 42, 47);
const porro = new (0, _footballPlayerJs.Defender)("Porro", " Right Back", "images/porro.png", 24, 69, 13);
const bissouma = new (0, _footballPlayerJs.Midfielder)("Bissouma", " Defensive Midfielder", "images/bissouma.png", 19, 1217, 0);
const maddison = new (0, _footballPlayerJs.Midfielder)("James Maddison", " Attacking Midfielder", "images/maddison.png", 17, 772, 4);
const kulusevski = new (0, _footballPlayerJs.Midfielder)("Kulusevski", " Right Winger", "images/kulusevski.png", 25, 827, 6);
const son = new (0, _footballPlayerJs.Forward)("Son", " Forward", "images/son.png", 24, 14, 8);
const richarlison = new (0, _footballPlayerJs.Forward)("Richarlison", "Striker", "images/richarlison.png", 22, 10, 3);
// Create players for West Ham
const fabianski = new (0, _footballPlayerJs.Goalkeeper)("Fabianski", "Goalkeeper", "images/fabianski.png", 23, 6, 41);
const zouma = new (0, _footballPlayerJs.Defender)("Zouma", "Centre Back", "images/zouma.png", 25, 30, 38);
const cresswell = new (0, _footballPlayerJs.Defender)("Cresswell", "Left Back", "images/cresswell.png", 23, 50, 44);
const wardprowse = new (0, _footballPlayerJs.Midfielder)("Ward-Prowse", " Central Midfielder", "images/wardprowse.png", 22, 760, 7);
const paqueta = new (0, _footballPlayerJs.Midfielder)("Paqueta", " Attacking Midfielder", "images/paqueta.png", 19, 562, 2);
const soucek = new (0, _footballPlayerJs.Midfielder)("Soucek", " Defensive Midfielder", "images/soucek.png", 21, 451, 3);
const bowen = new (0, _footballPlayerJs.Forward)("Bowen", "Right Winger", "images/bowen.png", 23, 5, 7);
const antonio = new (0, _footballPlayerJs.Forward)("Antonio", "Forward", "images/antonio.png", 26, 8, 4);
// Create players for Wolverhampton
const sa = new (0, _footballPlayerJs.Goalkeeper)("Jose Sa", "Goalkeeper", "images/sa.png", 28, 6, 77);
const dawson = new (0, _footballPlayerJs.Defender)("Dawson", "Centre Back", "images/dawson.png", 15, 26, 43);
const doherty = new (0, _footballPlayerJs.Defender)("Doherty", "Full Back", "images/doherty.png", 12, 23, 25);
const lemina = new (0, _footballPlayerJs.Midfielder)("Lemina", "Defensive Midfielder", "images/lemina.png", 24, 881, 5);
const traore = new (0, _footballPlayerJs.Midfielder)("Traore", "Defensive Midfielder", "images/traore.png", 21, 1291, 5);
const neto = new (0, _footballPlayerJs.Forward)("Neto", "Right Winger", "images/neto.png", 21, 4, 10);
const cunha = new (0, _footballPlayerJs.Forward)("Cunha", "Forward", "images/cunha.png", 17, 6, 4);
const hwang = new (0, _footballPlayerJs.Forward)("Hee Chan", "Forward", "images/hwang.png", 25, 9, 5);
// Create players for Newcastle
const dubravka = new (0, _footballPlayerJs.Goalkeeper)("Dubravka", "Goalkeeper", "images/dubravka.png", 27, 7, 34);
const botman = new (0, _footballPlayerJs.Defender)("Botman", "Centre Back", "images/botman.png", 21, 45, 23);
const trippier = new (0, _footballPlayerJs.Defender)("Trippier", "Right Back", "images/trippier.png", 24, 35, 45);
const joelinton = new (0, _footballPlayerJs.Midfielder)("Joelinton", "Central Midfielder", "images/joelinton.png", 21, 1342, 6);
const guimaraes = new (0, _footballPlayerJs.Midfielder)("Guimaraes", "Central Midfielder", "images/guimaraes.png", 19, 698, 5);
const almiron = new (0, _footballPlayerJs.Midfielder)("Almiron", "Attacking Midfielder", "images/almiron.png", 15, 439, 2);
const barnes = new (0, _footballPlayerJs.Forward)("Barnes", "Left Winger", "images/barnes.png", 21, 4, 14);
const isak = new (0, _footballPlayerJs.Forward)("Isak", "Forward", "images/isak.png", 23, 11, 3);
// Create players for Brighton
const steele = new (0, _footballPlayerJs.Goalkeeper)("Steele", "Goalkeeper", "images/steele.png", 22, 4, 120);
const dunk = new (0, _footballPlayerJs.Defender)("Dunk", "Centre Back", "images/dunk.png", 24, 34, 56);
const estupinan = new (0, _footballPlayerJs.Defender)("Estupi\xf1an", "Left Back", "images/estupinan.png", 22, 30, 66);
const milner = new (0, _footballPlayerJs.Midfielder)("Milner", "Central Midfielder", "images/milner.png", 19, 490, 1);
const grob = new (0, _footballPlayerJs.Midfielder)("Gro\xdf", "Defensive Midfielder", "images/gross.png", 25, 672, 4);
const mitoma = new (0, _footballPlayerJs.Forward)("Mitoma", "Left Winger", "images/mitoma.png", 18, 5, 2);
const march = new (0, _footballPlayerJs.Forward)("March", "Right Winger", "images/march.png", 21, 3, 4);
const welbeck = new (0, _footballPlayerJs.Forward)("Welbeck", "Forward", "images/welbeck.png", 23, 6, 9);
// Create players for Chelsea
const sanchez = new (0, _footballPlayerJs.Goalkeeper)("Sanchez", "Goalkeeper", "images/sanchez.png", 28, 8, 94);
const reece = new (0, _footballPlayerJs.Defender)("Reece", "Centre Back", "images/reece.png", 21, 34, 56);
const chilwell = new (0, _footballPlayerJs.Defender)("Chilwell", "Right Back", "images/chilwell.png", 18, 23, 47);
const enzo = new (0, _footballPlayerJs.Midfielder)("Enzo", "Central Midfielder", "images/enzo.png", 20, 7, 4);
const gallagher = new (0, _footballPlayerJs.Midfielder)("Gallagher", "Central Midfielder", "images/gallagher.png", 20, 7, 4);
const caicedo = new (0, _footballPlayerJs.Midfielder)("Caicedo", "Defensive Midfielder", "images/caicedo.png", 20, 7, 4);
const sterling = new (0, _footballPlayerJs.Forward)("Sterling", "Left Winger", "images/sterling.png", 26, 12, 4);
const jackson = new (0, _footballPlayerJs.Forward)("Jackson", "Striker", "images/jackson.png", 20, 6, 9);
// Create players for Fulham
const leno = new (0, _footballPlayerJs.Goalkeeper)("Leno", "Goalkeeper", "images/leno.png", 22, 7, 80);
const adarabioyo = new (0, _footballPlayerJs.Defender)("Adarabioyo", "Centre Back", "images/adarabioyo.png", 19, 27, 43);
const castagne = new (0, _footballPlayerJs.Defender)("Castagne", "Full Back", "images/castagne.png", 24, 35, 47);
const lukic = new (0, _footballPlayerJs.Midfielder)("Lukic", "Defensive Midfielder", "images/lukic.png", 21, 732, 2);
const pereira = new (0, _footballPlayerJs.Midfielder)("Pereira", "Attacking Midfielder", "images/pereira.png", 25, 750, 1);
const iwobi = new (0, _footballPlayerJs.Midfielder)("Iwobi", "Attacking Midfielder", "images/iwobi.png", 19, 689, 2);
const wilson = new (0, _footballPlayerJs.Forward)("Wilson", "Right Winger", "images/wilson.png", 17, 7, 4);
const muniz = new (0, _footballPlayerJs.Forward)("Muniz", "Forward", "images/muniz.png", 15, 3, 5);
// Create players for Bournemouth
const netob = new (0, _footballPlayerJs.Goalkeeper)("Neto", "Goalkeeper", "images/netob.png", 26, 8, 75);
const mepham = new (0, _footballPlayerJs.Defender)("Mepham", "Centre Back", "images/mepham.png", 14, 21, 27);
const zabarnyi = new (0, _footballPlayerJs.Defender)("Zabarnyi", "Centre Back", "images/zabarnyi.png", 26, 35, 49);
const smith = new (0, _footballPlayerJs.Defender)("Smith", "Full Back", "images/smith.png", 22, 71, 45);
const christie = new (0, _footballPlayerJs.Midfielder)("Christie", "Attacking Midfielder", "images/christie.png", 25, 689, 8);
const hamed = new (0, _footballPlayerJs.Midfielder)("Traore", "Attacking Midfielder", "images/hamed.png", 21, 876, 6);
const kluivert = new (0, _footballPlayerJs.Forward)("Kluivert", "Right Winger", "images/kluivert.png", 23, 5, 9);
const solanke = new (0, _footballPlayerJs.Forward)("Solanke", "Striker", "images/solanke.png", 27, 14, 3);
// Create players for Crystal Palace
const johnstone = new (0, _footballPlayerJs.Goalkeeper)("Johnstone", "Goalkeeper", "images/johnstone.png", 25, 6, 64);
const ward = new (0, _footballPlayerJs.Defender)("Ward", "Full Back", "images/ward.png", 24, 65, 20);
const mitchell = new (0, _footballPlayerJs.Defender)("Left Back", "Left Back", "images/mitchell.png", 13, 19, 22);
const doucoure = new (0, _footballPlayerJs.Midfielder)("Doucoure", "Defensive Midfielder", "images/doucoure.png", 21, 792, 2);
const lerma = new (0, _footballPlayerJs.Midfielder)("Lerma", "Central Midfielder", "images/lerma.png", 25, 925, 5);
const olise = new (0, _footballPlayerJs.Midfielder)("Olise", "Attacking Midfielder", "images/olise.png", 18, 602, 2);
const ayew = new (0, _footballPlayerJs.Forward)("Ayew", "Forward", "images/ayew.png", 24, 7, 9);
const edouard = new (0, _footballPlayerJs.Forward)("Edouard", "Striker", "images/edouard.png", 23, 11, 4);
// Create players for Brentford
const flekken = new (0, _footballPlayerJs.Goalkeeper)("Flekken", "Goalkeeper", "images/flekken.png", 21, 7, 40);
const ajer = new (0, _footballPlayerJs.Defender)("Ajer", "Centre Back", "images/ajer.png", 18, 42, 50);
const pinnock = new (0, _footballPlayerJs.Defender)("Pinnock", "Centre Back", "images/pinnock.png", 16, 33, 41);
const norgaard = new (0, _footballPlayerJs.Midfielder)("Norgaard", "Defensive Midfielder", "images/norgaard.png", 25, 878, 2);
const janelt = new (0, _footballPlayerJs.Midfielder)("Janelt", "Defensive Midfielder", "images/janelt.png", 27, 1202, 0);
const lewisPotter = new (0, _footballPlayerJs.Midfielder)("Lewis-Potter", "Defensive Midfielder", "images/lewispotter.png", 23, 679, 2);
const wissa = new (0, _footballPlayerJs.Forward)("Wissa", "Left Winger", "images/wissa.png", 18, 3, 6);
const toney = new (0, _footballPlayerJs.Forward)("Toney", "Forward", "images/toney.png", 14, 4, 5);
// Create players for Everton
const pickford = new (0, _footballPlayerJs.Goalkeeper)("Pickford", "Goalkeeper", "images/pickford.png", 28, 3, 90);
const tarkowski = new (0, _footballPlayerJs.Defender)("Tarkowski", "Centre Back", "images/tarkowski.png", 27, 73, 35);
const young = new (0, _footballPlayerJs.Defender)("Young", "Full Back", "images/young.png", 17, 40, 44);
const onanae = new (0, _footballPlayerJs.Midfielder)("Onana", "Defensive Midfielder", "images/onanae.png", 23, 790, 1);
const garner = new (0, _footballPlayerJs.Midfielder)("Garner", "Central Midfielder", "images/garner.png", 18, 490, 3);
const doucouree = new (0, _footballPlayerJs.Midfielder)("Doucoure", "Central Midfielder", "images/doucouree.png", 25, 768, 4);
const mcneil = new (0, _footballPlayerJs.Forward)("McNeil", "Left Winger", "images/mcneil.png", 23, 10, 5);
const harrison = new (0, _footballPlayerJs.Forward)("Harrison", "Right Winger", "images/harrison.png", 26, 7, 8);
// Create players for Nottingham Forest
const sels = new (0, _footballPlayerJs.Goalkeeper)("Sels", "Goalkeeper", "images/sels.png", 24, 4, 65);
const murillo = new (0, _footballPlayerJs.Defender)("Murillo", "Centre Back", "images/murillo.png", 23, 71, 30);
const toffolo = new (0, _footballPlayerJs.Defender)("Toffolo", "Left Back", "images/toffolo.png", 18, 32, 45);
const yates = new (0, _footballPlayerJs.Midfielder)("Yates", "Defensive Midfielder", "images/yates.png", 22, 632, 4);
const dominguez = new (0, _footballPlayerJs.Midfielder)("Dominguez", "Central Midfielder", "images/dominguez.png", 17, 450, 2);
const gibbswhite = new (0, _footballPlayerJs.Midfielder)("Gibbs-White", "Attacking Midfielder", "images/gibbswhite.png", 26, 689, 9);
const hudsonodoi = new (0, _footballPlayerJs.Forward)("Hudson-Odoi", "Left Winger", "images/hudsonodoi.png", 25, 12, 3);
const elanga = new (0, _footballPlayerJs.Forward)("Elanga", "Left Winger", "images/elanga.png", 20, 5, 10);
// Create players for Luton Town
const kaminski = new (0, _footballPlayerJs.Goalkeeper)("Kaminski", "Goalkeeper", "images/kaminski.png", 28, 3, 78);
const mengi = new (0, _footballPlayerJs.Defender)("Mengi", "Centre Back", "images/mengi.png", 21, 34, 47);
const burke = new (0, _footballPlayerJs.Defender)("Burke", "Centre Back", "images/burke.png", 24, 39, 32);
const clark = new (0, _footballPlayerJs.Midfielder)("Clark", "Central Midfielder", "images/clark.png", 26, 783, 6);
const barkley = new (0, _footballPlayerJs.Midfielder)("Barkley", "Central Midfielder", "images/barkley.png", 17, 693, 3);
const ogbene = new (0, _footballPlayerJs.Forward)("Ogbene", "Right Winger", "images/ogbene.png", 19, 4, 2);
const chong = new (0, _footballPlayerJs.Forward)("Chong", "Right Winger", "images/chong.png", 25, 14, 2);
const morris = new (0, _footballPlayerJs.Forward)("Morris", "Striker", "images/morris.png", 21, 3, 7);
// Create players for Sheffield United
const adam = new (0, _footballPlayerJs.Goalkeeper)("Adam", "Goalkeeper", "images/adam.png", 20, 6, 42);
const trusty = new (0, _footballPlayerJs.Defender)("Trusty", "Centre Back", "images/trusty.png", 20, 76, 45);
const robinson = new (0, _footballPlayerJs.Defender)("Robinson", "Centre Back", "images/robinson.png", 23, 32, 46);
const osborn = new (0, _footballPlayerJs.Midfielder)("Osborn", "Central Midfielder", "images/osborn.png", 20, 7, 4);
const hammer = new (0, _footballPlayerJs.Midfielder)("Hammer", "Attacking Midfielder", "images/hammer.png", 20, 7, 4);
const bogle = new (0, _footballPlayerJs.Midfielder)("Bogle", "Right Midfielder", "images/bogle.png", 14, 2, 6);
const brereton = new (0, _footballPlayerJs.Forward)("Brereton", "Left Winger", "images/brereton.png", 12, 4, 1);
const mcburnie = new (0, _footballPlayerJs.Forward)("McBurnie", "Striker", "images/mcburnie.png", 25, 11, 3);
// Create players for Burnley
const trafford = new (0, _footballPlayerJs.Goalkeeper)("Trafford", "Goalkeeper", "images/trafford.png", 25, 3, 56);
const oshea = new (0, _footballPlayerJs.Defender)("O'Shea", "Centre Back", "images/oshea.png", 28, 85, 41);
const esteve = new (0, _footballPlayerJs.Defender)("Esteve", "Centre Back", "images/esteve.png", 12, 29, 22);
const berge = new (0, _footballPlayerJs.Midfielder)("Berge", "Defensive Midfielder", "images/berge.png", 25, 892, 1);
const cullen = new (0, _footballPlayerJs.Midfielder)("Cullen", "Defensive Midfielder", "images/cullen.png", 17, 623, 0);
const odobert = new (0, _footballPlayerJs.Midfielder)("Odobert", "Attacking Midfielder", "images/odobert.png", 19, 535, 3);
const larsen = new (0, _footballPlayerJs.Forward)("Larsen", "Left Winger", "images/larsen.png", 22, 4, 8);
const rodriguez = new (0, _footballPlayerJs.Forward)("Rodriguez", "Striker", "images/rodriguez.png", 24, 7, 3);
//Add players to the team
const burnley = new (0, _footballTeamJs.Football_Team)("Burnley", "images/burnley.png");
burnley.addPlayer(trafford);
burnley.addPlayer(oshea);
burnley.addPlayer(esteve);
burnley.addPlayer(berge);
burnley.addPlayer(cullen);
burnley.addPlayer(odobert);
burnley.addPlayer(larsen);
burnley.addPlayer(rodriguez);
const sheffield = new (0, _footballTeamJs.Football_Team)("Sheffield United", "images/sheffield.png");
sheffield.addPlayer(adam);
sheffield.addPlayer(trusty);
sheffield.addPlayer(robinson);
sheffield.addPlayer(osborn);
sheffield.addPlayer(hammer);
sheffield.addPlayer(bogle);
sheffield.addPlayer(brereton);
sheffield.addPlayer(mcburnie);
const luton = new (0, _footballTeamJs.Football_Team)("Luton Town", "images/luton.png");
luton.addPlayer(kaminski);
luton.addPlayer(mengi);
luton.addPlayer(burke);
luton.addPlayer(clark);
luton.addPlayer(barkley);
luton.addPlayer(ogbene);
luton.addPlayer(chong);
luton.addPlayer(morris);
const forest = new (0, _footballTeamJs.Football_Team)("Nottingham Forest", "images/forest.png");
forest.addPlayer(sels);
forest.addPlayer(murillo);
forest.addPlayer(toffolo);
forest.addPlayer(yates);
forest.addPlayer(dominguez);
forest.addPlayer(gibbswhite);
forest.addPlayer(hudsonodoi);
forest.addPlayer(elanga);
const everton = new (0, _footballTeamJs.Football_Team)("Everton", "images/everton.png");
everton.addPlayer(pickford);
everton.addPlayer(tarkowski);
everton.addPlayer(young);
everton.addPlayer(onanae);
everton.addPlayer(garner);
everton.addPlayer(doucouree);
everton.addPlayer(mcneil);
everton.addPlayer(harrison);
const brentford = new (0, _footballTeamJs.Football_Team)("Brentford", "images/brentford.png");
brentford.addPlayer(flekken);
brentford.addPlayer(ajer);
brentford.addPlayer(pinnock);
brentford.addPlayer(norgaard);
brentford.addPlayer(janelt);
brentford.addPlayer(lewisPotter);
brentford.addPlayer(wissa);
brentford.addPlayer(toney);
const palace = new (0, _footballTeamJs.Football_Team)("Crystal Palace", "images/palace.png");
palace.addPlayer(johnstone);
palace.addPlayer(ward);
palace.addPlayer(mitchell);
palace.addPlayer(doucoure);
palace.addPlayer(lerma);
palace.addPlayer(olise);
palace.addPlayer(ayew);
palace.addPlayer(edouard);
const bournemouth = new (0, _footballTeamJs.Football_Team)("Bournemouth", "images/bournemouth.png");
bournemouth.addPlayer(netob);
bournemouth.addPlayer(mepham);
bournemouth.addPlayer(zabarnyi);
bournemouth.addPlayer(smith);
bournemouth.addPlayer(christie);
bournemouth.addPlayer(hamed);
bournemouth.addPlayer(kluivert);
bournemouth.addPlayer(solanke);
const fulham = new (0, _footballTeamJs.Football_Team)("Fulham", "images/fulham.png");
fulham.addPlayer(leno);
fulham.addPlayer(adarabioyo);
fulham.addPlayer(castagne);
fulham.addPlayer(lukic);
fulham.addPlayer(pereira);
fulham.addPlayer(iwobi);
fulham.addPlayer(wilson);
fulham.addPlayer(muniz);
const chelsea = new (0, _footballTeamJs.Football_Team)("Chelsea", "images/chelsea.png");
chelsea.addPlayer(sanchez);
chelsea.addPlayer(reece);
chelsea.addPlayer(chilwell);
chelsea.addPlayer(enzo);
chelsea.addPlayer(gallagher);
chelsea.addPlayer(caicedo);
chelsea.addPlayer(sterling);
chelsea.addPlayer(jackson);
const brighton = new (0, _footballTeamJs.Football_Team)("Brighton", "images/brighton.png");
brighton.addPlayer(steele);
brighton.addPlayer(dunk);
brighton.addPlayer(estupinan);
brighton.addPlayer(milner);
brighton.addPlayer(grob);
brighton.addPlayer(mitoma);
brighton.addPlayer(march);
brighton.addPlayer(welbeck);
const newcastle = new (0, _footballTeamJs.Football_Team)("Newcastle", "images/newcastle.png");
newcastle.addPlayer(dubravka);
newcastle.addPlayer(botman);
newcastle.addPlayer(trippier);
newcastle.addPlayer(joelinton);
newcastle.addPlayer(guimaraes);
newcastle.addPlayer(almiron);
newcastle.addPlayer(barnes);
newcastle.addPlayer(isak);
const wolves = new (0, _footballTeamJs.Football_Team)("Wolverhampton", "images/wolves.png");
wolves.addPlayer(sa);
wolves.addPlayer(dawson);
wolves.addPlayer(doherty);
wolves.addPlayer(lemina);
wolves.addPlayer(traore);
wolves.addPlayer(neto);
wolves.addPlayer(cunha);
wolves.addPlayer(hwang);
const westham = new (0, _footballTeamJs.Football_Team)("West Ham", "images/westham.png");
westham.addPlayer(fabianski);
westham.addPlayer(zouma);
westham.addPlayer(cresswell);
westham.addPlayer(wardprowse);
westham.addPlayer(paqueta);
westham.addPlayer(soucek);
westham.addPlayer(bowen);
westham.addPlayer(antonio);
const arsenal = new (0, _footballTeamJs.Football_Team)("Arsenal", "images/arsenal.png");
arsenal.addPlayer(ramsdale);
arsenal.addPlayer(saliba);
arsenal.addPlayer(gabriel);
arsenal.addPlayer(odegaard);
arsenal.addPlayer(rice);
arsenal.addPlayer(saka);
arsenal.addPlayer(martinelli);
arsenal.addPlayer(jesus);
const astonVilla = new (0, _footballTeamJs.Football_Team)("Aston Villa", "images/villa.png");
astonVilla.addPlayer(dibu);
astonVilla.addPlayer(cash);
astonVilla.addPlayer(digne);
astonVilla.addPlayer(douglas);
astonVilla.addPlayer(mcginn);
astonVilla.addPlayer(tielemans);
astonVilla.addPlayer(duran);
astonVilla.addPlayer(watkins);
const liverpool = new (0, _footballTeamJs.Football_Team)("Liverpool", "images/liverpool.png");
liverpool.addPlayer(alisson);
liverpool.addPlayer(joeGomez);
liverpool.addPlayer(vanDijk);
liverpool.addPlayer(trent);
liverpool.addPlayer(szoboszlai);
liverpool.addPlayer(macallister);
liverpool.addPlayer(diaz);
liverpool.addPlayer(salah);
const united = new (0, _footballTeamJs.Football_Team)("Manchester United", "images/manchester.png");
united.addPlayer(onana);
united.addPlayer(victor);
united.addPlayer(maguire);
united.addPlayer(casemiro);
united.addPlayer(mount);
united.addPlayer(bruno);
united.addPlayer(garnacho);
united.addPlayer(rashford);
const city = new (0, _footballTeamJs.Football_Team)("Manchester City", "images/city.png");
city.addPlayer(ederson);
city.addPlayer(dias);
city.addPlayer(ake);
city.addPlayer(foden);
city.addPlayer(deBruyne);
city.addPlayer(silva);
city.addPlayer(haaland);
city.addPlayer(alvarez);
const tottenham = new (0, _footballTeamJs.Football_Team)("Tottenham", "images/tottenham.png");
tottenham.addPlayer(vicario);
tottenham.addPlayer(romero);
tottenham.addPlayer(porro);
tottenham.addPlayer(bissouma);
tottenham.addPlayer(maddison);
tottenham.addPlayer(kulusevski);
tottenham.addPlayer(son);
tottenham.addPlayer(richarlison);
// Get the team select dropdown element
const teamSelect = document.querySelector("#team-select");
const teams = [
    liverpool,
    united,
    tottenham,
    arsenal,
    astonVilla,
    city,
    westham,
    wolves,
    newcastle,
    brighton,
    chelsea,
    fulham,
    bournemouth,
    palace,
    brentford,
    everton,
    forest,
    luton,
    sheffield,
    burnley
];
// Populate the dropdown options with team names
teams.forEach((team)=>{
    team.addToDropdown(teamSelect);
});
// Get the list-players container element
const listPlayersContainer = document.querySelector("#list-players");
// Render initial team Liverpool
liverpool.renderTeamPlayers(listPlayersContainer);
function changeTeam() {
    const selectedTeamName = teamSelect.value;
    let selectedTeam;
    if (selectedTeamName === "Liverpool") selectedTeam = liverpool;
    else if (selectedTeamName === "Manchester United") selectedTeam = united;
    else if (selectedTeamName === "Tottenham") selectedTeam = tottenham;
    else if (selectedTeamName === "Arsenal") selectedTeam = arsenal;
    else if (selectedTeamName === "Aston Villa") selectedTeam = astonVilla;
    else if (selectedTeamName === "Manchester City") selectedTeam = city;
    else if (selectedTeamName === "West Ham") selectedTeam = westham;
    else if (selectedTeamName === "Wolverhampton") selectedTeam = wolves;
    else if (selectedTeamName === "Newcastle") selectedTeam = newcastle;
    else if (selectedTeamName === "Brighton") selectedTeam = brighton;
    else if (selectedTeamName === "Chelsea") selectedTeam = chelsea;
    else if (selectedTeamName === "Fulham") selectedTeam = fulham;
    else if (selectedTeamName === "Bournemouth") selectedTeam = bournemouth;
    else if (selectedTeamName === "Crystal Palace") selectedTeam = palace;
    else if (selectedTeamName === "Brentford") selectedTeam = brentford;
    else if (selectedTeamName === "Everton") selectedTeam = everton;
    else if (selectedTeamName === "Nottingham Forest") selectedTeam = forest;
    else if (selectedTeamName === "Luton Town") selectedTeam = luton;
    else if (selectedTeamName === "Sheffield United") selectedTeam = sheffield;
    else if (selectedTeamName === "Burnley") selectedTeam = burnley;
    if (selectedTeam) {
        selectedTeam.renderTeamPlayers(listPlayersContainer);
        (0, _gsapanimationJs.gsapanimation)();
    }
}
// Handle team select change
teamSelect.addEventListener("change", changeTeam);
(0, _gsapanimationJs.gsapanimation)();

},{"./Football_Team.js":"bh8EF","./Football_Player.js":"gnDp6","./modules/gsapanimation.js":"iJq4z"}],"bh8EF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Football_Team", ()=>Football_Team);
class Football_Team {
    constructor(name, image){
        this.name = name;
        this.image = image;
        this.players = [];
    }
    addPlayer(player) {
        this.players.push(player);
    }
    renderTeamPlayers() {
        const teamBox = document.querySelector("#list-players");
        gsap.fromTo("#list-players", {
            y: 40,
            opacity: 0
        }, {
            delay: 0.6,
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.easeOut",
            stagger: {
                from: "start",
                amount: 0.6
            }
        });
        teamBox.innerHTML = "";
        const teamDiv = document.createElement("div");
        const teamName = document.createElement("h2");
        const imgTeam = document.createElement("img");
        const playerList = document.createElement("ul");
        teamName.textContent = this.name;
        teamDiv.classList.add("team");
        playerList.classList.add("players");
        imgTeam.src = this.image;
        imgTeam.classList.add("image-team");
        this.players.forEach((player)=>{
            const playerItem = player.infoPlayers();
            playerList.appendChild(playerItem);
        });
        teamDiv.appendChild(imgTeam);
        teamDiv.appendChild(playerList);
        teamBox.appendChild(teamDiv);
    }
    addToDropdown(selectTeam) {
        const optionTeam = document.createElement("option");
        optionTeam.text = this.name;
        optionTeam.value = this.name;
        selectTeam.add(optionTeam);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gnDp6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Football_Player", ()=>Football_Player);
parcelHelpers.export(exports, "Goalkeeper", ()=>Goalkeeper);
parcelHelpers.export(exports, "Defender", ()=>Defender);
parcelHelpers.export(exports, "Midfielder", ()=>Midfielder);
parcelHelpers.export(exports, "Forward", ()=>Forward);
class Football_Player {
    constructor(name, position, image, appearances){
        this.name = name;
        this.position = position;
        this.image = image;
        this.appearances = appearances;
    }
    infoPlayers() {
        const playerItem = document.createElement("li");
        const div_image = document.createElement("div");
        playerItem.appendChild(div_image);
        playerItem.classList.add("player-box");
        div_image.classList.add("image_box");
        const div_name = document.createElement("div");
        const playerName = document.createElement("h3");
        playerName.textContent = this.name;
        playerItem.appendChild(div_name);
        div_name.classList.add("box-name");
        const div_stats = document.createElement("div");
        const positionSpan = document.createElement("span");
        div_stats.classList.add("stats-list");
        positionSpan.textContent = `${this.position}`;
        const appearancesSpan = document.createElement("span");
        appearancesSpan.textContent = `Appearances: ${this.appearances}`;
        const imagePlayer = document.createElement("img");
        imagePlayer.classList.add("image-player");
        imagePlayer.src = this.image;
        playerItem.appendChild(div_stats);
        div_image.appendChild(imagePlayer);
        div_name.appendChild(playerName);
        div_stats.appendChild(positionSpan);
        div_stats.appendChild(appearancesSpan);
        return playerItem;
    }
}
class Goalkeeper extends Football_Player {
    constructor(name, position, image, appearances, cleansheet, saves){
        super(name, position, image, appearances);
        this.cleansheet = cleansheet;
        this.saves = saves;
    }
    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");
        const cleansheetSpan = document.createElement("span");
        cleansheetSpan.textContent = `Clean Sheet: ${this.cleansheet}`;
        const saveSpan = document.createElement("span");
        saveSpan.textContent = `Saves Made: ${this.saves}`;
        div_stats.appendChild(cleansheetSpan);
        div_stats.appendChild(saveSpan);
        return playerItem;
    }
}
class Defender extends Football_Player {
    constructor(name, position, image, appearances, tackles, duels){
        super(name, position, image, appearances);
        this.tackles = tackles;
        this.duels = duels;
    }
    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");
        const tacklesSpan = document.createElement("span");
        tacklesSpan.textContent = `Total Tackles: ${this.tackles}`;
        const duelsSpan = document.createElement("span");
        duelsSpan.textContent = `Aerial Duels: ${this.duels}`;
        div_stats.appendChild(tacklesSpan);
        div_stats.appendChild(duelsSpan);
        return playerItem;
    }
}
class Midfielder extends Football_Player {
    constructor(name, position, image, appearances, passes, goals){
        super(name, position, image, appearances);
        this.passes = passes;
        this.goals = goals;
    }
    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");
        const passesSpan = document.createElement("span");
        passesSpan.textContent = `Total Passes: ${this.passes}`;
        const goalsSpan = document.createElement("span");
        goalsSpan.textContent = `Total Goals: ${this.goals}`;
        div_stats.appendChild(passesSpan);
        div_stats.appendChild(goalsSpan);
        return playerItem;
    }
}
class Forward extends Football_Player {
    constructor(name, position, image, appearances, goals, assists){
        super(name, position, image, appearances);
        this.goals = goals;
        this.assists = assists;
    }
    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");
        const goalsSpan = document.createElement("span");
        goalsSpan.textContent = `Total Goals: ${this.goals}`;
        const assistsSpan = document.createElement("span");
        assistsSpan.textContent = `Total Assits: ${this.assists}`;
        div_stats.appendChild(goalsSpan);
        div_stats.appendChild(assistsSpan);
        return playerItem;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iJq4z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gsapanimation", ()=>gsapanimation);
function gsapanimation() {
    const playerBoxes = document.querySelectorAll(".player-box");
    playerBoxes.forEach((playerBox)=>{
        const hoverAnimation = gsap.to(playerBox, {
            scale: 1.1,
            duration: 0.3,
            paused: true
        });
        function hoverWorking() {
            hoverAnimation.play();
        }
        function hoverOff() {
            hoverAnimation.reverse();
        }
        playerBox.addEventListener("mouseenter", hoverWorking);
        playerBox.addEventListener("mouseleave", hoverOff);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j2YDk","1SICI"], "1SICI", "parcelRequire611b")

//# sourceMappingURL=index.18dbc454.js.map
