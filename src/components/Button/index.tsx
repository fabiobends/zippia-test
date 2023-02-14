import styles from "./styles.module.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export default function Button({ onClick, label, isActive }: ButtonProps) {
  return (
    <div className={styles.container}>
      <button className={inter.className} onClick={onClick}>
        {label}
      </button>
      <div
        className={isActive ? styles.indicatorActive : styles.indicatorInactive}
      />
    </div>
  );
}
