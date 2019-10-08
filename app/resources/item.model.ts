export interface Item {
    id: number;
    name: string;
    cover: string;
    images: Array<string>;
    category: string;
    categoryTag: string;
    price: string;
    likes: number;
    isLike: boolean;
    isFavorite: boolean;
    comments: number;
    rating: string;
    description: string;
}