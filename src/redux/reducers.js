
export const colorReducer = (state = { isActiveBgColor: false, BgColor: ''}, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        isActiveBgColor: true,
        BgColor: action.payload
      }
      case "DEFAULT_COLOR":
      return {
        isActiveBgColor: false,
        BgColor: action.payload
      }
    default:
      return state;
  }
};
