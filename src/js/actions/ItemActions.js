import dispatcher from "../dispatcher";

export function createItem(text) {
    dispatcher.dispatch({
        type: "CREATE_ITEM",
        text
    })
}