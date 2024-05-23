import { NET_ENDPOINTS, NET_FUNCTION_GET_JWT, NET_IS_LOG, NET_TIMEOUT_GET, NET_TIMEOUT_POS, NET_URI, NET_URI_API } from "@/conf/net";
import Net from "./net";
import { IS_DEBUG_LOG } from "@/conf/config";

IS_DEBUG_LOG ? 

console.log("生成 NET 实例，",
    "url =", (NET_URI + '/' + NET_URI_API), 
    "endpoints =", NET_ENDPOINTS,
) 

: undefined;

export default new Net(

    NET_URI + '/' + NET_URI_API, 
    NET_ENDPOINTS, 
    NET_FUNCTION_GET_JWT,

    NET_TIMEOUT_GET, NET_TIMEOUT_POS, NET_IS_LOG
);