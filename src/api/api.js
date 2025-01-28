
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




  

const parseResume = async (resumeFile) => {
  const apiKey = "6Ty4llxzKC4yg3M2tr0IP7KahSSFnLRx"; // Replace with your actual API key
  const apiUrl = "https://api.apilayer.com/resume_parser";

  try {
    const formData = new FormData();
    formData.append("file", resumeFile);

    const response = await axios.post(apiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "apikey": apiKey,
      },
    });

    if (response.status === 200) {
      console.log("Parsed Resume Data:", response.data);
      return response.data; // Process the parsed data as needed
    } else {
      console.error("Error parsing resume:", response.statusText);
    }
  } catch (error) {
    console.error("API error:", error);
  }
};

export default parseResume;
