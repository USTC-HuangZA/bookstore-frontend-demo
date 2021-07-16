import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";

export const getBookStatistics = (callback) => {
    const data={};
    const url = `${config.apiUrl}/getBookStatistic`;
    postRequest(url, data, callback);
};