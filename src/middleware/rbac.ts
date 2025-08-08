import { Request, Response, NextFunction } from 'express';

interface User {
  id: number;
  roles: string[];
}

const rolesPermissions = {
  'admin': ['read', 'write', 'delete'],
  'user': ['read', 'write'],
  'guest': ['read']
};

const checkPermissions = (requiredPermission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.user;
    
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userPermissions = user.roles.reduce((acc, role) => {
      return acc.concat(rolesPermissions[role] || []);
    }, []);

    if (userPermissions.includes(requiredPermission)) {
      return next();
    }

    return res.status(403).json({ message: 'Forbidden' });
  };
};

export default checkPermissions;