// 1 - Define name of your Instagram
const nameInstagram = "wellpereira_wp";

// 2 - Get and open Instagram Modal: following and follower
let modalFollowing = document.querySelectorAll(
  `[href*="/${nameInstagram}/following/"]`
);
modalFollowing[0].click();

let modalFollowers = document.querySelectorAll(
  `[href*="/${nameInstagram}/followers/"]`
);
modalFollowers[0].click();

// 3 - Get container from modal with the list
let modalList = document.getElementsByClassName("_aano");
function scrollModal() {
  console.log("Running..");
  modalList[0].scrollTo(0, 200000);
}
for (let i = 1; i <= 400; i++) {
  setTimeout(scrollModal, i * 4000);
}
