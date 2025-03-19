function searchRace() {
  let name = prompt("What is your name?");
  let month = prompt(`Hi, ${name}! What month is it?`);
  month = month.toLowerCase().trim();

  if (month === "january") {
    alert(`There are no F1 races in January😕`);
  } else if (month === "february") {
    alert(
      `There are no F1 races in February, but you can watch the pre-season testing from the 26th to the 28th!`
    );
  } else if (month === "march") {
    alert(
      `There are two races in March:
            🏁The Australian Grand Prix from the 14th to the 16th.
            🏁The Chinese Grand Prix from the 21st to the 23rd.`
    );
  } else if (month === "april") {
    alert(
      `There are three races in April:
            🏁The Japanese Grand Prix from the 4th to the 6th.
            🏁The Bahrain Grand Prix from the 11th to the 13th.
            🏁The Saudi Arabian Grand Prix from the 18th to the 20th.`
    );
  } else if (month === "may") {
    alert(`There are four races in May:
            🏁The Miami Grand Prix from the 2nd to the 4th.
            🏁The Emilia Romagna Grand Prix from the 16th to the 18th.
            🏁The Monaco Grand Prix from the 23rd to the 25th.
            🏁The Spanish Grand Prix from the 30th to the 1st of June`);
  } else if (month === "june") {
    alert(`There are two races in June:
            🏁The Canadian Grand Prix from the 13th to the 15th.
            🏁The Austrian Grand Prix from the 27th to the 29th.`);
  } else if (month === "july") {
    alert(`There are two races in July:
            🏁The British Grand Prix from the 4th to the 6th.
            🏁The Belgian Grand Prix from the 25th to the 27th.`);
  } else if (month === "august") {
    alert(`There are two races in August:
            🏁The Hungarian Grand Prix from the 1st to the 3rd.
            🏁The Dutch Grand Prix from the 26th to the 31st.`);
  } else if (month === "september") {
    alert(`There are two races in September:
            🏁The Italian Grand Prix from the 5th to the 7th.
            🏁The Azerbaijan Grand Prix from the 19th to the 21st.`);
  } else if (month === "october") {
    alert(`There are three races in October:
            🏁The Singapore Grand Prix from the 3rd to the 5th.
            🏁The United States Grand Prix from the 17th to the 19th.
            🏁The México City Grand Prix from the 24th to the 26th.`);
  } else if (month === "november") {
    alert(`There are three races in November:
            🏁The São Paulo Grand Prix from the 7th to the 9th.
            🏁The Las Vegas Grand Prix from the 20th to the 22nd.
            🏁The Qatar  Grand Prix from the 28th to the 30th.`);
  } else if (month === "december") {
    alert(`There is one race in December:
            🏁The Abu Dhabi Grand Prix from the 5th to the 7th.`);
  } else {
    alert("Ups, there was an error in the month. Try again!");
  }
}

let findRaceButton = document.querySelector("button");
findRaceButton.addEventListener("click", searchRace);
