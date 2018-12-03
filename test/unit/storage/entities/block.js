/* eslint-disable mocha/no-pending-tests */
/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

describe('Block', () => {
	it('should be a constructable function');

	it('should be be inherited by BaseEntity');

	describe('constructor()', () => {
		it('should accept only one parameter');
		it('should call super');
		it('should assign proper parameters');
		it('should setup specific filters');
	});

	describe('get()', () => {
		it('should accept only valid filters');
		it('should throw error for in-valid filters');
		it('should accept only valid options');
		it('should throw error for in-valid options');
		it(
			'should call adapter.executeFile with proper param for FIELD_SET_SIMPLE'
		);
		it('should accept "tx" as last parameter and pass to adapter.executeFile');
		it(
			'should resolve with array of objects matching specification of type definition for FIELD_SET_SIMPLE'
		);
		it('should not change any of the provided parameter');

		describe('filters', () => {
			// To make add/remove filters we add their tests.
			it('should have only specific filters');
			// For each filter type
			it('should return matching result for provided filter');
		});
	});

	describe('getOne()', () => {
		it('should accept only valid filters');
		it('should throw error for in-valid filters');
		it('should accept only valid options');
		it('should throw error for in-valid options');
		it(
			'should call adapter.executeFile with proper param for FIELD_SET_SIMPLE'
		);
		it('should accept "tx" as last parameter and pass to adapter.executeFile');
		it(
			'should resolve with one object matching specification of type definition for FIELD_SET_SIMPLE'
		);
		it(
			'should reject with error if matched with multiple records for provided filters'
		);
		it('should not change any of the provided parameter');

		describe('filters', () => {
			// To make add/remove filters we add their tests.
			it('should have only specific filters');
			// For each filter type
			it('should return matching result for provided filter');
		});
	});

	describe('create()', () => {
		it('should accept only valid options');
		it('should throw error for in-valid options');
		it('should call getValuesSet with proper params');
		it('should call adapter.executeFile with proper params');
		it('should create a block object successfully');
		it('should skip if any invalid attribute is provided');
		it('should reject with invalid data provided');
		it('should populate block object with default values');
	});

	describe('update()', () => {
		it('should always throw NonSupportedOperationError');
	});

	describe('updateOne()', () => {
		it('should always throw NonSupportedOperationError');
	});

	describe('isPersisted()', () => {
		it('should accept only valid filters');
		it('should throw error for in-valid filters');
		it('should accept only valid options');
		it('should throw error for in-valid options');
		it('should call mergeFilters with proper params');
		it('should call parseFilters with proper params');
		it('should call adapter.executeFile with proper params');
		it('should resolve with true if matching record found');
		it('should resolve with false if matching record not found');
	});

	describe('getFieldSets()', () => {
		it('should return FIELD_SET_SIMPLE');
	});

	describe('mergeFilters()', () => {
		it('should accept filters as single object');
		it('should accept filters as array of objects');
		it(
			'should merge provided filter with default filters by preserving default filters values '
		);
	});

	it('should assign a prototype property FIELD_SET_SIMPLE');
	it('should assign a prototype property defaultOptions');
});
