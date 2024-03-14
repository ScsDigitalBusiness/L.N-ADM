import { DashBoard } from "./Dashboard-modules"; 
export class Colaborator {
    constructor(name, registers) {
        this.name = name;
        this.registers = registers; 
 }
} 
Object.setPrototypeOf(Colaborator, DashBoard);  

  

