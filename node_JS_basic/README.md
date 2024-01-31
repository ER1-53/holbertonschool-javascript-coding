# NodeJS Basics

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240131%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240131T091037Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=73776035453e4d7f60bc1549b48abfdad70e32e5505f7338aaa33d4bdd72a1db" alt="" loading='lazy' style="" /></p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/wra0mmTJrgiaUjQeQtaEiw" title="Node JS getting started" target="_blank">Node JS getting started</a></li>
<li><a href="/rltoken/r7zaza7ho6hJ_7cLeTZ0Hg" title="Process API doc" target="_blank">Process API doc</a></li>
<li><a href="/rltoken/WuPAaRD6tR4Z-BGVCuHGBA" title="Child process" target="_blank">Child process</a></li>
<li><a href="/rltoken/KslKrqBhfpYswZkQF_3TFQ" title="Express getting started" target="_blank">Express getting started</a></li>
<li><a href="/rltoken/RUmswWUbignL37NK1D9vFQ" title="Mocha documentation" target="_blank">Mocha documentation</a></li>
<li><a href="/rltoken/lN6akFeHiL8sfq8-DDgsFQ" title="Nodemon documentation" target="_blank">Nodemon documentation</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/beHpZy1zyEviuBvL4IjsOA" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>run javascript using NodeJS</li>
<li>use NodeJS modules</li>
<li>use specific Node JS module to read files</li>
<li>use <code>process</code> to access command line arguments and the environment</li>
<li>create a small HTTP server using Node JS</li>
<li>create a small HTTP server using Express JS</li>
<li>create advanced routes with Express JS</li>
<li>use ES6 with Node JS with Babel-node</li>
<li>use Nodemon to develop faster</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>node</code> (version 12.x.x)</li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using <code>Jest</code> and the command <code>npm run test</code></li>
<li>Your code will be verified against lint using ESLint</li>
<li>Your code needs to pass all the tests and lint. You can verify the entire project running <code>npm run full-test</code></li>
<li>All of your functions/classes must be exported by using this format: <code>module.exports = myFunction;</code></li>
</ul>

<h2>Provided files</h2>

<h3><code>database.csv</code></h3>

<pre><code>firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
</code></pre>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
{
"name": "node_js_basics",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"lint": "./node_modules/.bin/eslint",
"check-lint": "lint [0-9]*.js",
"test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
"dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
},
"author": "",
"license": "ISC",
"dependencies": {
"chai-http": "^4.3.0",
"express": "^4.17.1"
},
"devDependencies": {
"babel-cli": "^6.26.0",
"babel-preset-env": "^1.7.0",
"nodemon": "^2.0.2",
"eslint": "^6.4.0",
"eslint-config-airbnb-base": "^14.0.0",
"eslint-plugin-import": "^2.18.2",
"eslint-plugin-jest": "^22.17.0",
"chai": "^4.2.0",
"mocha": "^6.2.2",
"request": "^2.88.0",
"sinon": "^7.5.0"
}
}
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
module.exports = {
presets: [
[
'@babel/preset-env',
{
targets: {
node: 'current',
},
},
],
],
};
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
module.exports = {
env: {
browser: false,
es6: true,
jest: true,
},
extends: [
'airbnb-base',
'plugin:jest/all',
],
globals: {
Atomics: 'readonly',
SharedArrayBuffer: 'readonly',
},
parserOptions: {
ecmaVersion: 2018,
sourceType: 'module',
},
plugins: ['jest'],
rules: {
'max-classes-per-file': 'off',
'no-underscore-dangle': 'off',
'no-console': 'off',
'no-shadow': 'off',
'no-restricted-syntax': [
'error',
'LabeledStatement',
'WithStatement',
],
},
overrides:[
{
files: ['*.js'],
excludedFiles: 'babel.config.js',
}
]
};
</code>
</pre>
</details>

<h3>and&hellip;</h3>

<p>Don&rsquo;t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>


<details>
<summary>Click to see: Tasks</summary>

<h3 class="panel-title">
0. Executing basic javascript with Node JS
</h3>

