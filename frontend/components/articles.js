import React from "react";
import Card from "./card";
import {Row, Col, Divider, Space} from 'antd';


const Articles = ({ articles }) => {
    const leftArticlesCount = Math.ceil(articles.length / 2);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);

    return (
            <Row gutter={16} >
                <Divider orientation="center"> News </Divider>

                    <Col span={12}>
                        {leftArticles.map((article, i) => {
                            return (
                                <Card
                                    article={article}
                                    key={`article__left__${article.attributes.slug}`}
                                />
                            );
                        })}
                    </Col>

                <Col span={12}>
                    {rightArticles.map((article, i) => {
                        return (
                            <Card
                                article={article}
                                key={`article__left__${article.attributes.slug}`}
                            />
                        );
                    })}
                </Col>
            </Row>
    );
};

export default Articles;

            /*
            <div className="uk-child-width-1-2@s" data-uk-grid="true">
                <div>
                    {leftArticles.map((article, i) => {
                        return (
                            <Card
                                article={article}
                                key={`article__left__${article.attributes.slug}`}
                            />
                        );
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightArticles.map((article, i) => {
                            return (
                                <Card
                                    article={article}
                                    key={`article__left__${article.attributes.slug}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
            */