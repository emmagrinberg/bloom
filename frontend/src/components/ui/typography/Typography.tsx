import {type CSSProperties, type ElementType, type ReactNode} from "react";
import styles from "./Typography.module.css"

type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "p"
    | "span";

type TypographyProps = {
    children: ReactNode;
    variant?: TypographyVariant;
    fontWeight?: number;
    color?: string;
    italic?: boolean;
    fontSize?: number;
    mt?: number;
    mb?: number;
};

const tags: Record<TypographyVariant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    span: "span",
};

export function Typography({
                               children,
                               variant = "p",
                               fontSize = 16,
                               fontWeight = 600,
                               color = "inherit",
                               italic = false,
                               mt = 0,
                               mb = 0,
                           }: TypographyProps) {
    const Tag = tags[variant];

    const style: CSSProperties = {
        color,
        fontSize,
        fontWeight,
        marginTop: mt,
        marginBottom: mb,
        fontStyle: italic ? "italic" : "normal"
    };

    return (
        <Tag
            className={styles[variant]}
            style={style}
        >
            {children}
        </Tag>
    );
}
