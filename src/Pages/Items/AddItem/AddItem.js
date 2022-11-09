import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const addItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemPhoto = form.itemPhoto.value;
    const itemName = form.itemName.value;
    const itemPrice = form.itemPrice.value;
    const itemInfo = form.itemInfo.value;
    const services = {
      img: itemPhoto,
      name: itemName,
      price: itemPrice,
      discription: itemInfo,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Item Added Successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={addItem}>
        <input
          name="itemPhoto"
          type="text"
          placeholder="Photo URL"
          className="input input-ghost w-full  input-bordered"
        />
        <input
          name="itemName"
          type="text"
          placeholder="Title"
          className="input input-ghost w-full  input-bordered"
        />
        <input
          name="itemPrice"
          type="text"
          placeholder="Price"
          className="input input-ghost w-full  input-bordered"
        />
        <textarea
          name="itemInfo"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Description"
          required
        ></textarea>

        <input className="btn" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
