import TokenStore from "@/store/TokenStore";
import { withSentry } from '@sentry/nextjs';

export const getDataClient = async (url : string) => {
    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                'Authorization': TokenStore.getState().token
            },
        });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  

