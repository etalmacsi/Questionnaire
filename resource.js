let url =
  "https://slvbudpeterm.blob.core.windows.net/recruitment/questions.json";

const try1 = () => {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "jsonp",
    cors: false,
    contentType: "application/json",
    secure: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    success: function(result, status, xhr) {
      console.log(result, status, xhr);
    },
    error: function(data) {
      console.log(data);
    }
  });
};

const try2 = () => {
  fetch(url, { mode: "no-cors" }).then(response => console.log(response));
};

try1();
try2();
