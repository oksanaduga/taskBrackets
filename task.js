const findUnique = (array) => [...new Set(array)];

const findMissing = (arr) => {
  const sum = array.reduce((acc, el) => acc + el);
  const quantity = arr.length;
  return (quantity+1)*(quantity+2)/2-sum;
};

const reversePrint = (linkedList) => {
  var values = [];
  function getValue (obj) {
    if (obj.next === null) {
      values.push(obj.value);
      return;
    } else {
      values.push(obj.value);
      getValue(obj.next);
    }
  }

  getValue(linkedList);

  values = values.reverse();
  values = values.join();

  console.log(values);
  console.log('something new')
}
