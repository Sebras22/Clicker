import { Button } from "@mantine/core";
import React from "react";
import { useAddBuilds } from "./hooks/useAddBuilds";
import "./ButtonStyle.css";

interface Fastfood {
    name: string;
    id: number;
}

interface Fastfoodprops {
    fastfoods: Fastfood[];
    trucFastFood: (newFastFood: Fastfood) => void;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setPlusSecond: React.Dispatch<React.SetStateAction<number>>;
}

const AddFastFood: React.FC<Fastfoodprops> = ({
    count,
    setCount,
    setPlusSecond,
    trucFastFood,
    fastfoods,
}) => {
    const fastfoodPrice = fastfoods.length * 10 + 10 * 4;

    return (
        <>
            {count < fastfoodPrice ? (
                <Button className="Button" disabled>
                    Add a fastfood ({fastfoodPrice}$)
                </Button>
            ) : (
                <Button
                    bd={"none"}
                    className="Button"
                    variant="transparent"
                    onClick={() =>
                        useAddBuilds(
                            "Fastfood",
                            fastfoods,
                            trucFastFood,
                            count,
                            setCount,
                            setPlusSecond,
                            10,
                            4
                        )
                    }
                >
                    Add a fastfood ({fastfoodPrice}$)
                </Button>
            )}
        </>
    );
};

export default AddFastFood;
