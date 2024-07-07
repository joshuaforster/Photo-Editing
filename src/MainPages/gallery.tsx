// src/pages/Gallery.tsx
import React from 'react';
import ImageGallery from '../PageComponents/imagegallery';

export default function Gallery() {
    const galleryItems: Array<{ type: 'image', imageUrl: string, category:string }> = [
        { type: 'image', imageUrl: 'images/horse.png', category:'animal' },
        { type: 'image', imageUrl: 'images/moose.png', category:'animal' },
        { type: 'image', imageUrl: 'images/duck.png', category:'animal' },
        { type: 'image', imageUrl: 'images/dog1.png', category:'animal' },
        { type: 'image', imageUrl: 'images/dog2.png', category:'animal' },
        { type: 'image', imageUrl: 'images/elephant.png', category:'animal' },
        { type: 'image', imageUrl: 'images/giraffe.png', category:'animal' },
        { type: 'image', imageUrl: 'images/duck2.png', category:'animal' },
        { type: 'image', imageUrl: 'images/chicken.png', category:'animal' },
        { type: 'image', imageUrl: 'images/frog.png', category:'animal' },
        { type: 'image', imageUrl: 'images/rabbit2.png', category:'animal' },
        { type: 'image', imageUrl: 'images/abstract 1.png', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 2.png', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 5.png', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 6.png', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 7.png', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 8.jpg', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 9.jpg', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 10.jpg', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 11.jpg', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 12.jpg', category:'abstract' },
        { type: 'image', imageUrl: 'images/abstract 13 .jpg', category:'abstract' },
        { type: 'image', imageUrl: 'images/figure1.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure2.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure3.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure4.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure5.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure6.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure7.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure8.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure9.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure10.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure11.png', category: 'figures' },
        { type: 'image', imageUrl: 'images/figure12.png', category: 'figures' },

        // Add more items as needed
    ];

    return (
        <section className="bg-white dark:bg-dark-gray">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                    Gallery
                </h2>
            </div>
        </div>

        <div className="bg-light-gray dark:bg-dark-gray py-8">
            <div className="flex justify-center items-center h-full">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Animals</h2>
            </div>
            <ImageGallery items={galleryItems} category={'animal'} />
        </div>

        <div className="bg-white dark:bg-dark-gray py-8">
            <div className="flex justify-center items-center h-full">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Abstract</h2>
            </div>
            <ImageGallery items={galleryItems} category={'abstract'} />
        </div>

        <div className="bg-light-gray dark:bg-dark-gray py-8">
            <div className="flex justify-center items-center h-full">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Figures</h2>
            </div>
            <ImageGallery items={galleryItems} category={'figures'} />
        </div>
    </section>
    );
}