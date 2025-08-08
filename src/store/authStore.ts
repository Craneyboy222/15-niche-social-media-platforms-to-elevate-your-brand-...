import { makeAutoObservable } from 'mobx';

class AuthStore {
  user = null;
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  login(user: { username: string; email: string }) {
    this.user = user;
    this.isAuthenticated = true;
  }

  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }
}

export const authStore = new AuthStore();