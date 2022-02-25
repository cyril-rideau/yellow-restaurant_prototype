import React from "react";
import Link from "next/link";
import NextImage from "./image";

const RestaurantCard = ({ dishe }) => {
    if (dishe.attributes.picture != null) {
        return (
            <div>
                <div className="uk-card uk-card-secondary uk-card-hover">
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large uk-card-title">
                            {dishe.attributes.name}
                        </p>
                    </div>
                    <div className="uk-card-media-left">
                        <NextImage image={dishe.attributes.picture} />
                    </div>
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large uk-card-body">
                            {dishe.attributes.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};

export default RestaurantCard;

/* uk-card uk-card-default uk-card-body
uk-card uk-card-secondary uk-card-hover
uk-card uk-card-secondary uk-card-hover uk-flex uk-flex-middle
 */

/* <canvas width="600" height="400"></canvas> */


/*

           <div className="uk-margin uk-align-center">
                <div className="uk-card uk-card-secondary uk-card-hover">
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large uk-card-title">
                            {dishe.attributes.name}
                        </p>
                    </div>
                    <div className="uk-card-media-left">
                        <NextImage image={dishe.attributes.picture} />
                    </div>
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large uk-card-body">
                            {dishe.attributes.description}
                        </p>
                    </div>
                </div>
                <div className="uk-card uk-card-secondary uk-card-hover uk-flex uk-flex-middle">
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large uk-card-title">
                            {dishe.attributes.name}
                        </p>
                    </div>
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large uk-card-body">
                            {dishe.attributes.description}
                        </p>
                    </div>
                </div>
            </div>
 */

/*

            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <NextImage image={dishe.attributes.picture} />
                        <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Media Right</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
                <div className="uk-child-width-1-2@m uk-margin uk-grid">
                    <div>
                        <div className="uk-card-secondary uk-card-default">
                            <div className="uk-card-media-left uk-cover-container">
                                <NextImage image={dishe.attributes.picture} />
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">{dishe.attributes.name}</h3>
                                <p>{dishe.attributes.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

 */