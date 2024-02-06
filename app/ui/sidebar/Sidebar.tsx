"use client";

import Image from "next/image";
import React from "react";

import menu from "@/utils/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Sidebar = () => {
	const pathname = usePathname();
	return (
		<nav className="relative w-60 border-2 bg-neutral rounded-2xl border-gray-600">
			<div className="profile flex flex-col justify-between items-center h-full">
				<div className="profile-overlay inline-flex p-3 mt-5 bg-gray-600 rounded-lg shadow-md">
					<div className="image">
						<Image
							className="rounded-full"
							width={70}
							height={70}
							src={"/fikri.png"}
							alt="profile"
						/>
					</div>
					<h1 className="text-xl font-semibold flex flex-col leading-5 justify-center ms-3">
						<span>Fikri</span>
						<span>Falridho</span>
					</h1>
				</div>
				<ul className="nav-items flex flex-col w-full text-center -mt-36 text-neutral-content">
					{menu.map((item) => {
						return (
							<li
								key={item.id}
								className={clsx(
									"w-full font-medium hover:bg-gray-800 transition-all ease-in-out duration-300 hover:text-white",
									{
										"text-white bg-gray-600 font-semibold border-r-4 border-warning":
											pathname === item.link,
									}
								)}
							>
								<Link
									className="inline-flex items-center w-full p-3 ps-12 gap-4"
									href={item.link}
								>
									{item.icon} {item.title}
								</Link>
							</li>
						);
					})}
				</ul>
				<button></button>
			</div>
		</nav>
	);
};
