/* Lekker Claypot House – digital menu. Static, no dependencies. */
/* ===== Categories & dishes ===== */
const categories = [
  { id: "signature",  label: "Signature 招牌" },
  { id: "claypot-curry", label: "Claypot & Curry 瓦煲与咖喱" },
  { id: "side",      label: "Side 配菜" },
  { id: "vegetables", label: "Vegetables 蔬菜" },
  { id: "egg", label: "Egg 蛋" },
  { id: "other", label: "Other 其他" },
];
const menuItems = [
  { id: 1, category: "signature", name: "Claypot Chicken Rice 瓦煲鸡饭", description: "Aromatic Claypot Rice With Juicy Chicken 香气四溢的瓦煲饭，搭配鲜嫩多汁的鸡肉", image: "assets/images/claypot-chicken-rice.jpg", featured: true },
  { id: 2, category: "signature", name: "Curry Fish Head 咖喱鱼头", description: "Tender Fish Head Bathed In Rich, Fragrant Curry 鲜嫩鱼头浸润在香浓浓郁的咖喱中", image: "assets/images/curry-head.jpg", featured: true, containsFishHead: true },
  { id: 3, category: "claypot-curry", name: "Claypot Chicken Rice 瓦煲鸡饭", description: "Freshly Cooked Claypot Rice With Savoury Chicken 香喷喷的现煮瓦煲饭，融合鸡肉的鲜美滋味", image: "assets/images/claypot-chicken-rice.jpg", featured: false },
  { id: 4, category: "claypot-curry", name: "Curry Fish Head 咖喱鱼头", description: "A Rich, Spicy Curry With Tender, Flavourful Fish Head 香浓微辣的咖喱，配上鲜嫩入味的鱼头", image: "assets/images/curry-head.jpg", featured: false, containsFishHead: true },
  { id: 5, category: "claypot-curry", name: "Curry Fish Meat 咖喱鱼肉", description: "Delicate Fish Meat Simmered In Fragrant Curry 鲜嫩鱼肉慢煮于香气扑鼻的咖喱中", image: "assets/images/curry-meat.jpg", featured: true },
  { id: 6, category: "claypot-curry", name: "Curry Prawn 咖喱虾", description: "Juicy Prawns Coated In A Rich, Aromatic Curry 鲜甜多汁的虾，裹上香浓诱人的咖喱", image: "assets/images/curry-prawn.jpg", featured: false },
  { id: 7, category: "claypot-curry", name: "Curry Sotong 咖喱苏东", description: "Tender Sotong Infused With Bold, Fragrant Curry Flavours 弹嫩苏东吸收浓郁咖喱精华，香气十足", image: "assets/images/curry-sotong.jpg", featured: false },
  { id: 8, category: "claypot-curry", name: "Curry Fish Head & Fish Meat 咖喱鱼头 & 鱼肉", description: "The Best Of Both Worlds, With Fish Head And Fish Meat In Rich Curry 鱼头与鱼肉双重美味，搭配香浓醇厚的咖喱", image: "assets/images/curry-head-meat.jpg", featured: false, containsFishHead: true },
  { id: 9, category: "claypot-curry", name: "Curry Fish Head & Prawn 咖喱鱼头 & 虾", description: "Fish head and juicy prawns in rich, aromatic curry. 鱼头搭配鲜虾，融入香浓咖喱。", image: "assets/images/curry-head-prawn.jpg", featured: false, containsFishHead: true },
  { id: 10, category: "claypot-curry", name: "Curry Fish Head & Sotong 咖喱鱼头 & 苏东", description: "Fish head and tender sotong in rich, aromatic curry. 鱼头搭配弹嫩苏东，融入香浓咖喱。", image: "assets/images/curry-head-sotong.jpg", featured: false, containsFishHead: true },
  { id: 11, category: "claypot-curry", name: "Curry Fish Meat & Prawn 咖喱鱼肉 & 虾", description: "Tender fish meat and juicy prawns in rich, aromatic curry. 鲜嫩鱼肉搭配鲜虾，融入香浓咖喱。", image: "assets/images/curry-meat-prawn.jpg", featured: false },
  { id: 12, category: "claypot-curry", name: "Curry Fish Meat & Sotong 咖喱鱼肉 & 苏东", description: "Tender fish meat and sotong in rich, aromatic curry. 鲜嫩鱼肉搭配苏东，融入香浓咖喱。", image: "assets/images/curry-meat-sotong.jpg", featured: false },
  { id: 13, category: "claypot-curry", name: "Curry Prawn & Sotong 咖喱虾 & 苏东", description: "A Seafood Duo Of Juicy Prawns And Tender Sotong In Rich Curry 鲜甜多汁的虾与弹嫩苏东相遇，融入香浓咖喱的美味组合", image: "assets/images/curry-prawn-sotong.jpg", featured: false },
  { id: 14, category: "claypot-curry", name: "Curry Fish Head, Fish Meat & Prawn 咖喱鱼头 & 鱼肉 & 虾", description: "Fish head, tender fish meat and juicy prawns in aromatic curry. 鱼头、鲜嫩鱼肉与鲜虾，融入香浓咖喱。", image: "assets/images/curry-head-meat-prawn.jpg", featured: false, containsFishHead: true },
  { id: 15, category: "claypot-curry", name: "Curry Fish Head, Fish Meat & Sotong 咖喱鱼头 & 鱼肉 & 苏东", description: "Fish head, tender fish meat and sotong in aromatic curry. 鱼头、鲜嫩鱼肉与苏东，融入香浓咖喱。", image: "assets/images/curry-head-meat-sotong.jpg", featured: false, containsFishHead: true },
  { id: 16, category: "claypot-curry", name: "Curry Fish Head, Prawn & Sotong (3 Flavour) 咖喱鱼头 & 虾 & 苏东（3B）", description: "Fish head, juicy prawns and tender sotong in aromatic curry. 鱼头、鲜虾与弹嫩苏东，融入香浓咖喱。", image: "assets/images/curry-head-prawn-sotong.jpg", featured: false, containsFishHead: true },
  { id: 17, category: "claypot-curry", name: "Curry Fish Meat, Prawn & Sotong (3 Flavour) 咖喱鱼肉 & 虾 & 苏东（3B）", description: "Tender fish meat, juicy prawns and sotong in aromatic curry. 鲜嫩鱼肉、鲜虾与苏东，融入香浓咖喱。", image: "assets/images/curry-meat-prawn-sotong.jpg", featured: false },
  { id: 18, category: "claypot-curry", name: "Curry Fish Head, Fish Meat, Prawn & Sotong (4 Flavour) 咖喱鱼头 & 鱼肉 & 虾 & 苏东（4B）", description: "Fish head, fish meat, prawns and sotong in aromatic curry. 鱼头、鱼肉、鲜虾与苏东，汇聚香浓咖喱。", image: "assets/images/curry-head-meat-prawn-sotong.jpg", featured: false, containsFishHead: true },
  { id: 19, category: "side", name: "Mushroom Chicken Feet 香菇鸡脚", description: "Tender Chicken Feet Braised With Savoury Mushrooms 香菇焖煮鸡脚，香浓入味", image: "assets/images/mushroom-chicken-feet.jpg", featured: true },
  { id: 20, category: "side", name: "Pork Vinegar Trotter 猪脚醋", description: "Tender Pork Trotter Simmered In Rich, Tangy Vinegar 酸香浓郁的猪脚醋，猪脚软嫩入味", image: "assets/images/pork-vinegar-trotter.jpg", featured: true },
  { id: 21, category: "vegetables", name: "Iceberg Lettuce 生菜", description: "Fresh And Crisp Iceberg Lettuce 清爽脆嫩的生菜", image: "assets/images/iceberg-lettuce.jpg", featured: false },
  { id: 22, category: "vegetables", name: "Chinese Cabbage 小白菜", description: "Fresh Chinese Cabbage With A Naturally Sweet Taste 清新爽口的小白菜，带有自然清甜", image: "assets/images/chinese-cabbage.jpg", featured: false },
  { id: 23, category: "vegetables", name: "Kailan 芥兰", description: "Crunchy Kailan With A Fresh, Earthy Flavour 清脆爽口的芥兰，滋味鲜美", image: "assets/images/kailan.jpg", featured: false },
  { id: 25, category: "vegetables", name: "Beansprouts (Taugeh) 豆芽", description: "Light And Crunchy Beansprouts 清爽脆嫩的豆芽", image: "assets/images/beansprouts.jpg", featured: false },
  { id: 26, category: "egg", name: "Plain Fried Egg (Kosong) 煎蛋", description: "A Simple Fried Egg With Golden Edges 香煎鸡蛋，蛋香十足", image: "assets/images/plain-fried-egg.jpg", featured: false },
  { id: 27, category: "egg", name: "Fried Egg With Onion 洋葱蛋", description: "Fluffy Fried Egg With Sweet, Fragrant Onion 香嫩煎蛋搭配清甜洋葱", image: "assets/images/fried-egg-with-onion.jpg", featured: false },
  { id: 28, category: "egg", name: "Fried Egg With Chinese Sausage 腊肠蛋", description: "Savoury Fried Egg With Fragrant Chinese Sausage 香煎鸡蛋搭配咸香腊肠", image: "assets/images/fried-egg-with-chinese-sausage.jpg", featured: false },
  { id: 38, category: "egg", name: "Fried Egg With Prawn 虾蛋", description: "Golden Fried Egg With Juicy Prawns 香煎鸡蛋搭配鲜甜虾仁", image: "assets/images/fried-egg-with-prawn.jpg", featured: false },
  { id: 29, category: "egg", name: "Egg Foo Yong 芙蓉蛋", description: "Golden Egg Foo Yong With A Soft, Fluffy Centre 金黄香煎芙蓉蛋，口感松软", image: "assets/images/egg-foo-yong.jpg", featured: false },
  { id: 30, category: "other", name: "Sesame Oil Chicken 麻油鸡", description: "Tender Chicken Infused With Fragrant Sesame Oil 香浓麻油焖鸡，鸡肉鲜嫩入味", image: "assets/images/sesame-oil-chicken.jpg", featured: false },
  { id: 31, category: "other", name: "Chicken Rendang 仁当鸡", description: "Tender Chicken Cooked In Rich, Aromatic Rendang Spices 鸡肉融合浓郁仁当香料，香辣惹味", image: "assets/images/chicken-rendang.jpg", featured: false },
  { id: 32, category: "other", name: "Fried Chicken 炸鸡", description: "Crispy Golden Fried Chicken With Juicy Meat 外皮金黄酥脆，鸡肉鲜嫩多汁", image: "assets/images/fried-chicken.jpg", featured: false },
  { id: 37, category: "other", name: "Kam Heong Chicken 甘香鸡", description: "Chicken Stir-Fried With Aromatic Kam Heong Spices 鸡肉搭配甘香香料热炒，香浓入味", image: "assets/images/kam-heong-chicken.jpg", featured: false },
  { id: 33, category: "other", name: "Fried Tofu With Thai Sauce 三味豆腐", description: "Golden Fried Tofu Drizzled With Tangy Thai Sauce 外酥内嫩的炸豆腐，搭配酸甜泰式酱汁", image: "assets/images/fried-tofu-thai-sauce.jpg", featured: true },
  { id: 34, category: "other", name: "Fried Sotong 炸苏东", description: "Crispy Fried Sotong With A Tender Bite 外酥内嫩的炸苏东，鲜香可口", image: "assets/images/fried-sotong.jpg", featured: false },
  { id: 35, category: "other", name: "Assam Prawn 亚三哥虾", description: "Juicy Prawns Tossed In A Tangy, Fragrant Assam Sauce 鲜甜多汁的虾，搭配酸香开胃的亚三酱汁", image: "assets/images/assam-prawn.jpg", featured: false },
  { id: 36, category: "other", name: "Kam Heong Prawn 甘香虾", description: "Juicy Prawns Stir-Fried With Aromatic Kam Heong Spices 鲜虾与甘香香料热炒，香气浓郁惹味", image: "assets/images/kam-heong-prawn.jpg", featured: false },
];
/* ===== Menu prices ===== */
const vegetablePriceGroups = [
  { label: "Oil-Dressed · With Mixed Ingredients · Plain Stir-Fried · With Salted Fish／油菜 · 炒什锦 · 清炒 · 炒咸鱼", price: "Small／小份 RM8.00\nLarge／大份 RM14.00" },
  { label: "With Braised Pork／炒红烧肉", price: "Per serving／每份 RM24.00" },
];
const vegetablePriceList = vegetablePriceGroups[0].label + "\n" + vegetablePriceGroups[0].price;
const vegetableBraisedPorkPriceList = vegetablePriceGroups
  .map((group) => group.label + "\n" + group.price)
  .join("\n");
