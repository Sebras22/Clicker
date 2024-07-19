import React from "react";

interface AddMoneyprops {
    onIncrement: () => void;
}

const AddMoney: React.FC<AddMoneyprops> = ({ onIncrement }) => {
    return <button onClick={onIncrement}>Add 10</button>;
};

export default AddMoney;
