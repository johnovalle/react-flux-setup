import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ItemStore extends EventEmitter {
    constructor() {
        super();
        this.items = [
            {id: 1, text: 'item1'},
            {id: 2, text: 'item2'},
        ];
    }

    createItem(text){
        const id = Date.now();
        this.items.push({
            id,
            text
        });
        this.emit('change');
        console.log(this.items);
    }

    getAll() {
        return this.items;
    }

    handleActions(action){
        if(action.type === "CREATE_ITEM"){
            this.createItem(action.text);
        }
    }
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));
//window.dispatcher = dispatcher;
export default itemStore;