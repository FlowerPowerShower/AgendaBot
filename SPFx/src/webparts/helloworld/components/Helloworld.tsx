import * as React from 'react';
import styles from './Helloworld.module.scss';
import { IHelloworldProps } from './IHelloworldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ITimeControlState } from './ITimeControlState';



export default class Helloworld extends React.Component<IHelloworldProps, ITimeControlState, {}> {
 private intervalId: number;

 constructor(props : IHelloworldProps){
   super(props);

   this.state = {
     counter: 1,
     buttonText: "1",
     timer : 0,
     
   }
   
 }

 public Epicness(): void {

 const thisBoundedIncrementer = this.incrementCounter.bind(this);
 this.intervalId = setInterval(thisBoundedIncrementer, 1000);
 } 



 //bind time field to function, setState, Bind.
 private incrementCounter() : void {
  if(this.state.counter < this.state.timer  ){
    const {counter } = this.state;
     
    this.setState({counter:counter +1, buttonText: (counter +1).toString()}
    )
    
  }
  else {
    this.setState({buttonText : "Close"})
    clearInterval(this.intervalId)
  }
 }
 handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const timeValue = Number(e.target.value)
  this.setState({timer: timeValue});
} 
 

  public render(): React.ReactElement<IHelloworldProps> {
    

    return (
     
     <div className={ styles.helloworld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to the agenda bo!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Part!.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              
            <input value={this.state.timer} onChange={this.handleChange}/>
             <button className={styles.button} disabled={this.state.buttonText !== "Close"}> {this.state.buttonText}</button>
              
              <a href="https://aka.ms/spfx" target="_blank" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    );

  }
  
  
  
}

