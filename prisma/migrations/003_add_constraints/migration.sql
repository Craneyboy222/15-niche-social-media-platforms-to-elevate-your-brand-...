/* Constraints migration */

ALTER TABLE snaps ADD CONSTRAINT chk_expires_at CHECK (expires_at > created_at);
ALTER TABLE users ADD CONSTRAINT chk_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$');
