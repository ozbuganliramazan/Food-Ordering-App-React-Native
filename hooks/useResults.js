import { useEffect,useState } from "react";
import yelp from "../api/yelp";


export default ()=>{
const [results,setResults] = useState([]);
const [errorMessage,setErrorMessage] = useState('');



const searchApi = async(searcTerm) =>{
 try {
    const response = await yelp.get('/search',{
        params:{
    limit:50,
    term:searcTerm,
    location: 'İstanbul',
        },
    });
    setResults(response.data.businesses);
    setErrorMessage('');
 } catch (error) {
   setErrorMessage('Bağlantı Hatası');
 }





};
useEffect(()=>{
    searchApi('Toast')
    },[]);
    return[searchApi,results,errorMessage];
};