export default function inputReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_INPUTVALUE":
      return [...state, { ...action.inputValue }];
    default:
      return state;
  }
}
