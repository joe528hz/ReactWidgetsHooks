import { useEffect, useState } from "react";

const Route = (props) => {
    const { path, children } = props;
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //listening or detecting the navEvent from Link component
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }

    }, [])

    return currentPath === path ? children : null
}

export default Route;