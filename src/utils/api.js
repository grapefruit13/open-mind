import axios from 'axios';
import { BASE_URL } from '../constants/apiUrl';

axios.defaults.baseURL = BASE_URL;

// 유저 조회
export default async function getUserData(url, subjectId) {
  try {
    const response = await axios.get(`${url}${subjectId}`);
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

// 답변 하나 조회 (답변 추가,수정,삭제,거절 이후에 바로 실행)
export async function getAnswer(url, answerId) {
  try {
    const response = await axios.get(`${url}${answerId}/`);
    return response.data;
  } catch (e) {
    throw Error(`getAnswer ${e} 발생`);
  }
}

// 답변 추가
export async function postAnswer(url, questionId, content, isRejected) {
  try {
    const response = await axios.post(`${url}${questionId}/answers/`, {
      content,
      isRejected,
    });
    return response.data;
  } catch (e) {
    throw Error(`postAnswer ${e} 발생`);
  }
}

// 답변 수정
export async function putAnswer(url, answerId, content, isRejected) {
  try {
    const response = await axios.put(`${url}${answerId}/`, {
      content,
      isRejected,
    });
    return response.data;
  } catch (e) {
    throw Error(`putAnswer ${e} 발생`);
  }
}

// 질문 삭제
export async function deleteQuestion(url, questionId) {
  try {
    const response = await axios.delete(`${url}${questionId}/`);
    return response.data;
  } catch (e) {
    throw Error(`putAnswer ${e} 발생`);
  }
}

// 질문 전체 삭제
export async function deleteAllQuestion(url, questionsIds) {
  try {
    const deleteRequests = questionsIds.map(deleteId => {
      return axios.delete(`${url}${deleteId}/`);
    });
    console.log('전체삭제 api', deleteRequests);

    const responses = await Promise.all(deleteRequests);

    responses.forEach(response => {
      console.log('DELETE 응답 데이터:', response.data);
    });

    console.log('전체 삭제 api 종료');
  } catch (e) {
    throw Error(`putAnswer ${e} 발생`);
  }
}

// 질문 추가
export async function postQuestion(subjectId, content) {
  try {
    axios.post(`subjects/${subjectId}/questions/`, {
      content,
    });
  } catch (e) {
    throw Error(`postQuestion ${e} 발생`);
  }
}

// 대상 질문 목록 조회
export async function getQuestions(subjectId) {
  try {
    const response = await axios.get(`subjects/${subjectId}/questions/`);
    return response.data;
  } catch (e) {
    throw Error(`getQuestions ${e} 발생`);
  }
}
