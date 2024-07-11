// Define arrays of meal options for different diets
const breakfastOptions = {
    standard: ["Oatmeal with fruits", "Avocado toast", "Greek yogurt with berries", "Smoothie bowl", "Eggs and toast", "Pancakes with syrup"],
    keto: ["Egg muffins with cheese and spinach", "Bacon and eggs", "Chia seed pudding", "Avocado and smoked salmon", "Coconut flour pancakes"],
    mediterranean: ["Mediterranean omelette", "Greek yogurt with honey and nuts", "Muesli with fruits", "Hummus and veggies", "Caprese salad", "Whole grain toast with olive oil and tomato"],
    carnivore: ["Steak and eggs", "Chicken thighs with roasted vegetables", "Beef burger (no bun)", "Pork chops with salad", "Ground beef stir-fry"],
    lowCarb: ["Zucchini noodles with pesto", "Cauliflower fried rice", "Spinach and feta omelette", "Grilled chicken with green beans", "Salmon with asparagus"],
    pescatarian: ["Grilled salmon with quinoa", "Tuna salad with avocado", "Shrimp stir-fry with veggies", "Seared scallops with spinach", "Sushi rolls with avocado"],
    vegan: ["Smoothie bowl with fruits", "Avocado toast", "Chia pudding with almond milk", "Vegan pancakes", "Tofu scramble", "Fruit salad"],
    paleo: ["Sweet potato hash with eggs", "Smoothie with almond milk and spinach", "Berries with coconut cream", "Almond flour pancakes", "Scrambled eggs with avocado"],
    vegetarian: ["Greek yogurt with honey and nuts", "Avocado toast", "Fruit smoothie", "Vegetable omelette", "Whole grain toast with peanut butter"],
    glutenFree: ["Smoothie bowl with fruits", "Oatmeal with almond milk", "Greek yogurt with berries", "Eggs and bacon", "Rice cakes with avocado"]
};

const lunchOptions = {
    standard: ["Grilled chicken salad", "Quinoa and vegetable stir-fry", "Caprese sandwich", "Sushi rolls", "Burrito bowl", "Pasta with tomato sauce"],
    keto: ["Chicken Caesar salad (no croutons)", "Avocado and chicken lettuce wraps", "Beef and broccoli stir-fry", "Eggplant parmesan", "Cobb salad with ranch dressing"],
    mediterranean: ["Greek salad with grilled chicken", "Falafel wrap", "Tabbouleh salad", "Mediterranean vegetable couscous", "Stuffed bell peppers", "Lentil soup"],
    carnivore: ["Beef steak with mashed potatoes", "Pulled pork sandwich", "Bacon and cheese burger", "Beef kebabs with salad", "Roast chicken with vegetables"],
    lowCarb: ["Turkey lettuce wraps", "Cauliflower crust pizza", "Salmon and avocado salad", "Egg salad with lettuce wraps", "Shrimp and avocado bowl"],
    pescatarian: ["Tuna salad sandwich", "Seared tuna salad", "Fish tacos with slaw", "Grilled shrimp skewers with quinoa", "Seafood paella"],
    vegan: ["Quinoa salad with chickpeas", "Vegan burrito bowl", "Lentil soup", "Grilled veggie sandwich", "Vegan sushi rolls", "Falafel wrap"],
    paleo: ["Grilled chicken with avocado", "Salmon salad with mixed greens", "Turkey lettuce wraps", "Zucchini noodles with pesto", "Stuffed bell peppers"],
    vegetarian: ["Vegetable stir-fry with tofu", "Caprese salad", "Minestrone soup", "Veggie burger", "Stuffed mushrooms"],
    glutenFree: ["Grilled chicken salad", "Quinoa and vegetable stir-fry", "Gluten-free pasta with marinara", "Rice and beans", "Turkey and avocado wrap"]
};

