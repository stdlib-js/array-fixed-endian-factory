<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fixedEndianFactory

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a typed array constructor for creating typed arrays having a specified byte order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

In contrast to built-in typed array constructors which store values according to the host platform byte order, the typed array constructors returned by the factory function allow enforcing a specific byte order. Such enforcement can be particularly advantageous when working with memory buffers which do not necessarily follow host platform byte order, such as [WebAssembly memory][@stdlib/wasm/memory].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-fixed-endian-factory
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var fixedEndianFactory = require( '@stdlib/array-fixed-endian-factory' );
```

#### fixedEndianFactory( dtype )

Returns a typed array constructor for creating typed arrays having a specified [data type][@stdlib/array/typed-dtypes] and byte order.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );
// returns <Function>

var Float32ArrayFE = fixedEndianFactory( 'float32' );
// returns <Function>
```

* * *

### Typed Array Constructor

#### TypedArrayFE( endianness )

A typed array constructor which returns a typed array representing values stored in a specified byte order.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian' );
// returns <Float64ArrayFE>
```

#### TypedArrayFE( endianness, length )

Returns a typed array having a specified length and byte order.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
// returns <Float64ArrayFE>
```

#### TypedArrayFE( endianness, typedarray )

Creates a typed array from another typed array.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr1 = new Float32Array( [ 0.5, 0.5, 0.5 ] );
var arr2 = new Float64ArrayFE( 'little-endian', arr1 );
// returns <Float64ArrayFE>

var v = arr2.get( 0 );
// returns 0.5
```

#### TypedArrayFE( endianness, obj )

Creates a typed array from an array-like object or iterable.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 0.5, 0.5, 0.5 ] );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 0.5
```

#### TypedArrayFE( endianness, buffer\[, byteOffset\[, length]] )

Returns a typed array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var buf = new ArrayBuffer( 32 );
var arr = new Float64ArrayFE( 'little-endian', buf, 0, 4 );
// returns <Float64ArrayFE>
```

* * *

### Typed Array Properties

<a name="static-prop-bytes-per-element"></a>

#### TypedArrayFE.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var nbytes = Float64ArrayFE.BYTES_PER_ELEMENT;
// returns 8
```

<a name="static-prop-name"></a>

#### TypedArrayFE.name

Typed array constructor name.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var str = Float64ArrayFE.name;
// returns 'Float64ArrayFE'
```

<a name="prop-buffer"></a>

#### TypedArrayFE.prototype.buffer

**Read-only** property which returns the [`ArrayBuffer`][@stdlib/array/buffer] referenced by the typed array.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### TypedArrayFE.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the typed array.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var byteLength = arr.byteLength;
// returns 40
```

<a name="prop-byte-offset"></a>

#### TypedArrayFE.prototype.byteOffset

**Read-only** property which returns the offset (in bytes) of the typed array from the start of its [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var byteOffset = arr.byteOffset;
// returns 0
```

<a name="prop-bytes-per-element"></a>

#### TypedArrayFE.prototype.BYTES_PER_ELEMENT

Number of bytes per view element.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var nbytes = arr.BYTES_PER_ELEMENT;
// returns 8
```

<a name="prop-length"></a>

#### TypedArrayFE.prototype.length

**Read-only** property which returns the number of view elements.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 5 );
var len = arr.length;
// returns 5
```

* * *

### Typed Array Methods

<a name="static-method-from"></a>

#### TypedArrayFE.from( endianness, src\[, map\[, thisArg]] )

Creates a new typed array from an array-like object or an iterable.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = Float64ArrayFE.from( 'little-endian', [ 1.0, -1.0 ] );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 1.0
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function mapFcn( v ) {
    return v * 2.0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = Float64ArrayFE.from( 'little-endian', [ 1.0, -1.0 ], mapFcn );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 2.0
```

A callback function is provided two arguments:

-   **value**: source value.
-   **index**: source index.

To set the callback execution context, provide a `thisArg`.

