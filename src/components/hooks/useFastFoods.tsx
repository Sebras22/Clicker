import { useState, useEffect } from "react";
import { Fastfood } from "../type";

export const useFastFoods = () => {
    const [fastfoods, setFastFoods] = useState<Fastfood[]>(() => {
        const savedFastFoods = localStorage.getItem("fastfoods");
        return savedFastFoods ? JSON.parse(savedFastFoods) : [];
    });

    useEffect(() => {
        localStorage.setItem("fastfoods", JSON.stringify(fastfoods));
    }, [fastfoods]);

    return [fastfoods, setFastFoods] as const;
};
