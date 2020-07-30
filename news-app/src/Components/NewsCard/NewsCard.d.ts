declare namespace INewsCard {
    export interface IProps {
        article: Article;
    }
}

export interface Source {
    id?: any;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export { INewsCard };
