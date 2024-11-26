"use strict";var B=function(f,i){return function(){return i||f((i={exports:{}}).exports,i),i.exports}};var N=B(function(mr,Y){"use strict";function Q(f){var i,v;for(i=[];v=f.next(),!v.done;)i.push(v.value);return i}Y.exports=Q});var D=B(function(yr,C){"use strict";function W(f,i,v){var E,w,s;for(E=[],s=-1;w=f.next(),!w.done;)s+=1,E.push(i.call(v,w.value,s));return E}C.exports=W});var K=B(function(pr,J){"use strict";var q=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,X=require("@stdlib/assert-is-integer").isPrimitive,O=require("@stdlib/assert-is-collection"),x=require("@stdlib/assert-is-arraybuffer"),U=require("@stdlib/assert-is-object"),c=require("@stdlib/assert-is-function"),Z=require("@stdlib/assert-is-string").isPrimitive,I=require("@stdlib/array-base-assert-is-byte-order"),$=require("@stdlib/string-base-lowercase"),rr=require("@stdlib/assert-has-iterator-symbol-support"),A=require("@stdlib/symbol-iterator"),h=require("@stdlib/utils-define-nonenumerable-read-only-property"),er=require("@stdlib/assert-is-prototype-of"),V=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),R=require("@stdlib/array-buffer"),T=require("@stdlib/array-dataview"),S=require("@stdlib/array-base-getter"),P=require("@stdlib/array-base-accessor-getter"),tr=require("@stdlib/array-base-assert-contains").factory,nr=require("@stdlib/ndarray-base-bytes-per-element"),ir=require("@stdlib/string-base-capitalize"),u=require("@stdlib/string-format"),G=N(),ar=D(),H=rr(),or=["float64","float32","int32","int16","uint32","uint16"],ur={float64:"setFloat64",float32:"setFloat32",int32:"setInt32",int16:"setInt16",uint32:"setUint32",uint16:"setUint16"},sr={float64:"getFloat64",float32:"getFloat32",int32:"getInt32",int16:"getInt16",uint32:"getUint32",uint16:"getUint16"},b={c:"a",f:"a",i:"an",u:"a",b:"a"},fr=tr(or);function F(f){return Z(f)?$(f):null}function z(f){return f==="little-endian"}function lr(f){return ir(f)+"ArrayFE"}function vr(f){var i,v,E,w;if(!fr(f))throw new TypeError(u("invalid argument. First argument must be a supported data type. Value: `%s`.",f));i=nr(f),v=lr(f),E=sr[f],w=ur[f];function s(){var a,t,e,n,r,l,o,y;if(e=arguments.length,!(this instanceof s))return e<2?new s(arguments[0]):e===2?new s(arguments[0],arguments[1]):e===3?new s(arguments[0],arguments[1],arguments[2]):new s(arguments[0],arguments[1],arguments[2],arguments[3]);if(t=F(arguments[0]),t===null||!I(t))throw new TypeError(u("invalid argument. First argument must be a supported byte order. Value: `%s`.",arguments[0]));if(n=z(t),e-=1,e===0)r=new T(new R(0));else if(e===1)if(o=arguments[e],q(o))r=new T(new R(o*i));else if(O(o))r=j(new T(new R(o.length*i)),o,n);else if(x(o))r=new T(o);else if(U(o)){if(H===!1)throw new TypeError(u("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",o));if(!c(o[A]))throw new TypeError(u("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",o));if(r=o[A](),!c(r.next))throw new TypeError(u("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",o));y=G(r),r=j(new T(new R(y.length*i)),y,n)}else throw new TypeError(u("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",o));else{if(r=arguments[1],!x(r))throw new TypeError(u("invalid argument. Must provide an ArrayBuffer. Value: `%s`.",r));if(a=arguments[2],!q(a))throw new TypeError(u("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",a));if(e===2)r=new T(r,a);else{if(l=arguments[3],!q(l))throw new TypeError(u("invalid argument. Length must be a nonnegative integer. Value: `%s`.",l));if(l*=i,l>r.byteLength-a)throw new RangeError(u("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",l));r=new T(r,a,l)}}return h(this,"_buffer",r),h(this,"_length",r.byteLength/i),h(this,"_isLE",n),this}return h(s,"BYTES_PER_ELEMENT",i),h(s,"name",v),h(s,"from",function(t,e){var n,r,l,o,y,g,m,L,M,_,p;if(!c(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!k(this))throw new TypeError(u("invalid invocation. `this` is not %s %s.",b[f[0]],v));if(r=F(t),r===null||!I(r))throw new TypeError(u("invalid argument. First argument must be a supported byte order. Value: `%s`.",t));if(y=z(r),l=arguments.length,l>2){if(o=arguments[2],!c(o))throw new TypeError(u("invalid argument. Third argument must be a function. Value: `%s`.",o));l>3&&(n=arguments[3])}if(O(e)){if(o){for(_=e.length,e.get&&e.set?M=P("default"):M=S("default"),g=new this(r,_),m=g._buffer,p=0;p<_;p++)m[w](p*i,o.call(n,M(e,p),p),y);return g}return new this(r,e)}if(U(e)&&H&&c(e[A])){if(m=e[A](),!c(m.next))throw new TypeError(u("invalid argument. Second argument must be an array-like object or an iterable. Value: `%s`.",e));for(o?L=ar(m,o,n):L=G(m),_=L.length,g=new this(r,_),m=g._buffer,p=0;p<_;p++)m[w](p*i,L[p],y);return g}throw new TypeError(u("invalid argument. Second argument must be an array-like object or an iterable. Value: `%s`.",e))}),h(s,"of",function(t){var e,n,r;if(!c(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!k(this))throw new TypeError(u("invalid invocation. `this` is not %s %s.",b[f[0]],v));if(e=F(t),e===null||!I(e))throw new TypeError(u("invalid argument. First argument must be a supported byte order. Value: `%s`.",t));for(n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);return new this(e,n)}),h(s.prototype,"at",function(t){var e;if(!d(this))throw new TypeError(u("invalid invocation. `this` is not %s %s.",b[f[0]],v));if(!X(t))throw new TypeError(u("invalid argument. Must provide an integer. Value: `%s`.",t));if(e=this._length,t<0&&(t+=e),!(t<0||t>=e))return this._buffer[E](t*i,this._isLE)}),V(s.prototype,"buffer",function(){return this._buffer.buffer}),V(s.prototype,"byteLength",function(){return this._buffer.byteLength}),V(s.prototype,"byteOffset",function(){return this._buffer.byteOffset}),h(s.prototype,"BYTES_PER_ELEMENT",s.BYTES_PER_ELEMENT),h(s.prototype,"every",function(t,e){var n,r;if(!d(this))throw new TypeError(u("invalid invocation. `this` is not %s %s.",b[f[0]],v));if(!c(t))throw new TypeError(u("invalid argument. First argument must be a function. Value: `%s`.",t));for(n=this._buffer,r=0;r<this._length;r++)if(!t.call(e,n[E](r*i,this._isLE),r,this))return!1;return!0}),h(s.prototype,"forEach",function(t,e){var n,r;if(!d(this))throw new TypeError(u("invalid invocation. `this` is not %s %s.",b[f[0]],v));if(!c(t))throw new TypeError(u("invalid argument. First argument must be a function. Value: `%s`.",t));for(n=this._buffer,r=0;r<this._length;r++)t.call(e,n[E](r*i,this._isLE),r,this)}),h(s.prototype,"get",function(t){if(!d(this))throw new TypeError(u("invalid invocation. `this` is not %s %s.",b[f[0]],v));if(!q(t))throw new TypeError(u("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));if(!(t>=this._length))return this._buffer[E](t*i,this._isLE)}),V(s.prototype,"length",function(){return this._length}),h(s.prototype,"set",function(t){var e,n,r,l,o,y,g,m;if(!d(this))throw new TypeError(u("invalid invocation. `this` is not %s %s.",b[f[0]],v));if(r=this._buffer,arguments.length>1){if(n=arguments[1],!q(n))throw new TypeError(u("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(O(t)){if(y=t.length,n+y>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=t,e.get&&e.set?o=P("default"):o=S("default"),m=r.byteOffset+n*i,e.buffer===r.buffer&&e.byteOffset<m&&e.byteOffset+e.byteLength>m){for(l=[],g=0;g<t.length;g++)l.push(o(t,g));e=l,o=S("default")}for(g=0;g<y;n++,g++)r[w](n*i,o(e,g),this._isLE);return}if(n>=this._length)throw new RangeError(u("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));r[w](n*i,t,this._isLE)}),h(s.prototype,"toString",function(){var t,e,n;if(!d(this))throw new TypeError(u("invalid invocation. `this` is not %s %s.",b[f[0]],v));for(t=[],e=this._buffer,n=0;n<this._length;n++)t.push(e[E](n*i,this._isLE));return t.join(",")}),s;function k(a){return a===s}function d(a){return typeof a=="object"&&a!==null&&(a.constructor.name===v||er(a,s.prototype))&&a.BYTES_PER_ELEMENT===i}function j(a,t,e){var n,r,l;for(n=t.length,t.get&&t.set?r=P("default"):r=S("default"),l=0;l<n;l++)a[w](l*i,r(t,l),e);return a}}J.exports=vr});var gr=K();module.exports=gr;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
