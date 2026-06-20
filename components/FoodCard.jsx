// Card: reusable card component accepting title, description, image, and optional action — used for displaying content in lists. 

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const FoodCard = ({title, description, image}) => {

  return (
    <Card className="pt-0 max-w-sm bg-white shadow-md mx-auto rounded-lg overflow-hidden">
        <CardContent className="p-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </CardContent>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
    </Card>
  )
}

export default FoodCard