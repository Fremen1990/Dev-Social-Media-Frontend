import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "62bc5f0cea0b7b7047c98a42",
    username: "elonmusk",
    email: "ElonMarsGuy@tesla.com",
    profilePicture: "person/elon-musk.webp",
    coverPicture: "",
    followers: ["62bc5f8dea0b7b7047c98a4b"],
    followings: [
      "62bc5f8dea0b7b7047c98a4b",
      "62bc5f26ea0b7b7047c98a44",
      "62bc5f3fea0b7b7047c98a46",
    ],
    isAdmin: false,
    createdAt: "2022-06-29T14:17:48.188Z",
    __v: 0,
    city: "Philadelphia",
    firstName: "Elon",
    from: "Africa",
    lastName: "Musk",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
