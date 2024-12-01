// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-byte-order@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.4.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-prototype-of@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.2-esm/index.mjs";import{factory as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@v0.2.2-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-capitalize@v0.3.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function _(t){var e,r;for(e=[];!(r=t.next()).done;)e.push(r.value);return e}var j=f(),T="little-endian",L="big-endian",x={float64:"setFloat64",float32:"setFloat32",int32:"setInt32",int16:"setInt16",uint32:"setUint32",uint16:"setUint16"},F={float64:"getFloat64",float32:"getFloat32",int32:"getInt32",int16:"getInt16",uint32:"getUint32",uint16:"getUint16"},A={c:"a",f:"a",i:"an",u:"a",b:"a"},R=g(["float64","float32","int32","int16","uint32","uint16"]);function I(t){return o(t)?l(t):null}function O(t){return t===T}function M(t){return t?T:L}function P(o){var l,f,g,T;if(!R(o))throw new TypeError(b("invalid argument. First argument must be a supported data type. Value: `%s`.",o));function L(){var e,o,f,p,d,v,c,g;if(f=arguments.length,!(this instanceof L))return f<2?new L(arguments[0]):2===f?new L(arguments[0],arguments[1]):3===f?new L(arguments[0],arguments[1],arguments[2]):new L(arguments[0],arguments[1],arguments[2],arguments[3]);if(null===(o=I(arguments[0]))||!h(o))throw new TypeError(b("invalid argument. First argument must be a supported byte order. Value: `%s`.",arguments[0]));if(p=O(o),0===(f-=1))d=new m(new w(0));else if(1===f)if(t(c=arguments[f]))d=new m(new w(c*l));else if(r(c))d=B(new m(new w(c.length*l)),c,p);else if(i(c))d=new m(c);else{if(!n(c))throw new TypeError(b("null2A",c));if(!1===j)throw new TypeError(b("null29",c));if(!s(c[a]))throw new TypeError(b("null2A",c));if(d=c[a](),!s(d.next))throw new TypeError(b("null2A",c));g=_(d),d=B(new m(new w(g.length*l)),g,p)}else{if(!i(d=arguments[1]))throw new TypeError(b("invalid argument. Must provide an ArrayBuffer. Value: `%s`.",d));if(!t(e=arguments[2]))throw new TypeError(b("null2C",e));if(2===f)d=new m(d,e);else{if(!t(v=arguments[3]))throw new TypeError(b("null2F",v));if((v*=l)>d.byteLength-e)throw new RangeError(b("null2G",v));d=new m(d,e,v)}}return u(this,"_buffer",d),u(this,"_length",d.byteLength/l),u(this,"_isLE",p),this}return l=y(o),f=function(t){return E(t)+"ArrayFE"}(o),g=F[o],T=x[o],u(L,"BYTES_PER_ELEMENT",l),u(L,"name",f),u(L,"from",(function(t,e){var i,u,p,d,w,m,g,y,E,L,x;if(!s(this))throw new TypeError(b("null01"));if(!P(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(null===(u=I(t))||!h(u))throw new TypeError(b("invalid argument. First argument must be a supported byte order. Value: `%s`.",t));if(w=O(u),(p=arguments.length)>2){if(!s(d=arguments[2]))throw new TypeError(b("null3N",d));p>3&&(i=arguments[3])}if(r(e)){if(d){for(L=e.length,E=e.get&&e.set?c("default"):v("default"),g=(m=new this(u,L))._buffer,x=0;x<L;x++)g[T](x*l,d.call(i,E(e,x),x),w);return m}return new this(u,e)}if(n(e)&&j&&s(e[a])){if(g=e[a](),!s(g.next))throw new TypeError(b("nullAt",e));for(y=d?function(t,e,r){var i,n,s;for(i=[],s=-1;!(n=t.next()).done;)s+=1,i.push(e.call(r,n.value,s));return i}(g,d,i):_(g),g=(m=new this(u,L=y.length))._buffer,x=0;x<L;x++)g[T](x*l,y[x],w);return m}throw new TypeError(b("nullAt",e))})),u(L,"of",(function(t){var e,r,i;if(!s(this))throw new TypeError(b("null01"));if(!P(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(null===(e=I(t))||!h(e))throw new TypeError(b("invalid argument. First argument must be a supported byte order. Value: `%s`.",t));for(r=[],i=1;i<arguments.length;i++)r.push(arguments[i]);return new this(e,r)})),u(L.prototype,"at",(function(t){var r;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!e(t))throw new TypeError(b("null8A",t));if(r=this._length,t<0&&(t+=r),!(t<0||t>=r))return this._buffer[g](t*l,this._isLE)})),d(L.prototype,"buffer",(function(){return this._buffer.buffer})),d(L.prototype,"byteLength",(function(){return this._buffer.byteLength})),d(L.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),u(L.prototype,"BYTES_PER_ELEMENT",L.BYTES_PER_ELEMENT),u(L.prototype,"every",(function(t,e){var r,i;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!s(t))throw new TypeError(b("null3c",t));for(r=this._buffer,i=0;i<this._length;i++)if(!t.call(e,r[g](i*l,this._isLE),i,this))return!1;return!0})),u(L.prototype,"forEach",(function(t,e){var r,i;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!s(t))throw new TypeError(b("null3c",t));for(r=this._buffer,i=0;i<this._length;i++)t.call(e,r[g](i*l,this._isLE),i,this)})),u(L.prototype,"filter",(function(t,e){var r,i,n,h;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!s(t))throw new TypeError(b("null3c",t));for(r=this._buffer,i=[],n=0;n<this._length;n++)h=r[g](n*l,this._isLE),t.call(e,h,n,this)&&i.push(h);return new this.constructor(M(this._isLE),i)})),u(L.prototype,"get",(function(e){if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!t(e))throw new TypeError(b("null2K",e));if(!(e>=this._length))return this._buffer[g](e*l,this._isLE)})),u(L.prototype,"indexOf",(function(t,r){var i,n;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(arguments.length>1){if(!e(r))throw new TypeError(b("null7f",r));r<0&&(r+=this._length)<0&&(r=0)}else r=0;for(i=this._buffer,n=r;n<this._length;n++)if(i[g](n*l,this._isLE)===t)return n;return-1})),u(L.prototype,"lastIndexOf",(function(t,r){var i,n;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(arguments.length>1){if(!e(r))throw new TypeError(b("null7f",r));if(r<0&&(r+=this._length),r<0)return-1;r>=this._length&&(r=this._length-1)}else r=this._length-1;for(i=this._buffer,n=r;n>=0;n--)if(i[g](n*l,this._isLE)===t)return n;return-1})),d(L.prototype,"length",(function(){return this._length})),u(L.prototype,"map",(function(t,e){var r,i,n,h,a;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!s(t))throw new TypeError(b("null3c",t));for(n=this._buffer,r=(i=new this.constructor(M(this._isLE),this._length))._buffer,h=0;h<this._length;h++)a=t.call(e,n[g](h*l,this._isLE),h,this),r[T](h*l,a,this._isLE);return i})),u(L.prototype,"reduce",(function(t,e){var r,i,n,h;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!s(t))throw new TypeError(b("null3c",t));if(r=this._buffer,i=this._length,arguments.length>1)n=e,h=0;else{if(0===i)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=r[g](0*l,this._isLE),h=1}for(;h<i;h++)n=t(n,r[g](h*l,this._isLE),h,this);return n})),u(L.prototype,"reduceRight",(function(t,e){var r,i,n,h;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!s(t))throw new TypeError(b("null3c",t));if(r=this._buffer,i=this._length,arguments.length>1)n=e,h=i-1;else{if(0===i)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=r[g]((i-1)*l,this._isLE),h=i-2}for(;h>=0;h--)n=t(n,r[g](h*l,this._isLE),h,this);return n})),u(L.prototype,"set",(function(e){var i,n,s,h,a,u,p,d;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(s=this._buffer,arguments.length>1){if(!t(n=arguments[1]))throw new TypeError(b("null2L",n))}else n=0;if(r(e)){if(n+(u=e.length)>this._length)throw new RangeError(b("null03"));if(a=(i=e).get&&i.set?c("default"):v("default"),d=s.byteOffset+n*l,i.buffer===s.buffer&&i.byteOffset<d&&i.byteOffset+i.byteLength>d){for(h=[],p=0;p<e.length;p++)h.push(a(e,p));i=h,a=v("default")}for(p=0;p<u;n++,p++)s[T](n*l,a(i,p),this._isLE)}else{if(n>=this._length)throw new RangeError(b("null2M",n));s[T](n*l,e,this._isLE)}})),u(L.prototype,"some",(function(t,e){var r,i;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));if(!s(t))throw new TypeError(b("null3c",t));for(r=this._buffer,i=0;i<this._length;i++)if(t.call(e,r[g](i*l,this._isLE),i,this))return!0;return!1})),u(L.prototype,"toString",(function(){var t,e,r;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));for(t=[],e=this._buffer,r=0;r<this._length;r++)t.push(e[g](r*l,this._isLE));return t.join(",")})),u(L.prototype,"join",(function(t){var e,r,i,n;if(!S(this))throw new TypeError(b("invalid invocation. `this` is not %s %s.",A[o[0]],f));for(i=arguments.length>0?String(t):",",e=[],r=this._buffer,n=0;n<this._length;n++)e.push(r[g](n*l,this._isLE));return e.join(i)})),L;function P(t){return t===L}function S(t){return"object"==typeof t&&null!==t&&(t.constructor.name===f||p(t,L.prototype))&&t.BYTES_PER_ELEMENT===l}function B(t,e,r){var i,n,s;for(i=e.length,n=e.get&&e.set?c("default"):v("default"),s=0;s<i;s++)t[T](s*l,n(e,s),r);return t}}export{P as default};
//# sourceMappingURL=index.mjs.map