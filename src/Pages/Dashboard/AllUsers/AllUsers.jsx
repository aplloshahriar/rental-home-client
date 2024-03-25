import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/users");
      return response.json();
    },
  });

  const handleRole = (id, role) => {
    // console.log(id);

    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name}is Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  //   const handleDelete = () => {};

  return (
    <div>
      <Helmet>
        <title>Home | All Users</title>
      </Helmet>
      <h2 className="text-center font-bold text-2xl mt-8 mb-8">
        Total Users Of The System: {users.length}
      </h2>
      <div className="overflow-x-auto ">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role == "admin" ? (
                    "admin"
                  ) : (
                    <button
                      disabled={user?.role == "admin" ? true : false}
                      onClick={() => handleRole(user._id, "admin")}
                      className={`btn btn-ghost btn-xs lg:btn-sm  bg-orange-600 text-white `}
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
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

export default AllUsers;
