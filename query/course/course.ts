import axios, {
  AxiosError,
  AxiosResponse,
} from '../../utils/axios-interceptor';

export const getCourses = async (
  query: Record<string, any> = {}
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      {
        params: query,
        headers: {
          accept: 'application/json',
          'X-RapidAPI-Key':
            '2d2dd50068msh6137922e1f974acp17aa0bjsn8a46d60e282f',
          'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        },
      }
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const { data } = (error as AxiosError).response || {};
      throw data;
    } else {
      throw error;
    }
  }
};
