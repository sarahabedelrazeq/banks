const onChange = (id, event, type) => {
  if (type === "date") {
    const item = document.getElementById(id);
    item.innerHTML = `<p>${event.value.split("-").reverse().join("/")}</p>`;
  } else {
    if (id === "amount_lbl") {
      const item = document.getElementById(id);
      const item2 = document.getElementById("amount2_lbl");
      const value = event.value.toString().split(".");
      item.innerHTML = `<p>#${value[0]}#</p>`;
      item2.innerHTML = `<p>${value.length > 1 ? value[1] : "000"}</p>`;
    } else {
      const item = document.getElementById(id);
      item.innerHTML = `<p>${event.value}</p>`;
    }
  }
};

const allowDrop = (event) => {
  event.preventDefault();
  var rect = event.target.getBoundingClientRect();
  var data = event.dataTransfer.getData("text");
  var left = event.dataTransfer.getData("left");
  var top = event.dataTransfer.getData("top");
  var element = document.getElementById(data);
  console.log("first", event.dataTransfer.getData("left"));
};

function drag(event) {
  event.target.style.backgroundColor = "#0002";
  event.target.style.opacity = 1;
  event.dataTransfer.setData("text", event.target.id);
  crossing_lbl;
  event.dataTransfer.setData(
    "top",
    Number(event.y) -
      Number(event.target.style.top.slice(0, event.target.style.top.length - 2))
  );
  event.dataTransfer.setData(
    "left",
    Number(event.x) -
      Number(
        event.target.style.left.slice(0, event.target.style.left.length - 2)
      )
  );
}

function drop(event) {
  event.preventDefault();
  var rect = event.target.getBoundingClientRect();
  var data = event.dataTransfer.getData("text");
  var left = event.dataTransfer.getData("left");
  var top = event.dataTransfer.getData("top");
  var element = document.getElementById(data);
  element.style.backgroundColor = "#0000";

  var setTop = event.y - rect.top - (top - rect.top);
  if (setTop > 0 && setTop < event.target.offsetHeight)
    element.style.top = `${setTop}px`;

  var setLeft = event.x - rect.left - (left - rect.left);
  if (setLeft > 0 && setLeft < event.target.offsetWidth)
    element.style.left = `${setLeft}px`;

    console.log("first", event.dataTransfer.getData("left"));

}
