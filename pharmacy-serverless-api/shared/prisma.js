/**
 * file: shared/prisma.js
 * date: 08/13/2022
 * description: file responsible for execute 'Prisma Client'
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;