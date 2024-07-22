import { Text } from "@mantine/core";
import React from "react";

interface Moneyprops {
    count: number;
}

const formatMoney = (count: number) => {
    if (count >= 1_000_000_000_000_000_000_000_000) {
        return (
            (count / 1_000_000_000_000_000_000_000_000).toFixed(2) +
            " septillion of"
        );
    } else if (count >= 1_000_000_000_000_000_000_000) {
        return (
            (count / 1_000_000_000_000_000_000_000).toFixed(2) +
            " sextillion of"
        );
    } else if (count >= 1_000_000_000_000_000_000) {
        return (
            (count / 1_000_000_000_000_000_000).toFixed(2) + " quintillion of"
        );
    } else if (count >= 1_000_000_000_000_000) {
        return (count / 1_000_000_000_000_000).toFixed(2) + " quadrillon of";
    } else if (count >= 1_000_000_000_000) {
        return (count / 1_000_000_000_000).toFixed(2) + " trillion of";
    } else if (count >= 1_000_000_000) {
        return (count / 1_000_000_000).toFixed(2) + " billion of";
    } else if (count >= 1_000_000) {
        return (count / 1_000_000).toFixed(2) + " million of";
    } else if (count >= 1_000) {
        return (count / 1_000).toFixed(2) + " thousand of";
    } else {
        return count.toString();
    }
};

const Money: React.FC<Moneyprops> = ({ count }) => {
    return (
        <div>
            <Text>Money : {formatMoney(count)} $</Text>
        </div>
    );
};

export default Money;
