export interface ApodResponse {
    articles: ApodResponseArticle[];
}

export interface ApodResponseArticle {
    source: ApodResponseArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export interface ApodResponseArticleSource {
    id: string;
    name: string;
}
