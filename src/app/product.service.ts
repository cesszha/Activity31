import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	placeholder = 'https://placehold.co/100';
	private readonly products: Product[] = [
		{
			id: 1,
			name: 'Kiki Delivery Service Mug',
			price: 999,
			imageUrl: '/Jiji-mug-1536x1536.jpg',
		},
		{
			id: 2,
			name: 'Calcifer Mug',
			price: 899,
			imageUrl: '/Calcifer-My-All-Your-Bacon-Burn-Mug-1536x1536.jpg',
		},
		{
			id: 3,
			name: 'Totoro Mug',
			price: 699,
			imageUrl: '/totoro-and-friends-mug-6-1536x1536.jpg',
		},
		{
			id: 4,
			name: 'Howl Moving Castle Mug',
			price: 999,
			imageUrl:'/white-glossy-mug-11oz-handle-on-left-6392b15062b79-1536x1536.jpg',
		},
		{
			id: 5,
			name: 'Totoro Mug',
			price: 499,
			imageUrl: '/Totoro-Family-Grey-Mug-1536x1536.jpg',
		},
		{
			id: 6,
			name: 'Calcifer Plushies',
			price: 1299,
			imageUrl: '/24CM-New-Calcifer-Plush-Toys-Cartoon-Filled-Soft-Dolls-Children-Christmas-Gifts-Home-Decorative-Toys-Wholesale-1536x1536.jpg',
		},
		{
			id: 7,
			name: 'No Face Plushies',
			price: 999,
			imageUrl: '/Creative-Funny-Spirited-Away-Movie-Faceless-Man-No-Face-Plush-Toy-Ghost-Kaonashi-Stuffed-U-Shape-1.jpg',
		},
		{
			id: 8,
			name: 'Jiji Plushies',
			price: 399,
			imageUrl: '/Studio-Ghibli-Hayao-Miyazaki-Kiki-s-Delivery-Service-Black-JiJi-Plush-Toy-Cute-Mini-Black-Cat.jpg',
		},
		{
			id: 9,
			name: 'Totoro Plushies',
			price: 199,
			imageUrl: '/Totoro-Plush-Japanese-Anime-Miyazaki-Hayao-Cute-Totoro-Stuffed-Plush-Toys-Dolls-Christmas-Gift-for-Kids.jpg',
		},
		{
			id: 10,
			name: 'Totoro Bag',
			price: 149,
			imageUrl:'/Studio-Ghibli-Anime-Spirited-Away-My-Neighbor-Totoro-Plush-Backpack-Baby-Soft-Totoro-School-Bag-Kids-2.jpg',
		},
		{
			id: 11,
			name: 'Jiji Tote Bag',
			price: 599,
			imageUrl: '/tb1040x1040large-c1198800800-bgf8f8f8.u8-6.jpg',
		},
		{
			id: 12,
			name: 'Kiki & Jiji Tote Bag',
			price: 929,
			imageUrl: '/tb1040x1040large-c1198800800-bgf8f8f8.u8-8.jpg',
		},
		{
			id: 13,
			name: 'Totoro Tote Bag',
			price: 799,
			imageUrl: '/Totoro-Tote-Bag-Japanese-Anime-Printing-Shopping-Bags-for-Women-Resuable-HandBags-Harajuku-Large-Capacity-Female-11.jpg',
		},
		{
			id: 14,
			name: 'Totoro Tote Bag',
			price: 499,
			imageUrl: '/Totoro-Tote-Bag-Japanese-Anime-Printing-Shopping-Bags-for-Women-Resuable-HandBags-Harajuku-Large-Capacity-Female-21.jpg',
		},
		{
			id: 15,
			name: 'Totoro Tote Bag',
			price: 299,
			imageUrl: '/Totoro-Tote-Bag-Japanese-Anime-Printing-Shopping-Bags-for-Women-Resuable-HandBags-Harajuku-Large-Capacity-Female-23.jpg',
		},
	];

	getProducts(): Observable<Product[]> {
		return new Observable<Product[]>((subscriber) => {
			subscriber.next(this.products);
			subscriber.complete();
		});
	}
}