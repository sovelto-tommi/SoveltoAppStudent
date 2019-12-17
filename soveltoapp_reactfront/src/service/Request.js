const url = "/api/topics/";
const token = sessionStorage.getItem("tommi");

export const fetchQuestions =(querydata)=> {
  return fetch(url, {
    method: "POST",
    headers: {
      "authorization": token,
      "Accept": "application/json", 
      "Content-type": "application/json"
    },
    body: JSON.stringify(querydata)
  })
  .then(res => res.json())
};

export const postQuiz = (quiz) => {
  return fetch("api/topics/quiz", {
    method: "POST",
        headers: {
        "Accept": "application/json", 
        "Content-type": "application/json", 
        "authorization": token
        },
        body: JSON.stringify(quiz)
    })
  }

  export const postQuestion = question => {
    return fetch(`${url}/question`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": token },
      body: JSON.stringify(question)
    });
  };
  
  export const getTopics = topic => {
    return fetch(url).then(res => res.json())
      .catch(err => err)
  }




/* 


//Kirjaudutaan sisään



export const checkAuth = (token) => {

  return token;
};

export const logoutUser = () => {
  localStorage.removeItem("tommi");
};

export const checkItem = () => {
  let item = localStorage.getItem("tommi");
  if (item) {
    return true;
  } else {
    return false;
  }
};

export const redirect = () => {};
 */
