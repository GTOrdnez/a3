
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Table, Pagination } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";

export default function Books() {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState([]);

    const queryString = new URLSearchParams(router.query).toString();

    const { data, error } = useSWR(
        `https://openlibrary.org/search.json?${queryString}&page=${page}&`
    );

    useEffect(() => {
        if (data) {
            setPageData(data.docs);
        }
    }, [data]);


    const previous = () => {
        if (page > 1) setPage(page - 1);
    };

    const next = () => {
        if (data && data.numFound > page * 10) setPage(page + 1);
    };

    // Generate subtext for PageHeader from query parameters
    const subtext =
        Object.keys(router.query).length > 0
            ? "Search parameters: " +
            Object.entries(router.query)
                .map(([key, value]) => `${key} = ${value}`)
                .join(", ")
            : "";

    if (error) return <p>Error loading books.</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <>
            <PageHeader text="Search Results" subtext={subtext} />

            <Table striped hover>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>First Published</th>
                </tr>
                </thead>
                <tbody>
                {pageData.map((book) => (
                    <tr
                        key={book.key}
                        onClick={() => router.push(`/works/${book.key.replace("/works/", "")}`)}
                        style={{ cursor: "pointer" }}
                    >
                        <td>{book.title}</td>
                        <td>{book.first_publish_year || "N/A"}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Pagination>
                <Pagination.Prev onClick={previous} />
                <Pagination.Item>{page}</Pagination.Item>
                <Pagination.Next onClick={next} />
            </Pagination>
        </>
    );
}
