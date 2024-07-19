import { Button } from "@mantine/core";
import React from "react";
import { useAddBuilds } from "./hooks/useAddBuilds";

interface House {
    name: string;
    id: number;
}

interface Houseprops {
    houses: House[];
    trucHouse: (newHouse: House) => void;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setPlusSecond: React.Dispatch<React.SetStateAction<number>>;
}

const AddHouse: React.FC<Houseprops> = ({
    count,
    setCount,
    setPlusSecond,
    trucHouse,
    houses,
}) => {
    const housePrice = houses.length * 10 + 10 * 4;

    return (
        <>
            {count < housePrice ? (
                <Button className="Button" disabled>
                    Add a house ({housePrice}$)
                </Button>
            ) : (
                <Button
                    bd={"none"}
                    variant="transparent"
                    onClick={() =>
                        useAddBuilds(
                            "House",
                            houses,
                            trucHouse,
                            count,
                            setCount,
                            setPlusSecond,
                            10,
                            2
                        )
                    }
                >
                    Add a house ({housePrice}$)
                </Button>
            )}
        </>
    );
};

export default AddHouse;
