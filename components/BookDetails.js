import { Container, Row, Col, Button } from "react-bootstrap";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { favouritesAtom } from "@/store";

export default function BookDetails({ book, workId, showFavouriteBtn = true }) {
    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
    const [showAdded, setShowAdded] = useState(false);

    useEffect(() => {
        setShowAdded(favouritesList.includes(workId));
    }, [favouritesList, workId]);

    const favouritesClicked = () => {
        if (showAdded) {
            setFavouritesList((current) => current.filter((fav) => fav !== workId));
            setShowAdded(false);
        } else {
            setFavouritesList((current) => [...current, workId]);
            setShowAdded(true);
        }
    };

    return (
        <Container>
            <Row>
                <Col lg="4">
                    <img
                        onError={(event) => {
                            event.target.onerror = null;
                            event.target.src =
                                "https://placehold.co/400x600?text=Cover+Not+Available";
                        }}
                        className="img-fluid w-100"
                        src={`https://covers.openlibrary.org/b/id/${book?.covers?.[0]}-L.jpg`}
                        alt="Cover Image"
                    />
                    <br /><br />
                </Col>

                <Col lg="8">
                    <h3>{book?.title}</h3>
                    {book?.description && (
                        <p>
                            {typeof book.description === "string"
                                ? book.description
                                : book.description.value}
                        </p>
                    )}
                    <br />

                    <h5>Characters</h5>
                    Jean-Baptiste Grenouille, Baldini, Richis, Laure, Madame Gaillard
                    <br /><br />

                    <h5>Settings</h5>
                    18th Century France, Paris, Grasse, Montpellier
                    <br /><br />

                    <h5>More Information</h5>
                    <span>
            <a
                href="https://en.wikipedia.org/wiki/Perfume_(novel)"
                target="_blank"
                rel="noreferrer"
            >
              Wikipedia
            </a>
            <br />
          </span>
                    <span>
            <a
                href="https://www.goodreads.com/book/show/343.Perfume"
                target="_blank"
                rel="noreferrer"
            >
              Goodreads
            </a>
            <br />
          </span>

                    {showFavouriteBtn && (
                        <Button
                            variant={showAdded ? "primary" : "outline-primary"}
                            onClick={favouritesClicked}
                            className="mt-3"
                        >
                            {showAdded ? "+ Favourite (added)" : "+ Favourite"}
                        </Button>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
