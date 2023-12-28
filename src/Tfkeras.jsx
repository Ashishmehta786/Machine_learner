// App.js
import React ,{ useEffect } from 'react'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {atomDark,duotoneDark, twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

  
  
function Tfkeras() {
  
  const code =[ `# generally we import tensorflow in this manner
import tensorflow as tf`];
  const code1=[`1) What is Tensorflow and what are tensors?
2) Eager execution and graph execution overview
3) Keras library overview and subclassing api in tensorflow`];
const code2=`For understanding Tensorflow you just need to know linear algebra basic graph theory and
intermediate calculus with intermediate level of probability and statistics.

By it's name it is clear it's the flow of tensors and what are tensors in short just keep in mind tensors are multiple matrices

or multiple vectors enclosed in a single container the main intution or 
work of tensor is the transformation it does .
As matrices do a transformation to the graph linearly. 

Let's see how does a matrix does a linear transformation through a code in python's library matplotlib by plotting the coordinate space.
In this way matix multiplication does transformation in the vector space as an intution of squishing streching
the vector space and basis vectors like here it changed the initial vector.`;

const code3=`#let's print the type of constant tensor

print(type(tf.constant(3)))#output is eager tensor

output:
<class 'tensorflow.python.framework.ops.EagerTensor'>`;

const code4=`def func(a,b):
 print("hello starting function")
 c=tf.matmul(a,b)
 print(c)

func(tf.constant([[2],[1]]),tf.constant([[1,3]]))`;
  const code5=`hello starting function
tf.Tensor(
[[2 6]
 [1 3]], shape=(2, 2), dtype=int32)`;
  const code6=`#tf.config.run_functions_eagerly(False) 
#we can set eager execution to be not used as defaul via setting it tofalse
#to make graph and do computations in graph we use @tf.function decorator or pass function in tf.function(func_name)

@tf.function
def func(a,b):
 d=tf.constant(2)
 print("hello starting function")
 c=tf.matmul(a,b)
 print(c)

print(func(tf.constant([[2],[1]]),tf.constant([[1,3]])))`;
  const code7=``;
  
  
  return (
    <div >
      <h1 className="head">Tensorflow Basics and Keras </h1>

      <div className="app">
    

        
          <SyntaxHighlighter language="python" style={atomDark}>
            {code}
           
          </SyntaxHighlighter>
    <br/>
        <SyntaxHighlighter  style={atomDark}>
          {code1}

        </SyntaxHighlighter>
        <br/>
        <p>
          
          {code2}
      </p>

        
<br/>
        <img className="responsive-image" src={img1}/>
        <br/>
        
        <br/>
        <h5 className="heading3">Here it changed the basis vector these new basis vectors will be our new i, j hat of 2d vector space.</h5>
        <br/>
            <div style={{ maxWidth:'97%', margin: 'auto' }}>
          <h1 className="heading3">Matrix Multiplication as Basis Change</h1>
          <p>Original basis vectors: <InlineMath>{`\\mathbf{\\hat{i}}`}</InlineMath> and <InlineMath>{`\\mathbf{\\hat{j}}`}</InlineMath> </p>
          <p>Matrix  A=<InlineMath style={{ whiteSpace: 'normal' }}>{`\\begin{bmatrix} 2 & -1 \\\\ 3 & 4 \\end{bmatrix}`}</InlineMath></p>

          
          <p>New Basis vector : Let <InlineMath>{`\\mathbf{\\hat{a}} `}</InlineMath> and <InlineMath>{`\\mathbf{\\hat{b}} `}</InlineMath> be the new basis vectors <InlineMath>{`\\mathbf{\\hat{a}} = \\begin{bmatrix} 2  \\\\ 3 \\end{bmatrix}\\cdot \\mathbf{\\hat{i}}`}</InlineMath> and <InlineMath>{`\\mathbf{\\hat{b}} = \\begin{bmatrix} -1 \\\\  4 \\end{bmatrix} \\cdot \\mathbf{\\hat{j}}`}</InlineMath></p>
<p> Now any Vector v =(x,y) can be represented as <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}><InlineMath style={{ whiteSpace: 'normal' }}>{`\\vec{V}`}</InlineMath>= </span><InlineMath style={{ whiteSpace: 'normal' }}>{`\\vec{x}\\times\\mathbf{\\hat{a}} + \\vec{y}\\times\\mathbf{\\hat{b}} `}</InlineMath> </p>

          
          <p>
            In Cartesian system <InlineMath style={{ whiteSpace: 'normal' }}>{`\\mathbf{\\hat{i}}`}</InlineMath> is the unit vector in the positive x-direction and{' '}
            <InlineMath style={{ whiteSpace: 'normal' }}>{`\\mathbf{\\hat{j}}`}</InlineMath> is the unit vector in the positive y-direction.</p>
            </div>
        
        <img className="responsive-image"src={img2}/>
        <br/>
        
        
      <br/>
        <h5 className="heading3">This gives intution of 3d transformation by matrix/rank 2 tensor.</h5>
        <br/>
        
        <br/>
        <img className="responsive-image"src={img3}/>
        
        <h1>Eager execution </h1>
        <p>When tensorflow was launched it supported graph execution which was tough to debug but easier to compute so they came along with eager execution that it there will be no graph creation direct the code will run in python. Let's see how does it works</p>
        <SyntaxHighlighter language="python" style={atomDark}>
            {code3}
           
          </SyntaxHighlighter>
    <br/>
        <h1>What actually is an eager tensor?</h1>
    <p>Eager tensor is the tensor created in an eager mode of execution meaning it doesn't  involves computation through graph execution.Debugging in eager tensor is easier. Let's  see how is it easier than graph.</p>
      <br/>
        <h1>How to create an eager tensor?</h1>
        <p>It's simple to create an eager tensor. Just don't use tf.function decorator. By default creating any tensor a ragged ,constant ,Variable the tensor is considered to be eager.Let's see with example and difference between eager and graph execution.</p>
      <SyntaxHighlighter language="python" style={atomDark}>
            {code4}
           
          </SyntaxHighlighter>
    <br/>
        <h5 className="output">Output: </h5>
        
        <SyntaxHighlighter language="python" style={atomDark}>
            {code5}
           
          </SyntaxHighlighter>
    
        <br/>
        <h1>Graph execution</h1>
        <SyntaxHighlighter language="python" style={atomDark}>
            {code6}
           
          </SyntaxHighlighter>
    <br/>
      <p>The output is weird in graph execution we wanted to print the value of c but its giving us its 

shape and name this is because of the graph execution is different and debugging is difficult so 

we use tensorflow's inbuilt functions like here we us tf.print in replacement of print</p>
        </div>
      </div>
    
  );
}
export default Tfkeras;
