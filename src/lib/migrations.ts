import { exec } from 'child_process';

export const runMigration = (migrationName: string) => {
  return new Promise((resolve, reject) => {
    exec(`npm run migrate ${migrationName}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Migration failed: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
};

export const runRollback = () => {
  return new Promise((resolve, reject) => {
    exec('npm run rollback', (error, stdout, stderr) => {
      if (error) {
        reject(`Rollback failed: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
};