/**
 * ApartHub – app.js
 * Vanilla JS (ES6+) | No Framework | Mock Data
 */

'use strict';

/* ============================================================
   MOCK DATA – 6 căn hộ mẫu (giả lập bài đăng Facebook)
   ============================================================ */
const mockData = [
  {
    id: 1,
    title: 'Căn hộ cao cấp The Marq – full nội thất, view sông Sài Gòn cực đẹp',
    price: '22.000.000',
    priceNum: 22,
    address: '29 Nguyễn Đình Chiểu, Quận 1, TP. Hồ Chí Minh',
    district: 'Quận 1',
    roomType: '2PN',
    specs: [
      { icon: '📐', label: '78 m²' },
      { icon: '🛏', label: '2 Phòng ngủ' },
      { icon: '🚿', label: '2 Phòng tắm' },
      { icon: '🏢', label: 'Tầng 18' },
    ],
    amenities: ['Hồ bơi', 'Gym', 'Bảo vệ 24/7', 'Bãi xe thông minh', 'Máy lạnh', 'Internet cáp quang', 'Ban công riêng', 'Bếp từ'],
    description: `🏠 CHO THUÊ CĂN HỘ THE MARQ – QUẬN 1

📌 Địa chỉ: 29 Nguyễn Đình Chiểu, Q.1
📐 Diện tích: 78 m² | Tầng 18, view sông

✅ Căn hộ được bàn giao full nội thất cao cấp, sofa da Ý, tủ bếp gỗ sồi nhập khẩu.
✅ View trực diện sông Sài Gòn – cực kỳ thoáng mát và sang trọng.
✅ Nội thất: giường ngủ 1m8, smart TV 55", máy giặt sấy, tủ lạnh inverter.

💰 Giá thuê: 22.000.000 VNĐ / tháng
📞 Xem nhà trực tiếp, liên hệ ngay để được tư vấn!`,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    tag: 'Nổi bật',
    postedTime: '2 giờ trước',
  },
  {
    id: 2,
    title: 'Studio tiện nghi trung tâm Quận 3, gần công viên Lê Thị Riêng',
    price: '6.500.000',
    priceNum: 6.5,
    address: '45 Bà Huyện Thanh Quan, Quận 3, TP. HCM',
    district: 'Quận 3',
    roomType: 'Studio',
    specs: [
      { icon: '📐', label: '32 m²' },
      { icon: '🛏', label: 'Studio' },
      { icon: '🚿', label: '1 Phòng tắm' },
      { icon: '🏢', label: 'Tầng 5' },
    ],
    amenities: ['Thang máy', 'Bảo vệ', 'Camera an ninh', 'Máy lạnh', 'Wifi', 'Giường ngủ', 'Tủ quần áo'],
    description: `🏙️ CHO THUÊ STUDIO – QUẬN 3

📌 Vị trí: 45 Bà Huyện Thanh Quan, gần Vinhomes Central Park
📐 Diện tích: 32 m² | Thiết kế thông minh, tận dụng không gian tối đa

✨ Phòng mới bàn giao 100%, nội thất hiện đại:
- Giường 1m6, tủ âm tường, bàn làm việc
- Bếp mini, tủ lạnh, máy giặt chung tầng
- Cửa sổ thoáng, ánh sáng tự nhiên đẹp

🔑 Phù hợp: Sinh viên, người đi làm, couple trẻ
💰 Giá thuê: 6.500.000 VNĐ / tháng (đã bao điện nước)`,
    imageUrl: 'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&q=80',
    tag: 'Mới đăng',
    postedTime: '5 giờ trước',
  },
  {
    id: 3,
    title: 'Vinhomes Grand Park – căn 2PN đẹp, nội thất cơ bản, giao thông thuận tiện',
    price: '9.500.000',
    priceNum: 9.5,
    address: 'Vinhomes Grand Park, Phường Long Bình, TP. Thủ Đức',
    district: 'Quận 2',
    roomType: '2PN',
    specs: [
      { icon: '📐', label: '56 m²' },
      { icon: '🛏', label: '2 Phòng ngủ' },
      { icon: '🚿', label: '2 Phòng tắm' },
      { icon: '🏢', label: 'Tầng 12' },
    ],
    amenities: ['Hồ bơi Olympic', 'Gym cao cấp', 'Khu BBQ', 'Sân chơi trẻ em', 'Siêu thị Vinmart', 'Bệnh viện Vinmec', 'Trường học nội khu'],
    description: `🌿 CHO THUÊ CĂN HỘ VINHOMES GRAND PARK – THỦ ĐỨC

📌 Tòa S3, tầng 12, hướng Đông Nam mát mẻ
📐 Diện tích: 56 m² | 2 phòng ngủ + 2 WC

🏡 Nội thất cơ bản: rèm, đèn, máy lạnh, bếp điện từ
🌳 Tiện ích nội khu khủng: hồ bơi Olympic, gym, trường học, bệnh viện ngay trong khu đô thị

🚇 Di chuyển: Metro số 1 cách 700m, xe buýt đông tuyến

✅ Chủ nhà trực tiếp cho thuê – không qua môi giới
💰 Giá chỉ: 9.500.000 VNĐ / tháng`,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    tag: 'Giá tốt',
    postedTime: '1 ngày trước',
  },
  {
    id: 4,
    title: 'Căn hộ Masteri Thảo Điền 1PN – full nội thất đẹp như khách sạn 5 sao',
    price: '14.500.000',
    priceNum: 14.5,
    address: '159 Xa Lộ Hà Nội, Phường Thảo Điền, TP. Thủ Đức',
    district: 'Quận 2',
    roomType: '1PN',
    specs: [
      { icon: '📐', label: '52 m²' },
      { icon: '🛏', label: '1 Phòng ngủ' },
      { icon: '🚿', label: '1 Phòng tắm' },
      { icon: '🏢', label: 'Tầng 25' },
    ],
    amenities: ['Sky pool tầng 35', 'Gym & Spa', 'Co-working space', 'Bảo vệ 5 lớp', 'Tủ lạnh', 'Máy giặt', 'Smart TV', 'Lò vi sóng', 'Máy pha cà phê'],
    description: `✨ MASTERI THẢO ĐIỀN – LUXURY APARTMENT

📌 Tòa T5, tầng 25, view trực diện sông Sài Gòn và Landmark 81
📐 Diện tích: 52 m² – bố trí 1 phòng ngủ + phòng khách rộng rãi

🛋️ Nội thất full cao cấp 100%:
- Sofa nhập khẩu, smart TV 65"
- Giường King 1m8, nệm Simmons
- Bếp từ Bosch, tủ lạnh side-by-side
- Máy giặt sấy kết hợp Electrolux
- Máy pha cà phê Nespresso

🌅 Ban công nhìn thẳng ra sông – cảm giác như resort giữa lòng thành phố
💰 Giá thuê: 14.500.000 VNĐ / tháng`,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    tag: 'Hot',
    postedTime: '3 giờ trước',
  },
  {
    id: 5,
    title: 'Căn hộ Sunrise City View – 3PN rộng rãi, khu an ninh, gần Lotte Mart',
    price: '18.000.000',
    priceNum: 18,
    address: '25 Nguyễn Hữu Thọ, Quận 7, TP. Hồ Chí Minh',
    district: 'Bình Thạnh',
    roomType: '3PN',
    specs: [
      { icon: '📐', label: '110 m²' },
      { icon: '🛏', label: '3 Phòng ngủ' },
      { icon: '🚿', label: '2 Phòng tắm' },
      { icon: '🏢', label: 'Tầng 8' },
    ],
    amenities: ['Hồ bơi', 'Gym', 'Sân tennis', 'Nhà trẻ nội khu', 'Siêu thị', 'Nhà hàng', 'Café', 'Phòng party'],
    description: `🏘️ CHO THUÊ CĂN 3PN – SUNRISE CITY VIEW Q.7

📌 Địa chỉ: 25 Nguyễn Hữu Thọ, cách Lotte Mart Q.7 chỉ 300m
📐 Diện tích: 110 m² siêu rộng | 3 phòng ngủ đều có cửa sổ tự nhiên

🏠 Nội thất cao cấp, phong cách Scandinavian:
- 3 giường ngủ đầy đủ, tủ quần áo âm tường
- Phòng khách rộng, sofa góc L
- Nhà bếp đảo, tủ đồ khô cao tầng
- 2 phòng tắm với shower và bồn tắm đứng

👨‍👩‍👧 Phù hợp gia đình 4-5 người, người nước ngoài expat
✅ Hợp đồng linh hoạt từ 6 tháng
💰 Giá: 18.000.000 VNĐ / tháng`,
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    tag: 'Gia đình',
    postedTime: '2 ngày trước',
  },
  {
    id: 6,
    title: 'Chung cư mini Bình Thạnh – gần BX Miền Đông mới, an ninh tốt, giá sinh viên',
    price: '4.200.000',
    priceNum: 4.2,
    address: '88 Xô Viết Nghệ Tĩnh, Phường 17, Bình Thạnh, TP. HCM',
    district: 'Bình Thạnh',
    roomType: '1PN',
    specs: [
      { icon: '📐', label: '28 m²' },
      { icon: '🛏', label: '1 Phòng ngủ' },
      { icon: '🚿', label: '1 Phòng tắm' },
      { icon: '🏢', label: 'Tầng 3' },
    ],
    amenities: ['Thang máy', 'Camera 24/7', 'Wifi miễn phí', 'Giặt ủi tự động', 'Bãi xe máy', 'Cửa khóa vân tay'],
    description: `🎓 PHÒNG CHUNG CƯ MINI – BÌNH THẠNH

📌 88 Xô Viết Nghệ Tĩnh, P17, Bình Thạnh
📐 Diện tích: 28 m² – bố trí thông minh, đầy đủ tiện nghi

🌟 Phòng mới hoàn toàn 2024:
- Máy lạnh mới, nóng lạnh, quạt trần
- Giường 1m4, tủ quần áo, kệ sách
- Bếp từ mini, lò vi sóng
- Wifi Viettel 100Mbps

📍 Tiện ích xung quanh:
- Cách ĐH Kinh Tế 1km, ĐH Luật 800m
- Chợ Bình Thạnh đi bộ 5 phút

💡 Điện 3.000đ/kWh | Nước 80.000đ/người
💰 Giá chỉ: 4.200.000 VNĐ / tháng
🤝 Không cọc môi giới – chủ nhà trực tiếp!`,
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    tag: 'Giá rẻ',
    postedTime: '6 giờ trước',
  },
];

