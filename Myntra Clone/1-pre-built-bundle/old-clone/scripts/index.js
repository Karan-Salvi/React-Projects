let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    console.log("I am here");
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `
    <div className="item-container">
      <img className="item-image" src="${item.image}" alt="item image">
      <div className="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div className="company-name">${item.company}</div>
      <div className="item-name">${item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs ${item.current_price}</span>
          <span className="original-price">Rs ${item.original_price}</span>
          <span className="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
}
