"use client";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
    PromiseLikeOfReactNode,
} from "react";

export default function Component(props: {
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
                    textDecorationColor: "#1976d2",
                    textDecorationThickness: "0.1rem",
                }}
            >
                {props.children}
            </span>
        </>
    );
}
