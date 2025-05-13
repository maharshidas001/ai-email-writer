import envConfig from '@/config/config';
import { ID, Client, Databases } from 'appwrite';

class AppwriteDatabase {
  client = new Client();
  database;

  // Setting a initial setup for account
  constructor() {
    this.client
      .setEndpoint(envConfig.appwriteEndpoint)
      .setProject(envConfig.appwriteProjectId);
    this.database = new Databases(this.client);
  };

  // Create a new email
  async createEmail({ email }) {
    try {
      const res = await this.database.createDocument(
        envConfig.appwriteDatabaseId,
        envConfig.appwriteCollectionId,
        ID.unique(),
        email
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Get all emails
  async getAllEmails() {
    try {
      const res = await this.database.listDocuments(
        envConfig.appwriteDatabaseId,
        envConfig.appwriteCollectionId
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Get single email
  async getEmail({ id }) {
    try {
      const res = await this.database.getDocument(
        envConfig.appwriteDatabaseId,
        envConfig.appwriteCollectionId,
        id
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  // Update email
  async updateEmail({ id }) {
    try {
      const res = await this.database.updateDocument(
        envConfig.appwriteDatabaseId,
        envConfig.appwriteCollectionId,
        id
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Delete email
  async updateEmail({ id }) {
    try {
      const res = await this.database.deleteDocument(
        envConfig.appwriteDatabaseId,
        envConfig.appwriteCollectionId,
        id
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };
};

const appwriteDatabase = new AppwriteDatabase();

export default appwriteDatabase;