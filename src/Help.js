export const helpText = `h(MATPAD COMMANDS)

text{This file lists all available math and formatting commands for MATPAD, grouped by category. Use these commands in your notes to render math and formatted text in real time.}

---

subh(1. Greek Letters \\& Symbols)

- \`\\#{}pi\` → π
- \`\\#{}theta\` → θ
- \`\\#{}lambda\` → λ
- \`\\#{}alpha\` → α
- \`\\#{}beta\` → β
- \`\\#{}gamma\` → γ
- \`\\#{}delta\` → δ
- \`\\#{}epsilon\` → ε
- \`\\#{}sigma\` → σ
- \`\\#{}omega\` → ω
- \`\\#{}mu\` → μ
- \`\\#{}phi\` → φ

---

subh(2. Math Operators \\& Relations)

- \`\\#{}sum\` → text{Summation} (∑)
- \`\\#{}int\` → text{Integral} (∫)
- \`\\#{}infinity\` → ∞
- \`\\#{}partial\` → ∂
- \`\\#{}notequal\` → ≠
- \`\\#{}leq\` → ≤
- \`\\#{}geq\` → ≥
- \`\\#{}approx\` → ≈
- \`\\#{}times\` → ×
- \`\\#{}div\` → ÷
- \`\\#{}dot\` → ·
- \`\\#{}angle\` → ∠
- \`\\#{}deg\` → °
- \`\\#{}forall\` → ∀
- \`\\#{}exists\` → ∃
- \`\\#{}nabla\` → ∇
- \`\\#{}subset\` → ⊂
- \`\\#{}subseteq\` → ⊆
- \`\\#{}supset\` → ⊃
- \`\\#{}supseteq\` → ⊇
- \`\\#{}union\` → ∪
- \`\\#{}intersection\` → ∩
- \`\\#{}empty\` → ∅
- \`\\#{}prime\` → ′
- \`\\#{}circ\` → ∘
- \`\\#{}uparrow\` → ↑
- \`\\#{}downarrow\` → ↓
- \`\\#{}leftarrow\` → ←
- \`\\#{}leftrightarrow\` → ↔
- \`\\#{}rightarrow\` → →
- \`\\#{}to\` → →
- \`\\#{}iff\` → ⇔
- \`\\#{}implies\` → ⇒
- \`\\#{}therefore\` → ∴
- \`\\#{}because\` → ∵
- \`\\#{}in\` → ∈
- \`\\#{}ni\` → ∋
- \`\\#{}notin\` → ∉
- \`\\#{}plusminus\` → ±
- \`\\#{}equivalent\` → ≡
- \`\\#{}proportional\` → ∝
- \`\\#{}perpendicular\` → ⟂
- \`\\#{}parallel\` → ∥
- \`\\#{}ldots\` → …
- \`\\#{}and\` → ∧
- \`\\#{}or\` → ∨
- \`\\#{}not\` → ¬
- \`\\#{}triangle\` → △

---

subh(3. Fractions, Roots, Exponents, Subscripts)

- \`frac{}(a, b)\` → text{Fraction}: frac(a, b)


- \`sqrt{}(x)\` → text{Square root}: sqrt(x)

- \`nthroot{}(n, x)\` → text{n-th root}: nthroot(n, x)

- \`   \\^{} exp   \` → text{Superscript}: e.g. \`x \\^{} 2\` → x^2

- \` \\_{}sub   \` → text{Subscript}: e.g. \`x\\_{}i\` → x_i

---

subh(4. Functions)

- \`sin{}(x)\`, \`cos{}(x)\`, \`tan{}(x)\`, \`cot{}(x)\`, \`arcsin{}(x)\`, \`arccos{}(x)\`, \`arctan{}(x)\`
- \`ln{}(x)\` → text{Natural logarithm}
- \`log{}(x)\` → text{Logarithm base} 10
- \`log{}(a, b)\` → text{Logarithm}: text{log base} \`a\` of \`b\` log(a, b)
- \`floor{}(x)\` → text{Floor function}: floor(x)
- \`ceiling{}(x)\` → text{Ceiling function} ceiling(x)
- \`vector{}(x)\` → text{Vector notation}: vector(x)
- \`cancel{}(x)\` → text{Cancel notation}: cancel(x)
- \`boxed{}(x)\` → text{Boxed notation}: boxed(x)

---

subh(5. Calculus)

- \`int{}(a, b, expr, var)\` → text{Definite integral}: int(a, b, exp, var)
  #circ text{Example}: \`int{}(0, 1, x^2, x)\` → int(0, 1, x^2, x)

- \`lim{}(var, value, expr)\` → text{Limit}: lim(var, value, expr)
  #circ text{Example}: \`lim{}(x, 0, xsin(x))\` → lim(x, 0, xsin(x))

---

subh(6. Matrices)

- \`matrix{}(a,b;c,d)\` → text{Matrix}: text{rows separated by} \`;\`, text{columns by} \`,\`
  #circ text{Example}: \`matrix{}(1,2;3,4;5,6)\` → matrix(1,2;3,4;5,6)

---

subh(7. Text Formatting)

- \`text\\{{your text\\}}\` → text{Plain text}: text{your text} 
- \`bold{}(your text)\` → text{Bold text}: bold(your text)
- \`h{}(your text)\` → text{Large heading}: h(your text)
- \`subh{}(your text)\` → text{Subheading}: subh(your text)

---

subh(8. Alignment \\& Layout)

- \`center{}(content)\` → text{Center the content on the page (math or text)}
  #circ text{Example}: center{}(E = mc^2) #to center(E = mc^2)

---

subh(9. Math Accents \\& Derivatives)

- \`dot{}(x)\` → dot(x) text{(first derivative or time derivative)}
- \`ddot{}(x)\` → ddot(x) text{(second derivative)}
- \`dddot{}(x)\` → dddot(x) text{(third derivative)}
- \`bar{}(x)\` → bar(x) text{(bar over x, e.g., mean or conjugate)}
- \`hat{}(x)\` → hat(x) text{(hat over x, e.g., estimator or unit vector)}
  - text{Example}: \`bar{}(x)\` → bar(x), \`hat{}(y)\` → hat(y)

---

subh(Notes)

- text{Commands are case-sensitive.}

- text{Spaces are generally ignored in math commands, but preserved in text formatting.}`
