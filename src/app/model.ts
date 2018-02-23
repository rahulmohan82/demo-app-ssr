export class Category {
    name: string;
    cards: string[];
    metaTitle: string;
    metaDescription: string;
    metaImageUrl: string;

}

export const CATEGORIES: Category[] = [
    {
        name: 'Automotive',
        cards: [
            'https://makebizcards.com/featured-images/cards/automotive/automotive-3.jpg',
            'https://makebizcards.com/featured-images/cards/automotive/automotive-9.jpg',
            'https://makebizcards.com/featured-images/cards/automotive/automotive-4.jpg',
            'https://makebizcards.com/featured-images/cards/automotive/automotive-5.jpg',
            'https://makebizcards.com/featured-images/cards/automotive/automotive-7.jpg'
        ],
        metaTitle: 'Automotive Business Card Templates',
        metaDescription: '5 Unique Easy to customize Automotive Business Card Templates',
        metaImageUrl: 'https://makebizcards.com/featured-images/cards/automotive/automotive-3.jpg'
    },
    {
        name: 'Babysitting',
        cards: [
            'https://makebizcards.com/featured-images/cards/babysitting/babysitting-7.jpg',
            'https://makebizcards.com/featured-images/cards/babysitting/babysitting-4.jpg',
            'https://makebizcards.com/featured-images/cards/babysitting/babysitting-5.jpg',
            'https://makebizcards.com/featured-images/cards/babysitting/babysitting-3.jpg',
            'https://makebizcards.com/featured-images/cards/babysitting/babysitting-10.jpg'
        ],
        metaTitle: 'Babysitting Business Card Templates',
        metaDescription: '5 Unique Easy to customize BabySitting Business Card Templates',
        metaImageUrl: 'https://makebizcards.com/featured-images/cards/babysitting/babysitting-7.jpg'
    }
];
