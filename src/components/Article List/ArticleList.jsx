import React from 'react';
import './styles.css';
import { Article } from '../Article/Article';
import { apiKey } from '../../Api/api-key';
import { useEffect, useState } from 'react';

export function ArticleList(){
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      fetch(`https://newsapi.org/v2/top-headlines?category=science&q=space&apiKey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
              if (data){
                  setArticles(data.articles);
              }
          })
  }, []);
  console.log(articles)

  return (
    <section id="articles">
        {articles.map(article => (
          article.urlToImage && article.title && article.description ?
            <Article
              title={article.title}
              writer={article.author}
              imgUrl={article.urlToImage}
              description={article.description}
              urlArticle={article.url}
            /> : <></>
        ))}
    </section>

  );
}
