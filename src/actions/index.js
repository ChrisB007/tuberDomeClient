import axios from "axios";

const authAction = async () => {
  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: "AUTH_TYPE", payload: res }));
  };
};
