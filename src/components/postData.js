import React, { useState } from 'react';
import axios from 'axios';

function MyComponent() {
    const [data, setData] = useState('');

    const callDjangoFunction = () => {
        const requestData = {
            // Data you want to send to the Django function
            // Modify this as needed
            key1: 'value1',
            key2: 'value2',
        };

        axios.post('http://127.0.0.1:8000/api/recevicec/', requestData)
            .then(response => {
                // Handle the response data if needed
                setData(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={callDjangoFunction}>Call Django Function</button>
            <p>Response: {data}</p>
        </div>
    );
}

export default MyComponent;