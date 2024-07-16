import { AppShell, Burger, Group, Skeleton, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import AddMoney from '../components/AddMoney';
import Money from '../components/Money';
import AddHouse from '../components/AddHouse';
import Houses from '../lists/Houses';
import Restaurant from '../lists/Restaurant';
import AddRestaurant from '../components/AddRestaurant';

interface House {
  name: string;
  id: number;
}

interface Restaurant {
    name: string;
    id: number;
  }

function MainPage() {
  const [opened, { toggle }] = useDisclosure();

  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? parseInt(savedCount) : 0;
  });

  const [plussecond, setPlusSecond] = useState<number>(() => {
    const savedSecond = localStorage.getItem('seconds');
    return savedSecond !== null ? parseInt(savedSecond) : 0;
  });

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem('seconds', plussecond.toString());
  }, [plussecond]);

  useEffect(() => {
    if (plussecond > 0 && !intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setCount(prevCount => prevCount + plussecond);
      }, 1000) as unknown as number;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [plussecond]);

  const PlusMoney = () => {
    setCount(prevCount => prevCount + 10);
  };

  const Delete = () => {
    localStorage.clear();
    setCount(0);
    setPlusSecond(0);
    setHouses([])
    setRestaurants([])
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const [houses, setHouses] = useState<House[]>(() => {
    const savedHouses = localStorage.getItem('houses');
    return savedHouses ? JSON.parse(savedHouses) : [];
  });

  const trucHouse = (newHouse: House) => {
    setHouses(prevHouses => [...prevHouses, newHouse]);
  };

  const [restaurants, setRestaurants] = useState<Restaurant[]>(() => {
    const savedRestaurants = localStorage.getItem('houses');
    return savedRestaurants ? JSON.parse(savedRestaurants) : [];
  });

  const trucRestaurant = (newRestaurant: Restaurant) => {
    setRestaurants(prevRestaurants => [...prevRestaurants, newRestaurant]);
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
          <AddRestaurant
          restaurants={restaurants}
          trucRestaurant={trucRestaurant}
          count={count}
          setCount={setCount}
          setPlusSecond={setPlusSecond}
        />
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>

      <AppShell.Main>
        Alt layout – Navbar and Aside are rendered on top on Header and Footer
        <AddMoney onIncrement={PlusMoney} />
        <Houses houses={houses} /> 
        <Restaurant restaurants={restaurants}/>
      </AppShell.Main>

      <AppShell.Aside p="md">
        <Text>Aside</Text>
      </AppShell.Aside>

      <AppShell.Footer p="md">
        <Button onClick={Delete} variant="light" color="red">
          Delete
        </Button>
        <Text>Footer</Text>
      </AppShell.Footer>
    </AppShell>
  );
}

export default MainPage;
