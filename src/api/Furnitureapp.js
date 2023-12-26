// const BASE_URL = 'http://localhost/react_api';

export const Furnitureapp = async () => {
    try {
        // const response = await fetch(`${BASE_URL}/furniture.php`);
        const response = await fetch(`${global.config.apiUrl}furniture`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(`Error fetching furnitures data: ${error.message}`);
    }
};