const envConfig = {
  appwriteEndpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
};

export default Object.freeze(envConfig);