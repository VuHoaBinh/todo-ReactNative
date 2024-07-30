class Meal {
  constructor(
    id: any,
    categoryIds: any,
    title: any,
    affordability: any,
    complexity: any,
    imageUrl: any,
    duration: any,
    ingredients: any,
    steps: any,
    isGlutenFree: any,
    isVegan: any,
    isVegetarian: any,
    isLactoseFree: any
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
