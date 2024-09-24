import axiosClient from "../axiosClient";

export function searchMeals({ commit }, meal) {
  axiosClient.get(`/search.php?s=${meal}`).then(({ data }) => {
    commit("setSearchedMeals", data?.meals);
  });
}

export function searchByLetter({ commit }, letter) {
  axiosClient.get(`/search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data?.meals);
  });
}

export function searchByIngredient({ commit }, ingredient) {
  axiosClient.get(`/filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealsByIngredient", data?.meals);
  });
}
export function mealsByCategory({ commit }, category) {
  axiosClient.get(`filter.php?c=${category}`).then(({ data }) => {
    commit("setMealsByCategory", data?.meals);
  });
}
