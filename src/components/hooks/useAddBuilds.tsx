export const useAddBuilds = (
    itemName: string,
    items: Array<{ name: string; id: number }>,
    setItems: (newItem: { name: string; id: number }) => void,
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setPlusSecond: React.Dispatch<React.SetStateAction<number>>,
    basePrice: number,
    secondIncrement: number
  ) => {
    const itemCost = items.length * basePrice + 120 * 4;
  
    if (count >= itemCost) {
      const newItem = { name: `${itemName} ${items.length + 1}`, id: Date.now() };
      setItems(newItem);
      setCount(prevCount => prevCount - itemCost);
      setPlusSecond(prev => prev + secondIncrement);
    }
  };
  