/*********************************************************************************
 *  WEB422 – Assignment 3
 *
 *  I declare that this assignment is my own work in accordance with Seneca's
 *  Academic Integrity Policy:
 *
 *  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 *  Name: Guillermo Torrez Student ID: 145795233 Date: Dec 6th, 2025
 *
 *  Vercel App (Deployed) Link: https://a3-delta-one.vercel.app/login
 *
 ********************************************************************************/


import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = (data) => {
        router.push({
            pathname: '/books',
            query: Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== '')),
        });
    };

    return (
        <>
            <PageHeader text="Search for Books" subtext="Browse the extensive collection of books available on openlibrary.org.

" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Author *</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("author", { required: true })}
                        className={errors.author ? "is-invalid" : ""}
                    />
                    {errors.author && <div className="invalid-feedback">Author is required</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" {...register("title")} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" {...register("subject")} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" {...register("language")} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>First Publish Year</Form.Label>
                    <Form.Control type="text" {...register("first_publish_year")} />
                </Form.Group>

                <Button type="submit">Search</Button>
            </Form>
        </>
    );
}
