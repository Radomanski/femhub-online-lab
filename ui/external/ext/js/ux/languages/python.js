/*
 * CodePress regular expressions for Java syntax highlighting
 */
 
// Python
Language.syntax = [
	{ input : /\'\'\'(.*?)\'\'\'/g, output : '<i>\'\'\'$1\'\'\'</i>' },
	{ input : /\/\*(.*?)\*\//g, output : '<i>/*$1*/</i>' },// comments /* */	
	{ input : /\"(.*?)(\"|<br>|<\/P>)/g, output : '<s>"$1$2</s>'}, // strings double quote
{ input : /\'(.*?)(\'|<br>|<\/P>)/g, output : '<s>\'$1$2</s>'},	
{ input : /\b(def|del|break|pass|class|lambda|for|while|if|return|continue|yield|global|exec|print|assert|as|in|raise|import|from|finnaly|else|elif|try|suite|except|not|or|and|is)\b/g, output : '<b>$1</b>'}, // reserved words
{ input : /\b(int|long|float|str|bool)\b/g, output : '<s>$1</s>'}, 
{ input : /(\*|\=|\||\+|\-|\)|\||\(|\[|\]|\,|\.|\\|\:|\%)/g, output : '<em>$1</em>'},
	{ input : /([^:]|^)\/\/(.*?)(<br|<\/P)/g, output : '$1<i>//$2</i>$3'} // comments //	

]

Language.snippets = []

Language.complete = [
	{ input : '\'',output : '\'$0\'' },
//	{ input : ':',output : ':\n&#9$0' },
	{ input : '"', output : '"$0"' },
	{ input : '(', output : '\($0\)' },
	{ input : '[', output : '\[$0\]' },
	{ input : '{', output : '{\n\t$0\n}' }		
]

Language.shortcuts = []
