import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article>
  <div class="article__header">
      <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
      <div class="city">
          <p tabindex="0" class="city__title">${restaurant.city}</p>
      </div>
  </div>
  <div class="article__body">
      <div class="article__rating">
          <h6 tabindex="0" class="rating">⭐️ <strong>${restaurant.rating}</strong></h6>
      </div>
      <h3 tabindex="0" class="title">${restaurant.name}</h3>
      <p tabindex="0" class="description">${restaurant.description}</p>
      <a class="cta__card" href="${`/#/detail/${restaurant.id}`}">See More...</a>
  </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <article id="article__detail">
    <div class="article__header">
    <h2 tabindex="0" class="title">${restaurant.name}</h2>
    <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
    <div class="city">
        <p tabindex="0" class="city__title">${restaurant.city}</p>
    </div>
    <div class="category-rating-address">
      <div class="address">
        <h3 tabindex="0">Address</h3>
        <p tabindex="0">${restaurant.address}</p>
      </div>
      <div class="category">
        <h3 tabindex="0">Category</h3>
        <p tabindex="0">${restaurant.categories.map((category) => category.name).join(', ')}</p>
      </div>
      <div class="rating-container">
        <h3 tabindex="0" class="rating__detail">⭐️ <strong>${restaurant.rating}</strong></h3>
      </div>
    </div>
  </div>
  <div class="article__body">
    <p tabindex="0" class="description-long">${restaurant.description}</p><br>
    <div class="article__menu">
      <h3>Daftar Menu</h3>
      <div class="menu__food">
        <h4>Daftar Makanan</h4>
        <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
      </div>
      <div class="menu__drink">
        <h4>Daftar Minuman</h4>
        <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
      </div>
    </div>
  </div>
  <div class="article__footer">
    <h3>Review</h3>
    <div class="review-container">
      ${restaurant.customerReviews.map((review) => `
        <div class="reviewer">
          <h4>${review.name} | ${review.date}</h4>
          <p>${review.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
  <div id="likeButtonContainer"></div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
