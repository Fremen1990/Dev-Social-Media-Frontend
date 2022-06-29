import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "62ab8f0a466fe16790638395",
    username: "admin",
    email: "thomas@devthomas.com",
    password: "$2b$10$nNK.vJsNMaEOi6pQkcgds.LNqPG1sqCdKbCYZPK0U4jYgITv0z8hq",
    profilePicture: "/person/1.jpeg",
    coverPicture: "",
    followers: ["62ac45d42d57ef42d10291b5"],
    followings: ["62ac45d42d57ef42d10291b5"],
    isAdmin: false,
    createdAt: "2022-06-16T20:14:03.004Z",
    updatedAt: "2022-06-28T11:02:15.271Z",
    __v: 0,
    desc: "Hi man!! this is my updated description!! :) ",
    city: "Warsaw",
    from: "Lodz",
    relationship: 1,
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
