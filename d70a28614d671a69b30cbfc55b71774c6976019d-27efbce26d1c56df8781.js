(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"5KDp":function(e,t,n){e.exports={linkText:"Links-module--link-text--3ig0I",link:"Links-module--link--37xx1",links:"Links-module--links--1oGUb",linksWrapper:"Links-module--links-wrapper--1X_ev",active:"Links-module--active--3kEHR",inverse:"Links-module--inverse--1I9pp",spinAround:"Links-module--spinAround--1_sIM"}},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),s.canUseDOM?t(c):n&&(c=n(c))}var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(s,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(s,"canUseDOM",A),s}}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,A=function(e,t,n,r){var a=String(i(e)),A="<"+t;return""!==n&&(A+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),A+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(A),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,A=n("quPj"),c=n("C/va"),u=r.RegExp,l=u,s=u.prototype,f=/a/g,p=/a/g,m=new u(f)!==f;if(n("nh4g")&&(!m||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")})))){u=function(e,t){var n=this instanceof u,r=A(e),i=void 0===t;return!n&&r&&e.constructor===u&&i?e:a(m?new l(r&&!i?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&i?c.call(e):t),n?this:s,u)};for(var d=function(e){e in u||i(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},h=o(l),y=0;h.length>y;)d(h[y++]);s.constructor=u,u.prototype=s,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},PGGC:function(e,t,n){},Qhc5:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG2PeAC95cwAcJN8BXSWgBB3moMZe52HGX6hixKBpI4GhKiRAIGkjgAAAAAAAAAAAAAAAABYe2wAaIp0AGeJcgdqjHY4bY95fXGTfLF0loDNeJqE2XueiNp/oozPg6WQtYapk4OKrZc/jbCaCoyvmQCLr5oAbIp0AGGFbiVmiXKfao127m2Qev9xlH3/dpmD/3qdh/9+oIr/gaSO/4Wok/+JrJf/jK+a8o+ynKuStZ8vjbCbALa9szh0jXnEco95/3WNef97k3//eZeC/2mEbf9cblX/UF1D/09bQf9UYkj/ZHde/3+chf+RtJ7/lLei0Ja5pDGQoZGVY2ZR/0VDKv8+OR//SEQr/1dXQP9aWEL/TEYu/z43Hv8lHQH/JR0A/yYfAv80Mxf/Y3Rc/5Kznv+Yu6aaaIt0jmt6Zf8qIwj/JB0A/y8oDP9NRy//WVM9/ycgA/8oIQX/Jh8C/yYfAv8mHwL/JR0A/yokCP94j3j/nMCrqWSJcjpziXXfODMZ/yUeAP8oIQT/LScL/yskCP8mHwH/Jh8C/yYfAv8mHwL/Jh8C/yYfAv8nIAP/a35m6aHGsk3/1uMAhZaEWUA8I+4kHQD+Jh8C/yYfAv8mHwL/Jh8C/yYfAv8mHwL/Jh8C/yYfAv8mHwL/KSQH6GBuVVn///8ChIBwAIyIeQo0LhM7Jh8CmCYfAvMmHwL/Jh8C/yYfAv8mHwL/Jh8C/yYfAv8mHwL/Jh8C5SYfAlstKAsBKCEFAAAAAAAAAAAAJh8CACYfAgcmHwJPJh8CuSYfAvMmHwL/Jh8C/yYfAv8mHwLyJh8CsCYfAjkmHwIBJh8CAAAAAAAAAAAAAAAAAAAAAAAmHwIAJh8CACYfAgwmHwI+Jh8CcyYfAocmHwJzJh8CPSYfAgomHwIAJh8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AAD4DwAAwAMAAIABAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIABAADgAwAA+A8AAP//AAD//wAA//8AAA=="},ZhWT:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,a="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var A,c,u,l;if(Array.isArray(t)){if((A=t.length)!=n.length)return!1;for(c=A;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!n.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!e(c.value[1],n.get(c.value[0])))return!1;return!0}if(i&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!n.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((A=t.length)!=n.length)return!1;for(c=A;0!=c--;)if(t[c]!==n[c])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((A=(u=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(c=A;0!=c--;)if(!Object.prototype.hasOwnProperty.call(n,u[c]))return!1;if(r&&t instanceof Element)return!1;for(c=A;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!e(t[u[c]],n[u[c]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},dqSr:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"name":"Marta Paluszyńska ","navbarLinks":[{"name":"about","link":"/"},{"name":"work","link":"/work"},{"name":"life","link":"/life"},{"name":"balance","link":"/balance"},{"name":"contact","link":"/contact"},{"name":"404","link":"/404"}]}}}}')},eKGF:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},mzAs:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return de}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,i,o,A=n("17x9"),c=n.n(A),u=n("8+s/"),l=n.n(u),s=n("ZhWT"),f=n.n(s),p=n("q1tI"),m=n.n(p),d=n("MgzW"),h=n.n(d),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),E="cssText",T="href",C="http-equiv",k="innerHTML",S="itemprop",O="name",I="property",L="rel",x="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",H="encodeSpecialCharacters",F="onChangeClientState",Y="titleTemplate",J=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[g.NOSCRIPT,g.SCRIPT,g.STYLE],R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Z(e,g.TITLE),n=Z(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,N);return t||r||void 0},z=function(e){return Z(e,F)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var A=i[o],c=A.toLowerCase();-1===t.indexOf(c)||n===L&&"canonical"===e[n].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(A)||A!==k&&A!==E&&A!==S||(n=A)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var A=i[o],c=h()({},r[A],a[A]);r[A]=c}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,A=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,s=e.title,f=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,a),Ae(s,f);var p={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,i),metaTags:ue(g.META,o),noscriptTags:ue(g.NOSCRIPT,A),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,l)},m={},d={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(d[e]=p[e].oldTags)})),t&&t(),c(e,m,d)},oe=function(e){return Array.isArray(e)?e.join(""):e},Ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),A=0;A<o.length;A++){var c=o[A],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var s=i.length-1;s>=0;s--)n.removeAttribute(i[s]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var A=void 0===t[r]?"":t[r];n.setAttribute(r,A)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=se(n,r),[m.a.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return se(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===k||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===k||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,A=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,s=void 0===l?"":l,f=e.titleAttributes;return{base:fe(g.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(v,a,r),link:fe(g.LINK,i,r),meta:fe(g.META,o,r),noscript:fe(g.NOSCRIPT,A,r),script:fe(g.SCRIPT,c,r),style:fe(g.STYLE,u,r),title:fe(g.TITLE,{title:s,titleAttributes:f},r)}},me=l()((function(e){return{baseTag:W([T,j],e),bodyAttributes:X(y,e),defer:Z(e,M),encode:Z(e,H),htmlAttributes:X(v,e),linkTags:Q(g.LINK,[L,T],e),metaTags:Q(g.META,[O,w,C,I,S],e),noscriptTags:Q(g.NOSCRIPT,[k],e),onChangeClientState:z(e),scriptTags:Q(g.SCRIPT,[x,k],e),styleTags:Q(g.STYLE,[E],e),title:V(e),titleAttributes:X(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),de=(a=me,o=i=function(e){function t(){return B(this,t),_(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case g.TITLE:return K({},a,((t={})[r.type]=o,t.titleAttributes=K({},i),t));case g.BODY:return K({},a,{bodyAttributes:K({},i)});case g.HTML:return K({},a,{htmlAttributes:K({},i)})}return K({},a,((n={})[r.type]=K({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[J[n]||n]=e[n],t}),t)}(G(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);de.renderStatic=de.rewind}).call(this,n("eKGF"))},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),i=n("eeVq"),o=n("/e88"),A="["+o+"]",c=RegExp("^"+A+A+"*"),u=RegExp(A+A+"*$"),l=function(e,t,n){var a={},A=i((function(){return!!o[e]()||"​"!="​"[e]()})),c=a[e]=A?t(s):o[e];n&&(a[n]=c),r(r.P+r.F*A,"String",a)},s=l.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=l},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},soUV:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));n("f3/d");var r=n("v+5s"),a=n("YwZP"),i=(n("xfY5"),n("q1tI")),o=n.n(i),A=n("+ZDr"),c=n.n(A),u=(n("lw3w"),n("emEt").default.enqueue,o.a.createContext({}));function l(e){var t=e.staticQueryData,n=e.data,r=e.query,a=e.render,i=n?n.data:t[r]&&t[r].data;return o.a.createElement(o.a.Fragment,null,i&&a(i),!i&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,r=e.render,a=e.children;return o.a.createElement(u.Consumer,null,(function(e){return o.a.createElement(l,{data:t,query:n,render:r||a,staticQueryData:e})}))};var f=n("qhky"),p=n("Qhc5"),m=n.n(p),d=Object(i.createContext)({}),h=Object(i.createContext)((function(){return{}})),y=function(e){var t=e.children,n=Object(i.useState)({activePage:"/"}),r=n[0],a=n[1];return o.a.createElement(d.Provider,{value:r},o.a.createElement(h.Provider,{value:a},t))},v=(n("Z2Ku"),n("tUrg"),n("dqSr")),b=function(){return v.data.site.siteMetadata},g=n("5KDp"),w=n.n(g),E=function(e){var t=e.links;Object(i.useContext)(d),b().name;return o.a.createElement("div",{className:""+w.a.linksWrapper},o.a.createElement(a.Location,null,(function(e){var n=e.location;if(!/contact/.test(n.pathname))return o.a.createElement("ul",{className:"\n                                "+w.a.links+"\n                                "+("/"===n.pathname||/contact/.test(n.pathname)?""+w.a.inverse:"")},t.map((function(e){var t=e.name,n=e.link;return o.a.createElement("li",{key:t},o.a.createElement(c.a,{className:""+w.a.linkText,to:n,activeClassName:""+w.a.active},t))})))})))},T=(n("mzAs"),["work","life","balance"]),C=function(e){var t=e.menuLinks.filter((function(e){return"about"===e.name}))[0].link,n=e.menuLinks.filter((function(e){return"404"!==e.name})),r=e.menuLinks.filter((function(e){return T.includes(e.name)})),A=Object(i.useState)(!1),u=A[0],l=A[1],s=function(e){l(!u)};return Object(i.useEffect)((function(){u?document.body.classList.add("overflow--hidden"):document.body.classList.remove("overflow--hidden")}),[u]),o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Location,null,(function(a){var i=a.location;return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"\n                            navbar\n                            is-fixed-top\n                            "+("/"===i.pathname||/contact/.test(i.pathname)?"is-primary is-transparent":"")+"\n                            "+("/"===i.pathname?"is-index":""),style:{right:"initial",zIndex:31},role:"navigation","aria-label":"main navigation"},o.a.createElement("div",{className:"navbar-brand navbar-start"},o.a.createElement(c.a,{className:"navbar-item",to:t},e.siteTitle))),o.a.createElement("nav",{className:"\n                            navbar\n                            is-fixed-top\n                            navbar--main\n                            "+("/"===i.pathname||/contact/.test(i.pathname)?"is-primary is-transparent":"")+"\n                            "+("/"===i.pathname?"is-index":""),style:{left:"initial"},role:"navigation","aria-label":"main navigation"},o.a.createElement("a",{role:"button",className:"\n                                navbar-burger\n                                burger\n                                "+(u?"is-active":"")+"\n                            ","aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu",onClick:s},o.a.createElement("span",{"aria-hidden":"true"}),o.a.createElement("span",{"aria-hidden":"true"}),o.a.createElement("span",{"aria-hidden":"true"})),o.a.createElement("div",{id:"navbarMenu",className:"\n                                navbar-menu\n                                "+(u?"is-active":"")+"\n                            "},o.a.createElement("div",{className:"navbar-end"},n.map((function(e,t){var n=e.link,r=e.name;return o.a.createElement(c.a,{className:"navbar-item navbar__item",key:t,to:n,activeClassName:"active",onClick:s},r)}))))),o.a.createElement(E,{links:r}))})))},k=(n("PGGC"),{about:{class:"bg--green",color:{primary:"#0E3239"}},contact:{class:"bg--primary",color:{primary:"#5d0e2c"}},work:{class:"bg--work",color:{primary:"#F0F4EB"}},life:{class:"bg--secondary",color:{primary:"#F0F4EB"}},balance:{class:"bg--secondary",color:{primary:"#F0F4EB"}}}),S=function(e){var t=e.mainElementClass,n=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{query:"3220895954",render:function(e){var r,i,A=e.site.siteMetadata,c=A.navbarLinks,u=A.name,l=A.tagline,s=a.globalHistory.location,p=function(){var e=c.filter((function(e){return(null==e?void 0:e.name)===(1===s.pathname.length?"about":s.pathname.substring(1))}))[0];return k[null==e?void 0:e.name]},d=""+u+l,h=""+(null===(r=p())||void 0===r?void 0:r.color.primary);return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null,o.a.createElement(f.a,{bodyAttributes:{class:null===(i=p())||void 0===i?void 0:i.class}},o.a.createElement("title",null,d),o.a.createElement("link",{rel:"icon",href:m.a}),o.a.createElement("meta",{property:"og:title",content:d}),o.a.createElement("meta",{property:"og:description",content:"{}"}),o.a.createElement("meta",{property:"og:image",content:"{}"}),o.a.createElement("meta",{property:"og:url",content:"http://martapaluszynska.github.io"}),o.a.createElement("meta",{name:"twitter:title",content:u}),o.a.createElement("meta",{name:"twitter:description",content:"{}"}),o.a.createElement("meta",{name:"twitter:image",content:"{}"}),o.a.createElement("meta",{name:"theme-color",content:h}),o.a.createElement("meta",{name:"msapplication-navbutton-color",content:h}),o.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),o.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:h})),o.a.createElement("header",null,o.a.createElement(C,{siteTitle:u,menuLinks:c})),o.a.createElement("main",{className:""+t,style:{overflow:"hidden",position:"relative"}},n)))},data:r}))}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},"v+5s":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"name":"Marta Paluszyńska ","tagline":"| UI Designer","navbarLinks":[{"name":"about","link":"/"},{"name":"work","link":"/work"},{"name":"life","link":"/life"},{"name":"balance","link":"/balance"},{"name":"contact","link":"/contact"},{"name":"404","link":"/404"}]}}}}')},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),o=n("Xbzi"),A=n("apmT"),c=n("eeVq"),u=n("kJMx").f,l=n("EemH").f,s=n("hswa").f,f=n("qncB").trim,p=r.Number,m=p,d=p.prototype,h="Number"==i(n("Kuth")(d)),y="trim"in String.prototype,v=function(e){var t=A(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=y?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,c=t.slice(2),u=0,l=c.length;u<l;u++)if((o=c.charCodeAt(u))<48||o>a)return NaN;return parseInt(c,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(h?c((function(){d.valueOf.call(n)})):"Number"!=i(n))?o(new m(v(t)),n,p):v(t)};for(var b,g=n("nh4g")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;g.length>w;w++)a(m,b=g[w])&&!a(p,b)&&s(p,b,l(m,b));p.prototype=d,d.constructor=p,n("KroJ")(r,"Number",p)}}}]);
//# sourceMappingURL=d70a28614d671a69b30cbfc55b71774c6976019d-27efbce26d1c56df8781.js.map