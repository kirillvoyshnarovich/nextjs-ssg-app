export type Game = {
    title: string;
    provider: string;
    identifier: string;
    categories: string[];
    seo_title: string,
};

export type GamesList = Game[];

export interface GamePageParams {
    params: {
        seo_title: string,
        categoryOrProvider: string,
    }
}