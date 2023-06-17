// Get all following Instagram Users
let followingGroup = document.getElementsByClassName(
  "x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz notranslate _a6hd"
);

// List all
let usernamesFollowingGroup = [];
for (let followingUser of followingGroup) {
  usernamesFollowingGroup.push(followingUser.innerText);
}