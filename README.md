# EasySliderBar.js
<img width="582" alt="main" src="https://github.com/user-attachments/assets/2a047e18-02b9-4973-ab71-ea8a4d926e19">
<h2>How to use?</h2>
<p>
For example: I need to create a progress bar that shows a percentage of a value 250 out of 2,500.
Which going to yields a 10% progress status.
</p>
<p>
First, Links a CSS file and imports EasySliderBar.js
</p>
<pre>
&lt;link rel="stylesheet" href="EasySliderBar.css"&gt;
&lt;script src="./EasySlideBar.js"&gt;&lt;/script&gt;
</pre>
<p>
Then, Init those sliders using code below. (Multiple sliders are supported.)
</p>
<pre>
&lt;input type=&quot;range&quot; class=&quot;slider&quot; disabled&gt;
&lt;span class=&quot;silder_text&quot;&gt;&lt;/span&gt;

&lt;script&gt;
    setSliders([25000], [250])
&lt;/script&gt;</pre>