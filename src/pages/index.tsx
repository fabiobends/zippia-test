import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  // go to 'test/jobs' right after landing '/' route
  useEffect(() => {
    router.push("test/jobs");
  }, [router]);

  return (
    <>
      <Head>
        <title>Zippia Jobs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zippia.png" />
      </Head>
      <main className={styles.main}>
        <p className={inter.className}>Loading...</p>
      </main>
    </>
  );
}
