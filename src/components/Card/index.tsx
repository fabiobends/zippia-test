import { Job } from "@/types";
import TextGroup from "@/components/TextGroup";
import styles from "./styles.module.css";

export default function JobCard({
  jobTitle,
  companyName,
  jobDescription,
}: Job) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TextGroup label="Job Title" body={jobTitle} />
        <TextGroup label="Company Name" body={companyName} alignment="right" />
      </div>
      <div className={styles.description}>
        <TextGroup label="Description" body={jobDescription} />
      </div>
    </div>
  );
}
