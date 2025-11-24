  const request = {}; // namespace용 빈 객체
  // 어떤 queryString이 와도 필요한 key의 값을 뽑아내는 함수가 필요
  request.getParameter = function (pKey) {
    // 아예 queryString이 없는 경우 처리 누락
    if(location.href.indexOf("?") == -1) return null; 
    const queryString = location.href.split("?")[1]; // ? 뒤에 있는 것만
    const params = queryString.split("&");
    for (let i = 0; i < params.length; i++) {
      let param = params[i]; // 배열 요소 1개씩
      let pname = param.split("=")[0];
      let pvalue = param.split("=")[1];
      if (pname == pKey) {
        // 매개변수값과 일치한다면
        return decodeURIComponent(pvalue);
      }
    }
    // 끝내 찾지 못했을 때
    return null;
  };

  // 같은 name으로 값이 여러개 넘어 오는 거
  request.getParameterValues = function (pKey) {
    if(!location.href.includes("?")) return null; 
    const queryString = location.href.split("?")[1]; // ? 뒤에 있는 것만
    const params = queryString.split("&");
    let values = []; // 여러개 담아야 하니까, 찾았을 때 마다 담을 빈 배열
    for (let i = 0; i < params.length; i++) {
      let param = params[i]; // 배열 요소 1개씩
      let pname = param.split("=")[0];
      let pvalue = param.split("=")[1];
      if (pname == pKey) {
        // 매개변수값과 일치한다면 추가
        values.push(decodeURIComponent(pvalue));
      }
    }

    if (!values.length) return null; // 못 찾았다면
    return values; // 하나라도 찾았다면
  };