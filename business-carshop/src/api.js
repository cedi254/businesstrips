const API_URL = 'http://localhost:5000/fahrzeuge';

// Fetch all Fahrzeuge
export const getFahrzeuge = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Fetch a single Fahrzeug by ID
export const getFahrzeugById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// Create a new Fahrzeug
export const createFahrzeug = async (Fahrzeug) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Fahrzeug),
  });
  return response.json();
};

// Update an existing Fahrzeug
export const updateFahrzeug = async (id, updatedFahrzeug) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedFahrzeug),
  });
  return response.json();
};

// Delete a Fahrzeug
export const deleteFahrzeug = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
