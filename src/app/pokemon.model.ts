export class Pokemon {
  //properties
  id: number;
  name: string;
  primaryType: string;
  secondaryType: string;
  maxHP: number;

  //constructor
  constructor(
    id: number,
    name: string,
    primaryType: string,
    secondaryType: string,
    maxHP: number
  ) {
    this.id = id;
    this.name = name;
    this.primaryType = primaryType;
    this.secondaryType = secondaryType;
    this.maxHP = maxHP;
  }
}
