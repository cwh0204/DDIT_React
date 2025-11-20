// 어떤 queryString이 와도 필요한 key의 값을 뽑아내는 함수가 필요

  const request = {}; //namespace용 빈 객체

  //어떤 queryString이 와도 필요한 key의 값을 뽑아내는 함수가 필요
  request.getParameter = function (pKey) {
    const queryString = location.href.split("?")[1]; // ? 뒤에 있는 것만
    const params = queryString.split("&");
    for (let i = 0; i < params.length; i++) {
      let param = params[i]; // 배열 요소 1개씩
      let pname = param.split("=")[0];
      let pvalue = param.split("=")[1];
      if (pname == pKey) {
        //매개변수 값과 일치한다면
        return decodeURIComponent(pvalue);
      }
    }
    //끝내 찾지 못했을 때
    return null;
  };
  // 같은 name으로 값이 여러개 넘어오는 경우
  request.getParameterValues = function (pKey) {
    const queryString = location.href.split("?")[1]; // ? 뒤에 있는 것만
    const params = queryString.split("&");
    let values = []; //여러개 담아야 하니까, 찾았을 때 마다 담을 빈 배열
    for (let i = 0; i < params.length; i++) {
      let param = params[i]; // 배열 요소 1개씩
      let pname = param.split("=")[0];
      let pvalue = param.split("=")[1];
      if (pname == pKey) {
        //매개변수 값과 일치한다면 추가
        values.push(decodeURIComponent(pvalue));
      }
    }
    //끝내 찾지 못했을 때
    if (!values.length) return null;

    return values;
  };