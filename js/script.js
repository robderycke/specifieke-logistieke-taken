// #region *** DATA - stockData                          ***********
const stockData = {
    "frigo_en_voeding": {
      "beleg_hartig": [
        { "huidige_voorraad": 4, "minimum_voorraad": 3, "product": "Americain" },
        { "huidige_voorraad": 6, "minimum_voorraad": 4, "product": "Hesp" },
        { "huidige_voorraad": 5, "minimum_voorraad": 3, "product": "Jonge kaas" },
        { "huidige_voorraad": 4, "minimum_voorraad": 3, "product": "Kaas" },
        { "huidige_voorraad": 3, "minimum_voorraad": 2, "product": "Kip curry" },
        { "huidige_voorraad": 5, "minimum_voorraad": 3, "product": "Salami" },
        { "huidige_voorraad": 8, "minimum_voorraad": 5, "product": "Smeerkaas" },
        { "huidige_voorraad": 2, "minimum_voorraad": 2, "product": "Vissla" },
        { "huidige_voorraad": 3, "minimum_voorraad": 2, "product": "Zalm" }
      ],
      "beleg_zoet": [
        { "huidige_voorraad": 2, "minimum_voorraad": 2, "product": "Choco" },
        { "eenheid": "pakjes", "huidige_voorraad": 15, "minimum_voorraad": 10, "product": "Confituur aardbei" },
        { "eenheid": "pakjes", "huidige_voorraad": 12, "minimum_voorraad": 10, "product": "Confituur abrikoos" },
        { "eenheid": "pakjes", "huidige_voorraad": 10, "minimum_voorraad": 10, "product": "Confituur bosbes" },
        { "eenheid": "pakjes", "huidige_voorraad": 11, "minimum_voorraad": 10, "product": "Confituur kers" },
        { "huidige_voorraad": 2, "minimum_voorraad": 2, "product": "Honing" },
        { "huidige_voorraad": 2, "minimum_voorraad": 1, "product": "Siroop" },
        { "huidige_voorraad": 3, "minimum_voorraad": 2, "product": "Speculoospasta" }
      ],
      "brood_en_bakkerij": [
        { "huidige_voorraad": 10, "minimum_voorraad": 5, "product": "Beschuiten" },
        { "huidige_voorraad": 8, "minimum_voorraad": 4, "product": "Brood bruin" },
        { "huidige_voorraad": 3, "minimum_voorraad": 2, "product": "Brood maisbrood" },
        { "huidige_voorraad": 2, "minimum_voorraad": 1, "product": "Brood roggebrood" },
        { "huidige_voorraad": 3, "minimum_voorraad": 2, "product": "Brood speltbrood" },
        { "huidige_voorraad": 6, "minimum_voorraad": 3, "product": "Brood volkorenbrood" },
        { "huidige_voorraad": 10, "minimum_voorraad": 5, "product": "Brood wit" },
        { "huidige_voorraad": 5, "minimum_voorraad": 3, "product": "Peperkoek" },
        { "huidige_voorraad": 15, "minimum_voorraad": 10, "product": "Speculooskoek" }
      ],
      "dranken": [
        { "eenheid": "flessen", "huidige_voorraad": 12, "minimum_voorraad": 8, "product": "Fruitsap" },
        { "huidige_voorraad": 20, "minimum_voorraad": 10, "product": "Koffie" },
        { "huidige_voorraad": 10, "minimum_voorraad": 5, "product": "Thee" }
      ],
      "fruit": [
        { "huidige_voorraad": 25, "minimum_voorraad": 15, "product": "Appel" },
        { "huidige_voorraad": 20, "minimum_voorraad": 12, "product": "Banaan" },
        { "huidige_voorraad": 15, "minimum_voorraad": 10, "product": "Kiwi" },
        { "huidige_voorraad": 30, "minimum_voorraad": 15, "product": "Mandarijn" },
        { "huidige_voorraad": 18, "minimum_voorraad": 10, "product": "Peer" },
        { "huidige_voorraad": 10, "minimum_voorraad": 5, "product": "Pruim" },
        { "huidige_voorraad": 22, "minimum_voorraad": 12, "product": "Sinaasappel" }
      ],
      "zuivel_en_pudding": [
        { "eenheid": "pakjes", "huidige_voorraad": 12, "minimum_voorraad": 10, "product": "Boter" },
        { "eenheid": "flessen", "huidige_voorraad": 24, "minimum_voorraad": 10, "product": "Melk 1L" },
        { "huidige_voorraad": 15, "minimum_voorraad": 10, "product": "Pudding chocolade" },
        { "huidige_voorraad": 15, "minimum_voorraad": 10, "product": "Pudding vanille" },
        { "eenheid": "potjes", "huidige_voorraad": 25, "minimum_voorraad": 20, "product": "Yoghurt fruit aardbei" },
        { "eenheid": "potjes", "huidige_voorraad": 22, "minimum_voorraad": 20, "product": "Yoghurt fruit ananas" },
        { "eenheid": "potjes", "huidige_voorraad": 20, "minimum_voorraad": 20, "product": "Yoghurt fruit appel" },
        { "eenheid": "potjes", "huidige_voorraad": 28, "minimum_voorraad": 20, "product": "Yoghurt fruit bosbes" },
        { "eenheid": "potjes", "huidige_voorraad": 24, "minimum_voorraad": 20, "product": "Yoghurt fruit kers" },
        { "eenheid": "potjes", "huidige_voorraad": 21, "minimum_voorraad": 20, "product": "Yoghurt fruit peer" },
        { "eenheid": "potjes", "huidige_voorraad": 30, "minimum_voorraad": 20, "product": "Yoghurt natuur" }
      ]
    },
    "linnen": [
      { "eenheid": "stuks", "huidige_voorraad": 85, "minimum_voorraad": 60, "product": "Handdoeken" },
      { "eenheid": "stuks", "huidige_voorraad": 45, "minimum_voorraad": 40, "product": "Lakens" },
      { "eenheid": "stuks", "huidige_voorraad": 65, "minimum_voorraad": 50, "product": "Steeklakens" },
      { "eenheid": "stuks", "huidige_voorraad": 90, "minimum_voorraad": 80, "product": "Washandjes" }
    ],
    "onderleggers": [
      { "eenheid": "stuks", "huidige_voorraad": 45, "minimum_voorraad": 30, "product": "Onderleggers extra-absorberend" },
      { "eenheid": "stuks", "huidige_voorraad": 60, "minimum_voorraad": 50, "product": "Onderleggers standaard" }
    ]
};
// #endregion

