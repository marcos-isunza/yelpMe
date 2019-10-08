import { Injectable } from "@angular/core";

import { Item } from "../resources/item.model";
import { Category } from "../resources/category.model";

@Injectable()
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 1,
            name: "Manila Ultimate Tombstone Burger",
            cover: "~/resources/food/burger640.jpg",
            images: [
                "~/resources/food/burger/burger1.jpg",
                "~/resources/food/burger/burger2.jpg",
                "~/resources/food/burger/burger3.jpg",
                "~/resources/food/burger/burger4.jpg",
                "~/resources/food/burger/burger5.jpg",
                "~/resources/food/burger/burger6.jpg"
            ],
            category: "Burger",
            categoryTag: "#2D9CDB",
            price: "300.00",
            likes: 987,
            isLike: false,
            isFavorite: true,
            comments: 13,
            rating: "4.5",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        },
        {
            id: 2,
            name: "Quezon Chocolate Marble Pancake",
            cover: "~/resources/food/pancake640.jpg",
            images: [
                "~/resources/food/pancake/pancake1.jpg",
                "~/resources/food/pancake/pancake2.jpg",
                "~/resources/food/pancake/pancake3.jpg",
                "~/resources/food/pancake/pancake4.jpg",
                "~/resources/food/pancake/pancake5.jpg",
                "~/resources/food/pancake/pancake6.jpg"
            ],
            category: "Pancake",
            categoryTag: "#e4ce0d",
            price: "230.00",
            likes: 891,
            isLike: true,
            isFavorite: true,
            comments: 7,
            rating: "4.0",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        },
        {
            id: 3,
            name: "Binondo Black Forest Cake",
            cover: "~/resources/food/cake640.jpg",
            images: [
                "~/resources/food/cake/cake1.jpg",
                "~/resources/food/cake/cake2.jpg",
                "~/resources/food/cake/cake3.jpg",
                "~/resources/food/cake/cake4.jpg"
            ],
            category: "Cake",
            categoryTag: "#27AE60",
            price: "300.00",
            likes: 730,
            isLike: true,
            isFavorite: true,
            comments: 11,
            rating: "4.0",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        }];
    }

    getCategories(): Array<Category> {
        return [
            {
                cover: "~/resources/food/burger640.jpg",
                category: "BURGER",
                count: "13",
            },
            {
                cover: "~/resources/food/pancake640.jpg",
                category: "PANCAKE",
                count: "5",
            },
            {
                cover: "~/resources/food/cake640.jpg",
                category: "CAKE",
                count: "9",
            },
            {
                cover: "~/resources/food/beer640.jpg",
                category: "BEER",
                count: "7",
            }
        ];
    }
}