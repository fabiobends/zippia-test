import { JobsResponse } from "@/types";

/**
 * This is util to get data jobs from the api
 */
const body = JSON.stringify({
  companySkills: true,
  dismissedListingHashes: [],
  fetchJobDesc: true,
  jobTitle: "Business Analyst",
  locations: [],
  numJobs: 20,
  previousListingHashes: [],
});

export default async function getJobs(): Promise<JobsResponse> {
  const response = await fetch(process.env.API_URL ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  return response.json() as unknown as JobsResponse; // parses JSON response into native JavaScript objects
}
