import PageHeader from "@/components/PageHeader";
import BookDetails from "@/components/BookDetails";

export default function About({ book }) {
    return (
        <div>
            <PageHeader text="About the Developer: Guillermo Torrez" />

            <p>Hello! My name is Guillermo, and I am learning Web Development using Next.js and React. Currently, I am working as a swim instructor and lifeguard.</p>
            <p>One of my favorite books is "{book.title}".</p>

            <BookDetails book={book} />
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://openlibrary.org/works/OL10834W.json");
    const data = await res.json();

    return {
        props: {
            book: data,
        },
    };
}
