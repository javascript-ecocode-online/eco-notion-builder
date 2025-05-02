var Ee=e=>{throw TypeError(e)};var Oe=(e,t,o)=>t.has(e)||Ee("Cannot "+o);var G=(e,t,o)=>(Oe(e,t,"read from private field"),o?o.call(e):t.get(e)),jt=(e,t,o)=>t.has(e)?Ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o);var Pe=(e,t,o)=>(Oe(e,t,"access private method"),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=globalThis,me=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),Te=new WeakMap;let Ye=class{constructor(t,o,r){if(this._$cssResult$=!0,r!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(me&&t===void 0){const r=o!==void 0&&o.length===1;r&&(t=Te.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Te.set(o,t))}return t}toString(){return this.cssText}};const tr=e=>new Ye(typeof e=="string"?e:e+"",void 0,ge),y=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Ye(o,e,ge)},er=(e,t)=>{if(me)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const r=document.createElement("style"),s=xt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=o.cssText,e.appendChild(r)}},Ie=me?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const r of t.cssRules)o+=r.cssText;return tr(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:or,defineProperty:rr,getOwnPropertyDescriptor:sr,getOwnPropertyNames:ir,getOwnPropertySymbols:nr,getPrototypeOf:ar}=Object,R=globalThis,Le=R.trustedTypes,lr=Le?Le.emptyScript:"",Ht=R.reactiveElementPolyfillSupport,lt=(e,t)=>e,Et={toAttribute(e,t){switch(t){case Boolean:e=e?lr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},ye=(e,t)=>!or(e,t),Ne={attribute:!0,type:String,converter:Et,reflect:!1,hasChanged:ye};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=Ne){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(t,o),!o.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,o);s!==void 0&&rr(this.prototype,t,s)}}static getPropertyDescriptor(t,o,r){const{get:s,set:i}=sr(this.prototype,t)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);i.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ne}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=ar(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const o=this.properties,r=[...ir(o),...nr(o)];for(const s of r)this.createProperty(s,o[s])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[r,s]of o)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const s=this._$Eu(o,r);s!==void 0&&this._$Eh.set(s,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)o.unshift(Ie(s))}else t!==void 0&&o.push(Ie(t));return o}static _$Eu(t,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(o=>o(this))}addController(t){var o;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)==null||o.call(t))}removeController(t){var o;(o=this._$EO)==null||o.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const r of o.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return er(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(o=>{var r;return(r=o.hostConnected)==null?void 0:r.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(o=>{var r;return(r=o.hostDisconnected)==null?void 0:r.call(o)})}attributeChangedCallback(t,o,r){this._$AK(t,r)}_$EC(t,o){var i;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Et).toAttribute(o,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,o){var i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:Et;this._$Em=s,this[s]=a.fromAttribute(o,n.type),this._$Em=null}}requestUpdate(t,o,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ye)(this[t],o))return;this.P(t,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,o,r){this._$AL.has(t)||this._$AL.set(t,o),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(o)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(o)}willUpdate(t){}_$AE(t){var o;(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(t){}firstUpdated(t){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[lt("elementProperties")]=new Map,K[lt("finalized")]=new Map,Ht==null||Ht({ReactiveElement:K}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=globalThis,Ot=ct.trustedTypes,ze=Ot?Ot.createPolicy("lit-html",{createHTML:e=>e}):void 0,Xe="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,to="?"+M,cr=`<${to}>`,F=document,dt=()=>F.createComment(""),ht=e=>e===null||typeof e!="object"&&typeof e!="function",_e=Array.isArray,ur=e=>_e(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Gt=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,Re=/>/g,D=RegExp(`>|${Gt}(?:([^\\s"'>=/]+)(${Gt}*=${Gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,Ue=/"/g,eo=/^(?:script|style|textarea|title)$/i,dr=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),b=dr(1),W=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),De=new WeakMap,q=F.createTreeWalker(F,129);function oo(e,t){if(!_e(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ze!==void 0?ze.createHTML(t):t}const hr=(e,t)=>{const o=e.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",n=ot;for(let a=0;a<o;a++){const c=e[a];let d,f,h=-1,$=0;for(;$<c.length&&(n.lastIndex=$,f=n.exec(c),f!==null);)$=n.lastIndex,n===ot?f[1]==="!--"?n=Me:f[1]!==void 0?n=Re:f[2]!==void 0?(eo.test(f[2])&&(s=RegExp("</"+f[2],"g")),n=D):f[3]!==void 0&&(n=D):n===D?f[0]===">"?(n=s??ot,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,d=f[1],n=f[3]===void 0?D:f[3]==='"'?Ue:Ve):n===Ue||n===Ve?n=D:n===Me||n===Re?n=ot:(n=D,s=void 0);const T=n===D&&e[a+1].startsWith("/>")?" ":"";i+=n===ot?c+cr:h>=0?(r.push(d),c.slice(0,h)+Xe+c.slice(h)+M+T):c+M+(h===-2?a:T)}return[oo(e,i+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class pt{constructor({strings:t,_$litType$:o},r){let s;this.parts=[];let i=0,n=0;const a=t.length-1,c=this.parts,[d,f]=hr(t,o);if(this.el=pt.createElement(d,r),q.currentNode=this.el.content,o===2||o===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=q.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Xe)){const $=f[n++],T=s.getAttribute(h).split(M),H=/([.?@])?(.*)/.exec($);c.push({type:1,index:i,name:H[2],strings:T,ctor:H[1]==="."?fr:H[1]==="?"?br:H[1]==="@"?vr:Ut}),s.removeAttribute(h)}else h.startsWith(M)&&(c.push({type:6,index:i}),s.removeAttribute(h));if(eo.test(s.tagName)){const h=s.textContent.split(M),$=h.length-1;if($>0){s.textContent=Ot?Ot.emptyScript:"";for(let T=0;T<$;T++)s.append(h[T],dt()),q.nextNode(),c.push({type:2,index:++i});s.append(h[$],dt())}}}else if(s.nodeType===8)if(s.data===to)c.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(M,h+1))!==-1;)c.push({type:7,index:i}),h+=M.length-1}i++}}static createElement(t,o){const r=F.createElement("template");return r.innerHTML=t,r}}function Y(e,t,o=e,r){var n,a;if(t===W)return t;let s=r!==void 0?(n=o._$Co)==null?void 0:n[r]:o._$Cl;const i=ht(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,o,r)),r!==void 0?(o._$Co??(o._$Co=[]))[r]=s:o._$Cl=s),s!==void 0&&(t=Y(e,s._$AS(e,t.values),s,r)),t}class pr{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??F).importNode(o,!0);q.currentNode=s;let i=q.nextNode(),n=0,a=0,c=r[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new bt(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new mr(i,this,t)),this._$AV.push(d),c=r[++a]}n!==(c==null?void 0:c.index)&&(i=q.nextNode(),n++)}return q.currentNode=F,s}p(t){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,o),o+=r.strings.length-2):r._$AI(t[o])),o++}}class bt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,o,r,s){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Y(this,t,o),ht(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ur(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=pt.createElement(oo(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new pr(s,this),a=n.u(this.options);n.p(o),this.T(a),this._$AH=n}}_$AC(t){let o=De.get(t.strings);return o===void 0&&De.set(t.strings,o=new pt(t)),o}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,s=0;for(const i of t)s===o.length?o.push(r=new bt(this.O(dt()),this.O(dt()),this,this.options)):r=o[s],r._$AI(i),s++;s<o.length&&(this._$AR(r&&r._$AB.nextSibling,s),o.length=s)}_$AR(t=this._$AA.nextSibling,o){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,o);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var o;this._$AM===void 0&&(this._$Cv=t,(o=this._$AP)==null||o.call(this,t))}}class Ut{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,r,s,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=o,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}_$AI(t,o=this,r,s){const i=this.strings;let n=!1;if(i===void 0)t=Y(this,t,o,0),n=!ht(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const a=t;let c,d;for(t=i[0],c=0;c<i.length-1;c++)d=Y(this,a[r+c],o,c),d===W&&(d=this._$AH[c]),n||(n=!ht(d)||d!==this._$AH[c]),d===w?t=w:t!==w&&(t+=(d??"")+i[c+1]),this._$AH[c]=d}n&&!s&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class fr extends Ut{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}class br extends Ut{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}}class vr extends Ut{constructor(t,o,r,s,i){super(t,o,r,s,i),this.type=5}_$AI(t,o=this){if((t=Y(this,t,o,0)??w)===W)return;const r=this._$AH,s=t===w&&r!==w||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==w&&(r===w||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,t):this._$AH.handleEvent(t)}}class mr{constructor(t,o,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const Kt=ct.litHtmlPolyfillSupport;Kt==null||Kt(pt,bt),(ct.litHtmlVersions??(ct.litHtmlVersions=[])).push("3.2.1");const gr=(e,t,o)=>{const r=(o==null?void 0:o.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const i=(o==null?void 0:o.renderBefore)??null;r._$litPart$=s=new bt(t.insertBefore(dt(),i),i,void 0,o??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let C=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gr(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return W}};var Qe;C._$litElement$=!0,C.finalized=!0,(Qe=globalThis.litElementHydrateSupport)==null||Qe.call(globalThis,{LitElement:C});const Zt=globalThis.litElementPolyfillSupport;Zt==null||Zt({LitElement:C});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var E,so,io,no,ao,lo;class ro{constructor(){jt(this,E)}async loadData(t){const o=this,r=G(o,E,so),s=`https://script.google.com/macros/s/AKfycbxalnOyqtg4lzlH0SVe5toHpYznuQ6V_Nd7PzZSo9Cn69yt2j8yGx0Fn5FpQCW1nYOLcQ/exec?pid=${r}`;try{const n=await(await fetch(s)).json();o.init(r,n),t&&t(!0)}catch(i){console.error("Error fetching data:",i),t&&t(!1,String(i))}}init(t,o){const r=this;r.pid=t,r.data=o,r.infos=o==null?void 0:o["eco-notion-page-infos"],r.contents=o==null?void 0:o["eco-notion-page-contents"],r.comments=o==null?void 0:o["eco-notion-page-comments"],r.notionPageUrl=G(r,E,io),r.title=G(r,E,no),r.lessonRawLink=G(r,E,ao),r.lessonVnTitle=G(r,E,lo),console.log("> infos: ",this.infos),console.log("> contents: ",this.contents),console.log("> comments: ",this.comments)}get lessonDesc(){const t=this;return{lessonRawLink:t.lessonRawLink,notionPageUrl:t.notionPageUrl,lessonVnTitle:t.lessonVnTitle}}get coverUrl(){var o;return((o=this.infos)==null?void 0:o.cover_url)??""}}E=new WeakSet,so=function(){return new URLSearchParams(window.location.search).get("pid")??""},io=function(){return`https://www.notion.so/${this.pid}`},no=function(){var o;return((o=this.infos)==null?void 0:o.title)??"Unknow Title !"},ao=function(){const t=this,o="🔗";let r=null;const s=t.contents;if(s)for(const i of s){if(i.type=="divider")break;if(i.text.startsWith(o)){r=i.text.replace(o,"").trim();break}}return r},lo=function(){const t=this,o="🇻🇳";let r=null;const s=t.contents;if(s)for(const i of s){if(i.type=="divider")break;if(i.text.startsWith(o)){r=i.text.replace(o,"").trim();break}}return r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr={attribute:!0,type:String,converter:Et,reflect:!1,hasChanged:ye},_r=(e=yr,t,o)=>{const{kind:r,metadata:s}=o;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(o.name,e),r==="accessor"){const{name:n}=o;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,c,e)},init(a){return a!==void 0&&this.P(n,void 0,e),a}}}if(r==="setter"){const{name:n}=o;return function(a){const c=this[n];t.call(this,a),this.requestUpdate(n,c,e)}}throw Error("Unsupported decorator location: "+r)};function u(e){return(t,o)=>typeof o=="object"?_r(e,t,o):((r,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(e){return u({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(e,t){return(o,r,s)=>{const i=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};return wr(o,r,{get(){return i(this)}})}}var $r=Object.getOwnPropertyDescriptor,xr=(e,t,o,r)=>{for(var s=r>1?void 0:r?$r(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let re=class extends C{render(){return b`
      <div class="head">
        <h1>⛵️ Eco Notion Builder ⛵️</h1>
        <span>Đang tải dữ liệu...</span>
      </div>
      <div class="loading-overlay" id="eco-loading">
        <div class="spinner"></div>
      </div>
    `}};re.styles=y`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 94vh;
    }

    .head {
      text-align: center;
    }

    .loading-overlay {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    :host-context(.sl-theme-light) .loading-overlay {
      background-color: rgba(255, 255, 255, 0.8);
    }
    :host-context(.sl-theme-dark) .loading-overlay {
      background-color: black;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;re=xr([A("eco-data-loading")],re);var Cr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,co=(e,t,o,r)=>{for(var s=r>1?void 0:r?Sr(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Cr(t,o,s),s};let Pt=class extends C{constructor(){super()}render(){return b`<h1 class="text-center" id="eco-header-title">${this.text}</h1>`}};Pt.styles=y`
    #eco-header-title {
      margin: 0px;
      text-decoration: underline;
      cursor: pointer;
    }
  `;co([u()],Pt.prototype,"text",2);Pt=co([A("eco-lesson-title")],Pt);const kr=y`
  a:hover {
    filter: brightness(1.25);
  }
  :host-context(.sl-theme-light) a {
    color: #0d6efd;
  }
  :host-context(.sl-theme-dark) a {
    color: #9ad9f2;
  }
`;var Ar=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,uo=(e,t,o,r)=>{for(var s=r>1?void 0:r?Er(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Ar(t,o,s),s};let Tt=class extends C{render(){const t=this.desc;return b`
      <span class="left">🇻🇳 ${t==null?void 0:t.lessonVnTitle}</span>
      ${(t==null?void 0:t.notionPageUrl)&&b` <a
        class="right"
        href="${t==null?void 0:t.notionPageUrl}"
        target="_blank"
        rel="noopener noreferrer"
        >📝</a
      >`}
      ${(t==null?void 0:t.lessonRawLink)&&b` <a
        class="right"
        href="${(t==null?void 0:t.lessonRawLink)??""}"
        target="_blank"
        rel="noopener noreferrer"
        >🔗</a
      >`}
    `}};Tt.styles=[kr,y`
      :host {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      :host .left {
        float: left;
      }
      :host .right {
        float: right;
        margin-left: 10px;
        text-decoration: none;
      }
    `];uo([u({type:Object})],Tt.prototype,"desc",2);Tt=uo([A("eco-lesson-desc")],Tt);var Or=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,ho=e=>{throw TypeError(e)},po=(e,t,o,r)=>{for(var s=r>1?void 0:r?Pr(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Or(t,o,s),s},Tr=(e,t,o)=>t.has(e)||ho("Cannot "+o),Ir=(e,t,o)=>t.has(e)?ho("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Lr=(e,t,o)=>(Tr(e,t,"access private method"),o),se,fo;let It=class extends C{constructor(){super(...arguments),Ir(this,se),this._pageId=""}firstUpdated(){const e=Lr(this,se,fo).call(this,"id");e&&(this._pageId=e)}_onCopyId(){const e=this._pageId;navigator.clipboard.writeText(e).then(()=>{alert("Copied to clipboard:"+e)}).catch(t=>{alert("Failed to copy:"+t)})}render(){const e=this._pageId;return b` <div class="container mt-5">
      <div class="card shadow rounded-4">
        <div class="card-body">
          <div class="input-group">
            <span class="card-title mb-4">Page Id:</span>
            <input
              type="text"
              class="form-control"
              id="idInput"
              value="${e}"
              readonly
            />
            <button class="btn btn-outline-primary" @click=${this._onCopyId}>
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>`}};se=new WeakSet;fo=function(e){return new URLSearchParams(window.location.search).get(e)};It.styles=y`
    span {
      width: 12%;
      display: inline-block
    }
    input {
      width: 67%;
      height: 30px;
    }
    button {
      width: 18%;
      height: 36px;
    }
  `;po([u({type:String})],It.prototype,"_pageId",2);It=po([A("eco-lesson-id")],It);var Nr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,bo=e=>{throw TypeError(e)},vo=(e,t,o,r)=>{for(var s=r>1?void 0:r?zr(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Nr(t,o,s),s},Mr=(e,t,o)=>t.has(e)||bo("Cannot "+o),Rr=(e,t,o)=>t.has(e)?bo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Vr=(e,t,o)=>(Mr(e,t,"access private method"),o),ie,mo;let Lt=class extends C{constructor(){super(...arguments),Rr(this,ie),this._pageId=""}firstUpdated(){const e=Vr(this,ie,mo).call(this,"tk");e&&(this._pageId=e)}_onCopyId(){const e=this._pageId;navigator.clipboard.writeText(e).then(()=>{alert("Copied to clipboard:"+e)}).catch(t=>{alert("Failed to copy:"+t)})}render(){const e=this._pageId;return b` <div class="container mt-5">
      <div class="card shadow rounded-4">
        <div class="card-body">
          <div class="input-group">
            <span class="card-title mb-4">Token:</span>
            <input
              type="text"
              class="form-control"
              id="idInput"
              value="${e}"
              readonly
            />
            <button class="btn btn-outline-primary" @click=${this._onCopyId}>
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>`}};ie=new WeakSet;mo=function(e){return new URLSearchParams(window.location.search).get(e)};Lt.styles=y`
    span {
      width: 12%;
      display: inline-block
    }
    input {
      width: 67%;
      height: 30px;
    }
    button {
      width: 18%;
      height: 36px;
    }
  `;vo([u({type:String})],Lt.prototype,"_pageId",2);Lt=vo([A("eco-lesson-token")],Lt);const Ur=y`
  .eco-full-width-image {
    max-width: 100%;
  }
  :host-context(.sl-theme-light) .eco-image {
    max-width: 100%;
    border: 1px solid black;
  }
  :host-context(.sl-theme-dark) .eco-image {
    border: 1px solid white;
  }
`;var Dr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,go=(e,t,o,r)=>{for(var s=r>1?void 0:r?Br(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Dr(t,o,s),s};let Nt=class extends C{render(){const t=this.url;return b`
      <div id="eco-header-image">
        <div class="eco-form-header-container">
          ${t&&b`<img
            src="${t}"
            alt="${t}"
            data-index="0"
            class="eco-input-item eco-image eco-full-width-image"
          />`}
        </div>
      </div>
    `}};Nt.styles=[Ur,y``];go([u()],Nt.prototype,"url",2);Nt=go([A("eco-lesson-img")],Nt);var qr=Object.defineProperty,Fr=(e,t,o)=>t in e?qr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Jt=(e,t,o)=>(Fr(e,typeof t!="symbol"?t+"":t,o),o),Wr=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)},Qt=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},yt=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},Be=(e,t,o)=>(Wr(e,t,"access private method"),o);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function yo(e,t){return Object.is(e,t)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let _=null,ut=!1,Ct=1;const zt=Symbol("SIGNAL");function J(e){const t=_;return _=e,t}function jr(){return _}function Hr(){return ut}const we={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Dt(e){if(ut)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(_===null)return;_.consumerOnSignalRead(e);const t=_.nextProducerIndex++;if(X(_),t<_.producerNode.length&&_.producerNode[t]!==e&&ne(_)){const o=_.producerNode[t];Bt(o,_.producerIndexOfThis[t])}_.producerNode[t]!==e&&(_.producerNode[t]=e,_.producerIndexOfThis[t]=ne(_)?$o(e,_,t):0),_.producerLastReadVersion[t]=e.version}function Gr(){Ct++}function _o(e){if(!(!e.dirty&&e.lastCleanEpoch===Ct)){if(!e.producerMustRecompute(e)&&!Yr(e)){e.dirty=!1,e.lastCleanEpoch=Ct;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Ct}}function wo(e){if(e.liveConsumerNode===void 0)return;const t=ut;ut=!0;try{for(const o of e.liveConsumerNode)o.dirty||Zr(o)}finally{ut=t}}function Kr(){return(_==null?void 0:_.consumerAllowSignalWrites)!==!1}function Zr(e){var t;e.dirty=!0,wo(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function Jr(e){return e&&(e.nextProducerIndex=0),J(e)}function Qr(e,t){if(J(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(ne(e))for(let o=e.nextProducerIndex;o<e.producerNode.length;o++)Bt(e.producerNode[o],e.producerIndexOfThis[o]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Yr(e){X(e);for(let t=0;t<e.producerNode.length;t++){const o=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==o.version||(_o(o),r!==o.version))return!0}return!1}function $o(e,t,o){var r;if($e(e),X(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let s=0;s<e.producerNode.length;s++)e.producerIndexOfThis[s]=$o(e.producerNode[s],e,s)}return e.liveConsumerIndexOfThis.push(o),e.liveConsumerNode.push(t)-1}function Bt(e,t){var o;if($e(e),X(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(o=e.unwatched)==null||o.call(e.wrapper);for(let s=0;s<e.producerNode.length;s++)Bt(e.producerNode[s],e.producerIndexOfThis[s])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const s=e.liveConsumerIndexOfThis[t],i=e.liveConsumerNode[t];X(i),i.producerIndexOfThis[s]=t}}function ne(e){var t;return e.consumerIsAlwaysLive||(((t=e==null?void 0:e.liveConsumerNode)==null?void 0:t.length)??0)>0}function X(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function $e(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function xo(e){if(_o(e),Dt(e),e.value===ae)throw e.error;return e.value}function Xr(e){const t=Object.create(ts);t.computation=e;const o=()=>xo(t);return o[zt]=t,o}const Yt=Symbol("UNSET"),Xt=Symbol("COMPUTING"),ae=Symbol("ERRORED"),ts={...we,value:Yt,dirty:!0,error:null,equal:yo,producerMustRecompute(e){return e.value===Yt||e.value===Xt},producerRecomputeValue(e){if(e.value===Xt)throw new Error("Detected cycle in computations.");const t=e.value;e.value=Xt;const o=Jr(e);let r,s=!1;try{r=e.computation.call(e.wrapper),s=t!==Yt&&t!==ae&&e.equal.call(e.wrapper,t,r)}catch(i){r=ae,e.error=i}finally{Qr(e,o)}if(s){e.value=t;return}e.value=r,e.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function es(){throw new Error}let os=es;function rs(){os()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ss(e){const t=Object.create(as);t.value=e;const o=()=>(Dt(t),t.value);return o[zt]=t,o}function is(){return Dt(this),this.value}function ns(e,t){Kr()||rs(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,ls(e))}const as={...we,equal:yo,value:void 0};function ls(e){e.version++,Gr(),wo(e)}/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=Symbol("node");var V;(e=>{var t,o,r,s;class i{constructor(c,d={}){yt(this,o),Jt(this,t);const h=ss(c)[zt];if(this[x]=h,h.wrapper=this,d){const $=d.equals;$&&(h.equal=$),h.watched=d[e.subtle.watched],h.unwatched=d[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return is.call(this[x])}set(c){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Hr())throw new Error("Writes to signals not permitted during Watcher callback");const d=this[x];ns(d,c)}}t=x,o=new WeakSet,e.isState=a=>typeof a=="object"&&Qt(o,a),e.State=i;class n{constructor(c,d){yt(this,s),Jt(this,r);const h=Xr(c)[zt];if(h.consumerAllowSignalWrites=!0,this[x]=h,h.wrapper=this,d){const $=d.equals;$&&(h.equal=$),h.watched=d[e.subtle.watched],h.unwatched=d[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return xo(this[x])}}r=x,s=new WeakSet,e.isComputed=a=>typeof a=="object"&&Qt(s,a),e.Computed=n,(a=>{var c,d,f,h;function $(g){let m,p=null;try{p=J(null),m=g()}finally{J(p)}return m}a.untrack=$;function T(g){var m;if(!(0,e.isComputed)(g)&&!(0,e.isWatcher)(g))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((m=g[x].producerNode)==null?void 0:m.map(p=>p.wrapper))??[]}a.introspectSources=T;function H(g){var m;if(!(0,e.isComputed)(g)&&!(0,e.isState)(g))throw new TypeError("Called introspectSinks without a Signal argument");return((m=g[x].liveConsumerNode)==null?void 0:m.map(p=>p.wrapper))??[]}a.introspectSinks=H;function Zo(g){if(!(0,e.isComputed)(g)&&!(0,e.isState)(g))throw new TypeError("Called hasSinks without a Signal argument");const m=g[x].liveConsumerNode;return m?m.length>0:!1}a.hasSinks=Zo;function Jo(g){if(!(0,e.isComputed)(g)&&!(0,e.isWatcher)(g))throw new TypeError("Called hasSources without a Computed or Watcher argument");const m=g[x].producerNode;return m?m.length>0:!1}a.hasSources=Jo;class Qo{constructor(m){yt(this,d),yt(this,f),Jt(this,c);let p=Object.create(we);p.wrapper=this,p.consumerMarkedDirty=m,p.consumerIsAlwaysLive=!0,p.consumerAllowSignalWrites=!1,p.producerNode=[],this[x]=p}watch(...m){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Be(this,f,h).call(this,m);const p=this[x];p.dirty=!1;const k=J(p);for(const gt of m)Dt(gt[x]);J(k)}unwatch(...m){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Be(this,f,h).call(this,m);const p=this[x];X(p);for(let k=p.producerNode.length-1;k>=0;k--)if(m.includes(p.producerNode[k].wrapper)){Bt(p.producerNode[k],p.producerIndexOfThis[k]);const gt=p.producerNode.length-1;if(p.producerNode[k]=p.producerNode[gt],p.producerIndexOfThis[k]=p.producerIndexOfThis[gt],p.producerNode.length--,p.producerIndexOfThis.length--,p.nextProducerIndex--,k<p.producerNode.length){const Xo=p.producerIndexOfThis[k],Ae=p.producerNode[k];$e(Ae),Ae.liveConsumerIndexOfThis[Xo]=k}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[x].producerNode.filter(p=>p.dirty).map(p=>p.wrapper)}}c=x,d=new WeakSet,f=new WeakSet,h=function(g){for(const m of g)if(!(0,e.isComputed)(m)&&!(0,e.isState)(m))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=g=>Qt(d,g),a.Watcher=Qo;function Yo(){var g;return(g=jr())==null?void 0:g.wrapper}a.currentComputed=Yo,a.watched=Symbol("watched"),a.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(V||(V={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=Symbol("SignalWatcherBrand"),us=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),qe=new WeakMap;function Co(e){return e[cs]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new V.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new V.Computed(()=>{this._$St.get(),super.performUpdate()});const t=this._$Su=new V.subtle.Watcher(function(){const o=qe.get(this);o!==void 0&&(o._$Si===!1&&o.requestUpdate(),this.watch())});qe.set(t,this),us.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach(o=>o.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,o,r){this._$So=!0,super.requestUpdate(t,o,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(t){this._$Sh.add(t);const o=this._$So;this.requestUpdate(),this._$So=o}m(t){this._$Sh.delete(t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds={ATTRIBUTE:1},hs=e=>(...t)=>({_$litDirective$:e,values:t});let ps=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=(e,t)=>(e==null?void 0:e._$litType$)!==void 0;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */V.State;V.Computed;const bs=(e,t)=>new V.State(e,t),ke=class ke{};ke.qaType=bs(localStorage.getItem("eco-lesson-type")??"1");let Mt=ke;var Vt,ko;class So extends Co(C){constructor(){super();jt(this,Vt)}async handleClick(){await Pe(this,Vt,ko).call(this)}get type(){return Mt.qaType.get()}}Vt=new WeakSet,ko=async function(){const o="https://eco-edu-learn-back-js-node-notion-api.onrender.com/api/notion/build-page",r={pageId:"1da27e14fbaf81458f58f286965ff555",options:{notionToken:"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",buildNav1:!1,buildNav2:!1,buildNav3:!1,buildParagraphs:!0}};console.log("data",r);try{const i=await(await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json();return console.log("Kết quả từ API:",i),i}catch(s){console.error("Lỗi khi gửi yêu cầu:",s)}};var vs=Object.getOwnPropertyDescriptor,ms=(e,t,o,r)=>{for(var s=r>1?void 0:r?vs(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let le=class extends So{render(){const e=this.type;return b`
      <sl-button
        @click="${this.handleClick}"
        variant="success"
        id="comprehensive-test-btn"
      >
        Build All ${e}
      </sl-button>
    `}};le.styles=y`
    :host {
      float: left;
    }
  `;le=ms([A("eco-start-lesson-cpt-btn")],le);var gs=Object.getOwnPropertyDescriptor,ys=(e,t,o,r)=>{for(var s=r>1?void 0:r?gs(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let ce=class extends So{get variant(){return"warning"}render(){const e=this.type;return b`
      <sl-button
        @click="${this.handleClick}"
        variant="warning"
        id="sequential-test-btn"
      >
        Build One ${e}
      </sl-button>
    `}};ce.styles=y`
    :host {
      float: right;
    }
  `;ce=ys([A("eco-start-lesson-sqt-btn")],ce);var _s=Object.getOwnPropertyDescriptor,ws=(e,t,o,r)=>{for(var s=r>1?void 0:r?_s(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let ue=class extends C{render(){return b`
      <div id="test-btns-container">
        <eco-start-lesson-cpt-btn></eco-start-lesson-cpt-btn>
        <eco-start-lesson-sqt-btn></eco-start-lesson-sqt-btn>
      </div>
    `}};ue.styles=y`
    :host {
      clear: both;
    }
  `;ue=ws([A("eco-start-lesson-cmds")],ue);var $s=Object.getOwnPropertyDescriptor,Ao=e=>{throw TypeError(e)},xs=(e,t,o,r)=>{for(var s=r>1?void 0:r?$s(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s},Cs=(e,t,o)=>t.has(e)||Ao("Cannot "+o),Ss=(e,t,o)=>t.has(e)?Ao("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Fe=(e,t,o)=>(Cs(e,t,"access private method"),o),St,Eo,Oo;let de=class extends Co(C){constructor(){super(...arguments),Ss(this,St)}get qaState(){return Mt.qaType}get value(){return this.qaState.get()}set value(e){this.qaState.set(e)}handleChange(e){var t;const r=e.target.value;Fe(t=Fe(this,St,Eo).call(this,r),St,Oo).call(t)}get displayInfo(){const e=this.value;return e=="1"?["Shell hóa","Chuẩn hóa các dòng title ⚡️ Tạo các nav & links ⚡️ Tạo ids từ cha đến con ⚡️ Gán ảnh đại diện mặc định"]:e=="2"?["Ảnh hóa","Upload ảnh lên imgur và gán vào Notion page"]:e=="3"?["",""]:e=="4"?["",""]:e=="5"?["",""]:e=="6"?["",""]:e=="7"?["",""]:e=="8"?["",""]:e=="9"?["",""]:["",""]}render(){const e=this,t=e.value,o=e.displayInfo[0],r=e.displayInfo[1],s=this.handleChange;return b`
      <div>
        <div>
         
          <sl-radio-group
            name="lesson-type"
            value="${t}"
            @sl-change="${s}"
          >
            <sl-radio-button value="1">⛵️ ⛵️ ⛵️</sl-radio-button>
            <sl-radio-button value="2">🏞️ 🏞️ 🏞️</sl-radio-button>
            <sl-radio-button value="3">💬 🖱️ 🔑</sl-radio-button>
            <sl-radio-button value="10">💬 ✍️ 💍</sl-radio-button>
            <sl-radio-button value="11">💬 🖱️ 💍</sl-radio-button>
            <sl-radio-button value="12">💍 🙏 💍</sl-radio-button>
          </sl-radio-group>
          <sl-radio-group
            name="lesson-type"
            value="${t}"
            @sl-change="${s}"
          >
            <sl-radio-button value="4">❓ ✍️ 💡</sl-radio-button>
            <sl-radio-button value="5">❓ 🖱️ 💡</sl-radio-button>
            <sl-radio-button value="6">💬 ✍️ 🦋</sl-radio-button>
            <sl-radio-button value="7">💬 🖱️ 🦋</sl-radio-button>
            <sl-radio-button value="8">🦋 🖱️ 💬</sl-radio-button>
            <sl-radio-button value="9">💍 🖱️ 💍</sl-radio-button>
          </sl-radio-group>
        </div>
        <br>
        <div>
          <div class="msg">💍 <span class="title">${o}</span></div>
          <div class="msg">👉 <span class="desc">${r}</span></div>
        </div>
      </div>
    `}};St=new WeakSet;Eo=function(e){const t=this;return t.value=e,t};Oo=function(){const e=this;return localStorage.setItem("eco-lesson-type",e.value),e};de.styles=y`
    .title {
      text-decoration: underline;
    }
    .msg {
      margin-bottom: 10px;
    }
    :host sl-radio-button {
      flex: 1;
    }
    :host sl-radio-group {
      display: flex;
      flex-direction: row;
      justify-content: space-around; /* Hoặc space-around / space-evenly */
      margin-top: 20px;
    }
  `;de=xs([A("eco-start-lesson-type-selector")],de);var ks=Object.getOwnPropertyDescriptor,Po=e=>{throw TypeError(e)},As=(e,t,o,r)=>{for(var s=r>1?void 0:r?ks(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s},Es=(e,t,o)=>t.has(e)||Po("Cannot "+o),Os=(e,t,o)=>t.has(e)?Po("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),_t=(e,t,o)=>(Es(e,t,"access private method"),o),Z,To,Io,he;let Rt=class extends C{constructor(){super(),Os(this,Z),this.theme=localStorage.getItem("theme")||"sl-theme-light"}toggleTheme(){var e,t,o,r;const s=this,i=s.theme==="sl-theme-light",n=s.theme==="sl-theme-dark";_t(r=_t(o=_t(t=_t(e=s,Z,To).call(e,i),Z,he).call(t,"sl-theme-light",n),Z,he).call(o,"sl-theme-dark",i),Z,Io).call(r)}connectedCallback(){super.connectedCallback();const e=this;e.theme&&document.documentElement.classList.add(e.theme)}render(){return b`<sl-button variant="default" @click="${this.toggleTheme}"
      >🌓</sl-button
    >`}};Z=new WeakSet;To=function(e){const t=this;return t.theme=e?"sl-theme-dark":"sl-theme-light",t};Io=function(){const e=this;return localStorage.setItem("theme",e.theme??""),e};he=function(e,t){return document.documentElement.classList.toggle(e,t),this};Rt.styles=y`
    :host {
      float: right;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  `;Rt.properties={theme:{type:String}};Rt=As([A("eco-toggle-app-theme-btn")],Rt);var Ps=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,Lo=(e,t,o,r)=>{for(var s=r>1?void 0:r?Ts(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Ps(t,o,s),s};let ft=class extends C{constructor(){super()}render(){const t=this.svc;return b`
      <eco-lesson-title .text=${t==null?void 0:t.title}></eco-lesson-title>
      <eco-lesson-id></eco-lesson-id>
      <eco-lesson-token></eco-lesson-token>
      <eco-lesson-desc .desc=${t==null?void 0:t.lessonDesc}></eco-lesson-desc>
      <eco-lesson-img .url=${t==null?void 0:t.coverUrl}></eco-lesson-img>
     
      <eco-start-lesson-cmds class="row"></eco-start-lesson-cmds>
      
      <eco-start-lesson-type-selector
        class="row"
      ></eco-start-lesson-type-selector>
     
    `}};ft.properties={svc:{type:ro}};ft.styles=y`
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .row {
      margin-top: 10px;
    }
  `;Lo([u({type:Object})],ft.prototype,"svc",2);ft=Lo([A("eco-lesson-shell")],ft);var Is=y`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const pe=new Set,Q=new Map;let B,xe="ltr",Ce="en";const No=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(No){const e=new MutationObserver(Mo);xe=document.documentElement.dir||"ltr",Ce=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function zo(...e){e.map(t=>{const o=t.$code.toLowerCase();Q.has(o)?Q.set(o,Object.assign(Object.assign({},Q.get(o)),t)):Q.set(o,t),B||(B=t)}),Mo()}function Mo(){No&&(xe=document.documentElement.dir||"ltr",Ce=document.documentElement.lang||navigator.language),[...pe.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Ls=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){pe.add(this.host)}hostDisconnected(){pe.delete(this.host)}dir(){return`${this.host.dir||xe}`.toLowerCase()}lang(){return`${this.host.lang||Ce}`.toLowerCase()}getTranslationData(t){var o,r;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s==null?void 0:s.language.toLowerCase(),n=(r=(o=s==null?void 0:s.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",a=Q.get(`${i}-${n}`),c=Q.get(i);return{locale:s,language:i,region:n,primary:a,secondary:c}}exists(t,o){var r;const{primary:s,secondary:i}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[t]||i&&i[t]||o.includeFallback&&B&&B[t])}term(t,...o){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(s&&s[t])i=s[t];else if(B&&B[t])i=B[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...o):i}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,o)}};var Ro={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};zo(Ro);var Ns=Ro,Vo=class extends Ls{};zo(Ns);var j=y`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Uo=Object.defineProperty,zs=Object.defineProperties,Ms=Object.getOwnPropertyDescriptor,Rs=Object.getOwnPropertyDescriptors,We=Object.getOwnPropertySymbols,Vs=Object.prototype.hasOwnProperty,Us=Object.prototype.propertyIsEnumerable,Do=e=>{throw TypeError(e)},je=(e,t,o)=>t in e?Uo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,vt=(e,t)=>{for(var o in t||(t={}))Vs.call(t,o)&&je(e,o,t[o]);if(We)for(var o of We(t))Us.call(t,o)&&je(e,o,t[o]);return e},Bo=(e,t)=>zs(e,Rs(t)),l=(e,t,o,r)=>{for(var s=r>1?void 0:r?Ms(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Uo(t,o,s),s},qo=(e,t,o)=>t.has(e)||Do("Cannot "+o),Ds=(e,t,o)=>(qo(e,t,"read from private field"),t.get(e)),Bs=(e,t,o)=>t.has(e)?Do("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),qs=(e,t,o,r)=>(qo(e,t,"write to private field"),t.set(e,o),o),kt,O=class extends C{constructor(){super(),Bs(this,kt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,vt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch{customElements.define(e,class extends t{},o)}return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${i} has already been registered.`)}attributeChangedCallback(e,t,o){Ds(this,kt)||(this.constructor.elementProperties.forEach((r,s)=>{r.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),qs(this,kt,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&this[o]==null&&(this[o]=t)})}};kt=new WeakMap;O.version="2.20.0";O.dependencies={};l([u()],O.prototype,"dir",2);l([u()],O.prototype,"lang",2);var Fo=class extends O{constructor(){super(...arguments),this.localize=new Vo(this)}render(){return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Fo.styles=[j,Is];var rt=new WeakMap,st=new WeakMap,it=new WeakMap,te=new WeakSet,wt=new WeakMap,Wo=class{constructor(e,t){this.handleFormData=o=>{const r=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!n&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{o.formData.append(s,a.toString())}):o.formData.append(s,i.toString()))},this.handleFormSubmit=o=>{var r;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=rt.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),wt.set(this.host,[])},this.handleInteraction=o=>{const r=wt.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=vt({form:o=>{const r=o.form;if(r){const i=o.getRootNode().querySelector(`#${r}`);if(i)return i}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),wt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),wt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,rt.has(this.form)?rt.get(this.form).add(this.host):rt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),st.has(this.form)||(st.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),it.has(this.form)||(it.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=rt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),st.has(this.form)&&(this.form.reportValidity=st.get(this.form),st.delete(this.form)),it.has(this.form)&&(this.form.checkValidity=it.get(this.form),it.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?te.add(e):te.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&o.setAttribute(r,t.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!te.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},qt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Fs=Object.freeze(Bo(vt({},qt),{valid:!1,valueMissing:!0})),Ws=Object.freeze(Bo(vt({},qt),{valid:!1,customError:!0})),jo=y`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Se=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},fe="";function He(e){fe=e}function js(e=""){if(!fe){const t=[...document.getElementsByTagName("script")],o=t.find(r=>r.hasAttribute("data-shoelace"));if(o)He(o.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";r&&(s=r.getAttribute("src")),He(s.split("/").slice(0,-1).join("/"))}}return fe.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Hs={name:"default",resolver:e=>js(`assets/icons/${e}.svg`)},Gs=Hs,Ge={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ks={name:"system",resolver:e=>e in Ge?`data:image/svg+xml,${encodeURIComponent(Ge[e])}`:""},Zs=Ks,Js=[Gs,Zs],be=[];function Qs(e){be.push(e)}function Ys(e){be=be.filter(t=>t!==e)}function Ke(e){return Js.find(t=>t.name===e)}var Xs=y`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function U(e,t){const o=vt({waitUntilFirstUpdate:!1},t);return(r,s)=>{const{update:i}=r,n=Array.isArray(e)?e:[e];r.update=function(a){n.forEach(c=>{const d=c;if(a.has(d)){const f=a.get(d),h=this[d];f!==h&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](f,h)}}),i.call(this,a)}}}var nt=Symbol(),$t=Symbol(),ee,oe=new Map,N=class extends O{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let r;if(t!=null&&t.spriteSheet)return this.svg=b`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?nt:$t}catch{return $t}try{const s=document.createElement("div");s.innerHTML=await r.text();const i=s.firstElementChild;if(((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())!=="svg")return nt;ee||(ee=new DOMParser);const a=ee.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):nt}catch{return nt}}connectedCallback(){super.connectedCallback(),Qs(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ys(this)}getIconSource(){const e=Ke(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),r=o?Ke(this.library):void 0;if(!t){this.svg=null;return}let s=oe.get(t);if(s||(s=this.resolveIcon(t,r),oe.set(t,s)),!this.initialRender)return;const i=await s;if(i===$t&&oe.delete(t),t===this.getIconSource().url){if(fs(i)){if(this.svg=i,r){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&n&&r.mutator(n)}return}switch(i){case $t:case nt:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=r==null?void 0:r.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};N.styles=[j,Xs];l([L()],N.prototype,"svg",2);l([u({reflect:!0})],N.prototype,"name",2);l([u()],N.prototype,"src",2);l([u()],N.prototype,"label",2);l([u({reflect:!0})],N.prototype,"library",2);l([U("label")],N.prototype,"handleLabelChange",1);l([U(["name","src","library"])],N.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=hs(class extends ps{constructor(e){var t;if(super(e),e.type!==ds.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const o=e.element.classList;for(const i of this.st)i in t||(o.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(n?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return W}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ho=Symbol.for(""),ti=e=>{if((e==null?void 0:e.r)===Ho)return e==null?void 0:e._$litStatic$},Ze=(e,...t)=>({_$litStatic$:t.reduce((o,r,s)=>o+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[s+1],e[0]),r:Ho}),Je=new Map,ei=e=>(t,...o)=>{const r=o.length;let s,i;const n=[],a=[];let c,d=0,f=!1;for(;d<r;){for(c=t[d];d<r&&(i=o[d],(s=ti(i))!==void 0);)c+=s+t[++d],f=!0;d!==r&&a.push(i),n.push(c),d++}if(d===r&&n.push(t[r]),f){const h=n.join("$$lit$$");(t=Je.get(h))===void 0&&(n.raw=n,Je.set(h,t=n)),o=a}return e(t,...o)},At=ei(b);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=e=>e??w;var v=class extends O{constructor(){super(...arguments),this.formControlController=new Wo(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Se(this,"[default]","prefix","suffix"),this.localize=new Vo(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:qt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ze`a`:Ze`button`;return At`
      <${t}
        part="base"
        class=${Ft({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${I(e?void 0:this.disabled)}
        type=${I(e?void 0:this.type)}
        title=${this.title}
        name=${I(e?void 0:this.name)}
        value=${I(e?void 0:this.value)}
        href=${I(e&&!this.disabled?this.href:void 0)}
        target=${I(e?this.target:void 0)}
        download=${I(e?this.download:void 0)}
        rel=${I(e?this.rel:void 0)}
        role=${I(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?At` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?At`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};v.styles=[j,jo];v.dependencies={"sl-icon":N,"sl-spinner":Fo};l([et(".button")],v.prototype,"button",2);l([L()],v.prototype,"hasFocus",2);l([L()],v.prototype,"invalid",2);l([u()],v.prototype,"title",2);l([u({reflect:!0})],v.prototype,"variant",2);l([u({reflect:!0})],v.prototype,"size",2);l([u({type:Boolean,reflect:!0})],v.prototype,"caret",2);l([u({type:Boolean,reflect:!0})],v.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],v.prototype,"loading",2);l([u({type:Boolean,reflect:!0})],v.prototype,"outline",2);l([u({type:Boolean,reflect:!0})],v.prototype,"pill",2);l([u({type:Boolean,reflect:!0})],v.prototype,"circle",2);l([u()],v.prototype,"type",2);l([u()],v.prototype,"name",2);l([u()],v.prototype,"value",2);l([u()],v.prototype,"href",2);l([u()],v.prototype,"target",2);l([u()],v.prototype,"rel",2);l([u()],v.prototype,"download",2);l([u()],v.prototype,"form",2);l([u({attribute:"formaction"})],v.prototype,"formAction",2);l([u({attribute:"formenctype"})],v.prototype,"formEnctype",2);l([u({attribute:"formmethod"})],v.prototype,"formMethod",2);l([u({attribute:"formnovalidate",type:Boolean})],v.prototype,"formNoValidate",2);l([u({attribute:"formtarget"})],v.prototype,"formTarget",2);l([U("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);v.define("sl-button");var oi=y`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,z=class extends O{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return b`
      <span
        part="base"
        class=${Ft({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?b` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};z.styles=[j,oi];z.dependencies={"sl-icon":N};l([L()],z.prototype,"checked",2);l([L()],z.prototype,"hasFocus",2);l([u()],z.prototype,"value",2);l([u({reflect:!0})],z.prototype,"size",2);l([u({type:Boolean,reflect:!0})],z.prototype,"disabled",2);l([U("checked")],z.prototype,"handleCheckedChange",1);l([U("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);z.define("sl-radio");var ri=y`
  ${jo}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,P=class extends O{constructor(){super(...arguments),this.hasSlotController=new Se(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return At`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Ft({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${I(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};P.styles=[j,ri];l([et(".button")],P.prototype,"input",2);l([et(".hidden-input")],P.prototype,"hiddenInput",2);l([L()],P.prototype,"hasFocus",2);l([u({type:Boolean,reflect:!0})],P.prototype,"checked",2);l([u()],P.prototype,"value",2);l([u({type:Boolean,reflect:!0})],P.prototype,"disabled",2);l([u({reflect:!0})],P.prototype,"size",2);l([u({type:Boolean,reflect:!0})],P.prototype,"pill",2);l([U("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);P.define("sl-radio-button");var si=y`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,ii=y`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,ni=y`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,mt=class extends O{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=at(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=at(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=at(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=at(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const o=e.indexOf(t),r=at(t);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",o===0),r.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<e.length-1),r.toggleAttribute("data-sl-button-group__button--last",o===e.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return b`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};mt.styles=[j,ni];l([et("slot")],mt.prototype,"defaultSlot",2);l([L()],mt.prototype,"disableRole",2);l([u()],mt.prototype,"label",2);function at(e){var t;const o="sl-button, sl-radio-button";return(t=e.closest(o))!=null?t:e.querySelector(o)}var S=class extends O{constructor(){super(...arguments),this.formControlController=new Wo(this),this.hasSlotController=new Se(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?Ws:e?Fs:qt}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),r=this.value;!t||t.disabled||(this.value=t.value,o.forEach(s=>s.checked=s===t),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const o=this.getAllRadios().filter(a=>!a.disabled),r=(t=o.find(a=>a.checked))!=null?t:o[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,i=this.value;let n=o.indexOf(r)+s;n<0&&(n=o.length-1),n>o.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=o[n].value,o[n].checked=!0,this.hasButtonGroup?o[n].shadowRoot.querySelector("button").focus():(o[n].setAttribute("tabindex","0"),o[n].focus()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const o=this.getAllRadios();if(await Promise.all(o.map(async r=>{await r.updateComplete,r.checked=r.value===this.value,r.size=this.size})),this.hasButtonGroup=o.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),o.length>0&&!o.some(r=>r.checked))if(this.hasButtonGroup){const r=(e=o[0].shadowRoot)==null?void 0:e.querySelector("button");r&&r.setAttribute("tabindex","0")}else o[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const r=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");r&&(r.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),o=t.find(i=>i.checked),r=t.find(i=>!i.disabled),s=o||r;s&&s.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,r=this.helpText?!0:!!t,s=b`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return b`
      <fieldset
        part="form-control"
        class=${Ft({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?b`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};S.styles=[j,ii,si];S.dependencies={"sl-button-group":mt};l([et("slot:not([name])")],S.prototype,"defaultSlot",2);l([et(".radio-group__validation-input")],S.prototype,"validationInput",2);l([L()],S.prototype,"hasButtonGroup",2);l([L()],S.prototype,"errorMessage",2);l([L()],S.prototype,"defaultValue",2);l([u()],S.prototype,"label",2);l([u({attribute:"help-text"})],S.prototype,"helpText",2);l([u()],S.prototype,"name",2);l([u({reflect:!0})],S.prototype,"value",2);l([u({reflect:!0})],S.prototype,"size",2);l([u({reflect:!0})],S.prototype,"form",2);l([u({type:Boolean,reflect:!0})],S.prototype,"required",2);l([U("size",{waitUntilFirstUpdate:!0})],S.prototype,"handleSizeChange",1);l([U("value")],S.prototype,"handleValueChange",1);S.define("sl-radio-group");var ai=Object.defineProperty,li=Object.getOwnPropertyDescriptor,Go=e=>{throw TypeError(e)},Wt=(e,t,o,r)=>{for(var s=r>1?void 0:r?li(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&ai(t,o,s),s},ci=(e,t,o)=>t.has(e)||Go("Cannot "+o),ui=(e,t,o)=>t.has(e)?Go("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),di=(e,t,o)=>(ci(e,t,"access private method"),o),ve,Ko;let tt=class extends C{constructor(){super(),ui(this,ve),this.loading=!1,this.success=!1,this.message="",this.dataService=new ro}firstUpdated(){di(this,ve,Ko).call(this)}render(){const e=this.loading,t=this.success,o=this.message,r=this.dataService;return b`
      <div id="app">
        <div id="eco-body-content">
          <eco-toggle-app-theme-btn></eco-toggle-app-theme-btn>
          <div class="center-container">
            ${e?b` <eco-data-loading> </eco-data-loading>`:b`
                  ${t?b`<eco-lesson-shell .svc=${r}>
                      </eco-lesson-shell>`:b`<div>${o}</div>`}
                `}
          </div>
        </div>
      </div>
    `}};ve=new WeakSet;Ko=function(){const e=this,t=e.dataService;e.loading=!0,t.loadData((o,r)=>{e.loading=!1,e.success=o,e.message=r})};tt.styles=y`
    :host {
      margin: 0;
      display: flex;
      justify-content: center;

      font-family: Arial, sans-serif;
      height: 100vh;
    }

    :host-context(.sl-theme-light) {
      background-color: #f8f9fa;
    }

    :host #eco-body-content {
      min-width: 700px;
      max-width: 700px;
      border: 1 solid;
    }

    :host-context(.sl-theme-light) #eco-body-content {
      border-color: black;
    }
    :host-context(.sl-theme-dark) #eco-body-content {
      border-color: white;
    }

    .center-container {
      padding: 20px 20px 20px 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      text-align: left;
      border: 1px solid;
    }

    :host-context(.sl-theme-dark) .center-container {
      background-color: black;
      color: white;
      border-color: #6f7176;
    }
    :host-context(.sl-theme-light) .center-container {
      background-color: white;
      color: black;
      border-color: #535558;
    }
  `;Wt([u({type:Boolean})],tt.prototype,"loading",2);Wt([u({type:Boolean})],tt.prototype,"success",2);Wt([u({type:String})],tt.prototype,"message",2);tt=Wt([A("eco-app")],tt);
