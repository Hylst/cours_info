<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mémo PHP Complet - 200+ fonctions avec exemples | Guide 2025</title>
    <meta name="description" content="Guide PHP complet : variables, tableaux, fonctions, POO, fichiers, sessions, PDO. Exemples pratiques vanilla PHP.">
    <meta name="keywords" content="PHP, programmation, backend, POO, MySQL, PDO, sessions, fichiers, tutoriel, guide, mémo">
    <meta name="author" content="Geoffroy Streit">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#777bb4">
    <link rel="canonical" href="index.php">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Mémo PHP Complet">
    <meta property="og:description" content="Guide PHP avec exemples : POO, PDO, fichiers, sessions.">
    <meta property="og:locale" content="fr_FR">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <div class="container header-content">
        <div class="logo"><div class="logo-icon">PHP</div>PHP</div>
        <nav>
            <a href="#s1">Variables</a>
            <a href="#s4">Fonctions</a>
            <a href="#s6">POO</a>
            <a href="#s8">PDO</a>
            <a href="#s10">Fichiers</a>
        </nav>
    </div>
</header>

<section class="hero">
    <div class="container">
        <h1>Mémo PHP Complet</h1>
        <p>Guide pratique PHP vanilla avec exemples concrets. Backend moderne sans framework.</p>
    </div>
</section>

<div class="toc">
    <div class="container">
        <div class="toc-grid">
            <a href="#s1" class="toc-item"><span class="toc-num">01</span>Variables</a>
            <a href="#s2" class="toc-item"><span class="toc-num">02</span>Tableaux</a>
            <a href="#s3" class="toc-item"><span class="toc-num">03</span>Structures</a>
            <a href="#s4" class="toc-item"><span class="toc-num">04</span>Fonctions</a>
            <a href="#s5" class="toc-item"><span class="toc-num">05</span>Strings</a>
            <a href="#s6" class="toc-item"><span class="toc-num">06</span>POO</a>
            <a href="#s7" class="toc-item"><span class="toc-num">07</span>Erreurs</a>
            <a href="#s8" class="toc-item"><span class="toc-num">08</span>PDO/MySQL</a>
            <a href="#s9" class="toc-item"><span class="toc-num">09</span>Sessions</a>
            <a href="#s10" class="toc-item"><span class="toc-num">10</span>Fichiers</a>
            <a href="#s11" class="toc-item"><span class="toc-num">11</span>Formulaires</a>
            <a href="#s12" class="toc-item"><span class="toc-num">12</span>Référence</a>
        </div>
    </div>
</div>

<!-- S1: VARIABLES -->
<section id="s1">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">01</div>
            <div><h2 class="sec-title">Variables & Types</h2><p class="sec-sub">Déclaration, types, constantes</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Variables</div>
<pre><span class="tag">&lt;?php</span>
<span class="c">// Variables (préfixe $)</span>
<span class="var">$name</span> = <span class="str">"Alice"</span>;        <span class="c">// string</span>
<span class="var">$age</span> = <span class="num">25</span>;               <span class="c">// integer</span>
<span class="var">$price</span> = <span class="num">19.99</span>;          <span class="c">// float</span>
<span class="var">$isActive</span> = <span class="kw">true</span>;        <span class="c">// boolean</span>
<span class="var">$nothing</span> = <span class="kw">null</span>;         <span class="c">// null</span>

<span class="c">// Constantes</span>
<span class="kw">define</span>(<span class="str">'API_KEY'</span>, <span class="str">'abc123'</span>);
<span class="kw">const</span> <span class="var">MAX_SIZE</span> = <span class="num">100</span>;

<span class="c">// Vérification de type</span>
<span class="fn">gettype</span>(<span class="var">$name</span>);          <span class="c">// "string"</span>
<span class="fn">is_string</span>(<span class="var">$name</span>);        <span class="c">// true</span>
<span class="fn">is_int</span>(<span class="var">$age</span>);            <span class="c">// true</span>
<span class="fn">is_array</span>(<span class="var">$data</span>);         <span class="c">// true/false</span>
<span class="fn">isset</span>(<span class="var">$var</span>);             <span class="c">// existe et non null?</span>
<span class="fn">empty</span>(<span class="var">$var</span>);             <span class="c">// vide? (0, "", null, false, [])</span>

<span class="c">// Conversion de type (casting)</span>
<span class="var">$str</span> = (<span class="kw">string</span>) <span class="num">42</span>;      <span class="c">// "42"</span>
<span class="var">$int</span> = (<span class="kw">int</span>) <span class="str">"42"</span>;       <span class="c">// 42</span>
<span class="var">$arr</span> = (<span class="kw">array</span>) <span class="var">$obj</span>;     <span class="c">// object to array</span>
<span class="tag">?&gt;</span></pre></div>

        <div class="demo">
            <div class="demo-title">Exemple exécuté</div>
            <div class="demo-output">
<?php
$name = "Alice";
$age = 25;
echo "Nom: $name, Âge: $age<br>";
echo "Type de \$name: " . gettype($name) . "<br>";
echo "Type de \$age: " . gettype($age);
?>
            </div>
        </div>

        <div class="tip"><strong>💡 Typage strict (PHP 7+)</strong> Ajoutez <code>declare(strict_types=1);</code> en début de fichier pour activer le typage strict.</div>
    </div>
</section>

