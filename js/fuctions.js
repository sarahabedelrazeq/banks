const onChange = (id, event, type) => {
  if (type === "date") {
    const item = document.getElementById(id);
    item.innerHTML = event.value.split("-").reverse().join("/");
  } else {
    if (id === "amount_lbl") {
      const item = document.getElementById(id);
      const item2 = document.getElementById("amount2_lbl");
      const value = event.value.toString().split(".");
      item.innerHTML = `#${value[0]}#`;
      item2.innerHTML = value.length > 1 ? value[1] : "000";
    } else {
      const item = document.getElementById(id);
      item.innerHTML = event.value;
    }
  }
};

