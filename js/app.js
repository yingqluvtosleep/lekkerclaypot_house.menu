/* Lekker Claypot House – digital menu. Static, no dependencies. */
/* ===== Categories & dishes ===== */
const categories = [
  { id: "signature",  label: "Signature 招牌" },
  { id: "claypot",    label: "Claypot 瓦煲" },
  { id: "curry",      label: "Curry 咖喱" },
  { id: "side",      label: "Side 配菜" },
  { id: "vegetables", label: "Vegetables 蔬菜" },
  { id: "egg", label: "Egg 蛋" },
  { id: "other", label: "Other 其他" },
];
const menuItems = [
  { id: 1, category: "signature", name: "Claypot Chicken Rice 瓦煲鸡饭", description: "Aromatic Claypot Rice With Juicy Chicken 香气四溢的瓦煲饭，搭配鲜嫩多汁的鸡肉", price: "RM XX", image: "assets/images/claypot-chicken-rice.jpg", featured: true },
  { id: 2, category: "signature", name: "Curry Fish Head 咖喱鱼头", description: "Tender Fish Head Bathed In Rich, Fragrant Curry 鲜嫩鱼头浸润在香浓浓郁的咖喱中", price: "RM XX", image: "assets/images/curry-fish-head.jpg", featured: true },
  { id: 3, category: "claypot", name: "Claypot Chicken Rice 瓦煲鸡饭", description: "Freshly Cooked Claypot Rice With Savoury Chicken 香喷喷的现煮瓦煲饭，融合鸡肉的鲜美滋味", price: "RM XX", image: "assets/images/claypot-chicken-rice.jpg", featured: false },
  { id: 4, category: "curry", name: "Curry Fish Head 咖喱鱼头", description: "A Rich, Spicy Curry With Tender, Flavourful Fish Head 香浓微辣的咖喱，配上鲜嫩入味的鱼头", price: "RM XX", image: "assets/images/curry-fish-head.jpg", featured: false },
  { id: 5, category: "curry", name: "Curry Fish Meat 咖喱鱼肉", description: "Delicate Fish Meat Simmered In Fragrant Curry 鲜嫩鱼肉慢煮于香气扑鼻的咖喱中", price: "RM XX", image: "assets/images/curry-fish-meat.jpg", featured: false },
  { id: 6, category: "curry", name: "Curry Fish Meat & Head 咖喱鱼头 & 鱼肉", description: "The Best Of Both Worlds, With Fish Head And Fish Meat In Rich Curry 鱼头与鱼肉双重美味，搭配香浓醇厚的咖喱", price: "RM XX", image: "assets/images/curry-fish-head-meat.jpg", featured: false },
  { id: 7, category: "curry", name: "Curry Prawn 咖喱虾", description: "Juicy Prawns Coated In A Rich, Aromatic Curry 鲜甜多汁的虾，裹上香浓诱人的咖喱", price: "RM XX", image: "assets/images/curry-prawn.jpg", featured: false },
  { id: 8, category: "curry", name: "Curry Sotong 咖喱苏东", description: "Tender Sotong Infused With Bold, Fragrant Curry Flavours 弹嫩苏东吸收浓郁咖喱精华，香气十足", price: "RM XX", image: "assets/images/curry-sotong.jpg", featured: false },
  { id: 9, category: "curry", name: "Curry Prawn & Sotong 咖喱虾 & 苏东", description: "A Seafood Duo Of Juicy Prawns And Tender Sotong In Rich Curry 鲜甜多汁的虾与弹嫩苏东相遇，融入香浓咖喱的美味组合", price: "RM XX", image: "assets/images/curry-prawn-sotong.jpg", featured: true },
  { id: 10, category: "side", name: "Mushroom Chicken Feet 香菇鸡脚", description: "Tender Chicken Feet Braised With Savoury Mushrooms 香菇焖煮鸡脚，香浓入味", price: "RM XX", image: "assets/images/mushroom-chicken-feet.jpg", featured: true },
  { id: 11, category: "side", name: "Pork Vinegar Trotter 猪脚醋", description: "Tender Pork Trotter Simmered In Rich, Tangy Vinegar 酸香浓郁的猪脚醋，猪脚软嫩入味", price: "RM XX", image: "assets/images/pork-vinegar-trotter.jpg", featured: true },
  { id: 12, category: "vegetables", name: "Iceberg Lettuce 生菜", description: "Fresh And Crisp Iceberg Lettuce 清爽脆嫩的生菜", price: "RM XX", image: "assets/images/iceberg-lettuce.jpg", featured: false },
  { id: 13, category: "vegetables", name: "Chinese Cabbage 小白菜", description: "Fresh Chinese Cabbage With A Naturally Sweet Taste 清新爽口的小白菜，带有自然清甜", price: "RM XX", image: "assets/images/chinese-cabbage.jpg", featured: false },
  { id: 14, category: "vegetables", name: "Kailan 芥兰", description: "Crunchy Kailan With A Fresh, Earthy Flavour 清脆爽口的芥兰，滋味鲜美", price: "RM XX", image: "assets/images/kailan.jpg", featured: false },
  { id: 15, category: "vegetables", name: "Beansprouts (Taugeh) 豆芽", description: "Light And Crunchy Beansprouts 清爽脆嫩的豆芽", price: "RM XX", image: "assets/images/beansprouts.jpg", featured: false },
  { id: 16, category: "egg", name: "Plain Fried Egg (Kosong) 煎蛋", description: "A Simple Fried Egg With Golden Edges 香煎鸡蛋，蛋香十足", price: "RM XX", image: "assets/images/plain-fried-egg.jpg", featured: false },
  { id: 17, category: "egg", name: "Fried Egg With Onion 洋葱蛋", description: "Fluffy Fried Egg With Sweet, Fragrant Onion 香嫩煎蛋搭配清甜洋葱", price: "RM XX", image: "assets/images/fried-egg-onion.jpg", featured: false },
  { id: 18, category: "egg", name: "Fried Egg With Chinese Sausage 腊肠蛋", description: "Savoury Fried Egg With Fragrant Chinese Sausage 香煎鸡蛋搭配咸香腊肠", price: "RM XX", image: "assets/images/fried-egg-chinese-sausage.jpg", featured: false },
  { id: 19, category: "egg", name: "Egg Foo Yong 芙蓉蛋", description: "Golden Egg Foo Yong With A Soft, Fluffy Centre 金黄香煎芙蓉蛋，口感松软", price: "RM XX", image: "assets/images/egg-foo-yong.jpg", featured: false },
  { id: 20, category: "other", name: "Sesame Oil Chicken 麻油鸡", description: "Tender Chicken Infused With Fragrant Sesame Oil 香浓麻油焖鸡，鸡肉鲜嫩入味", price: "RM XX", image: "assets/images/sesame-oil-chicken.jpg", featured: false },
  { id: 21, category: "other", name: "Chicken Rendang 仁当鸡", description: "Tender Chicken Cooked In Rich, Aromatic Rendang Spices 鸡肉融合浓郁仁当香料，香辣惹味", price: "RM XX", image: "assets/images/chicken-rendang.jpg", featured: false },
  { id: 22, category: "other", name: "Fried Chicken 炸鸡", description: "Crispy Golden Fried Chicken With Juicy Meat 外皮金黄酥脆，鸡肉鲜嫩多汁", price: "RM XX", image: "assets/images/fried-chicken.jpg", featured: false },
  { id: 23, category: "other", name: "Fried Tofu With Thai Sauce 三味豆腐", description: "Golden Fried Tofu Drizzled With Tangy Thai Sauce 外酥内嫩的炸豆腐，搭配酸甜泰式酱汁", price: "RM XX", image: "assets/images/fried-tofu-thai-sauce.jpg", featured: true },
  { id: 24, category: "other", name: "Fried Sotong 炸苏东", description: "Crispy Fried Sotong With A Tender Bite 外酥内嫩的炸苏东，鲜香可口", price: "RM XX", image: "assets/images/fried-sotong.jpg", featured: false },
  { id: 25, category: "other", name: "Assam Prawn 亚三哥虾", description: "Juicy Prawns Tossed In A Tangy, Fragrant Assam Sauce 鲜甜多汁的虾，搭配酸香开胃的亚三酱汁", price: "RM XX", image: "assets/images/assam-prawn.jpg", featured: false },
  { id: 26, category: "other", name: "Kam Heong Prawn 甘香虾", description: "Juicy Prawns Stir-Fried With Aromatic Kam Heong Spices 鲜虾与甘香香料热炒，香气浓郁惹味", price: "RM XX", image: "assets/images/kam-heong-prawn.jpg", featured: false },
];
/* ===== Menu prices ===== */
const priceById = {
  // Claypot rice / 煲仔饭
  1: "Small／小份 RM9.00\nMedium／中份 RM16.00\nLarge／大份 RM24.00\nAdd-ons charged separately／配料另收费",
  3: "Small／小份 RM9.00\nMedium／中份 RM16.00\nLarge／大份 RM24.00\nAdd-ons charged separately／配料另收费",
  // Curry fish head / 咖喱鱼头
  2: "2 persons／2人份 RM32.00\n3 persons／3人份 RM48.00\n4 persons／4人份 RM62.00\n5 persons／5人份 RM75.00\n6 persons／6人份 RM90.00\n7 persons／7人份 RM105.00\n8 persons／8人份 RM120.00",
  4: "2 persons／2人份 RM32.00\n3 persons／3人份 RM48.00\n4 persons／4人份 RM62.00\n5 persons／5人份 RM75.00\n6 persons／6人份 RM90.00\n7 persons／7人份 RM105.00\n8 persons／8人份 RM120.00",
  // Curry fish meat / 咖喱鱼肉
  5: "2 persons／2人份 RM35.00\n3 persons／3人份 RM52.00\n4 persons／4人份 RM68.00\n5 persons／5人份 RM84.00\n6 persons／6人份 RM100.00\n7 persons／7人份 RM116.00\n8 persons／8人份 RM132.00",
  // Curry prawns / 咖喱虾
  7: "Per serving／每份 RM40.00++\nEach extra large prawn／每只额外大虾 RM5.00",
  // Curry sotong / 咖喱苏东（鱿鱼）
  8: "Small／小份 RM30.00\nMedium／中份 RM45.00\nLarge／大份 RM60.00",
  // Side dishes / 配菜
  10: "Small／小份 RM6.00\nLarge／大份 RM12.00",
  11: "Small／小份 RM12.00\nLarge／大份 RM22.00",
  // Vegetables / 蔬菜
  12: "Small／小份 RM8.00\nLarge／大份 RM14.00",
  13: "Small／小份 RM8.00\nLarge／大份 RM14.00",
  14: "Small／小份 RM8.00\nLarge／大份 RM14.00",
  15: "Small／小份 RM8.00\nLarge／大份 RM14.00",
  // Eggs / 蛋类
  16: "Small／小份 RM3.00\nLarge／大份 RM5.00",
  17: "Small／小份 RM4.00\nLarge／大份 RM6.00",
  18: "Small／小份 RM5.00\nLarge／大份 RM8.00",
  19: "Per serving／每份 RM10.00",
  // Other dishes / 其他菜肴
  20: "Per serving／每份 RM15.00",
  21: "Per serving／每份 RM15.00",
  22: "Per serving／每份 RM15.00",
  23: "Small／小份 RM6.00\nLarge／大份 RM12.00",
  24: "Per serving／每份 RM15.00",
  25: "Per serving／每份 RM40.00++\nEach extra large prawn／每只额外大虾 RM5.00",
  26: "Per serving／每份 RM40.00++\nEach extra large prawn／每只额外大虾 RM5.00"
};
// Apply prices to the existing menu items.
// Items without confirmed prices will display no price.
menuItems.forEach((item) => {
  item.price = priceById[item.id] || "";
});
/* ===== Settings ===== */
const IDLE_MS = 30000;
const SLIDE_MS = 6000;
const FADE_MS = 1200;
const SWIPE_MIN = 25;
const FLIP_MS = 650;
const RESET_MS = 120000;
const WAKE_GUARD_MS = 500;
/* FIX: easier hold-and-drag flip */
const DRAG_START_PX = 6;      // movement before the page starts to lift
const DRAG_FULL_RATIO = 0.6;  // finger travel (x page width) for a full 180deg turn
const COMMIT_PX = 40;         // small drag distance that is enough to turn the page
const COMMIT_PROGRESS = 0.12; // or 12% of the turn
const FLICK_SPEED = 0.3;      // px per ms – quick flick always turns the page
/* FIX: smooth fade-out of the turned page */
const DRAG_FINISH_MS = 420;   // time for the page to finish turning after release
const LEAF_FADE_MS = 300;     // fade-out duration of the turned page
const LEAF_FADE_START = 0.55; // drag progress where the page starts to fade
document.documentElement.style.setProperty("--flip", `${FLIP_MS}ms`);
/* ===== State ===== */
let currentCategory = categories[0].id;
let currentList = [];
let index = 0;
let busy = false;
let opening = false;
let slideshowActive = false;
let slideIndex = 0;
let lastWake = 0;
let touchX = 0;
let touchY = 0;
let touchStartTime = 0;
let touchStarted = false;
let multiTouch = false;
let suppressDishClickUntil = 0;
/* --- Interactive page flip: drag state --- */
let dragLeaf = null;
let dragDirection = null;
let dragProgress = 0;
let dragWidth = 0;
let dragMoved = false;
let dragStartIndex = 0;
let lastMoveX = 0;      // FIX: track finger speed for flick detection
let lastMoveTime = 0;
let flickVelocity = 0;
let dragTargetIndex = 0; // FIX: dish shown underneath while dragging
let idleTimer = null;
let resetTimer = null;
let slideTimer = null;
let swapTimer = null;
let flipTimer = null;
let queuedTransitions = [];
const $ = (id) => document.getElementById(id);
const el = {
  intro: $("intro"),
  menu: $("menu"),
  idle: $("idle"),
  cats: $("cats"),
  book: $("book"),
  dish: $("dish"),
  photo: $("dishPhoto"),
  cat: $("dishCat"),
  name: $("dishName"),
  desc: $("dishDesc"),
  price: $("dishPrice"),
  count: $("count"),
  idlePhoto: $("idlePhoto"),
  idleName: $("idleName"),
  idleDesc: $("idleDesc"),
};
const pad = (n) => String(n).padStart(2, "0");
const featured = () => menuItems.filter((m) => m.featured);
/* ===== Image preload (FIX: avoid blank/lag when a page is revealed) ===== */
const imageCache = [];
function preloadImages() {
  const seen = new Set();
  menuItems.forEach((item) => {
    if (!item.image || seen.has(item.image)) return;
    seen.add(item.image);
    const img = new Image();
    img.src = item.image;
    if (img.decode) {
      img.decode().catch(() => {});
    }
    imageCache.push(img); // keep reference so the browser keeps it cached
  });
}
/* ===== Rendering ===== */
function setPhoto(container, item) {
  // FIX: same photo already shown – do not recreate the <img> (prevents flicker)
  const existing = container.querySelector("img");
  if (existing && existing.dataset.src === item.image) {
    existing.alt = item.name;
    container.dataset.initial = item.name.charAt(0);
    return;
  }
  container.classList.remove("noimg");
  container.dataset.initial = item.name.charAt(0);
  const img = new Image();
  img.alt = item.name;
  img.decoding = "async";
  img.dataset.src = item.image;
  img.onerror = () => {
    img.remove();
    container.classList.add("noimg");
  };
  img.src = item.image;
  container.replaceChildren(img);
}
function renderCategories() {
  el.cats.replaceChildren(
    ...categories.map((c) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className =
        "cat" + (c.id === currentCategory ? " active" : "");
      button.textContent = c.label;
      button.addEventListener("click", () => {
        selectCategory(c.id);
      });
      return button;
    })
  );
}
/* --- FIX: render dish content only (photo, text, price) on the main page --- */
function renderDish(item) {
  if (!item) return;
  const cat = categories.find((c) => c.id === item.category);
  setPhoto(el.photo, item);
  el.cat.textContent = cat ? cat.label : "";
  el.name.textContent = item.name;
  el.desc.textContent = item.description;
  el.price.innerHTML = renderPriceList(item.price);
}
/* --- FIX: render page counter and arrow state only --- */
function renderCounter() {
  el.count.textContent =
    `${pad(index + 1)} / ${pad(currentList.length)}`;
  // Update navigation buttons at the start and end of the category.
  $("prevBtn").disabled = index <= 0;
  $("nextBtn").disabled = index >= currentList.length - 1;
}
function renderMenuItem() {
  const item = currentList[index];
  if (!item) return;
  renderDish(item);
  renderCounter();
}
/* --- Dish pricing: render aligned price rows --- */
function renderPriceList(priceText) {
    var lines = String(priceText || "")
        .split(/\r?\n/)
        .map(function (line) {
            return line.trim();
        })
        .filter(function (line) {
            return line.length > 0;
        });
    if (lines.length === 0) {
        return "";
    }
    var html = '<div class="price-heading">' +
        '<span>PRICE</span>' +
        '<span>MYR</span>' +
        '</div>' +
        '<div class="price-rows">';
    lines.forEach(function (line) {
        var match = line.match(/^(.*?)\s+(RM\s*[\d,.]+\+{0,2})$/i);
        if (match) {
            html +=
                '<div class="price-row">' +
                    '<span class="price-serving">' +
                        escapePriceText(match[1]) +
                    '</span>' +
                    '<span class="price-amount">' +
                        escapePriceText(match[2].replace(/\s+/g, " ")) +
                    '</span>' +
                '</div>';
        } else {
            html +=
                '<div class="price-row price-single">' +
                    escapePriceText(line) +
                '</div>';
        }
    });
    html += '</div>';
    return html;
}
/* --- Dish pricing: escape text safely --- */
function escapePriceText(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
/* --- Page flip: create a two-sided turning page --- */
function makeLeaf(dir, baseIndex = index) {
    const leaf = el.dish.cloneNode(true);
    leaf.querySelectorAll("[id]").forEach(function (node) {
        node.removeAttribute("id");
    });
    leaf.removeAttribute("id");
    leaf.removeAttribute("aria-live");
    leaf.setAttribute("aria-hidden", "true");
    leaf.classList.remove("reveal", "category-exit", "category-enter");
    leaf.classList.add("leaf", dir, "page-curl");
    // Create the front face using the current dish.
    const front = document.createElement("div");
    front.className = "leaf-face leaf-front";
    while (leaf.firstChild) {
        front.appendChild(leaf.firstChild);
    }
    leaf.appendChild(front);
    // Create the reverse face.
    const back = front.cloneNode(true);
    back.classList.remove("leaf-front");
    back.classList.add("leaf-back");
    const adjacentIndex =
        baseIndex + (dir === "next" ? 1 : -1);
    const adjacentItem = currentList[adjacentIndex];
    // Show the adjacent dish on the reverse face.
    if (adjacentItem) {
        const adjacentCat = categories.find(function (cat) {
            return cat.id === adjacentItem.category;
        });
        const backPhoto = back.querySelector(".dish-photo");
        const backCat = back.querySelector(".dish-cat");
        const backName = back.querySelector(".dish-name");
        const backDesc = back.querySelector(".dish-desc");
        const backPrice = back.querySelector(".dish-price");
        if (backPhoto) {
            setPhoto(backPhoto, adjacentItem);
        }
        if (backCat) {
            backCat.textContent = adjacentCat
                ? adjacentCat.label
                : "";
        }
        if (backName) {
            backName.textContent = adjacentItem.name;
        }
        if (backDesc) {
            backDesc.textContent = adjacentItem.description;
        }
        if (backPrice) {
            backPrice.innerHTML =
                renderPriceList(adjacentItem.price);
        }
    }
    leaf.appendChild(back);
    // Stop the front photo animation while the page rotates.
    const frontImg = front.querySelector(".dish-photo img");
    if (frontImg) {
        frontImg.style.animation = "none";
        frontImg.style.willChange = "transform";
    }
    // FIX: let the leaf fade smoothly instead of vanishing
    leaf.style.willChange = "transform, opacity";
    return leaf;
}
/* --- FIX: fade a leaf out smoothly, then remove it --- */
function fadeOutLeaf(leaf, duration, delay, done) {
    if (leaf.animate) {
        // Web Animations override the CSS keyframes, so the fade
        // works for both the drag flip and the button flip.
        const anim = leaf.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            {
                duration: duration,
                delay: delay,
                easing: "ease-out",
                fill: "forwards",
            }
        );
        anim.onfinish = function () {
            leaf.remove();
            if (done) done();
        };
        return anim;
    }
    // Fallback for very old browsers.
    setTimeout(function () {
        leaf.remove();
        if (done) done();
    }, duration + delay);
    return null;
}
/* --- Interactive page flip: start dragging --- */
function startDragFlip(dx) {
  if (busy || currentList.length < 2) return;
  if (dx < 0 && index >= currentList.length - 1) return;
  if (dx > 0 && index <= 0) return;
  dragDirection = dx < 0 ? "next" : "prev";
  dragStartIndex = index;
  dragTargetIndex = dragStartIndex + (dragDirection === "next" ? 1 : -1);
  // Create the turning page with the current dish on the front
  // and the adjacent dish on the back.
  // NOTE: must be created BEFORE renderDish() below, because makeLeaf()
  // clones #dish to build the front face.
  dragLeaf = makeLeaf(dragDirection, dragStartIndex);
  dragLeaf.style.transition = "none";
  dragLeaf.style.transform =
    "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)";
  dragLeaf.style.setProperty("--curl-opacity", "0");
  el.book.appendChild(dragLeaf);
  // FIX: the page underneath must show the DESTINATION dish while dragging.
  // Previously #dish still showed the current dish, so the area revealed
  // by the turning page was the same content (duplicate page).
  // Leaf is already covering #dish in the same frame, so no flicker.
  renderDish(currentList[dragTargetIndex]);
  // FIX: page follows the finger faster (full turn at 60% of width)
  dragWidth = Math.max(
    el.dish.getBoundingClientRect().width * DRAG_FULL_RATIO,
    1
  );
  dragProgress = 0;
  dragMoved = true;
  busy = true;
}
/* --- Interactive page flip: follow the finger --- */
let dragFramePending = false;
let pendingDragDx = 0;
function updateDragFlip(dx) {
    pendingDragDx = dx;
    if (dragFramePending) return;
    dragFramePending = true;
    requestAnimationFrame(function () {
        dragFramePending = false;
        if (dragLeaf) {
            updateDragFlipNow(pendingDragDx);
        }
    });
}
function updateDragFlipNow(dx) {
  if (!dragLeaf) return;
  const distance = dragDirection === "next" ? -dx : dx;
  dragProgress = Math.max(0, Math.min(1, distance / dragWidth));
  const directionSign = dragDirection === "next" ? -1 : 1;
  const angle = directionSign * 180 * dragProgress;
  // Lift the paper slightly around the middle of the turn.
  const lift = -9 * Math.sin(Math.PI * dragProgress);
  const tilt = 5 * Math.sin(Math.PI * dragProgress);
  dragLeaf.style.transform =
    `translate3d(0, ${lift}px, 0) ` +
    `rotateY(${angle}deg) rotateX(${tilt}deg)`;
  // Make the folded corner appear as the page lifts.
  dragLeaf.style.setProperty(
    "--curl-opacity",
    String(Math.min(1, dragProgress * 2.2))
  );
  // FIX: page gradually fades as it passes the middle of the turn
  const fade = Math.max(
    0,
    (dragProgress - LEAF_FADE_START) / (1 - LEAF_FADE_START)
  );
  dragLeaf.style.opacity = String(1 - fade * 0.6);
}
/* --- Interactive page flip: finish or return --- */
function finishDragFlip(commit) {
    if (!dragLeaf) return;
    // Ignore any older queued drag position.
    dragFramePending = false;
    const leaf = dragLeaf;
    const direction = dragDirection;
    const sign = direction === "next" ? -1 : 1;
    const startIndex = dragStartIndex;
    const progressAtRelease = dragProgress;
    // Save the current page position before clearing the drag state.
    dragLeaf = null;
    dragDirection = null;
    dragProgress = 0;
    dragWidth = 0;
    dragMoved = false;
    if (commit) {
      // FIX: destination dish is already rendered underneath,
      // only update index + counter (no re-render = no lag/flicker).
      index = dragTargetIndex;
      renderCounter();
    } else {
      index = startIndex;
      // FIX: do NOT restore #dish yet. The returning page still
      // reveals part of #dish, so keep the destination dish there
      // until the page fully covers it again (see timer below).
    }
    leaf.style.animation = "none";
    clearTimeout(flipTimer);
    if (commit) {
        // FIX: finish the turn with a soft ease-out and fade the page
        // away at the same time, instead of removing it suddenly.
        // Remaining time scales with how far the page still has to go.
        const remaining = Math.max(
            180,
            Math.round(DRAG_FINISH_MS * (1 - progressAtRelease))
        );
        leaf.style.transition =
            `transform ${remaining}ms cubic-bezier(0.25, 0.8, 0.3, 1), ` +
            `opacity ${remaining}ms ease-out`;
        // Apply the transition before moving to the final position.
        void leaf.offsetWidth;
        leaf.style.transform =
            `translate3d(0, 0, 0) rotateY(${sign * 180}deg) rotateX(0deg)`;
        leaf.style.opacity = "0";
        leaf.style.setProperty("--curl-opacity", "0");
        flipTimer = setTimeout(function () {
            leaf.remove();
            flipTimer = null;
            finishTransition();
        }, remaining + 40);
        return;
    }
    leaf.style.transition =
        "transform 320ms cubic-bezier(0.22, 0.61, 0.36, 1), " +
        "opacity 320ms ease-out";
    // Apply the transition before moving to the final position.
    void leaf.offsetWidth;
    // Return smoothly to the original position.
    leaf.style.transform =
        "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)";
    // Page comes back fully visible and covers #dish again.
    leaf.style.opacity = "1";
    leaf.style.setProperty("--curl-opacity", "0");
    flipTimer = setTimeout(function () {
        // FIX: page is back in place and fully covers #dish –
        // restore the original dish, then remove the leaf in the
        // same frame so the swap is invisible.
        renderMenuItem();
        leaf.remove();
        flipTimer = null;
        finishTransition();
    }, 330);
}
/* ===== Smooth page flip and category transitions ===== */
const CATEGORY_OUT_MS = 180;
const CATEGORY_IN_MS = 420;
function finishTransition() {
  busy = false;
  if (queuedTransitions.length > 0) {
    const next = queuedTransitions.shift();
    transition(next.change, next.dir, next.effect);
  }
}
function transition(change, dir = "next", effect = "flip") {
  if (busy) return;
  busy = true;
  // Category selection: fade and slide instead of flipping.
  if (effect === "category") {
    el.dish.classList.remove("reveal", "category-enter");
    el.dish.classList.add("category-exit");
    flipTimer = setTimeout(() => {
      change();
      renderMenuItem();
      el.dish.classList.remove("category-exit");
      void el.dish.offsetWidth;
      el.dish.classList.add("category-enter");
      flipTimer = setTimeout(() => {
        el.dish.classList.remove("category-enter");
        flipTimer = null;
        finishTransition();
      }, CATEGORY_IN_MS);
    }, CATEGORY_OUT_MS);
    return;
  }
  // Dish navigation: realistic book-page turn.
  const leaf = makeLeaf(dir);
  el.book.appendChild(leaf);
  // Restart the page-curl animation on every turn.
  void leaf.offsetWidth;
  leaf.classList.add("curling");
  change();
  renderMenuItem();
  // Keep the new dish visually stable underneath the turning page.
  el.dish.classList.remove(
    "reveal",
    "category-exit",
    "category-enter"
  );
  // FIX: fade the page out during the second half of the turn,
  // so it does not vanish suddenly when the animation ends.
  const fadeDelay = Math.round(FLIP_MS * 0.45);
  fadeOutLeaf(leaf, FLIP_MS - fadeDelay, fadeDelay);
  flipTimer = setTimeout(() => {
    leaf.remove();
    flipTimer = null;
    el.dish.classList.remove("reveal");
    finishTransition();
  }, FLIP_MS);
}
/* ===== Navigation ===== */
function selectCategory(id, animate = true) {
  if (!categories.some((c) => c.id === id)) return;
  if (animate && id === currentCategory && !busy) return;
  const apply = () => {
    currentCategory = id;
    currentList = menuItems.filter((item) => item.category === id);
    index = 0;
    renderCategories();
    const active = el.cats.querySelector(".active");
    if (active) {
      active.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: "smooth",
      });
    }
  };
  if (animate) {
    const from = categories.findIndex(
      (c) => c.id === currentCategory
    );
    const to = categories.findIndex((c) => c.id === id);
    const dir = to > from ? "next" : "prev";
    transition(apply, dir, "category");
  } else {
    apply();
    renderMenuItem();
  }
}
/* --- Navigation: prevent flipping beyond category boundaries --- */
function step(delta, dir) {
  if (busy || currentList.length < 1) return;
  const nextIndex = index + delta;
  // Do not wrap around or move beyond the first or last dish.
  if (nextIndex < 0 || nextIndex >= currentList.length) {
    return;
  }
  transition(() => {
    index = nextIndex;
  }, dir);
}
function showNextItem() {
  step(1, "next");
}
function showPreviousItem() {
  step(-1, "prev");
}
/* ===== Interface visibility ===== */
function toggleInterface() {
  if (busy) return;
  if (Date.now() - lastWake < WAKE_GUARD_MS) return;
  el.menu.classList.toggle("ui-hidden");
}
/* ===== Swipe handling ===== */
function handleSwipe(dx, dy) {
  if (Math.abs(dx) < SWIPE_MIN) return false;
  if (Math.abs(dx) < Math.abs(dy)) return false;
  // Avoid a synthetic click toggling the interface after a swipe.
  suppressDishClickUntil = Date.now() + 700;
  if (dx < 0) {
    showNextItem();
  } else {
    showPreviousItem();
  }
  return true;
}
/* ===== Screens ===== */
function openMenu() {
  if (opening || el.intro.hidden) return;
  opening = true;
  clearTimers();
  queuedTransitions = [];
  selectCategory(currentCategory, false);
  el.menu.hidden = false;
  el.menu.classList.add("enter");
  el.intro.classList.add("leaving");
  setTimeout(() => {
    el.intro.hidden = true;
    el.intro.classList.remove("leaving");
    el.menu.classList.remove("enter");
    opening = false;
    startIdleTimer();
  }, 1300);
}
function showIntro() {
  clearTimers();
  slideshowActive = false;
  opening = false;
  queuedTransitions = [];
  /* --- Page flip: cancel unfinished transitions --- */
  if (flipTimer !== null) {
      clearTimeout(flipTimer);
      flipTimer = null;
  }
  resetDragFlip();
  el.book.querySelectorAll(".leaf").forEach((leaf) => {
      leaf.remove();
  });
  busy = false;
  el.dish.classList.remove("reveal");
  el.idle.hidden = true;
  el.idle.classList.remove("swap");
  el.menu.classList.remove("ui-hidden", "enter");
  el.menu.hidden = true;
  el.intro.classList.remove("leaving");
  // Prepare a clean state for the next customer.
  currentCategory = categories[0].id;
  currentList = menuItems.filter(
    (item) => item.category === currentCategory
  );
  index = 0;
  slideIndex = 0;
  renderCategories();
  renderMenuItem();
  el.intro.hidden = false;
}
/* --- Page flip: reset drag state --- */
function resetDragFlip() {
    if (dragLeaf) {
        dragLeaf.remove();
    }
    dragLeaf = null;
    dragDirection = null;
    dragProgress = 0;
    dragWidth = 0;
    dragMoved = false;
    dragStartIndex = index;
    dragTargetIndex = index;
    touchStarted = false;
    multiTouch = false;
}
/* ===== Timers ===== */
function clearTimers() {
  clearTimeout(idleTimer);
  clearTimeout(resetTimer);
  clearTimeout(swapTimer);
  clearInterval(slideTimer);
  idleTimer = null;
  resetTimer = null;
  swapTimer = null;
  slideTimer = null;
}
function startIdleTimer() {
  // Restart BOTH timers after every valid interaction.
  clearTimeout(idleTimer);
  clearTimeout(resetTimer);
  idleTimer = null;
  resetTimer = null;
  if (el.menu.hidden || slideshowActive) return;
  idleTimer = setTimeout(() => {
    startSlideshow();
  }, IDLE_MS);
  resetTimer = setTimeout(() => {
    showIntro();
  }, RESET_MS);
}
function showSlide(first) {
  const list = featured();
  if (!list.length) return;
  const item = list[slideIndex % list.length];
  const apply = () => {
    if (!slideshowActive) return;
    setPhoto(el.idlePhoto, item);
    el.idleName.textContent = item.name;
    el.idleDesc.textContent = item.description;
  };
  if (first) {
    apply();
    return;
  }
  el.idle.classList.add("swap");
  clearTimeout(swapTimer);
  swapTimer = setTimeout(() => {
    if (!slideshowActive) return;
    apply();
    el.idle.classList.remove("swap");
    swapTimer = null;
  }, FADE_MS);
}
function startSlideshow() {
  if (el.menu.hidden || slideshowActive || !featured().length) {
    return;
  }
  clearTimeout(idleTimer);
  idleTimer = null;
  slideshowActive = true;
  slideIndex = 0;
  showSlide(true);
  el.idle.hidden = false;
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    if (!slideshowActive) return;
    slideIndex++;
    showSlide(false);
  }, SLIDE_MS);
}
function stopSlideshow() {
  if (!slideshowActive) return;
  slideshowActive = false;
  lastWake = Date.now();
  clearTimeout(swapTimer);
  clearInterval(slideTimer);
  swapTimer = null;
  slideTimer = null;
  el.idle.classList.remove("swap");
  el.idle.hidden = true;
  // Start a fresh 30-second idle timer and 2-minute reset timer.
  startIdleTimer();
}
/* ===== Event handling ===== */
function bindEvents() {
  el.intro.addEventListener("click", openMenu);
  $("nextBtn").addEventListener("click", showNextItem);
  $("prevBtn").addEventListener("click", showPreviousItem);
  el.book.addEventListener("click", () => {
    if (Date.now() < suppressDishClickUntil) return;
    toggleInterface();
  });

  // --- Touch handling: interactive hold-and-drag page flip ---
  el.dish.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) {
      if (dragLeaf) {
        finishDragFlip(false);
      }
      multiTouch = true;
      touchStarted = false;
      return;
    }
    if (busy || slideshowActive || opening) {
      touchStarted = false;
      return;
    }
    multiTouch = false;
    touchStarted = true;
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
    touchStartTime = Date.now();
    // FIX: listen on the exact touched element. When the drag starts,
    // renderDish() replaces the price rows (innerHTML), so the touched
    // node is removed from the page and its events no longer bubble
    // up to #dish. Touch events still fire on the original target.
    bindTouchTarget(e.target);
    pendingDragDx = 0;
    lastMoveX = touchX;
    lastMoveTime = touchStartTime;
    flickVelocity = 0;
  }, { passive: true });
  const onTouchMove = (e) => {
      if (!touchStarted || multiTouch || e.touches.length !== 1) {
          return;
      }
      const touch = e.touches[0];
      const dx = touch.clientX - touchX;
      const dy = touch.clientY - touchY;
      // FIX: measure finger speed (px/ms) for flick detection
      const now = Date.now();
      const dt = Math.max(now - lastMoveTime, 1);
      flickVelocity = (touch.clientX - lastMoveX) / dt;
      lastMoveX = touch.clientX;
      lastMoveTime = now;
      // Ignore tiny movements and vertical scrolling.
      if (!dragLeaf &&
          (Math.abs(dx) < DRAG_START_PX || Math.abs(dx) <= Math.abs(dy))) {
          return;
      }
      // Start the drag animation only after a clearer movement.
      if (!dragLeaf) {
          startDragFlip(dx);
          if (!dragLeaf) {
              return;
          }
          suppressDishClickUntil = Date.now() + 700;
      }
      // FIX: stop the price box from scrolling while the page is turning
      if (e.cancelable) {
          e.preventDefault();
      }
      updateDragFlip(dx);
  };
  const onTouchEnd = (e) => {
      unbindTouchTarget();
      if (!touchStarted || multiTouch) {
          touchStarted = false;
          multiTouch = false;
          if (dragLeaf) {
              finishDragFlip(false);
          }
          return;
      }
      if (e.changedTouches.length > 0) {
          const touch = e.changedTouches[0];
          const dx = touch.clientX - touchX;
          const dy = touch.clientY - touchY;
          const isHorizontalSwipe =
              Math.abs(dx) >= SWIPE_MIN &&
              Math.abs(dx) > Math.abs(dy);
          if (dragLeaf) {
              // Use the final finger position before deciding.
              updateDragFlipNow(dx);
              const correctDirection =
                  (dragDirection === "next" && dx < 0) ||
                  (dragDirection === "prev" && dx > 0);
              // FIX: a small drag is enough to turn the page.
              // Turn when: dragged >= 40px, OR >= 12% of the turn,
              // OR quick flick, OR short swipe within 600ms.
              // Cancel only if the finger is clearly moving back.
              const movingBack =
                  (dragDirection === "next" && flickVelocity > FLICK_SPEED) ||
                  (dragDirection === "prev" && flickVelocity < -FLICK_SPEED);
              const isFlick =
                  (dragDirection === "next" && flickVelocity < -FLICK_SPEED) ||
                  (dragDirection === "prev" && flickVelocity > FLICK_SPEED);
              const commit =
                  correctDirection && !movingBack &&
                  (Math.abs(dx) >= COMMIT_PX ||
                   dragProgress >= COMMIT_PROGRESS ||
                   isFlick ||
                   (Math.abs(dx) >= SWIPE_MIN &&
                    Date.now() - touchStartTime <= 600));
              suppressDishClickUntil = Date.now() + 700;
              finishDragFlip(commit);
          } else if (isHorizontalSwipe) {
              // Use the normal animated page turn when no drag started.
              handleSwipe(dx, dy);
          }
      }
      touchStarted = false;
      multiTouch = false;
  };
  const onTouchCancel = () => {
    unbindTouchTarget();
    touchStarted = false;
    multiTouch = false;
    // Cancelled gestures return the page to its starting position.
    if (dragLeaf) {
      finishDragFlip(false);
    }
  };
  // FIX: attach / detach move-end-cancel listeners on the touched element
  let touchTarget = null;
  function bindTouchTarget(target) {
    unbindTouchTarget();
    touchTarget = target;
    touchTarget.addEventListener("touchmove", onTouchMove, { passive: false });
    touchTarget.addEventListener("touchend", onTouchEnd, { passive: true });
    touchTarget.addEventListener("touchcancel", onTouchCancel, { passive: true });
  }
  function unbindTouchTarget() {
    if (!touchTarget) return;
    touchTarget.removeEventListener("touchmove", onTouchMove, { passive: false });
    touchTarget.removeEventListener("touchend", onTouchEnd, { passive: true });
    touchTarget.removeEventListener("touchcancel", onTouchCancel, { passive: true });
    touchTarget = null;
  }
  // Keyboard support for desktop testing.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!el.intro.hidden) return;
      e.preventDefault();
      showIntro();
      return;
    }
    if (slideshowActive || opening) return;
    if (el.menu.hidden) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      showNextItem();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      showPreviousItem();
    }
  });
  // A single global pointer handler covers mouse, pen and touch.
  // Do not also register touchstart here: that would reset timers twice.
  document.addEventListener("pointerdown", (e) => {
    if (slideshowActive) {
      e.preventDefault();
      e.stopImmediatePropagation();
      stopSlideshow();
      return;
    }
    if (!el.menu.hidden && !opening) {
      startIdleTimer();
    }
  }, { capture: true, passive: false });
  // Keyboard interaction also counts as activity.
  document.addEventListener("keydown", (e) => {
    if (slideshowActive) {
      e.preventDefault();
      e.stopImmediatePropagation();
      stopSlideshow();
      return;
    }
    if (!el.menu.hidden && !opening) {
      startIdleTimer();
    }
  }, { capture: true });
}
/* ===== Initialize ===== */
function initializeMenu() {
  currentList = menuItems.filter(
    (item) => item.category === currentCategory
  );
  preloadImages(); // FIX: preload + decode all dish photos once
  renderCategories();
  renderMenuItem();
  bindEvents();
}
initializeMenu();
