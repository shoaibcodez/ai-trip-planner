import { Button } from "@/components/ui/button";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PlaceCardItem = ({ place }) => {
  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.placeName}
      target="_blank"
    >
      <div className="border rounde p-5 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer hover:shadow-md">
        <img
          src={"/placeholder.jpg"}
          className="h-[140px] w-[140px] rounded-xl "
        />

        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.placeDetails}</p>
          <h2 className="mt-2 text-gray-500">
            🎟️ Tickets:{" "}
            {place.ticketPricing.replace("per", "/").replace("person", "👨🏻‍💼")}
          </h2>
          {/* <Button>
          <FaMapLocationDot />
        </Button> */}
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;
