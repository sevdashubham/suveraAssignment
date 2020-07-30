// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports
import moment from 'moment';
import {
    Card,
    Thumbnail,
    Description,
    Content,
    Meta
} from "@Styled/NewsCard";

// #region Interface Imports
import { INewsCard } from "./NewsCard";
// #endregion Interface Imports

const NewsCard: React.FunctionComponent<INewsCard.IProps> = (
    props
): JSX.Element => {
    const { article } = props;
    const {publishedAt, urlToImage, source, title, content, description, author} = article;
    const fromNow = moment(publishedAt).fromNow();
    const articleDate = moment(publishedAt).format("D");
    const articleMonth = moment(publishedAt).format("MMM");
    const maxLength = 100;
    const maxLengthDesc = 50;
    return (
        <Card>
            <Thumbnail>
                <img src={urlToImage} alt={title} loading="lazy"/>
                <div className='date'>
                    <div>{articleDate}</div>
                    <div>{articleMonth}</div>
                </div>
            </Thumbnail>
            <Content>
                <div className="category">{source.name}</div>
                <h1 className='title'>{title? title.substring(0, maxLength): ''}</h1>
                <h2 className='sub-title'>{content? content.substring(0, maxLengthDesc): ''}</h2>
                <Description>
                    {description}
                </Description>
                <Meta>
 <span className="timestamp">
    {fromNow}
            </span>
                    <span className="comments">
              &nbsp;{author? 'by ': ''}{author}
            </span>
                </Meta>
            </Content>
        </Card>
    );
};

export { NewsCard };
