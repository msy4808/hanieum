import axios from "axios";




//이미지 가져오기(아직 미완성)
export const imageGet = async (url, params, token) => {
  let responseData = null;
  try {
    const response = await axios.get(url, {
      headers: {
        authorization: token,
      },
      timeout: 200000,
    });
    responseData = response.data.result;
    console.log(`ImageGetTest : ${JSON.stringify(responseData)}`)
  } catch (e) {
    console.log(e);
  } 
  return responseData;
};

//서버에 게시판에 전송
export const writePost = async (url, params) => {
  try{
    await axios.post(url, params);
    console.log(`게시글 내용 : ${params}`)
    alert('데이터 전송 완료!')
  }catch(e){
    console.log(e)
  }
}

//이미지 업로드
export const imagePost = async (url, params) => {
  try{
    await axios.post(url, params, {
      headers: {
        Accept: 'application/json',
        "content-type": "multipart/form-data"
    }
    });
    console.log(params)
    alert('이미지 전송 완료!')
  }catch(e){
    console.log(e)
  }
}

//서버에 데이터 불러오기
export const requestGet = async (url, token) => {
  let responseData = null;
  try {
    const response = await axios.get(url, {
      headers: {
        authorization: token,
      },
      timeout: 200000,
    });
    responseData = response.data.result;
  } catch (e) {
    console.log(e);
  } 
  return responseData;
};