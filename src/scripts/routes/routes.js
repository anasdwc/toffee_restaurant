import DetailRestaurant from '../views/pages/detail';
import ExploreRestaurant from '../views/pages/explore';
import Like from '../views/pages/like';

const routes = {
  '/': ExploreRestaurant, // default page
  '/explore-restaurant': ExploreRestaurant,
  '/detail/:id': DetailRestaurant,
  '/like': Like,
};

export default routes;
