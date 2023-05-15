import axios from "axios";
import { apiPath } from "../../App";

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use((config) => {
    let data = JSON.parse(localStorage.getItem("tokens"));
    config.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
    config.headers.common["Content-Type"] = "application/json";
    return config
})

jwtInterceptor.interceptors.response.use(
    (response) => {
        return response
    } ,

    async (error) => {
        if (error.response.status === 401) {
            const data = JSON.parse(localStorage.getItem('tokens'));
            

            await axios.post(apiPath + "refresh",data.refreshToken,
                                                { headers: {'Content-Type': 'application/json',
                                                            'Authorization': `Bearer ${data.accessToken}`}
            }).then(response => {
                localStorage.setItem("tokens",JSON.stringify(response.data))

                error.config.headers["Authorization"] = `Bearer ${response.data.accessToken}`;
                return axios(error.config);

            }).catch(error => {
                return Promise.reject(error);
            })

        } else {

            return Promise.reject(error);
        }
    
    }
)

export default jwtInterceptor;
