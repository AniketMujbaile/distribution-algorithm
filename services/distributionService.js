const distributeUsers = async (users, astrologers) => {
  const totalWeight = astrologers.reduce((sum, astrologer) => sum + astrologer.weight, 0);

  for (const user of users) {
    let minFlow = Infinity;
    let selectedAstrologer = null;

    for (const astrologer of astrologers) {
      const effectiveFlow = astrologer.currentFlow / astrologer.weight;

      if (effectiveFlow < minFlow) {
        minFlow = effectiveFlow;
        selectedAstrologer = astrologer;
      }
    }

    selectedAstrologer.currentFlow++;
    console.log(`User ${user.name} assigned to Astrologer ${selectedAstrologer.name}`);
  }
};

module.exports = distributeUsers;
