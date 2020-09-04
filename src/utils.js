const range = (end) => {
  var ans = [];
  for (let i = 0; i < end; i++) {
    ans.push(i);
  }
  return ans;
};

const cleanData = (arr) => {
  const cleanedData = {};

  arr.forEach((object) => {
    const { _id, price, isBooked } = object;

    cleanedData[_id] = { price, isBooked };
  });

  return cleanedData;
};

module.exports = { cleanData, range };

/*

{ _id: 'H-12', price: 225, isBooked: false }

{
id: {
  price: 225,
  isBooked: false;
}

}


*/
