const bcrypt = require("bcryptjs");

const comparePassword = async (plain, hashed) => {
  try {
    return await bcrypt.compare(plain, hashed);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};

module.exports = comparePassword;
