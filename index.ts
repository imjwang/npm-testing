type Happiness = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface Person {
  name: string,
  age: number,
  happiness: Happiness,
}

export type GreetHelpers = {
  /** 
   * Greets a Person
   * @param person - The person to greet
   */
  greet: (person: Person) => void

}

export function getGreeter({ name, age, happiness }: Person): GreetHelpers {  
  return {
    greet: () => {
      console.log(`Hello ${name}! You are ${age} years old, your happiness is ${happiness}!`)
      if (age > 70 && happiness > 7) {
        console.log('That\'s a life well lived!')
      }
    }
  }
}