import { Button } from "@mantine/core";
import React from "react";
import { useAddBuilds } from "./hooks/useAddBuilds";

interface Hotel {
    name: string;
    id: number;
}

interface Hotelprops {
    hotels: Hotel[];
    trucHotel: (newHotel: Hotel) => void;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setPlusSecond: React.Dispatch<React.SetStateAction<number>>;
}

const AddHotel: React.FC<Hotelprops> = ({
    count,
    setCount,
    setPlusSecond,
    trucHotel,
    hotels,
}) => {
    const hotelPrice = hotels.length * 10 + 10 * 4;

    return (
        <>
            {count < hotelPrice ? (
                <Button className="Button" disabled>
                    Add a hotel ({hotelPrice}$)
                </Button>
            ) : (
                <Button
                    bd={"none"}
                    variant="transparent"
                    onClick={() =>
                        useAddBuilds(
                            "Hotel",
                            hotels,
                            trucHotel,
                            count,
                            setCount,
                            setPlusSecond,
                            10,
                            2
                        )
                    }
                >
                    Add a hotel ({hotelPrice}$)
                </Button>
            )}
        </>
    );
};

export default AddHotel;
