// Compare following not into followers
function verifyIfExistIntoFollowers(following) {
  let notFollowMe = usernamesFollowersGroup.filter(
    (follower) => follower === following
  );
  return notFollowMe.length;
}

let notFollowMeGroup = usernamesFollowingGroup
  .filter((following) => !verifyIfExistIntoFollowers(following))
  .map((following) => following.replace("\nVerificado", ""));

for (const notFollowMeUsername of notFollowMeGroup) {
  console.log(`https://www.instagram.com/${notFollowMeUsername}`);
}
