import React, { useState } from 'react';
import './App.css';
import sushi from './sushi.jpeg';
import cs from './cs.jpeg';
import ap from './ap.jpeg';
import hcb from './hcb.jpeg'; 


function App() {
    const [recipes, setRecipes] = useState([
        {
            title: 'Lunchbox Sushi Rolls',
            ingredients: ['Sushi Rice', 'Nori sheet', 'Tuna', 'Soy sauce', 'Onion', 'Garlic', 'Oil', 'Salt', 'Pepper', 'Sushi mat'],
            instructions: 'Cook the sushi rice. Add the chopped onion and garlic and sauté until soft. Stir in the tuna and soy sauce and simmer for 10-15 minutes. Assemble sushi roll with tuna filling and vegetables of choice. Serve with dipping sauce and wasabi. Enjoy!',
        },
        {
            title: 'Apple Pie',
            ingredients: ['Golden apples', 'Green apples', 'Sugar', 'Butter', 'Flour', 'Cornstarch', 'Cinnamon powder', 'Salt', 'Lemon Juice', 'Lemon Zest', 'Egg'],
            instructions: 'Cook the diced apples with sugar, salt, lemon juice, butter and cornstarch. Add the filling to pie base. Cover pie top and bake at 425 F for 10-15 minutes the at 350 F for 30 - 40 minutes. Let it cool. Dig in!!',
        },
    
    ]);
    const [email, setEmail] = useState("");

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8001/api/submit_email/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert('Email submitted successfully!');
                setEmail("");
            } else {
                alert('Failed to submit email.');
            }
        } catch (error) {
            alert('Error submitting email.');
        }
    };
    return (
        <div className="App">
            <header className="App-header">

                <h1>Neenu's Cookbook</h1>
                
            </header>
            <main>
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <h2>{recipe.title}</h2>
                        {index === 0 && (
                            <img src={sushi} alt="Sushi" style={{ width: '450px', height: '350px' }} className="sushi-image" />
                        )}
                        {index === 1 && (
                            <img src={ap} alt="Apple Pie" style={{ width: '450px', height: '350px' }} className="ap-image" />
                        )}
                        <h3>Ingredients</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                        <h3>Instructions</h3>
                        <p>{recipe.instructions}</p>
                    </div>
                ))}
            </main>
            <footer className="App-footer">
            <form onSubmit={handleEmailSubmit}>
                    <label>
                        Subscribe to our newsletter:
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p>&copy; 2024 Neenu's Cookbook. All rights reserved.</p>
                <p>Email: neenu.antony@sjsu.edu </p>
            </footer>
        </div>
    );
}

export default App;


