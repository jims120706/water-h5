import axios from 'axios'
import Qs from 'qs'

const instance = axios.create({
    // baseURL: getEnvApi()
});

const request = {
    post: ({ url, data, config = {} }) => {
        // 'Content-Type'= 'multipart/form-data'
        if (config.headers && config.headers['Content-Type'] === 'multipart/form-data') {
            let formData = new FormData();
            let keys = Object.keys(data);
            if (keys.length > 0) {
                keys.forEach(key => {
                    formData.append(key, data[key])
                })
            }
            return instance.post(url, formData, {
                ...config
            })
        }

        // 'Content-Type'= 'application/x-www-form-urlencoded'
        if (config.headers && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            let queryData = Qs.stringify(data);
            return instance.post(url, queryData, {
                ...config
            })
        }

        // default
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        }

        instance.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

        if (config.useCommonQuery) {
            let keys = Object.keys(data);
            if (keys.length > 0) {
                url += "?"
                keys.forEach((key, index) => {
                    let sym = index === keys.length - 1 ? '' : '&'
                    url += `${key}=${data[key]}${sym}`
                })
            }
            return instance.post(url, {}, {
                ...config
            })
        }
        return instance.post(url, data, {
            ...config
        })
    },
    get: ({ url, data, config = {} }) => {
        return instance.get(url, {
            params: data,
            ...config,
        })
    },
    delete: ({ url, data }) => {
        return instance.delete(url, data)
    },
    put: ({ url, data, config = {} }) => {
        return instance.put(url, data, {
            ...config
        })
    }
}

export default request