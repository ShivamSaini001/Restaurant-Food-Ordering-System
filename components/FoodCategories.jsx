"use client"

import React, { useState } from 'react'
import FoodCard from './FoodCard'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const FoodCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const foodCategories = [
        "All",
        "Pizza",
        "Burger",
        "Biryani",
        "Chinese",
        "South Indian",
        "North Indian",
        "Pasta",
        "Sandwich",
        "Desserts",
    ];

    const foodItems = [
        { id: 1, title: "Burgers", description: "Juicy beef burgers with fresh ingredients", image: "/images/food1.jpg" },
        { id: 2, title: "Pizzas", description: "Authentic Italian pizzas with a variety of toppings", image: "/images/food2.jpg" },
        { id: 3, title: "Salads", description: "Fresh and healthy salads made with the best ingredients", image: "/images/food3.jpg" },
        { id: 4, title: "Biryani", description: "Fragrant and flavorful biryani with tender meat and aromatic spices", image: "/images/food4.jpg" },
        { id: 5, title: "Pasta", description: "Delicious pasta dishes with rich sauces and fresh ingredients", image: "/images/food5.jpg" },
        { id: 6, title: "Sandwich", description: "Tasty sandwiches with a variety of fillings and fresh bread", image: "/images/food6.jpg" },
        { id: 7, title: "Desserts", description: "Indulgent desserts to satisfy your sweet tooth", image: "/images/food7.jpg" },
        { id: 9, title: "South Indian", description: "Authentic South Indian dishes with a variety of flavors", image: "/images/food9.jpg" },
        { id: 10, title: "North Indian", description: "Traditional North Indian dishes with rich flavors and spices", image: "/images/food10.jpg" },
    ];

    return (
        <section className="w-full flex flex-col items-center justify-center gap-4 my-10">
            <h1 className="text-3xl font-bold text-center">Food Categories</h1>
            {/* Food categories */}
            <div className='flex gap-3 flex-wrap justify-center'>
                {
                    foodCategories?.map((category) => {
                        return (
                            <Button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                variant={category == selectedCategory ? 'default' : 'outline'}>
                                {category}
                            </Button>
                        )
                    })
                }
            </div>
            {/* Carousel */}
            <div>
                <div className="w-full max-w-5xl flex flex-wrap gap-3">
                    {
                        foodItems?.map(({ id, title, description, image }) => {
                            return (
                                <FoodCard
                                    key={id}
                                    title={title}
                                    description={description}
                                    image={image} />
                            )
                        })
                    }

                    {/*                     
                    <Carousel>
                        <CarouselContent>
                            {
                                foodItems?.map(({ id, title, description, image }) => {
                                    return (
                                        <CarouselItem key={id}>
                                            <FoodCard
                                                key={id}
                                                title={title}
                                                description={description}
                                                image={image} />
                                        </CarouselItem>
                                    )
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel> */}

                </div>
            </div>
        </section>
    )
}

export default FoodCategories