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

const { BaseEntity, Block } = require('../../../../storage/entities');
const {
	NonSupportedFilterTypeError,
	NonSupportedOperationError,
} = require('../../../../storage/errors');

describe('Block', () => {
	it('should be a constructable function', done => {
		expect(Block.prototype.constructor).to.be.not.null;
		expect(Block.prototype.constructor.name).to.be.eql('Block');
		done();
	});

	it('should be be inherited by BaseEntity', done => {
		expect(Block.prototype).to.be.an.instanceof(BaseEntity);
		done();
	});

	describe('constructor()', () => {
		it('should have one mandatory parameter', done => {
			expect(Block.prototype.constructor.length).to.be.eq(1);
			done();
		});

		it('should call super');

		it('should assign proper parameters', done => {
			const adapter = {
				loadSQLFile: sinonSandbox.stub().returns('loadSQLFile'),
			};
			const defaultFilters = { version: 1 };

			const block = new Block(adapter, defaultFilters);

			expect(block.adapter).to.be.eq(adapter);
			expect(block.defaultFilters).to.be.eq(defaultFilters);
			expect(block.SQLs).to.be.eql({
				selectSimple: 'loadSQLFile',
				create: 'loadSQLFile',
				isPersisted: 'loadSQLFile',
			});

			done();
		});

		it('should setup specific fields', done => {
			const adapter = { loadSQLFile: sinonSandbox.stub() };
			const block = new Block(adapter);

			expect(block.fields).to.have.all.keys([
				'blockSignature',
				'generatorPublicKey',
				'height',
				'id',
				'numberOfTransactions',
				'payloadHash',
				'payloadLength',
				'previousBlockId',
				'reward',
				'timestamp',
				'totalAmount',
				'totalFee',
				'version',
			]);

			done();
		});

		it('should setup specific filters', done => {
			const adapter = { loadSQLFile: sinonSandbox.stub() };
			const block = new Block(adapter);

			expect(block.filters).to.have.all.keys([
				'blockSignature',
				'blockSignature_eql',
				'blockSignature_in',
				'blockSignature_like',
				'blockSignature_ne',
				'generatorPublicKey',
				'generatorPublicKey_eql',
				'generatorPublicKey_in',
				'generatorPublicKey_like',
				'generatorPublicKey_ne',
				'height',
				'height_eql',
				'height_gt',
				'height_gte',
				'height_in',
				'height_lt',
				'height_lte',
				'height_ne',
				'id',
				'id_eql',
				'id_in',
				'id_like',
				'id_ne',
				'numberOfTransactions',
				'numberOfTransactions_eql',
				'numberOfTransactions_gt',
				'numberOfTransactions_gte',
				'numberOfTransactions_in',
				'numberOfTransactions_lt',
				'numberOfTransactions_lte',
				'numberOfTransactions_ne',
				'payloadHash',
				'payloadHash_eql',
				'payloadHash_in',
				'payloadHash_like',
				'payloadHash_ne',
				'payloadLength',
				'payloadLength_eql',
				'payloadLength_gt',
				'payloadLength_gte',
				'payloadLength_in',
				'payloadLength_lt',
				'payloadLength_lte',
				'payloadLength_ne',
				'previousBlockId',
				'previousBlockId_eql',
				'previousBlockId_in',
				'previousBlockId_like',
				'previousBlockId_ne',
				'reward',
				'reward_eql',
				'reward_gt',
				'reward_gte',
				'reward_in',
				'reward_lt',
				'reward_lte',
				'reward_ne',
				'timestamp',
				'timestamp_eql',
				'timestamp_gt',
				'timestamp_gte',
				'timestamp_in',
				'timestamp_lt',
				'timestamp_lte',
				'timestamp_ne',
				'totalAmount',
				'totalAmount_eql',
				'totalAmount_gt',
				'totalAmount_gte',
				'totalAmount_in',
				'totalAmount_lt',
				'totalAmount_lte',
				'totalAmount_ne',
				'totalFee',
				'totalFee_eql',
				'totalFee_gt',
				'totalFee_gte',
				'totalFee_in',
				'totalFee_lt',
				'totalFee_lte',
				'totalFee_ne',
				'version',
				'version_eql',
				'version_gt',
				'version_gte',
				'version_in',
				'version_lt',
				'version_lte',
				'version_ne',
			]);

			done();
		});
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
		it('should always throw NonSupportedOperationError', done => {
			expect(Block.prototype.update).to.throw(NonSupportedOperationError);
			done();
		});
	});

	describe('updateOne()', () => {
		it('should always throw NonSupportedOperationError', done => {
			expect(Block.prototype.updateOne).to.throw(NonSupportedOperationError);
			done();
		});
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
		it('should return FIELD_SET_SIMPLE', done => {
			const adapter = { loadSQLFile: sinonSandbox.stub() };
			const block = new Block(adapter);

			expect(block.getFieldSets()).to.eql(['FIELD_SET_SIMPLE']);
			done();
		});
	});

	describe('validateFilters()', () => {
		let block;

		before(done => {
			const adapter = { loadSQLFile: sinonSandbox.stub() };
			block = new Block(adapter);
			done();
		});

		it('should accept valid filters as single object', done => {
			const filters = { height: 101 };
			expect(block.validateFilters(filters)).to.be.eq(true);
			done();
		});

		it('should accept valid filters as array of objects', done => {
			const filters = [{ height: 101 }, { timestamp_gte: 1234567890 }];
			expect(block.validateFilters(filters)).to.be.eq(true);
			done();
		});

		it('should throw error for invalid filters', done => {
			const filters = [{ invalid_filter: 1 }, { timestamp_gte: 1234567890 }];
			expect(() => {
				block.validateFilters(filters);
			}).to.throw(NonSupportedFilterTypeError);
			done();
		});
	});

	describe('mergeFilters()', () => {
		describe('without defaultFilters', () => {
			let block;

			before(done => {
				const adapter = { loadSQLFile: sinonSandbox.stub() };
				block = new Block(adapter);
				done();
			});

			it('should accept filters as single object', done => {
				const filters = { height: 101 };
				expect(block.mergeFilters(filters)).to.be.eql(filters);
				done();
			});

			it('should accept filters as array of objects', done => {
				const filters = [{ height: 101 }, { timestamp_gte: 1234567890 }];
				expect(block.mergeFilters(filters)).to.be.eql(filters);
				done();
			});
		});

		describe('with defaultFilters', () => {
			let block;

			before(done => {
				const adapter = { loadSQLFile: sinonSandbox.stub() };
				const defaultFilters = { version: 1 };
				block = new Block(adapter, defaultFilters);
				done();
			});

			it('should merge provided filter with default filters by preserving default filters values', done => {
				const filters = { height: 101 };
				const expectedResult = { height: 101, version: 1 };
				expect(block.mergeFilters(filters)).to.be.eql(expectedResult);
				done();
			});

			it('should merge provided filter with default filters by preserving default filters in each object when passing an array', done => {
				const filters = [{ height: 101 }, { timestamp_gte: 1234567890 }];
				const expectedResult = [
					{ height: 101, version: 1 },
					{ timestamp_gte: 1234567890, version: 1 },
				];
				expect(block.mergeFilters(filters)).to.be.eql(expectedResult);
				done();
			});
		});
	});

	it('should assign a prototype property FIELD_SET_SIMPLE', done => {
		expect(Block.prototype.FIELD_SET_SIMPLE).to.eql('FIELD_SET_SIMPLE');
		done();
	});

	it('should assign a prototype property defaultOptions', done => {
		expect(Block.prototype.defaultOptions).to.eql({
			fieldSet: 'FIELD_SET_SIMPLE',
			limit: 10,
			offset: 0,
		});
		done();
	});
});
