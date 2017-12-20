#!/usr/bin/env node
const path = require('path')
const cliPath = path.join(__dirname, 'node_modules', 'resin-cli')
process.env['TS_NODE_PROJECT'] = __dirname
process.env['RESINRC_API_URL'] = process.env.RESINRC_API_URL || 'https://api.multi.resinstaging.io'

require('coffee-script/register')
require('ts-node/register')
require(path.join(cliPath, 'lib', 'app'))
