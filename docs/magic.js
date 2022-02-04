"use strict";var b=["to","action","text"],c=["href","nofollow","noreferrer"],d=["collapse","items","text","url"],e=["id","width","height","class","style","host"];function f(a,b){if(null==a)return{};var c,d,e=g(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function g(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function h(a){return k(a)||j(a)||q(a)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function k(a){if(Array.isArray(a))return r(a)}function l(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function m(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?l(Object(b),!0).forEach(function(c){n(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):l(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a,b){return t(a)||s(a,b)||q(a,b)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function q(a,b){if(a){if("string"==typeof a)return r(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?r(a,b):void 0}}function r(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function s(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function t(a){if(Array.isArray(a))return a}function u(a){"@babel/helpers - typeof";return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u(a)}(function(){var j=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},t=function(a){return"object"===u(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=t(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(t(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){q(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),q)),d&&!c&&g(s,c=!0)),b},o=a.middleware,p=void 0===o?function(a){return a}:o,q=p(function(a,c){return"function"==typeof a?q(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?q(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](q,a[1])},m(a[0])),b):m(a)}),s=function(){c=!1,e=r(e.parentNode,e,h,h=t(d(b)),l)};q(a.init)}}}(),k=j.h,l=j.app,n=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0,e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===u(a)})};if(e(d,"undefined")){if(b.props)return k(a,{},[b]);e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})}return k(a,b,d)}},q=n("a"),a=n("b"),r=n("br"),s=n("circle"),t=n("div"),v=n("footer"),w=n("g"),g=n("h1"),x=n("h2"),y=n("h3"),z=n("h4"),A=n("h5"),B=n("header"),C=n("i"),i=n("iframe"),D=n("img"),E=n("input"),F=n("li"),G=n("link"),H=n("main"),I=n("meta"),J=n("nav"),K=n("p"),p=n("path"),L=n("picture"),M=n("script"),N=n("section"),O=n("source"),P=n("span"),Q=n("svg"),R=n("title"),S=n("ul"),T=n("view"),U={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},V=function(){return ga({class:"ArtificialMuseumLink",to:"https://artificialmuseum.com",text:"Visit the Artificial Museum"})},W=function(a){var b=a.name,c=a.type,d=void 0===c?"jpg":c;return L({role:"presentation"},[O({srcset:"".concat(b,".webp"),type:"image/webp"}),D({loading:"lazy",src:"".concat(b,".").concat(d),role:"presentation"})])},X=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[y(b?ga({to:b},i):i),h.map(function(c){var d=o(c,2),e=d[0],f=d[1];return f.map(function(c){return Y(m(m(m({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},Y=function(a){return t([z([a.day,"-",a.month,"-",a.year," - ",ga({to:a.name},a.title)]),K(a.description)])},Z=function(){return t({class:"Commissioned"},[y("Commissioned by:"),ga({title:"commissioned by k\xF6r",to:"https://www.koer.or.at/"},[fa({class:"koer",alt:"k\xF6r",src:"https://static.artificialmuseum.com/support/koer.svg",width:"255",height:"100"}),fa({class:"koer",alt:"wien kultur",src:"https://static.artificialmuseum.com/support/wien-kultur.svg",width:"242",height:"100"})]),ga({to:"https://wirtschaftsagentur.at",title:"Wirtschaftsagentur Wien"},[fa({src:"https://static.artificialmuseum.com/support/wirtschaftsagenturwien.png"})]),fa({src:"https://static.artificialmuseum.com/support/petmanfoundation.png",title:"Petman Foundation"})])},$=function(){return t({class:"Credits"},["made with a few bits of ",ga({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")])},_=function(a){var b=a.img,c=a.description,d=a.exhibitionImages,e=void 0===d?[]:d,f=a.video,g=void 0!==f&&f,i=a.title,j=a.presents,k=a.photographer,l=void 0!==k&&k,m=a.id,n=void 0===m?"":m;return t({class:"ExhibitionWrapper",id:n},[t({class:"Dots"},[qa(),sa(b)]),t({class:"sections"},[x(i),ra(j),N({class:"description"},c)]),e.length&&t({class:"imageWrapper"},[].concat(h(e.map(function(a){return fa(a)})),[g&&za(g)])),l&&t({class:"photographer"},t(["Photos",g&&" / Video",": ",l]))])},aa=function(){return _({title:["fluesterkonus",r(),"inter.aktion"],id:"fluesterkonus",img:{src:"/thesystem-rework/thesystem-mariakoller-fluesterkonus.jpg",height:1200,width:800},exhibitionImages:[{src:"/thesystem-rework/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-02.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-03.jpg",height:1600,width:1200}],presents:{artists:"chora malik",collective:{text:"Setzkasten Wien",to:"https://setzkastenwien.at/"},date:["Performance","19.09.2020"]},description:["reflexionen isolierter stimmen einer sch\xF6nen neuen welt",r()," ganz nah",K({class:"subcredits",title:"Supported by Kultur Ottakring"},[fa("/social/ottakring-kultur.jpg"),fa("/social/ottakring-wappen.jpg")])],photographer:"TheSystemCollective"})},ba=function(){return v({id:"contact",class:"Footer"},[t({class:"Container"},[Q({class:"logo",viewBox:"0 0 54 60",width:"60",height:"54"},[p({d:"M36 0v10h9v40h-9v10h18V0zM0 0v60h18V50H9V10h9V0z",fill:"#ffffff"})]),t([x("Impressum"),y("Address:"),K("SystemKollektiv, z.H. Daniela Weiss"),K("J\xF6rgerstrasse 56-58 Stiege 3, Top 15"),K("1170 Wien"),K("Austria")]),y("Represented by:"),K("Litto / Daniela Weiss"),K("Jascha Ehrenreich"),y("Email:"),ga({to:"mailto:thesystemcollective@gmail.com",text:"thesystemcollective@gmail.com"}),x("Privacy notice"),y("No spying"),K("We promise to never analyze, track, or sell any data about you."),K("We will also never save any data without asking explicitly."),y("Local data"),K(["All browser features that collect sensitive data"," (device orientation, 3d-map of your surroundings, camera video streams, geolocation)"," DO NOT and NEVER WILL transmit this data to our servers."]),y("Session storage"),K(["We save some data in your browser (your last gps location).","This information gets deleted as soon as you close the browser tab."]),t({class:"Social"},[ga({to:"https://www.instagram.com/theartificialmuseum/",nofollow:!0,noreferrer:!0,noopener:!0},[Q({viewBox:"0 0 512 512",height:"45"},[p({fill:"#fafafa",d:"M256 50l102 1c24 1 38 5 47 9a78 78 0 0129 18 78 78 0 0118 30c4 8 8 22 9 46 1 27 2 35 2 102l-2 102a139 139 0 01-9 47 83 83 0 01-47 47c-9 4-23 8-47 9-27 1-35 2-102 2l-102-2a140 140 0 01-47-9 78 78 0 01-29-18 78 78 0 01-18-29c-4-9-8-23-9-47-1-27-2-35-2-102l2-102c1-24 5-38 9-47a78 78 0 0118-29 78 78 0 0130-18c8-4 22-8 46-9a1750 1750 0 01102-1m0-46c-68 0-77 0-104 2a185 185 0 00-61 11 124 124 0 00-45 29 124 124 0 00-29 45 185 185 0 00-11 61c-2 27-2 36-2 104l2 104c1 27 5 45 11 61a124 124 0 0029 45 124 124 0 0045 29c16 6 34 10 61 11a1831 1831 0 00208 0 185 185 0 0061-11 129 129 0 0074-74c6-16 10-34 11-61 2-27 2-36 2-104l-2-104a185 185 0 00-11-61 124 124 0 00-29-45 124 124 0 00-45-29 185 185 0 00-61-11c-27-2-36-2-104-2z"}),p({fill:"#fafafa",d:"M256 127a129 129 0 10129 129 129 129 0 00-129-129zm0 213a84 84 0 1184-84 84 84 0 01-84 84z"}),s({fill:"#fafafa",cx:"391",cy:"122",r:"30"})])]),ga({to:"https://www.youtube.com/channel/UCBwKwgk_eU8w-ccmTOFXADQ",nofollow:!0,noeferrer:!0,noopener:!0},[Q({class:"youtube",viewBox:"0 0 156 109",height:"30"},[p({d:"M152 17a20 20 0 00-13-14c-12-3-61-3-61-3S29 0 17 3A20 20 0 003 17C0 39-2 71 3 92a20 20 0 0014 14c12 3 61 3 61 3s49 0 61-3a20 20 0 0014-14c3-21 5-54-1-75z",fill:"#fafafa"}),p({d:"M62 78l41-23-41-24z",fill:"#0c0c0c"})])])]),$()])])},ca=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.logotext,f=a.root,g=a.theme,h=a.hash,i=a.url;return c||d||e?B({class:"Header"},[(c||e)&&ha({root:f,theme:g,logo:c,logotext:e}),d&&ja({url:i,hash:h,menu:d}),b]):void 0},da=function(){return _({title:"HeartBreakHotel",id:"heartbreakhotel",img:{src:"/thesystem-rework/thesystem-dagmarrohm-heartbreakhotel.jpg",height:1020,width:1013},exhibitionImages:[{src:"/thesystem-rework/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-02.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-03.jpg",height:900,width:1200}],presents:{artists:{text:"Dagmar Rohm",to:"http://www.dagmarrohm.at/"},collective:"Dachsbau",date:["Exhibition","14.08. \u2013 17.08.2020"]},description:["Series framing my work for de-colonialism. ","Colour is no available fund for distinguishing anything. ","What is prefered tells a story about the individual person and nothing else. ","Looking after historical perspectives is looking for unfairness. ","This work examines the beginning of Rock\u2018n Roll, which came out of the rhythm of Black music. ","It\u2018s Elvis, who won a \u201Egame\u201C, because he had the right colour of skin. ","The hidden winner could have been the black people, who still are persecuted by lot\u2018s of whites"," thinking, they\u2018ve got to fight a war, full of hostility."],video:"qwLkYQc8Pn0",photographer:"Walter Roschnik"})},ea=function(){return _({title:"Fake Mirror",id:"fake-mirror",img:{src:"/thesystem-rework/thesystem-litto-thebody.jpg",height:900,width:1200},exhibitionImages:[{src:"/thesystem-rework/exhibitions/hrlitto/thesystem-mslitto-hrlitto-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/hrlitto/thesystem-mslitto-hrlitto-02.jpg",height:1600,width:1200},{src:"/thesystem-rework/exhibitions/hrlitto/thesystem-mslitto-hrlitto-03.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/hrlitto/thesystem-mslitto-hrlitto-04.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/hrlitto/thesystem-mslitto-hrlitto-05.jpg",height:1600,width:1200}],presents:{artists:[K(ga({text:"Ms. Litto",to:"https://litto.work"})),K("presents"),K(ga({to:"https://www.instagram.com/hr.litto/",text:"Hr. Litto"}))],collective:"Villa Schapira",date:["Performance","11.08.2020"]},description:["An AI, sourced from a drawing, tells us what it learned"," about material properties of the human body."],video:"Dy36d_cNQq4",photographer:"Sebastian Kreuzer & Marija Nujic"})},fa=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),D(a)},ga=function(a,d){var e=a.to,g=a.action,h=void 0===g?Ca.go:g,i=a.text,j=f(a,b),k=j.href,l=j.nofollow,m=j.noreferrer,n=f(j,c);e=e||k||"",n.href=e,i&&d?i=[i,d]:!i&&(d?i=d:i=e);var o="/"===e[0]||"#"===e[0];return o?n.onclick=[h,Ba.preventDefault]:(n.target="_blank",n.rel="noopener",l&&(n.rel+=" nofollow"),m&&(n.rel+=" noreferrer")),q(n,i)},ha=function(a){var b=a.logo,c=a.logotext,d=a.root;return ga({to:d,class:"Logo"},[b&&fa(b),c&&P(c)])},ia=function(){return _({title:"Max Mustermann",id:"maxmustermann",img:{src:"/thesystem-rework/thesystem-noemikiss-maxmustermann.jpg",height:1200,width:842},presents:{artists:{text:"No\xE9mi Kiss",to:"http://www.noemikiss.at/"},collective:"Villa Schapira",date:["Exhibition","09.09. \u2013 13.09.2020"]},exhibitionImages:[{src:"/thesystem-rework/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-02.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-03.jpg",height:900,width:1200}],description:["\"Ez a vil\xE1g olyan vil\xE1g, sokat ig\xE9r, keveset \xE1d\u2026\u201C"," (\"Was f\xFCr eine Welt ist diese Welt, die viel verspricht und wenig h\xE4lt\u2026\u201C)",r(),r()," Erf\xFCllen, sich bew\xE4hren, durchhalten aber auch sich durchsetzen, n\xFCtzlich, t\xFCchtig, brauchbar, f\xE4hig und bef\xE4higt sein:"," Das ist unsere t\xE4gliche Besch\xE4ftigung. Immer bestehen und nicht versagen zu d\xFCrfen macht m\xFCde."," Im Zwang uns den \xE4u\xDFeren Erwartungen anzupassen hoffen wir darauf, dass es uns besser geht. Wir wollen uns  besser f\xFChlen."," Die Vielfalt um uns herum ist vielversprechend und suggeriert die M\xF6glichkeit der freien Wahl. Doch gibt es \xFCberhaupt diese freie Wahl?"," Die Spezialisten der Macht weisen uns mit ihren Empfehlungen im Labyrinth der \"freien Wahl\" eine einzige Variante als Richtung vor."," Aus deren Angaben und Anleitungen entstehen dann die Richtlinien, Vorschriften, Instruktionen und Verordnungen."],photographer:"TheSystemCollective"})},ja=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.collapse,c=a.menu,d=a.hash,e=a["class"],f=void 0===e?"":e,g=a.url;return f.includes("Menu")||(f="Menu ".concat(f).trim()),d&&!g.endsWith(d)&&(g+="#".concat(d)),J({className:f},S(c.map(function(a){return ka(m(m({},a),{},{url:g,collapse:void 0===b||b}))})))},ka=function(a){var b=a.collapse,c=a.items,e=void 0===c?[]:c,g=a.text,h=a.url,i=f(a,d),j={class:{}},k=i.to;k===h&&(j["class"].active=!0);var l=[],n=!b||h.includes(k);return n&&e.length&&(l=S(e.map(function(a){return ka(m({url:h,collapse:b},a))}))),F(j,[k?ga(i,g):P(i,g),l])},la=function(){return _({title:["WILLKOMMEN IN DER",r(),"METZGEREI MOPS!"],id:"metzgereimops",img:{src:"/thesystem-rework/thesystem-zirkusmops-familiemops.jpg",height:640,width:718},exhibitionImages:[{src:"/thesystem-rework/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-02.jpg",height:1600,width:1200},{src:"/thesystem-rework/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-03.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-04.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-05.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-06.jpg",height:1600,width:1200},{src:"/thesystem-rework/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-07.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-08.jpg",height:1600,width:1200}],photographer:"TheSystemCollective",presents:{artists:"Familie Mops",collective:{text:"Zirkus Mops",to:"http://www.mysoundofmusic.at/"},date:["Exhibition","22.09. \u2013 14.10.2020"]},description:["Unser Traditionshaus produziert feinste Fleisch und Wurstwaren nach eigenen Familienrezepten."," Wir verarbeiten ausschlie\xDFlich Fleisch von seltenen Wildtierarten."," Ob saftigen Beinschinken, gut durchzogenes T-Bone Steak oder feinsten Filetspitz \u2013"," genie\xDFen Sie exklusive Gaumenfreuden bis zum letzten Bissen."," Eine besondere Spezialit\xE4t des Hauses ist unsere ber\xFChmte Lemurenwurst,"," die schon Erzherzog Franz Joseph Karl I. Kaiser von \xD6sterreich zu sch\xE4tzen wusste."," Nur f\xFCr kurze Zeit am Yppenplatz 5."]})},ma=function(a){var b=a.nospy,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Notice":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.buttonText,l=void 0===k?"Awesome!":k;return f?t({class:"NoSpy"},[t({class:"Container"},[h&&y(h),j&&K(j),E({onclick:Ca.nospy.toggle,value:l,type:"button"})])]):t({class:"NoSpy"},Q({class:"icon",onclick:Ca.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[w([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),s({cx:"192",cy:"128",r:"32"}),s({cx:"128",cy:"256",r:"32"}),s({cx:"288",cy:"384",r:"32"}),s({cx:"272",cy:"272",r:"16"}),s({cx:"400",cy:"336",r:"16"}),s({cx:"176",cy:"368",r:"16"})])]))},na=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return H(e,t({class:{Wrapper:!0}},[ca(d),t({class:"Page",id:"page"},c(d)),ba(d),b]))},oa=function(){return t({class:"Partners"},[x("Our Partners:"),K("The following institutions and collectives will partner with us in 2022."),ga({to:"https://usus.wien"},fa({title:"yppshop provided by usus.wien",src:"https://thesystem.at/social/usus.png",width:"80",height:"35"})),ga({to:"https://magic.github.io"},fa({title:"made with a few bits of magic",src:"https://thesystem.at/social/magic.png",width:"40",height:"35"}))])},pa=function(){return t({class:"Phase1"},t([t({class:"address"},[x("Phase.1: Source"),K("Yppenplatz 5"),K("1160 Wien"),K("11.08. - 14.10.2020")]),fa({src:"/thesystem-rework/auslage.jpg",height:"709",width:"1200"})]))},qa=function(){return t({class:"Polkadot"})},ra=function(a){a.artists&&!Array.isArray(a.artists)&&(a.artists=[a.artists]);var b=a.artists,c=void 0===b?[]:b,d=a.collective,e=a.date,f=a.type;return N({class:"presents"},[0<c.length&&y(c.map(function(b){return b.to?ga(b):b})),d&&z(d.to?ga(d):d),f&&K(f),e&&Array.isArray(e)?e.map(function(a){return K(a)}):K(e)])},sa=function(a){return fa(m({class:"PreviewImage"},a))},ta=function(){return _({title:"System, Struktur & DeFragmentierung",id:"system-struktur-defragmentierung",img:{src:"/thesystem-rework/thesystem-sandkasten-syndikat.jpg",height:1380,width:1080},exhibitionImages:[{src:"/thesystem-rework/exhibitions/sandkasten/thesystem-sandkastensyndikat-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/sandkasten/thesystem-sandkastensyndikat-02.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/sandkasten/thesystem-sandkastensyndikat-03.jpg",height:1600,width:1200},{src:"/thesystem-rework/exhibitions/sandkasten/thesystem-sandkastensyndikat-04.jpg",height:1600,width:1200},{src:"/thesystem-rework/exhibitions/sandkasten/thesystem-sandkastensyndikat-05.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/sandkasten/thesystem-sandkastensyndikat-06.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/sandkasten/thesystem-sandkastensyndikat-07.jpg",height:900,width:1200}],presents:{artists:[K("System // "),K("Markus Liszt"),K("Struktur // "),K(ga({text:"Miss Bubblebliss aka Stephanie Krawinkler",to:"http://missbubblebliss.at"})),K("DeFragmentierung\xA0// "),K(ga({text:"elet aka. Je.Jesch",to:"https://elet.cc/"}))],collective:{text:"Sandkasten Syndikat",to:"https://www.facebook.com/sandkastensyndikat/"},date:["Exhibition","26.08. \u2013 30.08.2020"]},description:[K(["Konstruktion, Scan, Reflektion, Verortung und Zerlegung"," von K\xF6rpern und Objekten im Raum"," an analogen und digitalen Schnittstellen."]),K("Zahlenrhythmik mit Seife gespiegelt und in Licht zerlegt.\xA0")],video:"eERg-H03cvY",photographer:"Sandkasten Syndikat & TheSystemCollective"})},ua=function(){return _({title:"SETZKASTEN X TheSystem",id:"setzkasten",img:{src:"/thesystem-rework/thesystem_setzkastenwien.jpg",height:1e3,width:667},exhibitionImages:[{src:"/thesystem-rework/exhibitions/setzkasten/thesystem-setzkasten-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/setzkasten/thesystem-setzkasten-02.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/setzkasten/thesystem-setzkasten-03.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/setzkasten/thesystem-setzkasten-04.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/setzkasten/thesystem-setzkasten-05.jpg",height:1600,width:1200},{src:"/thesystem-rework/exhibitions/setzkasten/thesystem-setzkasten-06.jpg",height:1600,width:1200}],presents:{artists:[K("Stefan Voglsinger"),K("TURBO SUPER, 2061 / Installation"),r(),K("Patrick K.-H. & bestbefore/Andreas Karaoulanis"),K("EuLowGui, 2020 |  Video Screening"),r(),K("Guillermo Tellechea | Projektion"),r(),K("chora malik | Performance")],collective:{text:"Setzkasten Wien",to:"https://setzkastenwien.at/"},date:["Performances","14.09. \u2013 19.9.2020"]},description:["\xDCber die Woche verteilt bespielen K\xFCnstlerInnen aus dem Umfeld des Setzkasten"," Wien die Auslage am Yppenplatz 5 mit immersiven Performances, Videoarbeiten"," und Skulpturen. TheSystem wird zum wachsenden Labor und ist transformierende"," Installation und performativer Arbeitsraum zugleich."],photographer:"TheSystemCollective"})},va=function(a){var b=a.subTitle;return g({class:"Slogan"},[K(["SYSTEM"]),K(b)])},wa=function(){return _({title:"Systeme & Menschen",id:"systeme-und-menschen",img:{src:"/thesystem-rework/thesystem-stizz-systemeundmenschen.jpg",height:1200,width:900},exhibitionImages:[{src:"/thesystem-rework/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-02.jpg",height:675,width:1200},{src:"/thesystem-rework/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-03.jpg",height:900,width:1200}],presents:{artists:{text:"Stefan St\xFCrzer",to:"https://absturz.info"},collective:"Villa Schapira",date:["Exhibition","1.09. \u2013 7.09.2020"]},description:["Wir leben in einer Zeit in der Menschen"," viel zu oft f\xFCr die Erhaltung von Systemen arbeiten."," Systeme die von Menschen erfunden wurden!"," Systeme sollten eigentlich f\xFCr die Menschen existieren und nicht umgekehrt."," Eine philosophische Auseinandersetzung."],video:"grRgMJi3htE",photographer:"TheSystemCollective"})},xa=function(){return _({title:"TheSystem: garden",id:"thegarden",img:{src:"/thesystem-rework/thesystem-thegarden.jpg",height:676,width:1200},exhibitionImages:[{src:"/thesystem-rework/exhibitions/thegarden/thesystem-thegarden-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/thegarden/thesystem-thegarden-02.jpg",height:676,width:1200}],presents:{artists:[K(ga({text:"WARBLAYDR",to:"https://soundcloud.com/ibisum/tracks"})),K(P(" & ")),K(ga({text:"meks",to:"https://soundcloud.com/user-945933947"}))],collective:"Villa Schapira",date:["Performance","11.08.2020"]},description:["cultivating heritage computing for the kids of the future. ",ga({text:"live recordings on soundcloud",to:"https://soundcloud.com/ibisum/tracks"})],photographer:"Sebastian Kreuzer"})},ya=function(){return _({title:"The Wound",id:"thewound",img:{src:"/thesystem-rework/thesystem-selinanovak-thewound.jpg",height:1200,width:1600},exhibitionImages:[{src:"/thesystem-rework/exhibitions/thewound/thesystem-selinanovak-thewound-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/thewound/thesystem-selinanovak-thewound-02.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/thewound/thesystem-selinanovak-thewound-03.jpg",height:800,width:1200},{src:"/thesystem-rework/exhibitions/thewound/thesystem-selinanovak-thewound-04.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/thewound/thesystem-selinanovak-thewound-05.jpg",height:800,width:1200},{src:"/thesystem-rework/exhibitions/thewound/thesystem-selinanovak-thewound-06.jpg",height:800,width:1200}],presents:{artists:"Selina Novak",collective:{text:"Zirkus Mops",to:"http://www.mysoundofmusic.at/"},type:"Installation",date:"19.08. \u2013 23.08.2020"},description:[K("A wormhole into the future"),K("An echo in the empty space"),K("A shrine to meditate over what's left"),K("After the anthropocene")],video:"OviYhQ_Lo2Y",photographer:"Nikolai Haller & TheSystemCollective"})},za=function(a,b){"object"!==u(a)&&(a={id:a}),a.id||"string"!=typeof b||(a.id=b),a.id&&(parseInt(a.id)===parseInt(a.id)?a.id="https://player.vimeo.com/video/".concat(a.id):!a.id.startsWith("http")&&(a.id="https://www.youtube-nocookie.com/embed/".concat(a.id)));var c=a,d=c.id,g=c.width,h=c.height,j=c["class"],k=void 0===j?"VideoEmbed":j,l=c.style,n=c.host,o=f(c,e);if(d){k.includes("VideoEmbed")||(k="VideoEmbed ".concat(k)),h&&(l=l||{},l.height=h),g&&(l=l||{},l.width=g);var q={class:k};return l&&(q.style=l),t(q,i(m(m({frameborder:0,allow:"encrypted-media",allowfullscreen:""},o),{},{src:d})))}},Aa=function(){return _({title:"\"Work\"",id:"work",img:{src:"/thesystem-rework/thesystem-zirkusmops-work.jpg",height:1200,width:1028},presents:{artists:[[K(ga({text:"Marco Otoya",to:"https://culturaespiral.com/marco-otoya/"}))],[K(ga({text:"Adam\xA0Lebesm\xFChlbacher",to:"http://www.mysoundofmusic.at/"}))],[K(ga({text:"Sebastian Schmid",to:"https://zirkusabnormal.at/"}))]],collective:"Villa Schapira",date:["Exhibition","3.09. \u2013 7.09.2020"]},exhibitionImages:[{src:"/thesystem-rework/exhibitions/work/thesystem-zirkusmops-work-01.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/work/thesystem-zirkusmops-work-02.jpg",height:679,width:1200},{src:"/thesystem-rework/exhibitions/work/thesystem-zirkusmops-work-03.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/work/thesystem-zirkusmops-work-04.jpg",height:1600,width:1200},{src:"/thesystem-rework/exhibitions/work/thesystem-zirkusmops-work-05.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/work/thesystem-zirkusmops-work-06.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/work/thesystem-zirkusmops-work-07.jpg",height:900,width:1200},{src:"/thesystem-rework/exhibitions/work/thesystem-zirkusmops-work-08.jpg",height:1600,width:1200}],description:["Die Routine, die sich wiederholt, die Monotonie, die im Leben und in der Arbeit ","Automatismus generiert, die aber notwendig in unserem Leben ist. Wie kann uns die ","Angst vor einem Risiko und vor einer \xC4nderung paralysieren? Kann die Routine uns in ","ein M\xF6belst\xFCck verwandeln? Ist die Routine etwas positives oder nicht, oder aber ","k\xF6nnten wir die Routine \xE4ndern oder transformieren? Oder besser nicht?",r(),r(),K("Musik: Nyman: Double Concerto For Saxophone & Cello - Mvt.5"),K("John Harle, Julian Lloyd Webber, Michael Nyman: Philharmonia Orchestra")],video:"tzPXBR5AYJs",photographer:"Kris Kalika & TheSystemCollective"})},Ba={preventDefault:function preventDefault(a){return a.preventDefault(),a}},Ca={go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=o(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=a.pages&&a.pages[f]&&a.pages[f].title;i&&(document.title=a.title=i),f===a.url?window.location.hash=h:!h&&window.scrollTo({top:0});var j=window,k=j.scrollY;return window.history.pushState({url:f,hash:h,scrollY:k},a.title,c),m(m({},a),{},{url:f,hash:h,prev:a.url})},nospy:{toggle:function toggle(a){return a.nospy.show=!a.nospy.show,m({},a)}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f}),m(m({},a),{},{url:d,hash:e})}},Da={"/thesystem-rework/":function thesystemRework(){return[t({class:"PageHeader"},[va({subTitle:"Kollektiv"}),V()]),t({class:"Game"},["Our Game with artificial museum logo"]),t({id:"manifest",class:"Manifest"},[x("Manifest"),K(["The ",C("SystemKollectiv")," is a syndicate of independent"," artists, makers, programmers, engineers, philosophers, activists, and scientists,"," collectively using art and technology to transform our world."," We believe in a literal definition of \"common goods\","," and convert public spaces into an ",ga({to:"https://artificialmuseum.com",text:"Artificial Museum"}),", ready for artists to freely position their art."]),K("Our method is an intermixture of universes, physical, virtual and imaginary."),K(C("We don't need space, time is irrelevant, objects stay as useful as the user.")),K("To fulfill this obligation, we:"),y("Create:"),K("We manifest art as digital expression and representation of real and imagined phantasms."),K("These artifacts are not meant to be replicas, by using the unique possibilities of mixed reality, art can come alive and allow a multi - dimensional experience to the beholder."),y("Procure:"),K("To commission works for our collection, we actively engage and collaborate with artists, collectives and institutions."),K("We host regular educational workshops, teaching the fundamentals needed to create artifacts for the metaverse."),K("We support our collaboration partners, both institutions and artists, in the procurement of public and / or private funding for their art projects and exhibitions."),y("Research:"),K("There is a constant flow of new concepts to explore when you build something that does not exist.Our research covers a host of topics, including novel artistic techniques, game theory regarding user retention and monetization, censorship resistance for our platform and artifacts and many more."),y("Distribute:"),K(["Our ",ga({to:"https://artificialmuseum.com",text:"web app"})," is our portal hub, providing visitors, artists, collectives and institutions with ways to collaborate, contribute, connect, create and collect."]),y("Preserve:"),K("The Artificial Museum aims to create a public and permanent record, preserving moments and objects in time and space.")]),oa(),W({name:"/bigpic",type:"png"}),t({id:"collaborations",class:"Collaborations"},[x("Call for Collaboration"),y("2030: Game over or Replay?"),K("This is our final chance to act."),a("Hello world."),K("We are the SystemKollektiv."),K("Our mission is to create, procure, research, distribute, and preserve digitized art in the Artificial Museum."),y("Mission"),K("We collaborate with artists, curators, organizers, collectives and institutions, expanding our network and helping us in our mission: augmenting our world with new ideas for change and forming the cultural heritage of the future."),K("We invite artists of all trades, both analog and digital, to create a digital augmented reality artifact and become a permanent part of our museum."),y("Motivation"),K("We are already, more than ever, communicating and interacting in spaces that try to emulate an imaginary reality, and the experience of virtual reality seems to be coming closer and closer to something indistinguishable from and interwoven with our material spaces, an inevitable future of humanity."),K("Whatever the future may actually bring, we believe that we should try to shape technologies, social revolutions, ideas and spaces, so that humankind will be enabled to reimagine itself."),K("We want to finally be able to process changes to society by representing ideas and critiques and taking a stance on them."),K("There is not much time left until the beginning of 2030. Creative eyes can already catch a glimpse of the needed changes, a vision for humanity\u2019s future that is reachable, sustainable and, frankly, better than what we have now.Those same eyes also see the alternative future of climate disasters, social disarray and division, markets completely detached from reality and humanity enslaved by the machine."),K(["There are only two possible endings to this scenario: ",a("Game Over or Replay.")]),K("Our obligation as artists, technologists, scientists and other creatives is displaying those visions and making the needs for change obvious and ubiquitous."),K("By adding Imaginariums to reality we are not only enabled to connect people all over the world, we can facilitate the sharing of artistic work on an unlimited virtual version of earth."),K("It allows the visitor to partake in exhibitions all over the earth, and soon maybe even on other planets, while the artists are not being limited by choice of venue, budget or other real world problems negatively interfering with the display of art"),x("Participate"),K(["We are looking for institutional partners. "," Universities, museums, hackspaces and artist collectives are invited to shape the future of the Artificial Museum with us."]),K(["We can help with funding applications and handle the technical realisation of exhibitions,"," our partners handle the local open calls and coordinate with the artists."])]),t({class:"Participate"},[x("How to participate"),K("blabla"),K("blabla"),K("blabla")]),Z()]},"/thesystem-rework/404/":function thesystemRework404(){return t("404 - not found.")},"/thesystem-rework/exhibitions/phase1/":function thesystemReworkExhibitionsPhase1(){return[pa(),t({class:"month-title"},"Exhibitions"),la(),ua(),aa(),ia(),Aa(),wa(),ta(),ya(),da(),ea(),xa(),t({class:"manifest"},[A([K(["Concept and Organisation: ",ga({text:"Litto / Daniela Weiss",to:"https://litto.work"})]),K(["Development: ",ga({text:"Jascha Ehrenreich",to:"https://jaeh.at"})])])])]}};l({init:m(m({},{description:"THESYSTEM - August \u2013 Oktober 2020 - Yppenplatz 5, 1160 Wien",image:"https://thesystem.at/thesystem_preview_image.jpg",menu:[{text:"about us",to:"/thesystem-rework/"},{text:"manifest",to:"/thesystem-rework/#manifest"},{text:"collaborations",to:"/thesystem-rework/#collaborations"}],nospy:{show:!1},pageClass:"light",pages:{"/thesystem-rework/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/thesystem-rework/",title:"THESYSTEM",url:"/thesystem-rework/"}),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[U.listenPopState,Ca.pop]]},view:function(a){var b=Da[a.url]?a.url:"/404/",c=Da[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,na({page:c,state:a},ma(a))},node:document.getElementById("Magic")})})();