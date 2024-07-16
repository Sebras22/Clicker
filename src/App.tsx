import { ModalsProvider } from "@mantine/modals";
import MainPage from "./pages/MainPage";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';


function App() {

  return (
    <>
     <MantineProvider>
            <ModalsProvider>
                <MainPage />
            </ModalsProvider>
        </MantineProvider>
    </>
  );
}

export default App;