/* ============================================================
   DOM REFERENCES
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const listingGrid   = $('#listingGrid');
const emptyState    = $('#emptyState');
const resultCount   = $('#resultCount');
const filterDistrict = $('#filterDistrict');
const filterPrice   = $('#filterPrice');
const filterRoom    = $('#filterRoom');
const applyFilter   = $('#applyFilter');
const resetFilter   = $('#resetFilter');

const modalOverlay  = $('#modalOverlay');
const modalClose    = $('#modalClose');
const header        = $('#header');
const navToggle     = $('#navToggle');
const nav           = $('#nav');

/* ============================================================
   STATE
   ============================================================ */
let activeData = [...mockData];

/* ============================================================
   RENDER CARDS
   ============================================================ */
function formatPrice(price) {
  return `${price}.000 <span>VNĐ/tháng</span>`;
}

function createCard(apt) {
  const article = document.createElement('article');
  article.className = 'card animate-in';
  article.setAttribute('tabindex', '0');
  article.setAttribute('role', 'button');
  article.setAttribute('aria-label', `Xem chi tiết: ${apt.title}`);
  article.dataset.id = apt.id;

  const specsHTML = apt.specs
    .map(s => `<span class="card__spec">${s.icon} ${s.label}</span>`)
    .join('');

  article.innerHTML = `
    <div class="card__img-wrap">
      <img
        class="card__img"
        src="${apt.imageUrl}"
        alt="${apt.title}"
        loading="lazy"
      />
      <span class="card__tag">${apt.tag}</span>
      <span class="card__fav" title="Yêu thích" role="button" aria-label="Thêm vào yêu thích">🤍</span>
    </div>
    <div class="card__body">
      <p class="card__price">${formatPrice(apt.price)}</p>
      <h3 class="card__title">${apt.title}</h3>
      <p class="card__address">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        ${apt.address}
      </p>
      <div class="card__specs">${specsHTML}</div>
    </div>
    <div class="card__footer">
      <span class="card__time">🕐 ${apt.postedTime}</span>
      <span class="card__cta">Xem chi tiết →</span>
    </div>
  `;

  // Prevent fav button from triggering card click
  article.querySelector('.card__fav').addEventListener('click', handleFavToggle);

  // Card click → open modal
  article.addEventListener('click', (e) => {
    if (e.target.closest('.card__fav')) return;
    openModal(apt.id);
  });

  // Keyboard support
  article.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(apt.id);
    }
  });

  return article;
}

