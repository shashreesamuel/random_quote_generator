import { quotes } from "./quotesdata";
import React from "react";


export let getRandomQuote = () => {

	return( quotes[ Math.floor( Math.random() * ( quotes.length + 1 ) ) ][ "quote" ] + ' ~ ' + quotes[ Math.floor( Math.random() * ( quotes.length + 1 ) ) ][ "author" ] );
} 

// export const Quotes = () => {
//     return(
//         <>
//         {quotes.map((data, key) => {
//             return (
//                 <div key={key}>
//                     {data[ "quote" ]}
//                     {getRandomQuote}
//                 </div>
//             )
//         })}
//         </>
//     )
// }
