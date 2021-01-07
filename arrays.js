function copyArr(arr) {
  return arr.map((value) => value);
}

function arrayJoin(arr) {
  return arr.join();
}


function colonOdd(num) {
  if (typeof num !== 'number') {
    return undefined;
  }

  const arr = num.toString().split('');

  for(let i = 1; i < arr.length; i += 1) {
     const num = Number.parseInt(arr[i]);
     const prevNum = Number.parseInt(arr[i - 1]);

     if ((num * prevNum) % 2 !== 0) {
       arr.splice(i, 0, ':');
       i += 1;
     }
  }

  return arr.join('');
}

function removeDuplicates(arr) {

}

function countIdentic(arr) {

}