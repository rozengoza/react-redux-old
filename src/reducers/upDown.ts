const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeTheNumber;


// we need one root reducer -> so we have created index.js for root reducer