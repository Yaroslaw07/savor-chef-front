import api from "../../../api-common";

const jwtInterceptor = api.create({});

jwtInterceptor.interceptors.request.use((config) => {
    let data = JSON.parse(localStorage.getItem("tokens"));
    config.headers["Authorization"] = `Bearer ${data.accessToken}`;
    return config
})

jwtInterceptor.interceptors.response.use(
    (response) => {
        return response
    } ,

    async (error) => {
        
        if (error.response.status === 401) {
           
            const data = JSON.parse(localStorage.getItem('tokens'));

            api
              .post("/refresh", data.refreshToken, {
                headers: {
                  Authorization: `Bearer ${data.accessToken}`,
                },
              })
              .then((response) => {
                localStorage.setItem("tokens", JSON.stringify(response.data));

                error.config.headers[
                  "Authorization"
                ] = `Bearer ${response.data.accessToken}`;
                return api(error.config);
              })
              .catch((error) => {
                console.log(error.data.response)
              });

        } else {

            return Promise.reject(error);
        }
    
    }
)

export default jwtInterceptor;
