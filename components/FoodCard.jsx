// Card: reusable card component accepting title, description, image, and optional action — used for displaying content in lists. 

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const FoodCard = ({ title, description, image }) => {

  return (
    <Card className="py-0 max-w-xs bg-white shadow-md mx-auto rounded-lg overflow-hidden">
      <CardContent className="p-0 m-0">
        <img src={image} alt={title} className="h-full w-sm" />
      </CardContent>
      <CardFooter className={'flex flex-col gap-5'}>
        <div className='w-full'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className={'w-full flex justify-end gap-3 items-center'}>
          <Button variant='outline'>View details</Button>
          <Button variant='default'>Order now</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default FoodCard