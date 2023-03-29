const today = document.querySelector("h2#today");

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const week = ["월", "화", "수", "목", "금", "토", "일"];

  today.innerText = `${year}.${month}.${day}(${week[date.getDay() - 1]})`;
};

getCurrentDate();
