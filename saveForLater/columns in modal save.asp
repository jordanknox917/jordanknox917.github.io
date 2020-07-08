<div class="header">
        <h2>Jordans Blog</h2>
      </div>
      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h2>I Made A Website?!</h2>
            <h5>First post exclusive to the new website, July 8, 2020</h5>
            <div class="fakeimg" style="height:200px;">Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div class="card">
            <h2>QTime: My Time as an Aiqudo Intern</h2>
            <h5>Closing of summer internship blog post, Sept 12, 2019</h5>
            <div class="fakeimg" style="height:200px;"><img src="images/jpgs/AiqudoPhoto.jpg" width="60%" height="auto"></div>
            <p>Original posting located at https://www.aiqudo.com/2019/09/12/qtime/</p>
            <p>When I started my internship at Aiqudo, I had next to no experience doing any of the things I was here to do. I came in
            to Aiqudo very scared that I was completely unqualified and that I would immediately make a fool of myself and get
            fired. But it was so much better than I had expected. As soon as I got here, I immediately felt welcome and like I was
            one of the team. I loved every bit of time I got to work here, and I’m so sad for it to end. While I was here, I learned
            more than I have throughout all of college so far. I learned an entirely new programming language and now feel more
            comfortable using that language than any of the others that I had been using for years! While I was here, I created a
            suite of useful Slack actions that went into production.
            
            We’ll write in more detail about Voice in Slack, but here are some examples of what’s now possible to do super-easily in
            Slack with simple voice commands:
            
            “send a message to John”
            “send a poll to the General channel asking what’s for lunch today”
            “post a gif about bananas”
            I don’t think I know anybody else who had a summer internship that led to them writing programs that actually went into
            production. Unlike all of them, I now have something that I can pull up on anybody’s phone and say “Hey look, I made
            that!”
            
            I got a ton of experience working with both backend stuff like RESTful APIs and data manipulation, but then I also got
            to do a lot with the frontend working with HTML/CSS and user interaction with computing systems. I learned more than
            just technical skills, like how startups function and how to work with over 15 people on a single project. All in all,
            this internship has been invaluable to me and I wouldn’t trade it for anything else. This opportunity has not only made
            me a better software engineer, but also made me a million times more confident in myself and my abilities. The people
            here are some of the best people that I have ever met and I cannot wait to start working here again part-time during the
            school year.
            </p>
          </div>
        </div>
        <div class="rightcolumn">
          <div class="card">
            <h2>About Me</h2>
            <div class="fakeimg" style="height:100px;">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
          <div class="card">
            <h3>Popular Post</h3>
            <div class="fakeimg">Image</div><br>
            <div class="fakeimg">Image</div><br>
            <div class="fakeimg">Image</div>
          </div>
          <div class="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>


    /* general style stuff for within the apps */
    * {
    box-sizing: border-box;
    }
    
    /* Add a gray background color with some padding */
    body {
    font-family: Arial;
    padding: 20px;
    background: #f1f1f1;
    }
    
    /* Header/Blog Title */
    .header {
    padding: 30px;
    font-size: 40px;
    text-align: center;
    background: white;
    }
    
    
    /* Create two unequal columns that floats next to each other */
    /* Left column */
    .leftcolumn {
    float: left;
    width: 75%;
    height: 75%;
    overflow: scroll;
    }
    
    /* Right column */
    .rightcolumn {
    float: left;
    width: 25%;
    padding-left: 20px;
    height: 75%;
    overflow: scroll;
    }
    
    /* Fake image */
    .fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
    }
    
    /* Add a card effect for articles */
    .card {
    background-color: white;
    padding: 20px;
    margin-top: 20px;
    }
    
    /* Clear floats after the columns */
    .row:after {
    content: "";
    display: table;
    clear: both;
    }
    
    /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead
    of next to each other */
    @media screen and (max-width: 800px) {
    .leftcolumn, .rightcolumn {
    width: 100%;
    padding: 0;
    }
    }

