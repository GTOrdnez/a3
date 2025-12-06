import { useAtom } from "jotai";
import { favouritesAtom } from "../store";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import BookCard from "@/components/BookCard";

export default function Favourites() {
    const [favouritesList] = useAtom(favouritesAtom);

    return (
        <Container>
            {favouritesList.length > 0 ? (
                <>
                    <PageHeader text="Favourites" subtext="Your Favourite Books" />
                    <Row className="gy-4">
                        {favouritesList.map((workId) => (
                            <Col key={workId} lg={3} md={6}>
                                <BookCard workId={workId} />
                            </Col>
                        ))}
                    </Row>
                </>
            ) : (
                <PageHeader text="Nothing Here" subtext="Add a book" />
            )}
        </Container>
    );
}
