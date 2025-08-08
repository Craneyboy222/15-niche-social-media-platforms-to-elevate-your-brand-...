import { exec } from 'child_process';

class BackupService {
  backup() {
    return new Promise((resolve, reject) => {
      exec('pg_dump -U $DB_USER -h $DB_HOST $DB_NAME > backup.sql', (error, stdout, stderr) => {
        if (error) {
          reject(`Backup failed: ${stderr}`);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  restore() {
    return new Promise((resolve, reject) => {
      exec('psql -U $DB_USER -h $DB_HOST $DB_NAME < backup.sql', (error, stdout, stderr) => {
        if (error) {
          reject(`Restore failed: ${stderr}`);
        } else {
          resolve(stdout);
        }
      });
    });
  }
}

export default new BackupService();