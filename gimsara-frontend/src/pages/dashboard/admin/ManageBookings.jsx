import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments/all");
      return res.data;
    },
  });

  const handleConfirm = async (item) => {
    console.log(item);
    await axiosSecure
      .patch(`/payments/${item._id}`)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Confirmed!",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      });
  };

  const handleDelete = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/payments/${item._id}`)
          .then((res) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Order deleted!",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          })
          .catch((error) => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Error deleting order!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h5>All Orders</h5>
        <h5>Total Orders: {orders.length}</h5>
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="bg-green text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Transaction ID</th>
                <th>Price</th>
                <th>Status</th>
                <th>Confirm Order</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                  <td className="text-center">
                    {item.status === "confirmed" ? (
                      "done"
                    ) : (
                      <button
                        className="btn btn-xs bg-green text-white"
                        onClick={() => handleConfirm(item)}
                      >
                        <GiConfirmed />
                      </button>
                    )}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-xs bg-orange-500 text-white"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrashAlt />
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

export default ManageBookings;
