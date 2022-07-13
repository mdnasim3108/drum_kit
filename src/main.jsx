import React from "react";
import crash from "./sounds/crash.mp3"
import kickbass from "./sounds/kick-bass.mp3"
import snare from "./sounds/snare.mp3"
import tom1 from "./sounds/tom-1.mp3"
import tom2 from "./sounds/tom-2.mp3"
import tom3 from "./sounds/tom-3.mp3"
import tom4 from "./sounds/tom-4.mp3"
import {Howl} from "howler";

    function Layout(){

      document.addEventListener("keypress",function(event){

        var pressedkey=event.key;

        switch(pressedkey){

          case "w":
            buttonAnimationandsound(pressedkey,crash)
            break;

          case "a":
            buttonAnimationandsound(pressedkey,kickbass)
            break;

          case "s":
            buttonAnimationandsound(pressedkey,snare)
            break;

          case "d":
            buttonAnimationandsound(pressedkey,tom1)
            break;

          case "j":
            buttonAnimationandsound(pressedkey,tom2)
            break;

          case "k":
            buttonAnimationandsound(pressedkey,tom3)
            break;
          
          case "l":
            buttonAnimationandsound(pressedkey,tom4)
            break;

          default:
            console.log(pressedkey)

        }

        
        
      })

      const buttonAnimationandsound=(currentKey,src)=> {

        const sound=new Howl({src,html5:true});

        sound.play()

        var activeButton = document.querySelector("." + currentKey);
      
        activeButton.classList.add("pressed");
      
        setTimeout(function() {
          activeButton.classList.remove("pressed");
        },100);
      
      }


    return(
    <div className="container">

    <h1 id="title">Drum 🥁 Kit</h1>


    <div className="set">
      <button className="w drum" onClick={()=>buttonAnimationandsound("w",crash)}>w</button>
      <button className="a drum" onClick={()=>buttonAnimationandsound("a",kickbass)}>a</button>
      <button className="s drum" onClick={()=>buttonAnimationandsound("s",snare)}>s</button>
      <button className="d drum" onClick={()=>buttonAnimationandsound("d",tom1)}>d</button>
      <button className="j drum" onClick={()=>buttonAnimationandsound("j",tom2)}>j</button>
      <button className="k drum" onClick={()=>buttonAnimationandsound("k",tom3)}>k</button>
      <button className="l drum" onClick={()=>buttonAnimationandsound("l",tom4)}>l</button>
    </div>

    </div>
    );
    }

export default Layout;