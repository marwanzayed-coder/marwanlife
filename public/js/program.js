let programs = [
  {
    name: "Fences",
    link: "https://stardock.com/products/fences/",
    description: "تنظيم سطح المكتب فى الكمبيوتر",
  },
  {
    name: "Notepad++",
    link: "https://notepad-plus-plus.org/",
    description: "محرر نصوص",
  },
  {
    name: "OBS Studio",
    link: "https://obsproject.com/",
    description: "تصوير الشاشة",
  },
  {
    name: "Notion",
    link: "https://notion.so",
    description: "تنظيم الوقت وتدوين الملاحظات",
  },
  {
    name: "LibreOffice",
    link: "https://www.libreoffice.org/",
    description: "مجموعه برامج Office (بديل Microsoft Office)",
  },
  {
    name: "Camtasia Studio",
    link: "https://techsmith.com/video-editor.html",
    description: "تعديل على الفيديوهات",
  },
  {
    name: "Brave",
    link: "https://brave.com/",
    description: "متصفح انترنت",
  },
  {
    name: "Microsoft Edge",
    link: "https://www.microsoft.com/en-us/edge",
    description: "متصفح انترنت",
  },
  {
    name: "VirtualBox",
    link: "https://www.virtualbox.org/",
    description: "منشئ انظمة وهمية",
  },
  {
    name: "Beeftext",
    link: "https://beeftext.org/",
    description: "تكملة الكلام",
  },
  {
    name: "Sublime Text 3",
    link: "http://www.sublimetext.com/3",
    description: "محرر نصوص برمجية",
  },
  {
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    description: "محرر نصوص برمجية",
  },
  {
    name: "Brackets",
    link: "https://brackets.io/",
    description: "محرر نصوص برمجية",
  },
  {
    name: "Simple Sticky Notes",
    link: "https://www.simplestickynotes.com/",
    description: "لعمل ملاحظات على سطح المكتب",
  },
];
let count = document.getElementById("count");
count.innerHTML = programs.length;

programs.forEach((program) => {
  let list = document.getElementById("program");
  let box = document.createElement("a");
  box.className = "box";
  box.target = "_blank";
  box.href = program.link;

  let top = document.createElement("div");
  top.className = "top";
  let topText = document.createTextNode(program.name);
  top.appendChild(topText);

  let bottom = document.createElement("div");
  bottom.dir = "rtl";
  bottom.className = "bottom";
  let bottomText = document.createTextNode(program.description);
  bottom.appendChild(bottomText);

  box.appendChild(top);
  box.appendChild(bottom);
  list.appendChild(box);
});
