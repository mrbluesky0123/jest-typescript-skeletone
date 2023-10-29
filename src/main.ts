import axios from 'axios'
let start: string = "string";
console.log(start); 




export const sum = (a: number, b: number): number => a + b;

export const example = async (name: string): Promise<string> => {
    const result: {count: number, name: string, age: number} = await axios.get(`https://api.agify.io/?name=${name}`)
    return result.name;
}