import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    // Initialize the items state with a list of objects, each containing a name and value
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // State to hold new item name and price
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');

    // useMemo is used to memoize the calculation of the total value of all items.
    // It ensures the total is recalculated only when the items array changes.
    const totalValue = useMemo(() => {
        return items.reduce((accumulator, item) => accumulator + item.value, 0);
    }, [items]); // Dependency array: re-calculate when 'items' changes

    // Function to add a new item to the list
    const addItem = () => {
        if (newItemName.trim() === '' || newItemPrice.trim() === '' || isNaN(newItemPrice)) {
            alert("Please enter a valid item name and price.");
            return;
        }

        const newItem = { name: newItemName, value: parseFloat(newItemPrice) }; // Example item
        setItems([...items, newItem]); // Add new item to the existing items array
        setNewItemName(''); // Clear the input fields
        setNewItemPrice('');
    };

    // Function to remove an item by its index
    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index)); // Remove item by index
    };

    return (
        <div>
            {/* Display the list of items with their prices */}
            <ul>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {item.name} - Price: ${item.value}
                        <button
                            onClick={() => removeItem(index)}
                            style={{
                                marginLeft: '10px',
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = 'darkred')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = 'red')}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            
            {/* Display the calculated total value of the items */}
            <p>Total Value: ${totalValue}</p>

            {/* Input fields for new item name and price */}
            <div style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    style={{
                        marginRight: '10px',
                        padding: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
                <input
                    type="number"
                    placeholder="Item Price"
                    value={newItemPrice}
                    onChange={(e) => setNewItemPrice(e.target.value)}
                    style={{
                        marginRight: '10px',
                        padding: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
                <button
                    onClick={addItem}
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = 'darkgreen')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'green')}
                >
                    Add Item
                </button>
            </div>
        </div>
    );
};
