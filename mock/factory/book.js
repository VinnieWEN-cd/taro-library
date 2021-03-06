var Mock = require("mockjs");

var Random = Mock.Random;

// 七牛云图书封面外链
const images = [
  "https://i.loli.net/2021/01/18/BMGUTWkwy5vJZse.jpg",
  "https://i.loli.net/2021/01/18/1UDabn7I6WAXkte.jpg",
  "https://i.loli.net/2021/01/18/Fz5d16ZsmXHAyqI.jpg",
  "https://i.loli.net/2021/01/18/kPAFWOG4vhSVXb1.jpg",
  "https://i.loli.net/2021/01/18/lhPs5tZ1qFGczQU.jpg",
  "https://i.loli.net/2021/01/18/EsGWpS4KZnP9uOT.jpg",
  "https://i.loli.net/2021/01/18/GjVI2QkHuREF7YN.jpg",
  "https://i.loli.net/2021/01/18/gzq4ZAS7PN5tLmh.jpg",
  "https://i.loli.net/2021/01/18/H8cb2If5tm7Rk4e.jpg",
  "https://i.loli.net/2021/01/18/Y5RCh3neMAGPsFz.jpg",
  "https://i.loli.net/2021/01/18/no1ELFz7gIBq8Tk.jpg",
  "https://i.loli.net/2021/01/18/NyHVZk4evETGtJU.jpg",
  "https://i.loli.net/2021/01/18/2Fs7xYmaKr9NBid.jpg",
  "https://i.loli.net/2021/01/18/izYXkjCM7x4S6U9.jpg",
  "https://i.loli.net/2021/01/18/y7rtipekn3SwlhI.png",
  "https://i.loli.net/2021/01/18/LSFhuWVlMGcAUOB.png",
  "https://i.loli.net/2021/01/18/9F3ND7KRdnuLxaX.png",
  "https://i.loli.net/2021/01/18/kAYTchObipDK7dQ.jpg",
  "https://i.loli.net/2021/01/18/D4JfBlFSIpdVcbi.png",
  "https://i.loli.net/2021/01/18/EXvgjNM9VpBIL6R.png"
];

const titles = Random.shuffle([
  "Brother's Rainbow",
  "A Dream of Justice",
  "A Marriage Collection",
  "Midwife and Light",
  "The Trophy Failure",
  "Destiny's Cut",
  "Rakehell's Fog",
  "The Ragged ",
  "Thread",
  "The Thug Chaser",
  "Church in the Glass",
  "Destiny's Hero",
  "Cat in the Underworld",
  "Triumph of the Empire",
  "Sapphire Raiders",
  "The Time of War",
  "冬天的早班飞机",
  "我们始终没有牵手旅行",
  "不想告别的夏天",
  "最初的爱情",
  "最后的仪式",
  "十一种孤独",
  "一部法国小说",
  "还乡之谜",
  "地下时光",
  "给樱桃以性别",
  "天使与昆虫",
  "在路上",
  "绿皮书",
  "老人与海",
  "追风筝的人",
  "小王子",
  "百年孤独",
  "人类简史",
  "时间简史",
  "心有林夕",
  "麦田里的守望者"
]);

const authors = (function() {
  let t = ["[哥]加西亚·马尔克斯", "[英]毛姆", "[法]圣-埃克苏佩里"];
  for (let i = 0; i < 10; i++) t.push(Random.name());
  return Random.shuffle(t);
})();

// 包含mock占位符的数据模板
const BasicBookSeed = {
  id: "@increment",
  "title|+1": titles,
  isbn: "@natural(9781782910284, 9981782910284)",
  publisher: "上海人民出版社",
  pubdate: "@date",
  "author|+1": authors,
  translator: "@cname",
  binding: "精装",
  price: "@float(60, 100, 2, 2)",
  pages: "@integer(60, 100)",
  words: "@integer(60, 100)",
  tags: ["小说", "文学", "名著"],
  score: "@float(0, 10, 1, 1)",
  review_num: "@integer(60, 100)",
  "image|+1": images,
  introduction:
    "12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。\n成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？\n故事如此残忍而又美丽，作者以温暖细腻的笔法勾勒人性的本质与救赎，读来令人荡气回肠。"
};

const bookSeed = {
  ...BasicBookSeed,
  "related_books|5": [BasicBookSeed]
};

module.exports = {
  images,
  titles,
  authors,
  bookSeed,
  randomOne: () => Mock.mock(bookSeed),
  randomMulti: (number = 6) => {
    let seeds = [];
    for (let i = 0; i < number; i++) seeds.push(bookSeed);
    return Mock.mock(seeds);
  }
};
