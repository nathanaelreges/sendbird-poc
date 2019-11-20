var unirest = require("unirest");

const APLICATION_ID = '79746C4E-5F74-4B42-95B1-2B4EF3E9BD88'
const API_TOKEN = '7c4e7c42169633561011804fe7a67a129612de1a'
const BASE_URL = `https://api-${APLICATION_ID}.sendbird.com/v3`
const headers = {
  "Api-Token": API_TOKEN,
  "Content-Type": "application/x-www-form-urlencoded",
  "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
}

module.exports = {
  sendMessage({ channelUrl, message }) {
    unirest.post(BASE_URL + `/group_channels/${channelUrl}/messages`)
      .headers(headers)
      .field("message_type", "MESG")
      .field("user_id", "student_guide")
      .field("message", message)
      .end(function (res) {
        if (res.error) console.error(res.error);

        console.log(res.body);
      });
  },
  getUser({ userId }) {
    return new Promise((resolve, reject) => {
      unirest.get(BASE_URL + '/users/' + userId)
        .headers(headers)
        .end(function (res) {
          if (res.error) {
            console.error(res.error);
            resolve({})
          }

          resolve(res.body)
          console.log(res.body);
        });
    })
  },
}

