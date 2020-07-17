import request from '@/utils/request'

/**
 * 获取轮播图数据 
 * @param {string} clinicId 诊所id
 * */
async function findFileGroupList(data) {
    try {
        const res = await request.get({
            url: '/yhjk-appointment/clinic/banners',
            data,
        });
        return res.data.data
    } catch (e) {
        return new Error(e)
    }
}


export default {
    findFileGroupList
}