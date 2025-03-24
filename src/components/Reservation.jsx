import { useState } from "react";

let Reservation = () => {
  return (
    <form
      className='min-w-full flex justify-center uppercase text-sm'
      style={{ fontFamily: "Nunito" }}
    >
      <ul className='h-35 w-3/4  bg-furnituregray -translate-y-17.5 flex justify-center items-center absolute -z-0'>
        <li className='text-white h-full flex flex-col items-center justify-start flex-1/4 mt-15'>
          <span>Check In Date</span>
          <div className='group flex items-center justify-center mt-5'>
            <input
              type='date'
              className='[&::-webkit-calendar-picker-indicator]:opacity-0 ml-3.5 py-2.5'
            ></input>
            <i
              className='fa fa-calendar-check-o hover:cursor-pointer -translate-x-3.5 pointer-events-none group-hover:text-beige py-2.5'
              aria-hidden='true'
            ></i>
          </div>
        </li>
        <li className='text-white h-full flex flex-col items-center justify-start flex-1/4 mt-15'>
          <span>Check Out Date</span>
          <div className='group flex items-center justify-center mt-5'>
            <input
              type='date'
              className='[&::-webkit-calendar-picker-indicator]:opacity-0 ml-3.5 py-2.5'
            ></input>
            <i
              className='fa fa-calendar-times-o hover:text-beige -translate-x-3.5 pointer-events-none group-hover:text-beige py-2.5'
              aria-hidden='true'
            ></i>
          </div>
        </li>
        <li className='text-white h-full flex flex-col items-center justify-start flex-1/4 mt-15'>
          <span>Rooms</span>
          <input
            type='number'
            className='border-gray border-2 rounded-xl p-2  mt-5'
          ></input>
        </li>
        <li className='text-white h-full flex flex-col items-center justify-start flex-1/4 mt-15'>
          <span>Guests</span>
          <input
            type='number'
            className='border-gray border-2 rounded-xl p-2  mt-5'
          ></input>
        </li>
      </ul>

      <div className='absolute h-15 w-full translate-y-17 flex justify-center items-center '>
        <button
          className='&:hover:text-aquamars text-white border-4 border-aquamars border-solid w-5/12 h-15 bg-aquamars mt-4 text-xl uppercase font-bold hover:bg-white hover:text-aquamars'
          style={{ fontFamily: "Nunito" }}
        >
          Make your reservation now!
        </button>
      </div>
    </form>
  );
};

export default Reservation;
