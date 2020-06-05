import React from 'react';

const ItemRow = (props) => {
    const itemRow = props.items.map(item => (
        <div className = "order-row" key = {item.id}>
           <p>{item.count}</p>
           <p>{item.title}</p>
           <p>{item.color}</p>
           <p>{item.price}</p>
           <p>{item.total}</p>
        </div>
    ));
    return(
        <React.Fragment>
          {itemRow}
        </React.Fragment>
    );

};

export default ItemRow;