const priceById = {
  // Claypot Chicken Rice 瓦煲鸡饭
  1: "Small／小份 RM9.00\nMedium／中份 RM16.00\nLarge／大份 RM24.00\nAdd-ons charged separately／配料另收费",
  // Curry Fish Head 咖喱鱼头
  2: "2 persons／2人份 RM32.00\n3 persons／3人份 RM48.00\n4 persons／4人份 RM62.00\n5 persons／5人份 RM76.00\n6 persons／6人份 RM90.00\n7 persons／7人份 RM104.00\n8 persons／8人份 RM118.00",
  // Claypot Chicken Rice 瓦煲鸡饭
  3: "Small／小份 RM9.00\nMedium／中份 RM16.00\nLarge／大份 RM24.00\nAdd-ons charged separately／配料另收费",
  // Curry Fish Head 咖喱鱼头
  4: "2 persons／2人份 RM32.00\n3 persons／3人份 RM48.00\n4 persons／4人份 RM62.00\n5 persons／5人份 RM76.00\n6 persons／6人份 RM90.00\n7 persons／7人份 RM104.00\n8 persons／8人份 RM118.00",
  // Curry Fish Meat 咖喱鱼肉
  5: "2 persons／2人份 RM35.00\n3 persons／3人份 RM52.00\n4 persons／4人份 RM68.00\n5 persons／5人份 RM84.00\n6 persons／6人份 RM100.00\n7 persons／7人份 RM116.00\n8 persons／8人份 RM132.00",
  // Curry Prawn 咖喱虾
  6: "Per serving／每份 RM40.00++\nEach additional prawn／每加一只虾 RM5.00",
  // Curry Sotong 咖喱苏东
  7: "Small／小份 RM30.00\nMedium／中份 RM45.00\nLarge／大份 RM60.00\nAdd-ons charged separately／配料另收费\nEach additional sotong／每加一只苏东 RM6.00",
  // Curry Fish Head & Fish Meat 咖喱鱼头 & 鱼肉
  8: "2 persons／2人份 RM44.00\n3 persons／3人份 RM66.00\n4 persons／4人份 RM86.00\n5 persons／5人份 RM105.00\n6 persons／6人份 RM126.00\n7 persons／7人份 RM146.00\n8 persons／8人份 RM166.00",
  // Curry Fish Head & Prawn 咖喱鱼头 & 虾
  9: "2 persons／2人份 RM42.00\n3 persons／3人份 RM63.00\n4 persons／4人份 RM82.00\n5 persons／5人份 RM101.00\n6 persons／6人份 RM120.00\n7 persons／7人份 RM139.00\n8 persons／8人份 RM158.00\nEach additional prawn／每加一只虾 RM5.00",
  // Curry Fish Head & Sotong 咖喱鱼头 & 苏东
  10: "2 persons／2人份 RM44.00\n3 persons／3人份 RM66.00\n4 persons／4人份 RM86.00\n5 persons／5人份 RM106.00\n6 persons／6人份 RM126.00\n7 persons／7人份 RM146.00\n8 persons／8人份 RM166.00\nEach additional sotong／每加一只苏东 RM6.00",
  // Curry Fish Meat & Prawn 咖喱鱼肉 & 虾
  11: "2 persons／2人份 RM45.00\n3 persons／3人份 RM67.00\n4 persons／4人份 RM88.00\n5 persons／5人份 RM109.00\n6 persons／6人份 RM130.00\n7 persons／7人份 RM151.00\n8 persons／8人份 RM172.00\nEach additional prawn／每加一只虾 RM5.00",
  // Curry Fish Meat & Sotong 咖喱鱼肉 & 苏东
  12: "2 persons／2人份 RM47.00\n3 persons／3人份 RM70.00\n4 persons／4人份 RM92.00\n5 persons／5人份 RM114.00\n6 persons／6人份 RM136.00\n7 persons／7人份 RM158.00\n8 persons／8人份 RM180.00\nEach additional sotong／每加一只苏东 RM6.00",
  // Curry Prawn & Sotong 咖喱虾 & 苏东
  13: "2 persons／2人份 RM32.00\n3 persons／3人份 RM48.00\n4 persons／4人份 RM64.00\n5 persons／5人份 RM80.00\n6 persons／6人份 RM96.00\n7 persons／7人份 RM112.00\n8 persons／8人份 RM144.00\nEach additional prawn／每加一只虾 RM5.00\nEach additional sotong／每加一只苏东 RM6.00",
  // Curry Fish Head, Fish Meat & Prawn 咖喱鱼头 & 鱼肉 & 虾
  14: "2 persons／2人份 RM54.00\n3 persons／3人份 RM81.00\n4 persons／4人份 RM106.00\n5 persons／5人份 RM130.00\n6 persons／6人份 RM156.00\n7 persons／7人份 RM181.00\n8 persons／8人份 RM206.00\nEach additional prawn／每加一只虾 RM5.00",
  // Curry Fish Head, Fish Meat & Sotong 咖喱鱼头 & 鱼肉 & 苏东
  15: "2 persons／2人份 RM56.00\n3 persons／3人份 RM84.00\n4 persons／4人份 RM110.00\n5 persons／5人份 RM135.00\n6 persons／6人份 RM162.00\n7 persons／7人份 RM188.00\n8 persons／8人份 RM214.00\nEach additional sotong／每加一只苏东 RM6.00",
  // Curry Fish Head, Prawn & Sotong (3 Flavour) 咖喱鱼头 & 虾 & 苏东（3B）
  16: "2 persons／2人份 RM54.00\n3 persons／3人份 RM81.00\n4 persons／4人份 RM106.00\n5 persons／5人份 RM131.00\n6 persons／6人份 RM156.00\n7 persons／7人份 RM181.00\n8 persons／8人份 RM206.00\nEach additional prawn／每加一只虾 RM5.00\nEach additional sotong／每加一只苏东 RM6.00",
  // Curry Fish Meat, Prawn & Sotong (3 Flavour) 咖喱鱼肉 & 虾 & 苏东（3B）
  17: "2 persons／2人份 RM57.00\n3 persons／3人份 RM85.00\n4 persons／4人份 RM112.00\n5 persons／5人份 RM139.00\n6 persons／6人份 RM166.00\n7 persons／7人份 RM193.00\n8 persons／8人份 RM220.00\nEach additional prawn／每加一只虾 RM5.00\nEach additional sotong／每加一只苏东 RM6.00",
  // Curry Fish Head, Fish Meat, Prawn & Sotong (4 Flavour) 咖喱鱼头 & 鱼肉 & 虾 & 苏东（4B）
  18: "2 persons／2人份 RM66.00\n3 persons／3人份 RM99.00\n4 persons／4人份 RM130.00\n5 persons／5人份 RM160.00\n6 persons／6人份 RM192.00\n7 persons／7人份 RM223.00\n8 persons／8人份 RM254.00\nEach additional prawn／每加一只虾 RM5.00\nEach additional sotong／每加一只苏东 RM6.00",
  // Mushroom Chicken Feet 香菇鸡脚
  19: "Small／小份 RM6.00\nLarge／大份 RM12.00",
  // Pork Vinegar Trotter 猪脚醋
  20: "Small／小份 RM12.00\nLarge／大份 RM22.00",
  // Iceberg Lettuce 生菜
  21: vegetablePriceList,
  // Chinese Cabbage 小白菜
  22: vegetableBraisedPorkPriceList,
  // Kailan 芥兰
  23: vegetableBraisedPorkPriceList,
  // Beansprouts (Taugeh) 豆芽
  25: vegetablePriceList,
  // Plain Fried Egg (Kosong) 煎蛋
  26: "Small／小份 RM3.00\nLarge／大份 RM5.00",
  // Fried Egg With Onion 洋葱蛋
  27: "Small／小份 RM4.00\nLarge／大份 RM6.00",
  // Fried Egg With Chinese Sausage 腊肠蛋
  28: "Small／小份 RM5.00\nLarge／大份 RM8.00",
  // Fried Egg With Prawn 虾仁蛋
  38: "Per serving／每份 RM10.00",
  // Egg Foo Yong 芙蓉蛋
  29: "Per serving／每份 RM10.00",
  // Sesame Oil Chicken 麻油鸡
  30: "Per serving／每份 RM15.00",
  // Chicken Rendang 仁当鸡
  31: "Per serving／每份 RM15.00",
  // Fried Chicken 炸鸡
  32: "Per serving／每份 RM15.00",
  // Kam Heong Chicken 甘香鸡
  37: "Per serving／每份 RM15.00",
  // Fried Tofu With Thai Sauce 三味豆腐
  33: "Small／小份 RM6.00\nLarge／大份 RM12.00",
  // Fried Sotong 炸苏东
  34: "Per serving／每份 RM15.00",
  // Assam Prawn 亚三哥虾
  35: "Per serving／每份 RM40.00++\nEach additional prawn／每加一只虾 RM5.00",
  // Kam Heong Prawn 甘香虾
  36: "Per serving／每份 RM40.00++\nEach additional prawn／每加一只虾 RM5.00",
};
// Keep confirmed prices unchanged and add the weight note to fish-head dishes.
const fishHeadWeightNote = "Final price is based on the weight of the fish head／最终售价按鱼头实际重量计算";
const claypotRicePreparationNote = "Claypot chicken rice takes about 25–35 minutes to prepare. Thank you for your patience.／瓦煲鸡饭需等候 25–35分钟，谢谢您的耐心等候。";
menuItems.forEach((item) => {
  const priceLines = [priceById[item.id] || ""];
  if (item.id === 1 || item.id === 3) {
    priceLines.push(claypotRicePreparationNote);
  }
  if (item.containsFishHead) {
    priceLines.push(fishHeadWeightNote);
  }
  item.price = priceLines.filter(Boolean).join("\n");
});
/* ===== Settings ===== */
const IDLE_MS = 60000;
const SLIDE_MS = 8000;
const FADE_MS = 1200;
const IDLE_EXIT_MS = 600;
const SWIPE_MIN = 25;
const FLIP_MS = 820;
const WAKE_GUARD_MS = 500;
/* FIX: easier hold-and-drag flip */
const DRAG_START_PX = 6;      // movement before the page starts to lift
const DRAG_FULL_RATIO = 0.6;  // finger travel (x page width) for a full 180deg turn
const COMMIT_PX = 40;         // small drag distance that is enough to turn the page
const COMMIT_PROGRESS = 0.12; // or 12% of the turn
const FLICK_SPEED = 0.3;      // px per ms – quick flick always turns the page
/* FIX: smooth fade-out of the turned page */
const DRAG_FINISH_MS = 540;   // time for the page to finish turning after release
const LEAF_FADE_MS = 300;     // fade-out duration of the turned page
const LEAF_FADE_START = 0.3;  // fade gradually while the turning page is still visible
document.documentElement.style.setProperty("--flip", `${FLIP_MS}ms`);
/* ===== State ===== */
let currentCategory = categories[0].id;
let currentList = [];
let index = 0;
let busy = false;
let opening = false;
let openingTimer = null;
let returningToIntro = false;
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
let slideTimer = null;
let swapTimer = null;
let idleExitTimer = null;
let idleReturning = false;
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
  if (!item.image) {
    container.replaceChildren();
    container.dataset.initial = item.name.charAt(0);
    container.classList.add("noimg");
    return;
  }
  // Check the sharp foreground image to avoid recreating both images.
  const existingMain = container.querySelector(".dish-photo-main");

  if (
    existingMain &&
    existingMain.dataset.src === item.image
  ) {
    existingMain.alt = item.name;

    const existingBg = container.querySelector(".dish-photo-bg");

    if (existingBg) {
      existingBg.alt = "";
    }

    container.dataset.initial = item.name.charAt(0);
    container.classList.remove("noimg");
    return;
  }

  container.classList.remove("noimg");
  container.dataset.initial = item.name.charAt(0);

  // Blurred background copy.
  const bgImg = new Image();
  bgImg.className = "dish-photo-bg";
  bgImg.alt = "";
  bgImg.setAttribute("aria-hidden", "true");
  bgImg.decoding = "async";
  bgImg.dataset.src = item.image;

  // Sharp foreground copy.
  const mainImg = new Image();
  mainImg.className = "dish-photo-main";
  mainImg.alt = item.name;
  mainImg.decoding = "async";
  mainImg.dataset.src = item.image;

  mainImg.onerror = () => {
    container.replaceChildren();
    container.classList.add("noimg");
  };

  bgImg.src = item.image;
  mainImg.src = item.image;

  container.replaceChildren(bgImg, mainImg);
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
  el.price.hidden = !item.price;
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
function renderVegetablePrices(priceText) {
    const labels = vegetablePriceGroups[0].label.split("／");
    const english = labels[0].split(" · ");
    const chinese = labels[1].split(" · ");
    const amounts = vegetablePriceGroups[0].price.match(/RM[\d.]+/g);
    let html = '<div class="price-heading"><span>PRICE / <span lang="zh">价格</span></span><span>MYR</span></div>' +
        '<table class="vegetable-prices" aria-label="Vegetable options and prices">' +
        '<colgroup><col class="vegetable-style-column"><col><col></colgroup>' +
        '<thead><tr class="vegetable-column-titles"><th scope="col">Cooking Style / <span lang="zh">做法</span></th>' +
        '<th scope="col">Small / <span lang="zh">小份</span></th>' +
        '<th scope="col">Large / <span lang="zh">大份</span></th></tr></thead><tbody>';
    english.forEach((label, i) => {
        html += '<tr><th scope="row">' + escapePriceText(label) +
            ' / <span lang="zh">' + escapePriceText(chinese[i]) +
            '</span></th><td>' + escapePriceText(amounts[0]) + '</td><td>' +
            escapePriceText(amounts[1]) + '</td></tr>';
    });
    if (priceText.includes(vegetablePriceGroups[1].label)) {
        const porkLabels = vegetablePriceGroups[1].label.split("／");
        const porkAmount = vegetablePriceGroups[1].price.match(/RM[\d.]+/)[0];
        html += '<tr><th scope="row">' + escapePriceText(porkLabels[0]) +
            ' / <span lang="zh">' + escapePriceText(porkLabels[1]) +
            '</span></th><td colspan="2">' + escapePriceText(porkAmount) +
            '</td></tr>';
    }
    return html + '</tbody></table>';
}

