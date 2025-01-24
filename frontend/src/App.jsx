import "./App.css";
import { useGetMessageMutation } from "./services/messagesApiSlice";

function App() {
    const [getMessage, { data, error, isLoading }] = useGetMessageMutation();
    if (error) return <h1>Error!</h1>;
    if (isLoading) return <h1>Loading...</h1>;

    const handleGetMessage = async () => await getMessage();
    return (
        <main>
            <h1>RTK QUERY</h1>
            <button onClick={handleGetMessage}>Get Message from Backend</button>
            {data && (
                <div>
                    <h1>{data}</h1>
                </div>
            )}
        </main>
    );
}

export default App;
