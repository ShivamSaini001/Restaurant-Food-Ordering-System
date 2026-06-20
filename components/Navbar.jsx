"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { BadgeCheckIcon, BellIcon, Contact, CreditCardIcon, Home, Info, LogOutIcon, Package, SearchIcon, ShoppingCart } from "lucide-react";
import { Field } from "./ui/field";
import { Input } from "./ui/input";
import { ButtonGroup } from "./ui/button-group";

export default function Navbar({className}) {
    // Navbar: logo or app name on the left, 3–4 navigation links, and a menu/profile icon on the right. 
    const pathname = usePathname();

    const navLinks = [
        { label: "Home", icon: <Home size={18} />, href: "/" },
        { label: "My Orders", icon: <Package size={18} />, href: "/orders" },
        { label: "Cart", icon: <ShoppingCart size={18} />, href: "/cart" },
        { label: "About", icon: <Info size={18} />, href: "/about" },
        { label: "Contact", icon: <Contact size={18} />, href: "/contact" },
    ];

    return (
        <nav className={`${className} flex justify-between gap-2 primary text-white m-3 rounded-2xl py-3 px-4 items-center`}>
            <div className="flex">
                {/* Logo */}
                <Link href="/" className="font-bold flex gap-1" >
                    <span className="">🍽</span>
                    <span className="logo-text">
                        Savour
                    </span>
                </Link>
            </div>
            <div className="gap-5 hidden sm:flex items-center">
                {
                    navLinks && navLinks.map(({ href, label, icon }, index) => {
                        return (
                            <Link
                                href={href}
                                key={index}
                                onClick={() => { }}
                                className={`${pathname === href && 'warning-text'} `}>
                                <span className="flex gap-1 items-center text-xs lg:text-lg">
                                    {icon}
                                    {label}
                                </span>
                            </Link>
                        )
                    })
                }

            </div>
            <div className="flex gap-3">
                {/* Search Button */}
                <Link href="/search" className="ml-4">
                    <Field>
                        <ButtonGroup>
                            <Input id="input-button-group" placeholder="Search food" className='bg-white'  />
                            <Button variant="outline" className='text-black'>
                                <SearchIcon />
                            </Button>
                        </ButtonGroup>
                    </Field>
                </Link>

                {/* Profile section */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheckIcon />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCardIcon />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BellIcon />
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOutIcon />
                            Sign Out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}