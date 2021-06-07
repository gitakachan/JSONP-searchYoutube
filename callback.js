let resultList = document.querySelector("#resultList");

//自訂callback (記得要和url裡的callback一樣名稱)
function cb(data) {
  resultList.style.display = "block";
  resultList.innerHTML = ""; //每次都先清空
  let length = data[1].length;
  for (let i = 0; i < length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = data[1][i][0];
    //範例：https://www.youtube.com/results?search_query=run
    a.href = `https://www.youtube.com/results?search_query=${data[1][i][0]}`;
    a.target = "_blank";
    li.appendChild(a);
    resultList.appendChild(li);
  }
}

