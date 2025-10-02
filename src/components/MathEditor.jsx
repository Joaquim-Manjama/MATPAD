import { useState, useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

function parseMathInput(input) {
  //symbols
  let latex = input.replace(/#pi/g, '\\pi{}'); //pi symbol
  latex = latex.replace(/#theta/g, '\\theta{}'); //theta symbol
  latex = latex.replace(/#lambda/g, '\\lambda{}'); //lamda symbol
  latex = latex.replace(/#alpha/g, '\\alpha{}'); //alpha symbol
  latex = latex.replace(/#beta/g, '\\beta{}'); //beta symbol
  latex = latex.replace(/#gamma/g, '\\gamma{}'); //gamma symbol
  latex = latex.replace(/#delta/g, '\\delta{}'); //delta symbol
  latex = latex.replace(/#epsilon/g, '\\epsilon{}'); //epsilon symbol
  latex = latex.replace(/#sigma/g, '\\sigma{}'); //sigma symbol
  latex = latex.replace(/#omega/g, '\\omega{}'); //omega symbol
  latex = latex.replace(/#mu/g, '\\mu{}'); //mu symbol
  latex = latex.replace(/#phi/g, '\\phi{}'); //phi symbol
  latex = latex.replace(/#sum/g, '\\sum{}'); //summation symbol
  latex = latex.replace(/#infinity/g, '\\infty{}'); //infinity symbol
  latex = latex.replace(/#partial/g, '\\partial{}'); //partial derivative symbol
  latex = latex.replace(/#notequal/g, '\\neq{}'); //not equal symbol
  latex = latex.replace(/#leq/g, '\\leq{}'); //less than or
  latex = latex.replace(/#geq/g, '\\geq{}'); //greater than or equal symbol
  latex = latex.replace(/#approx/g, '\\approx{}'); //approximately equal symbol
  latex = latex.replace(/#times/g, '\\times{}'); //multiplication symbol
  latex = latex.replace(/#div/g, '\\div{}'); //division symbol
  latex = latex.replace(/#dot/g, '\\cdot{}'); //dot product symbol
  latex = latex.replace(/#angle/g, '\\angle{}'); //angle symbol
  latex = latex.replace(/#deg/g, '\\degree{}'); //degree symbol
  latex = latex.replace(/#forall/g, '\\forall{}'); //for all symbol
  latex = latex.replace(/#exists/g, '\\exists{}'); //there exists symbol
  latex = latex.replace(/#nabla/g, '\\nabla{}'); //nabla symbol
  latex = latex.replace(/#subset/g, '\\subset{}'); //subset symbol
  latex = latex.replace(/#subseteq/g, '\\subseteq{}'); //subset or equal symbol
  latex = latex.replace(/#supset/g, '\\supset{}'); //superset symbol
  latex = latex.replace(/#supseteq/g, '\\supset{}'); //superset symbol
  latex = latex.replace(/#union/g, '\\cup{}'); //union symbol
  latex = latex.replace(/#intersection/g, '\\cap{}'); //intersection symbol
  latex = latex.replace(/#int/g, '\\int{}'); //integral symbol
  latex = latex.replace(/#empty/g, '\\emptyset{}'); //empty set symbol
  latex = latex.replace(/#prime/g, '\\prime{}'); //prime symbol
  latex = latex.replace(/#circ/g, '\\circ{}'); //circle symbol
  latex = latex.replace(/#uparrow/g, '\\uparrow{}'); //up arrow symbol
  latex = latex.replace(/#downarrow/g, '\\downarrow{}'); //down arrow symbol
  latex = latex.replace(/#leftarrow/g, '\\leftarrow{}'); //left arrow symbol
  latex = latex.replace(/#leftrightarrow/g, '\\leftrightarrow{}'); //leftright arrow symbol
  latex = latex.replace(/#rightarrow/g, '\\rightarrow{}'); //right arrow symbol
  latex = latex.replace(/#to/g, '\\to{}'); //to arrow symbol
  latex = latex.replace(/#iff/g, '\\iff{}'); //if and only if symbol
  latex = latex.replace(/#implies/g, '\\implies{}'); //implies symbol
  latex = latex.replace(/#therefore/g, '\\therefore{}'); //therefore symbol
  latex = latex.replace(/#because/g, '\\because{}'); //because symbol
  latex = latex.replace(/#in/g, '\\in{}'); //element of symbol
  latex = latex.replace(/#ni/g, '\\ni{}'); //element of symbol
  latex = latex.replace(/#notin/g, '\\notin{}'); //not an element of symbol
  latex = latex.replace(/#plusminus/g, '\\pm{}'); //plus minus symbol
  latex = latex.replace(/#equivalent/g, '\\equiv{}'); //equivalent symbol
  latex = latex.replace(/#proportional/g, '\\propto{}'); //proportional to symbol
  latex = latex.replace(/#perpendicular/g, '\\perp{}'); //perpendicular symbol
  latex = latex.replace(/#parallel/g, '\\parallel{}'); //parallel symbol
  latex = latex.replace(/#ldots/g, '\\ldots{}'); //horizontal ellipsis
  latex = latex.replace(/#and/g, '\\land{}'); //logical and
  latex = latex.replace(/#or/g, '\\lor{}'); //logical or
  latex = latex.replace(/#not/g, '\\lnot{}'); //logical not
  latex = latex.replace(/#triangle/g, '\\triangle{}'); //left arrow symbol

  //functions
  latex = latex.replace(/frac\(([^,]+),\s*([^)]+)\)/g, '\\frac{$1}{$2}'); //fraction
  latex = latex.replace(/sqrt\(([^)]*)\)/g, '\\sqrt{$1}'); //square root
  latex = latex.replace(/\^\(([^)]+)\)/g, '^{$1}'); //exponentiation
  latex = latex.replace(/_\(([^)]+)\)/g, '_{$1}'); //subscript
  latex = latex.replace(/nthroot\(([^,]+),\s*([^)]+)\)/g, '\\sqrt[$1]{$2}');  //nth root
  latex = latex.replace(/log\(([^,]+),\s*([^)]+)\)/g, '\\log_{$1}{$2}'); // log base $1 of $2
  latex = latex.replace(/log\(([^)]*)\)/g, '\\log{$1}'); //logarithm
  latex = latex.replace(/ln\(([^)]*)\)/g, '\\ln{$1}'); //natural logarithm
  latex = latex.replace(/sin\(([^)]*)\)/g, '\\sin{$1}'); //sine function
  latex = latex.replace(/cos\(([^)]*)\)/g, '\\cos{$1}'); //cosine function
  latex = latex.replace(/tan\(([^)]*)\)/g, '\\tan{$1}'); //tangent function
  latex = latex.replace(/csc\(([^)]*)\)/g, '\\csc{$1}'); //cosecant function
  latex = latex.replace(/sec\(([^)]*)\)/g, '\\sec{$1}'); //secant function
  latex = latex.replace(/cot\(([^)]*)\)/g, '\\cot{$1}'); //cotangent function
  latex = latex.replace(/arcsin\(([^)]*)\)/g, '\\arcsin{$1}'); //arcsine function
  latex = latex.replace(/arccos\(([^)]*)\)/g, '\\arccos{$1}'); //arccosine function
  latex = latex.replace(/arctan\(([^)]*)\)/g, '\\arctan{$1}'); //arctangent function
  // definite integral: int(a, b, expr, var) => \int_{a}^{b} expr \, dvar
  latex = latex.replace(/int\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)/g, '\\int_{$1}^{$2} $3 \\, d$4');
  // limit: lim(var, value, expr) => \lim_{var \to value} expr
  //latex = latex.replace(/lim\(([^,]+),\s*([^,]+),\s*([^)]+)\)/g, '\\lim_{$1 \\to $2} $3');
  latex = latex.replace(/lim\(([^,]+),\s*([^,]+),\s*([^)]+)\)/g, '\\lim_{$1 \\to $2} $3');
  latex = latex.replace(/floor\(([^)]+)\)/g, '\\lfloor $1 \\rfloor'); //floor function
  latex = latex.replace(/ceiling\(([^)]+)\)/g, '\\lceil $1 \\rceil'); //ceiling function
  latex = latex.replace(/vector\(([^)]+)\)/g, '\\vec{$1}'); //vector notation
  latex = latex.replace(/cancel\(([^)]+)\)/g, '\\cancel{$1}'); //cancel notation
  latex = latex.replace(/boxed\((.*)\)/g, '\\boxed{$1}'); //boxed notation
  latex = latex.replace(/dot\(([^)]+)\)/g, '\\dot{$1}'); //dot notation
  latex = latex.replace(/ddot\(([^)]+)\)/g, '\\ddot{$1}'); //dot notation
  latex = latex.replace(/dddot\(([^)]+)\)/g, '\\dddot{$1}'); //dot notation
  latex = latex.replace(/bar\(([^)]+)\)/g, '\\bar{$1}'); //bar notation
  latex = latex.replace(/hat\(([^)]+)\)/g, '\\hat{$1}'); //hatt notation
  
  //text formatting
  latex = latex.replace(/text\{([\s\S]*?)\}/g, '\\text{$1}'); //text
  latex = latex.replace(/bold\(([^)]*)\)/g, '\\textbf{$1}'); //bold text
  latex = latex.replace(/subh\(([^)]*)\)/g, '{\\Large \\textbf{$1}}'); //subheading
  latex = latex.replace(/h\(([^)]*)\)/g, '{\\huge \\textbf{$1}}'); //heading
  latex = latex.replace(/center\(([^)]*)\)/g, '\\begin{center}$1\\end{center}');
  latex = latex.replace(/\n{2,}/g, '\\\\ \\; \\\\'); 
  latex = latex.replace(/\n/g, '\\\\'); // line breaks
  latex = latex.replace(/ /g, '\\space{}'); // spaces

  // matrix: matrix(rows;rows;...) where each row is comma separated, e.g. matrix(1,2;3,4)
  latex = latex.replace(/matrix\(([^)]*)\)/g, function(_, content) {
    // Split rows by semicolon
    const rows = content.split(';').map(row => row.trim())
    // Split columns by comma and join with &
    const latexRows = rows.map(row => row.split(',').map(cell => cell.trim()).join(' \\; \\; \\;')).join(' \\\\ ')
    return `\\begin{bmatrix} ${latexRows} \\end{bmatrix}`
  })

  return latex;
}

export default function MathEditor({ value, onChange, id, edit}) {
  const [error, setError] = useState('');
  const [rendered, setRendered] = useState('');
  const latex = parseMathInput(value);

  useEffect(() => {
    try {
      // Custom handling for \begin{center}...\end{center}
      let html = '';
      const centerRegex = /\\begin\{center\}([\s\S]*?)\\end\{center\}/g;
      let lastIndex = 0;
      let match;
      while ((match = centerRegex.exec(latex)) !== null) {
        // Render content before the center block
        if (match.index > lastIndex) {
          const before = latex.slice(lastIndex, match.index);
          if (before.trim()) {
            html += katex.renderToString(before, { throwOnError: false, displayMode: true });
          }
        }
        // Render centered content
        const centered = match[1];
        html += `<div style="width: 100%; display:flex;"><span style="margin: auto;">${katex.renderToString(centered, { throwOnError: false, displayMode: true })}</span></div>`;
        lastIndex = centerRegex.lastIndex;
      }
      // Render any content after the last center block
      if (lastIndex < latex.length) {
        const after = latex.slice(lastIndex);
        if (after.trim()) {
          html += katex.renderToString(after, { throwOnError: false, displayMode: true });
        }
      }
      setRendered(html);
      setError('');
    } catch (e) {
      setRendered('');
      setError('Invalid formula');
    }
  }, [latex]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '74vw', position: 'relative'}}>
      <div style={{height: (id==0 || !edit)?'83vh':'62vh', width: '100%', overflowY: 'auto'}} dangerouslySetInnerHTML={{ __html: rendered }} />
      {error && <div style={{ color: 'red', marginLeft: 16 }}>{error}</div>}
      {(id!= 0 && edit) && <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type math here... (e.g. #pi, frac(a, b), text{your text})"
        style={{ width: '100%', height: 120, position: 'absolute', bottom: -10, left: 0, resize: 'none', fontFamily: 'monospace', boxSizing: 'border-box', borderTop: '1px solid #ccc', padding: 12, background: '#18181b', color: '#fff' }}
      />}
    </div>
  );
}