<!-- S2: TABLEAUX -->
<section id="s2">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">02</div>
            <div><h2 class="sec-title">Tableaux</h2><p class="sec-sub">Arrays indexés et associatifs</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Arrays</div>
<pre><span class="c">// Tableau indexé</span>
<span class="var">$fruits</span> = [<span class="str">"pomme"</span>, <span class="str">"banane"</span>, <span class="str">"orange"</span>];
<span class="var">$fruits</span>[<span class="num">0</span>];  <span class="c">// "pomme"</span>

<span class="c">// Tableau associatif</span>
<span class="var">$user</span> = [
    <span class="str">"name"</span> => <span class="str">"Alice"</span>,
    <span class="str">"age"</span> => <span class="num">25</span>,
    <span class="str">"email"</span> => <span class="str">"alice@example.com"</span>
];
<span class="var">$user</span>[<span class="str">"name"</span>];  <span class="c">// "Alice"</span>

<span class="c">// Fonctions principales</span>
<span class="fn">count</span>(<span class="var">$arr</span>);            <span class="c">// Nombre d'éléments</span>
<span class="fn">array_push</span>(<span class="var">$arr</span>, <span class="var">$val</span>); <span class="c">// Ajouter à la fin</span>
<span class="fn">array_pop</span>(<span class="var">$arr</span>);        <span class="c">// Retirer le dernier</span>
<span class="fn">array_merge</span>(<span class="var">$a</span>, <span class="var">$b</span>);    <span class="c">// Fusionner</span>
<span class="fn">in_array</span>(<span class="var">$val</span>, <span class="var">$arr</span>);   <span class="c">// Existe?</span>
<span class="fn">array_search</span>(<span class="var">$val</span>, <span class="var">$arr</span>); <span class="c">// Index</span>
<span class="fn">array_keys</span>(<span class="var">$arr</span>);       <span class="c">// Toutes les clés</span>
<span class="fn">array_values</span>(<span class="var">$arr</span>);     <span class="c">// Toutes les valeurs</span>
<span class="fn">array_map</span>(<span class="var">$fn</span>, <span class="var">$arr</span>);   <span class="c">// Transformer</span>
<span class="fn">array_filter</span>(<span class="var">$arr</span>, <span class="var">$fn</span>); <span class="c">// Filtrer</span>
<span class="fn">array_reduce</span>(<span class="var">$arr</span>, <span class="var">$fn</span>); <span class="c">// Réduire</span>
<span class="fn">sort</span>(<span class="var">$arr</span>);             <span class="c">// Trier (modifie)</span>
<span class="fn">usort</span>(<span class="var">$arr</span>, <span class="var">$fn</span>);       <span class="c">// Tri personnalisé</span></pre></div>

        <div class="demo">
            <div class="demo-title">Arrays en action</div>
            <div class="demo-output">
<?php
$fruits = ["pomme", "banane", "orange"];
echo "Fruits: " . implode(", ", $fruits) . "<br>";
echo "Nombre: " . count($fruits) . "<br>";

$user = ["name" => "Alice", "age" => 25];
echo "User: " . json_encode($user);
?>
            </div>
        </div>
    </div>
</section>

<!-- S3: STRUCTURES -->
<section id="s3">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">03</div>
            <div><h2 class="sec-title">Structures de contrôle</h2><p class="sec-sub">Conditions, boucles</p></div>
        </div>

        <div class="grid2">
            <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Conditions</div>
<pre><span class="c">// if / elseif / else</span>
<span class="kw">if</span> (<span class="var">$age</span> < <span class="num">18</span>) {
    <span class="kw">echo</span> <span class="str">"Mineur"</span>;
} <span class="kw">elseif</span> (<span class="var">$age</span> < <span class="num">65</span>) {
    <span class="kw">echo</span> <span class="str">"Adulte"</span>;
} <span class="kw">else</span> {
    <span class="kw">echo</span> <span class="str">"Senior"</span>;
}

<span class="c">// Ternaire</span>
<span class="var">$status</span> = <span class="var">$age</span> >= <span class="num">18</span> ? <span class="str">"Majeur"</span> : <span class="str">"Mineur"</span>;

<span class="c">// Null coalescing</span>
<span class="var">$name</span> = <span class="var">$_GET</span>[<span class="str">'name'</span>] ?? <span class="str">"Invité"</span>;

<span class="c">// Match (PHP 8+)</span>
<span class="var">$msg</span> = <span class="kw">match</span>(<span class="var">$code</span>) {
    <span class="num">200</span> => <span class="str">"OK"</span>,
    <span class="num">404</span> => <span class="str">"Not Found"</span>,
    <span class="kw">default</span> => <span class="str">"Error"</span>
};</pre></div>

            <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Boucles</div>
<pre><span class="c">// for</span>
<span class="kw">for</span> (<span class="var">$i</span> = <span class="num">0</span>; <span class="var">$i</span> < <span class="num">5</span>; <span class="var">$i</span>++) {
    <span class="kw">echo</span> <span class="var">$i</span>;
}

<span class="c">// foreach (tableaux)</span>
<span class="kw">foreach</span> (<span class="var">$fruits</span> <span class="kw">as</span> <span class="var">$fruit</span>) {
    <span class="kw">echo</span> <span class="var">$fruit</span>;
}

