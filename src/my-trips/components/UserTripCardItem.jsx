import React from "react";
import { Link } from "react-router-dom";

const UserTripCardItem = ({ trip }) => {
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all cursor-pointer hover:shadow-md">
        <img
          src="/placeholder.jpg"
          className="object-cover rounded-xl h-[220px]"
        />

        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.noOfDays} Days trip with{" "}
            {trip?.userSelection?.budget} Budget
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default UserTripCardItem;
