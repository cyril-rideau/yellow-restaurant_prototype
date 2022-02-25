import React from "react";
import Link from "next/link";
import NextImage from "./image";
import { Card } from 'antd';
import Image from "next/image";

const { Meta } = Card;

const ArticleCard = ({ article }) => {
    return (
        <Link href={`/article/${article.attributes.slug}`}>
            <Card
                style={{textAlign: 'center'}}
                hoverable
                size='small'

                cover={<NextImage image={article.attributes.image}/>}
            >
                <div className="center">
                    <Meta
                        title={article.attributes.title}
                    />
                </div>
            </Card>

        </Link>
    );
};

export default ArticleCard;

/*
* <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <NextImage image={article.attributes.image} />
                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase">
                            {article.attributes.category.data.attributes.name}
                        </p>
                        <p id="title" className="uk-text-large">
                            {article.attributes.title}
                        </p>
                    </div>
                </div>
            </a>
            *
            * cover={<NextImage image={article.attributes.image} width="700" height="550"/>}
* */