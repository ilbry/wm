import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {TextField, Button, Typography} from "@mui/material";
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8090/api/login', {
                UserEmail: username,
                password: password
            });

            localStorage.setItem('token', response.data.token);
            history("/operations");
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div style={{textAlign: "center", marginTop: "20vh"}}>
            <Typography variant="h4" gutterBottom style={{color: "green"}}>
                Login
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{marginBottom: "1rem", borderColor: "green"}}
                InputProps={{ style: { color: 'green' } }}
            />
            <br/>
            <TextField
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{marginBottom: "1rem", borderColor: "green"}}
                InputProps={{ style: { color: 'green' } }}
            />
            <br/>
            <Button variant="contained" onClick={handleLogin} style={{backgroundColor: "green", color: "white"}}>
                Login
            </Button>
        </div>
    );
};

export default LoginPage;
