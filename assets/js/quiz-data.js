const QUIZ_DATA = {
    "meta": {
        "title": "Quiz Python Expert - 100 Questions",
        "total": 100
    },
    "questions": [
        {
            "id": 1,
            "question": "Qui a créé Python ?",
            "options": [
                "Guido van Rossum",
                "Linus Torvalds",
                "James Gosling",
                "Bjarne Stroustrup"
            ],
            "answer": 0,
            "explanation": "En 1991, au CWI (Pays-Bas)."
        },
        {
            "id": 2,
            "question": "Comment afficher du texte ?",
            "options": [
                "print('Hello')",
                "echo 'Hello'",
                "console.log('Hello')",
                "System.out.println('Hello')"
            ],
            "answer": 0,
            "explanation": "Fonction native print()."
        },
        {
            "id": 3,
            "question": "Quelle est l'extension des fichiers Python ?",
            "options": [
                ".py",
                ".python",
                ".pt",
                ".pi"
            ],
            "answer": 0,
            "explanation": "Standard pour les scripts et modules."
        },
        {
            "id": 4,
            "question": "Comment commenter une ligne ?",
            "options": [
                "# Commentaire",
                "// Commentaire",
                "/* Commentaire */",
                "-- Commentaire"
            ],
            "answer": 0,
            "explanation": "Le dièse (#) est utilisé pour les commentaires inline."
        },
        {
            "id": 5,
            "question": "Quel type est immutable ?",
            "options": [
                "Tuple",
                "List",
                "Dictionary",
                "Set"
            ],
            "answer": 0,
            "explanation": "On ne peut pas modifier un tuple après création."
        },
        {
            "id": 6,
            "question": "Comment indentation fonctionne en Python ?",
            "options": [
                "Définit les blocs de code",
                "Est décorative",
                "Sert à la compilation",
                "Est ignorée"
            ],
            "answer": 0,
            "explanation": "Indentation obligatoire, remplace les accolades {}."
        },
        {
            "id": 7,
            "question": "Quelle fonction permet de lire une entrée utilisateur ?",
            "options": [
                "input()",
                "read()",
                "scan()",
                "get()"
            ],
            "answer": 0,
            "explanation": "Retourne toujours une chaîne de caractères (string)."
        },
        {
            "id": 8,
            "question": "Comment déclarer une fonction ?",
            "options": [
                "def my_func():",
                "function my_func():",
                "func my_func():",
                "void my_func():"
            ],
            "answer": 0,
            "explanation": "Mot-clé def."
        },
        {
            "id": 9,
            "question": "Quel opérateur calcule la puissance ?",
            "options": [
                "**",
                "^",
                "pow",
                "exp"
            ],
            "answer": 0,
            "explanation": "2**3 = 8. L'opérateur ^ est le XOR binaire."
        },
        {
            "id": 10,
            "question": "Comment convertir une chaîne '123' en entier ?",
            "options": [
                "int('123')",
                "str('123')",
                "float('123')",
                "cast('123')"
            ],
            "answer": 0,
            "explanation": "Fonction built-in int()."
        },
        {
            "id": 11,
            "question": "Quelle structure de données est Key:Value ?",
            "options": [
                "Dictionary",
                "List",
                "Tuple",
                "Set"
            ],
            "answer": 0,
            "explanation": "{ 'key': 'value' }."
        },
        {
            "id": 12,
            "question": "Comment ajouter un élément à une liste ?",
            "options": [
                "list.append(x)",
                "list.add(x)",
                "list.push(x)",
                "list.insert(x)"
            ],
            "answer": 0,
            "explanation": "append ajoute à la fin. insert permet de choisir l'index."
        },
        {
            "id": 13,
            "question": "Quelle boucle itère sur une séquence ?",
            "options": [
                "for x in sequence:",
                "foreach x in sequence:",
                "loop x in sequence:",
                "while x in sequence:"
            ],
            "answer": 0,
            "explanation": "La boucle for en Python est un 'for-each'."
        },
        {
            "id": 14,
            "question": "Quel mot-clé est utilisé pour les classes ?",
            "options": [
                "class",
                "struct",
                "object",
                "type"
            ],
            "answer": 0,
            "explanation": "class MyClass: ..."
        },
        {
            "id": 15,
            "question": "Quelle est la valeur booléenne de False + 1 ?",
            "options": [
                "1",
                "0",
                "True",
                "Error"
            ],
            "answer": 0,
            "explanation": "False vaut 0, True vaut 1 dans un contexte numérique."
        },
        {
            "id": 16,
            "question": "Comment importer un module ?",
            "options": [
                "import math",
                "include math",
                "require math",
                "using math"
            ],
            "answer": 0,
            "explanation": "Ou 'from math import sqrt'."
        },
        {
            "id": 17,
            "question": "Que retourne `range(3)` ?",
            "options": [
                "Une séquence 0, 1, 2",
                "1, 2, 3",
                "0, 1, 2, 3",
                "Une liste"
            ],
            "answer": 0,
            "explanation": "Un objet range (itérable) qui génère 0, 1, 2."
        },
        {
            "id": 18,
            "question": "Quel mot-clé ne fait rien (placeholder) ?",
            "options": [
                "pass",
                "null",
                "void",
                "nop"
            ],
            "answer": 0,
            "explanation": "Utile pour définir des fonctions vides."
        },
        {
            "id": 19,
            "question": "Comment gérer les exceptions ?",
            "options": [
                "try / except",
                "try / catch",
                "try / rescue",
                "do / catch"
            ],
            "answer": 0,
            "explanation": "Et finally / else."
        },
        {
            "id": 20,
            "question": "Quelle méthode enlève les espaces autour d'une string ?",
            "options": [
                "strip()",
                "trim()",
                "clean()",
                "remove()"
            ],
            "answer": 0,
            "explanation": "lstrip() et rstrip() existent aussi."
        },
        {
            "id": 21,
            "question": "Que signifie `__init__` ?",
            "options": [
                "Le constructeur de classe",
                "L'initialisation du module",
                "Une variable privée",
                "Rien"
            ],
            "answer": 0,
            "explanation": "Méthode magique appelée à la création d'une instance."
        },
        {
            "id": 22,
            "question": "Quel type de données est {1, 2, 3} ?",
            "options": [
                "Set",
                "Dictionary",
                "List",
                "Tuple"
            ],
            "answer": 0,
            "explanation": "Un ensemble (valeurs uniques, non ordonné)."
        },
        {
            "id": 23,
            "question": "Est-ce que Python est typé statiquement ou dynamiquement ?",
            "options": [
                "Dynamiquement",
                "Statiquement",
                "Faiblement",
                "Pas typé"
            ],
            "answer": 0,
            "explanation": "Types vérifiés au runtime."
        },
        {
            "id": 24,
            "question": "Comment obtenir la longueur d'une liste ?",
            "options": [
                "len(list)",
                "list.length",
                "list.size()",
                "count(list)"
            ],
            "answer": 0,
            "explanation": "Fonction built-in len()."
        },
        {
            "id": 25,
            "question": "Que fait `list[-1]` ?",
            "options": [
                "Accède au dernier élément",
                "Erreur",
                "Accède au premier",
                "Supprime l'élément"
            ],
            "answer": 0,
            "explanation": "Indexation négative pratique."
        },
        {
            "id": 26,
            "question": "Comment créer une liste de 0 de taille 5 ?",
            "options": [
                "[0] * 5",
                "[0, 5]",
                "list(0, 5)",
                "range(5)"
            ],
            "answer": 0,
            "explanation": "Donne [0, 0, 0, 0, 0]."
        },
        {
            "id": 27,
            "question": "Quel est l'opérateur de division entière ?",
            "options": [
                "//",
                "/",
                "div",
                "%"
            ],
            "answer": 0,
            "explanation": "5 // 2 = 2 (float: 5 / 2 = 2.5)."
        },
        {
            "id": 28,
            "question": "Comment ouvrir un fichier en lecture ?",
            "options": [
                "open('file', 'r')",
                "open('file', 'w')",
                "read('file')",
                "File.open('file')"
            ],
            "answer": 0,
            "explanation": "'r' est le mode par défaut."
        },
        {
            "id": 29,
            "question": "Quel mot-clé est utilisé pour l'héritage ?",
            "options": [
                "class Child(Parent):",
                "class Child extends Parent",
                "class Child inherits Parent",
                "class Child : Parent"
            ],
            "answer": 0,
            "explanation": "Syntaxe entre parenthèses."
        },
        {
            "id": 30,
            "question": "Que fait `lambda` ?",
            "options": [
                "Crée une fonction anonyme",
                "Une variable constante",
                "Un calcul mathématique",
                "Rien"
            ],
            "answer": 0,
            "explanation": "Ex: lambda x: x+1."
        },
        {
            "id": 31,
            "question": "Quelle est la différence entre liste et tuple ?",
            "options": [
                "Liste mutable, Tuple immutable",
                "Liste () et Tuple []",
                "Aucune",
                "Tuple plus lent"
            ],
            "answer": 0,
            "explanation": "Tuple est plus performant et sûr pour les constantes."
        },
        {
            "id": 32,
            "question": "Comment vérifier si une clé est dans un dictionnaire ?",
            "options": [
                "if key in dict:",
                "if dict.has(key):",
                "if dict.contains(key)",
                "if exists(key)"
            ],
            "answer": 0,
            "explanation": "Opérateur 'in' universel."
        },
        {
            "id": 33,
            "question": "Quel module gère le format JSON ?",
            "options": [
                "json",
                "simplejson",
                "jsonify",
                "xml"
            ],
            "answer": 0,
            "explanation": "json.loads(), json.dumps()."
        },
        {
            "id": 34,
            "question": "Comment formater une string f-string (3.6+) ?",
            "options": [
                "f'Val: {x}'",
                "f'Val: ' + x",
                "'Val: {}'.format(x)",
                "x.toString()"
            ],
            "answer": 0,
            "explanation": "La méthode la plus moderne et lisible."
        },
        {
            "id": 35,
            "question": "Que retourne `None` ?",
            "options": [
                "L'absence de valeur",
                "Zéro",
                "Faux",
                "Vide"
            ],
            "answer": 0,
            "explanation": "Équivalent de null."
        },
        {
            "id": 36,
            "question": "Quel est le résultat de `10 % 3` ?",
            "options": [
                "1",
                "3",
                "0",
                "10"
            ],
            "answer": 0,
            "explanation": "Modulo (reste de la division)."
        },
        {
            "id": 37,
            "question": "Comment installer une librairie externe ?",
            "options": [
                "pip install lib",
                "npm install lib",
                "python install lib",
                "get lib"
            ],
            "answer": 0,
            "explanation": "Via PyPI (Python Package Index)."
        },
        {
            "id": 38,
            "question": "Quel mot-clé permet de retourner une valeur dans un générateur ?",
            "options": [
                "yield",
                "return",
                "generate",
                "emit"
            ],
            "answer": 0,
            "explanation": "Transforme la fonction en générateur itérable."
        },
        {
            "id": 39,
            "question": "Comment concaténer deux listes ?",
            "options": [
                "list1 + list2",
                "list1.append(list2)",
                "list1.concat(list2)",
                "No way"
            ],
            "answer": 0,
            "explanation": "Crée une nouvelle liste avec les éléments des deux."
        },
        {
            "id": 40,
            "question": "Quelle est la convention PEP 8 pour les variables ?",
            "options": [
                "snake_case",
                "camelCase",
                "PascalCase",
                "UPPER_CASE"
            ],
            "answer": 0,
            "explanation": "nom_de_variable."
        },
        {
            "id": 41,
            "question": "Comment savoir le type d'une variable ?",
            "options": [
                "type(var)",
                "typeof var",
                "var.type",
                "var.class"
            ],
            "answer": 0,
            "explanation": "Renvoie la classe de l'objet."
        },
        {
            "id": 42,
            "question": "Quelle fonction permet de trier une liste in-place ?",
            "options": [
                "list.sort()",
                "sorted(list)",
                "order(list)",
                "list.order()"
            ],
            "answer": 0,
            "explanation": "sorted() renvoie une nouvelle liste."
        },
        {
            "id": 43,
            "question": "Qu'est-ce qu'un décorateur ?",
            "options": [
                "Une fonction qui modifie une autre fonction (@wrapper)",
                "Un attribut CSS",
                "Un commentaire",
                "Une classe"
            ],
            "answer": 0,
            "explanation": "Syntaxe @decorator au-dessus de def."
        },
        {
            "id": 44,
            "question": "Quel est l'environnement virtuel standard ?",
            "options": [
                "venv",
                "virtualenv",
                "conda",
                "env"
            ],
            "answer": 0,
            "explanation": "python -m venv myenv."
        },
        {
            "id": 45,
            "question": "Que fait `if __name__ == '__main__':` ?",
            "options": [
                "Exécute le bloc seulement si le script est lancé directement",
                "Indique le début",
                "Déclare le main",
                "Rien"
            ],
            "answer": 0,
            "explanation": "Évite l'exécution lors d'un import."
        },
        {
            "id": 46,
            "question": "Comment inverser une chaîne 'abc' ?",
            "options": [
                "'abc'[::-1]",
                "'abc'.reverse()",
                "reverse('abc')",
                "inv('abc')"
            ],
            "answer": 0,
            "explanation": "Slicing avec pas de -1."
        },
        {
            "id": 47,
            "question": "Quelle instruction sort d'une boucle ?",
            "options": [
                "break",
                "stop",
                "exit",
                "return"
            ],
            "answer": 0,
            "explanation": "continue passe à l'itération suivante."
        },
        {
            "id": 48,
            "question": "Que vaut `bool([])` (liste vide) ?",
            "options": [
                "False",
                "True",
                "None",
                "Error"
            ],
            "answer": 0,
            "explanation": "Les conteneurs vides sont 'Falsy'."
        },
        {
            "id": 49,
            "question": "Comment écrire une condition ternaire ?",
            "options": [
                "x if cond else y",
                "cond ? x : y",
                "if cond then x else y",
                "cond -> x, y"
            ],
            "answer": 0,
            "explanation": "Syntaxe spécifique à Python."
        },
        {
            "id": 50,
            "question": "Quel module pour les expressions régulières ?",
            "options": [
                "re",
                "regex",
                "regexp",
                "match"
            ],
            "answer": 0,
            "explanation": "re.search, re.match, re.findall."
        },
        {
            "id": 51,
            "question": "Que fait `enumerate(list)` ?",
            "options": [
                "Retourne index et valeur pour chaque élément",
                "Compte les éléments",
                "Trie",
                "Filtre"
            ],
            "answer": 0,
            "explanation": "for i, val in enumerate(liste):"
        },
        {
            "id": 52,
            "question": "Qu'est-ce que `pip` ?",
            "options": [
                "Package Installer for Python",
                "Python In Package",
                "Program In Python",
                "Person In Paris"
            ],
            "answer": 0,
            "explanation": "Le standard pour gérer les paquets."
        },
        {
            "id": 53,
            "question": "Comment créer un set vide ?",
            "options": [
                "set()",
                "{}",
                "[]",
                "empty()"
            ],
            "answer": 0,
            "explanation": "{} crée un dictionnaire vide."
        },
        {
            "id": 54,
            "question": "Quel mot-clé définit une variable globale ?",
            "options": [
                "global",
                "var",
                "public",
                "extern"
            ],
            "answer": 0,
            "explanation": "Permet de modifier une variable hors du scope local."
        },
        {
            "id": 55,
            "question": "Comment faire une List Comprehension ?",
            "options": [
                "[x for x in list]",
                "list.map(x)",
                "for x in list return x",
                "no"
            ],
            "answer": 0,
            "explanation": "Syntaxe concise pour créer des listes."
        },
        {
            "id": 56,
            "question": "Quelle méthode joint une liste de strings ?",
            "options": [
                "''.join(list)",
                "list.join('')",
                "concat(list)",
                "merge(list)"
            ],
            "answer": 0,
            "explanation": "C'est une méthode de string, pas de liste."
        },
        {
            "id": 57,
            "question": "Quel est le résultat de `3 * 'A'` ?",
            "options": [
                "'AAA'",
                "'3A'",
                "Error",
                "None"
            ],
            "answer": 0,
            "explanation": "Multiplication de chaînes."
        },
        {
            "id": 58,
            "question": "Comment copier une liste (superficielle) ?",
            "options": [
                "list.copy()",
                "list.clone()",
                "list.dup()",
                "copy(list)"
            ],
            "answer": 0,
            "explanation": "Ou list[:]."
        },
        {
            "id": 59,
            "question": "Quel opérateur vérifie l'identité d'objet ?",
            "options": [
                "is",
                "==",
                "===",
                "eq"
            ],
            "answer": 0,
            "explanation": "Comparaison de l'adresse mémoire (id)."
        },
        {
            "id": 60,
            "question": "Que fait `zip([1,2], [3,4])` ?",
            "options": [
                "Crée des paires [(1,3), (2,4)]",
                "Concatène [1,2,3,4]",
                "Somme",
                "Rien"
            ],
            "answer": 0,
            "explanation": "Combine les itérables élément par élément."
        },
        {
            "id": 61,
            "question": "Comment définir une méthode de classe ?",
            "options": [
                "@classmethod",
                "@staticmethod",
                "def static",
                "class def"
            ],
            "answer": 0,
            "explanation": "Prend 'cls' comme premier argument."
        },
        {
            "id": 62,
            "question": "Quel module gère les dates ?",
            "options": [
                "datetime",
                "date",
                "time",
                "calendar"
            ],
            "answer": 0,
            "explanation": "datetime.date, datetime.time, datetime.datetime."
        },
        {
            "id": 63,
            "question": "Comment déballer (unpack) un tuple (x, y) ?",
            "options": [
                "a, b = (x, y)",
                "a = x, b = y",
                "unpack(x, y)",
                "a, b = x"
            ],
            "answer": 0,
            "explanation": "Assignation multiple."
        },
        {
            "id": 64,
            "question": "Que signifie `*args` dans une fonction ?",
            "options": [
                "Nombre variable d'arguments positionnels",
                "Pointeur",
                "Multiplication",
                "Erreur"
            ],
            "answer": 0,
            "explanation": "Reçu comme un tuple."
        },
        {
            "id": 65,
            "question": "Et `**kwargs` ?",
            "options": [
                "Nombre variable d'arguments nommés (keyword)",
                "Pointeur double",
                "Puissance",
                "Rien"
            ],
            "answer": 0,
            "explanation": "Reçu comme un dictionnaire."
        },
        {
            "id": 66,
            "question": "Quelle fonction retourne l'aide docstring ?",
            "options": [
                "help()",
                "doc()",
                "man()",
                "info()"
            ],
            "answer": 0,
            "explanation": "Affiche le __doc__ de l'objet."
        },
        {
            "id": 67,
            "question": "Comment supprimer une variable ?",
            "options": [
                "del var",
                "remove var",
                "delete var",
                "free var"
            ],
            "answer": 0,
            "explanation": "Supprime la référence."
        },
        {
            "id": 68,
            "question": "Quel module pour interagir avec l'OS ?",
            "options": [
                "os",
                "sys",
                "system",
                "platform"
            ],
            "answer": 0,
            "explanation": "os.path, os.listdir, os.environ."
        },
        {
            "id": 69,
            "question": "Comment faire un dictionnaire avec comprehension ?",
            "options": [
                "{k:v for k,v in items}",
                "[k:v for k,v in items]",
                "(k:v for k,v)",
                "dict(k,v)"
            ],
            "answer": 0,
            "explanation": "Similaire aux listes."
        },
        {
            "id": 70,
            "question": "Quel booléen vaut vide ?",
            "options": [
                "Aucun en soi, mais None est Falsy",
                "True",
                "False",
                "Empty"
            ],
            "answer": 0,
            "explanation": "0, '', [], {}, None sont Falsy."
        },
        {
            "id": 71,
            "question": "Comment vérifier le type d'une instance ?",
            "options": [
                "isinstance(obj, type)",
                "type(obj) == type",
                "obj.is(type)",
                "obj instanceof type"
            ],
            "answer": 0,
            "explanation": "Plus robuste que type() car gère l'héritage."
        },
        {
            "id": 72,
            "question": "Quelle est la version actuelle majeure (2025) ?",
            "options": [
                "Python 3.x",
                "Python 2.7",
                "Python 4",
                "Python 5"
            ],
            "answer": 0,
            "explanation": "Python 2 est EOL depuis 2020."
        },
        {
            "id": 73,
            "question": "Comment générer un nombre aléatoire ?",
            "options": [
                "import random; random.randint(0, 10)",
                "Math.random()",
                "rand()",
                "randint()"
            ],
            "answer": 0,
            "explanation": "Module random standard."
        },
        {
            "id": 74,
            "question": "Que fait `assert condition` ?",
            "options": [
                "Lève une AssertionError si faux",
                "Rien",
                "Teste",
                "Valide"
            ],
            "answer": 0,
            "explanation": "Utilisé pour le débogage et tests."
        },
        {
            "id": 75,
            "question": "Quel est le 'Zen of Python' ?",
            "options": [
                "import this",
                "import zen",
                "zen()",
                "help(zen)"
            ],
            "answer": 0,
            "explanation": "19 aphorismes de Tim Peters sur la philosophie Python."
        },
        {
            "id": 76,
            "question": "Comment fusionner deux dicts (3.9+) ?",
            "options": [
                "d1 | d2",
                "d1 + d2",
                "d1.merge(d2)",
                "d1 & d2"
            ],
            "answer": 0,
            "explanation": "Opérateur d'union."
        },
        {
            "id": 77,
            "question": "Que fait `map(func, list)` ?",
            "options": [
                "Applique func à chaque élément",
                "Filtre",
                "Reduit",
                "Carte"
            ],
            "answer": 0,
            "explanation": "Retourne un itérateur (à convertir en list() si besoin)."
        },
        {
            "id": 78,
            "question": "Qu'est-ce qu'un Set ?",
            "options": [
                "Collection unique non ordonnée",
                "Liste ordonnée",
                "Dictionnaire",
                "Tuple"
            ],
            "answer": 0,
            "explanation": "Idéal pour l'appartenance rapide et dédoublonner."
        },
        {
            "id": 79,
            "question": "Quel mot-clé pour définir une propriété (getter/setter) ?",
            "options": [
                "@property",
                "@get",
                "@set",
                "@attr"
            ],
            "answer": 0,
            "explanation": "Permet d'accéder à une méthode comme un attribut."
        },
        {
            "id": 80,
            "question": "Comment ouvrir un fichier avec gestion automatique de fermeture ?",
            "options": [
                "with open(...) as f:",
                "try open(...)",
                "using open(...)",
                "file open(...)"
            ],
            "answer": 0,
            "explanation": "Context Manager ( appelle __exit__)."
        },
        {
            "id": 81,
            "question": "Quelle est la particularité des strings en Python ?",
            "options": [
                "Sont immutables",
                "Sont mutables",
                "Sont des listes",
                "N'existent pas"
            ],
            "answer": 0,
            "explanation": "On ne peut pas changer un caractère via index: s[0] = 'a' fail."
        },
        {
            "id": 82,
            "question": "Comment faire un switch/case (3.10+) ?",
            "options": [
                "match / case",
                "switch / case",
                "if / elif",
                "select / case"
            ],
            "answer": 0,
            "explanation": "Pattern Matching structurel."
        },
        {
            "id": 83,
            "question": "Quel outil pour le typage statique optionnel ?",
            "options": [
                "mypy",
                "typepy",
                "check",
                "lint"
            ],
            "answer": 0,
            "explanation": "Utilise les Type Hints."
        },
        {
            "id": 84,
            "question": "Comment définir une Dataclass (3.7+) ?",
            "options": [
                "@dataclass class A:",
                "data class A",
                "struct A",
                "class A(Data):"
            ],
            "answer": 0,
            "explanation": "Génère __init__, __repr__ automatiquement."
        },
        {
            "id": 85,
            "question": "Que signifie GIL ?",
            "options": [
                "Global Interpreter Lock",
                "Global Interface Loop",
                "General Input Layer",
                "Graph Index List"
            ],
            "answer": 0,
            "explanation": "Limite l'exécution d'un seul thread Python à la fois (CPU-bound)."
        },
        {
            "id": 86,
            "question": "Comment installer des paquets depuis un fichier ?",
            "options": [
                "pip install -r requirements.txt",
                "pip install file",
                "pip setup",
                "npm install"
            ],
            "answer": 0,
            "explanation": "Convention standard."
        },
        {
            "id": 87,
            "question": "Quel built-in permet de filtrer une liste ?",
            "options": [
                "filter(func, list)",
                "select(func, list)",
                "where(list)",
                "keep(list)"
            ],
            "answer": 0,
            "explanation": "Retourne un itérateur."
        },
        {
            "id": 88,
            "question": "Comment mettre en pause le script ?",
            "options": [
                "time.sleep(sec)",
                "wait(sec)",
                "pause(sec)",
                "sleep(sec)"
            ],
            "answer": 0,
            "explanation": "Nécessite import time."
        },
        {
            "id": 89,
            "question": "Quel est le résultat de `1 == True` ?",
            "options": [
                "True",
                "False",
                "Error",
                "None"
            ],
            "answer": 0,
            "explanation": "True est égal à 1 (mais `1 is True` est False)."
        },
        {
            "id": 90,
            "question": "Comment accéder aux arguments du script ?",
            "options": [
                "sys.argv",
                "os.args",
                "main.args",
                "input.args"
            ],
            "answer": 0,
            "explanation": "Liste des arguments ligne de commande."
        },
        {
            "id": 91,
            "question": "Quel mot-clé définit une coroutine asynchrone ?",
            "options": [
                "async def",
                "def async",
                "coroutine",
                "await def"
            ],
            "answer": 0,
            "explanation": "Utilisé avec await."
        },
        {
            "id": 92,
            "question": "Comment forcer l'usage d'arguments nommés ?",
            "options": [
                "def f(*, a, b):",
                "def f(a=, b=):",
                "def f(kw a, kw b):",
                "Possible"
            ],
            "answer": 0,
            "explanation": "L'étoile seule impose les keywords arguments après elle."
        },
        {
            "id": 93,
            "question": "Quelle méthode remplace des sous-chaines ?",
            "options": [
                "replace(old, new)",
                "sub(old, new)",
                "change(old, new)",
                "switch(old, new)"
            ],
            "answer": 0,
            "explanation": "str.replace()."
        },
        {
            "id": 94,
            "question": "Qu'est-ce que `__name__` ?",
            "options": [
                "Nom du module courant",
                "Nom du fichier",
                "Nom de la fonction",
                "Rien"
            ],
            "answer": 0,
            "explanation": "Vaut '__main__' si exécuté directement."
        },
        {
            "id": 95,
            "question": "Comment inverser une liste in-place ?",
            "options": [
                "list.reverse()",
                "list.inv()",
                "reverse(list)",
                "list[::-1]"
            ],
            "answer": 0,
            "explanation": "Modifie la liste originale."
        },
        {
            "id": 96,
            "question": "Quel outil génère de la documentation ?",
            "options": [
                "Sphinx",
                "JSDoc",
                "PyDoc",
                "DocGen"
            ],
            "answer": 0,
            "explanation": "Extrêmement populaire dans l'écosystème Python."
        },
        {
            "id": 97,
            "question": "Comment trouver l'index d'un élément ?",
            "options": [
                "list.index(val)",
                "list.find(val)",
                "list.search(val)",
                "list.pos(val)"
            ],
            "answer": 0,
            "explanation": "Lève ValueError si absent."
        },
        {
            "id": 98,
            "question": "Quel est le format de fichier compilé Python ?",
            "options": [
                ".pyc",
                ".pyd",
                ".exe",
                ".bin"
            ],
            "answer": 0,
            "explanation": "Bytecode mis en cache dans __pycache__."
        },
        {
            "id": 99,
            "question": "Comment faire un arrondi ?",
            "options": [
                "round(x)",
                "ceil(x)",
                "floor(x)",
                "int(x)"
            ],
            "answer": 0,
            "explanation": "Arrondit au plus proche."
        },
        {
            "id": 100,
            "question": "Python est-il open source ?",
            "options": [
                "Oui (PSF License)",
                "Non",
                "Partiellement",
                "Payant"
            ],
            "answer": 0,
            "explanation": "Géré par la Python Software Foundation."
        }
    ]
};