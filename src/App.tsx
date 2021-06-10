import React from 'react';

import {AddCity} from "./app/components/AddCity";
import {Cities} from "./app/components/Cities";

function App() {
    return (
        <>
            <h1>Weather State</h1>
            <AddCity/>
            <Cities />
        </>

    );
}

export default App;
