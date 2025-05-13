import envConfig from '@/config/config';
import { Client, Account, ID } from 'appwrite';

class AppwriteAuth {
  client = new Client();
  account;

  // Setting a initial setup for account
  constructor() {
    this.client
      .setEndpoint(envConfig.appwriteEndpoint)
      .setProject(envConfig.appwriteProjectId);
    this.account = new Account(this.client);
  };

  // Create a user with email and password
  async createUser({ email, password, name }) {
    try {
      const res = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Login user with email and password
  async loginUser({ email, password }) {
    try {
      const res = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Logout user
  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      throw new Error(error);
    }
  };
};

const appwriteAuth = new AppwriteAuth();

export default appwriteAuth;