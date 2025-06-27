
fetch("survey.json")
  .then(response => response.json())
  .then(surveyJSON => {
    const survey = new Survey.Model(surveyJSON);
    survey.onComplete.add(result => {
      fetch('https://yourdomain.com/api/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(result.data)
      });
      document.querySelector("#surveyContainer").innerHTML = "<h3>Thank you for participating!</h3>";
    });
    Survey.StylesManager.applyTheme("modern");
    ReactDOM.render(<SurveyReact.Survey model={survey} />, document.getElementById("surveyContainer"));
  });
