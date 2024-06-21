import React from "react";
import './styles.css';
import { Heart, Export } from '@phosphor-icons/react';

export function Article (props){
    return (
        <article id="article">
            <img src={props.imgUrl} alt={props.title} />

            <div className="article-infos">
                <h2>{props.title}</h2>
                <h3>{props.writer}</h3>
                <p>{props.description}</p>
            </div>
            <div className="like-button">
                <Heart 
                    className="icon-button" 
                    size={32} 
                    weight="bold"
                />
                <Export 
                    className="icon-button" 
                    size={32} 
                    weight="bold"
                    href={props.urlArticle}
                />
            </div>
        </article>
    );
}