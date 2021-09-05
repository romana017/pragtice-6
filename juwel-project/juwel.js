const searchFood = async () => {
    const searchField = document.getElementById('srarch-firld');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}  `
    // console.log(url)

    // load data 
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchRuselt(data.meals))
}

const displaySearchRuselt = meals => {
    const searchRuselt = document.getElementById('search-result');

    searchRuselt.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick ="loadMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice
                (0, 200)}</p>
                </div>
            </div>
        `;
        searchRuselt.appendChild(div);
    });
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))

}

const displayMealDetail = meal => {
    // console.log(meal);
    const mealDeatil = document.getElementById('meal-detail');

    // clear details 
    mealDeatil.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice
            (0, 400)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDeatil.appendChild(div);
}


const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`
console.log(bondCode);

