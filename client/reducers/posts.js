// reducer takes two things
// 1. action
// 2. copy of state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      // return updated state
      console.log("incrementing likes!");
      const i = action.index;
      return [
        ...state.slice(0,i), //before the one we update
        {...state[i], likes: state[i].likes + 10},
        ...state.slice(i+1),
      ]
    default: 
      return state;
  }
}

export default posts;
