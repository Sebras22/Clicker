import { Text } from "@mantine/core";
import React from "react";

interface Moneyprops {
    count: number;
}

const Money: React.FC<Moneyprops> = ({ count }) => {
    return (
        <div>
            <Text>Money : {count} $</Text>
        </div>
    );
};

export default Money;
