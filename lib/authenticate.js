import jwt from "jsonwebtoken";

const TOKEN_KEY = "access_token";

// Save token in local storage
export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

// Get token
export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

// Remove token
export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

// Decode JWT
export function readToken() {
    try {
        const token = getToken();
        return token ? jwt.decode(token) : null;
    } catch (err) {
        return null;
    }
}

// Check if user is logged in
export function isAuthenticated() {
    return getToken() != null;
}

// Login
export async function authenticateUser(user, password) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: user, password })
    });

    if (res.status === 200) {
        const data = await res.json();
        setToken(data.token);
        return true;
    }
    return false;
}

// Register
export async function registerUser(user, password, password2) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: user, password, password2 })
    });

    return res.status === 200;
}
