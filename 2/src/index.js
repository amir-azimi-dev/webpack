import React from "react";
import ReactDOM from "react-dom/client";
import Alert from "./Alert/Alert";

const App = (props) => {
    return (
        <div>
            <h1>
                hello from react
            </h1>
            <Alert />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);