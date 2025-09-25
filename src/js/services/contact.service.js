const api = `https://playground.4geeks.com/contact/agendas/`;

export const getContacts = async (user) => {
    try {
        const userContacts = await fetch(`${api}${user}/contacts`);
        
        // Verifica si la respuesta no es exitosa
        if (!userContacts.ok) {
            throw new Error(`Error al recibir los contactos: ${userContacts.status} ${userContacts.statusText}`);
        }
        
        const contacts = await userContacts.json();
        return contacts.contacts;
    } catch (err) {
        console.error(`Error al recibir los contactos: ${err}`);
    }
};

export const addContact = async (user, info) => {
    console.log(info);
    try {
        const data = fetch(`${api}${user}/contacts`, {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            // Verifica si la respuesta no es exitosa
            if (!resp.ok) {
                throw new Error(`Error al añadir el contacto: ${resp.status} ${resp.statusText}`);
            }
            
            console.log(resp.ok);
            console.log(resp.status);
            return resp.json();
        })
        .then(data => {
            console.log(data);
        });
    } catch (err) {
        console.error(`Error al añadir el contacto: ${err}`);
    }
};

export const editContact = async (user, id, info) => {
    console.log(info);
    try {
        const data = fetch(`${api}${user}/contacts/${id}`, {
            method: "PUT",
            body: JSON.stringify(info),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            // Verifica si la respuesta no es exitosa
            if (!resp.ok) {
                throw new Error(`Error al editar el contacto: ${resp.status} ${resp.statusText}`);
            }
            
            console.log(resp.ok);
            console.log(resp.status);
            return resp.json();
        })
        .then(data => {
            console.log(data);
        });
    } catch (err) {
        console.error(`Error al editar el contacto: ${err}`);
    }
};

export const deleteContact = async (user, id) => {
    try {
        const tasks = await fetch(`${api}${user}/contacts/${id}`, {
            method: "DELETE"
        });
        
        // Verifica si la respuesta no es exitosa
        if (!tasks.ok) {
            throw new Error(`Error al eliminar el contacto: ${tasks.status} ${tasks.statusText}`);
        }
    } catch (err) {
        console.error(`Error al eliminar el contacto: ${err}`);
    }
};