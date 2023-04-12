import React from "react";

function Article ({title, date="January 1, 1970", preview, minutes}) {

   
    function minutesToRead () {
        let coffeeMinutes;
        let num;
        let emoji;
        if (minutes < 30) {
            emoji = "☕️ ";
            num = Math.ceil(minutes / 5);
            coffeeMinutes = emoji.repeat(num) + " min read";
        } else {
            num = Math.ceil(minutes / 10);
            emoji = "🍱 ";
            coffeeMinutes = emoji.repeat(num) + " min read";
        }
        return coffeeMinutes;
    }
    


    return (
        <article>
            <h3>{title}</h3>
            <small>{date}&nbsp;&nbsp;{minutesToRead()}</small>
            <p>{preview}</p>
        </article>
    );
}


export default Article;