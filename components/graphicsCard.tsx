'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Button } from './ui/button'
import useHover from '@/hooks/use-hover'
import Link from 'next/link'

const GraphicsCard = ({ graphics }: { graphics: any }) => {
    const photo = useRef<HTMLDivElement>(null);
    const projectData = useHover(photo, {
        x: -4,
        y: -5,
        z: 3,
    });
    return (
        <div
            ref={photo}
            key={graphics.title}
            className=" bg-white text-center  py-10 px- "
            style={{
                transform: projectData.transform,
            }}
        >
            <Image width={500} height={500} alt='/' className="mx-auto w-full rounded-md  object-contain aspect-square flex-shrink-0 " src={graphics.imageUrl} />
            <div className='flex flex-col items-start gap-5 mt-4'>
                <p className='text-1xl font-bold mx-auto'>{graphics?.title}</p>


            </div>


        </div>
    )
}

export default GraphicsCard