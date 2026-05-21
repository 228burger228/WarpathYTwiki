// PWA инициализация — регистрация Service Worker и установка приложения
class PWAManager {
  constructor() {
    this.deferredPrompt = null;
    this.init();
  }

  init() {
    this.registerServiceWorker();
    this.setupInstallPrompt();
    this.createInstallButton();
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('[PWA] Service Worker registered:', registration);
            
            // Проверяем обновления каждые 6 часов
            setInterval(() => {
              registration.update();
            }, 6 * 60 * 60 * 1000);
          })
          .catch((error) => {
            console.warn('[PWA] Service Worker registration failed:', error);
          });

        // Слушаем обновления
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          console.log('[PWA] New Service Worker activated');
          this.showUpdateNotification();
        });
      });
    }
  }

  setupInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      console.log('[PWA] Install prompt ready');
      this.showInstallButton();
    });

    window.addEventListener('appinstalled', () => {
      console.log('[PWA] App installed');
      this.deferredPrompt = null;
      this.hideInstallButton();
      this.showInstallNotification();
    });
  }

  createInstallButton() {
    const navRight = document.querySelector('.nav-right');
    if (!navRight) return;

    const btn = document.createElement('button');
    btn.id = 'pwa-install-btn';
    btn.className = 'pwa-install-btn';
    btn.innerHTML = '⬇ Установить';
    btn.style.display = 'none';
    btn.title = 'Установить приложение на устройство';

    btn.addEventListener('click', () => this.promptInstall());

    navRight.appendChild(btn);
  }

  showInstallButton() {
    const btn = document.getElementById('pwa-install-btn');
    if (btn) btn.style.display = 'flex';
  }

  hideInstallButton() {
    const btn = document.getElementById('pwa-install-btn');
    if (btn) btn.style.display = 'none';
  }

  promptInstall() {
    if (!this.deferredPrompt) return;

    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('[PWA] User accepted install');
      } else {
        console.log('[PWA] User dismissed install');
      }
      this.deferredPrompt = null;
    });
  }

  showInstallNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Warpath Guide установлен', {
        body: 'Приложение успешно установлено. Теперь вы можете использовать его офлайн.',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%23c8961c" width="192" height="192"/><text x="50%" y="50%" font-size="120" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="%23000" font-family="Arial">⊕</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="%23c8961c" width="96" height="96"/><text x="50%" y="50%" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="%23000">⊕</text></svg>'
      });
    }
  }

  showUpdateNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Warpath Guide обновлён', {
        body: 'Доступна новая версия приложения. Перезагрузите страницу.',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%23c8961c" width="192" height="192"/><text x="50%" y="50%" font-size="120" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="%23000" font-family="Arial">⊕</text></svg>'
      });
    }
  }
}

// Инициализация при загрузке
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PWAManager();
  });
} else {
  new PWAManager();
}

// Запрашиваем разрешение на уведомления
if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission();
}
