// main.js

let translations = {};
let currentLang = 'pt-br';

async function loadTranslations(lang) {
  try {
    const response = await fetch(`./assets/locales/${lang}.json`);
    translations = await response.json();
    applyTranslations(lang);
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });

  const inputs = ['fi-nome', 'fi-email', 'fi-tel', 'fi-emp', 'fi-msg', 'fh-nome', 'fh-email', 'fh-tel', 'fh-hosp', 'fh-msg'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    const translationKey = "pl-" + id.split('-')[1];
    if (el && translations[translationKey]) {
      el.placeholder = translations[translationKey];
    }
  });

  document.querySelectorAll('[data-i18n-btn]').forEach(btn => {
    const key = btn.getAttribute('data-i18n-btn');
    if (translations[key]) {
      btn.innerText = translations[key];
    }
  });

  // Update UI for language buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.remove('bg-brand-purple/5', 'text-brand-purple');
    btn.classList.add('text-gray-600');
    const check = btn.querySelector('.ph-check');
    if (check) check.remove();
  });

  const activeBtn = document.querySelector(`[data-lang-btn="${lang}"]`);
  if (activeBtn) {
    activeBtn.classList.add('bg-brand-purple/5', 'text-brand-purple');
    activeBtn.classList.remove('text-gray-600');
    if (!activeBtn.querySelector('.ph-check')) {
      activeBtn.insertAdjacentHTML('beforeend', '<i class="ph-bold ph-check ml-auto text-brand-purple text-xs"></i>');
    }
    const mainLangText = document.getElementById('current-lang-text');
    const mainLangIcon = document.getElementById('current-lang-icon');
    if (mainLangText) mainLangText.innerText = activeBtn.getAttribute('data-lang-label');
    if (mainLangIcon) mainLangIcon.src = activeBtn.getAttribute('data-lang-flag');
  }
}

window.changeLanguage = function(lang) {
  currentLang = lang;
  loadTranslations(lang);
};

// Form selection logic
window.selectForm = function(tipo) {
  const invForm = document.getElementById('investidor-form');
  const hosForm = document.getElementById('hospital-form');
  const btnInv = document.getElementById('btn-select-investidor');
  const btnHos = document.getElementById('btn-select-hospital');

  if (invForm && hosForm && btnInv && btnHos) {
    if (tipo === 'investidor') {
      invForm.classList.remove('hidden');
      hosForm.classList.add('hidden');
      btnInv.className = "bg-brand-purple text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md";
      btnHos.className = "bg-transparent hover:bg-white text-gray-500 hover:text-gray-900 hover:shadow-sm px-8 py-3 rounded-xl font-bold transition-all";
    } else {
      hosForm.classList.remove('hidden');
      invForm.classList.add('hidden');
      btnHos.className = "bg-brand-purple text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md";
      btnInv.className = "bg-transparent hover:bg-white text-gray-500 hover:text-gray-900 hover:shadow-sm px-8 py-3 rounded-xl font-bold transition-all";
    }
  }
};

// Captcha logic
let captchaValues = { inv: 0, hos: 0 };

window.generateCaptcha = function(tipo) {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const prefix = tipo === 'investidor' ? 'inv' : 'hos';
  const el = document.getElementById(`captcha-${prefix}-question`);
  const input = document.getElementById(`captcha-${prefix}-answer`);
  if (el) {
    el.innerText = `${num1} + ${num2}`;
    captchaValues[prefix] = num1 + num2;
    if (input) input.value = '';
  }
};

window.handleFormSubmit = function(event, tipo) {
  event.preventDefault();
  const prefix = tipo === 'Investidor' ? 'inv' : 'hos';
  const answer = parseInt(document.getElementById(`captcha-${prefix}-answer`).value, 10);

  if (answer !== captchaValues[prefix]) {
    alert(translations['captcha-err'] || "Captcha incorreto!");
    generateCaptcha(tipo.toLowerCase());
    return;
  }

  const data = new FormData(event.target);
  const org = data.get('empresa') || data.get('hospital') || "Não preenchido";
  const body = `Nome: ${data.get('nome')}\nEmail: ${data.get('email')}\nTelefone: ${data.get('telefone')}\nOrg: ${org}\nMensagem: ${data.get('mensagem')}`;
  window.location.href = `mailto:contato@medaffection.com?subject=Novo Contato SITE: ${tipo}&body=${encodeURIComponent(body)}`;
  generateCaptcha(tipo.toLowerCase());
};

// Clipboard utilities
window.copyToClipboard = function(text, btnElement, successMsg = "Copiado!") {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.innerText;
    const icon = btnElement.querySelector('i');
    
    btnElement.innerText = successMsg;
    if (icon) btnElement.appendChild(icon);
    
    setTimeout(() => {
      btnElement.innerText = originalText;
      if (icon) btnElement.appendChild(icon);
    }, 2000);
  });
};

window.copyPixKey = function() {
  const btn = document.querySelector('[onclick="copyPixKey()"].w-full') || document.activeElement;
  copyToClipboard("52.911.460/0001-75", btn);
};

window.copyPronac = function() {
  const btn = document.querySelector('[onclick="copyPronac()"]') || document.activeElement;
  copyToClipboard("260346", btn);
};

document.addEventListener('DOMContentLoaded', () => {
  loadTranslations(currentLang);
  generateCaptcha('investidor');
  generateCaptcha('hospital');

  // Carousel initialization
  document.querySelectorAll('[data-carousel-track]').forEach(track => {
    let index = 0;
    const items = track.children;
    const total = items.length;
    if (total <= 1) return;
    
    const container = track.closest('[data-carousel]');
    const prevBtn = container?.querySelector('[data-carousel-prev]');
    const nextBtn = container?.querySelector('[data-carousel-next]');
    
    const updateCarousel = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };
    
    if (nextBtn) nextBtn.addEventListener('click', () => { index = (index + 1) % total; updateCarousel(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { index = (index - 1 + total) % total; updateCarousel(); });
    setInterval(() => { index = (index + 1) % total; updateCarousel(); }, 5000);
  });

  // Mobile Menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      if (menuIcon) {
        menuIcon.classList.replace(isHidden ? 'ph-x' : 'ph-list', isHidden ? 'ph-list' : 'ph-x');
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.classList.replace('ph-x', 'ph-list');
      });
    });
  }

  // Header State
  const setHeaderState = () => {
    const h = document.getElementById('header-inner');
    if (!h) return;
    const scrolled = window.scrollY > 50;
    h.classList.toggle('bg-white/95', scrolled);
    h.classList.toggle('shadow-lg', scrolled);
    h.classList.toggle('py-3', scrolled);
    h.classList.toggle('bg-white/70', !scrolled);
    h.classList.toggle('py-4', !scrolled);
  };
  window.addEventListener('scroll', setHeaderState);
  setHeaderState();

  // Floating CTA
  const floatingCTA = document.getElementById('floating-cta');
  if (floatingCTA) {
    window.addEventListener('scroll', () => {
      const shouldShow = window.scrollY > 500;
      floatingCTA.classList.toggle('translate-y-0', shouldShow);
      floatingCTA.classList.toggle('opacity-100', shouldShow);
      floatingCTA.classList.toggle('translate-y-20', !shouldShow);
      floatingCTA.classList.toggle('opacity-0', !shouldShow);
    });
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
    observer.observe(section);
  });
});
