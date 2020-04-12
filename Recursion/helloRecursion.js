// recursion is simpler and easier to understand. iykyk

//Call Stack
//function calls are added on the top of the stack and popped off after they return

//two things must be present:
//base case: condition when shit has to stop

function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(7);
