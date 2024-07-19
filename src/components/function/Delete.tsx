import { Bakery, House, Fastfood, Market } from "../type";

export function Delete(
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setPlusSecond: React.Dispatch<React.SetStateAction<number>>,
    setHouses: React.Dispatch<React.SetStateAction<House[]>>,
    setBakeries: React.Dispatch<React.SetStateAction<Bakery[]>>,
    setMarkets: React.Dispatch<React.SetStateAction<Market[]>>,
    setFastFoods: React.Dispatch<React.SetStateAction<Fastfood[]>>,
    intervalRef: React.MutableRefObject<number | null>
) {
    localStorage.clear();
    setCount(0);
    setPlusSecond(0);
    setHouses([]);
    setBakeries([]);
    setMarkets([]);
    setFastFoods([]);

    if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
}
