import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  //same code  but using appwrite client incase firebase then use firebase client

  client = new Client();
  account

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);

  }

  async createAccount({ email, password, name }) {
    try {
      console.log("Creating account for:", email); //debugging

      const userAccount = await this.account.create(
        
        ID.unique(),
        email,
        password,
        name
      );
      console.log("Account created:", userAccount); //debugging

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Error in createAccount:", error); //debugging

      throw error;
    }
  }

  async login({ email, password }) {
    try {
        console.log("Logging in user:", email,password);
        const session = await this.account.createEmailPasswordSession(email, password);
        console.log("User logged in:", session);
        return session;
    } catch (error) {
        console.error("Error in login:", error);
        throw new Error('Login failed. Please check your credentials and try again.');
    }
}

  async getCurrentUser() {
    try {
      console.log("Fetching current user"); 

     const user = await this.account.get();
      console.log("Current user:", user); //debugging

      return user;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    return null;
  }



  async logout() {
    try {
      console.log("Logging out current user"); //debugging

      await this.account.deleteSessions();
      console.log("User logged out"); //debugging
    } catch (error) {
      console.log("Appwrite service:: logout :: error", error);
    }
  }
}


const authService = new AuthService();

export default authService;
