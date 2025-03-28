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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var Float64ArrayFE = factory( 'float64' );


// MAIN //

bench( pkg+':every', function benchmark( b ) {
	var bool;
	var arr;
	var i;

	arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 2.0, 1.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = arr.every( predicate );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function predicate( v ) {
		return v > 0;
	}
});
