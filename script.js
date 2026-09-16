const STORAGE_KEY = 'verduleria-data-v3';

const SEED = {
  storeName: 'El Mercadito',
  items: [
    // Verduras
    { id: '1', name: 'Tomate', emoji: '🍅', category: 'verdura', saleType: 'kg', price: 3900, promoActive: false, promoPrice: 0 },
    { id: '2', name: 'Papa', emoji: '🥔', category: 'verdura', saleType: 'kg', price: 2000, promoActive: false, promoPrice: 0 },
    { id: '3', name: 'Cebolla', emoji: '🧅', category: 'verdura', saleType: 'kg', price: 2400, promoActive: false, promoPrice: 0 },
    { id: '4', name: 'Zanahoria', emoji: '🥕', category: 'verdura', saleType: 'kg', price: 2400, promoActive: false, promoPrice: 0 },
    { id: '5', name: 'Zapallo Brasilero', emoji: '🎃', category: 'verdura', saleType: 'kg', price: 2600, promoActive: false, promoPrice: 0 },
    { id: '6', name: 'Lechuga', emoji: '🥬', category: 'verdura', saleType: 'kg', price: 3000, promoActive: false, promoPrice: 0 },
    { id: '7', name: 'Choclo', emoji: '🌽', category: 'verdura', saleType: 'unit', price: 400, promoActive: false, promoPrice: 0 },
    { id: '8', name: 'Acelga', emoji: '🥬', category: 'verdura', saleType: 'kg', price: 2000, promoActive: false, promoPrice: 0 },
    { id: '9', name: 'Palta', emoji: '🥑', category: 'verdura', saleType: 'kg', price: 9000, promoActive: false, promoPrice: 0 },
    { id: '10', name: 'Cebolla de verdeo', emoji: '🧅', category: 'verdura', saleType: 'kg', price: 9000, promoActive: false, promoPrice: 0 },
    { id: '11', name: 'Espinaca', emoji: '🥬', category: 'verdura', saleType: 'kg', price: 2500, promoActive: false, promoPrice: 0 },
    { id: '12', name: 'Apio', emoji: '🥬', category: 'verdura', saleType: 'kg', price: 500, promoActive: false, promoPrice: 0 },
    { id: '13', name: 'Rucula', emoji: '🥬', category: 'verdura', saleType: 'kg', price: 1500, promoActive: false, promoPrice: 0 },
    { id: '14', name: 'Zapallito verde', emoji: '🥒', category: 'verdura', saleType: 'kg', price: 2800, promoActive: false, promoPrice: 0 },
    { id: '15', name: 'Chaucha', emoji: '🫛', category: 'verdura', saleType: 'kg', price: 7000, promoActive: false, promoPrice: 0 },
    { id: '16', name: 'Pimiento V', emoji: '🫑', category: 'verdura', saleType: 'kg', price: 5000, promoActive: false, promoPrice: 0 },
    { id: '17', name: 'Boniato', emoji: '🍠', category: 'verdura', saleType: 'kg', price: 5500, promoActive: false, promoPrice: 0 },
    { id: '18', name: 'Menta', emoji: '🌿', category: 'verdura', saleType: 'unit', price: 1500, promoActive: false, promoPrice: 0 },
    { id: '19', name: 'Perejil', emoji: '🌿', category: 'verdura', saleType: 'kg', price: 300, promoActive: false, promoPrice: 0 },
    { id: '20', name: 'Zucchini', emoji: '🥒', category: 'verdura', saleType: 'kg', price: 2800, promoActive: false, promoPrice: 0 },
    { id: '21', name: 'Cebolla morada', emoji: '🧅', category: 'verdura', saleType: 'kg', price: 2800, promoActive: false, promoPrice: 0 },
    { id: '22', name: 'Ajo', emoji: '🧄', category: 'verdura', saleType: 'unit', price: 1200, promoActive: false, promoPrice: 0 },
    { id: '23', name: 'Lechuga hidroponica', emoji: '🥬', category: 'verdura', saleType: 'unit', price: 2000, promoActive: false, promoPrice: 0 },
    { id: '24', name: 'Pimiento', emoji: '🌶️', category: 'verdura', saleType: 'kg', price: 7000, promoActive: false, promoPrice: 0 },
    { id: '25', name: 'Batata', emoji: '🍠', category: 'verdura', saleType: 'kg', price: 2800, promoActive: false, promoPrice: 0 },
    { id: '26', name: 'Coreanito', emoji: '🎃', category: 'verdura', saleType: 'kg', price: 3000, promoActive: false, promoPrice: 0 },
    { id: '27', name: 'Pepino', emoji: '🥒', category: 'verdura', saleType: 'kg', price: 3000, promoActive: false, promoPrice: 0 },
    { id: '28', name: 'Puerro', emoji: '🧅', category: 'verdura', saleType: 'unit', price: 500, promoActive: false, promoPrice: 0 },
    { id: '29', name: 'Berenjena', emoji: '🍆', category: 'verdura', saleType: 'kg', price: 2500, promoActive: false, promoPrice: 0 },
    { id: '30', name: 'Tomate Cherry', emoji: '🍅', category: 'verdura', saleType: 'kg', price: 5000, promoActive: true, promoPrice: 500, promoMinAmount: 0 },
    { id: '31', name: 'Broccoli', emoji: '🥦', category: 'verdura', saleType: 'unit', price: 6000, promoActive: false, promoPrice: 0 },
    { id: '32', name: 'Remolacha', emoji: '🥬', category: 'verdura', saleType: 'kg', price: 7000, promoActive: false, promoPrice: 0 },
    { id: '33', name: 'Repollo', emoji: '🥬', category: 'verdura', saleType: 'unit', price: 2500, promoActive: false, promoPrice: 0 },
    { id: '34', name: 'Coliflor', emoji: '🥦', category: 'verdura', saleType: 'kg', price: 2500, promoActive: false, promoPrice: 0 },
    { id: '35', name: 'Jengibre', emoji: '🫚', category: 'verdura', saleType: 'unit', price: 16000, promoActive: false, promoPrice: 0 },
    { id: '48', name: 'Coles de Bruselas', emoji: '🥬', category: 'verdura', saleType: 'kg', price: 4000, promoActive: false, promoPrice: 0 },

    // Frutas
    { id: '36', name: 'Manzana R', emoji: '🍎', category: 'fruta', saleType: 'kg', price: 4900, promoActive: false, promoPrice: 0 },
    { id: '37', name: 'Banana', emoji: '🍌', category: 'fruta', saleType: 'kg', price: 5000, promoActive: false, promoPrice: 0 },
    { id: '38', name: 'Naranja', emoji: '🍊', category: 'fruta', saleType: 'kg', price: 1500, promoActive: false, promoPrice: 0 },
    { id: '39', name: 'Limón', emoji: '🍋', category: 'fruta', saleType: 'kg', price: 1500, promoActive: false, promoPrice: 0 },
    { id: '40', name: 'Frutilla', emoji: '🍓', category: 'fruta', saleType: 'kg', price: 4000, promoActive: true, promoPrice: 8000, promoMinAmount: 2 },
    { id: '41', name: 'Kiwi', emoji: '🥝', category: 'fruta', saleType: 'kg', price: 9000, promoActive: false, promoPrice: 0 },
    { id: '42', name: 'Manzana V', emoji: '🍏', category: 'fruta', saleType: 'kg', price: 4900, promoActive: false, promoPrice: 0 },
    { id: '43', name: 'Mandarina', emoji: '🍊', category: 'fruta', saleType: 'kg', price: 1500, promoActive: false, promoPrice: 0 },
    { id: '44', name: 'Pomelo', emoji: '🍊', category: 'fruta', saleType: 'kg', price: 1500, promoActive: false, promoPrice: 0 },
    { id: '45', name: 'Pera', emoji: '🍐', category: 'fruta', saleType: 'kg', price: 4000, promoActive: false, promoPrice: 0 },
    { id: '46', name: 'Sandia', emoji: '🍉', category: 'fruta', saleType: 'kg', price: 2000, promoActive: false, promoPrice: 0 },
    { id: '47', name: 'Arandano', emoji: '🫐', category: 'fruta', saleType: 'unit', price: 5500, promoActive: false, promoPrice: 0 },

    // Fiambres
    { id: '49', name: 'Jamón cocido', emoji: '🥩', category: 'fiambre', saleType: 'kg', price: 12000, promoActive: false, promoPrice: 0 },
    { id: '50', name: 'Jamón crudo', emoji: '🥩', category: 'fiambre', saleType: 'kg', price: 18000, promoActive: false, promoPrice: 0 },
    { id: '51', name: 'Queso cremoso', emoji: '🧀', category: 'fiambre', saleType: 'kg', price: 11000, promoActive: false, promoPrice: 0 },
    { id: '52', name: 'Queso barra', emoji: '🧀', category: 'fiambre', saleType: 'kg', price: 9500, promoActive: false, promoPrice: 0 },
    { id: '53', name: 'Salame', emoji: '🥓', category: 'fiambre', saleType: 'kg', price: 14000, promoActive: false, promoPrice: 0 },
    { id: '54', name: 'Mortadela', emoji: '🥩', category: 'fiambre', saleType: 'kg', price: 8000, promoActive: false, promoPrice: 0 },
    { id: '55', name: 'Queso dambo', emoji: '🧀', category: 'fiambre', saleType: 'kg', price: 10000, promoActive: false, promoPrice: 0 },
    { id: '56', name: 'Paleta', emoji: '🥩', category: 'fiambre', saleType: 'kg', price: 10500, promoActive: false, promoPrice: 0 },
    { id: '57', name: 'Queso colonia', emoji: '🧀', category: 'fiambre', saleType: 'kg', price: 9000, promoActive: false, promoPrice: 0 },
    { id: '58', name: 'Bondiola', emoji: '🥩', category: 'fiambre', saleType: 'kg', price: 16000, promoActive: false, promoPrice: 0 },
    { id: '59', name: 'Lomito ahumado', emoji: '🥩', category: 'fiambre', saleType: 'kg', price: 20000, promoActive: false, promoPrice: 0 },
    { id: '60', name: 'Queso rallado', emoji: '🧀', category: 'fiambre', saleType: 'unit', price: 3500, promoActive: false, promoPrice: 0 },
    { id: '61', name: 'Jamón Lario', emoji: '🥩', category: 'fiambre', saleType: 'kg', price: 0, promoActive: false, promoPrice: 0 },
    { id: '62', name: 'Jamón Paladini', emoji: '🥩', category: 'fiambre', saleType: 'kg', price: 0, promoActive: false, promoPrice: 0 },
    { id: '63', name: 'Salame 66', emoji: '🥓', category: 'fiambre', saleType: 'kg', price: 0, promoActive: false, promoPrice: 0 },
    { id: '64', name: 'Salame X', emoji: '🥓', category: 'fiambre', saleType: 'kg', price: 0, promoActive: false, promoPrice: 0 },
    { id: '65', name: 'Queso Tybo La Paulina', emoji: '🧀', category: 'fiambre', saleType: 'kg', price: 0, promoActive: false, promoPrice: 0 },
    { id: '66', name: 'Queso Tybo X', emoji: '🧀', category: 'fiambre', saleType: 'kg', price: 0, promoActive: false, promoPrice: 0 },
    { id: '67', name: 'Cuartirolo La Paulina', emoji: '🧀', category: 'fiambre', saleType: 'kg', price: 0, promoActive: false, promoPrice: 0 },
    { id: '68', name: 'Cuartirolo La Paulina Light', emoji: '🧀', category: 'fiambre', saleType: 'kg', price: 0, promoActive: false, promoPrice: 0 },
  ]
};

