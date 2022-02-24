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
                            <Link href="/">
                                <a>Yellow Restaurant Ordering</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        {restaurants.map((restaurant) => {
                            return (
                                <li key={restaurant.id}>
                                    <Link href={`/restaurant/${restaurant.attributes.Slug}`}>
                                        <a className="uk-link-reset">{restaurant.attributes.name}</a>
                                    </Link>
                                </li>
                            );
                        })}
                        { user ? (
                            <li key="User">
                                <Link href="/user/">
                                    <a className="uk-link-reset">Profile</a>
                                </Link>
                            </li>
                        ) : (
                            <li key="Login">
                                <Link href="/login/">
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
                        <li key="Cart">
                            <Link href="/cart/">
                                <a className="uk-link-reset"> <img src="cart.png" width="40" height="40"/> </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;

/*  */