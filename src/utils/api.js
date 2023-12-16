import axios from 'axios';
import { BASE_URL } from '../constants/apiUrl';

axios.defaults.baseURL = BASE_URL;

export default async function getData(url) {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (e) {
    throw Error(`getData에서 ${e} 발생`);
  }
}

// 유저 추가
export async function postUserData(url, name) {
  try {
    const response = await axios.post(url, {
      name,
    });
    return response.data;
  } catch (e) {
    throw Error(`postUser에서 ${e} 발생`);
  }
}

// 유저의 질문 조회

export async function getQuestionsData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw Error(`getQuestions에서 ${e} 발생`);
  }
}
