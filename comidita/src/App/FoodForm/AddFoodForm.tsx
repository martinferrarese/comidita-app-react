import React, { useState } from 'react';

type Food = {
  name: string;
  ingredients: string[];
};

const AddFoodForm = () => {
  const [food, setFood] = useState<Food>({ name: '', ingredients: [] });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFood({ ...food, name: e.target.value });
  };

  const handleIngredientsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const ingredients = e.target.value.split('\n');
    setFood({ ...food, ingredients });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(food);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nombre:</label>
        <input type='text' id='name' value={food.name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor='ingredients'>Ingredientes:</label>
        <textarea
          id='ingredients'
          value={food.ingredients.join('\n')}
          onChange={handleIngredientsChange}
        />
      </div>
      <button type='submit'>Agregar Comida</button>
    </form>
  );
};

export default AddFoodForm;
