import "./App.css";
import Main from "./components/Layout/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar showLinks={false} />
            <Main>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt obcaecati, harum excepturi cumque alias, vel id
                    veniam rerum ipsum, nulla nisi et quo incidunt dolorum
                    minima officia. Molestias, odio eum?
                </p>
            </Main>
        </>
    );
}

export default App;
