export const post = async (domain, port, path, credentials, payload) => {
    const url = `http://${domain}:${port}/${path}`;
    const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: credentials ? "include" : "omit",
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
        throw new Error(response.status.toString());
    }
    if (response.status === 204) {
        return response;
    }
    return await response.json();
};

export const get = async (domain, port, path, credentials) => {
    const url = `http://${domain}:${port}/${path}`;
    const response = await fetch(url, {credentials: credentials ? "include" : "omit"});
    if (!response.ok) {
        throw new Error(response.status.toString());
    }
    return await response.json();
};

export const put = async (domain, port, path, credentials, payload) => {
    const url = `http://${domain}:${port}/${path}`;
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
        credentials: credentials && "include",
    });
    if (!response.ok) {
        throw new Error(response.status.toString());
    }
    return await response.json();
};

export const deLete = async (domain, port, path, credentials) => {
    const url = `http://${domain}:${port}/${path}`;
    let response = await fetch(url, {
        method: "DELETE",
        credentials: credentials && "include",
    });
    if (!response.ok) {
        throw new Error(response.status.toString());
    }
    return await response.json();
};