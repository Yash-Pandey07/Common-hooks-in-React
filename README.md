# React + Vite

# React Assignments

This repository contains three React assignments demonstrating different aspects of React hooks, state management, and performance optimization.

## Assignments### Assignment 1: Factorial Calculator and Counter

This assignment includes a React component that performs two functions:
1.**Factorial Calculator**: Calculates the factorial of a user-input number using the `useMemo` hook to optimize performance.
2.**Counter**: A simple counter with increment and decrement functionality.

**File:**`src/components/Assignment1.jsx`**Features:**- Factorial calculation with memoization
- Increment and decrement counter
- Responsive styling for buttons

### Assignment 2: Paginated Sentence Filter

In this assignment, the component displays a large list of randomly generated sentences and allows filtering and pagination. The filtering is optimized using the `useMemo` hook to reduce unnecessary recalculations.

**File:**`src/components/Assignment2.jsx`**Features:**- Filtering sentences based on user input
- Pagination controls to navigate through pages
- Dynamic sentence generation and display

### Assignment 3: Grocery Item Tracker

This component manages a list of grocery items, allowing users to add and remove items while calculating the total amount spent. The `useMemo` hook is used to optimize the total calculation.

**File:**`src/components/Assignment3.jsx`**Features:**- Adding and removing grocery items
- Displaying the total value of items
- Responsive styling for input fields and buttons

## App Component

The `App` component serves as the main entry point, rendering the three assignments:

**File:**`src/App.jsx`**Features:**- Includes `Assignment1`, `Assignment2`, and `Assignment3` components
- Provides a basic structure for viewing the assignments

## Getting Started 
1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
     ```bash
    cd <project-directory>

3. npm install
     ```bash
    npm install

4. Start the development server:
     ```bash
    npm start/  npm run dev

## Acknowledgements
This project uses React and its hooks to demonstrate practical applications of state management and performance optimization.
