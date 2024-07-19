import { useEffect, useState } from "react";

export function useCount() {
    const [count, setCount] = useState<number>(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount !== null ? parseInt(savedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem("count", count.toString());
    }, [count]);

    return [count, setCount] as const;
}
