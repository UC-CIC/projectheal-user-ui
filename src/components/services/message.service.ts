import { AxiosRequestConfig } from 'axios';
import { callExternalApi } from './external-api.service';
import { ApiResponse } from '../models/api-response';


const apiServerUrl = process.env.REACT_APP_API_SERVER_URL + '';
const xtoken = process.env.REACT_APP_X_API_TOKEN + '';

export const postPrompt = async (
    counteract:string[],
    audiences:string[],
    platforms:string[],
    mode:string,
    previousPrompt:string,
    prompt:string
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/generate/communication`,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': xtoken,
    },
    data: {
          "counteract":counteract,
          "audiences":audiences,
          "platforms":platforms,
          "mode":mode,
          "previous_prompt":previousPrompt,
          "prompt":prompt
    }
  };

  return callExternalApi({ config, transform: false });
};