```javascript
function mapFcn( v ) {
    this.count += 1;
    return v * 2.0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var ctx = {
    'count': 0
};

var arr = Float64ArrayFE.from( 'little-endian', [ 1.0, -1.0 ], mapFcn, ctx );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 2.0

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### TypedArrayFE.of( endianness, element0\[, element1\[, ...elementN]] )

Creates a new typed array from a variable number of arguments.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = Float64ArrayFE.of( 'little-endian', 1.0, -1.0 );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 1.0
```

<a name="method-at"></a>

#### TypedArrayFE.prototype.at( i )

Returns an array element located at integer position (index) `i`, with support for both nonnegative and negative integer positions.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var out = arr.at( 0 );
// returns 1.0

out = arr.at( -1 );
// returns 3.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var v = arr.at( 100 );
// returns undefined

v = arr.at( -100 );
// returns undefined
```

<a name="method-every"></a>

#### TypedArrayFE.prototype.every( predicate\[, thisArg] )

Tests whether all the elements in an array pass a test implemented by a predicate function.

```javascript
function isNegative( v ) {
    return v < 0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ -1.0, -2.0, -3.0, -4.0 ] );
// returns <Float64ArrayFE>

var bool = arr.every( isNegative );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function isPositive( v, i ) {
    this.count += 1;
    return v > 0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, -3.0 ] );
// returns <Float64ArrayFE>

var context = {
    'count': 0
};

var bool = arr.every( isPositive, context );
// returns false

var count = context.count;
// returns 3
```

<a name="method-filter"></a>

#### TypedArrayFE.prototype.filter( predicate\[, thisArg] )

Returns a new array containing the elements of an array which pass a test implemented by a predicate function.

```javascript
function predicate( v ) {
    return ( v % 2 === 0 );
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );

var out = arr.filter( predicate );
// returns <Float64ArrayFE>

var len = out.length;
// returns 2

var v = out.get( 0 );
// returns 2.0

v = out.get( 1 );
// return 4.0
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v, i ) {
    this.count += 1;
    return ( v % 2 === 0 );
}

var context = {
    'count': 0
};

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0, 4.0 ] );

var out = arr.filter( predicate, context );
// returns <Float64ArrayFE>

var len = out.length;
// returns 2

var count = context.count;
// returns 4
```

<a name="method-for-each"></a>

#### TypedArrayFE.prototype.forEach( callbackFn\[, thisArg] )

Invokes a function once for each array element.

```javascript
function log( v, i ) {
    console.log( '%s: %s', i.toString(), v.toString() );
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 3 );
// returns <Float64ArrayFE>

arr.set( 1.5, 0 );
arr.set( 2.5, 1 );
arr.set( 3.5, 2 );

arr.forEach( log );
/* =>
    0: 1.5
    1: 2.5
    2: 3.5
*/
```

The invoked function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function fcn( v, i ) {
    this.count += 1;
    console.log( '%s: %s', i.toString(), v.toString() );
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 3 );
// returns <Float64ArrayFE>

var context = {
    'count': 0
};

arr.set( 1.0, 0 );
arr.set( 2.0, 1 );
arr.set( 3.0, 2 );

arr.forEach( fcn, context );

var count = context.count;
// returns 3
```

<a name="method-get"></a>

#### TypedArrayFE.prototype.get( i )

Returns an array element located at a nonnegative integer position (index) `i`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 10 );
// returns <Float64ArrayFE>

// Set the first element:
arr.set( 1.0, 0 );

// Get the first element:
var v = arr.get( 0 );
// returns 1.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 10 );
// returns <Float64ArrayFE>

var v = arr.get( 100 );
// returns undefined
```

<a name="method-includes"></a>

#### TypedArrayFE.prototype.includes( searchElement\[, fromIndex] )

Returns a boolean indicating whether an array includes a provided value.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 2.0 ] );

var idx = arr.includes( 2.0 );
// returns true

idx = arr.includes( 2.0, 2 );
// returns true

idx = arr.includes( 2.0, -4 );
// returns true

idx = arr.includes( 5.0 );
// returns false
```

<a name="method-index-of"></a>

#### TypedArrayFE.prototype.indexOf( searchElement\[, fromIndex] )

Returns the first index at which a given element can be found.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 2.0 ] );

var idx = arr.indexOf( 2.0 );
// returns 1

idx = arr.indexOf( 2.0, 2 );
// returns 4

