import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isAuthenticated, readToken } from "@/lib/authenticate";
import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import { getFavourites } from "@/lib/userData";

const PUBLIC_PATHS = ["/login", "/register", "/about"];

export default function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);

    async function updateAtom() {
        // Pull favourites from DB and push to atom
        setFavouritesList(await getFavourites());
    }

    useEffect(() => {
        authCheck(router.pathname);

        // Monaco Guard on route change
        const hideContent = () => setAuthorized(false);
        const showContent = (url) => authCheck(url);

        router.events.on("routeChangeStart", hideContent);
        router.events.on("routeChangeComplete", showContent);

        return () => {
            router.events.off("routeChangeStart", hideContent);
            router.events.off("routeChangeComplete", showContent);
        };
    }, []);

    async function authCheck(url) {
        const path = url.split("?")[0];

        if (!PUBLIC_PATHS.includes(path) && !isAuthenticated()) {
            setAuthorized(false);
            router.push("/login");
            return;
        }

        if (isAuthenticated()) {
            await updateAtom();
        }

        setAuthorized(true);
    }

    return authorized && children;
}
