"use client"

import { BASE_URL, TOKEN } from '@/config/settings';
// import Image from 'next/image';
import React, { useEffect, useState } from 'react'



interface GalleryImage {
  id: number
  image: string
  title: string
  is_gallery: boolean
}



export const GalleryLists = () => {
    const [images, setImages] = useState<GalleryImage[]>([])

    useEffect(() => {
        const run = async () => {
          try {
            const response = await fetch(`${BASE_URL}/media/list`, {
              method: "GET",
              headers: {
                "Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json",
              }
            });
    
            const result = await response.json();
            const status = result?.success;
    
            if (status) {
                setImages(result?.data)
            } else {
              
            }
          } catch (error) {
            console.error("Login failed:", error);
          }
        };
    
        run();
      }, [setImages])

  return (
        <>
            {images?.map((item) => (
                <option key={item?.title} value={item?.image}> {item.title}</option>
            ))}
        </>
  )
}




export const ContentTypes = () => {
  return (
    <>
       <option value="team">Team</option>
       <option value="services">Services</option>
       <option value="blog">Blog</option>
       <option value="slider">Slider</option>
    </>
  )
}
