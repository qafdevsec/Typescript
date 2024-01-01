async function updateUser(userId, requestBody) {
  const userData = await db.loadUserData(userId);
  merge(userData, requestBody);

  log("Saving userData " + userData.toString());
  await db.saveUserData(userId, userData);
  return userData;
}

async function getRole(userId) {
  const userPermissions = await db.loadUserPermissions(userId);
