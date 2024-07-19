import React from "react";
import Hotel from "../assets/Hotel.png";
import "./Hotels.css";

interface Hotel {
    name: string;
    id: number;
}

interface HotelsListProps {
    hotels: Hotel[];
}

const Hotels: React.FC<HotelsListProps> = ({ hotels }) => {
    return (
        <div>
            {hotels.length > 0 ? (
                <>
                    <h2>Hotels</h2>
                    <div>{hotels.length}</div>
                    <div className="HorizontalFlexHotel">
                        {hotels.map((hotel) => (
                            <>
                                <div>
                                    <div key={hotel.id}>{hotel.name}</div>
                                    <img className="Hotel" src={Hotel} />
                                </div>
                            </>
                        ))}
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Hotels;
