import { quizQuestions } from "../data/quiz-questions.js";
import { academyState } from "../state/academy-state.js";

export function renderQuiz() {
  const question = quizQuestions[academyState.quizIndex];
  academyState.quizAnswered = false;
  $("#quizQuestionNumber").text(`Question ${academyState.quizIndex + 1} of ${quizQuestions.length}`);
  $("#quizScore").text(`Score: ${academyState.quizScore}`);
  $("#quizProgress").css("width", `${((academyState.quizIndex + 1) / quizQuestions.length) * 100}%`);
  $("#quizQuestion").text(question.question);
  $("#quizFeedback").text("").removeClass("text-success text-danger");
  $("#nextQuestionBtn").prop("disabled", true).text(academyState.quizIndex === quizQuestions.length - 1 ? "Finish quiz" : "Next question");
  const optionsContainer = $("#quizOptions").empty();

  question.options.forEach((option, index) => {
    const button = $("<button>", { type: "button", class: "quiz-option", text: option });
    button.on("click", function () {
      if (academyState.quizAnswered) return;
      academyState.quizAnswered = true;
      const correct = index === question.answer;
      if (correct) academyState.quizScore++;
      $("#quizOptions button").each(function (optionIndex) {
        if (optionIndex === question.answer) $(this).addClass("correct");
        else if (optionIndex === index) $(this).addClass("incorrect");
        $(this).prop("disabled", true);
      });
      $("#quizScore").text(`Score: ${academyState.quizScore}`);
      $("#quizFeedback").text((correct ? "Correct! " : "Not quite. ") + question.explanation)
        .addClass(correct ? "text-success" : "text-danger");
      $("#nextQuestionBtn").prop("disabled", false);
    });
    optionsContainer.append(button);
  });
}
