import React from "react";
import { Helmet } from "react-helmet-async";
import useWatches from "../../../assets/hooks/useWatches";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyWatch = () => {
  const [watches, refetch] = useWatches();
  console.log(watches);

  const total = watches
    .reduce((sum, item) => {
      const numericPrice = parseFloat(item.price.match(/[\d.]+/)[0]);
      return sum + numericPrice;
    }, 0)
    .toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://home-server-theta.vercel.app/watch/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="">
      <Helmet>
        <title>Watch List</title>
      </Helmet>
      <div className="uppercase lg:text-3xl font-bold flex justify-evenly items-center mt-8 lg:mt-24  ">
        <h2 className="">Watch List:{watches.length}</h2>
        <h2 className=""> Total Price: ${total}</h2>
        <Link to="/dashboard/payment" className="btn btn-error  btn-sm">
          Pay
        </Link>
      </div>

      {/* table */}
      <div className="overflow-x-auto mt-8 lg:ms-48 lg:mr-36">
        <table className="table">
          <thead>
            <tr className="">
              <th>#</th>
              <th>Home </th>
              <th>Home Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watches.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-xs lg:btn-sm  bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWatch;
