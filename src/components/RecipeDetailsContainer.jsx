import React from 'react';
import RecipeDetails from './RecipeDetails';

const RecipeDetailsContainer = ({open, ingredients, label, onClose}) => {
    if(!open) return null;
    return (
        <div className="overlay">
            <div className='modalContainer'>
                <button onClick={onClose} className="close">x</button>
                <h2>{label}</h2>
                <h3 className='ingredients'>Ingredients</h3>
                <RecipeDetails ingredients={ingredients} />
            </div>
        </div>
        
    )
}

export default RecipeDetailsContainer;