In the file <code>0-console.js</code>, create a function named <code>displayMessage</code> that prints in <code>STDOUT</code> the string argument.</p>

<pre><code>bob@dylan:~$ cat 0-main.js
const displayMessage = require(&#39;./0-console&#39;);

displayMessage(&quot;Hello NodeJS!&quot;);

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code>0-console.js</code></li>
</ul>
</div>

<h3 class="panel-title">
1. Using Process stdin
</h3>

Create a program named <code>1-stdin.js</code> that will be executed through command line:</p>

<ul>
<li>It should display the message <code>Welcome to Holberton School, what is your name?</code> (followed by a new line)</li>
<li>The user should be able to input their name on a new line</li>
<li>The program should display <code>Your name is: INPUT</code></li>
<li>When the user ends the program, it should display <code>This important software is now closing</code> (followed by a new line)</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Your code will be tested through a child process, make sure you have everything you need for that</li>
</ul>

<pre><code>bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
This important software is now closing
bob@dylan:~$ 
bob@dylan:~$ echo &quot;John&quot; | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code>1-stdin.js</code></li>
</ul>
</div>

<h3 class="panel-title">
2. Reading a file synchronously with Node JS
</h3>

Using the database <code>database.csv</code> (provided in project description), create a function <code>countStudents</code> in the file <code>2-read_file.js</code></p>

<ul>
<li>Create a function named <code>countStudents</code>. It should accept a path in argument</li>
<li>The script should attempt to read the database file synchronously</li>
<li>If the database is not available, it should throw an error with the text <code>Cannot load the database</code></li>
<li>If the database is available, it should log the following message to the console <code>Number of students: NUMBER_OF_STUDENTS</code></li>
<li>It should log the number of students in each field, and the list with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<pre><code>bob@dylan:~$ cat 2-main_0.js
const countStudents = require(&#39;./2-read_file&#39;);

countStudents(&quot;nope.csv&quot;);

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
throw new Error(&#39;Cannot load the database&#39;);
^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require(&#39;./2-read_file&#39;);

countStudents(&quot;database.csv&quot;);

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code>2-read_file.js</code></li>
</ul>
</div>

<h3 class="panel-title">
3. Reading a file asynchronously with Node JS
</h3>

Using the database <code>database.csv</code> (provided in project description), create a function <code>countStudents</code> in the file <code>3-read_file_async.js</code></p>

<ul>
<li>Create a function named <code>countStudents</code>. It should accept a path in argument (same as in <code>2-read_file.js</code>)</li>
<li>The script should attempt to read the database file asynchronously</li>
<li>The function should return a Promise</li>
<li>If the database is not available, it should throw an error with the text <code>Cannot load the database</code></li>
<li>If the database is available, it should log the following message to the console <code>Number of students: NUMBER_OF_STUDENTS</code></li>
<li>It should log the number of students in each field, and the list with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<pre><code>bob@dylan:~$ cat 3-main_0.js
const countStudents = require(&#39;./3-read_file_async&#39;);

countStudents(&quot;nope.csv&quot;)
.then(() =&gt; {
console.log(&quot;Done!&quot;);
})
.catch((error) =&gt; {
console.log(error);
});

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require(&#39;./3-read_file_async&#39;);

countStudents(&quot;database.csv&quot;)
.then(() =&gt; {
console.log(&quot;Done!&quot;);
})
.catch((error) =&gt; {
console.log(error);
});
console.log(&quot;After!&quot;);

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$ 
</code></pre>

<p><strong>Tips:</strong></p>

<ul>
<li>Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads</li>
</ul>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code> 3-read_file_async.js</code></li>
</ul>
</div>

<h3 class="panel-title">
4. Create a small HTTP server using Node&#39;s HTTP module
</h3>

In a file named <code>4-http.js</code>, create a small HTTP server using the <code>http</code> module:</p>

<ul>
<li>It should be assigned to the variable <code>app</code> and this one must be exported </li>
<li>HTTP server should listen on port 1245</li>
<li>Displays <code>Hello Holberton School!</code> in the page body for any endpoint as plain text</li>
</ul>

<p>In terminal 1:</p>

<pre><code>bob@dylan:~$ node 4-http.js
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code>4-http.js</code></li>
</ul>
</div>

<h3 class="panel-title">
5. Create a more complex HTTP server using Node&#39;s HTTP module
</h3>

In a file named <code>5-http.js</code>, create a small HTTP server using the <code>http</code> module:</p>

<ul>
<li>It should be assigned to the variable app and this one must be exported</li>
<li>HTTP server should listen on port 1245</li>
<li>It should return plain text</li>
<li>When the URL path is <code>/</code>, it should display <code>Hello Holberton School!</code> in the page body</li>
<li>When the URL path is <code>/students</code>, it should display <code>This is the list of our students</code> followed by the same content as the file <code>3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as argument of the file</li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<p>Terminal 1:</p>

<pre><code>bob@dylan:~$ node 5-http.js database.csv
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo &quot;&quot;
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code>5-http.js</code></li>
</ul>
</div>

<h3 class="panel-title">
6. Create a small HTTP server using Express
</h3>

Install Express and in a file named <code>6-http_express.js</code>, create a small HTTP server using Express module:</p>

<ul>
<li>It should be assigned to the variable <code>app</code> and this one must be exported </li>
<li>HTTP server should listen on port 1245</li>
<li>Displays <code>Hello Holberton School!</code> in the page body for the endpoint <code>/</code></li>
</ul>

<p>In terminal 1:</p>

<pre><code>bob@dylan:~$ node 6-http_express.js
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo &quot;&quot;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;Error&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;pre&gt;Cannot GET /any_endpoint&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt; 
bob@dylan:~$ 
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code>6-http_express.js</code></li>
</ul>
</div>

<h3 class="panel-title">
7. Create a more complex HTTP server using Express
</h3>

In a file named <code>7-http_express.js</code>, recreate the small HTTP server using <code>Express</code>:</p>

<ul>
<li>It should be assigned to the variable app and this one must be exported</li>
<li>HTTP server should listen on port 1245</li>
<li>It should return plain text</li>
<li>When the URL path is <code>/</code>, it should display <code>Hello Holberton School!</code> in the page body</li>
<li>When the URL path is <code>/students</code>, it should display <code>This is the list of our students</code> followed by the same content as the file <code>3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as argument of the file</li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<p>Terminal 1:</p>

<pre><code>bob@dylan:~$ node 7-http_express.js database.csv
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo &quot;&quot;
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code>7-http_express.js</code></li>
</ul>
</div>

<h3 class="panel-title">
8. Organize a complex HTTP server using Express
</h3>

Obviously writing every part of a server within a single file is not sustainable. Let&rsquo;s create a full server in a directory named <code>full_server</code>.</p>

<p>Since you have used ES6 and Babel in the past projects, let&rsquo;s use <code>babel-node</code> to allow to use ES6 functions like <code>import</code> or <code>export</code>.</p>

<h4>8.1 Organize the structure of the server</h4>

<ul>
<li>Create 2 directories within:

<ul>
<li><code>controllers</code></li>
<li><code>routes</code></li>
</ul></li>
<li>Create a file <code>full_server/utils.js</code>, in the file create a function named <code>readDatabase</code> that accepts a file path as argument:

<ul>
<li>It should read the database asynchronously</li>
<li>It should return a promise</li>
<li>When the file is not accessible, it should reject the promise with the error</li>
<li>When the file can be read, it should return an object of arrays of the firstname of students per fields</li>
</ul></li>
</ul>

<h4>8.2 Write the App controller</h4>

<p>Inside the file <code>full_server/controllers/AppController.js</code>:</p>

<ul>
<li>Create a class named <code>AppController</code>. Add a static method named <code>getHomepage</code></li>
<li>The method accepts <code>request</code> and <code>response</code> as argument. It returns a 200 status and the message <code>Hello Holberton School!</code></li>
</ul>

<h4>8.3 Write the Students controller</h4>

<p>Inside the file <code>full_server/controllers/StudentsController.js</code>, create a class named <code>StudentsController</code>. Add two static methods:</p>

<p>The first one is <code>getAllStudents</code>:</p>

<ul>
<li>The method accepts <code>request</code> and <code>response</code> as argument</li>
<li>It should return a status 200</li>
<li>It calls the function <code>readDatabase</code> from the <code>utils</code> file, and display in the page:

<ul>
<li>First line: <code>This is the list of our students</code></li>
<li>And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
</ul></li>
<li>If the database is not available, it should return a status 500 and the error message <code>Cannot load the database</code></li>
</ul>

<p>The second one is <code>getAllStudentsByMajor</code>:</p>

<ul>
<li>The method accepts <code>request</code> and <code>response</code> as argument</li>
<li>It should return a status 200</li>
<li>It uses a parameter that the user can pass to the browser <code>major</code>. The <code>major</code> can only be <code>CS</code> or <code>SWE</code>. If the user is passing another parameter, the server should return a 500 and the error <code>Major parameter must be CS or SWE</code></li>
<li>It calls the function <code>readDatabase</code> from the <code>utils</code> file, and display in the page the list of first names  for the students (ordered by appearance in the database file) in the specified field <code>List: LIST_OF_FIRSTNAMES_IN_THE_FIELD</code></li>
<li>If the database is not available, it should return a status 500 and the error message <code>Cannot load the database</code></li>
</ul>

<h4>8.4 Write the routes</h4>

<p>Inside the file <code>full_server/routes/index.js</code>:</p>

<ul>
<li>Link the route <code>/</code> to the <code>AppController</code></li>
<li>Link the route <code>/students</code>  and <code>/students/:major</code>to the <code>StudentsController</code></li>
</ul>

<h4>8.5 Write the server reusing everything you created</h4>

<p>Inside the file named <code>full_server/server.js</code>, create a small Express server:</p>

<ul>
<li>It should use the routes defined in <code>full_server/routes/index.js</code></li>
<li>It should use the port <code>1245</code></li>
</ul>

<h4>8.6 Update <code>package.json</code> (if you are running it from outside the folder <code>full_server</code>)</h4>

<p>If you are starting node from outside of the folder <code>full_server</code>, you will have to update the command <code>dev</code> by: <code>nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv</code></p>

<p><strong>Warning:</strong></p>

<ul>
<li>Don&rsquo;t forget to export your express app at the end of <code>server.js</code> (<code>export default app;</code>)</li>
<li>The database filename is passed as argument of the <code>server.js</code> BUT, for testing purpose, you should retrieve this filename at the execution (when <code>getAllStudents</code> or <code>getAllStudentsByMajor</code>  are called for example)</li>
</ul>

<p>In terminal 1:</p>

<pre><code>bob@dylan:~$ npm run dev
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo &quot;&quot;
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE &amp;&amp; echo &quot;&quot;
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/French -vvv &amp;&amp; echo &quot;&quot;
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
&gt; GET /students/SWES HTTP/1.1
&gt; Host: localhost:1245
&gt; User-Agent: curl/7.58.0
&gt; Accept: */*
&gt;
&lt; HTTP/1.1 500 Internal Server Error
&lt; X-Powered-By: Express
&lt; Date: Mon, 06 Jul 2020 03:29:00 GMT
&lt; Connection: keep-alive
&lt; Content-Length: 33
&lt;
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$ 
</code></pre>

<p>If you want to add test to validate your integration, you will need to add this file: <code>.babelrc</code>
<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
{
&quot;presets&quot;: [[&quot;env&quot;, {&quot;exclude&quot;: [&quot;transform-regenerator&quot;]}]]
}
</code>
</pre>
</details></p>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>Node_JS_basic</code></li>
<li>File: <code>full_server/utils.js, full_server/controllers/AppController.js, full_server/controllers/StudentsController.js, full_server/routes/index.js, full_server/server.js</code></li>
</ul>
</div>

</details>
