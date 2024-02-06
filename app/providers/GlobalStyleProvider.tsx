"use client";
import React from "react";

interface Props {
	children: React.ReactNode;
}

export const GlobalStyleProvider = ({ children }: Props) => {
	return (
		<div className="h-svh flex p-10 gap-5 text-sm text-white">{children}</div>
	);
};
