import { Fragment, useState, useEffect } from "react";

const colors = [
    { id: 1, name: "pink" },
    { id: 2, name: "green" },
    { id: 3, name: "red" },
    { id: 4, name: "blue" },
    { id: 5, name: "orange" },
    { id: 6, name: "yellowgreen" },
    { id: 7, name: "yellow" },
    { id: 8, name: "goldenrod" },
];

const Switcher = () => {
    const [color, setColor] = useState("pink");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `/css/skins/${color}.css`;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [color]);

    return (
        <Fragment>
            <div
                id="switcher"
                className={toggle ? "open" : "close"}
                style={{ display: "block" }}
            >
                <div className="content-switcher">
                    <h4>COLOR SWITCHER</h4>
                    <ul>
                        {colors.map((color) => (
                            <li key={color.id}>
                                <a
                                    href="#"
                                    title={color.name}
                                    className="color"
                                    onClick={() => setColor(color.name)}
                                >
                                    <img
                                        src={`assets/styleswitcher/${color.name}.png`}
                                        alt={color.name}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div id="hideSwitcher" onClick={() => setToggle(false)}>
                        ×
                    </div>
                </div>
            </div>
            <div
                id="showSwitcher"
                className={`styleSecondColor ${toggle ? "close" : "open"}`}
                onClick={() => setToggle(true)}
            >
                <i className="fa fa-cog" />
            </div>
        </Fragment>
    );
};

export default Switcher;
