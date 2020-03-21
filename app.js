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

listData = data => {
  data.forEach(question => {
    let node = document.createElement("div");

    let textnode = document.createElement("div");
    let text = document.createTextNode(question.question);
    textnode.appendChild(text);

    let dateNode = document.createElement("div");
    let date = document.createTextNode(Date(question.date));
    dateNode.appendChild(date);

    node.appendChild(textnode);
    node.appendChild(dateNode);
    document.getElementById("myList").appendChild(node);
  });
};

listData(data);
