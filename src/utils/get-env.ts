export const getEnv = (key: string, defaultValue: string = ""): string => {
  console.log("Loaded ENV Variables:", process.env); // Debugging
    const value = process.env[key];
    if (value === undefined) {
      if (defaultValue) {
        return defaultValue;
      }
      throw new Error(`Enviroment variable ${key} is not set`);
    }
    return value;
  };