//my solution. super proud of myself tbh. got it on first try btw
function isPalindrome(str) {
  if (str.length <= 1) return true
  //compare first and last values
  if (str[0] !== str[str.length - 1]) {
    return false
  }
  return isPalindrome(str.slice(1, -1))
}

//colt's solution
function isPalindrome(str) {
  if (str.length === 1) return true
  if (str.length === 2) return str[0] === str[1]
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