<span class="c">// foreach avec clé</span>
<span class="kw">foreach</span> (<span class="var">$user</span> <span class="kw">as</span> <span class="var">$key</span> => <span class="var">$val</span>) {
    <span class="kw">echo</span> <span class="str">"$key: $val"</span>;
}

<span class="c">// while</span>
<span class="kw">while</span> (<span class="var">$condition</span>) { }

<span class="c">// do...while</span>
<span class="kw">do</span> { } <span class="kw">while</span> (<span class="var">$cond</span>);</pre></div>
        </div>
    </div>
</section>

<!-- S4: FONCTIONS -->
<section id="s4">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">04</div>
            <div><h2 class="sec-title">Fonctions</h2><p class="sec-sub">Déclaration, arguments, closures</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Fonctions</div>
<pre><span class="c">// Fonction simple</span>
<span class="kw">function</span> <span class="fn">greet</span>(<span class="var">$name</span>) {
    <span class="kw">return</span> <span class="str">"Hello $name!"</span>;
}

<span class="c">// Valeur par défaut</span>
<span class="kw">function</span> <span class="fn">power</span>(<span class="var">$base</span>, <span class="var">$exp</span> = <span class="num">2</span>) {
    <span class="kw">return</span> <span class="var">$base</span> ** <span class="var">$exp</span>;
}

<span class="c">// Typage (PHP 7+)</span>
<span class="kw">function</span> <span class="fn">add</span>(<span class="kw">int</span> <span class="var">$a</span>, <span class="kw">int</span> <span class="var">$b</span>): <span class="kw">int</span> {
    <span class="kw">return</span> <span class="var">$a</span> + <span class="var">$b</span>;
}

<span class="c">// Type nullable</span>
<span class="kw">function</span> <span class="fn">find</span>(<span class="kw">int</span> <span class="var">$id</span>): ?<span class="kw">array</span> {
    <span class="kw">return</span> <span class="var">$id</span> > <span class="num">0</span> ? [<span class="str">"id"</span> => <span class="var">$id</span>] : <span class="kw">null</span>;
}

<span class="c">// Arrow function (PHP 7.4+)</span>
<span class="var">$double</span> = <span class="kw">fn</span>(<span class="var">$x</span>) => <span class="var">$x</span> * <span class="num">2</span>;

<span class="c">// Closure / fonction anonyme</span>
<span class="var">$greet</span> = <span class="kw">function</span>(<span class="var">$name</span>) {
    <span class="kw">return</span> <span class="str">"Hi $name"</span>;
};

<span class="c">// Closure avec use</span>
<span class="var">$multiplier</span> = <span class="num">3</span>;
<span class="var">$multiply</span> = <span class="kw">function</span>(<span class="var">$x</span>) <span class="kw">use</span> (<span class="var">$multiplier</span>) {
    <span class="kw">return</span> <span class="var">$x</span> * <span class="var">$multiplier</span>;
};</pre></div>

        <div class="demo">
            <div class="demo-title">Fonctions en action</div>
            <div class="demo-output">
<?php
function greet($name) { return "Hello $name!"; }
function power($base, $exp = 2) { return $base ** $exp; }

echo greet("PHP") . "<br>";
echo "2^8 = " . power(2, 8) . "<br>";
$double = fn($x) => $x * 2;
echo "double(5) = " . $double(5);
?>
            </div>
        </div>
    </div>
</section>

<!-- S5: STRINGS -->
<section id="s5">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">05</div>
            <div><h2 class="sec-title">Chaînes de caractères</h2><p class="sec-sub">Manipulation de strings</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Strings</div>
<pre><span class="c">// Déclaration</span>
<span class="var">$str</span> = <span class="str">"Hello World"</span>;
<span class="var">$str</span> = <span class="str">'Simple quotes'</span>;    <span class="c">// pas d'interpolation</span>
<span class="var">$str</span> = <span class="str">"Hello $name"</span>;      <span class="c">// interpolation</span>
<span class="var">$str</span> = <span class="str">"Hello {$user['name']}"</span>; <span class="c">// complexe</span>

<span class="c">// Heredoc</span>
<span class="var">$html</span> = <span class="str">&lt;&lt;&lt;HTML
&lt;div&gt;$content&lt;/div&gt;
HTML</span>;

<span class="c">// Fonctions principales</span>
<span class="fn">strlen</span>(<span class="var">$str</span>);             <span class="c">// Longueur</span>
<span class="fn">strtoupper</span>(<span class="var">$str</span>);         <span class="c">// MAJUSCULES</span>
<span class="fn">strtolower</span>(<span class="var">$str</span>);         <span class="c">// minuscules</span>
<span class="fn">ucfirst</span>(<span class="var">$str</span>);            <span class="c">// Première lettre majuscule</span>
<span class="fn">ucwords</span>(<span class="var">$str</span>);            <span class="c">// Chaque Mot</span>
<span class="fn">trim</span>(<span class="var">$str</span>);               <span class="c">// Supprimer espaces</span>
<span class="fn">substr</span>(<span class="var">$str</span>, <span class="num">0</span>, <span class="num">5</span>);       <span class="c">// Extraire</span>
<span class="fn">str_replace</span>(<span class="str">'a'</span>, <span class="str">'b'</span>, <span class="var">$str</span>); <span class="c">// Remplacer</span>
<span class="fn">strpos</span>(<span class="var">$str</span>, <span class="str">'o'</span>);        <span class="c">// Position</span>
<span class="fn">explode</span>(<span class="str">' '</span>, <span class="var">$str</span>);       <span class="c">// String → Array</span>
<span class="fn">implode</span>(<span class="str">', '</span>, <span class="var">$arr</span>);      <span class="c">// Array → String</span>
<span class="fn">sprintf</span>(<span class="str">"Age: %d"</span>, <span class="var">$age</span>); <span class="c">// Formatage</span>
<span class="fn">str_contains</span>(<span class="var">$str</span>, <span class="str">'o'</span>);  <span class="c">// PHP 8: contient?</span>
<span class="fn">str_starts_with</span>(<span class="var">$str</span>, <span class="str">'H'</span>); <span class="c">// PHP 8: commence par?</span></pre></div>
    </div>
