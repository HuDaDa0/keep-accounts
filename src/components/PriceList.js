import React from 'react';


function PriceList(props) {
    let { items, onModifyItem, onDeleteItem } = props;
    console.log(items);
    return (
        <ul className="list-group list-group-flush">
            {
                items.map(item => (
                    <li className="list-group-item d-flex justify-content-between align-items-center"
                        key={item.id}
                    >
                        <span className="col-1">{item.category.name}</span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 font-weight-bold">
                            {(item.category.type === 'income')? '+': '-'}
                            {item.price}元
                        </span>
                        <span className="clo-2">{item.data}</span>
                        <button 
                            className="col-1 btn btn-primary"
                            onClick={() => {
                                onModifyItem(item);
                            }}
                        >
                            编辑
                        </button>
                        <button 
                            className="col-1 btn btn-danger"
                            onClick={() => {
                                onDeleteItem(item);
                            }}
                        >
                            删除
                        </button>
                    </li>
                ))
            }
        </ul>
    )

}



export default PriceList;