const dinnerOptions = {
    standard: ["Salmon with roasted vegetables", "Vegetarian lasagna", "Teriyaki chicken with rice", "Steak and mashed potatoes", "Shrimp tacos", "Pizza margherita"],
    keto: ["Grilled salmon with broccoli", "Zucchini noodles with pesto", "Stuffed bell peppers (keto version)", "Baked chicken thighs with cauliflower mash", "Keto beef stir-fry"],
    mediterranean: ["Mediterranean baked cod", "Ratatouille with chickpeas", "Lamb chops with couscous", "Greek lemon chicken", "Moussaka", "Spinach and feta pie"],
    carnivore: ["Ribeye steak with baked potatoes", "Pork ribs with coleslaw", "Beef brisket with roasted vegetables", "Lamb chops with mint sauce", "Chicken wings with BBQ sauce"],
    lowCarb: ["Cauliflower crust pizza with toppings", "Stuffed mushrooms with sausage and cheese", "Chicken and vegetable stir-fry", "Beef stew with cauliflower", "Grilled chicken with salad"],
    pescatarian: ["Baked cod with lemon and herbs", "Shrimp scampi with zoodles", "Grilled swordfish with quinoa", "Tofu and vegetable stir-fry", "Vegetarian sushi rolls"],
    vegan: ["Vegan curry with rice", "Stuffed bell peppers", "Spaghetti with marinara sauce", "Vegan chili", "Grilled tofu with veggies", "Vegan stir-fry"],
    paleo: ["Grilled steak with sweet potatoes", "Baked salmon with asparagus", "Chicken stir-fry with vegetables", "Stuffed acorn squash", "Lamb chops with roasted carrots"],
    vegetarian: ["Vegetarian lasagna", "Stuffed bell peppers", "Vegetable stir-fry with tofu", "Eggplant parmesan", "Vegetable curry with rice"],
    glutenFree: ["Grilled chicken with vegetables", "Baked salmon with quinoa", "Gluten-free pizza", "Stuffed bell peppers", "Stir-fried vegetables with tofu"]
};

const snackOptions = {
    standard: ["Apple with peanut butter", "Trail mix", "Greek yogurt with granola", "Hummus and carrots", "Cheese and crackers", "Smoothie"],
    keto: ["Hard-boiled eggs", "Cheese sticks", "Almonds or mixed nuts", "Avocado slices with salt", "Cucumber slices with cream cheese", "Beef jerky"],
    mediterranean: ["Olives and feta cheese", "Whole grain crackers with hummus", "Fresh fruit", "Yogurt with honey and nuts", "Dates with almonds", "Dried figs"],
    carnivore: ["Beef jerky", "Pork rinds", "Cheese cubes", "Bacon strips", "Hard-boiled eggs", "Chicken wings"],
    lowCarb: ["Celery sticks with peanut butter", "Cheese crisps", "Greek yogurt with berries", "Almonds or walnuts", "Cherry tomatoes with mozzarella", "Protein shake"],
    pescatarian: ["Seaweed snacks", "Edamame", "Greek yogurt with honey", "Nuts and seeds mix", "Smoothie with spinach and berries", "Cucumber and avocado rolls"],
    vegan: ["Hummus and veggie sticks", "Fruit salad", "Nuts and seeds", "Vegan protein bar", "Edamame", "Apple slices with almond butter"],
    paleo: ["Almond butter with apple slices", "Carrot sticks with guacamole", "Mixed nuts", "Paleo protein bar", "Berries with coconut cream", "Hard-boiled eggs"],
    vegetarian: ["Hummus with veggie sticks", "Fruit salad", "Yogurt with granola", "Cheese and crackers", "Trail mix", "Smoothie"],
    glutenFree: ["Rice cakes with almond butter", "Fresh fruit", "Gluten-free granola bar", "Greek yogurt with honey", "Hummus with veggie sticks", "Cheese and gluten-free crackers"]
};

// Function to generate a random meal suggestion based on selected diet
function generateMeal(mealType) {
    const dietType = document.getElementById("diet").value;
    let options;
    switch (mealType) {
        case 'breakfast':
            options = breakfastOptions[dietType];
            break;
        case 'lunch':
            options = lunchOptions[dietType];
            break;
        case 'dinner':
            options = dinnerOptions[dietType];
            break;
        case 'snack':
            options = snackOptions[dietType];
            break;
        default:
            options = [];
    }

    if (options && options.length > 0) {
        const randomIndex = Math.floor(Math.random() * options.length);
        const selectedMeal = options[randomIndex];
        document.getElementById(mealType).innerText = selectedMeal;
    } else {
        document.getElementById(mealType).innerText = "No options available";
    }
}

// Function to update all meal types based on the selected diet
function updateMeals() {
    generateMeal('breakfast');
    generateMeal('lunch');
    generateMeal('dinner');
    generateMeal('snack');
}
