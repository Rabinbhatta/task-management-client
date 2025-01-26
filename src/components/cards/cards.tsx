import React from "react";

const cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600">
              Jan 21, 2021
            </span>
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
              Pending
            </span>
          </div>
          <div className="mt-2">
            <p className="text-2xl text-gray-700 font-bold">Design System</p>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              interdum erat libero, a tincidunt nulla aliquam in.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://randomuser.me/api/port"
                alt="avatar"
              />
              <div className="ml-2">
                <p className="text-gray-700 font-bold">John Doe</p>
                <p className="text-sm text-gray-600">UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
