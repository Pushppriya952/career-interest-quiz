const quizData = [
    { question: "1. Do you enjoy solving math problems?", type: "science" },
    { question: "2. Do you like coding or technology?", type: "science" },
    { question: "3. Do you enjoy doing experiments?", type: "science" },
    { question: "4. Do you like drawing or designing?", type: "arts" },
    { question: "5. Do you enjoy writing stories or poems?", type: "arts" },
    { question: "6. Do you like acting or performing?", type: "arts" },
    { question: "7. Do you enjoy business or selling ideas?", type: "commerce" },
    { question: "8. Do you like managing money?", type: "commerce" },
    { question: "9. Do you enjoy leadership roles?", type: "commerce" },
    { question: "10. Do you enjoy learning about society and history?", type: "arts" }
];

const quizContainer = document.getElementById("quiz");

quizData.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
        <p>${item.question}</p>
        <label><input type="radio" name="q${index}" value="${item.type}"> Yes</label>
        <label><input type="radio" name="q${index}" value="none"> No</label>
    `;
    quizContainer.appendChild(div);
});

document.getElementById("submitBtn").addEventListener("click", function() {

    let science = 0;
    let arts = 0;
    let commerce = 0;

    quizData.forEach((item, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if(answer && answer.value === "science") science++;
        if(answer && answer.value === "arts") arts++;
        if(answer && answer.value === "commerce") commerce++;
    });

    let resultText = "";

    if(science > arts && science > commerce){
        resultText = "You may consider Science (Engineering, Medical, IT)";
    } else if(arts > science && arts > commerce){
        resultText = "You may consider Arts (Design, Literature, Civil Services)";
    } else if(commerce > science && commerce > arts){
        resultText = "You may consider Commerce (Business, CA, Management)";
    } else {
        resultText = "You have mixed interests. Explore all streams before choosing!";
    }

    document.getElementById("result").innerText = resultText;
});