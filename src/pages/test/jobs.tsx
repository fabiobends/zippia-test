import JobCard from "@/components/Card";
import { Job, JobsResponse } from "@/types";
import getJobs from "@/utils/get-jobs";
import { useCallback, useState } from "react";
import styles from "@/styles/JobsPage.module.css";
import Button from "@/components/Button";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Constants from "@/constants/jobs";
import { orderArrayByProperty } from "@/utils/order-array-by-property";

const inter = Inter({ subsets: ["latin"] });

export default function JobsPage({ jobs }: JobsResponse) {
  const [sortedJobs, setSortedJobs] = useState(jobs);
  const [isCompanyNameOrderActive, setIsCompanyNameOrderActive] =
    useState(false);
  const [isRecentlyPublishedOrderActive, setIsRecentlyPublishedOrderActive] =
    useState(false);

  const onCompanyNameSortClick = useCallback(() => {
    if (isRecentlyPublishedOrderActive) {
      setIsRecentlyPublishedOrderActive(false);
    }
    setSortedJobs(() => {
      if (isCompanyNameOrderActive) {
        return jobs;
      }
      const listOfJobs: Array<Job> = orderArrayByProperty(
        Array.from(jobs),
        "companyName"
      );
      return listOfJobs;
    });
    setIsCompanyNameOrderActive((prev) => !prev);
  }, [isCompanyNameOrderActive, isRecentlyPublishedOrderActive, jobs]);

  const onRecentlyPublishedSortClick = useCallback(() => {
    if (isCompanyNameOrderActive) {
      setIsCompanyNameOrderActive(false);
    }
    setSortedJobs(() => {
      if (isRecentlyPublishedOrderActive) {
        return jobs;
      }
      const recentJobs = jobs.filter((item) => {
        const publishedDate = new Date(item.postingDate);
        return publishedDate.getTime() > Constants.date.getTime();
      });
      const listOfJobs: Array<Job> = orderArrayByProperty(
        recentJobs,
        "postingDate"
      );
      return listOfJobs;
    });
    setIsRecentlyPublishedOrderActive((prev) => !prev);
  }, [isCompanyNameOrderActive, isRecentlyPublishedOrderActive, jobs]);

  return (
    <>
      <Head>
        <meta name="description" content="Zippia Jobs Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zippia.png" />
        <title>Zippia Jobs</title>
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>Zippia Jobs</h1>
        <div className={styles.jobsWrapper}>
          <div className={styles.buttonsRow}>
            <Button
              isActive={isCompanyNameOrderActive}
              label="Order by Company Name"
              onClick={onCompanyNameSortClick}
            />
            <Button
              isActive={isRecentlyPublishedOrderActive}
              label="Order by Last Published"
              onClick={onRecentlyPublishedSortClick}
            />
          </div>
          {sortedJobs.slice(0, Constants.maxNumberOfJobs).map((job, index) => (
            <div key={job.jobId}>
              {index !== 0 && <div className={styles.divider} />}
              <JobCard {...job} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Use SSG to get data to feed the page
  const data = await getJobs();
  // Pass data to the page via props
  return { props: data };
}
