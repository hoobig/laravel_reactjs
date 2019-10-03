import axios from '../axios';

export async function createItem(item) {
    try {
        return await axios.post('items', item);
    }
    catch (e) {
        return null;
    }
}

export async function displayItems() {
    try {
        return await axios.get('items');
    }
    catch (e) {
        return null;
    }
}

export async function referItemById(itemId) {
    try {
        return await axios.get('items/' + itemId + '/edit');
    }
    catch (e) {
        return null;
    }
}

export async function editItemById(itemId, item) {
    try {
        return await axios.patch('items/' + itemId, item);
    }
    catch (e) {
        return null;
    }
}

export async function deleteItemById(itemId) {
    try {
        return await axios.delete('items/' + itemId);
    }
    catch (e) {
        return null;
    }
}