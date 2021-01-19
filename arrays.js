const copyArr = (arr) => {
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}

const arrayJoin = (arr) => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += i + 1 == arr.length ? arr[i] : `${arr[i]},`;
  }

  return str;
}

const colonOdd = (num) => {
  if (typeof num !== 'number') {
    return undefined;
  }

  const arr = num.toString().split('');

  for(let i = 0; i < arr.length - 1; i++) {
     const num = Number.parseInt(arr[i]);
     const nextNum = Number.parseInt(arr[i + 1]);

     if ((num * nextNum) % 2 !== 0) {
       arr.splice(i + 1, 0, ':');
       i++;
     }
  }

  return arr.join('');
}

const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const isDuplicate = (item) => {
      let isEqual = false;
      if (typeof item == typeof currentItem) {
        isEqual = typeof currentItem == 'string'
          ? currentItem.toUpperCase() == item.toUpperCase()
          : currentItem === item;
      }

      return isEqual;
    }

    const currentItem = arr[i];  
    const hasDuplicates = arr.slice(i + 1).some(isDuplicate);

    if (hasDuplicates) {
      arr = arr.filter((item, index) => index <= i || !isDuplicate(item));
    }
  }

  return arr;
}

const countIdentic = (arr) => {
  let amount = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    const tmpAmount = arr.filter((item, index) => index > i && item === currentItem).length;
    if (tmpAmount !== 0) {
      amount++;
      arr = arr.filter((item, index) => index <= i || item !== currentItem);
    }
  }
  return amount;
}
