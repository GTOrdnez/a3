import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthenticated, readToken } from "@/lib/authenticate";
import { getFavourites } from "@/lib/userData";
import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";

const PUBLIC_PATHS = ["/login", "/register", "/about"];

export default function RouteGuard({ children }) {
    const router = useRouter();
    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);

    async function updateAtom() {
        if (isAuthenticated()) {
            setFavouritesList(await getFavourites());
        }
    }

    function authCheck(url) {
        const path = url.split("?")[0];
        if (!PUBLIC_PATHS.includes(path) && !isAuthenticated()) {
            router.push("/login");
        }
    }

    useEffect(() => {
        authCheck(router.pathname);
        updateAtom();
        router.events.on("routeChangeComplete", authCheck);

        return () => {
            router.events.off("routeChangeComplete", authCheck);
        };
    }, []);

    return children;
}
