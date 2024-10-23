import React from 'react';
import { useGetRecipesQuery } from '../slices/recipesSlice'; // Adjust the path as necessary
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function Dashboard() {
  const { data: recipes = [], error, isLoading } = useGetRecipesQuery();

  // Prepare data for the total recipes chart (Bar chart)
  const totalRecipesData = {
    labels: ['Total Recipes'],
    datasets: [
      {
        label: 'Number of Recipes',
        data: [recipes.length], // Total number of recipes
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for the category distribution chart (Pie chart)
  const categoriesCount = {};
  recipes.forEach(recipe => {
    const category = recipe.category || 'Uncategorized';
    categoriesCount[category] = (categoriesCount[category] || 0) + 1;
  });

  const categoryData = {
    labels: Object.keys(categoriesCount),
    datasets: [
      {
        label: 'Number of Recipes by Category',
        data: Object.values(categoriesCount),
        backgroundColor: Object.keys(categoriesCount).map((_, index) =>
          `rgba(${75 + index * 30}, ${192 - index * 20}, ${192 - index * 10}, 0.6)`
        ),
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error fetching recipes: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipes Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduced gap between cards */}
        {/* Total Recipes Chart */}
        <div className="bg-white shadow-lg rounded-lg p-2"> {/* Reduced padding to 2 */}
          <h2 className="text-xl font-semibold mb-2">Total Recipes</h2>
          <Bar
            data={totalRecipesData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Total Number of Recipes',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
            style={{ width: '100%', height: '300px' }} // Keep the chart height as desired
          />
        </div>

        {/* Recipes by Category Chart */}
        <div className="bg-white shadow-lg rounded-lg p-2"> {/* Reduced padding to 2 */}
          <h2 className="text-xl font-semibold mb-2">Recipes by Category</h2>
          <Pie
            data={categoryData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Distribution of Recipes by Category',
                },
              },
            }}
            style={{ width: '100%', height: '50px' }} // Keep the chart height as desired
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
