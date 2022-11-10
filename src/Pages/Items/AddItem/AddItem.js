import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../../Title/useTitle";

const AddItem = () => {
  useTitle('Add Item')
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
      description: itemInfo,
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
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  const notify = () => toast("Items added successfully");
  return (
    <div className="m-5">
      <p className="text-3xl mx-auto lg:w-[1000px] font-bold my-6 text-center bg-base-200 p-8 shadow-lg rounded-lg">Add a place you wish to travel</p>
      <form className="lg:w-[1000px] mx-auto border w-full" onSubmit={addItem}>
        <p className="mb-5 text-2xl font-medium ">Enter place photo url</p>
        <input
          name="itemPhoto"
          type="text"
          placeholder="Photo URL"
          className="input input-ghost w-full  input-bordered mb-5"
        />
        <p className="mb-5 text-2xl font-medium ">Enter place name</p>
        <input
          name="itemName"
          type="text"
          placeholder="Title"
          className="input input-ghost w-full  input-bordered mb-5"
        />
        <p className="mb-5 text-2xl font-medium ">Enter expense</p>
        <input
          name="itemPrice"
          type="text"
          placeholder="Price"
          className="input input-ghost w-full  input-bordered mb-5"
        />
        <p className="mb-5 text-2xl font-medium ">Enter place description</p>
        <textarea
          name="itemInfo"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Description"
          required
        ></textarea>

        <div className="flex justify-center mx-auto">
        <input onClick={notify} className="btn mx-auto justify-center rounded-lg shadow-xl my-10" type="submit" value="Add Item" />
        <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
