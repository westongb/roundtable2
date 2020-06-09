import React, { Component, useContext } from "react";
import "../Menu.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import {LoginContext} from "./Authentication/isAuthenticated";




const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));




export default function Home ( )
    {

      const {isLoggedin} = useContext(LoginContext);
     

      let history = useHistory();
      let path = `/`;
      
       const routeChange = () => {
        //  if(isLoggedin === true){
        //   history.push()
        // }else{
        //   history.push('/login')
        // }
      }
      
      
      


    const classes = useStyles();

    return <div>
      <div className="banner">
      <h1 className="bannerText">Are You Ruling Your Kingdom, or is your Kingdom ruling You?</h1>
      <img className="bannerImage" src='https://i.kym-cdn.com/entries/icons/original/000/027/505/king.jpg'></img>
     <h2 className="description">Many men in our day and age spend more time planning out their playable characters in their RPGs than they do planning how they will level up their real life. 
     King of the Kingdom is a tool designed to help us nerdy men start to level up our REAL LIFE CHARACTER, not just their playable ones. </h2>
      </div>
     <br></br>
      <div className="storyPromo">
      <span className="storyPromoText">
      <span >
          Every adventurer knows that you cannot start a journal without a quest, goal and a map. In order to acheive your goals and because the Hero you wish to be, you must map out your goal and quest. What better way to do this, then by writing a story. 
          So type out a one page description of how you would you would want your story to end. This will allow you to then coucil with your party and come up with a plan on how to acheive your goal, save the kingdom and become who you want to be. </span>
           <br></br>
           <Link to='/story' className='menuLink'>
           <Button variant="contained" size="medium" color="primary" className={classes.margin} >
               Write Your Story
               </Button>
               </Link>
           </span>
      <img className="mapImage" src='https://images.unsplash.com/photo-1470506926202-05d3fca84c9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'/>
      </div>
      <div className="roundTablePromo">
      <img className="roundTableImage" src="https://cdnb.artstation.com/p/assets/images/images/019/370/581/medium/jue-leo-li-roundtable-finalpost.jpg?1563197939"/>
      <div className="sectionBreak"></div>
      <span className="roundTablePromoText">
      <span >
          You can't start your journey without your party. And every good nerd knows you need 4 people in your party. You need the King/Champion, you dedicated warrior, your Magician and your rogue/bard. 
          Well that because those archetypes acutally represent 4 different areas of your life and psyche. You lover ( The Bard who is fun, the arts and enjoys relationships), the Warrior (Goal oriented and feirce. Nothing stands in his way), 
          the Magician (Wise and constantly learning. He uses his brain to solve problems) and the Champion/King (Who leads the party and keeps them balanced.) Bring your party together and find out what each thinks. What do you need to do in 
          each of these areas, in order to complete the quest, and fulfill our story.</span>
           <br></br>
           <Link to="/roundtableapp/Entrylist" className='menuLink'><Button variant="contained" size="medium" color="primary" className={classes.margin}>Start Your Round Table Council</Button></Link>
           </span>
      </div>
      </div>
  }


