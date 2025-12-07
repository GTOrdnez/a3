import { Container, Row, Col, Button } from "react-bootstrap";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { favouritesAtom } from "@/store";
import { addToFavourites, removeFromFavourites } from "@/lib/userData";

export default function BookDetails({ book, workId, showFavouriteBtn = true }) {

    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
    const [showAdded, setShowAdded] = useState(false);

    // Update button visual when favourites list changes
    useEffect(() => {
        setShowAdded(favouritesList?.includes(workId));
    }, [favouritesList, workId]);

    // 🔥 NEW — connects UI to database
    async function favouritesClicked() {
        if (showAdded) {
            setFavouritesList(await removeFromFavourites(workId)); // remove from DB
        } else {
            setFavouritesList(await addToFavourites(workId)); // add to DB
        }
    }

    return (
        <Container>
            <Row>
                <Col lg="4">
                    <img
                        onError={(e) => {
                            e.target.src = "https://placehold.co/400x600?text=No+Cover";
                        }}
                        className="img-fluid w-100"
                        src={`https://covers.openlibrary.org/b/id/${book?.covers?.[0]}-L.jpg`}
                        alt="Cover"
                    />
                    <br /><br />
                </Col>

                <Col lg="8">
                    <h3>{book?.title}</h3>
                    <p>
                        {typeof book?.description === "string"
                            ? book.description
                            : book?.description?.value}
                    </p>

                    {showFavouriteBtn && (
                        <Button
                            onClick={favouritesClicked}
                            variant={showAdded ? "primary" : "outline-primary"}
                            className="mt-3"
                        >
                            {showAdded ? "✔ Added to Favourites" : "+ Add to Favourites"}
                        </Button>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
