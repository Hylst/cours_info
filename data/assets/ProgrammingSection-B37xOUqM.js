import{R as p,N as Q,O as ye,r as T,j as e,C as u,a as x,b as h,e as f,B as w,A as _e,h as Ne}from"./index-jatdNhFh.js";import{B as b}from"./badge-D3N1h19b.js";import{C as A}from"./CourseHighlight-Ba1yIHMQ.js";import{T as Pe}from"./target-Cgxv7nHm.js";import{C as J}from"./code-B5o97cHw.js";import{B as Ce}from"./brain-e1e4SMeD.js";import{T as k,a as z,b as j,c as y}from"./tabs-DyU7YeQV.js";import{C as U}from"./circle-check-big-DcUkgBGn.js";import{L as me}from"./lightbulb-D5sQnwCc.js";import{P as Se}from"./play-Cls-8Szh.js";import{b as M,p as V,i as G,D as Ae,c as H,A as we,d as K,e as Ee,h as Re,G as Le,j as ee,l as Oe,k as se,g as De,m as qe,R as W,C as ie,X as te,Y as ne,T as re,B as q,L as Me}from"./generateCategoricalChart-Cpewz25D.js";import{B as ae}from"./BarChart-Bb4TIFVA.js";import{P as Te,a as pe,b as ue}from"./PolarAngleAxis-BM86xV_U.js";import{T as Ie}from"./trophy-CY7xpX6y.js";import{S as ke}from"./star-D_bvZ9E6.js";import{U as Y}from"./users-DpOE6_sU.js";import{E as ze}from"./external-link-CTEWBqNU.js";import{V as le}from"./video-DJZf6Qay.js";import{B as Ve}from"./book-open-BGQhZmI6.js";var Fe=["cx","cy","innerRadius","outerRadius","gridType","radialLines"];function F(t){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},F(t)}function Be(t,i){if(t==null)return{};var s=Ge(t,i),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function Ge(t,i){if(t==null)return{};var s={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(i.indexOf(n)>=0)continue;s[n]=t[n]}return s}function L(){return L=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},L.apply(this,arguments)}function oe(t,i){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),s.push.apply(s,n)}return s}function B(t){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?oe(Object(s),!0).forEach(function(n){Ke(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):oe(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function Ke(t,i,s){return i=Ue(i),i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}function Ue(t){var i=Qe(t,"string");return F(i)=="symbol"?i:i+""}function Qe(t,i){if(F(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,i||"default");if(F(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}var Xe=function(i,s,n,r){var a="";return r.forEach(function(l,o){var c=V(s,n,i,l);o?a+="L ".concat(c.x,",").concat(c.y):a+="M ".concat(c.x,",").concat(c.y)}),a+="Z",a},$e=function(i){var s=i.cx,n=i.cy,r=i.innerRadius,a=i.outerRadius,l=i.polarAngles,o=i.radialLines;if(!l||!l.length||!o)return null;var c=B({stroke:"#ccc"},M(i,!1));return p.createElement("g",{className:"recharts-polar-grid-angle"},l.map(function(d){var m=V(s,n,r,d),g=V(s,n,a,d);return p.createElement("line",L({},c,{key:"line-".concat(d),x1:m.x,y1:m.y,x2:g.x,y2:g.y}))}))},Je=function(i){var s=i.cx,n=i.cy,r=i.radius,a=i.index,l=B(B({stroke:"#ccc"},M(i,!1)),{},{fill:"none"});return p.createElement("circle",L({},l,{className:Q("recharts-polar-grid-concentric-circle",i.className),key:"circle-".concat(a),cx:s,cy:n,r}))},He=function(i){var s=i.radius,n=i.index,r=B(B({stroke:"#ccc"},M(i,!1)),{},{fill:"none"});return p.createElement("path",L({},r,{className:Q("recharts-polar-grid-concentric-polygon",i.className),key:"path-".concat(n),d:Xe(s,i.cx,i.cy,i.polarAngles)}))},We=function(i){var s=i.polarRadius,n=i.gridType;return!s||!s.length?null:p.createElement("g",{className:"recharts-polar-grid-concentric"},s.map(function(r,a){var l=a;return n==="circle"?p.createElement(Je,L({key:l},i,{radius:r,index:a})):p.createElement(He,L({key:l},i,{radius:r,index:a}))}))},xe=function(i){var s=i.cx,n=s===void 0?0:s,r=i.cy,a=r===void 0?0:r,l=i.innerRadius,o=l===void 0?0:l,c=i.outerRadius,d=c===void 0?0:c,m=i.gridType,g=m===void 0?"polygon":m,v=i.radialLines,N=v===void 0?!0:v,S=Be(i,Fe);return d<=0?null:p.createElement("g",{className:"recharts-polar-grid"},p.createElement($e,L({cx:n,cy:a,innerRadius:o,outerRadius:d,gridType:g,radialLines:N},S)),p.createElement(We,L({cx:n,cy:a,innerRadius:o,outerRadius:d,gridType:g,radialLines:N},S)))};xe.displayName="PolarGrid";function Ye(t){return t&&t.length?t[0]:void 0}var Ze=Ye,es=Ze;const ss=ye(es);var is=["key"];function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},I(t)}function ts(t,i){if(t==null)return{};var s=ns(t,i),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function ns(t,i){if(t==null)return{};var s={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(i.indexOf(n)>=0)continue;s[n]=t[n]}return s}function X(){return X=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},X.apply(this,arguments)}function ce(t,i){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),s.push.apply(s,n)}return s}function _(t){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?ce(Object(s),!0).forEach(function(n){R(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ce(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function rs(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function de(t,i){for(var s=0;s<i.length;s++){var n=i[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,fe(n.key),n)}}function as(t,i,s){return i&&de(t.prototype,i),s&&de(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}function ls(t,i,s){return i=$(i),os(t,he()?Reflect.construct(i,s||[],$(t).constructor):i.apply(t,s))}function os(t,i){if(i&&(I(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cs(t)}function cs(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function he(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(he=function(){return!!t})()}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},$(t)}function ds(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),i&&Z(t,i)}function Z(t,i){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Z(t,i)}function R(t,i,s){return i=fe(i),i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}function fe(t){var i=ms(t,"string");return I(i)=="symbol"?i:i+""}function ms(t,i){if(I(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,i||"default");if(I(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}var D=function(t){function i(){var s;rs(this,i);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return s=ls(this,i,[].concat(r)),R(s,"state",{isAnimationFinished:!1}),R(s,"handleAnimationEnd",function(){var l=s.props.onAnimationEnd;s.setState({isAnimationFinished:!0}),G(l)&&l()}),R(s,"handleAnimationStart",function(){var l=s.props.onAnimationStart;s.setState({isAnimationFinished:!1}),G(l)&&l()}),R(s,"handleMouseEnter",function(l){var o=s.props.onMouseEnter;o&&o(s.props,l)}),R(s,"handleMouseLeave",function(l){var o=s.props.onMouseLeave;o&&o(s.props,l)}),s}return ds(i,t),as(i,[{key:"renderDots",value:function(n){var r=this.props,a=r.dot,l=r.dataKey,o=M(this.props,!1),c=M(a,!0),d=n.map(function(m,g){var v=_(_(_({key:"dot-".concat(g),r:3},o),c),{},{dataKey:l,cx:m.x,cy:m.y,index:g,payload:m});return i.renderDotItem(a,v)});return p.createElement(H,{className:"recharts-radar-dots"},d)}},{key:"renderPolygonStatically",value:function(n){var r=this.props,a=r.shape,l=r.dot,o=r.isRange,c=r.baseLinePoints,d=r.connectNulls,m;return p.isValidElement(a)?m=p.cloneElement(a,_(_({},this.props),{},{points:n})):G(a)?m=a(_(_({},this.props),{},{points:n})):m=p.createElement(Te,X({},M(this.props,!0),{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,points:n,baseLinePoints:o?c:null,connectNulls:d})),p.createElement(H,{className:"recharts-radar-polygon"},m,l?this.renderDots(n):null)}},{key:"renderPolygonWithAnimation",value:function(){var n=this,r=this.props,a=r.points,l=r.isAnimationActive,o=r.animationBegin,c=r.animationDuration,d=r.animationEasing,m=r.animationId,g=this.state.prevPoints;return p.createElement(we,{begin:o,duration:c,isActive:l,easing:d,from:{t:0},to:{t:1},key:"radar-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var N=v.t,S=g&&g.length/a.length,P=a.map(function(C,E){var O=g&&g[Math.floor(E*S)];if(O){var ge=K(O.x,C.x),ve=K(O.y,C.y);return _(_({},C),{},{x:ge(N),y:ve(N)})}var be=K(C.cx,C.x),je=K(C.cy,C.y);return _(_({},C),{},{x:be(N),y:je(N)})});return n.renderPolygonStatically(P)})}},{key:"renderPolygon",value:function(){var n=this.props,r=n.points,a=n.isAnimationActive,l=n.isRange,o=this.state.prevPoints;return a&&r&&r.length&&!l&&(!o||!Ee(o,r))?this.renderPolygonWithAnimation():this.renderPolygonStatically(r)}},{key:"render",value:function(){var n=this.props,r=n.hide,a=n.className,l=n.points,o=n.isAnimationActive;if(r||!l||!l.length)return null;var c=this.state.isAnimationFinished,d=Q("recharts-radar",a);return p.createElement(H,{className:d},this.renderPolygon(),(!o||c)&&Re.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(n,r){return n.animationId!==r.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,prevPoints:r.curPoints}:n.points!==r.curPoints?{curPoints:n.points}:null}},{key:"renderDotItem",value:function(n,r){var a;if(p.isValidElement(n))a=p.cloneElement(n,r);else if(G(n))a=n(r);else{var l=r.key,o=ts(r,is);a=p.createElement(Ae,X({},o,{key:l,className:Q("recharts-radar-dot",typeof n!="boolean"?n.className:"")}))}return a}}])}(T.PureComponent);R(D,"displayName","Radar");R(D,"defaultProps",{angleAxisId:0,radiusAxisId:0,hide:!1,activeDot:!0,dot:!1,legendType:"rect",isAnimationActive:!Le.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});R(D,"getComposedData",function(t){var i=t.radiusAxis,s=t.angleAxis,n=t.displayedData,r=t.dataKey,a=t.bandSize,l=s.cx,o=s.cy,c=!1,d=[],m=s.type!=="number"?a??0:0;n.forEach(function(v,N){var S=ee(v,s.dataKey,N),P=ee(v,r),C=s.scale(S)+m,E=Array.isArray(P)?Oe(P):P,O=se(E)?void 0:i.scale(E);Array.isArray(P)&&P.length>=2&&(c=!0),d.push(_(_({},V(l,o,O,C)),{},{name:S,value:P,cx:l,cy:o,radius:O,angle:C,payload:v}))});var g=[];return c&&d.forEach(function(v){if(Array.isArray(v.value)){var N=ss(v.value),S=se(N)?void 0:i.scale(N);g.push(_(_({},v),{},{radius:S},V(l,o,S,v.angle)))}else g.push(v)}),{points:d,isRange:c,baseLinePoints:g}});var ps=De({chartName:"RadarChart",GraphicalChild:D,axisComponents:[{axisType:"angleAxis",AxisComp:pe},{axisType:"radiusAxis",AxisComp:ue}],formatAxisMap:qe,defaultProps:{layout:"centric",startAngle:90,endAngle:-270,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const us=()=>e.jsx("section",{id:"intro",className:"mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-8 rounded-xl border border-blue-100 mb-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6 text-blue-900",children:"🚀 La Programmation : Votre Baguette Magique en Data Science"}),e.jsxs("div",{className:"prose prose-lg max-w-none text-gray-700 mb-8",children:[e.jsx("p",{className:"text-xl leading-relaxed mb-6",children:"Imaginez que vous êtes un chef cuisinier dans un restaurant étoilé. Vos ingrédients ? Les données brutes. Vos ustensiles ? Les langages de programmation. Votre objectif ? Transformer ces ingrédients en insights délicieux qui nourrissent les décisions stratégiques !"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg border-l-4 border-blue-500 my-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-700 mb-3",children:"🌟 Analogie : La programmation comme un langage universel"}),e.jsx("p",{children:`Tout comme vous apprenez l'anglais pour voyager dans le monde, vous apprenez Python, R ou SQL pour voyager dans l'univers des données. Chaque langage a sa "culture" et ses spécialités !`})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",children:[e.jsx("div",{className:"text-3xl mb-3",children:"🐍"}),e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Python"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Le couteau suisse polyvalent"}),e.jsx(b,{className:"mt-2 bg-blue-100 text-blue-800",children:"Débutant-friendly"})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",children:[e.jsx("div",{className:"text-3xl mb-3",children:"📊"}),e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"R"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Le statisticien expert"}),e.jsx(b,{className:"mt-2 bg-purple-100 text-purple-800",children:"Statistiques"})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",children:[e.jsx("div",{className:"text-3xl mb-3",children:"🗃️"}),e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"SQL"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Le maître des bases de données"}),e.jsx(b,{className:"mt-2 bg-amber-100 text-amber-800",children:"Essentiel"})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",children:[e.jsx("div",{className:"text-3xl mb-3",children:"⚡"}),e.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Julia"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Le sprinter performant"}),e.jsx(b,{className:"mt-2 bg-green-100 text-green-800",children:"Haute performance"})]})]}),e.jsx(A,{title:"💡 Le saviez-vous ?",type:"concept",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"En 2023, Python était utilisé par 67% des data scientists dans le monde !"}),"Mais ce n'est pas juste une question de popularité : Python a été conçu avec une philosophie de simplicité et de lisibilité qui en fait le langage parfait pour débuter."]}),e.jsx("div",{className:"bg-blue-100 p-4 rounded-lg mt-4",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Fait amusant :"}),` Python doit son nom aux "Monty Python's Flying Circus", pas au serpent ! Son créateur, Guido van Rossum, voulait un nom court et mystérieux.`]})})]})}),e.jsxs("div",{className:"mt-8",children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx(Pe,{className:"h-6 w-6 text-blue-600"}),"Pourquoi apprendre à programmer en Data Science ?"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(u,{children:[e.jsx(x,{children:e.jsxs(h,{className:"flex items-center gap-2 text-lg",children:[e.jsx(J,{className:"h-5 w-5 text-green-600"}),"Automatisation"]})}),e.jsx(f,{children:e.jsx("p",{className:"text-sm",children:"Transformez 8 heures de travail manuel en 8 minutes d'exécution automatique. La programmation vous libère des tâches répétitives pour vous concentrer sur l'analyse."})})]}),e.jsxs(u,{children:[e.jsx(x,{children:e.jsxs(h,{className:"flex items-center gap-2 text-lg",children:[e.jsx(Ce,{className:"h-5 w-5 text-purple-600"}),"Reproductibilité"]})}),e.jsx(f,{children:e.jsx("p",{className:"text-sm",children:"Votre code est comme une recette : quelqu'un d'autre peut suivre exactement vos étapes et obtenir les mêmes résultats. C'est la base de la science !"})})]})]})]})]})}),xs=()=>{const[t,i]=T.useState(null),[s,n]=T.useState(new Set),r=o=>{i(t===o?null:o)},a=o=>{n(c=>new Set([...c,o]))},l=({title:o,code:c,language:d="python"})=>e.jsxs("div",{className:"my-4",children:[e.jsxs("h4",{className:"font-medium mb-2 flex items-center gap-2",children:[e.jsx(J,{className:"h-4 w-4"}),o]}),e.jsxs("div",{className:"bg-gray-900 rounded-md overflow-hidden",children:[e.jsxs("div",{className:"px-4 py-2 bg-gray-800 text-gray-200 text-sm font-mono flex items-center justify-between",children:[e.jsx("span",{children:d}),e.jsxs(w,{size:"sm",variant:"ghost",className:"text-green-400 hover:text-green-300",children:[e.jsx(Se,{className:"h-3 w-3 mr-1"}),"Exécuter"]})]}),e.jsx("pre",{className:"p-4 text-sm text-gray-300 overflow-x-auto",children:e.jsx("code",{children:c})})]})]});return e.jsxs("section",{id:"python-masterclass",className:"mb-16",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("h2",{className:"text-3xl font-bold mb-6 flex items-center gap-3",children:["🐍 Python : Votre Premier Allié en Data Science",e.jsx(b,{className:"bg-blue-100 text-blue-800",children:"Cours Complet"})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mb-8",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"🎯 Objectifs de cette masterclass"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(U,{className:"h-5 w-5 text-green-600"}),e.jsx("span",{className:"text-sm",children:"Maîtriser les bases de Python"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(U,{className:"h-5 w-5 text-green-600"}),e.jsx("span",{className:"text-sm",children:"Manipuler des données avec pandas"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(U,{className:"h-5 w-5 text-green-600"}),e.jsx("span",{className:"text-sm",children:"Créer des visualisations"})]})]})]})]}),e.jsxs(k,{defaultValue:"fundamentals",className:"space-y-6",children:[e.jsxs(z,{className:"grid grid-cols-1 md:grid-cols-4 w-full",children:[e.jsx(j,{value:"fundamentals",children:"🏗️ Fondamentaux"}),e.jsx(j,{value:"pandas",children:"🐼 Pandas"}),e.jsx(j,{value:"visualization",children:"📊 Visualisation"}),e.jsx(j,{value:"ml",children:"🤖 Machine Learning"})]}),e.jsxs(y,{value:"fundamentals",className:"space-y-6",children:[e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"🚀 Les Bases : Votre Première Ligne de Code"})}),e.jsxs(f,{children:[e.jsxs(A,{title:"💡 Rappel : Qu'est-ce qu'une variable ?",type:"concept",children:[e.jsx("p",{className:"mb-2",children:"Une variable est comme une boîte étiquetée où vous rangez des informations. En Python, vous n'avez même pas besoin de dire quel type d'objet vous mettez dedans !"}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded text-sm",children:[e.jsx("strong",{children:"Analogie :"})," Si votre cerveau était un entrepôt, les variables seraient les étagères étiquetées où vous stockez vos souvenirs."]})]}),e.jsx(l,{title:"Variables et types de données",code:`# Python comprend automatiquement le type !
nom = "Alice"                    # Chaîne de caractères (string)
age = 28                        # Nombre entier (integer)
taille = 1.65                   # Nombre décimal (float)
est_data_scientist = True       # Booléen (True/False)

# Affichage intelligent
print(f"{nom} a {age} ans et mesure {taille}m")
# Résultat : Alice a 28 ans et mesure 1.65m

# Python devine le type
print(type(nom))        # <class 'str'>
print(type(age))        # <class 'int'>
print(type(taille))     # <class 'float'>`}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"🏃‍♀️ Exercice Pratique #1"}),e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Défi :"}),' Créez un "profil data scientist" avec vos informations personnelles']}),e.jsx(w,{onClick:()=>r(1),variant:"outline",size:"sm",className:"mb-3",children:t===1?"Masquer la solution":"Voir la solution"}),t===1&&e.jsx(l,{title:"Solution de l'exercice #1",code:`# Créez votre profil
prenom = "Votre prénom"
langages_preferes = ["Python", "SQL", "R"]
annees_experience = 2
specialite = "Machine Learning"
salaire_souhaite = 45000

# Affichage du profil
print("=== MON PROFIL DATA SCIENTIST ===")
print(f"👋 Je m'appelle {prenom}")
print(f"💻 Je maîtrise : {', '.join(langages_preferes)}")
print(f"📈 Expérience : {annees_experience} ans")
print(f"🎯 Spécialité : {specialite}")
print(f"💰 Salaire souhaité : {salaire_souhaite}€")`}),e.jsx(w,{onClick:()=>a(1),size:"sm",variant:s.has(1)?"default":"outline",className:"mt-2",children:s.has(1)?"✅ Terminé":"Marquer comme terminé"})]})]})]})]}),e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"📚 Structures de Données : Vos Outils d'Organisation"})}),e.jsxs(f,{children:[e.jsx(A,{title:"🎯 Zoom sur : Choisir la bonne structure",type:"info",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold",children:"📋 Liste (list)"}),e.jsx("p",{className:"text-sm",children:"Pour des collections ordonnées et modifiables"}),e.jsx("code",{className:"text-xs",children:"scores = [85, 92, 78, 96]"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold",children:"📖 Dictionnaire (dict)"}),e.jsx("p",{className:"text-sm",children:"Pour associer des clés à des valeurs"}),e.jsx("code",{className:"text-xs",children:"student = {'nom': 'Alice', 'note': 95}"})]})]})}),e.jsx(l,{title:"Structures de données en action",code:`# 1. LISTES : Collections ordonnées
ventes_mensuelles = [15000, 18000, 22000, 17000, 25000]

# Opérations courantes
print(f"Total des ventes : {sum(ventes_mensuelles)}€")
print(f"Moyenne : {sum(ventes_mensuelles) / len(ventes_mensuelles):.0f}€")
print(f"Meilleur mois : {max(ventes_mensuelles)}€")

# 2. DICTIONNAIRES : Données structurées
employe = {
    "nom": "Marie Dupont",
    "poste": "Data Analyst", 
    "salaire": 42000,
    "competences": ["Python", "SQL", "Tableau"]
}

# Accès et modification
print(f"Salaire de {employe['nom']} : {employe['salaire']}€")
employe["salaire"] = 45000  # Augmentation !
employe["competences"].append("Machine Learning")

# 3. COMPRÉHENSIONS DE LISTES : Élégance pythonique
# Au lieu de :
resultats = []
for vente in ventes_mensuelles:
    if vente > 20000:
        resultats.append(vente)

# Écrivez simplement :
bons_mois = [vente for vente in ventes_mensuelles if vente > 20000]
print(f"Mois avec > 20k€ : {bons_mois}")`})]})]})]}),e.jsx(y,{value:"pandas",className:"space-y-6",children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"🐼 Pandas : Excel sous Stéroïdes"})}),e.jsxs(f,{children:[e.jsxs(_e,{className:"mb-6",children:[e.jsx(me,{className:"h-4 w-4"}),e.jsxs(Ne,{children:[e.jsx("strong",{children:"Analogie :"})," Si Excel est une calculatrice, pandas est un supercalculateur. Imaginez pouvoir traiter des millions de lignes aussi facilement qu'une feuille Excel !"]})]}),e.jsx(l,{title:"Votre premier DataFrame",code:`import pandas as pd
import numpy as np

# Création d'un DataFrame - comme une table Excel
data = {
    'Nom': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'Ville': ['Paris', 'Lyon', 'Marseille', 'Paris', 'Nice'],
    'Salaire': [45000, 52000, 48000, 51000, 49000],
    'Experience': [2, 5, 8, 3, 6]
}

df = pd.DataFrame(data)

# Exploration rapide - Les 5 commandements du data scientist
print("=== EXPLORATION INITIALE ===")
print("📊 Aperçu des données :")
print(df.head())

print("\\n🔍 Informations générales :")
print(df.info())

print("\\n📈 Statistiques descriptives :")
print(df.describe())

print("\\n🎯 Vérification des valeurs manquantes :")
print(df.isnull().sum())

print("\\n🏷️ Types de données :")
print(df.dtypes)`}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"🎯 Exercice Pratique #2"}),e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Mission :"})," Analysez les salaires de l'équipe et trouvez des insights !"]}),e.jsx(w,{onClick:()=>r(2),variant:"outline",size:"sm",className:"mb-3",children:t===2?"Masquer la solution":"Voir la solution"}),t===2&&e.jsx(l,{title:"Solution : Analyse des salaires",code:`# Suite du DataFrame précédent...

# 1. FILTRAGE : Qui gagne plus de 50k€ ?
hauts_salaires = df[df['Salaire'] > 50000]
print("💰 Employés avec salaire > 50k€ :")
print(hauts_salaires[['Nom', 'Salaire']])

# 2. GROUPEMENT : Salaire moyen par ville
salaire_par_ville = df.groupby('Ville')['Salaire'].mean().round(0)
print("\\n🏙️ Salaire moyen par ville :")
print(salaire_par_ville)

# 3. CORRELATION : Relation âge/salaire/expérience
correlation = df[['Age', 'Salaire', 'Experience']].corr()
print("\\n🔗 Matrice de corrélation :")
print(correlation)

# 4. NOUVELLE COLONNE : Calcul du salaire par année d'expérience
df['Salaire_par_exp'] = df['Salaire'] / df['Experience']
print("\\n📊 Salaire par année d'expérience :")
print(df[['Nom', 'Salaire_par_exp']].sort_values('Salaire_par_exp', ascending=False))`}),e.jsx(w,{onClick:()=>a(2),size:"sm",variant:s.has(2)?"default":"outline",className:"mt-2",children:s.has(2)?"✅ Terminé":"Marquer comme terminé"})]})]})]})]})}),e.jsx(y,{value:"visualization",className:"space-y-6",children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"📊 Visualisation : Faire Parler les Données"})}),e.jsxs(f,{children:[e.jsxs(A,{title:"🎨 Philosophie : Une image vaut mille données",type:"concept",children:[e.jsx("p",{className:"mb-3",children:"Votre cerveau traite les images 60 000 fois plus rapidement que le texte ! Une bonne visualisation peut révéler des patterns invisibles dans un tableau de chiffres."}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("strong",{children:"Règle d'or :"})," Vos graphiques doivent raconter une histoire claire en 5 secondes maximum."]})]}),e.jsx(l,{title:"Matplotlib & Seaborn : Vos pinceaux numériques",code:`import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Configuration pour de beaux graphiques
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

# Données d'exemple
df_ventes = pd.DataFrame({
    'Mois': ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    'Ventes': [15000, 18000, 22000, 17000, 25000, 28000],
    'Publicité': [2000, 2500, 3000, 2200, 3500, 4000]
})

# 1. GRAPHIQUE LINÉAIRE : Évolution dans le temps
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(df_ventes['Mois'], df_ventes['Ventes'], 
         marker='o', linewidth=3, color='#2E86C1')
plt.title('📈 Évolution des Ventes', fontsize=14, fontweight='bold')
plt.ylabel('Ventes (€)')
plt.grid(True, alpha=0.3)

# 2. GRAPHIQUE DE CORRÉLATION
plt.subplot(1, 2, 2)
plt.scatter(df_ventes['Publicité'], df_ventes['Ventes'], 
           s=100, color='#E74C3C', alpha=0.7)
plt.title('💰 Publicité vs Ventes', fontsize=14, fontweight='bold')
plt.xlabel('Budget Publicité (€)')
plt.ylabel('Ventes (€)')

# Ligne de tendance
z = np.polyfit(df_ventes['Publicité'], df_ventes['Ventes'], 1)
p = np.poly1d(z)
plt.plot(df_ventes['Publicité'], p(df_ventes['Publicité']), 
         "--", color='gray', alpha=0.8)

plt.tight_layout()
plt.show()

# 3. GRAPHIQUE AVANCÉ avec Seaborn
plt.figure(figsize=(10, 6))
sns.regplot(data=df_ventes, x='Publicité', y='Ventes', 
           scatter_kws={'s': 100}, line_kws={'color': 'red'})
plt.title('🎯 Relation Publicité-Ventes avec Tendance', 
          fontsize=16, fontweight='bold')
plt.show()`})]})]})}),e.jsx(y,{value:"ml",className:"space-y-6",children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"🤖 Machine Learning : Votre Premier Modèle"})}),e.jsxs(f,{children:[e.jsxs(A,{title:"🧠 Zoom sur : Qu'est-ce que le Machine Learning ?",type:"concept",children:[e.jsx("p",{className:"mb-3",children:`Imaginez enseigner à un enfant à reconnaître des chats en lui montrant 1000 photos. Le Machine Learning fait pareil : il "apprend" des patterns à partir d'exemples.`}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-sm",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("strong",{children:"1. Apprentissage"}),e.jsx("br",{}),"Le modèle voit des exemples"]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded",children:[e.jsx("strong",{children:"2. Généralisation"}),e.jsx("br",{}),"Il trouve des patterns"]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("strong",{children:"3. Prédiction"}),e.jsx("br",{}),"Il devine sur du nouveau"]})]})]}),e.jsx(l,{title:"Votre premier modèle prédictif",code:`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import pandas as pd
import numpy as np

# 1. CRÉATION DES DONNÉES
# Simulons la relation entre budget pub et ventes
np.random.seed(42)
budget_pub = np.random.uniform(1000, 5000, 100)
# Les ventes dépendent du budget (avec un peu de bruit)
ventes = budget_pub * 2.5 + np.random.normal(0, 1000, 100)

df_ml = pd.DataFrame({
    'Budget_Publicite': budget_pub,
    'Ventes': ventes
})

print("📊 Aperçu des données :")
print(df_ml.head())

# 2. PRÉPARATION DES DONNÉES
X = df_ml[['Budget_Publicite']]  # Variable explicative
y = df_ml['Ventes']              # Variable à prédire

# Division train/test (70% / 30%)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

print(f"\\n📚 Données d'entraînement : {len(X_train)} exemples")
print(f"🧪 Données de test : {len(X_test)} exemples")

# 3. ENTRAÎNEMENT DU MODÈLE
model = LinearRegression()
model.fit(X_train, y_train)

print(f"\\n🎯 Modèle entraîné !")
print(f"Coefficient : {model.coef_[0]:.2f}")
print(f"Intercept : {model.intercept_:.2f}")
print(f"Équation : Ventes = {model.coef_[0]:.2f} * Budget + {model.intercept_:.2f}")

# 4. PRÉDICTIONS ET ÉVALUATION
y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"\\n📈 Performance du modèle :")
print(f"R² Score : {r2:.3f} ({r2*100:.1f}% de la variance expliquée)")
print(f"MSE : {mse:.0f}")

# 5. PRÉDICTION SUR DE NOUVELLES DONNÉES
nouveaux_budgets = [[3000], [4500], [2000]]
predictions = model.predict(nouveaux_budgets)

print(f"\\n🔮 Prédictions :")
for budget, pred in zip(nouveaux_budgets, predictions):
    print(f"Budget {budget[0]}€ → Ventes prédites : {pred:.0f}€")`}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"🏆 Exercice Final : Votre Modèle Complet"}),e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Défi ultime :"})," Créez un modèle pour prédire les salaires basé sur l'expérience et l'âge !"]}),e.jsx(w,{onClick:()=>r(3),variant:"outline",size:"sm",className:"mb-3",children:t===3?"Masquer la solution":"Voir la solution complète"}),t===3&&e.jsx(l,{title:"Solution : Modèle de prédiction de salaires",code:`# PROJET COMPLET : Prédiction de salaires
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import matplotlib.pyplot as plt

# 1. DONNÉES ENRICHIES
np.random.seed(42)
data_salaires = {
    'Experience': np.random.randint(0, 15, 200),
    'Age': np.random.randint(22, 55, 200),
    'Formation': np.random.choice(['Bac+3', 'Bac+5', 'PhD'], 200),
    'Ville': np.random.choice(['Paris', 'Lyon', 'Marseille'], 200)
}

# Calcul réaliste du salaire
base_salaire = 30000
df_salaires = pd.DataFrame(data_salaires)
df_salaires['Salaire'] = (
    base_salaire + 
    df_salaires['Experience'] * 2000 +  # 2k€ par an d'expérience
    (df_salaires['Age'] - 22) * 500 +   # 500€ par an d'âge
    np.where(df_salaires['Formation'] == 'PhD', 10000, 
             np.where(df_salaires['Formation'] == 'Bac+5', 5000, 0)) +
    np.where(df_salaires['Ville'] == 'Paris', 8000, 0) +  # Prime Paris
    np.random.normal(0, 3000, 200)  # Variabilité
)

# 2. ENCODAGE DES VARIABLES CATÉGORIELLES
df_encoded = pd.get_dummies(df_salaires, columns=['Formation', 'Ville'])

# 3. MODÉLISATION AVANCÉE
X = df_encoded.drop('Salaire', axis=1)
y = df_encoded['Salaire']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Random Forest pour capturer les interactions
rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# 4. ÉVALUATION COMPLÈTE
y_pred_rf = rf_model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred_rf)
r2_rf = r2_score(y_test, y_pred_rf)

print(f"🎯 Performance Random Forest :")
print(f"R² Score : {r2_rf:.3f}")
print(f"Erreur moyenne : {mae:.0f}€")

# 5. IMPORTANCE DES VARIABLES
importances = rf_model.feature_importances_
features = X.columns

plt.figure(figsize=(10, 6))
indices = np.argsort(importances)[::-1]
plt.bar(range(len(importances)), importances[indices])
plt.title('🔍 Importance des Variables pour Prédire le Salaire')
plt.xticks(range(len(importances)), [features[i] for i in indices], rotation=45)
plt.tight_layout()
plt.show()

print("\\n🏆 Félicitations ! Vous avez créé votre premier modèle ML complet !")`}),e.jsx(w,{onClick:()=>a(3),size:"sm",variant:s.has(3)?"default":"outline",className:"mt-2",children:s.has(3)?"✅ Projet terminé !":"Valider le projet"})]})]})]})]})})]}),e.jsxs("div",{className:"mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"🎉 Récapitulatif de vos accomplissements"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"✅ Ce que vous maîtrisez maintenant :"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Variables, listes et dictionnaires Python"}),e.jsx("li",{children:"• Manipulation de données avec pandas"}),e.jsx("li",{children:"• Création de visualisations"}),e.jsx("li",{children:"• Construction d'un modèle ML"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🚀 Prochaines étapes suggérées :"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Approfondir NumPy pour le calcul scientifique"}),e.jsx("li",{children:"• Explorer d'autres algorithmes ML"}),e.jsx("li",{children:"• Apprendre les API et scraping web"}),e.jsx("li",{children:"• Découvrir les frameworks deep learning"})]})]})]})]})]})},hs=()=>{const[t,i]=T.useState("overview"),s=[{name:"Python",popularity:75,learningCurve:85,jobMarket:90,performance:65,ecosystem:95,color:"#3776ab"},{name:"R",popularity:45,learningCurve:60,jobMarket:65,performance:55,ecosystem:85,color:"#276DC3"},{name:"SQL",popularity:90,learningCurve:75,jobMarket:95,performance:80,ecosystem:70,color:"#f29111"},{name:"Julia",popularity:15,learningCurve:45,jobMarket:25,performance:95,ecosystem:40,color:"#9558b2"}],n=[{useCase:"Débutant complet",Python:9,R:6,SQL:8,Julia:4},{useCase:"Analyse statistique",Python:8,R:10,SQL:5,Julia:8},{useCase:"Big Data",Python:8,R:6,SQL:9,Julia:7},{useCase:"Machine Learning",Python:10,R:7,SQL:3,Julia:8},{useCase:"Visualisation",Python:8,R:10,SQL:2,Julia:6},{useCase:"Performance",Python:6,R:4,SQL:8,Julia:10}],r=({title:a,pythonCode:l,rCode:o,sqlCode:c})=>e.jsxs("div",{className:"my-6",children:[e.jsx("h4",{className:"font-semibold mb-4",children:a}),e.jsxs(k,{defaultValue:"python",className:"w-full",children:[e.jsxs(z,{className:"grid w-full grid-cols-3",children:[e.jsx(j,{value:"python",children:"🐍 Python"}),e.jsx(j,{value:"r",children:"📊 R"}),e.jsx(j,{value:"sql",children:"🗃️ SQL"})]}),e.jsx(y,{value:"python",children:e.jsxs("div",{className:"bg-gray-900 rounded-md overflow-hidden",children:[e.jsx("div",{className:"px-4 py-2 bg-blue-800 text-white text-sm",children:"Python"}),e.jsx("pre",{className:"p-4 text-sm text-gray-300 overflow-x-auto",children:e.jsx("code",{children:l})})]})}),e.jsx(y,{value:"r",children:e.jsxs("div",{className:"bg-gray-900 rounded-md overflow-hidden",children:[e.jsx("div",{className:"px-4 py-2 bg-blue-600 text-white text-sm",children:"R"}),e.jsx("pre",{className:"p-4 text-sm text-gray-300 overflow-x-auto",children:e.jsx("code",{children:o})})]})}),e.jsx(y,{value:"sql",children:e.jsxs("div",{className:"bg-gray-900 rounded-md overflow-hidden",children:[e.jsx("div",{className:"px-4 py-2 bg-amber-600 text-white text-sm",children:"SQL"}),e.jsx("pre",{className:"p-4 text-sm text-gray-300 overflow-x-auto",children:e.jsx("code",{children:c})})]})})]})]});return e.jsxs("section",{id:"language-comparison",className:"mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"⚔️ Bataille des Langages : Qui Choisir ?"}),e.jsx(A,{title:"🎭 Analogie : Les langages comme des super-héros",type:"concept",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Python = Spider-Man :"})," Polyvalent, accessible, populaire. Peut faire un peu de tout, parfait pour débuter."]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"R = Doctor Strange :"})," Mystique mais puissant. Maître des statistiques et des sorts... euh, des analyses complexes !"]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"SQL = Captain America :"})," Fiable, indispensable, toujours là. Le fondement de toute équipe de data science."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Julia = Flash :"})," Super rapide mais moins connu. Parfait quand la vitesse est cruciale."]})]})]})}),e.jsxs(k,{value:t,onValueChange:i,className:"space-y-6",children:[e.jsxs(z,{className:"grid grid-cols-1 md:grid-cols-4 w-full",children:[e.jsx(j,{value:"overview",children:"📊 Vue d'ensemble"}),e.jsx(j,{value:"code-comparison",children:"💻 Comparaison code"}),e.jsx(j,{value:"use-cases",children:"🎯 Cas d'usage"}),e.jsx(j,{value:"decision-guide",children:"🧭 Guide de choix"})]}),e.jsxs(y,{value:"overview",className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"📈 Popularité et Écosystème"})}),e.jsx(f,{children:e.jsx("div",{className:"h-80",children:e.jsx(W,{width:"100%",height:"100%",children:e.jsxs(ae,{data:s,children:[e.jsx(ie,{strokeDasharray:"3 3"}),e.jsx(te,{dataKey:"name"}),e.jsx(ne,{domain:[0,100]}),e.jsx(re,{formatter:a=>[`${a}%`,"Score"]}),e.jsx(q,{dataKey:"popularity",name:"Popularité",fill:"#3B82F6"}),e.jsx(q,{dataKey:"ecosystem",name:"Écosystème",fill:"#10B981"})]})})})})]}),e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"🎯 Profil Radar des Langages"})}),e.jsx(f,{children:e.jsx("div",{className:"h-80",children:e.jsx(W,{width:"100%",height:"100%",children:e.jsxs(ps,{data:s,children:[e.jsx(xe,{}),e.jsx(pe,{dataKey:"name"}),e.jsx(ue,{angle:0,domain:[0,100],tick:!1}),e.jsx(D,{name:"Popularité",dataKey:"popularity",stroke:"#3B82F6",fill:"#3B82F6",fillOpacity:.1}),e.jsx(D,{name:"Facilité",dataKey:"learningCurve",stroke:"#10B981",fill:"#10B981",fillOpacity:.1}),e.jsx(D,{name:"Performance",dataKey:"performance",stroke:"#EF4444",fill:"#EF4444",fillOpacity:.1}),e.jsx(Me,{})]})})})})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:s.map(a=>e.jsxs(u,{className:"border-l-4",style:{borderLeftColor:a.color},children:[e.jsx(x,{children:e.jsxs(h,{className:"flex items-center justify-between",children:[a.name,e.jsxs(b,{style:{backgroundColor:a.color,color:"white"},children:[a.popularity,"% pop."]})]})}),e.jsx(f,{children:e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Facilité d'apprentissage:"}),e.jsxs("span",{className:"font-semibold",children:[a.learningCurve,"%"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Marché de l'emploi:"}),e.jsxs("span",{className:"font-semibold",children:[a.jobMarket,"%"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Performance:"}),e.jsxs("span",{className:"font-semibold",children:[a.performance,"%"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Écosystème:"}),e.jsxs("span",{className:"font-semibold",children:[a.ecosystem,"%"]})]})]})})]},a.name))})]}),e.jsx(y,{value:"code-comparison",className:"space-y-6",children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"🔍 Même Tâche, Syntaxes Différentes"})}),e.jsxs(f,{children:[e.jsx(r,{title:"📊 Calcul de statistiques descriptives",pythonCode:`import pandas as pd

# Chargement des données
df = pd.read_csv('ventes.csv')

# Statistiques descriptives
stats = df['prix'].describe()
print(f"Moyenne: {df['prix'].mean():.2f}€")
print(f"Médiane: {df['prix'].median():.2f}€")
print(f"Écart-type: {df['prix'].std():.2f}€")

# Groupement par catégorie
moyenne_par_cat = df.groupby('categorie')['prix'].mean()
print(moyenne_par_cat)`,rCode:`library(dplyr)

# Chargement des données
df <- read.csv('ventes.csv')

# Statistiques descriptives
summary(df$prix)
cat("Moyenne:", mean(df$prix), "€\\n")
cat("Médiane:", median(df$prix), "€\\n")
cat("Écart-type:", sd(df$prix), "€\\n")

# Groupement par catégorie
moyenne_par_cat <- df %>%
  group_by(categorie) %>%
  summarise(prix_moyen = mean(prix))
print(moyenne_par_cat)`,sqlCode:`-- Statistiques descriptives avec SQL
SELECT 
    AVG(prix) as prix_moyen,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY prix) as mediane,
    STDDEV(prix) as ecart_type,
    MIN(prix) as prix_min,
    MAX(prix) as prix_max,
    COUNT(*) as nb_ventes
FROM ventes;

-- Moyenne par catégorie
SELECT 
    categorie,
    AVG(prix) as prix_moyen,
    COUNT(*) as nb_ventes
FROM ventes
GROUP BY categorie
ORDER BY prix_moyen DESC;`}),e.jsx(r,{title:"📈 Création d'un graphique",pythonCode:`import matplotlib.pyplot as plt
import seaborn as sns

# Graphique simple
plt.figure(figsize=(10, 6))
sns.boxplot(data=df, x='categorie', y='prix')
plt.title('Distribution des Prix par Catégorie')
plt.xticks(rotation=45)
plt.show()

# Histogramme
plt.figure(figsize=(8, 5))
plt.hist(df['prix'], bins=20, alpha=0.7, color='skyblue')
plt.title('Distribution des Prix')
plt.xlabel('Prix (€)')
plt.ylabel('Fréquence')
plt.show()`,rCode:`library(ggplot2)

# Graphique avec ggplot2
ggplot(df, aes(x = categorie, y = prix)) +
  geom_boxplot(fill = "skyblue", alpha = 0.7) +
  theme_minimal() +
  labs(title = "Distribution des Prix par Catégorie",
       x = "Catégorie", y = "Prix (€)") +
  theme(axis.text.x = element_text(angle = 45))

# Histogramme
ggplot(df, aes(x = prix)) +
  geom_histogram(bins = 20, fill = "skyblue", alpha = 0.7) +
  theme_minimal() +
  labs(title = "Distribution des Prix",
       x = "Prix (€)", y = "Fréquence")`,sqlCode:`-- SQL ne fait pas de graphiques directement
-- Mais on peut préparer les données :

-- Données pour histogramme
SELECT 
    FLOOR(prix/100)*100 as tranche_prix,
    COUNT(*) as frequence
FROM ventes
GROUP BY FLOOR(prix/100)*100
ORDER BY tranche_prix;

-- Données pour boxplot (approximation)
SELECT 
    categorie,
    MIN(prix) as q0,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY prix) as q1,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY prix) as mediane,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY prix) as q3,
    MAX(prix) as q4
FROM ventes
GROUP BY categorie;`})]})]})}),e.jsx(y,{value:"use-cases",className:"space-y-6",children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"🎯 Quel Langage pour Quel Besoin ?"})}),e.jsxs(f,{children:[e.jsx("div",{className:"h-96 mb-6",children:e.jsx(W,{width:"100%",height:"100%",children:e.jsxs(ae,{data:n,layout:"horizontal",margin:{left:100},children:[e.jsx(ie,{strokeDasharray:"3 3"}),e.jsx(te,{type:"number",domain:[0,10]}),e.jsx(ne,{dataKey:"useCase",type:"category",width:90}),e.jsx(re,{}),e.jsx(q,{dataKey:"Python",fill:"#3776ab",name:"Python"}),e.jsx(q,{dataKey:"R",fill:"#276DC3",name:"R"}),e.jsx(q,{dataKey:"SQL",fill:"#f29111",name:"SQL"}),e.jsx(q,{dataKey:"Julia",fill:"#9558b2",name:"Julia"})]})})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-3 text-blue-700",children:"🥇 Python domine quand :"}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"Vous débutez en programmation"}),e.jsx("li",{children:"Projets de Machine Learning"}),e.jsx("li",{children:"Automatisation et scripts"}),e.jsx("li",{children:"Intégration avec d'autres systèmes"}),e.jsx("li",{children:"Prototypage rapide"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-3 text-purple-700",children:"📊 R excelle pour :"}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"Analyses statistiques avancées"}),e.jsx("li",{children:"Recherche académique"}),e.jsx("li",{children:"Visualisations sophistiquées"}),e.jsx("li",{children:"Tests statistiques complexes"}),e.jsx("li",{children:"Rapports automatisés (R Markdown)"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-3 text-amber-700",children:"🗃️ SQL indispensable pour :"}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"Extraction de données"}),e.jsx("li",{children:"Manipulation de gros volumes"}),e.jsx("li",{children:"Agrégations complexes"}),e.jsx("li",{children:"Jointures entre tables"}),e.jsx("li",{children:"Optimisation des requêtes"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-3 text-purple-700",children:"⚡ Julia pour :"}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"Calculs scientifiques intensifs"}),e.jsx("li",{children:"Simulations numériques"}),e.jsx("li",{children:"Algorithmes haute performance"}),e.jsx("li",{children:"Parallélisation native"}),e.jsx("li",{children:"Recherche en IA avancée"})]})]})]})]})]})}),e.jsx(y,{value:"decision-guide",className:"space-y-6",children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx(h,{children:"🧭 Guide de Décision Personnalisé"})}),e.jsxs(f,{children:[e.jsx(A,{title:"🎯 Questionnaire : Trouvez VOTRE langage idéal",type:"question",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold mb-2",children:"1. Quel est votre niveau en programmation ?"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Débutant complet :"})," Python 🐍"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Quelques bases :"})," Python ou R selon votre domaine 📊"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Expérimenté :"})," Julia pour la performance ⚡"]})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold mb-2",children:"2. Dans quel secteur travaillez-vous ?"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Tech/Startup :"})," Python + SQL 🚀"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Recherche/Académique :"})," R + SQL 🎓"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Finance/Banque :"})," Python + SQL + R 💰"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Sciences/Ingénierie :"})," Julia + Python 🔬"]})]})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold mb-2",children:"3. Quel type de projets vous intéresse ?"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Applications web/mobile :"})," Python 📱"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Analyses statistiques :"})," R 📈"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Machine Learning :"})," Python 🤖"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Big Data :"})," SQL + Python 🗄️"]}),e.jsxs("p",{children:["• ",e.jsx("strong",{children:"Calcul scientifique :"})," Julia ⚡"]})]})]})]})}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h4",{className:"font-semibold mb-4",children:"🛤️ Parcours d'Apprentissage Recommandés"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(u,{className:"border-l-4 border-l-blue-500",children:[e.jsx(x,{children:e.jsx(h,{className:"text-blue-700",children:"🎯 Parcours Débutant (6 mois)"})}),e.jsx(f,{children:e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"bg-blue-100 text-blue-800",children:"Mois 1-2"}),e.jsx("span",{children:"Python basics + pandas"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"bg-blue-100 text-blue-800",children:"Mois 3-4"}),e.jsx("span",{children:"SQL + matplotlib/seaborn"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"bg-blue-100 text-blue-800",children:"Mois 5-6"}),e.jsx("span",{children:"scikit-learn + projet complet"})]})]})})]}),e.jsxs(u,{className:"border-l-4 border-l-purple-500",children:[e.jsx(x,{children:e.jsx(h,{className:"text-purple-700",children:"🚀 Parcours Avancé (3 mois)"})}),e.jsx(f,{children:e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"bg-purple-100 text-purple-800",children:"Mois 1"}),e.jsx("span",{children:"Spécialisation (R pour stats, Julia pour perf)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"bg-purple-100 text-purple-800",children:"Mois 2"}),e.jsx("span",{children:"Frameworks avancés + optimisation"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"bg-purple-100 text-purple-800",children:"Mois 3"}),e.jsx("span",{children:"Déploiement + bonnes pratiques"})]})]})})]})]})]}),e.jsxs("div",{className:"mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"💡 Conseil d'Expert"}),e.jsxs("p",{className:"text-sm mb-3",children:[e.jsx("strong",{children:'Ne tombez pas dans le piège du "langage parfait" !'}),"Les meilleurs data scientists sont polyvalents. Commencez par un langage, maîtrisez-le bien, puis ajoutez les autres selon vos besoins."]}),e.jsx("div",{className:"bg-white p-3 rounded border border-blue-100",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Règle des 80/20 :"})," 80% de votre temps sera passé sur un langage principal, 20% sur les langages complémentaires. Choisissez bien votre 80% !"]})})]})]})]})})]})]})},fs=()=>{const[t,i]=T.useState(new Set),[s,n]=T.useState(null),r=o=>{n(s===o?null:o)},a=o=>{i(c=>new Set([...c,o]))},l=({id:o,title:c,difficulty:d,duration:m,description:g,hints:v,solution:N,skills:S})=>{const P=t.has(o),C={Débutant:"bg-green-100 text-green-800",Intermédiaire:"bg-yellow-100 text-yellow-800",Avancé:"bg-red-100 text-red-800"};return e.jsxs(u,{className:`border-l-4 ${P?"border-l-green-500 bg-green-50":"border-l-blue-500"}`,children:[e.jsx(x,{children:e.jsxs(h,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[P&&e.jsx(U,{className:"h-5 w-5 text-green-600"}),e.jsx("span",{children:c})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(b,{className:C[d],children:d}),e.jsx(b,{variant:"outline",children:m})]})]})}),e.jsxs(f,{children:[e.jsx("p",{className:"mb-4",children:g}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"font-semibold mb-2",children:"🎯 Compétences développées :"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:S.map(E=>e.jsx(b,{variant:"secondary",children:E},E))})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(w,{onClick:()=>r(`${o}-hints`),variant:"outline",size:"sm",className:"mr-2",children:[e.jsx(me,{className:"h-4 w-4 mr-1"}),s===`${o}-hints`?"Masquer les indices":"Voir les indices"]}),e.jsxs(w,{onClick:()=>r(`${o}-solution`),variant:"outline",size:"sm",className:"mr-2",children:[e.jsx(J,{className:"h-4 w-4 mr-1"}),s===`${o}-solution`?"Masquer la solution":"Voir la solution"]}),e.jsx(w,{onClick:()=>a(o),size:"sm",variant:P?"default":"outline",className:"mr-2",children:P?"✅ Terminé":"Marquer comme terminé"})]}),s===`${o}-hints`&&e.jsxs("div",{className:"mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200",children:[e.jsx("h5",{className:"font-semibold mb-2",children:"💡 Indices :"}),e.jsx("ul",{className:"text-sm space-y-1",children:v.map((E,O)=>e.jsxs("li",{children:["• ",E]},O))})]}),s===`${o}-solution`&&e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"bg-gray-900 rounded-md overflow-hidden",children:[e.jsx("div",{className:"px-4 py-2 bg-green-800 text-white text-sm",children:"Solution"}),e.jsx("pre",{className:"p-4 text-sm text-gray-300 overflow-x-auto",children:e.jsx("code",{children:N})})]})})]})]})};return e.jsxs("section",{id:"practical-exercises",className:"mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"🏋️‍♀️ Exercices Pratiques : Musclez vos Compétences !"}),e.jsxs(A,{title:"🎯 Philosophie : Apprendre en Faisant",type:"concept",children:[e.jsx("p",{className:"mb-3",children:"La programmation, c'est comme le vélo : on n'apprend qu'en pratiquant ! Ces exercices sont conçus pour vous faire progresser étape par étape, du simple script à l'analyse complète."}),e.jsxs("div",{className:"bg-blue-100 p-3 rounded",children:[e.jsx("strong",{children:"Conseil :"})," Ne regardez les solutions qu'après avoir vraiment essayé. L'erreur est votre meilleure professeure !"]})]}),e.jsxs(k,{defaultValue:"beginner",className:"space-y-6",children:[e.jsxs(z,{className:"grid grid-cols-1 md:grid-cols-3 w-full",children:[e.jsx(j,{value:"beginner",children:"🌱 Débutant"}),e.jsx(j,{value:"intermediate",children:"🚀 Intermédiaire"}),e.jsx(j,{value:"advanced",children:"⭐ Avancé"})]}),e.jsxs(y,{value:"beginner",className:"space-y-6",children:[e.jsx(l,{id:"ex1",title:"🧮 Calculatrice de ROI Marketing",difficulty:"Débutant",duration:"30 min",description:"Créez un script qui calcule le retour sur investissement (ROI) d'une campagne marketing et donne des recommandations automatiques.",skills:["Variables","Calculs","Conditions","Formatage"],hints:["ROI = (Revenus - Coûts) / Coûts * 100","Utilisez des f-strings pour un affichage élégant","Ajoutez des conditions pour les recommandations","Pensez à gérer le cas où les coûts sont nuls"],solution:`# Calculatrice ROI Marketing
def calculer_roi_marketing():
    print("=== CALCULATRICE ROI MARKETING ===")
    
    # Saisie des données
    cout_campagne = float(input("Coût de la campagne (€): "))
    revenus_generes = float(input("Revenus générés (€): "))
    nb_conversions = int(input("Nombre de conversions: "))
    
    # Calculs
    if cout_campagne > 0:
        roi = ((revenus_generes - cout_campagne) / cout_campagne) * 100
        cout_par_conversion = cout_campagne / nb_conversions if nb_conversions > 0 else 0
    else:
        print("Erreur: Le coût ne peut pas être nul")
        return
    
    # Affichage des résultats
    print(f"\\n📊 RÉSULTATS:")
    print(f"💰 ROI: {roi:.1f}%")
    print(f"💵 Coût par conversion: {cout_par_conversion:.2f}€")
    print(f"💸 Bénéfice net: {revenus_generes - cout_campagne:.2f}€")
    
    # Recommandations automatiques
    print(f"\\n🎯 RECOMMANDATIONS:")
    if roi > 300:
        print("🚀 Excellent ROI ! Augmentez le budget de cette campagne.")
    elif roi > 100:
        print("✅ Bon ROI. Continuez cette stratégie.")
    elif roi > 0:
        print("⚠️ ROI positif mais faible. Optimisez la campagne.")
    else:
        print("❌ ROI négatif. Arrêtez ou repensez complètement la campagne.")
    
    if cout_par_conversion > 50:
        print("💡 Coût par conversion élevé. Travaillez sur l'optimisation.")

# Exécution
calculer_roi_marketing()`}),e.jsx(l,{id:"ex2",title:"📊 Analyseur de Ventes Mensuelles",difficulty:"Débutant",duration:"45 min",description:"Analysez les données de vente sur 12 mois et identifiez les tendances, les meilleurs/pires mois, et calculez les prévisions.",skills:["Listes","Boucles","Fonctions","Statistiques de base"],hints:["Stockez les ventes dans une liste","Utilisez min(), max(), sum() pour les calculs","Créez des fonctions pour chaque analyse","Ajoutez une prédiction simple (moyenne mobile)"],solution:`# Analyseur de Ventes Mensuelles
def analyser_ventes():
    mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun',
            'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
    
    # Saisie des données (simulation avec des données d'exemple)
    ventes = [15000, 18000, 22000, 17000, 25000, 28000,
              32000, 29000, 24000, 21000, 19000, 35000]
    
    print("=== ANALYSE DES VENTES ANNUELLES ===")
    
    # Statistiques de base
    total_ventes = sum(ventes)
    moyenne_mensuelle = total_ventes / len(ventes)
    meilleur_mois_idx = ventes.index(max(ventes))
    pire_mois_idx = ventes.index(min(ventes))
    
    print(f"📈 STATISTIQUES GÉNÉRALES:")
    print(f"Total annuel: {total_ventes:,}€")
    print(f"Moyenne mensuelle: {moyenne_mensuelle:,.0f}€")
    print(f"Meilleur mois: {mois[meilleur_mois_idx]} ({max(ventes):,}€)")
    print(f"Pire mois: {mois[pire_mois_idx]} ({min(ventes):,}€)")
    
    # Analyse de tendance
    print(f"\\n📊 ANALYSE DE TENDANCE:")
    croissances = []
    for i in range(1, len(ventes)):
        croissance = ((ventes[i] - ventes[i-1]) / ventes[i-1]) * 100
        croissances.append(croissance)
        if abs(croissance) > 15:
            signe = "📈" if croissance > 0 else "📉"
            print(f"{signe} {mois[i-1]} → {mois[i]}: {croissance:+.1f}%")
    
    # Prévision simple (moyenne des 3 derniers mois)
    prevision = sum(ventes[-3:]) / 3
    print(f"\\n🔮 PRÉVISION JANVIER SUIVANT:")
    print(f"Estimation: {prevision:,.0f}€")
    
    # Recommandations
    print(f"\\n💡 RECOMMANDATIONS:")
    if moyenne_mensuelle > 25000:
        print("✅ Performance excellente maintenue")
    elif max(ventes) > moyenne_mensuelle * 1.3:
        print("🎯 Analysez les facteurs du meilleur mois pour les reproduire")
    
    variance = sum([(v - moyenne_mensuelle)**2 for v in ventes]) / len(ventes)
    if variance > 10000000:  # Forte variabilité
        print("⚠️ Ventes très irrégulières - stabilisez votre pipeline")

analyser_ventes()`})]}),e.jsxs(y,{value:"intermediate",className:"space-y-6",children:[e.jsx(l,{id:"ex3",title:"🛒 Système d'Analyse Panier E-commerce",difficulty:"Intermédiaire",duration:"60 min",description:"Construisez un système qui analyse les habitudes d'achat, calcule la valeur vie client (CLV) et suggère des produits complémentaires.",skills:["Dictionnaires","Classes","Pandas","Analyse cross-sell"],hints:["Créez une classe Client avec ses achats","Utilisez un dictionnaire pour les associations produits","Calculez CLV = fréquence * valeur panier * durée de vie","Implémentez la logique de recommandation"],solution:`import pandas as pd
from collections import defaultdict, Counter
from datetime import datetime, timedelta

class AnalyseurEcommerce:
    def __init__(self):
        self.transactions = []
        self.clients = {}
        self.associations_produits = defaultdict(list)
    
    def ajouter_transaction(self, client_id, produits, montant, date):
        transaction = {
            'client_id': client_id,
            'produits': produits,
            'montant': montant,
            'date': date
        }
        self.transactions.append(transaction)
        
        # Mise à jour client
        if client_id not in self.clients:
            self.clients[client_id] = {
                'achats': [],
                'montant_total': 0,
                'premiere_visite': date,
                'derniere_visite': date
            }
        
        self.clients[client_id]['achats'].append(transaction)
        self.clients[client_id]['montant_total'] += montant
        self.clients[client_id]['derniere_visite'] = max(
            self.clients[client_id]['derniere_visite'], date
        )
        
        # Associations produits (pour cross-sell)
        for i, produit1 in enumerate(produits):
            for produit2 in produits[i+1:]:
                self.associations_produits[produit1].append(produit2)
                self.associations_produits[produit2].append(produit1)
    
    def calculer_clv(self, client_id):
        if client_id not in self.clients:
            return 0
        
        client = self.clients[client_id]
        nb_achats = len(client['achats'])
        panier_moyen = client['montant_total'] / nb_achats
        
        # Fréquence d'achat (achats par mois)
        duree = (client['derniere_visite'] - client['premiere_visite']).days
        frequence_mensuelle = nb_achats / max(duree/30, 1)
        
        # CLV simplifié (24 mois)
        clv = panier_moyen * frequence_mensuelle * 24
        return clv
    
    def recommander_produits(self, produits_panier, top_n=3):
        recommendations = Counter()
        
        for produit in produits_panier:
            if produit in self.associations_produits:
                for produit_associe in self.associations_produits[produit]:
                    if produit_associe not in produits_panier:
                        recommendations[produit_associe] += 1
        
        return recommendations.most_common(top_n)
    
    def generer_rapport(self):
        print("=== RAPPORT ANALYSE E-COMMERCE ===")
        
        # Top clients par CLV
        clv_clients = [(cid, self.calculer_clv(cid)) for cid in self.clients.keys()]
        clv_clients.sort(key=lambda x: x[1], reverse=True)
        
        print(f"\\n👑 TOP 5 CLIENTS (CLV):")
        for i, (client_id, clv) in enumerate(clv_clients[:5], 1):
            print(f"{i}. Client {client_id}: {clv:.0f}€")
        
        # Produits les plus vendus
        tous_produits = []
        for t in self.transactions:
            tous_produits.extend(t['produits'])
        
        top_produits = Counter(tous_produits).most_common(5)
        print(f"\\n🏆 TOP 5 PRODUITS:")
        for i, (produit, count) in enumerate(top_produits, 1):
            print(f"{i}. {produit}: {count} ventes")
        
        # Statistiques générales
        ca_total = sum(t['montant'] for t in self.transactions)
        panier_moyen = ca_total / len(self.transactions)
        
        print(f"\\n📊 STATISTIQUES GÉNÉRALES:")
        print(f"CA Total: {ca_total:,.0f}€")
        print(f"Panier moyen: {panier_moyen:.2f}€")
        print(f"Nombre de clients: {len(self.clients)}")
        print(f"Nombre de transactions: {len(self.transactions)}")

# Simulation avec des données d'exemple
analyseur = AnalyseurEcommerce()

# Données de test
transactions_test = [
    ('C001', ['Laptop', 'Souris', 'Clavier'], 1200, datetime(2023, 1, 15)),
    ('C002', ['Smartphone', 'Coque', 'Écouteurs'], 800, datetime(2023, 1, 20)),
    ('C001', ['Écran', 'Câble HDMI'], 300, datetime(2023, 2, 10)),
    ('C003', ['Tablet', 'Stylet'], 500, datetime(2023, 1, 25)),
    ('C002', ['Chargeur', 'Batterie externe'], 80, datetime(2023, 2, 15)),
]

for transaction in transactions_test:
    analyseur.ajouter_transaction(*transaction)

analyseur.generer_rapport()

# Test recommandations
print(f"\\n🎯 RECOMMANDATIONS pour ['Laptop']:")
reco = analyseur.recommander_produits(['Laptop'])
for produit, score in reco:
    print(f"• {produit} (score: {score})")`}),e.jsx(l,{id:"ex4",title:"📈 Dashboard Automatisé de KPIs",difficulty:"Intermédiaire",duration:"75 min",description:"Créez un dashboard qui lit des données de différentes sources, calcule des KPIs métier et génère des alertes automatiques.",skills:["Pandas","Matplotlib","Fonctions avancées","Gestion fichiers"],hints:["Utilisez pandas pour lire différents formats (CSV, Excel)","Créez des fonctions pour chaque KPI","Implémentez un système d'alertes avec seuils","Générez des graphiques automatiquement"],solution:`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta
import numpy as np

class DashboardKPIs:
    def __init__(self):
        self.data = {}
        self.kpis = {}
        self.alertes = []
        self.seuils = {
            'taux_conversion': {'min': 2.0, 'max': 10.0},
            'cao_mensuel': {'min': 5000, 'max': None},
            'taux_churn': {'min': None, 'max': 5.0},
            'satisfaction_client': {'min': 4.0, 'max': None}
        }
    
    def charger_donnees(self):
        # Simulation de données réelles
        np.random.seed(42)
        
        # Données de ventes
        dates = pd.date_range('2023-01-01', '2023-12-31', freq='D')
        self.data['ventes'] = pd.DataFrame({
            'date': dates,
            'ventes': np.random.poisson(50, len(dates)) * np.random.uniform(20, 200, len(dates)),
            'visiteurs': np.random.poisson(2000, len(dates)),
            'conversions': np.random.poisson(80, len(dates))
        })
        
        # Données clients
        self.data['clients'] = pd.DataFrame({
            'client_id': range(1, 1001),
            'date_inscription': pd.date_range('2022-01-01', '2023-12-31', periods=1000),
            'date_derniere_commande': pd.date_range('2023-01-01', '2023-12-31', periods=1000),
            'satisfaction': np.random.uniform(1, 5, 1000),
            'clv': np.random.exponential(500, 1000)
        })
        
        print("✅ Données chargées avec succès")
    
    def calculer_kpis(self):
        print("\\n🔄 Calcul des KPIs en cours...")
        
        # KPI 1: Taux de conversion
        total_visiteurs = self.data['ventes']['visiteurs'].sum()
        total_conversions = self.data['ventes']['conversions'].sum()
        self.kpis['taux_conversion'] = (total_conversions / total_visiteurs) * 100
        
        # KPI 2: CA mensuel moyen
        ventes_mensuelles = self.data['ventes'].groupby(
            self.data['ventes']['date'].dt.to_period('M')
        )['ventes'].sum()
        self.kpis['cao_mensuel'] = ventes_mensuelles.mean()
        
        # KPI 3: Taux de churn (clients inactifs > 90 jours)
        date_limite = datetime.now() - timedelta(days=90)
        clients_actifs = (self.data['clients']['date_derniere_commande'] > date_limite).sum()
        self.kpis['taux_churn'] = ((len(self.data['clients']) - clients_actifs) / len(self.data['clients'])) * 100
        
        # KPI 4: Satisfaction client moyenne
        self.kpis['satisfaction_client'] = self.data['clients']['satisfaction'].mean()
        
        # KPI 5: CLV moyenne
        self.kpis['clv_moyenne'] = self.data['clients']['clv'].mean()
        
        print("✅ KPIs calculés")
    
    def generer_alertes(self):
        self.alertes = []
        
        for kpi, valeur in self.kpis.items():
            if kpi in self.seuils:
                seuil = self.seuils[kpi]
                
                if seuil['min'] and valeur < seuil['min']:
                    self.alertes.append({
                        'type': 'warning',
                        'kpi': kpi,
                        'valeur': valeur,
                        'message': f"{kpi} en dessous du seuil minimum ({valeur:.2f} < {seuil['min']})"
                    })
                
                if seuil['max'] and valeur > seuil['max']:
                    self.alertes.append({
                        'type': 'warning',
                        'kpi': kpi,
                        'valeur': valeur,
                        'message': f"{kpi} au-dessus du seuil maximum ({valeur:.2f} > {seuil['max']})"
                    })
    
    def creer_visualisations(self):
        fig, axes = plt.subplots(2, 2, figsize=(15, 10))
        fig.suptitle('Dashboard KPIs - Vue d\\'ensemble', fontsize=16, fontweight='bold')
        
        # Graphique 1: Évolution des ventes
        ventes_quotidiennes = self.data['ventes'].set_index('date')['ventes'].resample('W').sum()
        axes[0, 0].plot(ventes_quotidiennes.index, ventes_quotidiennes.values, linewidth=2)
        axes[0, 0].set_title('Évolution des ventes hebdomadaires')
        axes[0, 0].set_ylabel('Ventes (€)')
        
        # Graphique 2: Distribution satisfaction
        axes[0, 1].hist(self.data['clients']['satisfaction'], bins=20, alpha=0.7, color='skyblue')
        axes[0, 1].axvline(self.kpis['satisfaction_client'], color='red', linestyle='--', 
                          label=f'Moyenne: {self.kpis["satisfaction_client"]:.2f}')
        axes[0, 1].set_title('Distribution de la satisfaction client')
        axes[0, 1].set_xlabel('Score de satisfaction')
        axes[0, 1].legend()
        
        # Graphique 3: Taux de conversion mensuel
        conv_mensuel = self.data['ventes'].groupby(
            self.data['ventes']['date'].dt.to_period('M')
        ).apply(lambda x: (x['conversions'].sum() / x['visiteurs'].sum()) * 100)
        axes[1, 0].bar(range(len(conv_mensuel)), conv_mensuel.values, alpha=0.7, color='green')
        axes[1, 0].set_title('Taux de conversion mensuel')
        axes[1, 0].set_ylabel('Taux de conversion (%)')
        
        # Graphique 4: KPIs principaux
        kpis_display = ['taux_conversion', 'cao_mensuel', 'taux_churn', 'satisfaction_client']
        valeurs = [self.kpis[k] for k in kpis_display]
        axes[1, 1].bar(kpis_display, valeurs, alpha=0.7, color=['blue', 'green', 'orange', 'purple'])
        axes[1, 1].set_title('KPIs Principaux')
        axes[1, 1].tick_params(axis='x', rotation=45)
        
        plt.tight_layout()
        plt.show()
    
    def generer_rapport(self):
        print("\\n" + "="*50)
        print("📊 DASHBOARD KPIs - RAPPORT AUTOMATISÉ")
        print("="*50)
        print(f"📅 Généré le: {datetime.now().strftime('%d/%m/%Y à %H:%M')}")
        
        print(f"\\n📈 KPIs PRINCIPAUX:")
        print(f"• Taux de conversion: {self.kpis['taux_conversion']:.2f}%")
        print(f"• CA mensuel moyen: {self.kpis['cao_mensuel']:,.0f}€")
        print(f"• Taux de churn: {self.kpis['taux_churn']:.2f}%")
        print(f"• Satisfaction client: {self.kpis['satisfaction_client']:.2f}/5")
        print(f"• CLV moyenne: {self.kpis['clv_moyenne']:.0f}€")
        
        # Alertes
        if self.alertes:
            print(f"\\n🚨 ALERTES ({len(self.alertes)}):")
            for alerte in self.alertes:
                print(f"⚠️ {alerte['message']}")
        else:
            print(f"\\n✅ Aucune alerte - Tous les KPIs dans les normes")
        
        # Recommandations automatiques
        print(f"\\n💡 RECOMMANDATIONS:")
        if self.kpis['taux_conversion'] < 3:
            print("• Optimiser le funnel de conversion (landing pages, checkout)")
        if self.kpis['taux_churn'] > 10:
            print("• Mettre en place une campagne de réactivation client")
        if self.kpis['satisfaction_client'] < 3.5:
            print("• Analyser les points de friction dans l'expérience client")
        if len(self.alertes) == 0:
            print("• Continuer la stratégie actuelle, les résultats sont bons")
    
    def executer_dashboard(self):
        print("🚀 Lancement du Dashboard KPIs...")
        self.charger_donnees()
        self.calculer_kpis()
        self.generer_alertes()
        self.generer_rapport()
        self.creer_visualisations()

# Exécution du dashboard
dashboard = DashboardKPIs()
dashboard.executer_dashboard()`})]}),e.jsx(y,{value:"advanced",className:"space-y-6",children:e.jsx(l,{id:"ex5",title:"🤖 Système de Prédiction de Churn",difficulty:"Avancé",duration:"120 min",description:"Développez un système complet de machine learning pour prédire le churn client avec preprocessing, entraînement, évaluation et déploiement.",skills:["ML Pipeline","Feature Engineering","Model Selection","Évaluation"],hints:["Créez des features temporelles et comportementales","Testez plusieurs algorithmes (Random Forest, XGBoost, etc.)","Utilisez la validation croisée pour l'évaluation","Implémentez un système de scoring en temps réel"],solution:`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score, roc_curve
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')

class PredicteurChurn:
    def __init__(self):
        self.modeles = {}
        self.scaler = StandardScaler()
        self.label_encoders = {}
        self.feature_importance = None
        
    def generer_donnees_clients(self, n_clients=5000):
        """Génère un dataset réaliste de clients"""
        np.random.seed(42)
        
        # Features de base
        data = {
            'client_id': range(1, n_clients + 1),
            'age': np.random.normal(35, 12, n_clients).astype(int),
            'anciennete_mois': np.random.exponential(24, n_clients).astype(int),
            'nb_commandes_total': np.random.poisson(15, n_clients),
            'montant_total_depense': np.random.exponential(800, n_clients),
            'panier_moyen': np.random.normal(85, 30, n_clients),
            'jours_depuis_derniere_commande': np.random.exponential(30, n_clients).astype(int),
            'nb_retours': np.random.poisson(2, n_clients),
            'score_satisfaction': np.random.normal(3.5, 1, n_clients),
            'canal_acquisition': np.random.choice(['web', 'mobile', 'magasin', 'social'], n_clients),
            'categorie_prefere': np.random.choice(['electromenager', 'vetements', 'sport', 'beaute'], n_clients),
            'utilise_app_mobile': np.random.choice([0, 1], n_clients, p=[0.3, 0.7]),
            'abonne_newsletter': np.random.choice([0, 1], n_clients, p=[0.4, 0.6])
        }
        
        df = pd.DataFrame(data)
        
        # Nettoyage des données aberrantes
        df['age'] = df['age'].clip(18, 80)
        df['score_satisfaction'] = df['score_satisfaction'].clip(1, 5)
        df['anciennete_mois'] = df['anciennete_mois'].clip(1, 120)
        
        # Feature engineering
        df['freq_commande_mensuelle'] = df['nb_commandes_total'] / df['anciennete_mois']
        df['taux_retour'] = df['nb_retours'] / df['nb_commandes_total'].replace(0, 1)
        df['clv_estimee'] = df['montant_total_depense'] / df['anciennete_mois'] * 12
        df['inactif_longue_duree'] = (df['jours_depuis_derniere_commande'] > 60).astype(int)
        
        # Génération du target (churn) basé sur des règles métier réalistes
        churn_prob = (
            0.1 +  # baseline
            0.3 * (df['jours_depuis_derniere_commande'] > 90) +
            0.2 * (df['score_satisfaction'] < 2.5) +
            0.15 * (df['freq_commande_mensuelle'] < 0.5) +
            0.1 * (df['taux_retour'] > 0.3) +
            -0.1 * df['utilise_app_mobile'] +
            -0.05 * df['abonne_newsletter']
        ).clip(0, 0.8)
        
        df['churn'] = np.random.binomial(1, churn_prob, n_clients)
        
        return df
    
    def preprocesser_donnees(self, df):
        """Préprocessing des données"""
        print("🔄 Préprocessing des données...")
        
        # Copie pour éviter de modifier l'original
        df_processed = df.copy()
        
        # Encodage des variables catégorielles
        categorical_cols = ['canal_acquisition', 'categorie_prefere']
        for col in categorical_cols:
            if col not in self.label_encoders:
                self.label_encoders[col] = LabelEncoder()
                df_processed[col] = self.label_encoders[col].fit_transform(df_processed[col])
            else:
                df_processed[col] = self.label_encoders[col].transform(df_processed[col])
        
        # Gestion des valeurs manquantes (si applicable)
        df_processed = df_processed.fillna(df_processed.mean())
        
        return df_processed
    
    def analyser_donnees(self, df):
        """Analyse exploratoire des données"""
        print("\\n📊 ANALYSE EXPLORATOIRE")
        print("="*40)
        
        # Taux de churn global
        taux_churn = df['churn'].mean() * 100
        print(f"📈 Taux de churn global: {taux_churn:.1f}%")
        
        # Corrélations avec le churn
        correlations = df.select_dtypes(include=[np.number]).corr()['churn'].abs().sort_values(ascending=False)
        print(f"\\n🔗 Top 5 variables corrélées au churn:")
        for var, corr in correlations.head(6)[1:].items():  # Exclure churn lui-même
            print(f"• {var}: {corr:.3f}")
        
        # Visualisations
        fig, axes = plt.subplots(2, 2, figsize=(15, 10))
        
        # Distribution des variables importantes
        axes[0, 0].hist([df[df['churn']==0]['jours_depuis_derniere_commande'], 
                        df[df['churn']==1]['jours_depuis_derniere_commande']], 
                       bins=30, alpha=0.7, label=['Non churn', 'Churn'])
        axes[0, 0].set_title('Jours depuis dernière commande')
        axes[0, 0].legend()
        
        # Satisfaction par statut churn
        df.boxplot(column='score_satisfaction', by='churn', ax=axes[0, 1])
        axes[0, 1].set_title('Satisfaction par statut churn')
        
        # Fréquence de commande
        df.boxplot(column='freq_commande_mensuelle', by='churn', ax=axes[1, 0])
        axes[1, 0].set_title('Fréquence de commande par statut churn')
        
        # Matrice de corrélation (top variables)
        top_vars = correlations.head(8).index.tolist()
        corr_matrix = df[top_vars].corr()
        sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0, ax=axes[1, 1])
        axes[1, 1].set_title('Corrélations variables importantes')
        
        plt.tight_layout()
        plt.show()
    
    def entrainer_modeles(self, X_train, X_test, y_train, y_test):
        """Entraînement et comparaison de plusieurs modèles"""
        print("\\n🤖 ENTRAÎNEMENT DES MODÈLES")
        print("="*40)
        
        # Définition des modèles
        modeles_config = {
            'Logistic Regression': LogisticRegression(random_state=42),
            'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
            'Gradient Boosting': GradientBoostingClassifier(random_state=42)
        }
        
        resultats = {}
        
        for nom, modele in modeles_config.items():
            print(f"\\n📚 Entraînement {nom}...")
            
            # Entraînement
            modele.fit(X_train, y_train)
            
            # Prédictions
            y_pred = modele.predict(X_test)
            y_pred_proba = modele.predict_proba(X_test)[:, 1]
            
            # Métriques
            auc_score = roc_auc_score(y_test, y_pred_proba)
            cv_scores = cross_val_score(modele, X_train, y_train, cv=5, scoring='roc_auc')
            
            resultats[nom] = {
                'modele': modele,
                'auc': auc_score,
                'cv_mean': cv_scores.mean(),
                'cv_std': cv_scores.std(),
                'predictions': y_pred,
                'probabilities': y_pred_proba
            }
            
            print(f"✅ AUC: {auc_score:.3f}")
            print(f"📊 CV Score: {cv_scores.mean():.3f} (+/- {cv_scores.std()*2:.3f})")
        
        # Sélection du meilleur modèle
        meilleur_modele = max(resultats.keys(), key=lambda x: resultats[x]['auc'])
        self.modeles = resultats
        self.meilleur_modele = meilleur_modele
        
        print(f"\\n🏆 Meilleur modèle: {meilleur_modele} (AUC: {resultats[meilleur_modele]['auc']:.3f})")
        
        return resultats
    
    def evaluer_modele(self, X_test, y_test):
        """Évaluation détaillée du meilleur modèle"""
        print(f"\\n📊 ÉVALUATION DÉTAILLÉE - {self.meilleur_modele}")
        print("="*50)
        
        modele_info = self.modeles[self.meilleur_modele]
        y_pred = modele_info['predictions']
        y_pred_proba = modele_info['probabilities']
        
        # Rapport de classification
        print("📋 Rapport de classification:")
        print(classification_report(y_test, y_pred))
        
        # Matrice de confusion
        cm = confusion_matrix(y_test, y_pred)
        print(f"\\n🎯 Matrice de confusion:")
        print(cm)
        
        # Importance des features (si disponible)
        if hasattr(modele_info['modele'], 'feature_importances_'):
            feature_names = [f'feature_{i}' for i in range(len(modele_info['modele'].feature_importances_))]
            importances = pd.DataFrame({
                'feature': feature_names,
                'importance': modele_info['modele'].feature_importances_
            }).sort_values('importance', ascending=False)
            
            self.feature_importance = importances
            
            print(f"\\n🔍 Top 10 features importantes:")
            for idx, row in importances.head(10).iterrows():
                print(f"• {row['feature']}: {row['importance']:.3f}")
        
        # Courbe ROC
        plt.figure(figsize=(12, 5))
        
        plt.subplot(1, 2, 1)
        fpr, tpr, _ = roc_curve(y_test, y_pred_proba)
        plt.plot(fpr, tpr, linewidth=2, label=f'ROC Curve (AUC = {modele_info["auc"]:.3f})')
        plt.plot([0, 1], [0, 1], 'k--', linewidth=1)
        plt.xlabel('Taux de Faux Positifs')
        plt.ylabel('Taux de Vrais Positifs')
        plt.title('Courbe ROC')
        plt.legend()
        plt.grid(True)
        
        # Distribution des scores de prédiction
        plt.subplot(1, 2, 2)
        plt.hist([y_pred_proba[y_test==0], y_pred_proba[y_test==1]], 
                bins=30, alpha=0.7, label=['Non churn', 'Churn'])
        plt.xlabel('Score de probabilité de churn')
        plt.ylabel('Fréquence')
        plt.title('Distribution des scores de prédiction')
        plt.legend()
        plt.grid(True)
        
        plt.tight_layout()
        plt.show()
    
    def predire_churn_client(self, donnees_client):
        """Prédiction pour un client spécifique"""
        modele = self.modeles[self.meilleur_modele]['modele']
        
        # Preprocessing des données du client
        donnees_processed = self.preprocesser_donnees(pd.DataFrame([donnees_client]))
        
        # Sélection des features utilisées pour l'entraînement
        features_cols = [col for col in donnees_processed.columns if col not in ['client_id', 'churn']]
        X_client = donnees_processed[features_cols]
        
        # Prédiction
        proba_churn = modele.predict_proba(X_client)[0, 1]
        prediction = modele.predict(X_client)[0]
        
        return {
            'probabilite_churn': proba_churn,
            'prediction': 'Churn' if prediction == 1 else 'Fidèle',
            'risque': 'Élevé' if proba_churn > 0.7 else 'Modéré' if proba_churn > 0.3 else 'Faible'
        }
    
    def pipeline_complet(self):
        """Exécution du pipeline complet"""
        print("🚀 LANCEMENT DU PIPELINE DE PRÉDICTION DE CHURN")
        print("="*60)
        
        # 1. Génération des données
        print("1️⃣ Génération des données...")
        df = self.generer_donnees_clients()
        
        # 2. Analyse exploratoire
        self.analyser_donnees(df)
        
        # 3. Préprocessing
        df_processed = self.preprocesser_donnees(df)
        
        # 4. Préparation train/test
        feature_cols = [col for col in df_processed.columns if col not in ['client_id', 'churn']]
        X = df_processed[feature_cols]
        y = df_processed['churn']
        
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Scaling
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        # 5. Entraînement des modèles
        self.entrainer_modeles(X_train_scaled, X_test_scaled, y_train, y_test)
        
        # 6. Évaluation
        self.evaluer_modele(X_test_scaled, y_test)
        
        # 7. Test sur un client exemple
        print("\\n🧪 TEST SUR UN CLIENT EXEMPLE")
        print("="*35)
        
        client_test = {
            'age': 45,
            'anciennete_mois': 36,
            'nb_commandes_total': 8,
            'montant_total_depense': 450,
            'panier_moyen': 56,
            'jours_depuis_derniere_commande': 120,
            'nb_retours': 3,
            'score_satisfaction': 2.1,
            'canal_acquisition': 'web',
            'categorie_prefere': 'electromenager',
            'utilise_app_mobile': 0,
            'abonne_newsletter': 1,
            'freq_commande_mensuelle': 8/36,
            'taux_retour': 3/8,
            'clv_estimee': (450/36)*12,
            'inactif_longue_duree': 1
        }
        
        resultat = self.predire_churn_client(client_test)
        print(f"👤 Client test - Probabilité de churn: {resultat['probabilite_churn']:.1%}")
        print(f"🎯 Prédiction: {resultat['prediction']}")
        print(f"⚠️ Niveau de risque: {resultat['risque']}")
        
        return df, self.modeles

# Exécution du système complet
predicteur = PredicteurChurn()
donnees, modeles = predicteur.pipeline_complet()`})})]}),e.jsxs("div",{className:"mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200",children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx(Ie,{className:"h-6 w-6 text-purple-600"}),"Système de Progression"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-green-600",children:t.size}),e.jsx("div",{className:"text-sm text-gray-600",children:"Exercices terminés"})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[Math.round(t.size/5*100),"%"]}),e.jsx("div",{className:"text-sm text-gray-600",children:"Progression"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:t.size>=3?"Expert":t.size>=1?"Intermédiaire":"Débutant"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Niveau atteint"})]})]}),t.size>=5&&e.jsxs("div",{className:"mt-4 p-4 bg-yellow-100 rounded-lg border border-yellow-300",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"🎉 Félicitations !"}),e.jsx("p",{className:"text-sm text-yellow-700",children:"Vous avez terminé tous les exercices ! Vous êtes maintenant prêt à tackler des projets de data science réels. Continuez avec les sections Machine Learning et projets avancés !"})]})]})]})},gs=()=>{const t={livres:[{title:"Python for Data Analysis",auteur:"Wes McKinney",niveau:"Débutant-Intermédiaire",prix:"Gratuit en ligne",description:"LA référence pour pandas et l'analyse de données en Python",url:"https://wesmckinney.com/book/",rating:5,specialite:["Python","Pandas","NumPy"]},{title:"Hands-On Machine Learning",auteur:"Aurélien Géron",niveau:"Intermédiaire-Avancé",prix:"~40€",description:"Guide pratique complet du ML avec Python (scikit-learn, TensorFlow)",url:"https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",rating:5,specialite:["Machine Learning","TensorFlow","Scikit-learn"]},{title:"R for Data Science",auteur:"Hadley Wickham",niveau:"Débutant-Intermédiaire",prix:"Gratuit en ligne",description:"Guide complet pour maîtriser R et le tidyverse",url:"https://r4ds.hadley.nz/",rating:5,specialite:["R","Tidyverse","ggplot2"]},{title:"SQL for Data Scientists",auteur:"Renee M. P. Teate",niveau:"Débutant-Intermédiaire",prix:"~35€",description:"SQL spécialement orienté pour l'analyse de données",url:"https://www.oreilly.com/library/view/sql-for-data/9781119669364/",rating:4,specialite:["SQL","Bases de données","Analytics"]}],plateformes:[{nom:"DataCamp",type:"Interactif",prix:"29€/mois",description:"Cours interactifs spécialisés en data science avec exercices pratiques",avantages:["Projets réels","Certificats","Communauté active"],url:"https://www.datacamp.com/",rating:4,specialites:["Python","R","SQL","Machine Learning"]},{nom:"Kaggle Learn",type:"Gratuit",prix:"Gratuit",description:"Micro-cours gratuits avec focus sur la pratique et les compétitions",avantages:["Datasets réels","Communauté mondiale","Compétitions"],url:"https://www.kaggle.com/learn",rating:5,specialites:["Python","Machine Learning","Deep Learning","SQL"]},{nom:"Coursera",type:"Académique",prix:"39-79€/mois",description:"Cours universitaires de Stanford, IBM, Google avec projets",avantages:["Diplômes reconnus","Projets encadrés","Mentoring"],url:"https://www.coursera.org/browse/data-science",rating:4,specialites:["Tout spectre DS","Certificats pro","Spécialisations"]},{nom:"Fast.ai",type:"Pratique",prix:"Gratuit",description:"Approche top-down du deep learning avec applications concrètes",avantages:["Projets impressionnants","Méthode unique","Communauté forte"],url:"https://www.fast.ai/",rating:5,specialites:["Deep Learning","Computer Vision","NLP"]}],youtube:[{chaine:"3Blue1Brown",specialite:"Mathématiques visuelles",description:"Explications visuelles brillantes des concepts mathématiques",subscribers:"4.8M",mustWatch:["Linear Algebra","Neural Networks","Calculus"],url:"https://www.youtube.com/c/3blue1brown"},{chaine:"Corey Schafer",specialite:"Python pratique",description:"Tutoriels Python clairs et détaillés pour tous niveaux",subscribers:"1.2M",mustWatch:["Python OOP","Pandas","Matplotlib"],url:"https://www.youtube.com/user/schafer5"},{chaine:"StatQuest",specialite:"Stats & ML",description:"Concepts statistiques et ML expliqués simplement avec humour",subscribers:"800K",mustWatch:["Random Forest","Neural Networks","Statistics"],url:"https://www.youtube.com/user/joshstarmer"},{chaine:"Data School",specialite:"Data Science Python",description:"Tutoriels pratiques pandas, scikit-learn et outils DS",subscribers:"200K",mustWatch:["Pandas tricks","Machine Learning","Data cleaning"],url:"https://www.youtube.com/user/dataschool"}],communautes:[{nom:"Stack Overflow",type:"Q&A",description:"LA référence pour poser des questions techniques",pourquoi:"Solutions rapides, communauté massive, historique complet",tags:["python","pandas","r","sql","machine-learning"],url:"https://stackoverflow.com/"},{nom:"Reddit - r/MachineLearning",type:"Forum",description:"Discussions sur les dernières avancées en ML/AI",pourquoi:"Papers récents, discussions d'experts, trends",membres:"2.1M",url:"https://www.reddit.com/r/MachineLearning/"},{nom:"Kaggle",type:"Compétition",description:"Compétitions DS, datasets et notebooks partagés",pourquoi:"Pratique réelle, notebooks d'experts, datasets variés",competitions:"Active",url:"https://www.kaggle.com/"},{nom:"Data Science Central",type:"Réseau",description:"Articles, jobs et networking en data science",pourquoi:"Veille technologique, opportunités carrière",membres:"700K+",url:"https://www.datasciencecentral.com/"}]},i=({ressource:s,type:n})=>{const r=()=>{switch(n){case"livre":return e.jsx(Ve,{className:"h-5 w-5"});case"plateforme":return e.jsx(le,{className:"h-5 w-5"});case"youtube":return e.jsx(le,{className:"h-5 w-5"});case"communaute":return e.jsx(Y,{className:"h-5 w-5"});default:return e.jsx(J,{className:"h-5 w-5"})}},l=Array.isArray(s.specialite)?s.specialite:Array.isArray(s.specialites)?s.specialites:[];return e.jsxs(u,{className:"h-full hover:shadow-lg transition-all duration-300",children:[e.jsxs(x,{children:[e.jsxs(h,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[r(),e.jsx("span",{className:"text-lg",children:s.title||s.nom||s.chaine})]}),s.rating&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ke,{className:"h-4 w-4 fill-yellow-400 text-yellow-400"}),e.jsx("span",{className:"text-sm font-semibold",children:s.rating})]})]}),s.auteur&&e.jsxs("p",{className:"text-sm text-gray-600",children:["par ",s.auteur]})]}),e.jsxs(f,{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",children:s.description}),s.niveau&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{variant:"outline",children:s.niveau}),s.prix&&e.jsx(b,{className:s.prix==="Gratuit"||s.prix==="Gratuit en ligne"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800",children:s.prix})]}),l.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold",children:"Spécialités :"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:l.map(o=>e.jsx(b,{variant:"secondary",className:"text-xs",children:o},o))})]}),s.avantages&&Array.isArray(s.avantages)&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold",children:"Avantages :"}),e.jsx("ul",{className:"text-xs space-y-1",children:s.avantages.map((o,c)=>e.jsxs("li",{children:["• ",o]},c))})]}),s.mustWatch&&Array.isArray(s.mustWatch)&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold",children:"À regarder absolument :"}),e.jsx("ul",{className:"text-xs space-y-1",children:s.mustWatch.map((o,c)=>e.jsxs("li",{children:["• ",o]},c))})]}),s.subscribers&&e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(Y,{className:"h-4 w-4"}),e.jsxs("span",{children:[s.subscribers," abonnés"]})]}),s.membres&&e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(Y,{className:"h-4 w-4"}),e.jsxs("span",{children:[s.membres," membres"]})]}),e.jsx(w,{asChild:!0,className:"w-full mt-auto",children:e.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2",children:[e.jsx(ze,{className:"h-4 w-4"}),"Accéder à la ressource"]})})]})]})};return e.jsxs("section",{id:"resources",className:"mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"📚 Ressources d'Apprentissage : Votre Bibliothèque de Croissance"}),e.jsx(A,{title:"🎯 Comment utiliser ces ressources efficacement ?",type:"concept",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"👶 Si vous débutez :"}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"Commencez par Kaggle Learn (gratuit)"}),e.jsx("li",{children:'Lisez "Python for Data Analysis" en parallèle'}),e.jsx("li",{children:"Regardez 3Blue1Brown pour les maths"}),e.jsx("li",{children:"Pratiquez avec les datasets Kaggle"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🚀 Si vous avez des bases :"}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"Investissez dans DataCamp ou Coursera"}),e.jsx("li",{children:"Rejoignez les communautés Reddit/Stack Overflow"}),e.jsx("li",{children:"Participez aux compétitions Kaggle"}),e.jsx("li",{children:"Construisez un portfolio sur GitHub"})]})]})]})}),e.jsxs(k,{defaultValue:"livres",className:"space-y-6",children:[e.jsxs(z,{className:"grid grid-cols-2 md:grid-cols-4 w-full",children:[e.jsx(j,{value:"livres",children:"📖 Livres"}),e.jsx(j,{value:"plateformes",children:"🎓 Plateformes"}),e.jsx(j,{value:"youtube",children:"📺 YouTube"}),e.jsx(j,{value:"communautes",children:"👥 Communautés"})]}),e.jsxs(y,{value:"livres",className:"space-y-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"📖 Livres Incontournables"}),e.jsx("p",{className:"text-gray-600",children:"Sélection des ouvrages les plus recommandés par la communauté data science mondiale."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.livres.map((s,n)=>e.jsx(i,{ressource:s,type:"livre"},n))}),e.jsxs(A,{title:"💡 Conseil de lecture",type:"info",children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Ne lisez pas tout d'un coup !"})," Alternez entre théorie et pratique. Lisez un chapitre, puis implémentez les concepts sur un petit projet."]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded text-sm",children:[e.jsx("strong",{children:"Ordre recommandé :"})," Python for Data Analysis → Hands-On ML → livre spécialisé selon votre domaine"]})]})]}),e.jsxs(y,{value:"plateformes",className:"space-y-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"🎓 Plateformes d'Apprentissage"}),e.jsx("p",{className:"text-gray-600",children:"Comparaison des meilleures plateformes pour apprendre la data science en ligne."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.plateformes.map((s,n)=>e.jsx(i,{ressource:s,type:"plateforme"},n))}),e.jsxs("div",{className:"mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"🎯 Guide de choix de plateforme"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Budget serré :"})," Kaggle Learn + YouTube"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Apprentissage structuré :"})," DataCamp ou Coursera"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deep Learning focus :"})," Fast.ai"]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Certificats professionnels :"})," Coursera"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Pratique intensive :"})," DataCamp"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Projets portfolio :"})," Kaggle + GitHub"]})]})]})]})]}),e.jsxs(y,{value:"youtube",className:"space-y-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"📺 Chaînes YouTube Exceptionnelles"}),e.jsx("p",{className:"text-gray-600",children:"Les créateurs qui expliquent le mieux les concepts de data science."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.youtube.map((s,n)=>e.jsx(i,{ressource:s,type:"youtube"},n))}),e.jsx(A,{title:"📺 Stratégie YouTube efficace",type:"example",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:e.jsx("strong",{children:"Routine suggérée :"})}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Matin (15 min) :"})," 3Blue1Brown pour les concepts théoriques"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pause déjeuner (20 min) :"})," Corey Schafer pour la technique Python"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Soir (30 min) :"})," StatQuest pour le ML + Data School pour la pratique"]})]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded text-sm",children:[e.jsx("strong",{children:"Pro tip :"}),' Activez les sous-titres automatiques et prenez des notes. Créez un document "Concepts appris" avec timestamps des vidéos importantes.']})]})})]}),e.jsxs(y,{value:"communautes",className:"space-y-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"👥 Communautés Incontournables"}),e.jsx("p",{className:"text-gray-600",children:"Rejoignez la conversation mondiale de la data science et accélérez votre apprentissage."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.communautes.map((s,n)=>e.jsx(i,{ressource:s,type:"communaute"},n))}),e.jsxs("div",{className:"mt-8 space-y-6",children:[e.jsx(A,{title:"🤝 Comment bien utiliser les communautés",type:"info",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold",children:"✅ Bonnes pratiques :"}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"Lisez les règles avant de poster"}),e.jsx("li",{children:"Utilisez des titres descriptifs"}),e.jsx("li",{children:"Partagez votre code et vos données d'exemple"}),e.jsx("li",{children:"Remerciez ceux qui vous aident"}),e.jsx("li",{children:"Aidez les autres quand vous le pouvez"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold",children:"❌ À éviter :"}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc pl-5",children:[e.jsx("li",{children:"Poser sans avoir cherché avant"}),e.jsx("li",{children:"Demander qu'on fasse le travail à votre place"}),e.jsx("li",{children:"Être vague dans vos questions"}),e.jsx("li",{children:"Ne pas donner de contexte"})]})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(u,{className:"border-l-4 border-l-blue-500",children:[e.jsx(x,{children:e.jsx(h,{className:"text-lg",children:"🆘 Besoin d'aide ?"})}),e.jsx(f,{className:"text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Stack Overflow"})," pour les questions techniques précises avec code d'exemple."]})})]}),e.jsxs(u,{className:"border-l-4 border-l-green-500",children:[e.jsx(x,{children:e.jsx(h,{className:"text-lg",children:"🧠 Discussions ?"})}),e.jsx(f,{className:"text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Reddit r/MachineLearning"})," pour débattre des tendances et papers récents."]})})]}),e.jsxs(u,{className:"border-l-4 border-l-purple-500",children:[e.jsx(x,{children:e.jsx(h,{className:"text-lg",children:"🏆 Compétition ?"})}),e.jsx(f,{className:"text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Kaggle"})," pour améliorer vos skills avec des défis réels et datasets quality."]})})]})]})]})]})]}),e.jsxs("div",{className:"mt-12 p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl border border-indigo-200",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4 text-indigo-900",children:"🗺️ Votre Feuille de Route d'Apprentissage"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold",children:"1"}),e.jsx("h4",{className:"font-semibold",children:"Fondations (1-2 mois)"})]}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Kaggle Learn Python"}),e.jsx("li",{children:'• "Python for Data Analysis"'}),e.jsx("li",{children:"• 3Blue1Brown Linear Algebra"})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold",children:"2"}),e.jsx("h4",{className:"font-semibold",children:"Pratique (2-3 mois)"})]}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• DataCamp ou Coursera"}),e.jsx("li",{children:"• Premier projet Kaggle"}),e.jsx("li",{children:"• Rejoindre Stack Overflow"})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold",children:"3"}),e.jsx("h4",{className:"font-semibold",children:"Spécialisation (3-4 mois)"})]}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:'• "Hands-On ML"'}),e.jsx("li",{children:"• Compétitions Kaggle"}),e.jsx("li",{children:"• Communautés spécialisées"})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold",children:"4"}),e.jsx("h4",{className:"font-semibold",children:"Expert (6+ mois)"})]}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Recherche et veille"}),e.jsx("li",{children:"• Contribution open source"}),e.jsx("li",{children:"• Mentorat d'autres apprenants"})]})]})]}),e.jsx("div",{className:"mt-6 p-4 bg-white rounded-lg border border-indigo-100",children:e.jsxs("p",{className:"text-sm text-indigo-700",children:[e.jsx("strong",{children:"💡 Rappel important :"})," La data science est un marathon, pas un sprint. Restez régulier, soyez patient avec vous-même, et célébrez chaque petite victoire ! La communauté est là pour vous accompagner. 🚀"]})})]})]})},Is=()=>e.jsxs("div",{id:"programming",className:"space-y-12",children:[e.jsx(us,{}),e.jsx(xs,{}),e.jsx(hs,{}),e.jsx(fs,{}),e.jsx(gs,{})]});export{Is as P};
