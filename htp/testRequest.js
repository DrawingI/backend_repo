const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();
form.append('file', fs.createReadStream('./personF1.png'));  // 테스트용 이미지 경로

axios.post('http://localhost:8000/detect', form, {
  headers: form.getHeaders()
}).then(res => {
  console.log('YOLO 결과:', res.data);
}).catch(err => {
  console.error('에러 발생:', err.message);
});
