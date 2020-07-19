const initalState = {
  page: 1,
  list: [],
};

export default function message(state = initalState, action) {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return {...state, ...action};

    default:
      return state;
  }
}
