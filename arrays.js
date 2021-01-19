function copyArr(arr) {
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}

function arrayJoin(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += i + 1 == arr.length ? arr[i] : `${arr[i]},`;
  }

  return str;
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
  for (let i = 0; i < arr.length; i += 1) {
    const currentItem = arr[i];
    const hasDuplicates = arr.slice(i + 1).some(isDuplicate);

    function isDuplicate(item) {
      let isEqual = false;
      if (typeof item === typeof currentItem) {
        isEqual = typeof currentItem === 'string'
          ? currentItem.toUpperCase() === item.toUpperCase()
          : currentItem === item;
      }

      return isEqual;
    }

    if (hasDuplicates) {
      arr = arr.filter((item, index) => index <= i || !isDuplicate(item));
    }
  }

  return arr;
}

function countIdentic(arr) {
  let amount = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const currentItem = arr[i];

    const tmpAmount = arr.filter((item, index) => index > i && item === currentItem).length;
    if (tmpAmount > 0) {
      amount += tmpAmount;
      arr = arr.filter((item, index) => index <= i || item !== currentItem);
    }
  }
  return amount;
}
