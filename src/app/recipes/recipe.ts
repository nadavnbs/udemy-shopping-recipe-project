import { Ingrediens } from "../shared/ingredint";

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredient:Ingrediens[];

    constructor(name:string,desc:string,img:string,ingredient:Ingrediens[]){
        this.name = name;
        this.description = desc;
        this.imagePath = img;
        this.ingredient = ingredient;
    }
}