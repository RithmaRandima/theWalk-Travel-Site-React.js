import React from "react";

function Booking() {
  return (
    <div
      id="deals"
      className="booking-container max-w-[1140px] m-auto w-full p-6 py-[20px] my-[100px]"
    >
      <form className="lg:flex lg:justify-between w-full items-center text-white">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounder-md p-2">
            <option>Grande Antigua</option>
            <option>key West</option>
            <option>Maldives</option>
            <option>Cozumel</option>
            <option>Grande Antigua</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label>Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
