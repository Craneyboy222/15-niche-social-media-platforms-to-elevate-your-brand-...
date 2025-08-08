import { exec } from 'child_process';

class MigrationService {
  migrate() {
    return new Promise((resolve, reject) => {
      exec('npm run migrate', (error, stdout, stderr) => {
        if (error) {
          reject(`Migration failed: ${stderr}`);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  rollback() {
    return new Promise((resolve, reject) => {
      exec('npm run rollback', (error, stdout, stderr) => {
        if (error) {
          reject(`Rollback failed: ${stderr}`);
        } else {
          resolve(stdout);
        }
      });
    });
  }
}

export default new MigrationService();