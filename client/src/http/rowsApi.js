import {$authHost, $host} from "./index";

export const createRow = async (row) => {
    const {data} = await $authHost.post('api/row', row)
    return data
}

export const fetchRow = async (row) => {
    const {data} = await $host.get('api/row', row)
    return data
}