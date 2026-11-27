const WHATSAPP_PHONE = '77021096565';
const currency = new Intl.NumberFormat('ru-RU');
const assetBase = import.meta.env.BASE_URL;

const translations = {
  kk: {
    city: 'Түркістан',
    heroEyebrow: 'Тәтті сәттер осы жерден басталады',
    heroTitle: 'Көңілден шыққан тәттілер, <em>махаббатпен</em> әзірленген.',
    heroDescription: 'Түркістанда күн сайын балғын торттар, круассандар мен сүйікті кофеңіз. Таңдаңыз — біз дайындап қоямыз.',
    exploreMenu: 'Мәзірді көру', findUs: 'Бізді табыңыз', madeWithCare: 'Күн сайын сүйіспеншілікпен',
    freshlyMade: 'Балғын өнімдер. Әдемі сәттер.', dailyFresh: 'Күн сайын балғын',
    bakedWithLove: 'Махаббатпен пісірілген', factFresh: 'Күн сайын балғын',
    factMade: 'Тапсырыспен әзірлейміз', factDelivery: 'Қала бойынша жеткізу', factCoffee: 'Кофе мен тәттілер',
    menuEyebrow: 'Өзіңізге ұнайтынын таңдаңыз', menuTitle: 'Біздің <em>мәзір</em>',
    menuIntro: 'Үйге, мерекеге немесе кофеге арналған сүйікті дәмдеріңіз.',
    menuFootnote: 'Барлық бағалар теңгемен көрсетілген. Торт дизайны тапсырыс бойынша келісіледі.',
    preorderEyebrow: 'Ерекше күніңізге', preorderTitle: 'Тәтті сәтке <em>себеп</em> табыңыз.',
    preorderText: 'Туған күнге арналған бенто торт па, әлде жақындарыңызға шағын тәтті сыйлық па? Алдын ала тапсырыс беріп, өз күніңізге лайық дәм мен безендіруді таңдаңыз.',
    planOrder: 'Тапсырысты жоспарлау', littleDetails: 'Әр бөлшегіне мән береміз',
    orderEyebrow: 'Тапсырысты аяқтаңыз', orderTitle: 'Бәрі <em>оңай</em>',
    orderIntro: 'Мәліметтерді қалдырыңыз — дайын тапсырысты WhatsApp арқылы жібереміз.',
    yourDetails: 'Сіздің мәліметтеріңіз', nameLabel: 'Атыңыз', namePlaceholder: 'Атыңызды жазыңыз',
    dateLabel: 'Күні', timeLabel: 'Уақыты', fulfillmentLabel: 'Алу тәсілі',
    deliveryOption: 'Түркістан бойынша жеткізу', deliveryHint: 'Мекенжайыңызды көрсетіңіз',
    pickupOption: 'Өзім алып кетемін', pickupHint: 'Филиалды таңдаңыз',
    addressLabel: 'Жеткізу мекенжайы', addressPlaceholder: 'Мысалы: Жаңа қала, B. Sattarkhanov Ave',
    branchLabel: 'Алып кететін филиал', paymentLabel: 'Төлем тәсілі',
    kaspiOption: 'Kaspi QR / аударым', cashOption: 'Қолма-қол ақша',
    submitOrder: 'WhatsApp арқылы тапсырыс беру',
    privacyNote: 'Батырманы басу WhatsApp-та дайын хабарламаны ашады. Тапсырысыңызды жібермес бұрын тексере аласыз.',
    summaryLabel: 'Сіздің таңдауыңыз', summaryEmpty: 'Мәзірден тәттілеріңізді таңдаңыз — осы жерде көрінеді.',
    totalLabel: 'Жалпы сомасы', summaryNote: 'Жеткізу құны мекенжайға қарай нақтыланады.',
    locationsEyebrow: 'Кездескенше!', locationsTitle: 'Біз <em>осындамыз</em>',
    locationsText: 'Түркістандағы филиалдарымызға келіңіз немесе өзіңізге ыңғайлысын таңдаңыз.',
    openMap: '2GIS-те ашу', ourBranches: 'Біздің мекенжайлар',
    workingHoursLabel: 'Жұмыс уақыты', workingHoursValue: 'Күн сайын · 09:00–22:00',
    footerLine: 'Түркістанда тәтті сәттер жасаймыз.', selectedLabel: 'Таңдалды',
    dockOrder: 'WhatsApp арқылы тапсырыс', allCategories: 'Барлығы',
    categories: ['Торттар мен бенто', 'Қамыр өнімдері', 'Сусындар', 'Ас мәзірі мен сеттер'],
    categoriesAria: 'Мәзір санаттары', languageGroupLabel: 'Тілді таңдау',
    highlightsLabel: 'Біздің артықшылықтар', heroImageAlt: 'Мерекелік безендірілген шоколадты торт',
    products: {
      bento: { name: 'Бенто торт', description: 'Жеке шағын мерекеңізге', badge: 'Хит' },
      customCake: { name: 'Тапсырыспен торт', description: '1 кг үшін · Дизайн келісім бойынша', badge: 'Тапсырыспен' },
      meringue: { name: 'Безе орамы', description: 'Жеңіл, нәзік әрі балғын', badge: 'Балғын' },
      croissant: { name: 'Круассан', description: 'Бадамды немесе классикалық', badge: 'Күн сайын' },
      samsa: { name: 'Самса / тәтті сет', description: 'Шайға арналған дәмді жиынтық', badge: 'Сет' },
      latte: { name: 'Латте', description: 'Жұмсақ сүт көбігімен', badge: 'Кофе' },
      raf: { name: 'Раф кофе', description: 'Кілегейлі, хош иісті кофе', badge: 'Кофе' },
      lemonade: { name: 'Лимонад', description: 'Сергітетін жеміс дәмі', badge: 'Салқын' },
      pizza: { name: 'Пицца', description: 'Жаңа піскен, бөлісуге арналған', badge: 'Ас мәзірі' },
      wok: { name: 'WOK қорабы', description: 'Тоқ әрі дәмді түскі ас', badge: 'Ас мәзірі' }
    },
    itemLabel: 'Таңдау', invalidSelection: 'Алдымен мәзірден кемінде бір тағам таңдаңыз.',
    missingFields: 'Тапсырысты жіберу үшін барлық қажетті мәліметті толтырыңыз.',
    messageTitle: 'Сәлеметсіз бе! Мен тапсырыс бергім келеді:',
    messageName: 'Аты-жөні', messageDate: 'Күні', messageTime: 'Уақыты',
    messageDelivery: 'Жеткізу', messagePickup: 'Алып кету', messageAddress: 'Мекенжай',
    messageBranch: 'Филиал', messagePayment: 'Төлем тәсілі', messageItems: 'Тапсырыс',
    messageTotal: 'Жалпы сомасы', paymentKaspi: 'Kaspi QR / аударым',
    paymentCash: 'Қолма-қол ақша', quantityShort: 'дана'
  },
  ru: {
    city: 'Туркестан',
    heroEyebrow: 'Моменты со вкусом начинаются здесь',
    heroTitle: 'Десерты, которые <em>созданы</em> с любовью.',
    heroDescription: 'Свежие торты, круассаны и любимый кофе каждый день в Туркестане. Выбирайте — мы всё приготовим.',
    exploreMenu: 'Смотреть меню', findUs: 'Найти нас', madeWithCare: 'Каждый день с любовью',
    freshlyMade: 'Свежие продукты. Тёплые моменты.', dailyFresh: 'Всегда свежее',
    bakedWithLove: 'Испечено с любовью', factFresh: 'Свежая выпечка каждый день',
    factMade: 'Готовим на заказ', factDelivery: 'Доставка по городу', factCoffee: 'Кофе и десерты',
    menuEyebrow: 'Выберите то, что нравится', menuTitle: 'Наше <em>меню</em>',
    menuIntro: 'Любимые вкусы для дома, праздника или чашки кофе.',
    menuFootnote: 'Все цены указаны в тенге. Дизайн торта согласовывается при заказе.',
    preorderEyebrow: 'Для вашего особенного дня', preorderTitle: 'Найдите <em>повод</em> для сладкого.',
    preorderText: 'Бенто-торт на день рождения или небольшой сладкий подарок близким? Закажите заранее и выберите вкус и оформление для своего дня.',
    planOrder: 'Запланировать заказ', littleDetails: 'Продумываем каждую деталь',
    orderEyebrow: 'Оформите заказ', orderTitle: 'Всё <em>просто</em>',
    orderIntro: 'Оставьте данные — готовый заказ можно будет отправить нам в WhatsApp.',
    yourDetails: 'Ваши данные', nameLabel: 'Ваше имя', namePlaceholder: 'Введите ваше имя',
    dateLabel: 'Дата', timeLabel: 'Время', fulfillmentLabel: 'Как получить заказ',
    deliveryOption: 'Доставка по Туркестану', deliveryHint: 'Укажите адрес доставки',
    pickupOption: 'Самовывоз', pickupHint: 'Выберите филиал',
    addressLabel: 'Адрес доставки', addressPlaceholder: 'Например: Жаңа қала, B. Sattarkhanov Ave',
    branchLabel: 'Филиал для самовывоза', paymentLabel: 'Способ оплаты',
    kaspiOption: 'Kaspi QR / перевод', cashOption: 'Наличными',
    submitOrder: 'Заказать через WhatsApp',
    privacyNote: 'Кнопка откроет готовое сообщение в WhatsApp. Вы сможете проверить его перед отправкой.',
    summaryLabel: 'Ваш выбор', summaryEmpty: 'Выберите десерты в меню — они появятся здесь.',
    totalLabel: 'Итого', summaryNote: 'Стоимость доставки уточняется по адресу.',
    locationsEyebrow: 'До встречи!', locationsTitle: 'Мы <em>рядом</em>',
    locationsText: 'Заходите в наши филиалы в Туркестане или выберите удобный.',
    openMap: 'Открыть в 2GIS', ourBranches: 'Наши адреса',
    workingHoursLabel: 'Время работы', workingHoursValue: 'Ежедневно · 09:00–22:00',
    footerLine: 'Создаём сладкие моменты в Туркестане.', selectedLabel: 'Выбрано',
    dockOrder: 'Заказать через WhatsApp', allCategories: 'Все',
    categories: ['Торты и бенто', 'Выпечка и круассаны', 'Напитки', 'Кухня и сеты'],
    categoriesAria: 'Категории меню', languageGroupLabel: 'Выбор языка',
    highlightsLabel: 'Наши преимущества', heroImageAlt: 'Шоколадный торт с праздничным оформлением',
    products: {
      bento: { name: 'Бенто-торт', description: 'Для вашего маленького праздника', badge: 'Хит' },
      customCake: { name: 'Торт на заказ', description: 'За 1 кг · Дизайн по согласованию', badge: 'На заказ' },
      meringue: { name: 'Меренговый рулет', description: 'Лёгкий, нежный и свежий', badge: 'Свежий' },
      croissant: { name: 'Круассан', description: 'Миндальный или классический', badge: 'Каждый день' },
      samsa: { name: 'Самса / набор выпечки', description: 'Вкусный набор к чаю', badge: 'Набор' },
      latte: { name: 'Латте', description: 'Нежная молочная пенка', badge: 'Кофе' },
      raf: { name: 'Раф', description: 'Ароматный кофе со сливками', badge: 'Кофе' },
      lemonade: { name: 'Лимонад', description: 'Освежающий фруктовый вкус', badge: 'Холодный' },
      pizza: { name: 'Пицца', description: 'Свежая выпечка, чтобы разделить', badge: 'Кухня' },
      wok: { name: 'WOK-бокс', description: 'Сытный и вкусный обед', badge: 'Кухня' }
    },
    itemLabel: 'Выбрать', invalidSelection: 'Сначала выберите хотя бы одно блюдо в меню.',
    missingFields: 'Заполните все обязательные поля, чтобы оформить заказ.',
    messageTitle: 'Здравствуйте! Хочу оформить заказ:',
    messageName: 'Имя', messageDate: 'Дата', messageTime: 'Время',
    messageDelivery: 'Доставка', messagePickup: 'Самовывоз', messageAddress: 'Адрес',
    messageBranch: 'Филиал', messagePayment: 'Способ оплаты', messageItems: 'Заказ',
    messageTotal: 'Итого', paymentKaspi: 'Kaspi QR / перевод',
    paymentCash: 'Наличными', quantityShort: 'шт.'
  }
};

