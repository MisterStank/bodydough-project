export default function getCurrentUserInfo(){
    const userInfo =localStorage.getItem("userinfos");
    return JSON.parse(userInfo || "{}");
};
