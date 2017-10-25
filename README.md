# clicktotext

Steps to setup GitHub Pages
* go to https://github.com/dallindp/clicktotext
* select settings (the gear tab)
* scroll to GitHub Pages
* using the drop down select gh-pages
* click save

Steps to edit (using mac)
* press cmd space
* search for and open terminal
* enter ```cd Documents``` (press enter after)
* enter ```git clone https://github.com/dallindp/clicktotext.git```
* that will pull all the files down to your computer
* enter ```cd clicktotext```
* enter ```git checkout gh-pages```
* edit using whatever text editor you want (I use https://atom.io)
* if you use atom in the terminal enter ```atom .``` that will open all the files in atom
after making changes
* if you've closed terminal open it again and enter ```cd Documents/clicktotext```
* now enter ```git add -A```
* next ```git commit -m "brief statement of what you changed"```
* next ```git push```
* give it a little bit and the changes will be reflected on https://dallindb.github.io/clicktotext

I created four pages:
https://dallindb.github.io/clicktotext/#/uno
https://dallindb.github.io/clicktotext/#/ampersand
https://dallindb.github.io/clicktotext/#/semicolon
https://dallindb.github.io/clicktotext/#/questionmark

uno does what you asked, however the submit button doesn't do anything yet.
ampersand, semicolon, questionmark are the three different test for opening the messaging app and populating the body. Uno also uses ampersand, but only for iphones.

to add a logo in clicktotext/views on all the aforementioned pages there is 
```
    <div class="logo">
      <h1>LOGO</h1>
    </div>
```
you can replace the h1 with for example and img tag. In clicktotext/css/build.css you can add styling for the img tag.
for example:
```
img {
  height: 25px;
  width: auto;
}
```
