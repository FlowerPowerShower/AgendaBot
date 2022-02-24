declare interface IHelloworldWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  DescriptionFieldLabel2: string;
}

declare module 'HelloworldWebPartStrings' {
  const strings: IHelloworldWebPartStrings;
  export = strings;
}
