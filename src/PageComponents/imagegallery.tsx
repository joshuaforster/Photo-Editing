// src/PageComponents/ImageGallery.tsx
import React, { useState } from 'react';
import Slider from '../CustomComponents/sliderImages';
import SingleImage from '../CustomComponents/singleImage';

interface ImageItem {
    type: 'image';
    imageUrl: string;
    category?: string;
}

interface SliderItem {
    type: 'slider';
    firstImage: string;
    secondImage: string;
    category?: string;
}

type GalleryItem = ImageItem | SliderItem;

interface ImageGalleryProps {
    items: GalleryItem[];
    category?: string; // Add category prop
}

export default function ImageGallery({ items, category }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    // Filter items based on the category prop
    const filteredItems = category ? items.filter(item => item.category === category) : items;

    const handlePrevious = () => {
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex - 1 + filteredItems.length) % filteredItems.length);
        }
    };

    const handleNext = () => {
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex + 1) % filteredItems.length);
        }
    };

    return (
        <section className="bg-white dark:bg-dark-gray">
            <div className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredItems.map((item, index) => (
                        <div key={index} className="relative h-full w-auto overflow-hidden">
                            {item.type === 'image' ? (
                                <div className="w-full h-full">
                                    <SingleImage
                                        imageUrl={item.imageUrl}
                                        onPrevious={handlePrevious}
                                        onNext={handleNext}
                                        isFullscreen={currentIndex === index}
                                        setIsFullscreen={(value) => setCurrentIndex(value ? index : null)}
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-full">
                                    <Slider
                                        firstImage={{ imageUrl: item.firstImage }}
                                        secondImage={{ imageUrl: item.secondImage }}
                                        onPrevious={handlePrevious}
                                        onNext={handleNext}
                                        isFullscreen={currentIndex === index}
                                        setIsFullscreen={(value) => setCurrentIndex(value ? index : null)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}