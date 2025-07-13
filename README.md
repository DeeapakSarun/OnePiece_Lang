
<center>
  <h1> 🏴‍☠️ OnePiece Lang </h1>
</center>


<p align="center"> <img src="https://github.com/DeeapakSarun/OnePiece_Lang/blob/master/onepiece.gif" alt="OnePiece Lang CLI Demo" width="" /> </p>






A domain-specific pirate-themed programming language that compiles `.onepiece` code to JavaScript.

> Write code like a pirate. Sail through syntax. Claim your treasure. 🦜

---

## 📦 Installation

```bash
npm install -g onepiece-lang
````

This installs the `onepiece` CLI globally.

---

## 🚀 Usage

```bash
onepiece run <file.onepiece>
```

Compiles a `.onepiece` file into JavaScript (`output.js` by default).

### Example

```bash
onepiece run examples.onepiece
node output.js
```

---

## 💬 Language Syntax

### 💡 Variable Declaration

```onepiece
temporaryBounty coins = 100     // let
permanentBounty name = "Luffy"  // const
```

### 💡 Conditionals

```onepiece
hasHaki (coins > 50)
  echoDenDen("You’re rich!")
noHaki
  echoDenDen("Not enough Berries.")
DockAtHarbor
```

### 💡 Functions

```onepiece
crewSkill cheer() {
  echoDenDen("I will become the Pirate King!")
}
cheer()
```

### 💡 Loops

```onepiece
sailThrough (let i = 0; i < 5; i++)
  echoDenDen(i)
DockAtHarbor
```

### 💡 While Loops

```onepiece
untilRaftel (health > 0)
  echoDenDen("Keep sailing!")
  health--
DockAtHarbor
```

### 💡 Return, Break

```onepiece
claimTreasure "One Piece is real!"   // return
abandonShip                          // break
```

---

## 📘 Core Keywords

| OnePiece Keyword  | JavaScript Equivalent |
| ----------------- | --------------------- |
| `temporaryBounty` | `let`                 |
| `permanentBounty` | `const`               |
| `hasHaki`         | `if`                  |
| `noHaki`          | `else`                |
| `DockAtHarbor`    | `}` (block end)       |
| `crewSkill`       | `function`            |
| `echoDenDen()`    | `console.log()`       |
| `sailThrough`     | `for` loop            |
| `untilRaftel`     | `while` loop          |
| `claimTreasure`   | `return`              |
| `abandonShip`     | `break`               |

---

## 🧪 Sample Program

### File: `examples.onepiece`

```onepiece
temporaryBounty bounty = 3000

hasHaki (bounty > 1000)
  echoDenDen("High bounty pirate!")
noHaki
  echoDenDen("Still a rookie.")
DockAtHarbor

crewSkill attack() {
  echoDenDen("Gomu Gomu no Pistol!")
}
attack()
```

### Output: `output.js`

```js
let bounty = 3000;

if (bounty > 1000) {
  console.log("High bounty pirate!");
} else {
  console.log("Still a rookie.");
}

function attack() {
  console.log("Gomu Gomu no Pistol!");
}
attack();
```

---

## ⚙️ CLI Reference

| Command                  | Description                        |
| ------------------------ | ---------------------------------- |
| `onepiece run <file>`    | Compile `.onepiece` to `output.js` |
| `onepiece --help`        | Show usage/help menu               |
| `onepiece --jolly-roger` | Display themed ASCII banner        |

---

## 🧩 Project Structure

```
.
├── examples.onepiece     // Pirate-style source code
├── output.js             // JS output
├── compiler.js           // Compiler runner
├── parser.js             // Translates lines to JS
├── lexer.js              // Tokenizer
├── phrases.js            // Keyword mappings
├── postinstall.js        // Installation banner
└── package.json          // CLI configuration
```

---

## 🛠️ Developing

To work locally on the compiler:

```bash
git clone https://github.com/deepaksarun/onepiece-lang.git
cd onepiece-lang
npm install
npm link     # For local CLI testing
```

Then run:

```bash
onepiece run examples.onepiece
```

---

## ✨ Coming Soon

* 🖊 Syntax highlighting for VS Code
* 🧪 REPL: `onepiece shell`
* 🌍 GitHub Pages documentation
* 📦 Playground: OnePieceLang Web Compiler

---

## 📜 License

MIT — Use across all Grand Line territories. 🌊

---

---

## Credits & Disclaimer

> **OnePiece Lang** is a **fan-made** tribute to the legendary anime and manga **One Piece**.  
> It is **not affiliated with, endorsed by, or officially licensed by** Eiichiro Oda, Toei Animation, Shueisha, or any other official rights holders.

- 🖊 **Original Series by:** [Eiichiro Oda](https://en.wikipedia.org/wiki/Eiichiro_Oda)
- 🎥 **Anime by:** [Toei Animation](https://www.toei-animation-usa.com/)
- 📚 **Manga Publisher:** Shueisha, Weekly Shōnen Jump

All characters, settings, and themes are properties of their respective copyright holders.

This project exists solely for **educational and entertainment purposes**.  
No commercial usage is intended.

> 🏴‍☠️ From one Straw Hat fan to another: *May your code always find LaughTale!*



---


## 👑 Created By

**Deepak Sarun**

> 🧭 "If (Exists): { I build }"

Follow the voyage: [github.com/deepaksarun](https://github.com/deepaksarun)

---

```

---

## ☑️ What’s Next?

Would you like me to:

- Convert this to live GitHub Pages docs?
- Scaffold a `docs/` folder with markdown for each keyword?
- Create a PirateLang Playground UI (via React or Next.js)?
- Add JSDoc-style inline docs to your codebase?

You're building the pirate equivalent of Python, Captain. Let’s raise the sails 🚢
```
