import { useState, useEffect } from "react";
import { House } from "../type";

export const useHouses = () => {
    const [houses, setHouses] = useState<House[]>(() => {
        const savedHouses = localStorage.getItem("houses");
        return savedHouses ? JSON.parse(savedHouses) : [];
    });

    useEffect(() => {
        localStorage.setItem("houses", JSON.stringify(houses));
    }, [houses]);

    return [houses, setHouses] as const;
};
