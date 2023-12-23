function calculateMacros() {
    var weight = parseFloat(document.getElementById("weight").value);
    var gender = document.getElementById("gender").value;
    
    var maintenanceCalories;
    var carbs;
    var fat;
    var protein;
    var maintenanceCalories = 0;

    if (gender === "male") {
      // maintenanceCalories = 10 * weight + 6.25 * weight + 5;
      maintenanceCalories = weight * 28.5
      
    } else {
      // maintenanceCalories = 10 * weight + 6.25 * weight - 161;
      maintenanceCalories = weight * 24.5

    }
    // Calculate macronutrient percentages
    const proteinPercentage = gender === 'male' ? 0.308 : 0.364;
    const carbsPercentage = gender === 'male' ? 0.615 : 0.545;
    const fatPercentage = gender == 'male' ? 0.071 : 0.091;

    // Calculate macronutrient amounts (grams)
    const proteinGrams = maintenanceCalories * proteinPercentage / 4;
    const carbsGrams = maintenanceCalories * carbsPercentage / 4;
    const fatGrams = maintenanceCalories * fatPercentage / 9;

    // Calculate macronutrient amounts (calories)
    const proteinCalories = proteinGrams * 4;
    const carbsCalories = carbsGrams * 4;
    const fatCalories = fatGrams * 9;


    
    document.getElementById("maintenance-calories").textContent = "Maintenance Calories: " + maintenanceCalories.toFixed(2) + " kcal";
    document.getElementById("carbs").textContent = "Carbs: " + carbsGrams.toFixed(2) + " g ("  + carbsCalories.toFixed(2) + " kcal)";
    document.getElementById("fat").textContent = "Fat: " + fatGrams.toFixed(2) + " g (" + fatCalories.toFixed(2) + " kcal)";
    document.getElementById("protein").textContent = "Protein: " + proteinGrams.toFixed(2) + " g (" + proteinCalories.toFixed(2) + " kcal)";
  }
  