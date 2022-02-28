import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';
import * as strings from 'HelloworldWebPartStrings';
import Helloworld from './components/Helloworld';
import { IHelloworldProps } from './components/IHelloworldProps';

export interface IHelloworldWebPartProps {
  description: string;
  time : number
}

export default class HelloworldWebPart extends BaseClientSideWebPart<IHelloworldWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloworldProps> = React.createElement(
      Helloworld,
      {
        description: this.properties.description,
        time : this.properties.time

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneSlider('timer', {
                  label:"Minutes",  
                min:2,  
                max:60,  
                value:10,  
                showValue:true,
                }),
                PropertyFieldNumber('Timer', {
                  key: "Timer",
                  label: "Number value only"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
