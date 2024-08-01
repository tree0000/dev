// document.addEventListener("DOM", function () {
//   const form = document.forms["text"];
//   form.addEventListener("change", function () {
//     const selectedSubject = form.querySelector('input[name="subject"]:checked');
//     if (selectedSubject) {
//       alert(`선택: ${selectedSubject.value}`);
//     }
//     const selectedrise = form.querySelector('input[name="subject"]:checked');
//     if (selectedrise) {
//       alert(`선택: ${selectedrise.value}`);
//     }
//   });
// });
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  const userName = document.getElementById("userName").value;
  const majorSelect = document.getElementById("major");
  const selectedMajor = majorSelect.value || "선택x";
  const selectedSubject = document.querySelector(
    'input[name="subject]:checked'
  );
  const selectValue = selectedSubject ? selectedSubject.value : "선택x";
  const selectedrise = document.querySelector('input[name="rise]:checked');
  const studyValue = selectedStudy ? selectedStudy.value : "선택x";

  document.getElementById(
    "result"
  ).innerHTML = `${username}${selectedMajor}${selectValue}${studyValue}`;
});
