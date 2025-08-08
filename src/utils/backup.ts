import { exec } from 'child_process';

export const backupDatabase = (backupPath: string) => {
  const backupCommand = `pg_dump ${process.env.DATABASE_URL} -f ${backupPath}`;
  exec(backupCommand, (error, stdout, stderr) => {
    if (error) {
      console.error('Backup error:', error);
      return;
    }
    if (stderr) {
      console.error('Backup stderr:', stderr);
      return;
    }
    console.log('Backup stdout:', stdout);
  });
};