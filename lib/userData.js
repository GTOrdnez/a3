import { getToken } from "./authenticate";

// GET favourites
export async function getFavourites() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
        headers: { "Authorization": `Bearer ${getToken()}` }
    });

    return res.status === 200 ? await res.json() : [];
}

// ADD to favourites
export async function addToFavourites(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, {
        method: "PUT",
        headers: { "Authorization": `Bearer ${getToken()}` }
    });

    return res.status === 200 ? await res.json() : [];
}

// REMOVE from favourites
export async function removeFromFavourites(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${getToken()}` }
    });

    return res.status === 200 ? await res.json() : [];
}
