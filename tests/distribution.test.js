const assert = require('assert');
const distributeUsers = require('../services/distributionService');
const Astrologer = require('../models/Astrologer');
const User = require('../models/User');

const testDistribution = () => {
  const testAstrologers = [
    new Astrologer({ name: 'Astrologer A' }),
    new Astrologer({ name: 'Astrologer B' }),
    new Astrologer({ name: 'Astrologer C' })
  ];

  const testUsers = [
    new User({ name: 'User 1' }),
    new User({ name: 'User 2' }),
    new User({ name: 'User 3' }),
    new User({ name: 'User 4' })
  ];

  distributeUsers(testUsers, testAstrologers);

  const totalFlow = testAstrologers.reduce((sum, astrologer) => sum + astrologer.currentFlow, 0);
  assert.strictEqual(totalFlow, testUsers.length, 'Total flow should equal total users');

  console.log('All tests passed!');
};

testDistribution();
