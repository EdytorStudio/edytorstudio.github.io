/*
  СПИСОК ПРОЕКТІВ. Щоб додати проект - скопіюйте блок { ... }, поставте кому між блоками.

  name        - назва проекту (рядок або об'єкт з мовами)
  github      - посилання на репозиторій (з нього автоматично беруться Релізи і README)
  icon        - посилання на іконку/зображення (https://... або файл у репо, напр. "img/app.png")
                Будь-який розмір: зображення саме вміститься в рамку без розтягування.
  description - короткий опис. Рядок (одна мова для всіх) АБО об'єкт з мовами:
                { en: "...", uk: "...", ru: "...", de: "...", es: "...", pl: "..." }
                Якщо потрібної мови немає, показується en, потім uk.
  site        - посилання на сайт проекту. Якщо порожньо "" - кнопка відкриє README.md (Markdown)
  tags        - необов'язково: слова для пошуку
*/
window.PROJECTS = [
  {
    name: "Приклад проекту",
    github: "https://github.com/your-username/your-repo",
    icon: "https://via.placeholder.com/600x300.png",
    description: {
      en: "A short description of what this project does.",
      uk: "Короткий опис того, що робить цей проект.",
      ru: "Краткое описание того, что делает этот проект."
    },
    site: "https://your-username.github.io/your-repo/",
    tags: ["example", "tool"]
  },
  {
    name: { en: "Project without a site", uk: "Проект без сайту", ru: "Проект без сайта" },
    github: "https://github.com/your-username/another-repo",
    icon: "",
    description: {
      en: "No site is set, so the repository README.md opens.",
      uk: "Сайту немає, тому відкриється README.md цього репозиторію.",
      ru: "Сайта нет, поэтому откроется README.md репозитория."
    },
    site: "",
    tags: []
  }
];
