import React, {Component} from "react";
import './App.css';

class DrumMachine extends Component {
  constructor (props) {
    super (props)
    this.state = {
      audios: [
        {id: "Q",
          name: "Heater 1",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
        },
        {id: "W",
          name: "Heater 2",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
        },
        {id: "E",
          name: "Heater 3",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
        },
        {id: "A",
          name: "Heater 4",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
        },
        {id: "S",
          name: "Clap",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
        },
        {id: "D",
          name: "Open-HH",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
        },
        {id: "Z",
          name: "Kick-n'-Hat",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
        },
        {id: "X",
          name: "Kick",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
        },
        {id: "C",
          name: "Closed-HH",
          clip: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
        }
      ],
      currentAudio: { 
        id: "",
        name: "",
        clip: ""
      }
    };
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount () {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount () {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress (event) {
    if(["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(event.key.toUpperCase())) {
      const audio = this.state.audios.find((el) => el.id === event.key.toUpperCase());
      this.playAudio(audio)
    };
  } 

  playAudio (audio) {
    this.setState(() => ({
      currentAudio: audio
    }));
    const currAudioElement = document.getElementById(audio.id);
    currAudioElement.play()
  }
    

  render () {
   const drumPads = this.state.audios.map((e)=>
      <button 
        className="drum-pad" 
        id={e.name} 
        key={e.name} 
        onClick={() => this.playAudio(e)}>
          {e.id}
          <audio 
            id={e.id} 
            className="clip"
            src={e.clip} 
            type="audio/mp3" 
            loop={false}>
          </audio>
        </button>
    );

    const audioName = this.state.currentAudio.name;
    
  return (
    <div>
      <h1>The Drum Machine</h1>
      <p>Your forever favourite DJ!</p>
      <div id="drum-machine">
        <div id="drum-pads">{drumPads}</div>
        <div id="display">{audioName}</div>
      </div>
    </div>
  );
}
}

export default DrumMachine;