function renderCards(data) {
  listingGrid.innerHTML = '';

  if (!data.length) {
    emptyState.classList.remove('hidden');
    resultCount.textContent = '';
    return;
  }

  emptyState.classList.add('hidden');
  resultCount.textContent = `Tìm thấy ${data.length} căn hộ phù hợp`;

  const fragment = document.createDocumentFragment();
  data.forEach(apt => fragment.appendChild(createCard(apt)));
  listingGrid.appendChild(fragment);
}

/* ============================================================
   FAVOURITES
   ============================================================ */
function handleFavToggle(e) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const isFav = btn.textContent === '❤️';
  btn.textContent = isFav ? '🤍' : '❤️';
  btn.title = isFav ? 'Yêu thích' : 'Bỏ yêu thích';
}

/* ============================================================
   FILTER LOGIC
   ============================================================ */
function applyFilters() {
  const district  = filterDistrict.value;
  const priceRange = filterPrice.value;
  const roomType  = filterRoom.value;

  activeData = mockData.filter(apt => {
    // District filter
    if (district && !apt.district.includes(district) && !apt.address.includes(district)) return false;

    // Price filter
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(v => v === '+' ? Infinity : Number(v));
      const pMax = priceRange.endsWith('+') ? Infinity : Number(priceRange.split('-')[1]);
      const pMin = Number(priceRange.split('-')[0]);
      if (apt.priceNum < pMin || apt.priceNum > (pMax || Infinity)) return false;
    }

    // Room filter
    if (roomType && apt.roomType !== roomType) return false;

    return true;
  });

  renderCards(activeData);

  // Smooth scroll to listings
  $('#listings').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

