import { AppShell, Burger, Group, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRef } from 'react';
import AddMoney from '../components/AddMoney';
import Money from '../components/Money';
import AddHouse from '../components/AddHouse';
import Houses from '../lists/Houses';
import Restaurant from '../lists/Fastfoods';
import AddRestaurant from '../components/AddRestaurant';
import { useCount } from '../components/hooks/useCount';
import { usePlusSecond } from '../components/hooks/usePlusSecond';
import { PlusMoney } from '../components/function/PlusMoney';
import { Delete } from '../components/function/Delete';
import { useHouses } from '../components/hooks/useHouses';
import { useFastFoods } from '../components/hooks/useFastFoods';
import { Bakery, House, Fastfood as FastFoodType, Market } from '../components/type';
import { useBakeries } from '../components/hooks/useBakeries';
import AddBakery from '../components/AddBakery';
import Bakeries from '../lists/Bakeries';
import AddMarket from '../components/AddMarket';
import Markets from '../lists/Market';

function MainPage() {
  const [opened, { toggle }] = useDisclosure();

  const [count, setCount] = useCount();
  const intervalRef = useRef<number | null>(null);
  const [plussecond, setPlusSecond] = usePlusSecond(setCount);

  const [houses, setHouses] = useHouses();
  const [bakeries, setBakeries] = useBakeries();
  const [fastfoods, setFastFoods] = useFastFoods();
  const [markets, setMarkets] = useFastFoods();

  const trucHouse = (newHouse: House) => {
    setHouses(prevHouses => [...prevHouses, newHouse]);
  };

  const trucBakery = (newBakery: Bakery) => {
    setBakeries(prevBakeries => [...prevBakeries, newBakery]);
  };

  const trucFastFood = (newFastFood: FastFoodType) => {
    setFastFoods(prevFastFoods => [...prevFastFoods, newFastFood]);
  };

  const trucMarket = (newMarket: Market) => {
    setMarkets(prevMarkets => [...prevMarkets, newMarket]);
  };

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>LOGO</Text>
          <Money count={count} />
          <Text>Money by second : {plussecond} $</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Navbar</Text>
        </Group>
        <AddHouse
          houses={houses}
          trucHouse={trucHouse}
          count={count}
          setCount={setCount}
          setPlusSecond={setPlusSecond}
        />
        <AddBakery
         bakeries={bakeries}
         trucBakery={trucBakery}
         count={count}
         setCount={setCount}
         setPlusSecond={setPlusSecond}
        /> 
        <AddRestaurant
          fastfoods={fastfoods}
          trucFastFood={trucFastFood}
          count={count}
          setCount={setCount}
          setPlusSecond={setPlusSecond}
        />
        <AddMarket
          markets={markets}
          trucMarket={trucMarket}
          count={count}
          setCount={setCount}
          setPlusSecond={setPlusSecond}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <AddMoney onIncrement={() => PlusMoney(setCount)} />
        <Houses houses={houses} />
        <Bakeries bakeries={bakeries}/>
        <Restaurant fastfoods={fastfoods} />
        <Markets markets={markets}/>
      </AppShell.Main>

      <AppShell.Aside p="md">
        <Text>Aside</Text>
      </AppShell.Aside>

      <AppShell.Footer p="md">
        <Button
          onClick={() => Delete(setCount, setPlusSecond, setHouses,setBakeries, setFastFoods, setMarkets, intervalRef)}
          variant="light"
          color="red"
        >
          Delete
        </Button>
        <Text>Footer</Text>
      </AppShell.Footer>
    </AppShell>
  );
}

export default MainPage;
