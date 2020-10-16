import React, { useState, useEffect, useContext } from "react";
import "./Story.css";
import pathImage from "../../Assets/pngguru.png";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

export default function storyIntro(){


    
          <div>
<div className="storyIntro">
    <h1>Write Your Own Story</h1>
    <q className="storyQuote">A journey of a thousand miles begins with a single step.</q>
    <h3 className="florenceChadwick">In 1952 Florence Chadwick attempted to swim the 20 miles from the coast of California to Catalina Island. After 15 hours of swimming
        a think fog rolled in preventing her from seeing her goal, and that lack of vision eventually caused her to 
        give up only one mile from the shore.</h3>
    <h2 className="storyStatement">You cannot acheive a goal without vision</h2>
    <img src={pathImage}></img>
    <p className="storyDescription">The more clearly you can see the completion of your goal the more likely you are to acheive it. So this tool
        is designed for you to write out what that looks like. Describe a day in your life after you have acheived
        your goal. How does acheiving that goal make you feel, look, how do others react to you? What other areas
         of your life are effected. What habbits will you need to do on a daily basis inorder to maintain it? 
         The more clearly you can paint the picure of your life improving after completing
         your goals, the stronger your motivation will be to acheive them. <br/>
         Then once you have written your story, read it every night before you go to bed. This will help convince your
         subconscience mind that your goal is worth acheiving, and your motivation will skyrocket. 
    </p>
</div>
</div>
}