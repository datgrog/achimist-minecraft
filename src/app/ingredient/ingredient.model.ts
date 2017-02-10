interface MyCssSprite {
  backgroundPositionX: string;
  backgroundPositionY: string;
}

export class Ingredient {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public quantity: number,
    public css: MyCssSprite
  ) { }
}
