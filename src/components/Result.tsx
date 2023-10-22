"use client";
import Chip from "@mui/material/Chip";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
    PromiseLikeOfReactNode,
} from "react";

export default function Skill(props: {
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | PromiseLikeOfReactNode
        | null
        | undefined;
}) {
    return (
        <>
            <span
                style={{
                    textDecoration: "underline",
                    textDecorationColor: "#2e7d32",
                    textDecorationThickness: "0.1rem",
                }}
            >
                {props.children}
            </span>
        </>
    );
}
