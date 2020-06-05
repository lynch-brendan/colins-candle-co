import React from 'react';

const CompleteItemRow = (props) => {
    const itemRow = props.items.map(item => (
        <div className = "order-row" key = {item.id}>
            <div id = "item-id">
              <p className = "item_field">{item._id}</p>
           </div>
           <p className = "item_field">{item.title}</p>
           <p className = "item_field">{item.color}</p>
           <p className = "item_field">{item.price}</p>
        </div>
    ));
    return(
        <React.Fragment>
          {itemRow}
        </React.Fragment>
    );

};

export default CompleteItemRow;