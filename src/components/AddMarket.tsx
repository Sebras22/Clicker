import { Button } from "@mantine/core";
import React from "react";
import { useAddBuilds } from "./hooks/useAddBuilds";

interface Market {
    name: string;
    id: number;
}

interface Marketprops {
    markets: Market[];
    trucMarket: (newMarket: Market) => void;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setPlusSecond: React.Dispatch<React.SetStateAction<number>>;
}

const AddMarket: React.FC<Marketprops> = ({
    count,
    setCount,
    setPlusSecond,
    trucMarket,
    markets,
}) => {
    const marketPrice = markets.length * 15 + 10 * 4;

    return (
        <>
            {count < marketPrice ? (
                <Button className="Button" disabled>
                    Add a market ({marketPrice}$)
                </Button>
            ) : (
                <Button
                    bd={"none"}
                    variant="transparent"
                    onClick={() =>
                        useAddBuilds(
                            "market",
                            markets,
                            trucMarket,
                            count,
                            setCount,
                            setPlusSecond,
                            10,
                            20
                        )
                    }
                >
                    Add a market ({marketPrice}$)
                </Button>
            )}
        </>
    );
};

export default AddMarket;
