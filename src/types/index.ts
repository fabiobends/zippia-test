/**
 * Types that used throughout the project
 */
export interface Job {
  jobId: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  postingDate: string;
}

export interface JobsResponse {
  jobs: Array<Job>;
}
