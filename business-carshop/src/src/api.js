const API_URL = 'http://localhost:5000/fahrzeuge';


export const getVehicles = async () => {
  const response = await fetch(API_URL);
  return response.json();
};


export const getVehicleById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};


export const createVehicle = async (vehicle) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vehicle),
  });
  return response.json();
};


export const updateVehicle = async (id, updatedVehicle) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedVehicle),
  });
  return response.json();
};


export const deleteVehicle = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
