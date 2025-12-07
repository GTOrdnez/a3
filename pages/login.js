import { useState } from "react";
import { useRouter } from "next/router";
import { authenticateUser, isAuthenticated } from "@/lib/authenticate";
import { getFavourites } from "@/lib/userData";
import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
    const router = useRouter();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");

    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);

    async function updateAtom() {
        setFavouritesList(await getFavourites());
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const success = await authenticateUser(user, password);

        if (success) {
            await updateAtom();
            router.push("/");                  // redirect to home
        } else {
            setWarning("Invalid username or password.");
        }
    }

    return (
        <div className="mt-4" style={{maxWidth:"400px", margin:"auto"}}>
            <h2>Login</h2>
            <p>Login to access your account:</p>

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

                <Button className="mt-3 w-100" variant="primary" type="submit">Login</Button>
            </Form>
        </div>
    );
}
