# JavaScript - Web scraping

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/cyPJuoYvqMiWVB99QjV1xQ" title="Working with JSON data" target="_blank">Working with JSON data</a> </li>
<li><a href="/rltoken/expcgsbi7f7uNbU70fMGAw" title="The workflow of accessing the attributes of a simply-created JSON object by Jimmy Tran from Cohort 1 - San Francisco" target="_blank">The workflow of accessing the attributes of a simply-created JSON object by Jimmy Tran from Cohort 1 - San Francisco</a> </li>
<li><a href="/rltoken/YDUvl1fHJ5XgVj5X-dIvIw" title="request module" target="_blank">request module</a> </li>
<li><a href="/rltoken/6OCKMSydhE2sW_OLJiL8Bg" title="Modern JS" target="_blank">Modern JS</a> </li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/vyR6MzxawP38Wxze3Mcndg" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<h3>General</h3>

<ul>
<li>Why JavaScript programming is amazing</li>
<li>How to manipulate JSON data</li>
<li>How to use <code>request</code> and fetch API</li>
<li>How to read and write a file using <code>fs</code> module</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code></li>
<li>All your files will be interpreted on Ubuntu 14.04 LTS using <code>node</code> (version 10.14.x)</li>
<li>All your files should end with a new line</li>
<li>The first line of all your files should be exactly <code>#!/usr/bin/node</code></li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should be <code>semistandard</code> compliant. <a href="/rltoken/qAB-HUJLZivo5Xbol93nKw" title="Rules of Standard" target="_blank">Rules of Standard</a> + <a href="/rltoken/9PdDMIYjhr7rrMBwkwYHQw" title="semicolons on top" target="_blank">semicolons on top</a>. Also as reference: <a href="/rltoken/w9JTrKUoHboTrWZazNNw-w" title="AirBnB style" target="_blank">AirBnB style</a></li>
<li>All your files must be executable</li>
<li>The length of your files will be tested using <code>wc</code></li>
<li>You are not allowed to use <code>var</code></li>
</ul>

<h2>More Info</h2>

<h3>Install Node 10</h3>

<pre><code>$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
</code></pre>

<h3>Install semi-standard</h3>

<p><a href="/rltoken/9PdDMIYjhr7rrMBwkwYHQw" title="Documentation" target="_blank">Documentation</a></p>

<pre><code>$ sudo npm install semistandard --global
</code></pre>

<h3>Install <code>request</code> module and use it</h3>

<p><a href="/rltoken/YDUvl1fHJ5XgVj5X-dIvIw" title="Documentation" target="_blank">Documentation</a></p>

<pre><code>$ sudo npm install request --global
$ export NODE_PATH=/usr/lib/node_modules
</code></pre>

<p><strong>Notes:</strong> Request module has been deprecated since February 2020 - the team is considering alternative to replace this module - however, it&rsquo;s a really simple and powerful module for practicing web-scraping in JavaScript (and still used a lot in the industry).</p>


<details>
<summary>Click to see: Tasks</summary>

<h3 class="panel-title">
0. Readme
</h3>

Write a script that reads and prints the content of a file.</p>

<ul>
<li>The first argument is the file path</li>
<li>The content of the file must be read in <code>utf-8</code></li>
<li>If an error occurred during the reading, print the error object</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ cat cisfun
C is super fun!
guillaume@ubuntu:~/$ ./0-readme.js cisfun
C is super fun!

