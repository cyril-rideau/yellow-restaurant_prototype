import React from "react";
import Link from "next/link";
import Image from "./image";
import CartPic from "../public/cart.png";
import NextImage from "next/image";

const Nav = ({ restaurants }) => {
    return (
        <div>
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link href="/">
                                <a>Strapi Blog</a>
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
                        <li key="Login">
                            <Link href="/login/">
                                <a className="uk-link-reset">Login</a>
                            </Link>
                        </li>
                        <li key="User">
                            <Link href="/user/">
                                <a className="uk-link-reset">Profile</a>
                            </Link>
                        </li>
                        <li key="Cart">
                            <Link href="/Cart/">
                                <a className="uk-link-reset"> <img src="/cart.png" width="40" height="40"/> </a>
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