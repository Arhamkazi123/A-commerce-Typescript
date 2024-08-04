
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("protectvalue"); // Retrieve value from localStorage

  return token === 'true';
  
};
