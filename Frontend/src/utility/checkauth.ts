import Cookies from 'js-cookie';

export const isAuthenticated = (): boolean => {
  const token = Cookies.get('jwt'); // Retrieve token from cookies
  console.log("Token from cookies:", token); // For debugging purposes
  return !!token; // Return true if token exists, otherwise false
};