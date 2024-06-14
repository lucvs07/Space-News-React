import React from 'react';
import './styles.css';
import { Article } from '../Article/Article';

export function ArticleList(){
    return (
        <section id="articles">
        <Article 
          title="Baby Yoda" 
          writer="Disney" 
          imgUrl ="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo cumque aut modi laborum ducimus! Deleniti amet obcaecati dolorum sequi at, consectetur cupiditate impedit ipsa delectus iure, adipisci nostrum quasi!"
        />
        <Article 
          title="Lego Stormtrooper" 
          writer="Lego - Disney" 
          imgUrl="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo rerum, placeat reprehenderit laudantium labore ex ipsa, ipsum suscipit sit ipsam at voluptates ratione molestiae id quos. Minima pariatur exercitationem autem."
        />
        <Article
          title="Dune - Lissan Al Gaib"
          writer="Paul Altreides" 
          imgUrl="https://super.abril.com.br/wp-content/uploads/2024/03/1203-vermes-areia-duna-site.jpg?quality=90&strip=info&w=720&h=440&crop=1"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab perspiciatis ipsa qui totam placeat maxime veritatis exercitationem dolores temporibus alias, facilis error. Tenetur at asperiores unde dolorem similique dolorum doloribus!"
        />
        <Article 
          title="Spok - Star Trek" 
          writer="USS Enterprise" 
          imgUrl="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/10/quem-e-o-ator-que-recusou-o-papel-de-sr-spock-em-star-trek.jpg"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, commodi praesentium sint dicta numquam culpa voluptate atque quo dolorem minima, delectus itaque velit excepturi debitis voluptas consectetur ab unde. Eos?"
        />
      </section>

    );
}