</section>

<!-- S6: POO -->
<section id="s6">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">06</div>
            <div><h2 class="sec-title">Programmation Orientée Objet</h2><p class="sec-sub">Classes, héritage, interfaces</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Classes</div>
<pre><span class="kw">class</span> <span class="fn">User</span> {
    <span class="c">// Propriétés</span>
    <span class="kw">public</span> <span class="kw">string</span> <span class="var">$name</span>;
    <span class="kw">private</span> <span class="kw">int</span> <span class="var">$age</span>;
    <span class="kw">protected</span> <span class="var">$email</span>;
    <span class="kw">public static int</span> <span class="var">$count</span> = <span class="num">0</span>;

    <span class="c">// Constructeur</span>
    <span class="kw">public function</span> <span class="fn">__construct</span>(<span class="kw">string</span> <span class="var">$name</span>, <span class="kw">int</span> <span class="var">$age</span> = <span class="num">0</span>) {
        <span class="var">$this</span>-><span class="prop">name</span> = <span class="var">$name</span>;
        <span class="var">$this</span>-><span class="prop">age</span> = <span class="var">$age</span>;
        <span class="kw">self</span>::<span class="var">$count</span>++;
    }

    <span class="c">// Méthode</span>
    <span class="kw">public function</span> <span class="fn">greet</span>(): <span class="kw">string</span> {
        <span class="kw">return</span> <span class="str">"Hello, I'm {$this->name}"</span>;
    }

    <span class="c">// Getter</span>
    <span class="kw">public function</span> <span class="fn">getAge</span>(): <span class="kw">int</span> {
        <span class="kw">return</span> <span class="var">$this</span>-><span class="prop">age</span>;
    }

    <span class="c">// Méthode statique</span>
    <span class="kw">public static function</span> <span class="fn">getCount</span>(): <span class="kw">int</span> {
        <span class="kw">return</span> <span class="kw">self</span>::<span class="var">$count</span>;
    }
}

<span class="c">// Héritage</span>
<span class="kw">class</span> <span class="fn">Admin</span> <span class="kw">extends</span> <span class="fn">User</span> {
    <span class="kw">public function</span> <span class="fn">greet</span>(): <span class="kw">string</span> {
        <span class="kw">return</span> <span class="kw">parent</span>::<span class="fn">greet</span>() . <span class="str">" (Admin)"</span>;
    }
}

<span class="c">// Interface</span>
<span class="kw">interface</span> <span class="fn">Printable</span> {
    <span class="kw">public function</span> <span class="fn">print</span>(): <span class="kw">void</span>;
}

<span class="c">// Trait</span>
<span class="kw">trait</span> <span class="fn">Timestampable</span> {
    <span class="kw">public</span> <span class="var">$createdAt</span>;
}</pre></div>

        <div class="demo">
            <div class="demo-title">POO en action</div>
            <div class="demo-output">
<?php
class User {
    public string $name;
    public static int $count = 0;
    
    public function __construct(string $name) {
        $this->name = $name;
        self::$count++;
    }
    
    public function greet(): string {
        return "Hello, I'm {$this->name}";
    }
}

$alice = new User("Alice");
$bob = new User("Bob");
echo $alice->greet() . "<br>";
echo "Total users: " . User::$count;
?>
            </div>
        </div>
    </div>
</section>

<!-- S7: ERREURS -->
<section id="s7">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">07</div>
            <div><h2 class="sec-title">Gestion des erreurs</h2><p class="sec-sub">Exceptions, try/catch</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Exceptions</div>
<pre><span class="c">// Try / Catch / Finally</span>
<span class="kw">try</span> {
    <span class="var">$result</span> = <span class="fn">riskyOperation</span>();
} <span class="kw">catch</span> (<span class="fn">InvalidArgumentException</span> <span class="var">$e</span>) {
    <span class="kw">echo</span> <span class="str">"Argument invalide: "</span> . <span class="var">$e</span>-><span class="fn">getMessage</span>();
} <span class="kw">catch</span> (<span class="fn">Exception</span> <span class="var">$e</span>) {
    <span class="kw">echo</span> <span class="str">"Erreur: "</span> . <span class="var">$e</span>-><span class="fn">getMessage</span>();
} <span class="kw">finally</span> {
    <span class="c">// Toujours exécuté</span>
    <span class="fn">cleanup</span>();
}

<span class="c">// Lancer une exception</span>
<span class="kw">throw new</span> <span class="fn">Exception</span>(<span class="str">"Message d'erreur"</span>);
<span class="kw">throw new</span> <span class="fn">InvalidArgumentException</span>(<span class="str">"Arg invalide"</span>);

