// reducer takes two things
// 1. action
// 2. copy of state

function posts(state = [], action) {
  console.log("the post will change");
  console.log(state, action);
  return state;
}

export default posts;
