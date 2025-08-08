import Queue from 'bull';

class QueueService {
  private queue;

  constructor() {
    this.queue = new Queue('jobQueue');
    this.queue.process(async (job, done) => {
      try {
        // Simulate job processing
        console.log('Processing job:', job.data);
        done();
      } catch (error) {
        console.error('Job processing error:', error);
        done(error);
      }
    });
  }

  async addJob(data: any) {
    try {
      await this.queue.add(data);
    } catch (error) {
      console.error('Error adding job to queue:', error);
    }
  }
}

export default new QueueService();