import React from "react";
import Article from "./Article";

function ArticleList ({posts}) {

    const articleProp = posts.map(post => <Article key={post.title} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />);

    return (
        <main>
            {articleProp}
        </main>
    );
}


export default ArticleList;