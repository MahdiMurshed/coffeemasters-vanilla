import { API } from "./API.js"

export const loadMenu = async () => {
    window.app.store.menu = await API.fetchMenu();
}