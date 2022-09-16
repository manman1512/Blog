const Reducer = (state, action) => {
    // console.log(action);
    switch(action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;
