/*
  СПИСОК ПРОЄКТІВ

  name        - назва (рядок або об'єкт з мовами)
  github      - посилання на репозиторій (звідси беруться Релізи і README)
  icon        - посилання на зображення; порожньо "" - замість іконки буде перша літера назви (щоб картки були однакові)
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
      en: "Fork of LeanKeyboard: an on-screen keyboard for Android TV that works with any remote, needs no root or Google services, and adds a floating keyboard, themes, clipboard history and word suggestions.",
      uk: "Форк LeanKeyboard: екранна клавіатура для Android TV, що працює з будь-яким пультом без root і сервісів Google. Додано плаваючу клавіатуру, теми, історію буфера обміну та підказки слів.",
      ru: "Форк LeanKeyboard: экранная клавиатура для Android TV, работающая с любым пультом без root и сервисов Google. Добавлены плавающая клавиатура, темы, история буфера обмена и подсказки слов.",
      de: "Fork von LeanKeyboard: Bildschirmtastatur für Android TV, die mit jeder Fernbedienung funktioniert, ohne Root und Google-Dienste. Neu: schwebende Tastatur, Themes, Zwischenablage-Verlauf und Wortvorschläge.",
      es: "Fork de LeanKeyboard: teclado en pantalla para Android TV que funciona con cualquier mando, sin root ni servicios de Google. Añade teclado flotante, temas, historial del portapapeles y sugerencias de palabras.",
      pl: "Fork LeanKeyboard: klawiatura ekranowa dla Android TV działająca z każdym pilotem, bez roota i usług Google. Dodano pływającą klawiaturę, motywy, historię schowka i podpowiedzi słów."
    },
    site: "https://leankeyboardf.github.io/",
    tags: ["android-tv", "keyboard", "leankeyboard", "ime", "клавіатура", "клавиатура"]
  },
  {
    name: "altair8800-libretro",
    github: "https://github.com/AmakerGame/altair8800-libretro",
    icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Altair_8800,_Smithsonian_Museum.jpg?width=600",
    description: {
      en: "Libretro core for RetroArch that emulates the Altair 8800 (Intel 8080 at 2 MHz) with a simulated front panel of switches and LEDs. Runs on Windows, Linux and macOS.",
      uk: "Ядро Libretro для RetroArch, що емулює Altair 8800 (Intel 8080, 2 МГц) із симульованою передньою панеллю з перемикачами та світлодіодами. Працює на Windows, Linux і macOS.",
      ru: "Ядро Libretro для RetroArch, эмулирующее Altair 8800 (Intel 8080, 2 МГц) с имитацией передней панели с переключателями и светодиодами. Работает на Windows, Linux и macOS.",
      de: "Libretro-Core für RetroArch, der den Altair 8800 (Intel 8080, 2 MHz) mit simuliertem Frontpanel aus Schaltern und LEDs emuliert. Läuft unter Windows, Linux und macOS.",
      es: "Núcleo de Libretro para RetroArch que emula el Altair 8800 (Intel 8080 a 2 MHz) con un panel frontal simulado de interruptores y LED. Funciona en Windows, Linux y macOS.",
      pl: "Rdzeń Libretro dla RetroArch emulujący Altair 8800 (Intel 8080, 2 MHz) z symulowanym panelem przednim z przełącznikami i diodami LED. Działa w systemach Windows, Linux i macOS."
    },
    site: "",
    tags: ["libretro", "retroarch", "emulator", "altair8800", "intel8080", "c", "емулятор", "эмулятор"]
  },
  {
    name: "mrowserF",
    github: "https://github.com/AmakerGame/mrowserF",
    icon: "https://raw.githubusercontent.com/AmakerGame/mrowserF/main/fastlane/metadata/android/en-US/images/icon.png",
    description: {
      en: "Fork of mrowser, a sideloaded Android TV browser: it finds the HLS stream on a page and plays it in a native player with synced audio and subtitles, driven by a D-pad cursor.",
      uk: "Форк mrowser, браузера для Android TV: знаходить на сторінці HLS-потік і відтворює його в нативному плеєрі з синхронним звуком і субтитрами. Керування курсором з пульта.",
      ru: "Форк mrowser, браузера для Android TV: находит на странице HLS-поток и воспроизводит его в нативном плеере с синхронными звуком и субтитрами. Управление курсором с пульта.",
      de: "Fork von mrowser, einem Android-TV-Browser: Er erkennt den HLS-Stream einer Seite und spielt ihn in einem nativen Player mit synchronem Ton und Untertiteln ab. Bedienung per Fernbedienungs-Cursor.",
      es: "Fork de mrowser, un navegador para Android TV: detecta el flujo HLS de una página y lo reproduce en un reproductor nativo con audio y subtítulos sincronizados. Se maneja con un cursor desde el mando.",
      pl: "Fork mrowser, przeglądarki dla Android TV: wykrywa strumień HLS na stronie i odtwarza go w natywnym odtwarzaczu z zsynchronizowanym dźwiękiem i napisami. Sterowanie kursorem z pilota."
    },
    site: "",
    tags: ["android-tv", "browser", "hls", "exoplayer", "media3", "subtitles", "браузер"]
  },
  {
    name: "AndroidFS-F",
    github: "https://github.com/AmakerGame/AndroidFS-F",
    icon: "",
    description: {
      en: "Fork of AndroidFS for Windows: mounts an Android device over ADB as a drive in Explorer (Q: by default), so you can work with its files like local ones, without MTP. Alpha.",
      uk: "Форк AndroidFS для Windows: підключає Android-пристрій через ADB як диск у Провіднику (за замовчуванням Q:), тож з файлами можна працювати як з локальними, без MTP. Альфа-версія.",
      ru: "Форк AndroidFS для Windows: подключает Android-устройство через ADB как диск в Проводнике (по умолчанию Q:), так что с файлами можно работать как с локальными, без MTP. Альфа-версия.",
      de: "Fork von AndroidFS für Windows: bindet ein Android-Gerät über ADB als Laufwerk im Explorer ein (standardmäßig Q:), sodass sich Dateien wie lokale bearbeiten lassen, ohne MTP. Alpha-Version.",
      es: "Fork de AndroidFS para Windows: monta un dispositivo Android mediante ADB como unidad en el Explorador (Q: por defecto), para trabajar con sus archivos como si fueran locales, sin MTP. Versión alfa.",
      pl: "Fork AndroidFS dla Windows: montuje urządzenie z Androidem przez ADB jako dysk w Eksploratorze (domyślnie Q:), dzięki czemu pliki obsługuje się jak lokalne, bez MTP. Wersja alfa."
    },
    site: "",
    tags: ["windows", "adb", "dokan", "android", "mtp", "drive", "explorer", "rust"]
  },
  {
    name: "LedRemote-X96-Max-Plus-Ultra",
    github: "https://github.com/AmakerGame/LedRemote-X96-Max-Plus-Ultra",
    icon: "",
    description: {
      en: "Android TV app (Android 11+) for controlling the LED indicators and VFD display of boxes with the meson-vfd (Amlogic) driver, such as the X96 Max Plus Ultra. Needs root.",
      uk: "Застосунок для Android TV (Android 11+) для керування LED-індикаторами та VFD-дисплеєм приставок з драйвером meson-vfd (Amlogic), як-от X96 Max Plus Ultra. Потрібен root.",
      ru: "Приложение для Android TV (Android 11+) для управления LED-индикаторами и VFD-дисплеем приставок с драйвером meson-vfd (Amlogic), например X96 Max Plus Ultra. Нужен root.",
      de: "Android-TV-App (ab Android 11) zur Steuerung der LED-Anzeigen und des VFD-Displays von Boxen mit meson-vfd-Treiber (Amlogic), z. B. X96 Max Plus Ultra. Benötigt Root.",
      es: "Aplicación para Android TV (Android 11+) que controla los indicadores LED y la pantalla VFD de cajas con el controlador meson-vfd (Amlogic), como la X96 Max Plus Ultra. Requiere root.",
      pl: "Aplikacja na Android TV (Android 11+) do sterowania diodami LED i wyświetlaczem VFD w przystawkach ze sterownikiem meson-vfd (Amlogic), np. X96 Max Plus Ultra. Wymaga roota."
    },
    site: "",
    tags: ["android-tv", "led", "vfd", "meson-vfd", "amlogic", "x96-max-plus-ultra", "root"]
  }
];
