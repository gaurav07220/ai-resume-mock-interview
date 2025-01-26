import axios from "axios";

export const base_url = 'https://payment-backend-3.onrender.com';
axios.defaults.baseURL = base_url;

export async function postUserSignup({ signupData }) {
  console.log(signupData, 'signupData');
  const apiUrl = '/auth/register'; // Relative path to the signup endpoint

  try {
    const response = await axios.post(apiUrl, signupData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; // Return the response data from the API
  } catch (error) {
    console.error('Error during signup:', error);
    // If an error occurs, check if the error has a response
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to sign up');
    } else {
      throw new Error(error.message || 'Failed to sign up');
    }
  }
}

export async function postUserSignin({ signInData }) {
    console.log(signInData, 'signupData');
    const apiUrl = '/auth/login'; // Relative path to the signup endpoint
  
    try {
      const response = await axios.post(apiUrl, signInData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data; // Return the response data from the API
    } catch (error) {
      console.error('Error during signup:', error);
      // If an error occurs, check if the error has a response
      if (error.response) {
        throw new Error(error.response.data.message || 'Failed to sign up');
      } else {
        throw new Error(error.message || 'Failed to sign up');
      }
    }
  }


