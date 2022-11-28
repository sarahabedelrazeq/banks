const countries = await fetch("../data/countries.json").then((response) => {
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return response.json();
});

const backs = await fetch("../data/backs.json").then((response) => {
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return response.json();
});

const items = [
  "date_lbl",
  "payee_lbl",
  "amount_lbl",
  "tafk_lbl",
  "for_lbl",
  "crossing_lbl",
  "amount2_lbl",
  "place_lbl",
  "cur_lbl",
  "acc_num_lbl",
  "sign_name_lbl",
  "seb_date_lbl",
  "Due_date_lbl",
];



const main = async () => {
  const overview = document.getElementById("overview");
  let selectedBank, component;

  if (countries.length > 0) {
    const country = countries[0];
    const countryBanks = backs.filter((bank) => bank.country_id === country.id);
    if (countryBanks.length > 0) {
      selectedBank = countryBanks[0];
    }
  }

  if (selectedBank) {
    overview.innerHTML += `<img src=${selectedBank.image} id="cheque_img" alt="Cheque img" draggable="false" >`;

    items.forEach((item) => {
      if(selectedBank[item]?.style){
        for (const key in selectedBank[item]?.style) {
          document.getElementById(item).style[key] = selectedBank[item]?.style[key];

        }

      }
    });
  }
};

main();
