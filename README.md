![Gloomsmith Logo](https://raw.githubusercontent.com/Capstone-42-quote-gen/ai-quote-generator/develop/frontend/src/assets/gloomSmithLogo-purple.png)

# About Gloomsmith AI Quote Generator
Our website Gloomsmith is an innovative platform that harnesses the power of artificial intelligence to dynamically generate hilarious "de-motivational" quote images. By choosing from a diverse range of topics such as Relationships, Work, Politics, and more, users can craft their own personalized image. Additionally, they have the option to select a distinct "voice" from characters like Yoda, Forest Gump, Gollum, and others. The result is a truly original and amusing quote image that can be easily shared with friends. Casual users can also save their favorite creations and explore the latest and most popular ones continued entertainment.

- Uses OpenAI API to generate quotes based on a "VOICE" and "TOPIC" list that is provided to the user.
- Connects to Unsplash API to get related photos based on the topic selected.
- Creates images with the quote embedded on it using IMGIX and provides multiple template options to select their favorite.
- Browse through popular (based on likes), latest, and by Tags (topic/voices)

This was developed as our capstone project during the [2023 Deep Dive Full Stack Web Development Bootcamp (CNM Ingenuity)](https://deepdivecoding.com/fullstack-web-development/)

# Sample Quote Images

> ["Marriage --where you just keep practicing the same pose until death do you part"](https://images.unsplash.com/photo-1664548322898-2b18f3170606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODY4NDMwMzh8&ixlib=rb-4.0.3&q=80&w=1080&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center,top&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P3c9MTAwMCZ0eHRjbHI9ZmZmJnR4dD0lMjJNYXJyaWFnZS0td2hlcmUlMjB5b3UlMjBqdXN0JTIwa2VlcCUyMHByYWN0aWNpbmclMjB0aGUlMjBzYW1lJTIwcG9zZSUyMHVudGlsJTIwZGVhdGglMjBkbyUyMHlvdSUyMHBhcnQuJTIyJTIwLSUyMFlvZ2ElMjBJbnN0cnVjdG9yJnc9MTAwMCZ0eHRzaXplPTgwJnR4dGxlYWQ9MjAmdHh0cGFkPTEwMCZ0eHRmb250PUFtZXJpY2FuVHlwZXdyaXRlciZ0eHRhbGlnbj1jZW50ZXI=&exp=-10&w=1080) - *Yoga Instructor*
>
> ["Momma always said raising children is like chasin' a butterfly with a pair of garden sheers..You'll never catch it, so why even try"](https://images.unsplash.com/photo-1605713288610-00c1c630ca1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODY4ODY1OTF8&ixlib=rb-4.0.3&q=80&w=1080&fit=crop&bs=inherit&bm=screen&balph=20&blend64=OTlhOTUx&txtpad=40&txtsize=30&txtclr=fff&txtalign=center&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&markalign=center,top&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P3c9MTAwMCZ0eHRjbHI9ZmZmJnR4dD0lMjJNb21tYSUyMGFsd2F5cyUyMHNhaWQlMjByYWlzaW5nJTIwY2hpbGRyZW4lMjBpcyUyMGxpa2UlMjBjaGFzaW4nJTIwYSUyMGJ1dHRlcmZseSUyMHdpdGglMjBhJTIwcGFpciUyMG9mJTIwZ2FyZGVuJTIwc2hlZXJzLi4lMjBZb3UnbGwlMjBuZXZlciUyMGNhdGNoJTIwaXQlMkMlMjBzbyUyMHdoeSUyMGV2ZW4lMjB0cnklMjIlMjAtJTIwRm9ycmVzdCUyMEd1bXAuJnc9MTAwMCZ0eHRzaXplPTgwJnR4dGxlYWQ9MjAmdHh0cGFkPTEwMCZ0eHRmb250PWF2ZW5pci1ibGFjayZ0eHRhbGlnbj1jZW50ZXI=&exp=-10&w=1080) - Forrest Gump
>
> ["Working out? Ha! In this day and age we can download fitness apps that can do all the work for us anyway"](https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODY5MTk4MzV8&ixlib=rb-4.0.3&q=80&w=1080&usm=20&exp=-10&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P3c9MTAwMCZ0eHRjbHI9ZmZmJnR4dD0lMjJXb3JraW5nJTIwb3V0JTNGJTIwSGEhJTIwSW4lMjB0aGlzJTIwZGF5JTIwYW5kJTIwYWdlJTIwd2UlMjBjYW4lMjBkb3dubG9hZCUyMGZpdG5lc3MlMjBhcHBzJTIwdGhhdCUyMGNhbiUyMGRvJTIwYWxsJTIwdGhlJTIwd29yayUyMGZvciUyMHVzJTIwYW55d2F5LiUyMFRlY2glMjBHZWVrJTIwT3V0ISUyMiZ3PTEwMDAmdHh0c2l6ZT04MCZ0eHRsZWFkPTAmdHh0cGFkPTE1MCZ0eHRmb250PUltcGFjdCZ0eHRhbGlnbj1jZW50ZXI=&markalign=center,bottom&txt64=aHR0cHM6Ly9nbG9vbXNtaXRoLmxvbA&txtalign=center&txtclr=fff&txtsize=30&txtpad=40&blend64=NjM3NDk3&balph=50&bm=screen&bs=inherit&fit=crop) - Tech Geek




# Built With
- [OpenAI API](https://platform.openai.com/) - Quotes are generated no the fly from openAI API using our master prompt that passes a topic and voice value. 
- [Unsplash API](https://unsplash.com/developers) - Get images from the API related to quote topic that user selects.
- [imgIX ](https://imgix.com/) - Dynamic Text Compositing. We use imgIX that is installed on unsplash and created our own templates. We Genarate the custom image by building our own url with all the quote and formatting information via the URL that is hotlinked direct to unsplash.
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [MailGun](https://mailgun.com/) - User account email activation
- [ReactJS](https://reactjs.org/)

# Team
- [Manuel Rascon](https://www.linkedin.com/in/manuel-rascon-/)
- [Robert Balch II](https://www.linkedin.com/in/robert-balch-ii/)
- [Gurumustuk Khalsa](https://www.linkedin.com/in/gurumustuk-khalsa/)