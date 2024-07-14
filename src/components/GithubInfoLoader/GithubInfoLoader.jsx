import { useEffect,useState } from "react";
    
function GithubInfoLoader() {
    const [data,setData] = useState([])
    
    useEffect(() => {
        fetch('https://api.github.com/users/ssarthaks')
        //string to json format
        .then (res => res.json())
        //data is then set to data
        .then (data => {
            console.log(data);
            setData(data)
        })
    },[data])

    return data;
}

export default GithubInfoLoader