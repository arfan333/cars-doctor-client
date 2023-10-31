/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure()
  const url = `/bookings?email=${user?.email}`;
  // const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    // fetch(url, {credentials: 'include'})
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
    axiosSecure.get(url)
    .then(res => setBookings(res.data))
  }, [url, axiosSecure]);
  const handleDelete = (id) => {
    const proceed = confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining)
          }
        });
    }
  };

  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0 ) {
        // updated state
        const remaining = bookings.filter(booking => booking._id !== id)
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'confirm'
        const newBooking = [updated, ...remaining]
        setBookings(newBooking)
      }
    })
  }
  return (
    <div>
      <h1>Your Bookings :{bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
