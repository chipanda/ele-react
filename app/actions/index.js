import {RECEIVE_SELLER, RECEIVE_GOODS, RECEIVE_RATINGS, ERROR_REQUEST} from '../constants/ActionTypes'
import {SELLER, GOODS, RATINGS} from '../constants/PostTypes'
import 'fetch-polyfill'
export function fetchPosts(postTitle, id) {
    return (dispatch, getState) => {
        //dispatch(requestPosts(postTitle));
        return fetch(`/api/${postTitle}`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(postTitle, json.data, id)))
    }
}

function receivePosts(postTitle, data, id) {
    switch (postTitle) {
        case SELLER:
            if(id){
                data.id = id;
            }
            return {
                type: RECEIVE_SELLER,
                seller: data
            }
        case GOODS:
            return {
                type: RECEIVE_GOODS,
                goods: data
            }
        case RATINGS:
            return {
                type: RECEIVE_RATINGS,
                ratings: data
            }
        default:
            return {
                type: ERROR_REQUEST,
            }
    }
}
// function requestPosts(postTitle) {
//     let type;
//     switch (postTitle) {
//         case SELLER:
//             type = REQUEST_SELLER;
//             break;
//         case GOODS:
//             type = REQUEST_GOODS;
//             break;
//         case RATINGS:
//             type = REQUEST_RATINGS;
//             break;
//         default:
//             type = ERROR_REQUEST;
//     }
//     return {
//         type
//     }
// }

