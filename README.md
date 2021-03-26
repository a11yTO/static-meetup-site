# #a11yTO Camp Site README

We used [the simple and static benefits of Jekyll](https://jekyllrb.com/) to help manage our site. You'll need to have Jekyll installed on your computer to manipulate the site and see those changes locally. Installing Jekyll is relatively easy to do.

On a Mac, on the command line (The Terminal) type:

`gem install bundler jekyll`

If you are using Windows [refer to these instructions in the Jekyll Docs for help](https://jekyllrb.com/docs/windows/), as you'll need Ruby installed first in order to run Jekyll.

Then clone this repository to your hard drive. Get inside the folder that the cloned repo is in, then on the command line run:

`bundle exec jekyll serve`

That command will build a local version of the site in a `_site` directory in the folder you are in, and the command will spin up a working local web server on your computer. Now, in a web browser you can navigate to http://localhost:4000 to experience our site on your computer.

## A Minor Discrepency

As it's [stated on the welcome page of the Jekyll Docs "You create your content as text files (Markdown)..."](https://jekyllrb.com/docs/home/). However, in an effort to keep maintenance and contribution as simple as possible, we wrote all of our content in HTML rather than Markdown. Reason being it's easier and faster to comprehend how altering any line of code will change the generated result. In the sense it won't. That which goes in to Jekyll, comes out of Jekyll.

Which means if a contributor wanted to change some text on our home page for example, open `index.html`, change what you wanted to change, save, then push your changes to Github. We only mention installing Jekyll first as a way to be able to view your changes on your computer.

## Changing or updating site content

Hopefully the biggest hurdle one would need to clear in order to perform a change or update, assuming first one has some understang of HTML, is locating the content which will require attention.

Aside from content that can be found in individual page files (`organizers.html`, as another example), here are some areas of our site that frequently require changes or updates, and where in this repository one would find them:

- **Main Navigation** is in the `_includes` directory and in the file `header.html`.
- **Sponsors** is in the `_includes` directory and in the file `sponsors.html`.
- **Footer Content** is in the `_includes` directory and in the file `footer.html`.

Elements, such as a single page titles or single page descriptions, can be found in the individual page file's [Front Matter](https://jekyllrb.com/docs/front-matter/), the content between triple-dashed lines at the beginning of the file. The front page (`index.html`) is the only page in this repository that doesn't contain a title value in its Front Matter. It's literally handled in the `_includes/header.html` file, via a reference to the site title, versus a page title. The site title can be found in the `config.yml` file.

Finally, individual page file's Front Matter also contains other elements, like page ID. For the vast majority of updates these elements will not require any changes.
