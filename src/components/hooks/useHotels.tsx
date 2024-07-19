import { useState, useEffect } from "react";
import { Hotel } from "../type";

export const useHotels = () => {
    const [hotels, setHotels] = useState<Hotel[]>(() => {
        const savedHotels = localStorage.getItem("hotels");
        return savedHotels ? JSON.parse(savedHotels) : [];
    });

    useEffect(() => {
        localStorage.setItem("hotels", JSON.stringify(hotels));
    }, [hotels]);

    return [hotels, setHotels] as const;
};
