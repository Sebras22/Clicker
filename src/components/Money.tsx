import React from "react";

interface Moneyprops {
    count: number;
}

const Money: React.FC<Moneyprops> = ({ count }) => {
    return (
        <div>
            <p>Money : {count} $</p>
        </div>
    );
};

export default Money;
