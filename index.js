const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");

// Addd new task to the list
function addTask() {
  let taskValue = inputTask.value;
  //! لومعنديش قيمه اظهرالرساله ال تحت
  if (!taskValue) {
    //! طريقه تانيه لنفي الكود مكان علامه التعجب
    // (taskValue === "")
    alert("You must add a value");
    //! else لوعندي قيمة اظهر النتايج دي
  } else {
    //? هنشئ عناصر مكان ال ف ال اتش ت ام ال
    let li = document.createElement("li");
    let span = document.createElement("span");
    //! اي قيمه هتتكتب هتتخزن هنا
    li.innerHTML = taskValue;
    //! هضيف جواها Li
    taskList.appendChild(li);

    span.innerHTML = "&times;";
    li.appendChild(span);
  }
  // الكلام هيتمسح من الانبوت دايركت
  // clear input after adding a new task
  inputTask.value = "";
  setTask();
}

// Add tas when click to Add button
btn.addEventListener("click", addTask);

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setTask();
  }
});

// Add functionlity when click enter it will add a new task
//! دي فنكشن اما ادوس ع الانتر ف الكيبورد يدخل الكلام
inputTask.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

//! بيحفظ الدتا ف اللوكل ستروج
// Save list data to local storage
function setTask() {
  localStorage.setItem("lists", taskList.innerHTML);
}

// Load the saved tasks from local storage
function loadTasks() {
  taskList.innerHTML = localStorage.getItem("lists");
}

loadTasks();
