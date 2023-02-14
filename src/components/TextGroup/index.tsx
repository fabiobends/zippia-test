import styles from "./styles.module.css";
import { Inter } from "@next/font/google";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

interface TextGroupProps {
  label: string;
  body: string;
  alignment?: "left" | "right";
}

const regexHTML = /<[^>]*>/;

function hasHtml(text: string) {
  return regexHTML.test(text);
}

const textStyles: Record<string, CSSProperties> = {
  left: {
    textAlign: "start",
  },
  right: {
    textAlign: "end",
  },
};

export default function TextGroup({
  label,
  body,
  alignment = "left",
}: TextGroupProps) {
  const textStyle = alignment === "left" ? textStyles.left : textStyles.right;
  return (
    <div className={styles.container}>
      <span className={inter.className} style={textStyle}>
        {label}
      </span>
      {hasHtml(body) ? ( // if it is HTML text render within `dangerouslySetInnerHTML` prop
        <p
          className={inter.className}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      ) : (
        // if not, render it as a simple paragraph
        <p className={inter.className} style={textStyle}>
          {body}
        </p>
      )}
    </div>
  );
}
