// Get all followers Instagram Users
let followersGroup = document.getElementsByClassName(
  "x9f619 xjbqb8w x1rg5ohu x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1"
);

// List all
let usernamesFollowersGroup = [];
for (let followersUser of followersGroup) {
  usernamesFollowersGroup.push(followersUser.innerText);
}