const products = [
  { id: 'bento', category: 0, price: 6500, color: '#f0d9c9' },
  { id: 'customCake', category: 0, price: 7500, color: '#e8d9bf' },
  { id: 'meringue', category: 0, price: 5500, color: '#e8e4d4' },
  { id: 'croissant', category: 1, price: 1200, color: '#ead5ae' },
  { id: 'samsa', category: 3, price: 3800, color: '#e7d4b8' },
  { id: 'latte', category: 2, price: 1300, color: '#ddd6c9' },
  { id: 'raf', category: 2, price: 1300, color: '#e5d6c3' },
  { id: 'lemonade', category: 2, price: 1300, color: '#e7e6bd' },
  { id: 'pizza', category: 3, price: 3200, color: '#e8d6b8' },
  { id: 'wok', category: 3, price: 3200, color: '#d9dfc5' }
];

const branches = [
  'B. Sattarkhanov Ave, 33a',
  'Sultanov St, 234a',
  '11-ші көше, 31',
  'Kazybek bi St, 9/10'
];

const selected = new Map();
let currentLanguage = 'kk';
let currentCategory = 'all';
let formErrorKey = null;

const categoryList = document.querySelector('#categoryList');
const menuGrid = document.querySelector('#menuGrid');
const fulfillmentFields = document.querySelector('#fulfillmentFields');
const orderForm = document.querySelector('#orderForm');
const formError = document.querySelector('#formError');
const orderDock = document.querySelector('#orderDock');

