import { Queue } from 'bull';

const queue = new Queue('job-queue');

export const addJob = (jobName: string, data: any) => {
  queue.add(jobName, data);
};

export const processJobs = (jobName: string, callback: Function) => {
  queue.process(jobName, async (job) => {
    await callback(job);
  });
};

export const getQueueStats = async () => {
  return {
    waiting: await queue.getWaitingCount(),
    active: await queue.getActiveCount(),
    completed: await queue.getCompletedCount(),
    failed: await queue.getFailedCount(),
  };
};

console.log('Queue utilities initialized.');