<span class="c">// Exception personnalisée</span>
<span class="kw">class</span> <span class="fn">UserNotFoundException</span> <span class="kw">extends</span> <span class="fn">Exception</span> {
    <span class="kw">public function</span> <span class="fn">__construct</span>(<span class="kw">int</span> <span class="var">$id</span>) {
        <span class="kw">parent</span>::<span class="fn">__construct</span>(<span class="str">"User $id not found"</span>);
    }
}

<span class="c">// Error handler</span>
<span class="fn">set_error_handler</span>(<span class="kw">function</span>(<span class="var">$errno</span>, <span class="var">$errstr</span>) {
    <span class="kw">throw new</span> <span class="fn">ErrorException</span>(<span class="var">$errstr</span>, <span class="var">$errno</span>);
});</pre></div>
    </div>
</section>

<!-- S8: PDO -->
<section id="s8">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">08</div>
            <div><h2 class="sec-title">PDO / MySQL</h2><p class="sec-sub">Base de données</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>PDO</div>
<pre><span class="c">// Connexion</span>
<span class="var">$dsn</span> = <span class="str">"mysql:host=localhost;dbname=mydb;charset=utf8mb4"</span>;
<span class="var">$pdo</span> = <span class="kw">new</span> <span class="fn">PDO</span>(<span class="var">$dsn</span>, <span class="str">"user"</span>, <span class="str">"password"</span>, [
    <span class="fn">PDO</span>::<span class="var">ATTR_ERRMODE</span> => <span class="fn">PDO</span>::<span class="var">ERRMODE_EXCEPTION</span>,
    <span class="fn">PDO</span>::<span class="var">ATTR_DEFAULT_FETCH_MODE</span> => <span class="fn">PDO</span>::<span class="var">FETCH_ASSOC</span>
]);

<span class="c">// SELECT avec prepare (sécurisé)</span>
<span class="var">$stmt</span> = <span class="var">$pdo</span>-><span class="fn">prepare</span>(<span class="str">"SELECT * FROM users WHERE id = ?"</span>);
<span class="var">$stmt</span>-><span class="fn">execute</span>([<span class="var">$id</span>]);
<span class="var">$user</span> = <span class="var">$stmt</span>-><span class="fn">fetch</span>();

<span class="c">// SELECT avec paramètres nommés</span>
<span class="var">$stmt</span> = <span class="var">$pdo</span>-><span class="fn">prepare</span>(<span class="str">"SELECT * FROM users WHERE email = :email"</span>);
<span class="var">$stmt</span>-><span class="fn">execute</span>([<span class="str">':email'</span> => <span class="var">$email</span>]);

<span class="c">// Fetch all</span>
<span class="var">$users</span> = <span class="var">$stmt</span>-><span class="fn">fetchAll</span>();

<span class="c">// INSERT</span>
<span class="var">$stmt</span> = <span class="var">$pdo</span>-><span class="fn">prepare</span>(<span class="str">"INSERT INTO users (name, email) VALUES (?, ?)"</span>);
<span class="var">$stmt</span>-><span class="fn">execute</span>([<span class="var">$name</span>, <span class="var">$email</span>]);
<span class="var">$newId</span> = <span class="var">$pdo</span>-><span class="fn">lastInsertId</span>();

<span class="c">// UPDATE</span>
<span class="var">$stmt</span> = <span class="var">$pdo</span>-><span class="fn">prepare</span>(<span class="str">"UPDATE users SET name = ? WHERE id = ?"</span>);
<span class="var">$stmt</span>-><span class="fn">execute</span>([<span class="var">$name</span>, <span class="var">$id</span>]);

<span class="c">// DELETE</span>
<span class="var">$stmt</span> = <span class="var">$pdo</span>-><span class="fn">prepare</span>(<span class="str">"DELETE FROM users WHERE id = ?"</span>);
<span class="var">$stmt</span>-><span class="fn">execute</span>([<span class="var">$id</span>]);

<span class="c">// Transactions</span>
<span class="var">$pdo</span>-><span class="fn">beginTransaction</span>();
<span class="kw">try</span> {
    <span class="c">// ... multiple queries</span>
    <span class="var">$pdo</span>-><span class="fn">commit</span>();
} <span class="kw">catch</span> (<span class="fn">Exception</span> <span class="var">$e</span>) {
    <span class="var">$pdo</span>-><span class="fn">rollBack</span>();
}</pre></div>

        <div class="warning"><strong>⚠️ Sécurité</strong> Utilisez TOUJOURS les requêtes préparées pour éviter les injections SQL!</div>
    </div>
</section>

<!-- S9: SESSIONS -->
<section id="s9">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">09</div>
            <div><h2 class="sec-title">Sessions & Cookies</h2><p class="sec-sub">État côté serveur</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Sessions</div>
<pre><span class="c">// Démarrer la session (en premier!)</span>
<span class="fn">session_start</span>();

<span class="c">// Définir une variable de session</span>
<span class="var">$_SESSION</span>[<span class="str">'user_id'</span>] = <span class="num">123</span>;
<span class="var">$_SESSION</span>[<span class="str">'username'</span>] = <span class="str">"alice"</span>;

<span class="c">// Lire</span>
<span class="var">$userId</span> = <span class="var">$_SESSION</span>[<span class="str">'user_id'</span>] ?? <span class="kw">null</span>;

