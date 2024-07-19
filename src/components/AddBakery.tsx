import { Button } from "@mantine/core";
import React from "react";
import { useAddBuilds } from "./hooks/useAddBuilds";
import "./ButtonStyle.css";

interface Bakery {
    name: string;
    id: number;
}

interface Bakeryprops {
    bakeries: Bakery[];
    trucBakery: (newBakery: Bakery) => void;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setPlusSecond: React.Dispatch<React.SetStateAction<number>>;
}

const AddBakery: React.FC<Bakeryprops> = ({
    count,
    setCount,
    setPlusSecond,
    trucBakery,
    bakeries,
}) => {
    const bakeryPrice = bakeries.length * 10 + 10 * 4;

    return (
        <>
            {count < bakeryPrice ? (
                <Button className="Button" disabled>
                    Add a bakery ({bakeryPrice}$)
                </Button>
            ) : (
                <Button
                    bd={"none"}
                    className="Button"
                    variant="transparent"
                    border-color="none"
                    onClick={() =>
                        useAddBuilds(
                            "Bakery",
                            bakeries,
                            trucBakery,
                            count,
                            setCount,
                            setPlusSecond,
                            10,
                            2
                        )
                    }
                >
                    Add a bakery ({bakeryPrice}$)
                </Button>
            )}
        </>
    );
};

export default AddBakery;