function renderPriceList(priceText) {
    if (String(priceText || "").startsWith(vegetablePriceGroups[0].label + "\n")) {
        return renderVegetablePrices(priceText);
    }
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
        '<span>PRICE / <span lang="zh">价格</span></span>' +
        '<span>MYR</span>' +
        '</div>' +
        '<div class="price-rows">';
    var notes = [];
    lines.forEach(function (line) {
        if (line === claypotRicePreparationNote || /^(Add-ons charged separately|Final price is based on the weight of the fish head)/i.test(line)) {
            notes.push(line);
            return;
        }
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
    if (notes.length > 0) {
        html += '<div class="price-notes">';
        notes.forEach(function (note) {
            var parts = note.split("／");
            var english = parts.shift().trim();
            var chinese = parts.join("／").trim();
            var noteClass = note === claypotRicePreparationNote
                ? "price-note price-note--preparation"
                : "price-note";
            html += '<p class="' + noteClass + '">';
            if (note === claypotRicePreparationNote) {
                html += '<svg class="preparation-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
            }
            var englishHtml = escapePriceText(english);
            var chineseHtml = escapePriceText(chinese);
            if (note === claypotRicePreparationNote) {
                englishHtml = englishHtml.replace("25–35 minutes", "<strong>25–35 minutes</strong>");
                chineseHtml = chineseHtml.replace("25–35分钟", "<strong>25–35分钟</strong>");
            }
            html += '<span>' + englishHtml + '</span>';
            if (chinese) {
                html += '<span lang="zh">' + chineseHtml + '</span>';
            }
            html += '</p>';
        });
        html += '</div>';
    }
    return html;
}
/* --- Dish pricing: escape text safely --- */
function escapePriceText(value) {
    return String(value)
        .replace(/\s*[／/]\s*/g, " / ")
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
            backPrice.hidden = !adjacentItem.price;
            backPrice.innerHTML =
                renderPriceList(adjacentItem.price);
        }
    }
    leaf.appendChild(back);
    // Stop the front photo animation while the page rotates.
    const frontImg = front.querySelector(".dish-photo-main");
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
                easing: "ease-in-out",
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
  // A single-axis turn keeps the spine attached at both corners.
  dragLeaf.style.transform =
    `rotateY(${angle}deg)`;
  dragLeaf.style.setProperty(
    "--turn-shade",
    String(Math.sin(Math.PI * dragProgress) * 0.32)
  );
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
  const smoothFade = fade * fade * (3 - 2 * fade);
  dragLeaf.style.opacity = String(1 - smoothFade);
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
            300,
            Math.round(DRAG_FINISH_MS * (1 - progressAtRelease))
        );
        leaf.style.transition =
            `transform ${remaining}ms cubic-bezier(0.25, 0.8, 0.3, 1), ` +
            `opacity ${remaining}ms ease-in-out`;
        // Apply the transition before moving to the final position.
        void leaf.offsetWidth;
        leaf.style.transform =
            `translate3d(0, 0, 0) rotateY(${sign * 180}deg) rotateX(0deg)`;
        leaf.style.opacity = "0";
        leaf.style.setProperty("--curl-opacity", "0");
        leaf.style.setProperty("--turn-shade", "0");
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
    leaf.style.setProperty("--turn-shade", "0");
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
  // Fade over most of the turn, before the page rotates out of view.
  const fadeDelay = Math.round(FLIP_MS * LEAF_FADE_START);
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
  openingTimer = setTimeout(() => {
    openingTimer = null;
    el.intro.hidden = true;
    el.intro.classList.remove("leaving");
    el.menu.classList.remove("enter");
    opening = false;
    startIdleTimer();
  }, 1300);
}
function showIntro() {
  if (returningToIntro) return;
  returningToIntro = true;
  const menuStyle = getComputedStyle(el.menu);
  const menuOpacity = menuStyle.opacity;
  const menuTransform = menuStyle.transform;
  clearTimeout(openingTimer);
  openingTimer = null;
  clearTimers();
  slideshowActive = false;
  opening = true;
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
  el.dish.classList.remove("reveal", "category-exit", "category-enter");
  el.idle.hidden = true;
  el.idle.classList.remove("swap");
  el.menu.classList.remove("ui-hidden", "enter");
  // Flush the hidden state so every return restarts the welcome animations,
  // even when returning before the opening transition has finished.
  el.intro.hidden = true;
  el.intro.classList.remove("leaving");
  void el.intro.offsetWidth;
  el.intro.hidden = false;
  el.menu.inert = true;
  el.intro.inert = true;

  const animations = [];
  const finish = () => {
    el.menu.hidden = true;
    animations.forEach((animation) => animation.cancel());
    el.menu.inert = false;
    el.intro.inert = false;
    // Reset the menu after it fades out, keeping the outgoing dish stable.
    currentCategory = categories[0].id;
    currentList = menuItems.filter(
      (item) => item.category === currentCategory
    );
    index = 0;
    slideIndex = 0;
    renderCategories();
    renderMenuItem();
    opening = false;
    returningToIntro = false;
    $("startBtn").focus({ preventScroll: true });
  };
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !el.intro.animate) {
    finish();
    return;
  }
  animations.push(el.menu.animate([
    { opacity: menuOpacity, transform: menuTransform },
    { opacity: 0, transform: "scale(0.985)" },
  ], { duration: 600, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "both" }));
  animations.push(el.intro.animate([
    { opacity: 0 },
    { opacity: 1 },
  ], { duration: 650, easing: "ease-in-out", fill: "both" }));
  Promise.all(animations.map((animation) => animation.finished)).then(finish, finish);
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
  clearTimeout(swapTimer);
  clearTimeout(idleExitTimer);
  clearInterval(slideTimer);
  idleTimer = null;
  swapTimer = null;
  idleExitTimer = null;
  idleReturning = false;
  el.idle.classList.remove("leaving");
  slideTimer = null;
}
function startIdleTimer() {
  // Inactivity starts the slideshow; the welcome screen is only for page load.
  clearTimeout(idleTimer);
  idleTimer = null;
  if (el.menu.hidden || slideshowActive || idleReturning) return;
  idleTimer = setTimeout(() => {
    startSlideshow();
  }, IDLE_MS);
}
function showSlide(first) {
  const list = featured();
  if (!list.length) return;
  const item = list[slideIndex % list.length];
  const apply = () => {
    if (!slideshowActive) return;
    setPhoto(el.idlePhoto, item);
    const backgroundUrl = new URL(item.image, document.baseURI).href;
    el.idle.style.setProperty("--idle-image", `url(${JSON.stringify(backgroundUrl)})`);
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
  if (el.menu.hidden || opening || busy || slideshowActive || idleReturning || !featured().length) {
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
  // Continue from the visible opacity, including a tap during idle entry.
  el.idle.style.setProperty("--idle-exit-opacity", getComputedStyle(el.idle).opacity);
  el.idle.style.setProperty("--idle-exit-duration", `${IDLE_EXIT_MS}ms`);
  slideshowActive = false;
  idleReturning = true;
  lastWake = Date.now();
  clearTimeout(swapTimer);
  clearInterval(slideTimer);
  swapTimer = null;
  slideTimer = null;
  el.idle.classList.add("leaving");
  // Keep the overlay in place until the fade finishes, absorbing extra taps.
  idleExitTimer = setTimeout(() => {
    el.idle.hidden = true;
    el.idle.classList.remove("leaving", "swap");
    idleExitTimer = null;
    idleReturning = false;
    lastWake = Date.now();
    startIdleTimer();
  }, IDLE_EXIT_MS);
}
/* ===== Event handling ===== */
function bindEvents() {
  el.intro.addEventListener("click", openMenu);
  $("slideshowBtn").addEventListener("click", startSlideshow);
  $("homeBtn").addEventListener("click", () => {
    showIntro();
  });
  $("homeBtn").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.stopPropagation();
    }
  });
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
      // Reveal menu controls without reopening the welcome screen.
      el.menu.classList.remove("ui-hidden");
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
    if (idleReturning) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
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
    if (idleReturning) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
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