let state = {
  storeName: SEED.storeName,
  items: [],
  carts: [{ id: 'cart-init', name: 'Pedido 1', items: [] }],
  activeCartId: 'cart-init',
  activeTab: 'verdura',
  editMode: false,
  searchQuery: '',
};

function fmt(n) {
  return '$' + Math.round(n).toLocaleString('es-AR');
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state.storeName = parsed.storeName || SEED.storeName;
      state.items = parsed.items && parsed.items.length ? parsed.items : SEED.items;
    } else {
      state.storeName = SEED.storeName;
      state.items = SEED.items;
      persist();
    }
  } catch (e) {
    state.storeName = SEED.storeName;
    state.items = SEED.items;
  }
  render();
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ storeName: state.storeName, items: state.items }));
  } catch (e) { /* best effort */ }
}

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

function activeCart() {
  return state.carts.find(c => c.id === state.activeCartId) || state.carts[0];
}

function itemPrice(item) {
  if (item.promoActive && item.promoPrice > 0) {
    // When minAmount > 0, promoPrice is the TOTAL for the bundle
    if (item.promoMinAmount > 0) return item.promoPrice / item.promoMinAmount;
    return item.promoPrice;
  }
  return item.price;
}

function effectivePrice(item, amount) {
  if (item.promoActive && item.promoPrice > 0) {
    const minAmount = item.promoMinAmount || 0;
    // For kg items: amount is in grams, promoMinAmount is in kg
    // For unit items: amount and promoMinAmount are both in units
    const comparable = item.saleType === 'kg' ? amount / 1000 : amount;
    if (comparable >= minAmount) {
      // When minAmount > 0, promoPrice is the TOTAL for the bundle
      // e.g. "3 units for $3000" → per-unit price = $1000
      if (minAmount > 0) return item.promoPrice / minAmount;
      return item.promoPrice;
    }
  }
  return item.price;
}

