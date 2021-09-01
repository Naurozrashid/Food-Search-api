const searchFood = () => {
    const searchbox=document.getElementById('search-field');
    const searchText= searchbox.value;
    searchbox.value='';
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.meals));
}
const displaySearch = meals => {
    const searchResult = document.getElementById("search-result");
    searchResult.textContent='';
    meals.forEach(meal => {
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div onclick='loadMeal(${meal.idMeal})' class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      </div>
    </div>
        `;
        searchResult.appendChild(div);
        
    });
}

const loadMeal = mealid => {
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = mealDetail => {
   
   const mealdetails=document.getElementById('meal-details');
   mealdetails.textContent='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
    <img src="${mealDetail.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mealDetail.strMeal}</h5>
    <p class="card-text">${mealDetail.strInstructions}</p>
    <a href="${mealDetail.strYoutube}" class="btn btn-primary">Go somewhere</a>
    `;
    mealdetails.appendChild(div);

}