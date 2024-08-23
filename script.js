document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");
  const answers = document.querySelectorAll(".faq-answer");

  questions.forEach((item, index) => {
    item.addEventListener("click", () => {
      const isActive = answers[index].classList.contains("showAccordion");

      answers.forEach((answer) => {
        answer.classList.remove("showAccordion");
      });

      if (!isActive) {
        answers[index].classList.add("showAccordion");
      }
    });
  });
});
