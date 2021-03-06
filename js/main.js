const setupMenuPage = () => {
  const menuSections = ["breakfast", "lunch", "dinner", "drinks"];

  menuSections.map(section => {
    const rows = getMenuSectionRows(section);

    const tabContent = document.getElementById(`pills-${section}`);

    (rows || []).forEach(row => {
      tabContent.appendChild(row);
    });
  });
};

const getMenuSectionRows = section => {
  const evenNumItems = menu[section].length % 2 === 0;
  const numOfRows = evenNumItems
    ? Math.floor(menu[section].length / 2)
    : Math.floor(menu[section].length / 2) + 1;

  let rows = [];

  for (let i = 0; i < numOfRows; i++) {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("class", "row justify-content-between menu-row");
    rows[i] = rowElement;
  }

  (menu[section] || []).map((item, i) => {
    const itemIndexEven = i % 2 === 0;
    const rowIndex = itemIndexEven ? i / 2 : (i - 1) / 2;
    rows[rowIndex].innerHTML += getMenuItemTemplate(item);
  });

  return rows;
};

const getMenuItemTemplate = ({ name, price, image, description }) => {
  return `
    <div class="col-5">
        <div class="row">
        <div class="col-3">
            <div class="circle">
            <img
                class="img-fluid"
                src="${image}"
                alt="${name}"
            />
            </div>
        </div>
        <div class="col-9">
            <h3>${name}</h3>
            <p>${description}</p>
            <p><strong>$${price}</strong></p>
        </div>
        </div>
    </div>
    `;
};

const menuPage = document.getElementById("main-menu");

if (menuPage) setupMenuPage();