<span class="c">// Vérifier si existe</span>
<span class="kw">if</span> (<span class="fn">isset</span>(<span class="var">$_SESSION</span>[<span class="str">'user_id'</span>])) { }

<span class="c">// Supprimer une variable</span>
<span class="kw">unset</span>(<span class="var">$_SESSION</span>[<span class="str">'user_id'</span>]);

<span class="c">// Détruire la session</span>
<span class="fn">session_destroy</span>();

<span class="c">// Régénérer l'ID (sécurité)</span>
<span class="fn">session_regenerate_id</span>(<span class="kw">true</span>);</pre></div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Cookies</div>
<pre><span class="c">// Créer un cookie (expire dans 30 jours)</span>
<span class="fn">setcookie</span>(<span class="str">"user"</span>, <span class="str">"alice"</span>, <span class="fn">time</span>() + <span class="num">86400</span> * <span class="num">30</span>, <span class="str">"/"</span>);

<span class="c">// Cookie sécurisé</span>
<span class="fn">setcookie</span>(<span class="str">"token"</span>, <span class="var">$token</span>, [
    <span class="str">'expires'</span> => <span class="fn">time</span>() + <span class="num">3600</span>,
    <span class="str">'path'</span> => <span class="str">'/'</span>,
    <span class="str">'secure'</span> => <span class="kw">true</span>,
    <span class="str">'httponly'</span> => <span class="kw">true</span>,
    <span class="str">'samesite'</span> => <span class="str">'Strict'</span>
]);

<span class="c">// Lire un cookie</span>
<span class="var">$user</span> = <span class="var">$_COOKIE</span>[<span class="str">'user'</span>] ?? <span class="kw">null</span>;

<span class="c">// Supprimer un cookie</span>
<span class="fn">setcookie</span>(<span class="str">"user"</span>, <span class="str">""</span>, <span class="fn">time</span>() - <span class="num">3600</span>, <span class="str">"/"</span>);</pre></div>
    </div>
</section>

<!-- S10: FICHIERS -->
<section id="s10">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">10</div>
            <div><h2 class="sec-title">Fichiers</h2><p class="sec-sub">Lecture, écriture, upload</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Fichiers</div>
<pre><span class="c">// Lecture</span>
<span class="var">$content</span> = <span class="fn">file_get_contents</span>(<span class="str">"file.txt"</span>);
<span class="var">$lines</span> = <span class="fn">file</span>(<span class="str">"file.txt"</span>, <span class="var">FILE_IGNORE_NEW_LINES</span>);

<span class="c">// Écriture</span>
<span class="fn">file_put_contents</span>(<span class="str">"file.txt"</span>, <span class="var">$content</span>);
<span class="fn">file_put_contents</span>(<span class="str">"log.txt"</span>, <span class="var">$msg</span>, <span class="var">FILE_APPEND</span>);

<span class="c">// Vérifications</span>
<span class="fn">file_exists</span>(<span class="str">"file.txt"</span>);     <span class="c">// Existe?</span>
<span class="fn">is_file</span>(<span class="str">"file.txt"</span>);         <span class="c">// Est un fichier?</span>
<span class="fn">is_dir</span>(<span class="str">"folder"</span>);           <span class="c">// Est un dossier?</span>
<span class="fn">is_readable</span>(<span class="str">"file.txt"</span>);     <span class="c">// Lisible?</span>
<span class="fn">is_writable</span>(<span class="str">"file.txt"</span>);     <span class="c">// Écrivable?</span>
<span class="fn">filesize</span>(<span class="str">"file.txt"</span>);        <span class="c">// Taille en octets</span>

<span class="c">// Dossiers</span>
<span class="fn">mkdir</span>(<span class="str">"folder"</span>, <span class="num">0755</span>, <span class="kw">true</span>);
<span class="fn">rmdir</span>(<span class="str">"folder"</span>);
<span class="fn">scandir</span>(<span class="str">"."</span>);               <span class="c">// Liste fichiers</span>
<span class="fn">glob</span>(<span class="str">"*.php"</span>);              <span class="c">// Pattern matching</span>

<span class="c">// Upload</span>
<span class="kw">if</span> (<span class="var">$_FILES</span>[<span class="str">'upload'</span>][<span class="str">'error'</span>] === <span class="var">UPLOAD_ERR_OK</span>) {
    <span class="fn">move_uploaded_file</span>(
        <span class="var">$_FILES</span>[<span class="str">'upload'</span>][<span class="str">'tmp_name'</span>],
        <span class="str">"uploads/"</span> . <span class="fn">basename</span>(<span class="var">$_FILES</span>[<span class="str">'upload'</span>][<span class="str">'name'</span>])
    );
}</pre></div>
    </div>
</section>

<!-- S11: FORMULAIRES -->
<section id="s11">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">11</div>
            <div><h2 class="sec-title">Formulaires</h2><p class="sec-sub">$_GET, $_POST, validation</p></div>
        </div>

        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Formulaires</div>
<pre><span class="c">// Récupérer les données</span>
<span class="var">$name</span> = <span class="var">$_POST</span>[<span class="str">'name'</span>] ?? <span class="str">''</span>;
<span class="var">$id</span> = <span class="var">$_GET</span>[<span class="str">'id'</span>] ?? <span class="kw">null</span>;