applyFilter.addEventListener('click', applyFilters);

// Reset filter
if (resetFilter) {
  resetFilter.addEventListener('click', () => {
    filterDistrict.value = '';
    filterPrice.value = '';
    filterRoom.value = '';
    activeData = [...mockData];
    renderCards(activeData);
  });
}

// Also allow Enter key in selects to trigger filter
[filterDistrict, filterPrice, filterRoom].forEach(sel => {
  sel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') applyFilters();
  });
});

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const apt = mockData.find(a => a.id === id);
  if (!apt) return;

  // Populate modal fields
  $('#modalImg').src = apt.imageUrl;
  $('#modalImg').alt = apt.title;
  $('#modalImg').style.opacity = '0';

  $('#modalPrice').innerHTML = `${apt.price}.000 VNĐ<small style="font-size:.6em;font-weight:500;color:var(--clr-text-muted)">/tháng</small>`;
  $('#modalTag').textContent = apt.tag;
  $('#modalTitle').textContent = apt.title;
  $('#modalAddressText').textContent = apt.address;
  $('#modalBadge').textContent = apt.tag;

  // Specs
  $('#modalSpecs').innerHTML = apt.specs
    .map(s => `<span class="modal__spec">${s.icon} ${s.label}</span>`)
    .join('');

  // Description
  $('#modalDescription').textContent = apt.description;

  // Amenities
  $('#modalAmenities').innerHTML = apt.amenities
    .map(a => `<span class="modal__amenity">✓ ${a}</span>`)
    .join('');

  // CTA buttons
  $('#modalMessenger').href = `https://m.me/aparthub?ref=apt_${apt.id}`;
  $('#modalZalo').href = `tel:0901234567`;

  // Activate overlay
  modalOverlay.classList.add('active');
  document.body.classList.add('modal-open');

  // Fade in image after layout
  requestAnimationFrame(() => {
    $('#modalImg').style.transition = 'opacity 0.4s ease';
    $('#modalImg').style.opacity = '1';
  });

  // Focus modal for accessibility
  setTimeout(() => modalClose.focus(), 300);
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.classList.remove('modal-open');
}

modalClose.addEventListener('click', closeModal);

// Click outside modal to close
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

/* ============================================================
   HEADER – Sticky / Scroll effects
   ============================================================ */
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Add scrolled class for shadow
  header.classList.toggle('scrolled', scrollY > 10);

  lastScrollY = scrollY;
}, { passive: true });

/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav on link click
$$('.nav__link', nav).forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// Close nav on outside click
document.addEventListener('click', (e) => {
  if (!header.contains(e.target) && nav.classList.contains('open')) {
    nav.classList.remove('open');
    navToggle.classList.remove('active');
  }
});

/* ============================================================
   SCROLL-TO-TOP BUTTON
   ============================================================ */
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.setAttribute('aria-label', 'Lên đầu trang');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   INTERSECTION OBSERVER – Animate cards on scroll
   ============================================================ */
function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.card').forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
  });
}

/* ============================================================
   FLOATING BUTTONS – Entrance animation
   ============================================================ */
function initFloatButtons() {
  const floatGroup = $('#floatGroup');
  setTimeout(() => {
    floatGroup.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    floatGroup.style.opacity = '1';
    floatGroup.style.transform = 'translateY(0)';
  }, 1200);

  floatGroup.style.opacity = '0';
  floatGroup.style.transform = 'translateY(30px)';
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  renderCards(mockData);
  observeCards();
  initFloatButtons();
}

// Run after DOM is ready (script is deferred via placement at end of body)
init();