// #region *** DOM references                           ***********
const html_stockOutput = document.getElementById('js-stock-output');
const html_sinnerCards = document.querySelectorAll('.js-sinner-card');
const html_sinnerBox = document.querySelector('.js-sinner-info');
const html_sinnerText = document.querySelector('.js-sinner-text');
// #endregion

// #region *** Callback-Visualisation - show___         ***********
const showStock = (data) => {
    let html = '';
    for (const category in data) {
        if (Array.isArray(data[category])) {
            html += createCategoryHTML(category, data[category]);
        } else {
            for (const sub in data[category]) {
                html += createCategoryHTML(sub, data[category][sub]);
            }
        }
    }
    html_stockOutput.innerHTML = html;
};

const createCategoryHTML = (title, items) => {
    // Veranderd naar col-md-6 voor max 2 kolommen naast elkaar
    return `
        <div class="col-md-6 mb-4">
            <div class="c-stock-group shadow-sm h-100 bg-white u-transition">
                <h3 class="h6 fw-bold text-uppercase mb-3 u-text-primary border-bottom pb-2">
                    <i class="bi bi-box-seam me-2"></i>${title.replace(/_/g, ' ')}
                </h3>
                <div class="table-responsive">
                    <table class="table table-sm align-middle mb-0">
                        <thead>
                            <tr class="small text-muted">
                                <th>PRODUCT</th>
                                <th class="text-center">MIN</th>
                                <th class="text-center">NU</th>
                                <th class="text-center">BESTEL</th>
                            </tr>
                        </thead>
                        <tbody>${items.map(item => createRowHTML(item)).join('')}</tbody>
                    </table>
                </div>
            </div>
        </div>`;
};

const createRowHTML = (item) => {
    const bestel = Math.max(0, item.minimum_voorraad - item.huidige_voorraad);
    return `
        <tr>
            <td class="small fw-medium">${item.product}</td>
            <td class="text-center">${item.minimum_voorraad}</td>
            <td class="text-center">
                <input type="number" class="c-input-nu js-nu-input" 
                       value="${item.huidige_voorraad}" data-max="${item.minimum_voorraad}">
            </td>
            <td class="fw-bold text-center js-bestel-veld ${bestel > 0 ? 'text-danger' : 'text-success'}">${bestel}</td>
        </tr>`;
};
// #endregion

// #region *** Callback-No Visualisation - callback___  ***********
const callbackUpdateRow = (input) => {
    const max = parseInt(input.dataset.max);
    let nu = parseInt(input.value) || 0;

    if (nu > max) { nu = max; input.value = max; }
    if (nu < 0) { nu = 0; input.value = 0; }

    const row = input.closest('tr');
    const bestelVeld = row.querySelector('.js-bestel-veld');
    const nieuwBestel = Math.max(0, max - nu);

    bestelVeld.textContent = nieuwBestel;
    bestelVeld.className = `fw-bold text-center js-bestel-veld ${nieuwBestel > 0 ? 'text-danger' : 'text-success'}`;
};
// #endregion



// #region *** Data Access - get___                     ***********
const getInitialData = () => {
    showStock(stockData);
};
// #endregion

// #region *** Event Listeners - listenTo___            ***********
const listenToUi = () => {
    // Sinner Interaction
    html_sinnerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            html_sinnerText.textContent = card.dataset.info;
            html_sinnerBox.classList.remove('d-none');
        });
        card.addEventListener('mouseleave', () => html_sinnerBox.classList.add('d-none'));
    });

    // Stock Change
    html_stockOutput.addEventListener('input', (e) => {
        if (e.target.classList.contains('js-nu-input')) {
            callbackUpdateRow(e.target);
        }
    });
};
// #endregion

// #region *** Init / DOMContentLoaded                  ***********
const init = () => {
    getInitialData();
    listenToUi();
};

document.addEventListener('DOMContentLoaded', init);
// #endregion