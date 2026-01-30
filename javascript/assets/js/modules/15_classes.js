// ============ SECTION 15: Classes - Interactive Builder ============

function generateClass() {
    const className = document.getElementById('class-name').value || 'MyClass';
    const propsInput = document.getElementById('class-props').value;
    const addPrivate = document.getElementById('add-private').checked;
    const addStatic = document.getElementById('add-static').checked;
    const output = document.getElementById('class-output');

    // Parse properties
    const props = propsInput.split(',').map(p => p.trim()).filter(p => p);

    // Generate constructor params
    const constructorParams = props.join(', ');
    const constructorBody = props.map(p => `        this.${p} = ${p};`).join('\n');

    // Build class code
    let code = `class ${className} {\n`;

    // Add private field if checked
    if (addPrivate) {
        code += `    #id = Math.random().toString(36).substr(2, 9);\n\n`;
    }

    // Constructor
    code += `    constructor(${constructorParams}) {\n`;
    code += constructorBody + '\n';
    code += `    }\n\n`;

    // Add getter for private field
    if (addPrivate) {
        code += `    get id() {\n`;
        code += `        return this.#id;\n`;
        code += `    }\n\n`;
    }

    // Add a public method
    if (props.length > 0) {
        const firstProp = props[0];
        code += `    describe() {\n`;
        code += `        return \`${className}: \${this.${firstProp}}\`;\n`;
        code += `    }\n\n`;
    }

    // Add static method if checked
    if (addStatic) {
        code += `    static create${className}(${constructorParams}) {\n`;
        code += `        return new ${className}(${props.join(', ')});\n`;
        code += `    }\n`;
    }

    code += `}`;

    // Generate usage example
    const exampleValues = props.map((p, i) => {
        if (p.toLowerCase().includes('name')) return `"Product ${i + 1}"`;
        if (p.toLowerCase().includes('price')) return (10 + i * 5).toString();
        if (p.toLowerCase().includes('stock')) return (100 - i * 10).toString();
        return `"value${i + 1}"`;
    });

    let usage = `\n\n// Utilisation :\n`;
    usage += `const instance = new ${className}(${exampleValues.join(', ')});\n`;
    usage += `console.log(instance.describe());\n`;

    if (addPrivate) {
        usage += `console.log(instance.id);  // Accessible via getter\n`;
    }

    if (addStatic) {
        usage += `\nconst instance2 = ${className}.create${className}(${exampleValues.join(', ')});\n`;
    }

    // Display
    output.innerHTML = `
        <div class="code-preview">
            <strong style="color:var(--accent)">📝 Code Généré :</strong>
            <pre style="margin:10px 0; overflow-x:auto"><code class="language-javascript">${escapeHtml(code + usage)}</code></pre>
        </div>
        <div style="margin-top:15px; padding:12px; background:rgba(76,175,80,0.1); border-radius:6px; border-left:3px solid #4caf50">
            <strong>✅ Classe créée !</strong> Copiez ce code dans votre console pour le tester.
        </div>
    `;

    // Re-highlight syntax
    if (window.Prism) {
        Prism.highlightAll();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ========== DEMO FUNCTIONS FOR CONSOLE ==========

function demoBasicClass() {
    console.log("=== Basic Class Demo ===");

    class User {
        #password;

        constructor(name, password) {
            this.name = name;
            this.#password = password;
        }

        greet() {
            return `Hello, ${this.name}!`;
        }

        get displayName() {
            return this.name.toUpperCase();
        }

        static isValidName(name) {
            return name.length > 2;
        }
    }

    const user = new User('Alice', 'secret123');
    console.log(user.greet());
    console.log(user.displayName);
    console.log(User.isValidName('Al'));
}

function demoInheritance() {
    console.log("=== Inheritance Demo ===");

    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            return `${this.name} makes a sound`;
        }
    }

    class Dog extends Animal {
        constructor(name, breed) {
            super(name);
            this.breed = breed;
        }

        speak() {
            return `${this.name} barks!`;
        }

        speakLikeAnimal() {
            return super.speak();
        }
    }

    const dog = new Dog('Rex', 'Labrador');
    console.log(dog.speak());
    console.log(dog.speakLikeAnimal());
    console.log(dog instanceof Dog);
    console.log(dog instanceof Animal);
}

function demoSingleton() {
    console.log("=== Singleton Pattern Demo ===");

    class Database {
        static #instance = null;

        constructor() {
            if (Database.#instance) {
                return Database.#instance;
            }
            Database.#instance = this;
            this.connection = 'Connected';
        }

        static getInstance() {
            if (!Database.#instance) {
                Database.#instance = new Database();
            }
            return Database.#instance;
        }
    }

    const db1 = Database.getInstance();
    const db2 = Database.getInstance();
    console.log("Same instance?", db1 === db2);
}

function demoBuilder() {
    console.log("=== Builder Pattern Demo ===");

    class QueryBuilder {
        #query = '';

        select(fields) {
            this.#query += `SELECT ${fields} `;
            return this;
        }

        from(table) {
            this.#query += `FROM ${table} `;
            return this;
        }

        where(condition) {
            this.#query += `WHERE ${condition}`;
            return this;
        }

        build() {
            return this.#query.trim();
        }
    }

    const query = new QueryBuilder()
        .select('*')
        .from('users')
        .where('age > 18')
        .build();

    console.log("Query:", query);
}

function demoPrivateFields() {
    console.log("=== Private Fields Demo ===");

    class BankAccount {
        #balance = 0;

        deposit(amount) {
            if (amount > 0) {
                this.#balance += amount;
                return true;
            }
            return false;
        }

        withdraw(amount) {
            if (amount > 0 && amount <= this.#balance) {
                this.#balance -= amount;
                return true;
            }
            return false;
        }

        get balance() {
            return this.#balance;
        }
    }

    const account = new BankAccount();
    account.deposit(100);
    console.log("Balance:", account.balance);
    account.withdraw(30);
    console.log("After withdrawal:", account.balance);
    // console.log(account.#balance);  // SyntaxError
}
