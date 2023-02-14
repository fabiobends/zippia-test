// current date - 7 days, this is used to get the last published jobs
const date = new Date();
date.setDate(date.getDate() - 7);

// some constants used at 'test/jobs'
const Constants = {
  maxNumberOfJobs: 10,
  date,
};

export default Constants;
