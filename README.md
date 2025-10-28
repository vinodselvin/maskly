# 🕶️ maskly

> Lightweight utility to mask sensitive data in strings, objects, and arrays — with dynamic field control and customization.

---

## 🚀 Features

- 🔒 Mask any **string**, **object**, or **array**
- ⚙️ Works with **dynamic field names**
- 🧩 Supports **nested objects**
- 🎛️ Customizable options (`visibleStart`, `visibleEnd`, `maskChar`)
- 💪 Written in **TypeScript**, works in **JavaScript**
- ⚡ Zero dependencies

---

## 📦 Installation

```bash
npm install maskly
# or
yarn add maskly
```

---

## 🧠 Usage

### 🔹 Basic Example

```js
import { maskly } from "maskly";

const user = {
  name: "Vinod Selvin",
  email: "vinod@example.com",
  phone: "9876543210",
  password: "supersecret"
};

console.log(maskly(user));
/*
{
  name: 'Vinod Selvin',
  email: 'vi***********om',
  phone: '98******10',
  password: 'su**********et'
}
*/
```

---

### 🔹 Mask Specific Fields

```js
maskly(user, ["email", "name"]);
/*
{
  name: 'Vi*******in',
  email: 'vi***********om',
  phone: '9876543210',
  password: 'supersecret'
}
*/
```

---

### 🔹 Customize Options

```js
maskly(user, ["email"], { visibleStart: 3, visibleEnd: 1, maskChar: "#" });
/*
{
  name: 'Vinod Selvin',
  email: 'vin##########m',
  phone: '9876543210',
  password: 'supersecret'
}
*/
```

---

### 🔹 Mask Strings or Arrays Directly

```js
maskly("mysecretpassword");
// => "my************rd"

maskly(["hello@example.com", "test@domain.com"]);
// => ["he***********om", "te**********om"]
```

---

## ⚙️ API

### `maskly(value, fields?, options?)`

| Parameter | Type | Description |
|------------|------|-------------|
| `value` | `string | object | array` | Input value to mask |
| `fields` | `string[]` _(optional)_ | List of fields to mask (for objects) |
| `options` | `object` _(optional)_ | Customization options |

#### Options
| Key | Type | Default | Description |
|-----|------|----------|-------------|
| `visibleStart` | `number` | `2` | Number of characters visible at start |
| `visibleEnd` | `number` | `2` | Number of characters visible at end |
| `maskChar` | `string` | `"*"` | Character used for masking |

---

## 🧰 Example with TypeScript

```ts
import { maskly } from "maskly";

interface User {
  name: string;
  email: string;
  password: string;
}

const user: User = {
  name: "John Doe",
  email: "john@example.com",
  password: "mypassword123"
};

console.log(maskly(user, ["email", "password"]));
```

---

## 🧪 Run Tests

```bash
npm test
```

---

## 📄 License

MIT © 2025 [Vinod Selvin](https://github.com/vinodselvin)

---

## ⭐ Support

If you like **maskly**, please ⭐ it on [npm](https://www.npmjs.com/package/maskly) or [GitHub](https://github.com/vinodselvin/maskly)!
