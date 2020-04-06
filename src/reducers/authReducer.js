const initState={
    authError:null
}

const authReducer =( state = initState , action) => {
    switch (action.type) {
      case "login_success":
        console.log("login success");
        return { ...state, authError: null };
      case "login_error":
        console.log("login failed");
        return { ...state, authError: "login failed" };
      case "signout_success":
        console.log("signout success");
        return state;
      case "signup_success":
        console.log("signup success");
        return { ...state, authError: null };
      case "signup_error":
        console.log("signup failed");
        return { ...state, authError: action.err.message };
      default:
        return state;
    }
}
export default authReducer

