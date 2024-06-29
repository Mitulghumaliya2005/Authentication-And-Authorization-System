import axios from "axios";
import { useEffect } from "react"

export default function SecretPage() {

    const URL = "http://localhost:4000/";


    useEffect(()=>{
        async function TokenApi() {
            try{
                const response = await axios.get(URL+`/tokenverify?token:${localStoragetoken}`);
                console.log(response.data);
            }catch(err){
                console.log(err);
            }
        }

        TokenApi().then((data)=>{
            // console.log(data);
        }).catch((err)=>{
            console.log("Erroe");
        })
    },[]);

    return(
        <div>
            <h1>This Is SecretPage</h1>
        </div>
    )
}