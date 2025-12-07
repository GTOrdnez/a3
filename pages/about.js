import PageHeader from "@/components/PageHeader";
import BookDetails from "@/components/BookDetails";

export default function About({ book }) {
    return (
        <div>
            <PageHeader text="About the Developer: Guillermo Torrez" />

            <p>Hello! My name is Guillermo, and I am learning Web Development using Next.js and React. Currently, I am working as a swim instructor and lifeguard.</p>

            {/* Quotes must be escaped in JSX */}
            <p>One of my favorite books is &quot;{book.title}&quot;.</p>

            <BookDetails book={book} />
        </div>
    );
}


export async function getStaticProps() {
    try {
        const res = await fetch("https://openlibrary.org/works/OL10834W.json", { timeout: 10000 });
        const data = await res.json();

        return {
            props: { data }
        };

    } catch (err) {
        console.error("OpenLibrary fetch failed — using fallback");

        return {
            props: { data: null }
        };
    }
}
