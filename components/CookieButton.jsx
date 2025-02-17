import { useState } from "react";

function CookieButton() {
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                More Cookies!
            </button>
            <button onClick={() => setCount((count) => count - 1)}>
                Dropped one!
            </button>
            <h4>There are {count} cookies in your hands fatty</h4>
        </div>
    )
}

export default CookieButton;