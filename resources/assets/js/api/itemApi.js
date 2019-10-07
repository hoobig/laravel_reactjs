import axiosClient from '../axiosClient';

export async function createItem(item) {
    try {
        return await axiosClient.post('items', item);
    }
    catch (e) {
        return null;
    }
}

export async function displayItems() {
    try {
        return await axiosClient.get('items');
    }
    catch (e) {
        return null;
    }
}

export async function referItemById(itemId) {
    try {
        return await axiosClient.get('items/' + itemId + '/edit');
    }
    catch (e) {
        return null;
    }
}

export async function editItemById(itemId, item) {
    try {
        return await axiosClient.patch('items/' + itemId, item);
    }
    catch (e) {
        return null;
    }
}

export async function deleteItemById(itemId) {
    try {
        return await axiosClient.delete('items/' + itemId);
    }
    catch (e) {
        return null;
    }
}