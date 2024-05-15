export const colors = {
    COLOR_PRIMARY: "#F96163",
    COLOR_LIGHT: "#FFF",
    COLOR_DARK: "#000",
    COLOR_DARK_ALT: "#262626",
    COLOR_DARK_BG: "#6F4E37",
    COLOR_PRIMARY_100: "red",
    COLOR_DETAILS_100: "#F39C12",
    COLOR_DETAILS_200: "red",
    COLOR_DETAILS_300: "#275E45",
    COLOR_DETAILS_400: "#CB4B2C",
    COLOR_DETAILS_500: "brown",
    COLOR_DETAILS_600: "#EFEFEF",
    COLOR_DETAILS_700: "#F1923D",
}

export const categories = [
    {
        id: "01",
        category: "Breakfast"
    },
    {
        id: "02",
        category: "Lunch"
    },
    {
        id: "03",
        category: "Dinner"
    },
    {
        id: "04",
        category: "Asian"
    },
    {
        id: "05",
        category: "Italian"
    },
    {
        id: "06",
        category: "Desserts"
    },
    {
        id: "07",
        category: "Vegetarian"
    },
    {
        id: "08",
        category: "Seafood"
    }
]

export const recipeList = [
    {
        id: "01",
        name: "Tuna Tartare",
        image: require("../../assets/tuna.png"),
        rating: "4.2",
        ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
        time: "40 mins",
        difficulty: "Medium",
        calories: "420 cal",
        color: colors.COLOR_DETAILS_100,
        description: "A fresh and flavorful raw tuna dish, delicately seasoned and served as an elegant appetizer or light meal.",
        steps: [
            "Dice fresh tuna into small cubes.",
            "Finely chop shallots, chives, and parsley.",
            "Mix tuna with chopped ingredients in a bowl.",
            "Season mixture with soy sauce, sesame oil, and lime juice.",
            "Gently toss to combine, ensuring tuna is evenly coated.",
        ]
    },
    {
        id: "02",
        name: "Lasagna",
        image: require("../../assets/lasagna-nobg.png"),
        rating: "3.6",
        ingredients: ["Lasagna Noodles", "Ground Beef", "Ricotta Cheese", "Tomato Sauce"],
        time: "40 mins",
        difficulty: "Medium",
        calories: "420 cal",
        color: colors.COLOR_DETAILS_200,
        description: "Classic lasagna layered with pasta, rich tomato sauce, creamy béchamel, and melted cheese, baked to perfection.",
        steps: [
            "Boil lasagna noodles until al dente, then drain and set aside.",
            "Brown ground beef and onions in a skillet, then add marinara sauce.",
            "In a separate bowl, mix ricotta cheese, egg, and shredded mozzarella.",
            "Layer lasagna noodles, meat sauce, and cheese mixture in a baking dish.",
            "Repeat layers until ingredients are used up, then top with grated Parmesan.",
        ]
    },
    {
        id: "03",
        name: "Hot Dog",
        image: require("../../assets/hotdog.png"),
        rating: "4.6",
        ingredients: ["Hot Dog Buns", "FrankFurters", "Ketchup", "Mustard"],
        time: "40 mins",
        difficulty: "Medium",
        calories: "420 cal",
        color: colors.COLOR_DETAILS_300,
        description: "Classic hot dog recipe: grilled sausages nestled in soft buns, topped with mustard, ketchup, and onions.",
        steps: [
            "Gather ingredients: hot dog buns, sausages, mustard, ketchup, onions.",
            "Preheat grill or stovetop pan.",
            "Cook sausages until browned and cooked through.",
            "Toast buns on grill or in pan.",
            "Place cooked sausages in buns.",
            "Add mustard, ketchup, and chopped onions as desired.",
            "Serve hot dogs immediately and enjoy!"
        ]
    },
    {
        id: "04",
        name: "Manchurian",
        image: require("../../assets/manchurian.png"),
        rating: "3.6",
        ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
        time: "30 mins",
        difficulty: "Easy",
        calories: "350 cal",
        color: colors.COLOR_DETAILS_400,
        description: "A savory, Indo-Chinese dish featuring crispy vegetable or chicken dumplings in a tangy, flavorful sauce. Perfectly balanced fusion cuisine.",
        steps: [
            "Prepare vegetables: chop cabbage, carrots, capsicum, and onions finely.",
            "Mix vegetables with flour, cornstarch, and spices to form small balls.",
            "Deep fry balls until golden brown.",
            "Sauté garlic, ginger, and green chilies in a pan.",
            "Add soy sauce, tomato ketchup, and water to make the sauce",
            "Toss fried balls in the sauce until coated",
            "Garnish with spring onions and serve hot"
        ]
    },
    {
        id: "05",
        name: "Chicken",
        image: require("../../assets/chicken.png"),
        rating: "2.2",
        ingredients: ["Chiken Breasts", "Salt", "Black Pepper", "Olive Oil"],
        time: "45 mins",
        difficulty: "Medium",
        calories: "450 cal",
        color: colors.COLOR_DETAILS_500,
        description: "Delicious chicken recipe: tender, juicy chicken seasoned to perfection.",
        steps: [
            "Marinate chicken with salt, pepper, and olive oil for 30 minutes.",
            "Preheat oven to 375°F.",
            "Arrange chicken in a baking dish and bake for 25-30 minutes.",
            "Let it rest for 5 minutes before serving.",
            "Garnish with chopped parsley and lemon wedges. Enjoy your delicious chicken!"
        ]
    },
    {
        id: "06",
        name: "Cupcakes",
        image: require("../../assets/cupcake.png"),
        rating: "5.0",
        ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
        time: "60 mins",
        difficulty: "Medium",
        calories: "200 cal",
        color: colors.COLOR_DETAILS_600,
        description: "Bite-sized delights, perfect for any occasion. Indulge in fluffy, flavorful treats topped with creamy frosting.",
        steps: [
            "Preheat oven. Mix dry ingredients. Cream butter and sugar. Add eggs, vanilla, and milk.",
            "Combine wet and dry ingredients. Fill cupcake liners. Bake until golden and firm.",
            "Let cool. Prepare frosting. Decorate cooled cupcakes with frosting and sprinkles.",
            "Serve and enjoy your delicious homemade cupcakes with friends and family!"
        ]
    },
    {
        id: "07",
        name: "Curry",
        image: require("../../assets/cury.png"),
        rating: "4.8",
        ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
        time: "55 mins",
        difficulty: "Hard",
        calories: "550 cal",
        color: colors.COLOR_DETAILS_700,
        description: "Savor the rich flavors of our zesty Curry recipe, a tantalizing blend of spices and herbs in a hearty dish.",
        steps: [
            "Heat oil in a large pan over medium heat.",
            "Add chopped onions and sauté until golden brown.",
            "Stir in minced garlic, ginger, and chopped green chilies. Cook for 2 minutes.",
            "Add your choice of protein (chicken, tofu, or vegetables) to the pan and cook until browned.",
            "Sprinkle curry powder, turmeric, cumin, coriander, and garam masala over the ingredients. Stir well to combine.",
            "Pour in coconut milk and vegetable broth. Bring to a simmer.",
            "Add chopped tomatoes and simmer for 10-15 minutes, stirring occasionally.",
            "Season with salt and pepper to taste.",
            "Garnish with fresh cilantro leaves before serving.",
            "Serve hot with steamed rice or naan bread.",
          ]
    },
    {
        id: "08",
        name: "Ramen",
        image: require("../../assets/ramen.png"),
        rating: "4.2",
        ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
        time: "35 mins",
        difficulty: "Medium",
        calories: "420 cal",
        color: colors.COLOR_DETAILS_200,
        description: "Savory Japanese noodle soup with flavorful broth, tender noodles, and assorted toppings like pork, egg, and green onions.",
        steps: [
            "Boil water in a pot.",
            "Add ramen noodles to the boiling water and cook for 2-3 minutes until they are tender.",
            "While the noodles are cooking, prepare the soup base. You can use packaged ramen seasoning or make your own broth.",
            "Once the noodles are cooked, drain them and set aside.",
            "Pour the prepared soup base into a serving bowl.",
            "Add the cooked ramen noodles to the bowl.",
            "Top with desired toppings such as sliced green onions, boiled egg, sliced pork, nori (seaweed), and any other toppings you like.",
            "Serve hot and enjoy your delicious homemade ramen!"
        ]
    },

]