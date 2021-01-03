export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    page: "Collection",
    crateNumber: 0,
    sort: "Album",
    device: "",
    hasMod: false,
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
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
        case "SET_PAGE":
            return {
                ...state,
                page: action.page,
            }
        
        case "SET_CRATE":
            return {
                ...state,
                crateNumber: action.crateNumber,
            }
        
        case "SORT_TYPE":
            return {
                ...state,
                sort: action.sort,
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            }
        case "SET_DEVICE":
            return {
                ...state,
                device: action.device,
            }
        case "SET_MOD":
            return {
                ...state,
                hasMod: action.hasMod,
            }
        
        
        default:
            return state;
    }
}

export default reducer;