import RestaurantSource from "../../data/restaurants-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const ExploreRestaurant = {
  async render() {
    return `
      <h2>Explore Restaurant</h2>
      <section tabindex="0" id="content">
      
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.exploreRestaurants();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector("#content");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ExploreRestaurant;