<span class="c">// Sécurisation</span>
<span class="var">$name</span> = <span class="fn">htmlspecialchars</span>(<span class="var">$_POST</span>[<span class="str">'name'</span>], <span class="var">ENT_QUOTES</span>, <span class="str">'UTF-8'</span>);
<span class="var">$email</span> = <span class="fn">filter_input</span>(<span class="var">INPUT_POST</span>, <span class="str">'email'</span>, <span class="var">FILTER_SANITIZE_EMAIL</span>);

<span class="c">// Validation</span>
<span class="var">$email</span> = <span class="fn">filter_var</span>(<span class="var">$email</span>, <span class="var">FILTER_VALIDATE_EMAIL</span>);
<span class="var">$int</span> = <span class="fn">filter_var</span>(<span class="var">$val</span>, <span class="var">FILTER_VALIDATE_INT</span>);

<span class="c">// CSRF Protection</span>
<span class="var">$_SESSION</span>[<span class="str">'csrf_token'</span>] = <span class="fn">bin2hex</span>(<span class="fn">random_bytes</span>(<span class="num">32</span>));

<span class="c">// Vérifier le token</span>
<span class="kw">if</span> (<span class="fn">hash_equals</span>(<span class="var">$_SESSION</span>[<span class="str">'csrf_token'</span>], <span class="var">$_POST</span>[<span class="str">'csrf_token'</span>])) {
    <span class="c">// Valide</span>
}</pre></div>

        <div class="tip"><strong>💡 Sécurité</strong> Toujours valider ET échapper les données utilisateur!</div>
    </div>
</section>

<!-- S12: REFERENCE -->
<section id="s12">
    <div class="container">
        <div class="sec-header">
            <div class="sec-num">12</div>
            <div><h2 class="sec-title">Référence complète</h2><p class="sec-sub">200+ fonctions essentielles</p></div>
        </div>

        <h3>Fonctions Array</h3>
        <table>
            <tr><th>Fonction</th><th>Paramètres</th><th>Description</th></tr>
            <tr><td><code>count()</code></td><td>$arr</td><td>Nombre d'éléments</td></tr>
            <tr><td><code>array_push()</code></td><td>$arr, $val...</td><td>Ajouter à la fin</td></tr>
            <tr><td><code>array_pop()</code></td><td>$arr</td><td>Retirer le dernier</td></tr>
            <tr><td><code>array_shift()</code></td><td>$arr</td><td>Retirer le premier</td></tr>
            <tr><td><code>array_unshift()</code></td><td>$arr, $val...</td><td>Ajouter au début</td></tr>
            <tr><td><code>array_merge()</code></td><td>$arr1, $arr2...</td><td>Fusionner</td></tr>
            <tr><td><code>array_map()</code></td><td>$callback, $arr</td><td>Transformer</td></tr>
            <tr><td><code>array_filter()</code></td><td>$arr, $callback</td><td>Filtrer</td></tr>
            <tr><td><code>array_reduce()</code></td><td>$arr, $callback, $init</td><td>Réduire</td></tr>
            <tr><td><code>array_keys()</code></td><td>$arr</td><td>Retourne les clés</td></tr>
            <tr><td><code>array_values()</code></td><td>$arr</td><td>Retourne les valeurs</td></tr>
            <tr><td><code>in_array()</code></td><td>$val, $arr, $strict</td><td>Valeur existe?</td></tr>
            <tr><td><code>array_search()</code></td><td>$val, $arr</td><td>Cherche index</td></tr>
            <tr><td><code>sort() / rsort()</code></td><td>$arr</td><td>Tri croissant/décroissant</td></tr>
            <tr><td><code>usort()</code></td><td>$arr, $callback</td><td>Tri personnalisé</td></tr>
            <tr><td><code>array_slice()</code></td><td>$arr, $start, $len</td><td>Extraire portion</td></tr>
            <tr><td><code>array_splice()</code></td><td>$arr, $start, $len, $replace</td><td>Remplacer portion</td></tr>
            <tr><td><code>array_unique()</code></td><td>$arr</td><td>Valeurs uniques</td></tr>
            <tr><td><code>array_flip()</code></td><td>$arr</td><td>Inverse clés/valeurs</td></tr>
            <tr><td><code>array_reverse()</code></td><td>$arr</td><td>Inverse l'ordre</td></tr>
        </table>

        <h3>Fonctions String</h3>
        <div class="ref-grid">
            <div class="ref-card"><h4>Longueur & Accès</h4><code>strlen()</code> <code>mb_strlen()</code> <code>substr()</code> <code>mb_substr()</code></div>
            <div class="ref-card"><h4>Recherche</h4><code>strpos()</code> <code>strrpos()</code> <code>strstr()</code> <code>str_contains()</code> <code>str_starts_with()</code> <code>str_ends_with()</code></div>
            <div class="ref-card"><h4>Remplacement</h4><code>str_replace()</code> <code>str_ireplace()</code> <code>preg_replace()</code> <code>substr_replace()</code></div>
            <div class="ref-card"><h4>Formatage</h4><code>sprintf()</code> <code>printf()</code> <code>number_format()</code> <code>money_format()</code></div>
            <div class="ref-card"><h4>Casse</h4><code>strtoupper()</code> <code>strtolower()</code> <code>ucfirst()</code> <code>ucwords()</code> <code>lcfirst()</code></div>
            <div class="ref-card"><h4>Nettoyage</h4><code>trim()</code> <code>ltrim()</code> <code>rtrim()</code> <code>strip_tags()</code> <code>htmlspecialchars()</code></div>
        </div>

        <h3>Superglobales</h3>
        <div class="ref-grid">
            <div class="ref-card"><h4>Serveur</h4><code>$_SERVER</code> <code>$_ENV</code> <code>$GLOBALS</code></div>
            <div class="ref-card"><h4>Requête</h4><code>$_GET</code> <code>$_POST</code> <code>$_REQUEST</code> <code>$_FILES</code></div>
            <div class="ref-card"><h4>Session</h4><code>$_SESSION</code> <code>$_COOKIE</code></div>
        </div>

        <h3>$_SERVER</h3>
        <table>
            <tr><th>Clé</th><th>Description</th></tr>
            <tr><td><code>$_SERVER['REQUEST_METHOD']</code></td><td>GET, POST, PUT, DELETE...</td></tr>
            <tr><td><code>$_SERVER['REQUEST_URI']</code></td><td>URI demandée</td></tr>
            <tr><td><code>$_SERVER['HTTP_HOST']</code></td><td>Nom de domaine</td></tr>
            <tr><td><code>$_SERVER['DOCUMENT_ROOT']</code></td><td>Racine du serveur</td></tr>
            <tr><td><code>$_SERVER['REMOTE_ADDR']</code></td><td>IP du client</td></tr>
            <tr><td><code>$_SERVER['HTTP_USER_AGENT']</code></td><td>User-Agent</td></tr>
        </table>

        <h3>JSON</h3>
        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>JSON</div>