idx = arr.indexOf( 2.0, -4 );
// returns 1
```

If `searchElement` is not present in the array, the method returns `-1`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 2.0 ] );

var idx = arr.indexOf( 5.0 );
// returns -1
```

<a name="method-last-index-of"></a>

#### TypedArrayFE.prototype.lastIndexOf( searchElement\[, fromIndex] )

Returns the last index at which a given element can be found in the array.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 2.0 ] );

var idx = arr.lastIndexOf( 2.0 );
// returns 4

idx = arr.lastIndexOf( 2.0, 3 );
// returns 1

idx = arr.lastIndexOf( 2.0, -2 );
// returns 1
```

If `searchElement` is not present in the array, the method returns `-1`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 2.0 ] );

var idx = arr.lastIndexOf( 5.0 );
// returns -1
```

<a name="method-map"></a>

#### TypedArray.prototype.map( callbackFn\[, thisArg] )

Returns a new array with each element being the result of a provided callback function.

```javascript
function fcn( v ) {
    return -v;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var out = arr.map( fcn );
// returns <Float64ArrayFE>

var z = out.get( 0 );
// returns -1.0

z = out.get( 1 );
// returns -2.0

z = out.get( 2 );
// returns -3.0
```

The callback function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function fcn( v, i ) {
    this.count += i;
    return -v;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', 3 );

arr.set( -1.0, 0 );
arr.set( 1.0, 1 );
arr.set( -1.0, 2 );

var context = {
    'count': 0
};

var out = arr.map( fcn, context );
// returns <Float64ArrayFE>

var count = context.count;
// returns 3;
```

<a name="method-reduce"></a>

#### TypedArray.prototype.reduce( reducerFn\[, initialValue] )

Applies a provided callback function to each element of the array, in order, passing in the return value from the calculation on the preceding element and returning the accumulated result upon completion.

```javascript
function reducer( acc, v ) {
    return ( acc && v );
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 0.0, 1.0 ] );
// returns <Float64ArrayFE>

var out = arr.reduce( reducer );
// returns 0.0
```

The reducer function is provided four arguments:

-   **acc**: accumulated result.
-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

By default, the function initializes the accumulated result to the first element in the array and passes the second array element as `value` during the first invocation of the provided callback. To begin accumulation from a different starting value and pass in the first array element as `value` during the first invocation of the provided callback, provide an `initialValue` argument.

```javascript
function reducer( acc, v ) {
    if ( v ) {
        return acc + 1;
    }
    return acc;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 0.0, 1.0 ] );
// returns <Float64ArrayFE>

var out = arr.reduce( reducer, 0 );
// returns 2
```

<a name="method-reduce-right"></a>

#### TypedArray.prototype.reduceRight( reducerFn\[, initialValue] )

Applies a provided callback function to each element of the array, in reverse order, passing in the return value from the calculation on the following element and returning the accumulated result upon completion.

```javascript
function reducer( acc, v ) {
    return ( acc && v );
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 0.0, 1.0 ] );
// returns <Float64ArrayFE>

var out = arr.reduceRight( reducer );
// returns 0.0
```

The reducer function is provided four arguments:

-   **acc**: accumulated result.
-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

By default, the function initializes the accumulated result to the first element in the array and passes the second array element as `value` during the first invocation of the provided callback. To begin accumulation from a different starting value and pass in the first array element as `value` during the first invocation of the provided callback, provide an `initialValue` argument.

```javascript
function reducer( acc, v ) {
    if ( v ) {
        return acc + 1;
    }
    return acc;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 0.0, 1.0 ] );
// returns <Float64ArrayFE>

var out = arr.reduceRight( reducer, 0 );
// returns 2
```

<a name="method-set"></a>

#### TypedArrayFE.prototype.set( arr\[, offset] )

Sets array elements.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var v = arr.get( 0 );
// returns 1.0

v = arr.get( 1 );
// returns 2.0

// Set the first two array elements:
arr.set( [ 4.0, 5.0 ] );

v = arr.get( 0 );
// returns 4.0

v = arr.get( 1 );
// returns 5.0
```

By default, the method starts writing values at the first array index. To specify an alternative index, provide an index `offset`.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

