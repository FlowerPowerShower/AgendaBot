import * as React from 'react';
import styles from './Helloworld.module.scss';
import { IHelloworldProps } from './IHelloworldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Helloworld extends React.Component<IHelloworldProps, {}> {
  public render(): React.ReactElement<IHelloworldProps> {
    return (
      <div className={ styles.helloworld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to the agenda bo!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <p className={ styles.description }>{escape(this.props.description2)}</p>
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
