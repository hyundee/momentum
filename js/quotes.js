const quotes = [
  {
    quote:
      "저는 제 인생에 주인공이 될 거예요, 사랑을 삶의 목표로 할 필요는 없다는게 제 입장이에요.",
    author: "L.M Montgomery, 빨간머리 앤",
  },
  {
    quote: "만약 네가 오후 4시에 온다면 나는 3시부터 행복해지기 시작할 거야.",
    author: "Saint Exupery, 어린왕자",
  },
  {
    quote: "나는 내가 지치고 실패하길 바라는 사람들을 실망시킬 의무가 있다.",
    author: "작자 미상",
  },
  {
    quote:
      "삶에 잘못 들어선 길이란 없으니, 온 하늘이 새의 길이듯 삶이 온통 사람의 길이니, 그러니 그대 사라지지 말아라.",
    author: "박노해, 잘못 들어선 길은 없다",
  },
  {
    quote:
      "우울한 삶은 과거에 살고, 불안한 사람은 미래에 살고, 평안한 사람은 현재에 산다.",
    author: "노자, 도덕경",
  },
  {
    quote:
      "별을 노래하는 마음으로 모든 죽어가는 것을 사랑해야지, 그리고 나한테 주어진 길을 걸어가야겠다. 오늘 밤에도 별이 바람에 스치운다.",
    author: "윤동주, 서시",
  },
  {
    quote: "You can go anywhere, You can be anything.",
    author: "영화, 씽스트리트 中",
  },
  {
    quote:
      "나는 어제로 돌아갈 수 없어요. 왜냐하면 나는 그때와 다른 사람이기 때문이에요.",
    author: "이상한 나라의 앨리스 中",
  },
  {
    quote: "가끔은 가장 옳은 길이 가장 쉬운 길이 아닐 때도 있지.",
    author: "포카혼타스 中",
  },
  {
    quote: "뭐 다들 성인이니 맘대로 인생을 망치거라.",
    author: "드라마, Political animals 中",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