function formatPrice(value) {
  return `${currency.format(value).replace(/\u00a0/g, ' ')} ₸`;
}

function applyTranslations() {
  const text = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = `Aizhamal tattileri — ${text.city}`;
  document.querySelector('#cityName').textContent = text.city;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (text[key]) element.innerHTML = text[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = text[element.dataset.i18nPlaceholder];
  });
  document.querySelector('.language-switch').setAttribute('aria-label', text.languageGroupLabel);
  document.querySelector('.quick-facts').setAttribute('aria-label', text.highlightsLabel);
  document.querySelector('.hero-image').alt = text.heroImageAlt;
  if (formErrorKey) formError.textContent = text[formErrorKey];
  document.querySelectorAll('.language-button').forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  categoryList.setAttribute('aria-label', text.categoriesAria);
  renderCategories();
  renderMenu();
  renderFulfillmentFields();
  renderSelection();
}

function renderCategories() {
  const text = translations[currentLanguage];
  const categories = [{ id: 'all', label: text.allCategories }, ...text.categories.map((label, index) => ({ id: index, label }))];
  categoryList.innerHTML = categories.map((category) => `
    <button class="category-button${String(category.id) === String(currentCategory) ? ' is-active' : ''}"
      type="button" data-category="${category.id}" aria-pressed="${String(category.id) === String(currentCategory)}">${category.label}</button>
  `).join('');
}

