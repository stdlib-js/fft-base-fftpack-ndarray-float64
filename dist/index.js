/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name rffti
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/fft/base/fftpack/ndarray/float64/rffti}
*/
setReadOnly( ns, 'rffti', require( '@stdlib/fft-base-fftpack-ndarray-float64-rffti/dist' ) );


// EXPORTS //

module.exports = ns;
