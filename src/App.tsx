import React from "react";
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from "./App.module.css";

import "./global.css";
// author: {avatar_url:"", name "", role:""}
//publishedAt: date
//content :""

const posts = [
  {
    id:1,
    author:{
      avatarUrl: "https://github.com/givaild.png",
      name:"Givaildo de Andrade",
      role: "Dev FrontEnd Intern",
    },
    content:[
       {type:'paragraph', content:'Fala galeraa 👋'},
       {type:'paragraph',content:'"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
       {type:'link',content:'gil.design/doctorcare'}          
    ],
    publishedAt:new Date('2022-07-20 15:00:00')
  },

  {
    id:2,
    author:{
      avatarUrl: "https://github.com/Diegodossantos23.png",
      name:"Diego dos Santos",
      role: "Software Developer",
    },
    content:[
       {type:'paragraph', content:'Fala galeraa 👋'},
       {type:'paragraph',content:'"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
       {type:'link',content:'diego.design/doctorcare'}          
    ],
    publishedAt:new Date('2022-07-19 23:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
    <Sidebar />
      <main>
        {posts.map(post =>{
          return (
            <Post
            key={post.id}
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt} 
            />
          )
        })}
      </main>
    </div>
    </div>
  );
}