function renderMenu() {
  const text = translations[currentLanguage];
  const visibleProducts = products.filter((product) => currentCategory === 'all' || product.category === Number(currentCategory));
  menuGrid.innerHTML = visibleProducts.map((product, index) => {
    const item = text.products[product.id];
    const quantity = selected.get(product.id) || 0;
    return `
      <article class="menu-card">
        <div class="product-art" style="background:${product.color}">
          <span class="product-number">${String(index + 1).padStart(2, '0')} / ${String(visibleProducts.length).padStart(2, '0')}</span>
          <img class="product-image" src="${assetBase}assets/images/products/${product.id}.svg" alt="" />
          <span class="product-badge">${item.badge}</span>
        </div>
        <div class="menu-card-body">
          <div class="product-title-row">
            <h3 class="product-title">${item.name}</h3>
            <span class="product-price">${formatPrice(product.price)}</span>
          </div>
          <p class="product-description">${item.description}</p>
          <div class="product-select">
            <label class="select-label">
              <input type="checkbox" data-product="${product.id}" ${quantity > 0 ? 'checked' : ''} aria-label="${text.itemLabel}: ${item.name}" />
              <span class="custom-check" aria-hidden="true">✓</span><span>${text.itemLabel}</span>
            </label>
            <div class="quantity-control${quantity > 0 ? ' is-visible' : ''}" data-quantity-for="${product.id}">
              <button class="quantity-button" type="button" data-quantity-action="decrease" data-product="${product.id}" aria-label="−">−</button>
              <span class="quantity-value">${quantity || 1}</span>
              <button class="quantity-button" type="button" data-quantity-action="increase" data-product="${product.id}" aria-label="+">+</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderFulfillmentFields() {
  const text = translations[currentLanguage];
  const fulfillment = orderForm.elements.fulfillment.value;
  const previousValue = fulfillmentFields.querySelector('input, select')?.value;
  if (fulfillment === 'delivery') {
    fulfillmentFields.innerHTML = `
      <label class="field field-wide">
        <span>${text.addressLabel}</span>
        <input type="text" name="address" autocomplete="street-address" required placeholder="${text.addressPlaceholder}" />
      </label>
    `;
    if (previousValue) fulfillmentFields.querySelector('input').value = previousValue;
    return;
  }
  fulfillmentFields.innerHTML = `
    <label class="field field-wide">
      <span>${text.branchLabel}</span>
      <select name="branch" required>
        ${branches.map((branch) => `<option value="${branch}">${branch}</option>`).join('')}
      </select>
    </label>
  `;
  if (previousValue) fulfillmentFields.querySelector('select').value = previousValue;
}

function getSelectionTotals() {
  let count = 0;
  let total = 0;
  products.forEach((product) => {
    const quantity = selected.get(product.id) || 0;
    count += quantity;
    total += quantity * product.price;
  });
  return { count, total };
}

function renderSelection() {
  const text = translations[currentLanguage];
  const items = products.filter((product) => selected.has(product.id));
  const { count, total } = getSelectionTotals();

  document.querySelector('#summaryItems').innerHTML = items.length
    ? items.map((product) => {
      const quantity = selected.get(product.id);
      return `<div class="summary-line"><span>${text.products[product.id].name} × ${quantity}</span><strong>${formatPrice(product.price * quantity)}</strong></div>`;
    }).join('')
    : `<p class="summary-empty">${text.summaryEmpty}</p>`;
  document.querySelector('#summaryTotal').textContent = formatPrice(total);
  document.querySelector('#dockCount').textContent = String(count);
  document.querySelector('#dockTotal').textContent = formatPrice(total);
  orderDock.classList.toggle('is-visible', count > 0);
  orderDock.setAttribute('aria-hidden', String(count === 0));
}

function updateProductSelection(productId, quantity) {
  if (quantity > 0) selected.set(productId, quantity);
  else selected.delete(productId);
  renderMenu();
  renderSelection();
}

function createWhatsAppMessage(formData) {
  const text = translations[currentLanguage];
  const fulfillment = formData.get('fulfillment');
  const payment = formData.get('payment');
  const selectedLines = products
    .filter((product) => selected.has(product.id))
    .map((product) => {
      const quantity = selected.get(product.id);
      return `• ${text.products[product.id].name} — ${quantity} ${text.quantityShort} × ${formatPrice(product.price)} = ${formatPrice(quantity * product.price)}`;
    });
  const { total } = getSelectionTotals();
  const fulfillmentLines = fulfillment === 'delivery'
    ? [text.messageDelivery, `${text.messageAddress}: ${formData.get('address')}`]
    : [`${text.messagePickup}: ${formData.get('branch')}`];
  return [
    text.messageTitle,
    '',
    `${text.messageName}: ${formData.get('name')}`,
    `${text.messageDate}: ${formData.get('date')}`,
    `${text.messageTime}: ${formData.get('time')}`,
    ...fulfillmentLines,
    `${text.messagePayment}: ${payment === 'kaspi' ? text.paymentKaspi : text.paymentCash}`,
    '',
    `${text.messageItems}:`,
    ...selectedLines,
    `${text.messageTotal}: ${formatPrice(total)}`
  ].join('\n');
}

categoryList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  currentCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

menuGrid.addEventListener('change', (event) => {
  const checkbox = event.target.closest('input[data-product]');
  if (!checkbox) return;
  updateProductSelection(checkbox.dataset.product, checkbox.checked ? 1 : 0);
});

menuGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-quantity-action]');
  if (!button) return;
  const currentQuantity = selected.get(button.dataset.product) || 1;
  const nextQuantity = button.dataset.quantityAction === 'increase' ? currentQuantity + 1 : currentQuantity - 1;
  updateProductSelection(button.dataset.product, nextQuantity);
});

document.querySelectorAll('.language-button').forEach((button) => {
  button.addEventListener('click', () => {
    currentLanguage = button.dataset.lang;
    applyTranslations();
  });
});

orderForm.addEventListener('change', (event) => {
  if (event.target.name === 'fulfillment') renderFulfillmentFields();
});

document.querySelector('#dockOrderButton').addEventListener('click', () => {
  document.querySelector('#order').scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => orderForm.elements.name.focus({ preventScroll: true }), 450);
});

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formError.hidden = true;
  formErrorKey = null;
  const text = translations[currentLanguage];
  if (!selected.size) {
    formErrorKey = 'invalidSelection';
    formError.textContent = text[formErrorKey];
    formError.hidden = false;
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  if (!orderForm.reportValidity()) {
    formErrorKey = 'missingFields';
    formError.textContent = text[formErrorKey];
    formError.hidden = false;
    return;
  }
  const message = createWhatsAppMessage(new FormData(orderForm));
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

document.querySelector('#currentYear').textContent = String(new Date().getFullYear());
applyTranslations();
