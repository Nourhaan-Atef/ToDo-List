import React from "react";

const ListItems = (props) => {
  const { deleteItem, items } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="formBody">
          <span className="item">{item.name}</span>
          <span className="item">{item.age}</span>
          <span className="item" onClick={() => deleteItem(item.id)}>
            {" "}
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p className="item">There Is No Items TO Show ):</p>
  );
  return (
    <div>
      <div className="header">
        <span> Name</span>
        <span> Age</span>
        <span>Action</span>
      </div>
      {ListItems}
    </div>
  );
};
export default ListItems;
