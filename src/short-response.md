# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 1

**Encapsulation** is a tool in **object-oriented programming** in which you store both the data and functions for that in an **interface** or object to keep code from being **accessible** by other code in the program.

```js 

const invitation = {
  guestList: ['bart'],
  invite(newGuest) {
    this.guestList.push(newGuest);
  },
  showList() {
    this.guestList.forEach((guest) => {
      console.log(`${guest} is on the list.`);
     });
   }
  }
  

invitation.invite(`zoey`);
// added zoey to the list
invitation.showList();
// bart is on the list
// zoey is on the list

addFriend('peter');
printFriends();
//invalidated due to the method being an object

```

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();
// gone up by 3

counterB.increment();
// gone up by 1

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

The `this` keyword, when invoked, refers to the **object invoking the method**; because of this, the keyword is useful due to its **reusability**, allowing different objects to use the process without needing to modify the code itself.  For instance, the code snippet below, when both `counterA` and `counterB` invoke the **increment** method, each instance by a different amount, because `this.count++` refers to that object alone.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

**Polymorphism** is when **instances** of an object or **class** are considered the same because they share the same name of a **method**. This can be useful as you can reuse a method an object has, even if the method code was **modified**.

```js
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  introdure(){
    return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

class Dog extends Person {
  constructor(name, age){
    super(name, age);
  }
introdure(){
  return `And this is ${this.name} and they are ${this.age} years old.`;
  }
}

const mike = new Person('Mike', 18);
const coby = new Dog('Coby', 3);

const duo = [mike, coby];

const printIntroduction = (one) => {
  console.log(one.introdure());
}

duo.forEach(printIntroduction);
```

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

### **Part A:**
 I would use **inheritance** to reuse the **properties** like `name`, `energy`, `happiness`, and `sleep`, then I could reuse the method relation to said properties.

### **Part B:**
 The one advantage of using **inheritance** is that I do not need to **repeat myself** and make the same properties and methods when making a **new class**. Instead, I can **reuse** old properties and methods from another class.
