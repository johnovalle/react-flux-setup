import React from 'react';

//const Item = ({text}) => (
//    <div>{`This is ${text}`}</div>
//);
class Item extends React.Component {
    render(){
        return <div>{this.props.text}</div>
    }
}

export default Item;