export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQAs51pxpoQQpNfUfJRN53PHIPMZVYNWW17uQU_G5xSqQyjKu3cjJo8KHxPSaCMdj6zdpQff2PrVNqMeIWiITWd3xOyb60EasMW-v1VJ3s_yREtnIEKTojHVvO2Cq00Dxg0srJ7VXUbfl6Ldxb24zYLXvDwNiy4e236spaoOVqFtOAc8",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
