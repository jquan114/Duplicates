function containsDuplicate(nums) {
  // Create a set to store the elements
  const set = new Set();

  // Iterate through the array
  for (const num of nums) {
    // If the element is already in the set, return true
    if (set.has(num)) {
      return true;
    }
    // Otherwise, add the element to the set
    set.add(num);
  }

  // If we reach this point, every element is distinct, so return false
  return false;
}
containsDuplicate([1,2,3,4,1,2,3,4])//true
