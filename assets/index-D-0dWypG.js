var qe=e=>{throw TypeError(e)};var Fe=(e,t,r)=>t.has(e)||qe("Cannot "+r);var xt=(e,t,r)=>(Fe(e,t,"read from private field"),r?r.call(e):t.get(e)),Ct=(e,t,r)=>t.has(e)?qe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var q=(e,t,r)=>(Fe(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis,ke=Pt.ShadowRoot&&(Pt.ShadyCSS===void 0||Pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ee=Symbol(),We=new WeakMap;let mr=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==Ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ke&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=We.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&We.set(r,t))}return t}toString(){return this.cssText}};const wo=e=>new mr(typeof e=="string"?e:e+"",void 0,Ee),y=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,s,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new mr(r,e,Ee)},$o=(e,t)=>{if(ke)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),s=Pt.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,e.appendChild(o)}},je=ke?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return wo(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xo,defineProperty:Co,getOwnPropertyDescriptor:So,getOwnPropertyNames:ko,getOwnPropertySymbols:Eo,getPrototypeOf:Ao}=Object,M=globalThis,He=M.trustedTypes,Po=He?He.emptyScript:"",Qt=M.reactiveElementPolyfillSupport,ht=(e,t)=>e,Mt={toAttribute(e,t){switch(t){case Boolean:e=e?Po:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ae=(e,t)=>!xo(e,t),Ge={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:Ae};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);class X extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ge){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,r);s!==void 0&&Co(this.prototype,t,s)}}static getPropertyDescriptor(t,r,o){const{get:s,set:i}=So(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);i.call(this,n),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ge}static _$Ei(){if(this.hasOwnProperty(ht("elementProperties")))return;const t=Ao(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ht("properties"))){const r=this.properties,o=[...ko(r),...Eo(r)];for(const s of o)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,s]of r)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const s=this._$Eu(r,o);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)r.unshift(je(s))}else t!==void 0&&r.push(je(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $o(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EC(t,r){var i;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const n=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:Mt).toAttribute(r,o.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,r){var i;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:Mt;this._$Em=s,this[s]=a.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(t,r,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Ae)(this[t],r))return;this.P(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,o){this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(o=this._$EO)==null||o.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[ht("elementProperties")]=new Map,X[ht("finalized")]=new Map,Qt==null||Qt({ReactiveElement:X}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,Rt=pt.trustedTypes,Ze=Rt?Rt.createPolicy("lit-html",{createHTML:e=>e}):void 0,yr="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,_r="?"+z,Oo=`<${_r}>`,H=document,vt=()=>H.createComment(""),bt=e=>e===null||typeof e!="object"&&typeof e!="function",Pe=Array.isArray,To=e=>Pe(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Yt=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Je=/-->/g,Ke=/>/g,F=RegExp(`>|${Yt}(?:([^\\s"'>=/]+)(${Yt}*=${Yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,Qe=/"/g,wr=/^(?:script|style|textarea|title)$/i,No=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),v=No(1),G=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Ye=new WeakMap,j=H.createTreeWalker(H,129);function $r(e,t){if(!Pe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ze!==void 0?Ze.createHTML(t):t}const Io=(e,t)=>{const r=e.length-1,o=[];let s,i=t===2?"<svg>":t===3?"<math>":"",n=nt;for(let a=0;a<r;a++){const c=e[a];let u,f,d=-1,w=0;for(;w<c.length&&(n.lastIndex=w,f=n.exec(c),f!==null);)w=n.lastIndex,n===nt?f[1]==="!--"?n=Je:f[1]!==void 0?n=Ke:f[2]!==void 0?(wr.test(f[2])&&(s=RegExp("</"+f[2],"g")),n=F):f[3]!==void 0&&(n=F):n===F?f[0]===">"?(n=s??nt,d=-1):f[1]===void 0?d=-2:(d=n.lastIndex-f[2].length,u=f[1],n=f[3]===void 0?F:f[3]==='"'?Qe:Xe):n===Qe||n===Xe?n=F:n===Je||n===Ke?n=nt:(n=F,s=void 0);const P=n===F&&e[a+1].startsWith("/>")?" ":"";i+=n===nt?c+Oo:d>=0?(o.push(u),c.slice(0,d)+yr+c.slice(d)+z+P):c+z+(d===-2?a:P)}return[$r(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class gt{constructor({strings:t,_$litType$:r},o){let s;this.parts=[];let i=0,n=0;const a=t.length-1,c=this.parts,[u,f]=Io(t,r);if(this.el=gt.createElement(u,o),j.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=j.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(yr)){const w=f[n++],P=s.getAttribute(d).split(z),K=/([.?@])?(.*)/.exec(w);c.push({type:1,index:i,name:K[2],strings:P,ctor:K[1]==="."?zo:K[1]==="?"?Mo:K[1]==="@"?Ro:Ht}),s.removeAttribute(d)}else d.startsWith(z)&&(c.push({type:6,index:i}),s.removeAttribute(d));if(wr.test(s.tagName)){const d=s.textContent.split(z),w=d.length-1;if(w>0){s.textContent=Rt?Rt.emptyScript:"";for(let P=0;P<w;P++)s.append(d[P],vt()),j.nextNode(),c.push({type:2,index:++i});s.append(d[w],vt())}}}else if(s.nodeType===8)if(s.data===_r)c.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(z,d+1))!==-1;)c.push({type:7,index:i}),d+=z.length-1}i++}}static createElement(t,r){const o=H.createElement("template");return o.innerHTML=t,o}}function et(e,t,r=e,o){var n,a;if(t===G)return t;let s=o!==void 0?(n=r._$Co)==null?void 0:n[o]:r._$Cl;const i=bt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=s:r._$Cl=s),s!==void 0&&(t=et(e,s._$AS(e,t.values),s,o)),t}class Lo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??H).importNode(r,!0);j.currentNode=s;let i=j.nextNode(),n=0,a=0,c=o[0];for(;c!==void 0;){if(n===c.index){let u;c.type===2?u=new yt(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new Do(i,this,t)),this._$AV.push(u),c=o[++a]}n!==(c==null?void 0:c.index)&&(i=j.nextNode(),n++)}return j.currentNode=H,s}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class yt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,o,s){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=et(this,t,r),bt(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):To(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&bt(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=gt.createElement($r(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(r);else{const n=new Lo(s,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(t){let r=Ye.get(t.strings);return r===void 0&&Ye.set(t.strings,r=new gt(t)),r}k(t){Pe(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const i of t)s===r.length?r.push(o=new yt(this.O(vt()),this.O(vt()),this,this.options)):o=r[s],o._$AI(i),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,s,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=$}_$AI(t,r=this,o,s){const i=this.strings;let n=!1;if(i===void 0)t=et(this,t,r,0),n=!bt(t)||t!==this._$AH&&t!==G,n&&(this._$AH=t);else{const a=t;let c,u;for(t=i[0],c=0;c<i.length-1;c++)u=et(this,a[o+c],r,c),u===G&&(u=this._$AH[c]),n||(n=!bt(u)||u!==this._$AH[c]),u===$?t=$:t!==$&&(t+=(u??"")+i[c+1]),this._$AH[c]=u}n&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zo extends Ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class Mo extends Ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class Ro extends Ht{constructor(t,r,o,s,i){super(t,r,o,s,i),this.type=5}_$AI(t,r=this){if((t=et(this,t,r,0)??$)===G)return;const o=this._$AH,s=t===$&&o!==$||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==$&&(o===$||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Do{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const te=pt.litHtmlPolyfillSupport;te==null||te(gt,yt),(pt.litHtmlVersions??(pt.litHtmlVersions=[])).push("3.2.1");const Vo=(e,t,r)=>{const o=(r==null?void 0:r.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const i=(r==null?void 0:r.renderBefore)??null;o._$litPart$=s=new yt(t.insertBefore(vt(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let x=class extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vo(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return G}};var gr;x._$litElement$=!0,x.finalized=!0,(gr=globalThis.litElementHydrateSupport)==null||gr.call(globalThis,{LitElement:x});const ee=globalThis.litElementPolyfillSupport;ee==null||ee({LitElement:x});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var V,Cr,Sr,kr;class xr{constructor(){Ct(this,V)}async loadData(t){var a;const r=this,o=xt(r,V,Cr),s=o.id,n=`https://notion-api-render.ecocode.online/api/notion/info/${o.tk}/${s}`;try{const u=await(await fetch(n)).json();q(a=r,V,kr).call(a,u),t&&t(!0)}catch(c){console.error("Error fetching data:",c),t&&t(!1,String(c))}}get lessonDesc(){const t=this;return{lessonRawLink:t.lessonRawLink,notionPageUrl:t.notionPageUrl,lessonVnTitle:t.lessonVnTitle}}get coverUrl(){var r,o,s;return((s=(o=(r=this.infos)==null?void 0:r.cover)==null?void 0:o.external)==null?void 0:s.url)??"https://res.cloudinary.com/ecocode/image/upload/v1744701465/samples/cup-on-a-table.jpg"}}V=new WeakSet,Cr=function(){const t=new URLSearchParams(window.location.search),r=t.get("id")??"",o=t.get("tk")??"";return{id:r,tk:o}},Sr=function(){var r;return((r=this.infos)==null?void 0:r.properties.title.title[0].plain_text)??"Unknow Title !"},kr=function(t){const r=this;r.infos=t,r.title=xt(r,V,Sr)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:Ae},Bo=(e=Uo,t,r)=>{const{kind:o,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,e),o==="accessor"){const{name:n}=r;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,c,e)},init(a){return a!==void 0&&this.P(n,void 0,e),a}}}if(o==="setter"){const{name:n}=r;return function(a){const c=this[n];t.call(this,a),this.requestUpdate(n,c,e)}}throw Error("Unsupported decorator location: "+o)};function h(e){return(t,r)=>typeof r=="object"?Bo(e,t,r):((o,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(e){return h({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(e,t){return(r,o,s)=>{const i=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};return qo(r,o,{get(){return i(this)}})}}var Fo=Object.getOwnPropertyDescriptor,Wo=(e,t,r,o)=>{for(var s=o>1?void 0:o?Fo(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let ce=class extends x{render(){return v`
      <div class="head">
        <h1>⛵️ Eco Notion Builder ⛵️</h1>
        <span>Đang tải dữ liệu...</span>
      </div>
      <div class="loading-overlay" id="eco-loading">
        <div class="spinner"></div>
      </div>
    `}};ce.styles=y`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 94vh;
      
    }

    .head {
      text-align: center;
      width: 94vh
      
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
  `;ce=Wo([S("eco-data-loading")],ce);var jo=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,Er=(e,t,r,o)=>{for(var s=o>1?void 0:o?Ho(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&jo(t,r,s),s};let Dt=class extends x{constructor(){super(...arguments),this.message=""}firstUpdated(e){setTimeout(()=>this.remove(),3e3)}render(){return v`${this.message}`}};Dt.styles=y`
    :host {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #333;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      font-size: 14px;
      opacity: 0;
      animation: fadeInOut 3s ease-in-out forwards;
      pointer-events: none;
      z-index: 9999;
    }

    @keyframes fadeInOut {
      0% { opacity: 0; transform: translate(-50%, 20px); }
      10% { opacity: 1; transform: translate(-50%, 0); }
      90% { opacity: 1; transform: translate(-50%, 0); }
      100% { opacity: 0; transform: translate(-50%, 20px); }
    }
  `;Er([h({type:String})],Dt.prototype,"message",2);Dt=Er([S("toast-message")],Dt);var Go=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Ar=(e,t,r,o)=>{for(var s=o>1?void 0:o?Zo(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&Go(t,r,s),s};let Vt=class extends x{constructor(){super()}render(){return v`<h2 class="text-center" id="eco-header-title">${this.text}</h2>`}};Vt.styles=y`
    #eco-header-title {
      margin: 0px;
      /* text-decoration: underline; */
      cursor: pointer;
    }
  `;Ar([h()],Vt.prototype,"text",2);Vt=Ar([S("eco-lesson-title")],Vt);const Pr=y`
  a:hover {
    filter: brightness(1.25);
  }
  :host-context(.sl-theme-light) a {
    color: #0d6efd;
  }
  :host-context(.sl-theme-dark) a {
    color: #9ad9f2;
  }
`;var Jo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Or=(e,t,r,o)=>{for(var s=o>1?void 0:o?Ko(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&Jo(t,r,s),s};let Ut=class extends x{render(){const t=this.desc;return v`
      <span class="left">🇻🇳 ${t==null?void 0:t.lessonVnTitle}</span>
      ${(t==null?void 0:t.notionPageUrl)&&v` <a
        class="right"
        href="${t==null?void 0:t.notionPageUrl}"
        target="_blank"
        rel="noopener noreferrer"
        >📝</a
      >`}
      ${(t==null?void 0:t.lessonRawLink)&&v` <a
        class="right"
        href="${(t==null?void 0:t.lessonRawLink)??""}"
        target="_blank"
        rel="noopener noreferrer"
        >🔗</a
      >`}
    `}};Ut.styles=[Pr,y`
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
    `];Or([h({type:Object})],Ut.prototype,"desc",2);Ut=Or([S("eco-lesson-desc")],Ut);var Xo=Object.defineProperty,Qo=(e,t,r)=>t in e?Xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,re=(e,t,r)=>(Qo(e,typeof t!="symbol"?t+"":t,r),r),Yo=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},oe=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},St=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},tr=(e,t,r)=>(Yo(e,t,"access private method"),r);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Tr(e,t){return Object.is(e,t)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let _=null,ft=!1,Ot=1;const Bt=Symbol("SIGNAL");function Y(e){const t=_;return _=e,t}function ts(){return _}function es(){return ft}const Oe={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Gt(e){if(ft)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(_===null)return;_.consumerOnSignalRead(e);const t=_.nextProducerIndex++;if(rt(_),t<_.producerNode.length&&_.producerNode[t]!==e&&ue(_)){const r=_.producerNode[t];Zt(r,_.producerIndexOfThis[t])}_.producerNode[t]!==e&&(_.producerNode[t]=e,_.producerIndexOfThis[t]=ue(_)?Lr(e,_,t):0),_.producerLastReadVersion[t]=e.version}function rs(){Ot++}function Nr(e){if(!(!e.dirty&&e.lastCleanEpoch===Ot)){if(!e.producerMustRecompute(e)&&!as(e)){e.dirty=!1,e.lastCleanEpoch=Ot;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Ot}}function Ir(e){if(e.liveConsumerNode===void 0)return;const t=ft;ft=!0;try{for(const r of e.liveConsumerNode)r.dirty||ss(r)}finally{ft=t}}function os(){return(_==null?void 0:_.consumerAllowSignalWrites)!==!1}function ss(e){var t;e.dirty=!0,Ir(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function is(e){return e&&(e.nextProducerIndex=0),Y(e)}function ns(e,t){if(Y(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(ue(e))for(let r=e.nextProducerIndex;r<e.producerNode.length;r++)Zt(e.producerNode[r],e.producerIndexOfThis[r]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function as(e){rt(e);for(let t=0;t<e.producerNode.length;t++){const r=e.producerNode[t],o=e.producerLastReadVersion[t];if(o!==r.version||(Nr(r),o!==r.version))return!0}return!1}function Lr(e,t,r){var o;if(Te(e),rt(e),e.liveConsumerNode.length===0){(o=e.watched)==null||o.call(e.wrapper);for(let s=0;s<e.producerNode.length;s++)e.producerIndexOfThis[s]=Lr(e.producerNode[s],e,s)}return e.liveConsumerIndexOfThis.push(r),e.liveConsumerNode.push(t)-1}function Zt(e,t){var r;if(Te(e),rt(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(r=e.unwatched)==null||r.call(e.wrapper);for(let s=0;s<e.producerNode.length;s++)Zt(e.producerNode[s],e.producerIndexOfThis[s])}const o=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[o],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[o],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const s=e.liveConsumerIndexOfThis[t],i=e.liveConsumerNode[t];rt(i),i.producerIndexOfThis[s]=t}}function ue(e){var t;return e.consumerIsAlwaysLive||(((t=e==null?void 0:e.liveConsumerNode)==null?void 0:t.length)??0)>0}function rt(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function Te(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zr(e){if(Nr(e),Gt(e),e.value===de)throw e.error;return e.value}function ls(e){const t=Object.create(cs);t.computation=e;const r=()=>zr(t);return r[Bt]=t,r}const se=Symbol("UNSET"),ie=Symbol("COMPUTING"),de=Symbol("ERRORED"),cs={...Oe,value:se,dirty:!0,error:null,equal:Tr,producerMustRecompute(e){return e.value===se||e.value===ie},producerRecomputeValue(e){if(e.value===ie)throw new Error("Detected cycle in computations.");const t=e.value;e.value=ie;const r=is(e);let o,s=!1;try{o=e.computation.call(e.wrapper),s=t!==se&&t!==de&&e.equal.call(e.wrapper,t,o)}catch(i){o=de,e.error=i}finally{ns(e,r)}if(s){e.value=t;return}e.value=o,e.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function us(){throw new Error}let ds=us;function hs(){ds()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ps(e){const t=Object.create(bs);t.value=e;const r=()=>(Gt(t),t.value);return r[Bt]=t,r}function fs(){return Gt(this),this.value}function vs(e,t){os()||hs(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,gs(e))}const bs={...Oe,equal:Tr,value:void 0};function gs(e){e.version++,rs(),Ir(e)}/**
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
 */const C=Symbol("node");var R;(e=>{var t,r,o,s;class i{constructor(c,u={}){St(this,r),re(this,t);const d=ps(c)[Bt];if(this[C]=d,d.wrapper=this,u){const w=u.equals;w&&(d.equal=w),d.watched=u[e.subtle.watched],d.unwatched=u[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return fs.call(this[C])}set(c){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(es())throw new Error("Writes to signals not permitted during Watcher callback");const u=this[C];vs(u,c)}}t=C,r=new WeakSet,e.isState=a=>typeof a=="object"&&oe(r,a),e.State=i;class n{constructor(c,u){St(this,s),re(this,o);const d=ls(c)[Bt];if(d.consumerAllowSignalWrites=!0,this[C]=d,d.wrapper=this,u){const w=u.equals;w&&(d.equal=w),d.watched=u[e.subtle.watched],d.unwatched=u[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return zr(this[C])}}o=C,s=new WeakSet,e.isComputed=a=>typeof a=="object"&&oe(s,a),e.Computed=n,(a=>{var c,u,f,d;function w(m){let g,p=null;try{p=Y(null),g=m()}finally{Y(p)}return g}a.untrack=w;function P(m){var g;if(!(0,e.isComputed)(m)&&!(0,e.isWatcher)(m))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((g=m[C].producerNode)==null?void 0:g.map(p=>p.wrapper))??[]}a.introspectSources=P;function K(m){var g;if(!(0,e.isComputed)(m)&&!(0,e.isState)(m))throw new TypeError("Called introspectSinks without a Signal argument");return((g=m[C].liveConsumerNode)==null?void 0:g.map(p=>p.wrapper))??[]}a.introspectSinks=K;function bo(m){if(!(0,e.isComputed)(m)&&!(0,e.isState)(m))throw new TypeError("Called hasSinks without a Signal argument");const g=m[C].liveConsumerNode;return g?g.length>0:!1}a.hasSinks=bo;function go(m){if(!(0,e.isComputed)(m)&&!(0,e.isWatcher)(m))throw new TypeError("Called hasSources without a Computed or Watcher argument");const g=m[C].producerNode;return g?g.length>0:!1}a.hasSources=go;class mo{constructor(g){St(this,u),St(this,f),re(this,c);let p=Object.create(Oe);p.wrapper=this,p.consumerMarkedDirty=g,p.consumerIsAlwaysLive=!0,p.consumerAllowSignalWrites=!1,p.producerNode=[],this[C]=p}watch(...g){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");tr(this,f,d).call(this,g);const p=this[C];p.dirty=!1;const E=Y(p);for(const $t of g)Gt($t[C]);Y(E)}unwatch(...g){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");tr(this,f,d).call(this,g);const p=this[C];rt(p);for(let E=p.producerNode.length-1;E>=0;E--)if(g.includes(p.producerNode[E].wrapper)){Zt(p.producerNode[E],p.producerIndexOfThis[E]);const $t=p.producerNode.length-1;if(p.producerNode[E]=p.producerNode[$t],p.producerIndexOfThis[E]=p.producerIndexOfThis[$t],p.producerNode.length--,p.producerIndexOfThis.length--,p.nextProducerIndex--,E<p.producerNode.length){const _o=p.producerIndexOfThis[E],Be=p.producerNode[E];Te(Be),Be.liveConsumerIndexOfThis[_o]=E}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[C].producerNode.filter(p=>p.dirty).map(p=>p.wrapper)}}c=C,u=new WeakSet,f=new WeakSet,d=function(m){for(const g of m)if(!(0,e.isComputed)(g)&&!(0,e.isState)(g))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=m=>oe(u,m),a.Watcher=mo;function yo(){var m;return(m=ts())==null?void 0:m.wrapper}a.currentComputed=yo,a.watched=Symbol("watched"),a.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(R||(R={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms=Symbol("SignalWatcherBrand"),ys=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),er=new WeakMap;function Ne(e){return e[ms]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new R.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new R.Computed(()=>{this._$St.get(),super.performUpdate()});const t=this._$Su=new R.subtle.Watcher(function(){const r=er.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())});er.set(t,this),ys.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach(r=>r.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,r,o){this._$So=!0,super.requestUpdate(t,r,o)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(t){this._$Sh.add(t);const r=this._$So;this.requestUpdate(),this._$So=r}m(t){this._$Sh.delete(t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _s={ATTRIBUTE:1},ws=e=>(...t)=>({_$litDirective$:e,values:t});let $s=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs=(e,t)=>(e==null?void 0:e._$litType$)!==void 0;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */R.State;R.Computed;const he=(e,t)=>new R.State(e,t),jt=class jt{};jt.id=he(""),jt.token=he("");let ot=jt;const De=class De extends Ne(x){_onCopyId(){const t=this,r=this._value;navigator.clipboard.writeText(r).then(()=>{t._showToast("Copied to clipboard:"+r)}).catch(o=>{alert("Failed to copy:"+o)})}_showToast(t){const r=document.createElement("toast-message");r.message=t,document.body.appendChild(r)}};De.styles=y`
  .input-group {
     display: flex;
     gap: 5px;
   }
   label {
     width: 60px;
     line-height: 36px
   }
   input {
     flex: 1;
     height: 30px;
   }
   button {
     width: 45px;
     height: 36px;
   }
 `;let qt=De;var Cs=Object.getOwnPropertyDescriptor,Mr=e=>{throw TypeError(e)},Ss=(e,t,r,o)=>{for(var s=o>1?void 0:o?Cs(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s},ks=(e,t,r)=>t.has(e)||Mr("Cannot "+r),Es=(e,t,r)=>t.has(e)?Mr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),rr=(e,t,r)=>(ks(e,t,"access private method"),r),Tt,Rr,Dr;let or=class extends qt{constructor(){super(...arguments),Es(this,Tt)}get idState(){return ot.id}get _value(){return this.idState.get()}set _value(e){this.idState.set(e)}connectedCallback(){super.connectedCallback();const e=rr(this,Tt,Rr).call(this,"id");e&&(this._value=e)}onInput(e){const t=e.target;this._value=t.value}async onPaste(e){var o;const t=((o=e.clipboardData)==null?void 0:o.getData("text"))??"",r=this.extractNotionId(t);r&&(e.preventDefault(),this._value=r)}extractNotionId(e){const t=e.match(/([a-f0-9]{32})/);if(t){const r=t[1];return`${r.slice(0,8)}-${r.slice(8,12)}-${r.slice(12,16)}-${r.slice(16,20)}-${r.slice(20)}`}return null}async pasteFromClipboard(){const e=this;try{const t=await navigator.clipboard.readText(),r=this.extractNotionId(t);this._value=rr(this,Tt,Dr).call(this,r||t),e._showToast("Pasted to clipboard:"+this._value)}catch(t){console.warn("Clipboard read failed:",t)}}render(){return v` <div class="container mt-5">
      <div class="card shadow rounded-4">
        <div class="card-body">
          <div class="input-group">
            <label for="idInput">Id:</label>
            <input
              type="text"
              class="form-control"
              id="idInput"
              .value=${this._value}
              @input=${this.onInput}
              @paste=${this.onPaste}
              placeholder="Paste Notion link or ID"
            />
            <button @click=${this.pasteFromClipboard}>📋 P</button>
            <button class="btn btn-outline-primary" @click=${this._onCopyId}>
              🍒 C
            </button>
          </div>
        </div>
      </div>
    </div>`}};Tt=new WeakSet;Rr=function(e){return new URLSearchParams(window.location.search).get(e)};Dr=function(e){return e.replace(/-/g,"")};or=Ss([S("eco-lesson-id")],or);var As=Object.getOwnPropertyDescriptor,Vr=e=>{throw TypeError(e)},Ps=(e,t,r,o)=>{for(var s=o>1?void 0:o?As(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s},Os=(e,t,r)=>t.has(e)||Vr("Cannot "+r),Ts=(e,t,r)=>t.has(e)?Vr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ns=(e,t,r)=>(Os(e,t,"access private method"),r),pe,Ur;let sr=class extends qt{constructor(){super(...arguments),Ts(this,pe)}get tokenState(){return ot.token}get _value(){return this.tokenState.get()}set _value(e){this.tokenState.set(e)}connectedCallback(){super.connectedCallback();const e=Ns(this,pe,Ur).call(this,"tk");e&&(this._value=e)}async pasteFromClipboard(){const e=this;try{const t=await navigator.clipboard.readText();this._value=t,e._showToast("Pasted to clipboard:"+t),console.log(t)}catch(t){console.warn("Clipboard read failed:",t)}}render(){const e=this._value;return v` <div class="container mt-5">
      <div class="card shadow rounded-4">
        <div class="card-body">
          <div class="input-group">
            <label for="token-input">Token:</label>
            <input
              type="text"
              class="form-control"
              id="token-input"
              value="${e}"
            />
            <button @click=${this.pasteFromClipboard}>📋 P</button>
            <button class="btn btn-outline-primary" @click=${this._onCopyId}>
              🍒 C
            </button>
          </div>
        </div>
      </div>
    </div>`}};pe=new WeakSet;Ur=function(e){return new URLSearchParams(window.location.search).get(e)};sr=Ps([S("eco-lesson-token")],sr);const Is=y`
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
`;var Ls=Object.defineProperty,zs=Object.getOwnPropertyDescriptor,Br=(e,t,r,o)=>{for(var s=o>1?void 0:o?zs(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&Ls(t,r,s),s};let Ft=class extends x{render(){const t=this.url;return v`
      <div id="eco-header-image">
        <div class="eco-form-header-container">
          ${t&&v`<img
            src="${t}"
            alt="${t}"
            data-index="0"
            class="eco-input-item eco-image eco-full-width-image"
          />`}
        </div>
      </div>
    `}};Ft.styles=[Is,y``];Br([h()],Ft.prototype,"url",2);Ft=Br([S("eco-lesson-img")],Ft);const Ve=class Ve{};Ve.qaType=he(localStorage.getItem("eco-lesson-type")??"1");let Wt=Ve;var Ms=Object.defineProperty,Rs=(e,t,r,o)=>{for(var s=void 0,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(t,r,s)||s);return s&&Ms(t,r,s),s},Z,fe,qr;class Ie extends Ne(x){constructor(){super();Ct(this,Z);this.message=""}async handleClick(){await q(this,Z,qr).call(this)}get type(){return Wt.qaType.get()}}Z=new WeakSet,fe=function(r){return new URLSearchParams(window.location.search).get(r)},qr=async function(){var c,u;const r=this;r.message="Building page...";const o=r.type,s=q(c=r,Z,fe).call(c,"id"),i=q(u=r,Z,fe).call(u,"tk"),n="https://eco-edu-learn-back-js-node-notion-api.onrender.com/api/notion/build-page",a={pageId:s,options:{notionToken:i,buildNav1:o==="1"||o==="5"||o==="6",buildNav2:o==="2"||o==="5"||o==="6",buildNav3:o==="3"||o==="5"||o==="6",buildParagraphs:o==="4"||o==="6"}};try{const d=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();return console.log("Kết quả từ API:",d),r.message=`Built done: ${d.success}`,d}catch(f){console.error("Lỗi khi gửi yêu cầu:",f)}};Rs([h({type:String})],Ie.prototype,"message");var Ds=Object.getOwnPropertyDescriptor,Fr=e=>{throw TypeError(e)},Vs=(e,t,r,o)=>{for(var s=o>1?void 0:o?Ds(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s},Us=(e,t,r)=>t.has(e)||Fr("Cannot "+r),Bs=(e,t,r)=>t.has(e)?Fr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ir=(e,t,r)=>(Us(e,t,"access private method"),r),Nt,ve;let be=class extends Ie{constructor(){super(...arguments),Bs(this,Nt)}get notionId(){return ot.id.get()}get notionToken(){return ot.token.get()}async handleClick(){const e=ir(this,Nt,ve).call(this,this.notionId),t=this.notionToken,r=`/?id=${e}&tk=${t}`;window.location.href=r}async onGoToNotion(){const t=`https://www.notion.so/${ir(this,Nt,ve).call(this,this.notionId)}`;window.location.href=t}async showTest(){const e=window.innerWidth,t=window.innerHeight;alert(`Kích thước màn hình: ${e} x ${t}`)}render(){return v`
    <eco-toggle-app-theme-btn></eco-toggle-app-theme-btn>
      <sl-button
        @click="${this.onGoToNotion}"
        variant="neutral"
        id="go-notion-btn"
      >
        🔗 Notion
      </sl-button>
      <sl-button
        @click="${this.handleClick}"
        variant="success"
        id="comprehensive-test-btn"
      >
        ⛵️ Go to Page
      </sl-button>
      <!-- <sl-button @click="${this.showTest}" variant="default" id="show-test-btn">
        💎 Show test
      </sl-button> -->
    `}};Nt=new WeakSet;ve=function(e){return e.replace(/-/g,"")};be.styles=y`
    :host {
      float: left;
    }
  `;be=Vs([S("eco-start-lesson-cpt-btn")],be);var qs=Object.getOwnPropertyDescriptor,Fs=(e,t,r,o)=>{for(var s=o>1?void 0:o?qs(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let ge=class extends Ie{get variant(){return"warning"}render(){const e=this.type,t=this.message;return v`
    <span>${t}</span>
      <sl-button
        @click="${this.handleClick}"
        variant="warning"
        id="sequential-test-btn"
      >
        🔰 Build with Option: ${e}
      </sl-button>
    `}};ge.styles=y`
    :host {
      float: right;
    }
    span{
      margin-right: 5px;
    }
  `;ge=Fs([S("eco-start-lesson-sqt-btn")],ge);var Ws=Object.getOwnPropertyDescriptor,js=(e,t,r,o)=>{for(var s=o>1?void 0:o?Ws(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let me=class extends x{render(){return v`
      <div id="test-btns-container">
        <eco-start-lesson-cpt-btn></eco-start-lesson-cpt-btn>
        <eco-start-lesson-sqt-btn></eco-start-lesson-sqt-btn>
      </div>
    `}};me.styles=y`
    :host {
      clear: both;
    }
  `;me=js([S("eco-start-lesson-cmds")],me);var Hs=Object.getOwnPropertyDescriptor,Wr=e=>{throw TypeError(e)},Gs=(e,t,r,o)=>{for(var s=o>1?void 0:o?Hs(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s},Zs=(e,t,r)=>t.has(e)||Wr("Cannot "+r),Js=(e,t,r)=>t.has(e)?Wr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),nr=(e,t,r)=>(Zs(e,t,"access private method"),r),It,jr,Hr;let ye=class extends Ne(x){constructor(){super(...arguments),Js(this,It)}get qaState(){return Wt.qaType}get value(){return this.qaState.get()}set value(e){this.qaState.set(e)}handleChange(e){var t;const o=e.target.value;nr(t=nr(this,It,jr).call(this,o),It,Hr).call(t)}get displayInfo(){const e=this.value;return e=="1"?["Shell hóa","Chuẩn hóa các dòng title ⚡️ Tạo các nav & links ⚡️ Tạo ids từ cha đến con ⚡️ Gán ảnh đại diện mặc định"]:e=="2"?["Ảnh hóa","Upload ảnh lên imgur và gán vào Notion page"]:e=="3"?["",""]:e=="4"?["",""]:e=="5"?["",""]:e=="6"?["",""]:e=="7"?["",""]:e=="8"?["",""]:e=="9"?["",""]:["",""]}render(){const e=this,t=e.value,r=e.displayInfo[0],o=e.displayInfo[1],s=this.handleChange;return v`
      <!-- <div> -->
        <div>
         
          <sl-radio-group
            name="lesson-type"
            value="${t}"
            @sl-change="${s}"
          >
            <sl-radio-button value="1">🔥 Nav 1</sl-radio-button>
            <sl-radio-button value="2">🔥 Nav 2</sl-radio-button>
            <sl-radio-button value="3">🔥 Nav 3</sl-radio-button>
           
          </sl-radio-group>
           <sl-radio-group
            name="lesson-type"
            value="${t}"
            @sl-change="${s}"
          >
          <sl-radio-button value="4">🔥 Paragra</sl-radio-button>
            <sl-radio-button value="5">🔥 Nav 123</sl-radio-button>
            <sl-radio-button value="6">🔥 Nav & Par</sl-radio-button>
            <!-- <sl-radio-button value="4">❓ ✍️ 💡</sl-radio-button>
            <sl-radio-button value="5">❓ 🖱️ 💡</sl-radio-button>
            <sl-radio-button value="6">💬 ✍️ 🦋</sl-radio-button>
            <sl-radio-button value="7">💬 🖱️ 🦋</sl-radio-button>
            <sl-radio-button value="8">🦋 🖱️ 💬</sl-radio-button>
            <sl-radio-button value="9">💍 🖱️ 💍</sl-radio-button> -->
          </sl-radio-group> 
        </div>
        <!-- <br>
        <div>
          <div class="msg">💍 <span class="title">${r}</span></div>
          <div class="msg">👉 <span class="desc">${o}</span></div>
        </div> -->
      <!-- </div> -->
    `}};It=new WeakSet;jr=function(e){const t=this;return t.value=e,t};Hr=function(){const e=this;return localStorage.setItem("eco-lesson-type",e.value),e};ye.styles=y`
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
      margin-top: 15px;
    }
  `;ye=Gs([S("eco-start-lesson-type-selector")],ye);var Ks=Object.getOwnPropertyDescriptor,Gr=e=>{throw TypeError(e)},Xs=(e,t,r,o)=>{for(var s=o>1?void 0:o?Ks(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s},Qs=(e,t,r)=>t.has(e)||Gr("Cannot "+r),Ys=(e,t,r)=>t.has(e)?Gr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),kt=(e,t,r)=>(Qs(e,t,"access private method"),r),Q,Zr,Jr,_e;let we=class extends x{constructor(){super(),Ys(this,Q),this.theme=localStorage.getItem("theme")||"sl-theme-light"}toggleTheme(){var e,t,r,o;const s=this,i=s.theme==="sl-theme-light",n=s.theme==="sl-theme-dark";kt(o=kt(r=kt(t=kt(e=s,Q,Zr).call(e,i),Q,_e).call(t,"sl-theme-light",n),Q,_e).call(r,"sl-theme-dark",i),Q,Jr).call(o)}connectedCallback(){super.connectedCallback();const e=this;e.theme&&document.documentElement.classList.add(e.theme)}render(){return v`<sl-button variant="default" @click="${this.toggleTheme}"
      >🌓</sl-button
    >`}};Q=new WeakSet;Zr=function(e){const t=this;return t.theme=e?"sl-theme-dark":"sl-theme-light",t};Jr=function(){const e=this;return localStorage.setItem("theme",e.theme??""),e};_e=function(e,t){return document.documentElement.classList.toggle(e,t),this};we.properties={theme:{type:String}};we=Xs([S("eco-toggle-app-theme-btn")],we);var ti=Object.defineProperty,Le=(e,t,r,o)=>{for(var s=void 0,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(t,r,s)||s);return s&&ti(t,r,s),s},U,Kr,Xr,Qr;const Ue=class Ue extends x{constructor(){super(...arguments);Ct(this,U)}get _routeName(){throw new Error("Need implement EcoLessonRelations > _routeName")}get _title(){throw new Error("Need implement EcoLessonRelations > _title")}async _loadData(){const r=this;r.loading=!0,r.reqParams=xt(r,U,Kr);const o=r.reqParams.id,s=r.reqParams.tk,n=`https://notion-api-render.ecocode.online/api/notion/${r._routeName}/${s}/${o}`;try{const a=await fetch(n);r.data=await a.json(),r.loading=!1}catch(a){console.error("Error fetching data:",a),r.loading=!1}}connectedCallback(){super.connectedCallback(),this._loadData()}render(){var a,c,u,f;const r=this,o=(a=r.reqParams)==null?void 0:a.tk,s=r._title,i=v`<h3>${s}</h3>`,n=v`${i}<div>Loading...</div>`;return console.log("length: ",(c=r.data)==null?void 0:c.length),r.loading?n:(u=r.data)!=null&&u.length?v`${i}
    <ul>
    ${(f=r.data)==null?void 0:f.map(d=>{const w=q(this,U,Qr).call(this,d.id,o),P=d.title;return v`
      <li>
        <a href="${w}">${P}</a>
      </li>`})}
    </ul>`:""}};U=new WeakSet,Kr=function(){const r=new URLSearchParams(window.location.search),o=r.get("id")??"",s=r.get("tk")??"";return{id:o,tk:s}},Xr=function(r){return r.replace(/-/g,"")},Qr=function(r,o){return r=q(this,U,Xr).call(this,r),`/?id=${r}&tk=${o}`},Ue.styles=[Pr,y`
      :host {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      li {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    `];let D=Ue;Le([A()],D.prototype,"loading");Le([A()],D.prototype,"data");Le([A()],D.prototype,"reqParams");var ei=Object.getOwnPropertyDescriptor,ri=(e,t,r,o)=>{for(var s=o>1?void 0:o?ei(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let ar=class extends D{get _routeName(){return"parents"}get _title(){return"Parent Pages"}};ar=ri([S("eco-lesson-parents")],ar);var oi=Object.getOwnPropertyDescriptor,si=(e,t,r,o)=>{for(var s=o>1?void 0:o?oi(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let lr=class extends D{get _routeName(){return"friends"}get _title(){return"Friend Pages"}};lr=si([S("eco-lesson-friends")],lr);var ii=Object.getOwnPropertyDescriptor,ni=(e,t,r,o)=>{for(var s=o>1?void 0:o?ii(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=n(s)||s);return s};let cr=class extends D{get _routeName(){return"children"}get _title(){return"Children Pages"}};cr=ni([S("eco-lesson-children")],cr);var ai=Object.defineProperty,li=Object.getOwnPropertyDescriptor,Yr=(e,t,r,o)=>{for(var s=o>1?void 0:o?li(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&ai(t,r,s),s};let mt=class extends x{constructor(){super()}render(){const t=this.svc,r=t==null?void 0:t.title;return v`
      <eco-lesson-title .text=${r}></eco-lesson-title>
      <eco-lesson-id></eco-lesson-id>
      <eco-lesson-token></eco-lesson-token>
      <eco-lesson-img .url=${t==null?void 0:t.coverUrl}></eco-lesson-img>

      <eco-start-lesson-cmds class="row"></eco-start-lesson-cmds>

      <eco-start-lesson-type-selector
        class="row"
      ></eco-start-lesson-type-selector>

      <eco-lesson-parents></eco-lesson-parents>
      <eco-lesson-friends></eco-lesson-friends>
      <eco-lesson-children></eco-lesson-children>
    `}};mt.properties={svc:{type:xr}};mt.styles=y`
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .row {
      margin-top: 10px;
    }
  `;Yr([h({type:Object})],mt.prototype,"svc",2);mt=Yr([S("eco-lesson-shell")],mt);var ci=y`
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
`;const $e=new Set,tt=new Map;let W,ze="ltr",Me="en";const to=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(to){const e=new MutationObserver(ro);ze=document.documentElement.dir||"ltr",Me=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function eo(...e){e.map(t=>{const r=t.$code.toLowerCase();tt.has(r)?tt.set(r,Object.assign(Object.assign({},tt.get(r)),t)):tt.set(r,t),W||(W=t)}),ro()}function ro(){to&&(ze=document.documentElement.dir||"ltr",Me=document.documentElement.lang||navigator.language),[...$e.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let ui=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){$e.add(this.host)}hostDisconnected(){$e.delete(this.host)}dir(){return`${this.host.dir||ze}`.toLowerCase()}lang(){return`${this.host.lang||Me}`.toLowerCase()}getTranslationData(t){var r,o;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s==null?void 0:s.language.toLowerCase(),n=(o=(r=s==null?void 0:s.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",a=tt.get(`${i}-${n}`),c=tt.get(i);return{locale:s,language:i,region:n,primary:a,secondary:c}}exists(t,r){var o;const{primary:s,secondary:i}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(s&&s[t]||i&&i[t]||r.includeFallback&&W&&W[t])}term(t,...r){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(s&&s[t])i=s[t];else if(W&&W[t])i=W[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...r):i}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var oo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};eo(oo);var di=oo,so=class extends ui{};eo(di);var J=y`
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
`,io=Object.defineProperty,hi=Object.defineProperties,pi=Object.getOwnPropertyDescriptor,fi=Object.getOwnPropertyDescriptors,ur=Object.getOwnPropertySymbols,vi=Object.prototype.hasOwnProperty,bi=Object.prototype.propertyIsEnumerable,no=e=>{throw TypeError(e)},dr=(e,t,r)=>t in e?io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_t=(e,t)=>{for(var r in t||(t={}))vi.call(t,r)&&dr(e,r,t[r]);if(ur)for(var r of ur(t))bi.call(t,r)&&dr(e,r,t[r]);return e},ao=(e,t)=>hi(e,fi(t)),l=(e,t,r,o)=>{for(var s=o>1?void 0:o?pi(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&io(t,r,s),s},lo=(e,t,r)=>t.has(e)||no("Cannot "+r),gi=(e,t,r)=>(lo(e,t,"read from private field"),t.get(e)),mi=(e,t,r)=>t.has(e)?no("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),yi=(e,t,r,o)=>(lo(e,t,"write to private field"),t.set(e,r),r),Lt,O=class extends x{constructor(){super(),mi(this,Lt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,_t({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${i} has already been registered.`)}attributeChangedCallback(e,t,r){gi(this,Lt)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),yi(this,Lt,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};Lt=new WeakMap;O.version="2.20.0";O.dependencies={};l([h()],O.prototype,"dir",2);l([h()],O.prototype,"lang",2);var co=class extends O{constructor(){super(...arguments),this.localize=new so(this)}render(){return v`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};co.styles=[J,ci];var at=new WeakMap,lt=new WeakMap,ct=new WeakMap,ne=new WeakSet,Et=new WeakMap,uo=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{r.formData.append(s,a.toString())}):r.formData.append(s,i.toString()))},this.handleFormSubmit=r=>{var o;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=at.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Et.set(this.host,[])},this.handleInteraction=r=>{const o=Et.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=_t({form:r=>{const o=r.form;if(o){const i=r.getRootNode().querySelector(`#${o}`);if(i)return i}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Et.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Et.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,at.has(this.form)?at.get(this.form).add(this.host):at.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),lt.has(this.form)||(lt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ct.has(this.form)||(ct.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=at.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),lt.has(this.form)&&(this.form.reportValidity=lt.get(this.form),lt.delete(this.form)),ct.has(this.form)&&(this.form.checkValidity=ct.get(this.form),ct.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ne.add(e):ne.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!ne.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Jt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),_i=Object.freeze(ao(_t({},Jt),{valid:!1,valueMissing:!0})),wi=Object.freeze(ao(_t({},Jt),{valid:!1,customError:!0})),ho=y`
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
`,Re=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},xe="";function hr(e){xe=e}function $i(e=""){if(!xe){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)hr(r.getAttribute("data-shoelace"));else{const o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";o&&(s=o.getAttribute("src")),hr(s.split("/").slice(0,-1).join("/"))}}return xe.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var xi={name:"default",resolver:e=>$i(`assets/icons/${e}.svg`)},Ci=xi,pr={caret:`
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
  `},Si={name:"system",resolver:e=>e in pr?`data:image/svg+xml,${encodeURIComponent(pr[e])}`:""},ki=Si,Ei=[Ci,ki],Ce=[];function Ai(e){Ce.push(e)}function Pi(e){Ce=Ce.filter(t=>t!==e)}function fr(e){return Ei.find(t=>t.name===e)}var Oi=y`
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
`;function B(e,t){const r=_t({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:i}=o,n=Array.isArray(e)?e:[e];o.update=function(a){n.forEach(c=>{const u=c;if(a.has(u)){const f=a.get(u),d=this[u];f!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[s](f,d)}}),i.call(this,a)}}}var ut=Symbol(),At=Symbol(),ae,le=new Map,I=class extends O{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t!=null&&t.spriteSheet)return this.svg=v`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?ut:At}catch{return At}try{const s=document.createElement("div");s.innerHTML=await o.text();const i=s.firstElementChild;if(((r=i==null?void 0:i.tagName)==null?void 0:r.toLowerCase())!=="svg")return ut;ae||(ae=new DOMParser);const a=ae.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ut}catch{return ut}}connectedCallback(){super.connectedCallback(),Ai(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Pi(this)}getIconSource(){const e=fr(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?fr(this.library):void 0;if(!t){this.svg=null;return}let s=le.get(t);if(s||(s=this.resolveIcon(t,o),le.set(t,s)),!this.initialRender)return;const i=await s;if(i===At&&le.delete(t),t===this.getIconSource().url){if(xs(i)){if(this.svg=i,o){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&n&&o.mutator(n)}return}switch(i){case At:case ut:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=o==null?void 0:o.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};I.styles=[J,Oi];l([A()],I.prototype,"svg",2);l([h({reflect:!0})],I.prototype,"name",2);l([h()],I.prototype,"src",2);l([h()],I.prototype,"label",2);l([h({reflect:!0})],I.prototype,"library",2);l([B("label")],I.prototype,"handleLabelChange",1);l([B(["name","src","library"])],I.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=ws(class extends $s{constructor(e){var t;if(super(e),e.type!==_s.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((o=this.nt)!=null&&o.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(n?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return G}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=Symbol.for(""),Ti=e=>{if((e==null?void 0:e.r)===po)return e==null?void 0:e._$litStatic$},vr=(e,...t)=>({_$litStatic$:t.reduce((r,o,s)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[s+1],e[0]),r:po}),br=new Map,Ni=e=>(t,...r)=>{const o=r.length;let s,i;const n=[],a=[];let c,u=0,f=!1;for(;u<o;){for(c=t[u];u<o&&(i=r[u],(s=Ti(i))!==void 0);)c+=s+t[++u],f=!0;u!==o&&a.push(i),n.push(c),u++}if(u===o&&n.push(t[o]),f){const d=n.join("$$lit$$");(t=br.get(d))===void 0&&(n.raw=n,br.set(d,t=n)),r=a}return e(t,...r)},zt=Ni(v);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??$;var b=class extends O{constructor(){super(...arguments),this.formControlController=new uo(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Re(this,"[default]","prefix","suffix"),this.localize=new so(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Jt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?vr`a`:vr`button`;return zt`
      <${t}
        part="base"
        class=${Kt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:this.type)}
        title=${this.title}
        name=${N(e?void 0:this.name)}
        value=${N(e?void 0:this.value)}
        href=${N(e&&!this.disabled?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e?this.rel:void 0)}
        role=${N(e?void 0:"button")}
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
        ${this.caret?zt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?zt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};b.styles=[J,ho];b.dependencies={"sl-icon":I,"sl-spinner":co};l([it(".button")],b.prototype,"button",2);l([A()],b.prototype,"hasFocus",2);l([A()],b.prototype,"invalid",2);l([h()],b.prototype,"title",2);l([h({reflect:!0})],b.prototype,"variant",2);l([h({reflect:!0})],b.prototype,"size",2);l([h({type:Boolean,reflect:!0})],b.prototype,"caret",2);l([h({type:Boolean,reflect:!0})],b.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],b.prototype,"loading",2);l([h({type:Boolean,reflect:!0})],b.prototype,"outline",2);l([h({type:Boolean,reflect:!0})],b.prototype,"pill",2);l([h({type:Boolean,reflect:!0})],b.prototype,"circle",2);l([h()],b.prototype,"type",2);l([h()],b.prototype,"name",2);l([h()],b.prototype,"value",2);l([h()],b.prototype,"href",2);l([h()],b.prototype,"target",2);l([h()],b.prototype,"rel",2);l([h()],b.prototype,"download",2);l([h()],b.prototype,"form",2);l([h({attribute:"formaction"})],b.prototype,"formAction",2);l([h({attribute:"formenctype"})],b.prototype,"formEnctype",2);l([h({attribute:"formmethod"})],b.prototype,"formMethod",2);l([h({attribute:"formnovalidate",type:Boolean})],b.prototype,"formNoValidate",2);l([h({attribute:"formtarget"})],b.prototype,"formTarget",2);l([B("disabled",{waitUntilFirstUpdate:!0})],b.prototype,"handleDisabledChange",1);b.define("sl-button");var Ii=y`
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
`,L=class extends O{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return v`
      <span
        part="base"
        class=${Kt({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?v` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};L.styles=[J,Ii];L.dependencies={"sl-icon":I};l([A()],L.prototype,"checked",2);l([A()],L.prototype,"hasFocus",2);l([h()],L.prototype,"value",2);l([h({reflect:!0})],L.prototype,"size",2);l([h({type:Boolean,reflect:!0})],L.prototype,"disabled",2);l([B("checked")],L.prototype,"handleCheckedChange",1);l([B("disabled",{waitUntilFirstUpdate:!0})],L.prototype,"handleDisabledChange",1);L.define("sl-radio");var Li=y`
  ${ho}

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
`,T=class extends O{constructor(){super(...arguments),this.hasSlotController=new Re(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return zt`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Kt({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${N(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};T.styles=[J,Li];l([it(".button")],T.prototype,"input",2);l([it(".hidden-input")],T.prototype,"hiddenInput",2);l([A()],T.prototype,"hasFocus",2);l([h({type:Boolean,reflect:!0})],T.prototype,"checked",2);l([h()],T.prototype,"value",2);l([h({type:Boolean,reflect:!0})],T.prototype,"disabled",2);l([h({reflect:!0})],T.prototype,"size",2);l([h({type:Boolean,reflect:!0})],T.prototype,"pill",2);l([B("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);T.define("sl-radio-button");var zi=y`
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
`,Mi=y`
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
`,Ri=y`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,wt=class extends O{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=dt(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=dt(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=dt(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=dt(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),o=dt(t);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",r===0),o.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),o.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),o.toggleAttribute("data-sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return v`
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
    `}};wt.styles=[J,Ri];l([it("slot")],wt.prototype,"defaultSlot",2);l([A()],wt.prototype,"disableRole",2);l([h()],wt.prototype,"label",2);function dt(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var k=class extends O{constructor(){super(...arguments),this.formControlController=new uo(this),this.hasSlotController=new Re(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?wi:e?_i:Jt}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),o=this.value;!t||t.disabled||(this.value=t.value,r.forEach(s=>s.checked=s===t),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(a=>!a.disabled),o=(t=r.find(a=>a.checked))!=null?t:r[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,i=this.value;let n=r.indexOf(o)+s;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=r.some(o=>o.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(o=>o.checked))if(this.hasButtonGroup){const o=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");o&&o.setAttribute("tabindex","0")}else r[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const o=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),r=t.find(i=>i.checked),o=t.find(i=>!i.disabled),s=r||o;s&&s.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t,s=v`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return v`
      <fieldset
        part="form-control"
        class=${Kt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
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

          ${this.hasButtonGroup?v`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};k.styles=[J,Mi,zi];k.dependencies={"sl-button-group":wt};l([it("slot:not([name])")],k.prototype,"defaultSlot",2);l([it(".radio-group__validation-input")],k.prototype,"validationInput",2);l([A()],k.prototype,"hasButtonGroup",2);l([A()],k.prototype,"errorMessage",2);l([A()],k.prototype,"defaultValue",2);l([h()],k.prototype,"label",2);l([h({attribute:"help-text"})],k.prototype,"helpText",2);l([h()],k.prototype,"name",2);l([h({reflect:!0})],k.prototype,"value",2);l([h({reflect:!0})],k.prototype,"size",2);l([h({reflect:!0})],k.prototype,"form",2);l([h({type:Boolean,reflect:!0})],k.prototype,"required",2);l([B("size",{waitUntilFirstUpdate:!0})],k.prototype,"handleSizeChange",1);l([B("value")],k.prototype,"handleValueChange",1);k.define("sl-radio-group");var Di=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,fo=e=>{throw TypeError(e)},Xt=(e,t,r,o)=>{for(var s=o>1?void 0:o?Vi(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&Di(t,r,s),s},Ui=(e,t,r)=>t.has(e)||fo("Cannot "+r),Bi=(e,t,r)=>t.has(e)?fo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),qi=(e,t,r)=>(Ui(e,t,"access private method"),r),Se,vo;let st=class extends x{constructor(){super(),Bi(this,Se),this.loading=!1,this.success=!1,this.message="",this.dataService=new xr}connectedCallback(){super.connectedCallback(),qi(this,Se,vo).call(this)}render(){const e=this.loading,t=this.success,r=this.message,o=this.dataService;return v`
      <div id="app">
        <div id="eco-body-content">
          
          <div class="center-container">
            ${e?v` <eco-data-loading> </eco-data-loading>`:v`
                  ${t?v`<eco-lesson-shell .svc=${o}>
                      </eco-lesson-shell>`:v`<div>${r}</div>`}
                `}
          </div>
        </div>
      </div>
    `}};Se=new WeakSet;vo=function(){const e=this,t=e.dataService;e.loading=!0,t.loadData((r,o)=>{e.loading=!1,e.success=r,e.message=o})};st.styles=y`
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
      min-width: 500px;
      max-width: 700px;
      border: 1 solid red;
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
  `;Xt([h({type:Boolean})],st.prototype,"loading",2);Xt([h({type:Boolean})],st.prototype,"success",2);Xt([h({type:String})],st.prototype,"message",2);st=Xt([S("eco-app")],st);
