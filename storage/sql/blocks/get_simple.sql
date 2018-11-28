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

SELECT
	"id",
	ENCODE("payloadHash", 'hex') as "payloadHash",
	ENCODE("generatorPublicKey", 'hex') as "generatorPublicKey",
	ENCODE("blockSignature", 'hex') as "blockSignature",
	"height",
	"totalFee",
	"reward",
	"payloadLength",
	"previousBlock",
	"numberOfTransactions",
	"totalAmount",
	"timestamp",
	"version"
FROM
	blocks

${parsedFilters:raw}

LIMIT ${limit} OFFSET ${offset}
