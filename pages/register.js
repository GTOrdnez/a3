import { useState } from "react";
import { useRouter } from "next/router";
import { registerUser } from "@/lib/authenticate";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
    const router = useRouter();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [warning, setWarning] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const success = await registerUser(user, password, password2);

        if (success) {
            router.push("/login");
        } else {
            setWarning("Registration failed. Check username or password match.");
        }
    }

    return (
        <div className="mt-4" style={{maxWidth:"400px", margin:"auto"}}>
            <h2>Register</h2>
            <p>Create a new account:</p>

            {warning && <Alert variant="danger">{warning}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={user} onChange={(e)=>setUser(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mt-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} required />
                </Form.Group>

                <Button className="mt-3 w-100" variant="success" type="submit">Register</Button>
            </Form>
        </div>
    );
}
