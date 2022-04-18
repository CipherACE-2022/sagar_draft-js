import './App.css';
import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import {Typography} from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Icon from '@mui/material/Icon';


 
// simple text editor using draft-js

export default class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = {editorState: EditorState.createEmpty()};
  }
    onChange(editorState) {
      this.setState({editorState});
    }
    makeBold(){
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    makeItalic(){
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }
    makeUnderline(){
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }
    makeStrikethrough(){
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
    }
    makeCode(){
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
    }
    makeUnorderedList(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item'));
    }
    makeOrderedList(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item'));
    }
    makeBlockquote(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'blockquote'));
    }
    makeCodeBlock(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'code-block'));
    }
    makeH1(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-one'));
    }
    makeH2(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-two'));
    }
    makeH3(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-three'));
    }
    makeH4(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-four'));
    }
    makeH5(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-five'));
    }
    makeH6(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-six'));
    }
    makeUnstyled(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'unstyled'));
    }
    makemonospace(){
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'code-block'));
    }

  

  render() {
    return <div>
    <div>
      <Typography variant="h5" gutterBottom align='center'>Text Formatter using the React & Draft.js</Typography>
    </div>
    <div className='keypad'>
    <button onClick={()=>{this.makeH1();}}>H1</button>
    <button onClick={()=>{this.makeH2();}}>H2</button>
    <button onClick={()=>{this.makeH3();}}>H3</button>
    <button onClick={()=>{this.makeH4();}}>H4</button>
    <button onClick={()=>{this.makeH5();}}>H5</button>
    <button onClick={()=>{this.makeH6();}}>H6</button>
    <button onClick={()=>{this.makeBold();}}><b>Bold</b></button>
    <button onClick={()=>{this.makeItalic();}}><i>Italic</i></button>
    <button onClick={()=>{this.makeUnderline();}}>Underline</button>
    <button onClick={()=>{this.makemonospace();}}>Monospace</button>
    <button onClick={()=>{this.makeStrikethrough();}}>Strikethrough</button>
    <button onClick={()=>{this.makeOrderedList();}}>OL</button>
    <button onClick={()=>{this.makeUnorderedList();}}>UL</button>
    <button onClick={()=>{this.makeCode();}}>Code</button>
    <button onClick={()=>{this.makeCodeBlock();}}>Code Block</button>
    <button onClick={()=>{this.makeBlockquote();}}>Blockquote</button>
    <button onClick={()=>{this.makeUnstyled();}}>Unstyled</button>
    </div>
    
    <div className='take-input'>
    <Editor onChange={(editorState) => {this.onChange(editorState)}}
        editorState={this.state.editorState}
        spellCheck={true} 
       placeholder="Type here...." />
        </div>
      </div>;
  }
  }

