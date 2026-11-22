/*
  Project list.
  name: project name (string or localized object)
  github: repository URL
  icon: image URL, or empty string to show the first letter
  description: localized project descriptions
  site: project page; when set, the card's main button opens it
  tags: searchable keywords
*/
window.PROJECTS = [
  {
    name: "LeanKeyboardF",
    github: "https://github.com/LeanKeyboardF/LeanKeyboardF",
    icon: "https://raw.githubusercontent.com/LeanKeyboardF/LeanKeyboardF/master/img/leankeykeyboard_logo_small.png",
    description: {
      en: "Fork of LeanKeyboard: an Android TV keyboard that works with any remote without root or Google services. Adds a floating keyboard, themes, clipboard history and word suggestions.",
      uk: "Форк LeanKeyboard: клавіатура для Android TV, що працює з будь-яким пультом без root і сервісів Google. Має плаваючу клавіатуру, теми, історію буфера обміну та підказки слів.",
      ru: "Форк LeanKeyboard: клавиатура для Android TV, работающая с любым пультом без root и сервисов Google. Есть плавающая клавиатура, темы, история буфера обмена и подсказки слов.",
      de: "Fork von LeanKeyboard: Android-TV-Tastatur für jede Fernbedienung, ohne Root oder Google-Dienste. Mit schwebender Tastatur, Designs, Zwischenablage-Verlauf und Wortvorschlägen.",
      es: "Fork de LeanKeyboard: teclado para Android TV compatible con cualquier mando, sin root ni servicios de Google. Incluye teclado flotante, temas, historial del portapapeles y sugerencias.",
      pl: "Fork LeanKeyboard: klawiatura Android TV działająca z każdym pilotem, bez roota i usług Google. Oferuje pływającą klawiaturę, motywy, historię schowka i podpowiedzi."
    },
    site: "https://leankeyboardf.github.io/",
    tags: ["android-tv", "keyboard", "leankeyboard", "ime", "клавіатура", "клавиатура"]
  },
  {
    name: "altair8800-libretro",
    github: "https://github.com/AmakerGame/altair8800-libretro",
    icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Altair_8800,_Smithsonian_Museum.jpg?width=600",
    description: {
      en: "Libretro core for RetroArch emulating the Altair 8800 (Intel 8080, 2 MHz) with a simulated front panel. Runs on Windows, Linux and macOS.",
      uk: "Ядро Libretro для RetroArch, що емулює Altair 8800 (Intel 8080, 2 МГц) із симуляцією передньої панелі. Працює у Windows, Linux і macOS.",
      ru: "Ядро Libretro для RetroArch, эмулирующее Altair 8800 (Intel 8080, 2 МГц) с симуляцией передней панели. Работает в Windows, Linux и macOS.",
      de: "Libretro-Core für RetroArch zur Emulation des Altair 8800 (Intel 8080, 2 MHz) mit simuliertem Frontpanel. Läuft unter Windows, Linux und macOS.",
      es: "Núcleo Libretro para RetroArch que emula el Altair 8800 (Intel 8080, 2 MHz) con un panel frontal simulado. Funciona en Windows, Linux y macOS.",
      pl: "Rdzeń Libretro dla RetroArch emulujący Altair 8800 (Intel 8080, 2 MHz) z symulowanym panelem przednim. Działa w Windows, Linux i macOS."
    },
    site: "",
    tags: ["libretro", "retroarch", "emulator", "altair8800", "intel8080", "c", "емулятор", "эмулятор"]
  },
  {
    name: "mrowserF",
    github: "https://github.com/AmakerGame/mrowserF",
    icon: "https://raw.githubusercontent.com/AmakerGame/mrowserF/main/fastlane/metadata/android/en-US/images/icon.png",
    description: {
      en: "Fork of mrowser, an Android TV browser that finds HLS streams on webpages and plays them in a native player with synced audio and subtitles. Controlled with a D-pad cursor.",
      uk: "Форк mrowser — браузера для Android TV, що знаходить HLS-потоки на вебсторінках і відтворює їх у нативному плеєрі із синхронізованими звуком і субтитрами. Керування курсором із пульта.",
      ru: "Форк mrowser — браузера для Android TV, который находит HLS-потоки на веб-страницах и воспроизводит их в нативном плеере с синхронными звуком и субтитрами. Управление курсором с пульта.",
      de: "Fork von mrowser, einem Android-TV-Browser, der HLS-Streams auf Webseiten findet und mit synchronem Ton und Untertiteln nativ abspielt. Bedienung per D-Pad-Cursor.",
      es: "Fork de mrowser, un navegador para Android TV que detecta transmisiones HLS en páginas y las reproduce en un reproductor nativo con audio y subtítulos sincronizados. Control con cursor direccional.",
      pl: "Fork mrowsera, przeglądarki Android TV, która wyszukuje strumienie HLS na stronach i odtwarza je w natywnym odtwarzaczu z synchronizowanym dźwiękiem i napisami. Sterowanie kursorem z pilota."
    },
    site: "",
    tags: ["android-tv", "browser", "hls", "exoplayer", "media3", "subtitles", "браузер"]
  },
  {
    name: "AndroidFS-F",
    github: "https://github.com/AmakerGame/AndroidFS-F",
    icon: "https://github.com/AmakerGame/AndroidFS-F/blob/master/assets/icon.png",
    description: {
      en: "Fork of AndroidFS for Windows: mounts an Android device over ADB as a drive in Explorer, letting you work with files without MTP. Alpha.",
      uk: "Форк AndroidFS для Windows: підключає Android-пристрій через ADB як диск у Провіднику, щоб працювати з файлами без MTP. Альфа-версія.",
      ru: "Форк AndroidFS для Windows: подключает Android-устройство через ADB как диск в Проводнике, позволяя работать с файлами без MTP. Альфа-версия.",
      de: "Fork von AndroidFS für Windows: bindet ein Android-Gerät über ADB als Laufwerk im Explorer ein und ermöglicht Dateizugriff ohne MTP. Alpha.",
      es: "Fork de AndroidFS para Windows: monta un dispositivo Android mediante ADB como unidad en el Explorador para gestionar archivos sin MTP. Versión alfa.",
      pl: "Fork AndroidFS dla Windows: montuje urządzenie z Androidem przez ADB jako dysk w Eksploratorze i umożliwia obsługę plików bez MTP. Wersja alfa."
    },
    site: "",
    tags: ["windows", "adb", "dokan", "android", "mtp", "drive", "explorer", "rust"]
  },
  {
    name: "LedRemote-X96-Max-Plus-Ultra",
    github: "https://github.com/AmakerGame/LedRemote-X96-Max-Plus-Ultra",
    icon: "",
    description: {
      en: "Android TV app (Android 11+) for controlling LED indicators and the VFD display on boxes with the Amlogic meson-vfd driver, such as X96 Max Plus Ultra. Requires root.",
      uk: "Застосунок для Android TV (Android 11+) для керування LED-індикаторами та VFD-дисплеєм приставок із драйвером Amlogic meson-vfd, наприклад X96 Max Plus Ultra. Потрібен root.",
      ru: "Приложение для Android TV (Android 11+) для управления LED-индикаторами и VFD-дисплеем приставок с драйвером Amlogic meson-vfd, например X96 Max Plus Ultra. Нужен root.",
      de: "Android-TV-App (ab Android 11) zur Steuerung von LED-Anzeigen und VFD-Display bei Boxen mit Amlogic-meson-vfd-Treiber, etwa X96 Max Plus Ultra. Root erforderlich.",
      es: "Aplicación para Android TV (Android 11+) que controla los indicadores LED y la pantalla VFD de dispositivos con el controlador Amlogic meson-vfd, como X96 Max Plus Ultra. Requiere root.",
      pl: "Aplikacja Android TV (Android 11+) do sterowania diodami LED i wyświetlaczem VFD w urządzeniach ze sterownikiem Amlogic meson-vfd, np. X96 Max Plus Ultra. Wymaga roota."
    },
    site: "",
    tags: ["android-tv", "led", "vfd", "meson-vfd", "amlogic", "x96-max-plus-ultra", "root"]
  },
  {
    name: "DhizukuF",
    github: "https://github.com/AmakerGame/DhizukuF",
    icon: "https://github.com/AmakerGame/DhizukuF/blob/main/app/src/main/res/drawable-xxhdpi/banner_dhizukuf_orig.png",
    description: {
      en: "Fork of Dhizuku with DISH integration and additional features.",
      uk: "Форк Dhizuku з інтеграцією DISH та додатковими функціями.",
      ru: "Форк Dhizuku с интеграцией DISH и дополнительными функциями.",
      de: "Fork von Dhizuku mit DISH-Integration und zusätzlichen Funktionen.",
      es: "Fork de Dhizuku con integración de DISH y funciones adicionales.",
      pl: "Fork Dhizuku z integracją DISH i dodatkowymi funkcjami."
    },
    site: "",
    tags: ["android", "dhizuku", "dish"]
  },
  {
    name: "EdUI",
    github: "",
    icon: "",
    description: {
      en: "Custom shell and launcher for TV boxes, focused on maximum stability and ease of use. Ukraine Region: a version for Ukrainian users and localization. General: a universal version for worldwide use. Both editions prioritize convenient navigation and reliable everyday use.",
      uk: "Кастомна оболонка та пусковик для TV-боксів із фокусом на максимальну стабільність і зручність. Український регіон — версія для користувачів України з українською локалізацією. General — універсальна версія для загального використання у світі. Обидві версії орієнтовані на зручну навігацію та надійну щоденну роботу.",
      ru: "Кастомная оболочка и лаунчер для TV-боксов с упором на максимальную стабильность и удобство. Украинский регион — версия для пользователей Украины с украинской локализацией. General — универсальная версия для использования во всём мире. Обе версии ориентированы на удобную навигацию и надёжную повседневную работу.",
      de: "Benutzerdefinierte Oberfläche und Launcher für TV-Boxen mit Fokus auf Stabilität und einfache Bedienung. Ukraine Region: eine Version für Nutzer in der Ukraine mit ukrainischer Lokalisierung. General: eine universelle Version für den weltweiten Einsatz. Beide Editionen setzen auf bequeme Navigation und zuverlässigen Alltagseinsatz.",
      es: "Interfaz y lanzador personalizados para TV boxes, centrados en la estabilidad y la facilidad de uso. Ukraine Region: versión para usuarios de Ucrania con localización ucraniana. General: versión universal para uso global. Ambas priorizan una navegación cómoda y un funcionamiento fiable en el día a día.",
      pl: "Niestandardowa powłoka i launcher dla TV-boxów, nastawione na stabilność i wygodę. Ukraine Region: wersja dla użytkowników w Ukrainie z ukraińską lokalizacją. General: uniwersalna wersja do użytku na całym świecie. Obie wersje stawiają na wygodną nawigację i niezawodne działanie na co dzień."
    },
    site: "https://edytorstudio.github.io/edui.html",
    tags: ["edui", "android-tv", "tv-box", "launcher", "shell", "ua", "ukraine", "global", "оболонка", "пусковик"]
  }
];
