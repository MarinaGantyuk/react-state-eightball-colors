/** Return a random item from a list. */

function getRandomAnswer(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  // in rare cases random can return us 1, and it will give us index what would be
  // outside of Array. So we need to catch this case.
  if (randomIndex == arr.length) {
    randomIndex = 0;
  }

  return arr[randomIndex];
}

export { getRandomAnswer };
