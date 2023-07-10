Front-end (ReactJS);

jsx
import React, { useState } from 'react';

function LoginPage() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');

const handleLogin = async () => {
const response = await fetch('/api/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ username, password }),
});

if (response.ok) {
const data = await response.json();
setMessage(data.message); // Display success message from backend
} else {
setMessage('Login failed, please try again.'); // Display failure message
}
};

return (
<div>
<input
type="text"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button onClick={handleLogin}>Login</button>
<p>{message}</p> // Display success/failure message
</div>
);
}

export default LoginPage;