/* ---------- rendering ---------- */

function render() {
  const app = document.getElementById('app');
  let visibleItems = state.items;
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    visibleItems = visibleItems.filter(i => i.name.toLowerCase().includes(q));
  } else {
    visibleItems = visibleItems.filter(i => i.category === state.activeTab);
  }

  let tilesHtml = visibleItems.map(item => renderTile(item)).join('');
  if (state.editMode) {
    tilesHtml += `<button class="tile add-tile" onclick="openAddSheet()">
      <div class="plus">+</div><div class="lbl">Agregar producto</div>
    </button>`;
  }
  if (!state.editMode && visibleItems.length === 0) {
    tilesHtml = `<div class="empty-msg" style="grid-column:1/-1">No hay productos en esta categoría todavía. Tocá el lápiz para agregar.</div>`;
  }

  const cart = activeCart();
  const cartCount = cart.items.length;
  const cartTotal = cart.items.reduce((s, l) => s + l.subtotal, 0);
  const totalItemsAllCarts = state.carts.reduce((s, c) => s + c.items.length, 0);
  const hasMultipleCarts = state.carts.length > 1;

  app.innerHTML = `
    <header>
      <div class="header-row">
        ${state.editMode
      ? `<input class="store-name" id="storeNameInput" value="${escapeAttr(state.storeName)}" />`
      : `<div class="store-name">${escapeHtml(state.storeName)}</div>`
    }
        <button class="icon-btn ${state.editMode ? 'on' : ''}" onclick="toggleEdit()">${state.editMode ? '✓' : '✏️'}</button>
      </div>
      <div class="tabs">
        <button class="tab ${state.activeTab === 'verdura' ? 'active' : ''}" onclick="setTab('verdura')">Verduras</button>
        <button class="tab ${state.activeTab === 'fruta' ? 'active' : ''}" onclick="setTab('fruta')">Frutas</button>
        <button class="tab ${state.activeTab === 'fiambre' ? 'active' : ''}" onclick="setTab('fiambre')">Fiambres</button>
      </div>
      <div class="search-box">
        <input type="text" id="searchInput" placeholder="🔍 Buscar producto..." value="${escapeAttr(state.searchQuery)}" oninput="setSearch(this.value)" />
        ${state.searchQuery ? `<button class="clear-search" onclick="setSearch('')">✕</button>` : ''}
      </div>
    </header>
    <div class="grid">${tilesHtml}</div>
  `;

  if (state.editMode) {
    const inp = document.getElementById('storeNameInput');
    inp.addEventListener('change', (e) => { state.storeName = e.target.value || 'Mi Verdulería'; persist(); });
  }

  // cart bar
  let bar = document.getElementById('cartBar');
  if (bar) bar.remove();
  if (totalItemsAllCarts > 0 || hasMultipleCarts) {
    const el = document.createElement('div');
    el.className = 'cart-bar';
    el.id = 'cartBar';
    const cartTabsHtml = state.carts.map(c => {
      const cnt = c.items.length;
      const activeClass = c.id === state.activeCartId ? 'active' : '';
      const badge = cnt > 0 ? ' <span class="cart-tab-badge">' + cnt + '</span>' : '';
      return '<button class="cart-tab ' + activeClass + '" onclick="event.stopPropagation(); switchCart(\'' + c.id + '\')">'
        + escapeHtml(c.name) + badge + '</button>';
    }).join('');
    el.innerHTML = `
      <div class="cart-tabs-bar">
        ${cartTabsHtml}
        <button class="cart-tab-add" onclick="event.stopPropagation(); addNewCart()">+</button>
      </div>
      <div class="cart-summary" onclick="openCartSheet()">
        <div class="left">🛒 ${cartCount} ${cartCount === 1 ? 'producto' : 'productos'}</div>
        <div class="total">${fmt(cartTotal)}</div>
      </div>`;
    document.body.appendChild(el);
  }
}

