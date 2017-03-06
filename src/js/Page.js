import React from 'react';
import * as ItemActions from "./actions/ItemActions";
import ItemStore from "./stores/ItemStore";
import Item from "./Item";

class Page extends React.Component {
    constructor(props){
        super(props);
        this.items = ItemStore.getAll();
        console.log(this.items);
        this.getItems = this.getItems.bind(this);
    }
    componentWillMount() {
        ItemStore.on('change', this.getItems);
    }
    componentWillUnmount() {
        ItemStore.removeListener('change', this.getItems);
    }
    getItems(){
        this.setState({items: ItemStore.getAll()});
    }
    createItem(){
        ItemActions.createItem(Date.now());
    }

    buildItems(){
        return this.items.map(item => {
          return <Item key={item.id} text={item.text} />
        });
    }
    render(){
        return (
            <div>
                <button onClick={this.createItem.bind(this)}>Create</button>
                {this.buildItems()}
            </div>
        );
    }
}
window.ItemStore = ItemStore;
export default Page;