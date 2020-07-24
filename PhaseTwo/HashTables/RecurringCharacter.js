//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  const arr = input
  const myObj = {}

  //go through the array
  for (let i = 0; i < arr.length; i++) {
    //assign value key:value pairs
    myObj[arr[i]] = (myObj[arr[i]] || 0) + 1

    //whichever value gets to two first
    if (myObj[arr[i]] === 2) {
      return arr[i]
    }
  }

  return undefined
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter([2, 3, 4, 5]))