function renderTile(item) {
  if (state.editMode) {
    return `
    <div class="tile editing">
      <button class="trash" onclick="deleteItem('${item.id}')" title="Eliminar">🗑</button>
      <input type="text" class="name-input" value="${escapeAttr(item.name)}" onchange="updateItem('${item.id}','name',this.value)" />
      <div class="price-row">
        <span>${item.saleType === 'kg' ? 'Precio/kg' : 'Precio/unidad'}</span>
        <input type="number" min="0" value="${item.price}" onchange="updateItem('${item.id}','price',this.value)" />
      </div>
      <div class="price-row">
        <span>Tipo</span>
        <select onchange="updateItem('${item.id}','saleType',this.value)" style="padding:5px 6px;border-radius:8px;border:none;background:var(--kraft-dark);font-size:12.5px;">
          <option value="kg" ${item.saleType === 'kg' ? 'selected' : ''}>Por kg</option>
          <option value="unit" ${item.saleType === 'unit' ? 'selected' : ''}>Por unidad</option>
        </select>
      </div>
      <div class="promo-toggle-row">
        <span>Oferta</span>
        <button class="switch ${item.promoActive ? 'on' : ''}" onclick="togglePromo('${item.id}')"><div class="knob"></div></button>
      </div>
      ${item.promoActive ? `
      <div class="price-row">
        <span>${item.promoMinAmount > 0 ? 'Precio x ' + item.promoMinAmount + (item.saleType === 'kg' ? ' kg' : ' un') : 'Precio oferta'}</span>
        <input type="number" min="0" value="${item.promoPrice}" onchange="updateItem('${item.id}','promoPrice',this.value)" />
      </div>
      <div class="price-row">
        <span>A partir de</span>
        <input type="number" min="0" step="0.1" value="${item.promoMinAmount || 0}" onchange="updateItem('${item.id}','promoMinAmount',this.value)" style="width:60px;flex:none;" />
        <span style="font-size:11px;">${item.saleType === 'kg' ? 'kg' : 'un'} (0=siempre)</span>
      </div>` : ''}
    </div>`;
  }

  const promo = item.promoActive && item.promoPrice > 0;
  const unitLabel = item.saleType === 'kg' ? '/kg' : '/unidad';
  let promoTag = 'OFERTA';
  let displayPrice = item.promoPrice;
  if (promo && item.promoMinAmount > 0) {
    const minLabel = item.saleType === 'kg' ? item.promoMinAmount + ' kg' : item.promoMinAmount + 'u';
    promoTag = minLabel + ' x ' + fmt(item.promoPrice);
    displayPrice = item.promoPrice / item.promoMinAmount;
  }
  return `
    <button class="tile" onclick="openBuySheet('${item.id}')">
      <div class="dot ${item.category}"></div>
      <div class="emoji">${item.emoji || (item.category === 'fruta' ? '🍎' : item.category === 'fiambre' ? '🥩' : '🥬')}</div>
      <div class="name">${escapeHtml(item.name)}</div>
      <div class="price-line">
        ${promo ? `<div class="promo-tag">${promoTag}</div><div class="old-price">${fmt(item.price)}</div>` : ''}
        <div class="price">${fmt(promo ? displayPrice : item.price)}<span class="unit-label"> ${unitLabel}</span></div>
      </div>
    </button>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

/* ---------- actions ---------- */

function setSearch(q) {
  state.searchQuery = q;
  render();
  // Keep focus on the input after re-render so user can keep typing
  const inp = document.getElementById('searchInput');
  if (inp) {
    inp.focus();
    // Move cursor to the end
    const len = inp.value.length;
    inp.setSelectionRange(len, len);
  }
}

function setTab(t) {
  state.activeTab = t;
  state.searchQuery = ''; // Clear search when switching tabs
  render();
}

function toggleEdit() {
  state.editMode = !state.editMode;
  render();
}

function updateItem(id, field, value) {
  const item = state.items.find(i => i.id === id);
  if (!item) return;
  if (field === 'price' || field === 'promoPrice' || field === 'promoMinAmount') {
    item[field] = Math.max(0, parseFloat(value) || 0);
  } else {
    item[field] = value;
  }
  persist();
  render();
}

function togglePromo(id) {
  const item = state.items.find(i => i.id === id);
  if (!item) return;
  item.promoActive = !item.promoActive;
  if (item.promoActive && !item.promoPrice) { item.promoPrice = Math.round(item.price * 0.8); }
  persist();
  render();
}

function deleteItem(id) {
  state.items = state.items.filter(i => i.id !== id);
  persist();
  render();
}

function openAddSheet() {
  const overlay = document.getElementById('overlay');
  const sheet = document.getElementById('sheet');
  sheet.innerHTML = `
    <div class="sheet-head">
      <div>
        <h2>Nuevo producto</h2>
        <div class="sub">Cargalo una vez, después solo tocás y pesás</div>
      </div>
      <button class="close-x" onclick="closeOverlay()">✕</button>
    </div>
    <div class="form-field">
      <label>Nombre</label>
      <input type="text" id="newName" placeholder="Ej: Acelga" />
    </div>
    <div class="two-col">
      <div class="form-field">
        <label>Categoría</label>
        <select id="newCategory">
          <option value="verdura">Verdura</option>
          <option value="fruta">Fruta</option>
          <option value="fiambre">Fiambre</option>
        </select>
      </div>
      <div class="form-field">
        <label>Se vende</label>
        <select id="newSaleType">
          <option value="kg">Por kg</option>
          <option value="unit">Por unidad</option>
        </select>
      </div>
    </div>
    <div class="two-col">
      <div class="form-field">
        <label id="newPriceLabel">Precio por kg</label>
        <input type="number" id="newPrice" min="0" placeholder="0" />
      </div>
      <div class="form-field">
        <label>Emoji (opcional)</label>
        <input type="text" id="newEmoji" placeholder="🥬" maxlength="2" />
      </div>
    </div>
    <button class="primary-btn" onclick="confirmAddItem()">Agregar producto</button>
  `;
  document.getElementById('newSaleType').addEventListener('change', (e) => {
    document.getElementById('newPriceLabel').textContent = e.target.value === 'kg' ? 'Precio por kg' : 'Precio por unidad';
  });
  showOverlay();
}

function confirmAddItem() {
  const name = document.getElementById('newName').value.trim();
  const category = document.getElementById('newCategory').value;
  const saleType = document.getElementById('newSaleType').value;
  const price = parseFloat(document.getElementById('newPrice').value) || 0;
  const emoji = document.getElementById('newEmoji').value.trim();
  if (!name || price <= 0) {
    alert('Poné un nombre y un precio mayor a 0.');
    return;
  }
  state.items.push({
    id: uid(), name, category, saleType, price,
    emoji: emoji || (category === 'fruta' ? '🍎' : category === 'fiambre' ? '🥩' : '🥬'),
    promoActive: false, promoPrice: Math.round(price * 0.8), promoMinAmount: 0
  });
  state.activeTab = category;
  persist();
  closeOverlay();
  render();
}

let buyState = { itemId: null, amount: 0 };

function openBuySheet(itemId) {
  const item = state.items.find(i => i.id === itemId);
  if (!item) return;
  buyState = { itemId, amount: 0 };
  const price = effectivePrice(item, 0);

  const overlay = document.getElementById('overlay');
  const sheet = document.getElementById('sheet');

  const quickOptions = item.saleType === 'kg'
    ? [[100, '100 g'], [250, '250 g'], [500, '500 g'], [1000, '1 kg']]
    : [[1, '1 un.'], [2, '2 un.'], [3, '3 un.'], [6, '6 un.']];

  sheet.innerHTML = `
    <div class="sheet-head">
      <div>
        <h2>${item.emoji} ${escapeHtml(item.name)}</h2>
        <div class="sub" id="buySheetPriceSub">${fmt(price)} ${item.saleType === 'kg' ? 'por kg' : 'por unidad'}</div>
      </div>
      <button class="close-x" onclick="closeOverlay()">✕</button>
    </div>
    <div class="qty-grid" id="qtyGrid">
      ${quickOptions.map(([val, lbl]) => `<button class="qty-btn" data-val="${val}" onclick="setBuyAmount(${val})">${lbl}</button>`).join('')}
    </div>
    <div class="custom-row">
      <label>${item.saleType === 'kg' ? 'Otro peso (g):' : 'Otra cantidad:'}</label>
      <input type="number" id="customAmount" min="0" placeholder="${item.saleType === 'kg' ? 'Ej: 500' : 'Ej: 2'}" oninput="setBuyAmount(parseFloat(this.value)||0, true)" />
    </div>
    <div class="money-converter">
      <div class="converter-header">
        <span class="converter-icon">💲</span>
        <span class="converter-title">¿Cuánto lleva por $...?</span>
      </div>
      <div class="converter-input-row">
        <span class="converter-prefix">$</span>
        <input type="number" id="moneyInput" min="0" placeholder="Ej: 1000" oninput="calcFromMoney()" />
      </div>
      <div class="converter-result" id="converterResult"></div>
    </div>
    <div class="subtotal-box">
      <div class="lbl">Subtotal</div>
      <div class="val" id="subtotalVal">${fmt(price * (buyState.amount / (item.saleType === 'kg' ? 1000 : 1)))}</div>
    </div>
    <button class="primary-btn" id="addBtn" onclick="confirmAddToCart()">Agregar al carrito</button>
  `;
  highlightQtyBtn();
  showOverlay();
}

function calcFromMoney() {
  const item = state.items.find(i => i.id === buyState.itemId);
  if (!item) return;
  const moneyInput = document.getElementById('moneyInput');
  const resultEl = document.getElementById('converterResult');
  const pesos = parseFloat(moneyInput.value) || 0;

  if (pesos <= 0) {
    resultEl.innerHTML = '';
    return;
  }

  const price = effectivePrice(item, buyState.amount);

  if (item.saleType === 'kg') {
    // price is per kg, so pesos / price = kg
    const kg = pesos / price;
    const grams = Math.round(kg * 1000);
    let label;
    if (grams >= 1000) {
      const kgRounded = (grams / 1000);
      label = kgRounded % 1 === 0 ? `${kgRounded} kg` : `${kgRounded.toFixed(2)} kg`;
    } else {
      label = `${grams} g`;
    }
    resultEl.innerHTML = `<span class="converter-amount">${label}</span> <span class="converter-desc">de ${escapeHtml(item.name)}</span>`;
  } else {
    // price is per unit
    const units = pesos / price;
    const wholeUnits = Math.floor(units);
    const remainder = Math.round((pesos - (wholeUnits * price)));
    let label = `${wholeUnits} unidad${wholeUnits !== 1 ? 'es' : ''}`;
    if (remainder > 0 && wholeUnits > 0) {
      label += ` <span class="converter-change">(sobran ${fmt(remainder)})</span>`;
    } else if (wholeUnits === 0) {
      label = `No alcanza (mín. ${fmt(price)})`;
    }
    resultEl.innerHTML = `<span class="converter-amount">${label}</span> <span class="converter-desc">de ${escapeHtml(item.name)}</span>`;
  }
}

function applyMoneyAmount() {
  const item = state.items.find(i => i.id === buyState.itemId);
  if (!item) return;
  const pesos = parseFloat(document.getElementById('moneyInput').value) || 0;
  if (pesos <= 0) return;

  const price = effectivePrice(item, buyState.amount);

  if (item.saleType === 'kg') {
    const grams = Math.round((pesos / price) * 1000);
    setBuyAmount(grams);
  } else {
    const units = Math.floor(pesos / price);
    if (units > 0) setBuyAmount(units);
  }
}

function setBuyAmount(val, fromCustom) {
  buyState.amount = val;
  const item = state.items.find(i => i.id === buyState.itemId);
  const price = effectivePrice(item, val);
  const factor = item.saleType === 'kg' ? val / 1000 : val;
  document.getElementById('subtotalVal').textContent = fmt(price * factor);
  document.getElementById('buySheetPriceSub').textContent = `${fmt(price)} ${item.saleType === 'kg' ? 'por kg' : 'por unidad'}`;
  document.getElementById('addBtn').disabled = !(val > 0);
  if (!fromCustom) {
    document.getElementById('customAmount').value = val;
  }
  highlightQtyBtn();
}

function highlightQtyBtn() {
  document.querySelectorAll('#qtyGrid .qty-btn').forEach(b => {
    b.classList.toggle('active', parseFloat(b.dataset.val) === buyState.amount);
  });
}

function confirmAddToCart() {
  const item = state.items.find(i => i.id === buyState.itemId);
  if (!item || buyState.amount <= 0) return;
  const price = effectivePrice(item, buyState.amount);
  const factor = item.saleType === 'kg' ? buyState.amount / 1000 : buyState.amount;
  const subtotal = price * factor;
  const amountLabel = item.saleType === 'kg'
    ? (buyState.amount >= 1000 ? (buyState.amount / 1000) + ' kg' : buyState.amount + ' g')
    : buyState.amount + ' un.';
  activeCart().items.push({
    lineId: uid(), itemId: item.id, name: item.name, emoji: item.emoji,
    amountLabel, subtotal
  });
  closeOverlay();
  render();
}

function openCartSheet() {
  const sheet = document.getElementById('sheet');
  const cart = activeCart();
  const total = cart.items.reduce((s, l) => s + l.subtotal, 0);

  const tabsHtml = state.carts.map(c => {
    const cnt = c.items.length;
    const activeClass = c.id === state.activeCartId ? 'active' : '';
    const countLabel = cnt > 0 ? ' (' + cnt + ')' : '';
    return '<button class="sheet-cart-tab ' + activeClass + '" onclick="switchCart(\'' + c.id + '\'); openCartSheet();">'
      + escapeHtml(c.name) + countLabel + '</button>';
  }).join('');

  const linesHtml = cart.items.map(line => `
    <div class="cart-line">
      <div class="em">${line.emoji}</div>
      <div class="info"><div class="n">${escapeHtml(line.name)}</div><div class="a">${line.amountLabel}</div></div>
      <div class="sub">${fmt(line.subtotal)}</div>
      <button class="del" onclick="removeLine('${line.lineId}')">🗑</button>
    </div>`).join('');

  let totalHtml = '';
  if (cart.items.length > 0) {
    totalHtml = `
    <div class="cart-total-row">
      <div class="l">Total</div>
      <div class="v">${fmt(total)}</div>
    </div>
    <button class="outline-btn" onclick="clearCart()">Vaciar carrito</button>`;
  }

  let deleteBtn = '';
  if (state.carts.length > 1) {
    deleteBtn = '<button class="outline-btn delete-cart-btn" onclick="deleteCart(\'' + cart.id + '\')">🗑 Eliminar &quot;' + escapeHtml(cart.name) + '&quot;</button>';
  }

  sheet.innerHTML = `
    <div class="sheet-head">
      <div><h2>🛒 Carritos</h2></div>
      <button class="close-x" onclick="closeOverlay()">✕</button>
    </div>
    <div class="sheet-cart-tabs">
      ${tabsHtml}
      <button class="sheet-cart-tab add" onclick="addNewCart(); openCartSheet();">+ Nuevo</button>
    </div>
    <div class="cart-name-row">
      <label>Nombre del pedido</label>
      <input type="text" class="cart-name-input" value="${escapeAttr(cart.name)}" onchange="renameCart('${cart.id}', this.value); openCartSheet();" />
    </div>
    ${cart.items.length === 0 ? '<div class="empty-cart-msg">Este carrito está vacío.<br>Cerrá y agregá productos desde el catálogo.</div>' : ''}
    <div id="cartLines">${linesHtml}</div>
    ${totalHtml}
    ${deleteBtn}
  `;
  showOverlay();
}

function removeLine(lineId) {
  const cart = activeCart();
  cart.items = cart.items.filter(l => l.lineId !== lineId);
  if (cart.items.length === 0 && state.carts.length <= 1) { closeOverlay(); }
  else { openCartSheet(); }
  render();
}

function clearCart() {
  activeCart().items = [];
  if (state.carts.length <= 1) { closeOverlay(); }
  else { openCartSheet(); }
  render();
}

function addNewCart() {
  const nums = state.carts.map(c => {
    const m = c.name.match(/^Pedido (\d+)$/);
    return m ? parseInt(m[1]) : 0;
  });
  const next = Math.max(...nums, state.carts.length) + 1;
  const newCart = { id: uid(), name: 'Pedido ' + next, items: [] };
  state.carts.push(newCart);
  state.activeCartId = newCart.id;
  render();
}

function switchCart(cartId) {
  state.activeCartId = cartId;
  render();
}

function renameCart(cartId, name) {
  const cart = state.carts.find(c => c.id === cartId);
  if (cart) cart.name = name.trim() || cart.name;
  render();
}

function deleteCart(cartId) {
  state.carts = state.carts.filter(c => c.id !== cartId);
  if (state.carts.length === 0) {
    const newCart = { id: uid(), name: 'Pedido 1', items: [] };
    state.carts.push(newCart);
    state.activeCartId = newCart.id;
  } else if (state.activeCartId === cartId) {
    state.activeCartId = state.carts[0].id;
  }
  const anyItems = state.carts.some(c => c.items.length > 0);
  if (!anyItems && state.carts.length <= 1) { closeOverlay(); }
  else { openCartSheet(); }
  render();
}

function showOverlay() { document.getElementById('overlay').classList.add('show'); }
function closeOverlay() { document.getElementById('overlay').classList.remove('show'); }

document.getElementById('overlay').addEventListener('click', (e) => {
  if (e.target.id === 'overlay') closeOverlay();
});

/* ---------- swipe gestures ---------- */
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50;

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  // Ignore swipe if overlay is open (a sheet is open) or if an input is focused
  if (document.getElementById('overlay').classList.contains('show')) return;
  if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

  const tabs = ['verdura', 'fruta', 'fiambre'];
  const idx = tabs.indexOf(state.activeTab);
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swiped left
    if (idx < tabs.length - 1) setTab(tabs[idx + 1]);
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swiped right
    if (idx > 0) setTab(tabs[idx - 1]);
  }
}

loadData();
