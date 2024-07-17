import React from "react";
import useHomes from "../../../assets/hooks/useHomes";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../assets/hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageHome = () => {
  const [homes, , refetch] = useHomes();
  const [axiosSecure] = useAxiosSecure();
  console.log(homes);

  const handleDelete = (home) => {
    console.log(home);
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
        axiosSecure.delete(`/api/aHome/${home._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center uppercase mt-8 mb-4">
        Manage Homes
      </h2>
      <hr />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Home</th>
                <th>Category</th>
                <th>Price</th>
                {/* <th>Update</th> */}
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {homes.map((home, index) => (
                <tr key={home._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={home.image} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{home.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {home.category}
                    <br />
                  </td>
                  <td className=""> ${home.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(home)}
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
    </div>
  );
};
export default ManageHome;
