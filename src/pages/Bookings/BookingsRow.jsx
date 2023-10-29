/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { customerName, _id, price, phone, email, service, date, img, status } =
    booking;
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded-full w-24 h-24">
            {img && <img src={img} />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
       { status === 'confirm' ? <span className="text-xl font-medium text-lime-900">Confirmed</span> :
       <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
      </th>
    </tr>
  );
};

export default BookingsRow;
