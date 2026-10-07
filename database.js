/*
  СПИСОК ПРОЄКТІВ

  name        - назва (рядок або об'єкт з мовами)
  github      - посилання на репозиторій (звідси беруться Релізи і README)
  icon        - посилання на зображення; порожньо "" - блок з іконкою не показується
  description - об'єкт { en, uk, ru, de, es, pl }; якщо мови немає, береться en, потім uk
  site        - сайт проєкту; порожньо "" - кнопка відкриє README.md
  tags        - слова для пошуку
*/
window.PROJECTS = [
  {
    name: "LeanKeyboardF",
    github: "https://github.com/LeanKeyboardF/LeanKeyboardF",
    icon: "https://raw.githubusercontent.com/LeanKeyboardF/LeanKeyboardF/master/img/leankeykeyboard_logo_small.png",
    description: {
      en: "On-screen keyboard for Android TV with wide language support and flexible settings.",
      uk: "Екранна клавіатура для Android TV з широкою підтримкою мов і гнучкими налаштуваннями.",
      ru: "Экранная клавиатура для Android TV с широкой поддержкой языков и гибкими настройками."
    },
    site: "https://leankeyboardf.github.io/",
    tags: ["android-tv", "keyboard", "utility", "клавіатура", "клавиатура"]
  },
  {
    name: "altair8800-libretro",
    github: "https://github.com/AmakerGame/altair8800-libretro",
    icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Altair_8800,_Smithsonian_Museum.jpg?width=600",
    description: {
      en: "Libretro core that emulates the legendary Altair 8800 computer in RetroArch.",
      uk: "Ядро Libretro, що емулює легендарний комп'ютер Altair 8800 у RetroArch.",
      ru: "Ядро Libretro, эмулирующее легендарный компьютер Altair 8800 в RetroArch."
    },
    site: "",
    tags: ["libretro", "emulator", "retroarch", "c", "емулятор", "эмулятор"]
  },
  {
    name: "mrowserF",
    github: "https://github.com/AmakerGame/mrowserF",
    icon: "https://raw.githubusercontent.com/AmakerGame/mrowserF/main/fastlane/metadata/android/en-US/images/icon.png",
    description: {
      en: "Web browser for Android TV, built for comfortable navigation with a remote.",
      uk: "Веб-браузер для Android TV, створений для зручної навігації з пульта.",
      ru: "Веб-браузер для Android TV, созданный для удобной навигации с пульта."
    },
    site: "",
    tags: ["android-tv", "browser", "android", "браузер"]
  },
  {
    name: "AndroidFS-F",
    github: "https://github.com/AmakerGame/AndroidFS-F",
    icon: "",
    description: {
      en: "Fullscreen utility and interface for Android devices.",
      uk: "Повноекранна утиліта та інтерфейс для пристроїв Android.",
      ru: "Полноэкранная утилита и интерфейс для устройств Android."
    },
    site: "",
    tags: ["android", "utility", "fullscreen"]
  },
  {
    name: "LedRemote-X96-Max-Plus-Ultra",
    github: "https://github.com/AmakerGame/LedRemote-X96-Max-Plus-Ultra",
    icon: "",
    description: {
      en: "Utility for setting up and controlling the LED display and remotes of X96 Max Plus Ultra TV boxes.",
      uk: "Утиліта для налаштування й керування LED-дисплеєм та пультами ТВ-приставок X96 Max Plus Ultra.",
      ru: "Утилита для настройки и управления LED-дисплеем и пультами ТВ-приставок X96 Max Plus Ultra."
    },
    site: "",
    tags: ["android-tv", "led", "x96-max-plus-ultra", "utility", "vfd"]
  }
];
