(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8030:function(e,t,n){"use strict";var r,o;n.r(t),n.d(t,{DataContext:function(){return w},DataCtxReader:function(){return L},DataProvider:function(){return k},PageParamsProvider:function(){return T},PlasmicCanvasContext:function(){return b},PlasmicCanvasHost:function(){return _},applySelector:function(){return R},mkMetaName:function(){return j},mkMetaValue:function(){return x},registerComponent:function(){return F},registerGlobalContext:function(){return H},registerTrait:function(){return B},repeatedElement:function(){return G},unstable_registerFetcher:function(){return I},useDataEnv:function(){return A},usePlasmicCanvasContext:function(){return h},useSelector:function(){return M},useSelectors:function(){return S}});var a=n(7294),u=n(3935);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=globalThis;null==f.__PlasmicHostVersion&&(f.__PlasmicHostVersion="2");var d=[],p=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,d.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function v(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var m=0;function y(e){m++,p.set(e)}var b=(0,a.createContext)(!1),h=function(){return(0,a.useContext)(b)};function g(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),o=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,i=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!o,l=function(){var e=(0,a.useState)(0)[1];return(0,a.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,a.useLayoutEffect)((function(){return d.push(l),function(){var e=d.indexOf(l);e>=0&&d.splice(e,1)}}),[l]),(0,a.useEffect)((function(){i&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=v();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[i,n]),(0,a.useEffect)((function(){if(!i&&!document.querySelector("#getlibs")&&o){var e=document.createElement("script");e.id="getlibs",e.src=v()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[i]),!n)return null;if(r||o){var c=document.querySelector("#plasmic-app.__wab_user-body");c||((c=document.createElement("div")).id="plasmic-app",c.classList.add("__wab_user-body"),document.body.appendChild(c));var s=new URLSearchParams(location.hash),f=!!r&&{componentName:s.get("componentName")};return(0,u.createPortal)((0,a.createElement)(E,{key:""+m},(0,a.createElement)(b.Provider,{value:f},p.get())),c,"plasmic-app")}return i&&window.parent===window?(0,a.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var _=function(e){var t=e.enableWebpackHmr,n=(0,a.useState)(null),r=n[0],o=n[1];return(0,a.useEffect)((function(){o((0,a.createElement)(g,null))}),[]),(0,a.createElement)(a.Fragment,null,!t&&(0,a.createElement)(O,null),r)},C=[];function P(e){return C.push(e),function(){var t=C.indexOf(e);t>=0&&C.splice(t,1)}}var E=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var o=r.prototype;return o.componentDidCatch=function(e){C.forEach((function(t){return t(e)}))},o.render=function(){return this.state.error?(0,a.createElement)("div",null,"Error: ",""+this.state.error.message):(0,a.createElement)(a.Fragment,null,this.props.children)},r}(a.Component);function O(){return null}var w=(0,a.createContext)(void 0);function j(e){return"__plasmic_meta_"+e}function x(e){return e}function R(e,t){if(t){for(var n,r=e,o=s(t.split("."));!(n=o()).done;){var a,u=n.value;r=null==(a=r)?void 0:a[u]}return r}}function M(e){return R(A(),e)}function S(e){void 0===e&&(e={});var t=A();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,R(t,r))})))}function A(){return(0,a.useContext)(w)}function k(e){var t,n,r=e.name,o=e.data,u=e.hidden,l=e.label,c=e.children,s=null!=(t=A())?t:{};return r?a.createElement(w.Provider,{value:i({},s,(n={},n[r]=o,n[j(r)]={hidden:u,label:l},n))},c):a.createElement(a.Fragment,null,c)}function T(e){var t=e.children,n=e.params,r=void 0===n?{}:n,o=e.query,u=void 0===o?{}:o;return a.createElement(k,{name:"params",data:r,label:"Page route params"},a.createElement(k,{name:"query",data:u,label:"Page query params"},t))}function L(e){return(0,e.children)(A())}var D=globalThis;function I(e,t){D.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})}D.__PlasmicFetcherRegistry=[];var Z=globalThis;function F(e,t){Z.__PlasmicComponentRegistry.push({component:e,meta:t})}null==Z.__PlasmicComponentRegistry&&(Z.__PlasmicComponentRegistry=[]);var U=globalThis;function H(e,t){U.__PlasmicContextRegistry.push({component:e,meta:t})}null==U.__PlasmicContextRegistry&&(U.__PlasmicContextRegistry=[]);var N,q,V=globalThis;function B(e,t){V.__PlasmicTraitRegistry.push({trait:e,meta:t})}function G(e,t){return K(e,t)}null==V.__PlasmicTraitRegistry&&(V.__PlasmicTraitRegistry=[]);var K=function(e,t){return Array.isArray(t)?t.map((function(t){return K(e,t)})):t&&(0,a.isValidElement)(t)&&"string"!==typeof t?(0,a.cloneElement)(t):t},z=globalThis,$=null!=(N=null==z||null==(q=z.__Sub)?void 0:q.setRepeatedElementFn)?N:function(e){K=e},W={__proto__:null,PlasmicCanvasContext:b,PlasmicCanvasHost:_,usePlasmicCanvasContext:h,unstable_registerFetcher:I,registerComponent:F,registerGlobalContext:H,registerTrait:B,repeatedElement:G,DataContext:w,mkMetaName:j,mkMetaValue:x,applySelector:R,useSelector:M,useSelectors:S,useDataEnv:A,DataProvider:k,PageParamsProvider:T,DataCtxReader:L},J=globalThis;null==J.__Sub&&(J.__Sub=i({React:r||(r=n.t(a,2)),ReactDOM:o||(o=n.t(u,2)),hostModule:W,hostVersion:"1.0.72",hostUtils:{setPlasmicRootNode:y,registerRenderErrorListener:P,setRepeatedElementFn:$},setPlasmicRootNode:y,registerRenderErrorListener:P,setRepeatedElementFn:$},W))},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6273),i=n(2725),l=n(3462),c=n(1018),s=n(7190),f=n(1210),d=n(8684);var p="undefined"!==typeof a.default.useTransition,v={};function m(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=a.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,b=e.children,h=e.prefetch,g=e.passHref,_=e.replace,C=e.soft,P=e.shallow,E=e.scroll,O=e.locale,w=e.onClick,j=e.onMouseEnter,x=e.legacyBehavior,R=void 0===x?!0!==Boolean(!1):x,M=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=b,!R||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var S=!1!==h,A=r(p?a.default.useTransition():[],2)[1],k=a.default.useContext(l.RouterContext),T=a.default.useContext(c.AppRouterContext);T&&(k=T);var L,D=a.default.useMemo((function(){var e=r(u.resolveHref(k,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?u.resolveHref(k,y):n||t}}),[k,o,y]),I=D.href,Z=D.as,F=a.default.useRef(I),U=a.default.useRef(Z);R&&(L=a.default.Children.only(n));var H=R?L&&"object"===typeof L&&L.ref:t,N=r(s.useIntersection({rootMargin:"200px"}),3),q=N[0],V=N[1],B=N[2],G=a.default.useCallback((function(e){U.current===Z&&F.current===I||(B(),U.current=Z,F.current=I),q(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[Z,H,I,B,q]);a.default.useEffect((function(){var e=V&&S&&u.isLocalURL(I),t="undefined"!==typeof O?O:k&&k.locale,n=v[I+"%"+Z+(t?"%"+t:"")];e&&!n&&m(k,I,Z,{locale:t})}),[Z,I,V,O,S,k]);var K={ref:G,onClick:function(e){R||"function"!==typeof w||w(e),R&&L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var f=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:l})};s?s(f):f()}}(e,k,I,Z,_,C,P,E,O,T?A:void 0)},onMouseEnter:function(e){R||"function"!==typeof j||j(e),R&&L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),u.isLocalURL(I)&&m(k,I,Z,{priority:!0})}};if(!R||g||"a"===L.type&&!("href"in L.props)){var z="undefined"!==typeof O?O:k&&k.locale,$=k&&k.isLocaleDomain&&f.getDomainLocale(Z,z,k.locales,k.domainLocales);K.href=$||d.addBasePath(i.addLocale(Z,z,k&&k.defaultLocale))}return R?a.default.cloneElement(L,K):a.default.createElement("a",Object.assign({},M,K),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!u,s=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],v=r(o.useState(null),2),m=v[0],y=v[1];o.useEffect((function(){if(u){if(s.current&&(s.current(),s.current=void 0),c||d)return;return m&&m.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},l.push(n),i.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,c,n,t,d]);var b=o.useCallback((function(){p(!1)}),[]);return[y,d,b]};var o=n(7294),a=n(9311),u="function"===typeof IntersectionObserver;var i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var a=o.default.createContext(null);t.AppRouterContext=a;var u=o.default.createContext(null);t.AppTreeContext=u;var i=o.default.createContext(null);t.FullAppTreeContext=i},7575:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},943:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},3375:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},828:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3375);var o=n(1566);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(943);var o=n(3375);var a=n(1566);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(943);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);