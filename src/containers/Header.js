import React, { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [routesList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])
    return (
        <ul>
            <Link to="/" style={{ padding: "5px" }}>
                Home
            </Link>
            <Link to="/test" style={{ padding: "5px" }}>
                Test
            </Link>
            <Link to="/test/testis" style={{ padding: "5px" }}>
                Testis
            </Link>

            {routesList.map((x, i) => (
                <Link key={i} to={{ pathname: "component" + x.id }} style={{ padding: "5px" }}>
                    test {x.id}
                </Link>
            ))}
        </ul>
    )
}

export default Header