<pre><span class="c">// Encoder (PHP → JSON)</span>
<span class="var">$json</span> = <span class="fn">json_encode</span>(<span class="var">$data</span>, <span class="var">JSON_PRETTY_PRINT</span>);

<span class="c">// Décoder (JSON → PHP)</span>
<span class="var">$data</span> = <span class="fn">json_decode</span>(<span class="var">$json</span>, <span class="kw">true</span>);  <span class="c">// true = array</span>

<span class="c">// API Response</span>
<span class="fn">header</span>(<span class="str">'Content-Type: application/json'</span>);
<span class="kw">echo</span> <span class="fn">json_encode</span>([<span class="str">'success'</span> => <span class="kw">true</span>, <span class="str">'data'</span> => <span class="var">$result</span>]);</pre></div>

        <h3>Date & Time</h3>
        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Date</div>
<pre><span class="c">// Date courante</span>
<span class="kw">echo</span> <span class="fn">date</span>(<span class="str">'Y-m-d H:i:s'</span>);       <span class="c">// 2025-12-13 01:45:00</span>
<span class="kw">echo</span> <span class="fn">time</span>();                    <span class="c">// Timestamp Unix</span>

<span class="c">// DateTime (POO)</span>
<span class="var">$date</span> = <span class="kw">new</span> <span class="fn">DateTime</span>();
<span class="var">$date</span> = <span class="kw">new</span> <span class="fn">DateTime</span>(<span class="str">'2025-01-15'</span>);
<span class="var">$date</span>-><span class="fn">format</span>(<span class="str">'d/m/Y'</span>);         <span class="c">// 15/01/2025</span>
<span class="var">$date</span>-><span class="fn">modify</span>(<span class="str">'+1 month'</span>);

<span class="c">// Différence</span>
<span class="var">$diff</span> = <span class="var">$date1</span>-><span class="fn">diff</span>(<span class="var">$date2</span>);
<span class="kw">echo</span> <span class="var">$diff</span>-><span class="prop">days</span>;              <span class="c">// Jours de différence</span>

<span class="c">// Formats courants</span>
<span class="str">'Y-m-d'</span>     <span class="c">// 2025-12-13</span>
<span class="str">'d/m/Y'</span>     <span class="c">// 13/12/2025</span>
<span class="str">'H:i:s'</span>     <span class="c">// 01:45:00</span>
<span class="str">'D, d M Y'</span>  <span class="c">// Fri, 13 Dec 2025</span></pre></div>

        <h3>Password Hashing</h3>
        <div class="code"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>Sécurité</div>
<pre><span class="c">// Hasher un mot de passe</span>
<span class="var">$hash</span> = <span class="fn">password_hash</span>(<span class="var">$password</span>, <span class="var">PASSWORD_DEFAULT</span>);

<span class="c">// Vérifier</span>
<span class="kw">if</span> (<span class="fn">password_verify</span>(<span class="var">$password</span>, <span class="var">$hash</span>)) {
    <span class="c">// Mot de passe correct</span>
}

<span class="c">// Générer token aléatoire</span>
<span class="var">$token</span> = <span class="fn">bin2hex</span>(<span class="fn">random_bytes</span>(<span class="num">32</span>));</pre></div>

        <div class="tip" style="margin-top:24px"><strong>💡 200+ fonctions référencées</strong> — Ce mémo couvre toutes les fonctionnalités essentielles de PHP moderne!</div>
    </div>
</section>

<footer>
    <div class="container">
        <p style="margin-bottom:8px"><strong>Mémo PHP Complet</strong> • 200+ fonctions • PHP 8+ • 2025</p>
        <p style="font-size:.8rem">Créé par <strong>Geoffroy Streit</strong> — Pour consolider sa mémoire avec un cours concis, graphique et structuré, mais aussi pour le plaisir de partager la connaissance et faciliter l'apprentissage des autres.</p>
    </div>
</footer>

<script src="script.js"></script>
</body>
</html>