// Set the last two array elements:
arr.set( [ 4.0, 5.0 ], 1 );

var v = arr.get( 1 );
// returns 4.0

v = arr.get( 2 );
// returns 5.0
```

A few notes:

-   If `i` is out-of-bounds, the method throws an error.
-   If a target array cannot accommodate all values (i.e., the length of source array plus `i` exceeds the target array length), the method throws an error.
-   If provided a typed array which shares an [`ArrayBuffer`][@stdlib/array/buffer] with the target array, the method will intelligently copy the source range to the destination range.

<a name="method-some"></a>

#### TypedArrayFE.prototype.some( predicate\[, thisArg] )

Tests whether at least one element in an array passes a test implemented by a predicate function.

```javascript
function isPositive( v ) {
    return v > 0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ -1.0, 2.0, -3.0, -4.0 ] );
// returns <Float64ArrayFE>

var bool = arr.some( isPositive );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function isPositive( v, i ) {
    this.count += 1;
    return v > 0;
}

var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ -1.0, -2.0, -3.0 ] );
// returns <Float64ArrayFE>

var context = {
    'count': 0
};

var bool = arr.some( isPositive, context );
// returns false

var count = context.count;
// returns 3
```

<a name="method-to-string"></a>

#### TypedArrayFE.prototype.toString()

Serializes an array as a string.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var str = arr.toString();
// returns '1,2,3'
```

<a name="method-join"></a>

#### TypedArrayFE.prototype.join( \[separator] )

Returns a new string by concatenating all array elements.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );

var str = arr.join();
// returns '1,2,3'
```

By default, the method separates serialized array elements with a comma. To use an alternative separator, provide a `separator` string.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );

var str = arr.join( ' - ' );
// returns '1 - 2 - 3'
```

<a name="method-with"></a>

#### TypedArrayFE.prototype.with( index, value )

Returns a new typed array with the element at a provided index replaced with a provided value.

```javascript
var Float64ArrayFE = fixedEndianFactory( 'float64' );

var arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0 ] );
// returns <Float64ArrayFE>

var out = arr.with( 0, 0.0 );
// returns <Float64ArrayFE>

var v = out.get( 0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   A returned constructor supports the following byte orders:

    -   **little-endian**: store values such that bytes are stored from least-to-most significant bytes. This is the dominant ordering for processor architectures and their associated memory. This is also the ordering for [WebAssembly memory][@stdlib/wasm/memory].
    -   **big-endian**: store values such that bytes are stored from most-to-least significant bytes. This is the dominant ordering in network protocols.

-   While returned constructors _strive_ to maintain (but do not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   Constructors do **not** require the `new` operator.
    -   Accessing array elements using bracket syntax (e.g., `X[i]`) is **not** supported. Instead, one **must** use the `.get()` method.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var logEach = require( '@stdlib/console-log-each' );
var fixedEndianFactory = require( '@stdlib/array-fixed-endian-factory' );

var Float64ArrayFE = fixedEndianFactory( 'float64' );

// Create a typed array by specifying a length:
var out = new Float64ArrayFE( 'little-endian', 3 );
logEach( '%s', out );

// Create a typed array from an array:
var arr = [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ];
out = new Float64ArrayFE( 'big-endian', arr );
logEach( '%s', out );

// Create a typed array from an array buffer:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float64ArrayFE( 'little-endian', arr.buffer );
logEach( '%s', out );

// Create a typed array from an array buffer view:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float64ArrayFE( 'big-endian', arr.buffer, 8, 2 );
logEach( '%s', out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-fixed-endian-factory.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-fixed-endian-factory

[test-image]: https://github.com/stdlib-js/array-fixed-endian-factory/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-fixed-endian-factory/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-fixed-endian-factory/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-fixed-endian-factory?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-fixed-endian-factory.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-fixed-endian-factory/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-fixed-endian-factory/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-fixed-endian-factory/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-fixed-endian-factory/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-fixed-endian-factory/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-fixed-endian-factory/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-fixed-endian-factory/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-fixed-endian-factory/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-fixed-endian-factory/main/LICENSE

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/array/typed-dtypes]: https://github.com/stdlib-js/array-typed-dtypes

</section>

<!-- /.links -->
