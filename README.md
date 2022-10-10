<div id="top"></div>

<!-- PROJECT SHIELDS -->

![Build Shield](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage Shield](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Test Shield](https://img.shields.io/badge/test-failing-critical)
![Veracode Shield](https://img.shields.io/badge/veracode-inactive-inactive)
![Star Shield](https://img.shields.io/badge/stars-0-ff69b4)
![Issues Shield](https://img.shields.io/badge/issues-0-blue)
![Contentful Shield](https://img.shields.io/badge/contentful-active-blue)
![e2e Shield](https://img.shields.io/badge/e2e-unset-inactive)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/data-miner00/blog">
    <img src="https://static.wikia.nocookie.net/diarchy-mapping/images/a/a4/Bloby.png/revision/latest?cb=20200514073822" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Blog</h3>

  <p align="center">
    A place for my non-technical writings shared to the world.
    <br />
    <a href=""><strong>Visit website »</strong></a>
    <br />
    <br />
    <a href="">Visit book</a>
    ·
    <a href="https://github.com/data-miner00/blog/issues">Report Bug</a>
    ·
    <a href="https://github.com/data-miner00/blog/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#previously">Previously</a></li>
        <li><a href="#now">Now</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

I am an semi-avid writer where I will try to document everything I found interesting and useful that can also serves as a refresher for later in future in the form of words, where I can read and reminisce.

### Previously

I originally started this project around a year ago (as of the current edit) around May 2021 as my first hands-on project after I finished my last semester in the university. I have considered it to be completed around June 6 whereby most aspects of the blog had already been taken care of. However, there are actually a lot of things to be worked on and improve but I refuse to acknowledge it and goes on with my life on other projects. It was left with a lot of bugs too!

### Now

I have decided to refurbish this project and make it into actual use for my future blog posting. It took a lot of courage to actually dive back into an old project that had been abandoned the day it was declared "complete" and to be honest, I am very happy with my decision as making it better and better really motivates me to progress further.

<p align="right">(<a href="#top">back to top</a>)</p>

## Cheers (Clap button)

Cheers, the clap icon from Medium.com is also available for each of the article for the users to interact. It is analogous to Facebook's like or Instagram's love button that allow users to express their interest on the subject that is being presented.

To store such states in this project, I've decided to use a local SQLite database for that as it is the simplest and quickest to do the job. A database migration is performed via the `setup.js` in the `scripts` folder.

The access to the database is achieved via Next.js's server side API routes. Two endpoints has been exposed, a `GET` endpoint to retrieve all the data within the SQLite database and a `GET` and `POST` endpoint to retrieve or increment the cheers of a particular article.

```
# Get all data in the database
GET /api/cheers

# Retrieve number of cheers of an article
GET /api/cheers/:articleId

# Increment number of cheers of an article
POST /api/cheers/:articleId
```

The api designs are not RESTful and there are no authentication required to interact with the endpoints as well, so anyone can actually call the endpoints outside of the application. I am totally aware of the flaws mentioned but since the use case is quite simple, this will work for now.

Further improvement will need to be made for safeguarding the API endpoints in the future.

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

Here is a list of technologies that this projects are built and depend on.

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Contentful](https://www.contentful.com)
- [SQLite](https://www.sqlite.org/index.html)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Renovate website
- [x] Use env for all urls
- [ ] Add dark mode/light mode
- [ ] Add animations
- [ ] Add 404 page
- [ ] Update skeleton
- [ ] Add to top button
- [x] Quasi-workable cheers button
- [ ] Simple popup menu

See the [open issues](https://github.com/data-miner00/blog/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Chong Mum Khong - [@has66771004](https://twitter.com/has66771004) - noname1@1utar.my

Project Link: [https://github.com/data-miner00/blog](https://github.com/data-miner00/blog)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Resources that I've found useful and used for reference as well as information gathering during my quest to revamp this project from its previous version.

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [Reddium](https://reddium.vercel.app/)
- [Fedium](https://fedium.herokuapp.com/)
- [Medium](https://medium.com/)
- [Kent C Dodds](https://kentcdodds.com/links)
- [Screenlane](https://screenlane.com/screen/medium-web-app-230/)
- [Next.js API Routes with SQL DB](https://www.youtube.com/watch?v=PxiQDo0CmDE)

<p align="right">(<a href="#top">back to top</a>)</p>