guillaume@ubuntu:~/$ ./0-readme.js doesntexist
{ Error: ENOENT: no such file or directory, open &#39;doesntexist&#39;
at Error (native)
errno: -2,
code: &#39;ENOENT&#39;,
syscall: &#39;open&#39;,
path: &#39;doesntexist&#39; }
guillaume@ubuntu:~/$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>javascript-web_scraping</code></li>
<li>File: <code>0-readme.js</code></li>
</ul>
</div>

<h3 class="panel-title">
1. Write me
</h3>

Write a script that writes a string to a file.</p>

<ul>
<li>The first argument is the file path</li>
<li>The second argument is the string to write</li>
<li>The content of the file must be written in <code>utf-8</code></li>
<li>If an error occurred during while writing, print the error object</li>
</ul>

<pre><code>guillaume@ubuntu:~/$ ./1-writeme.js my_file.txt &quot;Python is cool&quot;
guillaume@ubuntu:~/$ cat my_file.txt ; echo &quot;&quot;
Python is cool
guillaume@ubuntu:~/$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>javascript-web_scraping</code></li>
<li>File: <code>1-writeme.js</code></li>
</ul>
</div>

<h3 class="panel-title">
2. Status code
</h3>

Write a script that display the status code of a <code>GET</code> request.</p>

<ul>
<li>The first argument is the URL to request (<code>GET</code>)</li>
<li>The status code must be printed like this: <code>code: &lt;status code&gt;</code></li>
<li>You must use the module <code>request</code></li>
</ul>

<pre><code>guillaume@ubuntu:~/$ ./2-statuscode.js https://intranet.hbtn.io/status
code: 200
guillaume@ubuntu:~/$ ./2-statuscode.js https://intranet.hbtn.io/doesnt_exist
code: 404
guillaume@ubuntu:~/$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>javascript-web_scraping</code></li>
<li>File: <code>2-statuscode.js</code></li>
</ul>
</div>

<h3 class="panel-title">
3. Star wars movie title
</h3>

Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.</p>

<ul>
<li>The first argument is the movie ID</li>
<li>You must use the <a href="/rltoken/Bv5vsiARwoF3Hr94FVFMZA" title="Star wars API" target="_blank">Star wars API</a> with the endpoint <code>https://swapi-api.hbtn.io/api/films/:id</code></li>
<li>You must use the module <code>request</code></li>
</ul>

<pre><code>guillaume@ubuntu:~/$ ./3-starwars_title.js 1
A New Hope
guillaume@ubuntu:~/$ ./3-starwars_title.js 5
Attack of the Clones
guillaume@ubuntu:~/$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>javascript-web_scraping</code></li>
<li>File: <code>3-starwars_title.js</code></li>
</ul>
</div>

<h3 class="panel-title">
4. Star wars Wedge Antilles
</h3>

Write a script that prints the number of movies where the character &ldquo;Wedge Antilles&rdquo; is present.</p>

<ul>
<li>The first argument is the API URL of the <a href="/rltoken/Bv5vsiARwoF3Hr94FVFMZA" title="Star wars API" target="_blank">Star wars API</a>: <code>https://swapi-api.hbtn.io/api/films/</code></li>
<li>Wedge Antilles is character ID <code>18</code> - your script <strong>must</strong> use this ID for filtering the result of the API</li>
<li>You must use the module <code>request</code></li>
</ul>

<pre><code>guillaume@ubuntu:~/$ ./4-starwars_count.js https://swapi-api.hbtn.io/api/films
3
guillaume@ubuntu:~/$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>javascript-web_scraping</code></li>
<li>File: <code>4-starwars_count.js</code></li>
</ul>
</div>

<h3 class="panel-title">
5. Loripsum
</h3>

Write a script that gets the contents of a webpage and stores it in a file.</p>

<ul>
<li>The first argument is the URL to request</li>
<li>The second argument the file path to store the body response</li>
<li>The file must be UTF-8 encoded</li>
<li>You must use the module <code>request</code></li>
</ul>

<pre><code>guillaume@ubuntu:~/$ ./5-request_store.js http://loripsum.net/api loripsum
guillaume@ubuntu:~/$ cat loripsum
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec quo modo conveniant, non sane intellego. Nam memini etiam quae nolo, oblivisci non possum quae volo. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Terram, mihi crede, ea lanx et maria deprimet. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. &lt;/p&gt;

&lt;p&gt;Ad eos igitur converte te, quaeso. Pudebit te, inquam, illius tabulae, quam Cleanthes sane commode verbis depingere solebat. Sic enim censent, oportunitatis esse beate vivere. Quo studio Aristophanem putamus aetatem in litteris duxisse? Aeque enim contingit omnibus fidibus, ut incontentae sint. Ut aliquid scire se gaudeant? Qui enim existimabit posse se miserum esse beatus non erit. Putabam equidem satis, inquit, me dixisse. &lt;/p&gt;

&lt;p&gt;Duo Reges: constructio interrete. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? Illud non continuo, ut aeque incontentae. Illa videamus, quae a te de amicitia dicta sunt. At ille pellit, qui permulcet sensum voluptate. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. &lt;/p&gt;

&lt;p&gt;Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Nos cum te, M. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Apparet statim, quae sint officia, quae actiones. Ergo instituto veterum, quo etiam Stoici utuntur, hinc capiamus exordium. Eadem nunc mea adversum te oratio est. Quid, si etiam iucunda memoria est praeteritorum malorum? Hoc enim constituto in philosophia constituta sunt omnia. &lt;/p&gt;

guillaume@ubuntu:~/$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>javascript-web_scraping</code></li>
<li>File: <code>5-request_store.js</code></li>
</ul>
</div>

<h3 class="panel-title">
6. How many completed?
</h3>

Write a script that computes the number of tasks completed by user id.</p>

<ul>
<li>The first argument is the API URL: <code>https://jsonplaceholder.typicode.com/todos</code></li>
<li>Only print users with completed task</li>
<li>You must use the module <code>request</code></li>
</ul>

<pre><code>guillaume@ubuntu:~/$ ./6-completed_tasks.js https://jsonplaceholder.typicode.com/todos
{ &#39;1&#39;: 11,
&#39;2&#39;: 8,
&#39;3&#39;: 7,
&#39;4&#39;: 6,
&#39;5&#39;: 12,
&#39;6&#39;: 6,
&#39;7&#39;: 9,
&#39;8&#39;: 11,
&#39;9&#39;: 8,
&#39;10&#39;: 12 }
guillaume@ubuntu:~/$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-javascript-coding</code></li>
<li>Directory: <code>javascript-web_scraping</code></li>
<li>File: <code>6-completed_tasks.js</code></li>
</ul>
</div>

</details>
