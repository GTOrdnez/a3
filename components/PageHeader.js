import Card from "react-bootstrap/Card";

export default function PageHeader({ text, subtext }) {
    return (
        <>
            <Card className="bg-light p-3 shadow-sm mb-4">
                <h1 className="mb-0">{text}</h1>
                {subtext && <small className="text-muted">{subtext}</small>}
            </Card>
            <br />
        </>
    );
}
