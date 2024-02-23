import { } from "./actions";

const initialState = {
    ranks : [],
    categories: [],
    topRankings: [],
}

const reducer = (state=initialState, action)=>{
    switch(action.type){

        default:
            return {...state};
    }
};

export default reducer;