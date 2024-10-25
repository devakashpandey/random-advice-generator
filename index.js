const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();

    const adviceID = document.getElementsByClassName("advice-id")[0];
    adviceID.innerHTML = `ADVICE #${advice.slip.id}`;

    const adviceText = document.getElementsByClassName("advice")[0];
    adviceText.innerHTML = `“${advice.slip.advice}”`;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

getAdvice();
