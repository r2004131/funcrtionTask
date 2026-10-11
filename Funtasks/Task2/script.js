function find_longest_name(...names) {
  if (names.length > 10) {
    console.log("عذراً، الدالة تستقبل 10 أشخاص فقط");
    return null;
  }

  if (names === 0) {
    return null;
  }

  let longest = names[0];
  let l_index = 0

  names.forEach(function (name  , index) {
    if (name.length > longest.length) {
      longest = name;
      l_index = index
    }
  });
  console.log(`Longest Name  : ${longest}  Ranking : ${l_index + 1}`);

  return longest;
}

console.log(find_longest_name("Ali", "Mohammed", "Sara", "Abdulrahman"));

