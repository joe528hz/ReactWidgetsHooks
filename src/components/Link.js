import React from "react";

const Link = (props) => {
    const { href, className, children } = props;

    const onClick = (event) => {
        //for opening the component in a new tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        //first step to not let the app do a full refresh
        event.preventDefault();
        //changing the url
        window.history.pushState({}, '', href)
        //communicate or detecting the Route Components that the url are changed (navigation event)
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a
            onClick={onClick}
            href={href}
            className={className}
        >
            {children}
        </a>
    )
}

export default Link;