const data = [
  {
    question: "Can you answer these questions?",
    answer: "I'm sure you can! Good luck",
    created_at: 1541944069,
    rate_stars: 0
  },
  {
    question: "In CSS what is the difference between margin and padding",
    answer: "",
    created_at: 1541944069,
    rate_stars: 0
  },
  {
    question: "What responsive web design means? ",
    answer: "",
    created_at: 1541944069,
    rate_stars: 2
  },
  {
    question: "What is JSON? ",
    answer: "",
    created_at: 1541944069,
    rate_stars: 1
  },
  {
    question: "What is event binding?  ",
    answer: "",
    created_at: 1541944069,
    rate_stars: 5
  },
  {
    question: "What is a Promise? ",
    answer: "",
    created_at: 1541944069,
    rate_stars: 2
  },
  {
    question:
      "What does non-blocking I/O means and why is that matter in User Interfaces? ",
    answer: "",
    created_at: 1541944069,
    rate_stars: 0
  },
  {
    question: "What is Babel and why you should know about it? ",
    answer: "",
    created_at: 1541944069,
    rate_stars: 2
  },
  {
    question: "What is webpack? ",
    answer: "",
    created_at: 1541944069,
    rate_stars: 0
  },
  {
    question:
      "How can you cut a round cheese three times to make eight equal slices?",
    answer: "",
    created_at: 1541944069,
    rate_stars: 2
  },
  {
    question: "Which framework is the best?",
    answer: "",
    created_at: 1541944069,
    rate_stars: 0
  }
];

const newData = data.map((question, index) => {
  return { ...question, id: index };
});

getData = () => {
  const existingData = JSON.parse(localStorage.getItem("data"));
  if (!existingData) {
    localStorage.setItem("data", JSON.stringify(newData));
  }
  listData();
};

closeQuestion = () => {
  const selected = document.getElementById("selected");
  selected.removeChild(selected.childNodes[0]);
};

showQuestion = question => {
  const selected = document.getElementById("selected");
  if (selected.hasChildNodes()) {
    selected.removeChild(selected.childNodes[0]);
  }

  let node = document.createElement("div");
  node.className = "question-item";

  let textnode = document.createElement("div");
  let text = document.createTextNode(question.question);
  textnode.appendChild(text);
  textnode.className = "question";

  let answerNode = document.createElement("div");
  let answer = document.createTextNode(
    question.answer ? question.answer : "Wrire your own"
  );
  answerNode.appendChild(answer);
  answerNode.className = "answer";

  let dateNode = document.createElement("div");
  let date = document.createTextNode(Date(question.date));
  dateNode.appendChild(date);
  dateNode.className = "date";

  let buttonNode = document.createElement("button");
  let button = document.createTextNode("Close");
  buttonNode.appendChild(button);
  buttonNode.onclick = closeQuestion;

  node.appendChild(buttonNode);
  node.appendChild(textnode);
  node.appendChild(dateNode);
  node.appendChild(answerNode);
  document.getElementById("selected").appendChild(node);
};

listData = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  data.forEach(question => {
    let node = document.createElement("div");

    node.className = "question-item";
    node.onclick = () => showQuestion(question);

    let textnode = document.createElement("div");
    let text = document.createTextNode(question.question);
    textnode.appendChild(text);
    textnode.className = "question";

    let dateNode = document.createElement("div");
    let date = document.createTextNode(Date(question.date));
    dateNode.appendChild(date);
    dateNode.className = "date";

    node.appendChild(textnode);
    node.appendChild(dateNode);

    document.getElementById("my-list").appendChild(node);
  });
};

addQuestion = () => {
  const existingData = JSON.parse(localStorage.getItem("data"));

  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;

  console.log(question, answer);

  const newQuestion = {
    question: question,
    answer: answer,
    created_at: 1541944069,
    rate_stars: 0
  };

  existingData.push(newQuestion);

  localStorage.setItem("data", JSON.stringify(existingData));

  const myList = document.getElementById("my-list");
  myList.textContent = "";
  listData();
};

removeLocalStorage = () => {
  localStorage.removeItem("data");
  listData();
};

newQustion = () => {
  const selected = document.getElementById("selected");
  if (selected.hasChildNodes()) {
    selected.removeChild(selected.childNodes[0]);
  }
  let node = document.createElement("div");

  let input1 = document.createElement("input");
  input1.id = "question";
  let label1 = document.createElement("label");
  let labelText1 = document.createTextNode("Question");
  label1.appendChild(labelText1);

  let input2 = document.createElement("input");
  input2.id = "answer";
  let label2 = document.createElement("label");
  let labelText2 = document.createTextNode("Answer");
  label2.appendChild(labelText2);

  let button = document.createElement("button");
  let buttonText = document.createTextNode("add");
  button.appendChild(buttonText);
  button.onclick = addQuestion;

  node.appendChild(label1);
  node.appendChild(input1);
  node.appendChild(label2);
  node.appendChild(input2);
  node.appendChild(button);

  document.getElementById("selected").appendChild(node);
};

getData();
