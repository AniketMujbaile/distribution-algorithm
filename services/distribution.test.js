const assert = require('assert');
const distributeUsers = require('../services/distributionService');
const Astrologer = require('../models/Astrologer');
const User = require('../models/User');

const testDistribution = async () => {
  const testAstrologers = [
    { name: 'Astrologer A', currentFlow: 0, weight: 1 },
    { name: 'Astrologer B', currentFlow: 0, weight: 1 },
    { name: 'Astrologer C', currentFlow: 0, weight: 1 }
  ];

  const testUsers = [
    { name: 'User 1' },
    { name: 'User 2' },
    { name: 'User 3' },
    { name: 'User 4' }
  ];

  await distributeUsers(testUsers, testAstrologers);

  testAstrologers.forEach(astrologer => {
    console.log(`Astrologer ${astrologer.name} has ${astrologer.currentFlow} users`);
  });

  const totalFlow = testAstrologers.reduce((sum, astrologer) => sum + astrologer.currentFlow, 0);
  assert.strictEqual(totalFlow, testUsers.length, `Total flow should equal total users (actual: ${totalFlow}, expected: ${testUsers.length})`);

  console.log('All tests passed!');
};

testDistribution();
