"use client"

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Card, CardBody, CardFooter, User, Button } from "@heroui/react";

export const Menu = () => {

    const menus = [
        {
            id: 1,
            title: "British",
            price: "20",
            img: "/menus/menu1.png",
            location: "London"
        },
        {
            id: 2,
            title: "African",
            price: "20",
            img: "/menus/menu2.png",
            location: "London"
        },
        {
            id: 3,
            title: "Spanish",
            price: "20",
            img: "/menus/menu3.png",
            location: "London"
        },
        {
            id: 4,
            title: "Mexican",
            price: "20",
            img: "/menus/menu4.png",
            location: "London"
        },
        {
            id: 5,
            title: "Italian",
            price: "20",
            img: "/menus/menu1.png",
            location: "London"
        },
        {
            id: 6,
            title: "British",
            price: "20",
            img: "/menus/menu2.png",
            location: "London"
        },
        {
            id: 7,
            title: "African",
            price: "20",
            img: "/menus/menu3.png",
            location: "London"
        },
        {
            id: 8,
            title: "Italian",
            price: "20",
            img: "/menus/menu4.png",
            location: "London"
        },
    ]

    return (
        <section>
            <div className="gap-8 grid grid-cols-2 sm:grid-cols-4 py-8">
                {menus.map(({ id, title, price, img, location }) => (
                    <Card key={id} isPressable shadow="sm" className="w-72 h-80">
                        <CardBody
                            className="overflow-visible p-0"
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >
                            <FaRegHeart className="absolute top-2 right-2 text-white text-xl" />
                            <span className="absolute top-2 left-2 bg-white rounded-full px-4 py-1 text-xs">{title}</span>
                            <span className="absolute bottom-2 left-2 text-white text-sm font-semibold">Grilled Barbeque Dishes</span>
                            <span className="absolute bottom-2 right-2 text-[#FCC01C] text-sm font-bold">&#163;{price}pp</span>
                        </CardBody>
                        <CardFooter className="justify-between items-center">
                            <User
                                avatarProps={{
                                    src: "/chef.png",
                                }}
                                description={location}
                                name="Jim Howard"
                            />
                            <div className="flex flex-col">
                                <div className="flex gap-1 items-center justify-end">
                                    <FaStar className="text-[#FCC01C]" />
                                    <span className="text-[#323335]">4.6</span>
                                </div>
                                <div className="text-[10px] text-[#323335]">(23 Reviews)</div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Button className="bg-[#FCC01C] text-white flex mx-auto mt-16 mb-24">Load More</Button>
        </section>
    )
};
