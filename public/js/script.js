// control
let book = document.getElementById("books"),
  listView = document.getElementById("listView"),
  gridView = document.getElementById("gridView");

listView.onclick = () => {
  listView.classList.add("active");
  gridView.classList.remove("active");
  book.classList.add("list");
};

gridView.onclick = () => {
  gridView.classList.add("active");
  listView.classList.remove("active");
  book.classList.remove("list");
};

let books = [
  {
    id: 0,
    name: "حكم النبى محمد",
    writer: "ليو تولستوي",
    img: "/images/the_rule_of_the_prophet_Muhammed.jpg",
    link: "the-rule-of-the-prophet-Muhammed",
    publisher: "مؤسسة هنداوي",
  },
  {
    id: 1,
    name: "الآن نفتح الصندوق 1",
    writer: "أحمد خالد توفيق",
    img: "/images/now-we-open-the-box-1.jpg",
    link: "now-we-open-the-box",
    publisher: "دار ليلى",
  },
  {
    id: 2,
    name: "الآن نفتح الصندوق 2",
    writer: "أحمد خالد توفيق",
    img: "/images/now-we-open-the-box-2.jpg",
    link: "now-we-open-the-box-2",
    publisher: "دار ليلى",
  },
  {
    id: 3,
    name: "الآن نفتح الصندوق 3",
    writer: "أحمد خالد توفيق",
    img: "/images/now-we-open-the-box-3.jpg",
    link: "now-we-open-the-box-3",
    publisher: "دار ليلى",
  },
  {
    id: 4,
    name: "لا مكان للملل",
    writer: "أحمد خالد توفيق",
    img: "/images/no_place_for_boredom.jpg",
    link: "no-place-for-boredom",
    publisher: "دار كيان",
  },
  {
    id: 5,
    name: "قتله الوهم",
    writer: "سعاد شاهين الكاشف",
    img: "/images/Illusion_killed_him.jpg",
    link: "Illusion_killed_him",
    publisher: "مؤسسه هنداوى",
  },
  {
    id: 6,
    name: "الدحيح - ما وراء الكواليس",
    writer: "طاهر المعتز بالله",
    img: "/images/AlDuhaih Behind the scenes.jpg",
    link: "AlDuhaih-Behind-the-scenes",
    publisher: "دار الشروق",
  },
  {
    id: 7,
    name: "أكواريل",
    writer: "أحمد خالد توفيق",
    img: "/images/aquarel.jpg",
    link: "aquarel",
    publisher: "دار سما",
  },
  {
    id: 8,
    name: "أول 20 ساعة",
    writer: "جوش كاوفمان",
    img: "/images/first-20-hours.jpg",
    link: "first-20-hours",
    publisher: "مكتبه جرير",
  },
  {
    id: 9,
    name: "www",
    writer: "أحمد خالد توفيق",
    img: "/images/www.jpg",
    link: "www",
    publisher: "دار ليلى",
  },
  {
    id: 10,
    name: "الفيل الازرق",
    writer: "أحمد مراد",
    img: "/images/blue-elephant.jpg",
    link: "blue-elephant",
    publisher: "دار الشروق",
  },
  {
    id: 11,
    name: "البؤساء",
    writer: "فيكتور هوجو",
    img: "/images/les-miserables.jpg",
    link: "les-miserables",
    publisher: "دار الذهبيه",
  },
  {
    id: 12,
    name: "هدنة لالتقاط الأنفاس",
    writer: "جورج اوريل",
    img: "/images/Breathtaking truce.jpg",
    link: "Breathtaking-truce",
    publisher: "مؤسسة هنداوي",
  },
  {
    id: 13,
    name: "أيام في بورما",
    writer: "جورج اوريل",
    img: "/images/days in burma.jpg",
    link: "days-in-burma",
    publisher: "مؤسسة هنداوي",
  },
  {
    id: 14,
    name: "موت إيفان إيليتش",
    writer: "ليو تولستوي",
    img: "/images/The death of Ivan Ilyich.jpg",
    link: "The-death-of-Ivan-Ilyich",
    publisher: "قصر الثقافة و الهيئة العامة للكتاب",
  },
  {
    id: 15,
    name: "يوتوبيا",
    writer: "أحمد خالد توفيق",
    img: "/images/Utopia.jpg",
    link: "utopia",
    publisher: "دار الشروق",
  },
  {
    id: 16,
    name: "فى ممر الفئران",
    writer: "أحمد خالد توفيق",
    img: "/images/In the rat lane.jpg",
    link: "in-the-rat-lane",
    publisher: "دار ليلى",
  },
  {
    id: 17,
    name: "الخيميائى",
    writer: "باولو كويلو",
    img: "/images/the-alchemist.jpg",
    link: "the-alchemist",
    publisher: "دار المطبوعات",
  },
  {
    id: 18,
    name: "السنجه",
    writer: "أحمد خالد توفيق",
    img: "/images/Singa.jpg",
    link: "singa",
    publisher: "دار المطبوعات",
  },
];

let num = document.getElementById("num");
num.innerHTML = books.length;

books.forEach((book) => {
  let flex = document.getElementById("flex");
  let box = document.createElement("div");
  box.className = "box";
  let a = document.createElement("a");
  a.href = `/book/${book.link}`;
  let img = document.createElement("img");
  img.height = "330";
  img.width = "48";
  img.alt = book.link;
  img.src = book.img;

  let top = document.createElement("div");
  top.className = "top";
  let topText = document.createTextNode(book.name);
  top.appendChild(topText);

  let bottom = document.createElement("div");
  bottom.className = "bottom";
  let bottomText = document.createTextNode(book.writer);
  bottom.appendChild(bottomText);

  a.appendChild(img);
  a.appendChild(top);
  a.appendChild(bottom);
  box.appendChild(a);
  flex.appendChild(box);
});