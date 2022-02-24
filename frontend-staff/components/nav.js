import React from "react";
import Link from "next/link";
import AppContext from "../context/AppContext";
import {logout} from "../lib/auth";

const Nav = ({ restaurants }) => {
    const { user, setUser } = React.useContext(AppContext);

    return (
        <div>
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link href="/staff">
                                <a>Yellow Restaurant Ordering Staff</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        { user ? (
                            <li key="Deposit">
                                <Link href="/deposit/">
                                    <a className="uk-link-reset">Deposits</a>
                                </Link>
                            </li>
                        ) : (
                            <li>

                            </li>
                        )
                        }
                        { user ? (
                            <li key="OnSite">
                                <Link href="/onsite/">
                                    <a className="uk-link-reset">On Site</a>
                                </Link>
                            </li>
                        ) : (
                            <li>

                            </li>
                        )
                        }
                        { user ? (
                            restaurants.map((restaurant) => {
                                    return (
                                        <li key={restaurant.id}>
                                            <Link href={`/restaurant/${restaurant.attributes.Slug}`}>
                                                <a className="uk-link-reset">{restaurant.attributes.name}</a>
                                            </Link>
                                        </li>
                                    );
                                })
                        ) : (
                            <li key="Login">
                                <Link href="/">
                                    <a className="uk-link-reset">Login</a>
                                </Link>
                            </li>
                        )}
                        { user ? (
                                <li key="Logout">
                                    <Link href="/">
                                        <a
                                            className="nav-link"
                                            onClick={() => {
                                                logout();
                                                setUser(null);
                                            }}
                                        >
                                            Logout
                                        </a>
                                    </Link>
                                </li>
                            ) : (
                                <li>

                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;

/*  */