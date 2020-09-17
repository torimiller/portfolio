(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/autolog.8535d391.png"},24:function(e,t,a){e.exports=a.p+"static/media/puppypal.a633905f.png"},25:function(e,t,a){e.exports=a.p+"static/media/twitter.bf27afe1.png"},26:function(e,t,a){e.exports=a.p+"static/media/portfolio-preview.664752e3.svg"},33:function(e,t,a){e.exports=a(44)},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(13),i=a.n(o),r=(a(38),a(7)),c=a(2),s=a(21),m=a(22),p=a(10),u=a(32),d=a(31),E=(a(12),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={portfolio:!0,about:!1,contact:!1},l.setPortfolio=l.setPortfolio.bind(Object(p.a)(l)),l.setAbout=l.setAbout.bind(Object(p.a)(l)),l.setContact=l.setContact.bind(Object(p.a)(l)),l}return Object(m.a)(a,[{key:"setPortfolio",value:function(){console.log("this:",this),console.log("state:",this.state),this.setState({portfolio:!0,about:!1,contact:!1})}},{key:"setAbout",value:function(){this.setState({portfolio:!1,about:!0,contact:!1})}},{key:"setContact",value:function(){this.setState({portfolio:!1,about:!1,contact:!0})}},{key:"render",value:function(){return n.a.createElement("nav",{className:"nav-wrapper"},n.a.createElement("h1",{className:"nav-h1"},"Tori Miller"),n.a.createElement("div",{className:"nav-links"},n.a.createElement("div",{className:"nav-item nav-item-portfolio"},n.a.createElement(r.b,{to:"/portfolio",className:"nav-link",style:this.state.portfolio?{color:"#E94CC0"}:{color:"#75849E"},onClick:this.setPortfolio},"Portfolio")),n.a.createElement("div",{className:"nav-item nav-item-about"},n.a.createElement(r.b,{to:"/about",className:"nav-link",style:this.state.about?{color:"#E94CC0"}:{color:"#75849E"},onClick:this.setAbout},"About")),n.a.createElement("div",{className:"nav-item nav-item-contact"},n.a.createElement(r.b,{to:"/contact",className:"nav-link",style:this.state.contact?{color:"#E94CC0"}:{color:"#75849E"},onClick:this.setContact},"Contact"))))}}]),a}(n.a.Component)),h=function(){return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"about-wrapper"},n.a.createElement("div",{className:"about-col-left"},n.a.createElement("h1",{className:"about-h1"},"I'm a full stack web developer with over a year of experience building web applications from scratch, developing and integrating APIs, and working with databases."),n.a.createElement("p",{className:"about-body-copy"},"I\u2019m a well-organized, dedicated, and versatile developer with a strong passion for technology and design. I\u2019ve worn many hats in my career between design, marketing, project management and sales. My work is driven by the will of making complicated things easy and pleasant to interact with.",n.a.createElement("br",null),n.a.createElement("br",null),"I now specialise in web development but my knowledge of multiple fields allows me to work on a project with the full scope in mind; simplifying the process of working together and producing a more cohesive experience for your clients and users. Feel free to contact me or browse my projects in my portfolio.")),n.a.createElement("div",{className:"about-col-right"},n.a.createElement("ul",{className:"skills"},n.a.createElement("li",{className:"li-header"},"Web Application Development"),n.a.createElement("li",{className:"skills-li"},"Responsive HTML/CSS"),n.a.createElement("li",{className:"skills-li"},"Javascript (vanilla, React/Redux, jQuery)"),n.a.createElement("li",{className:"li-header"},"API Integration & Development"),n.a.createElement("li",{className:"skills-li"},"REST API integration."),n.a.createElement("li",{className:"skills-li"},"REST API development with Node.js"),n.a.createElement("li",{className:"li-header"},"Database Design"),n.a.createElement("li",{className:"skills-li"},"Database architectures in MongoDB, always aiming for performance, scale and stability.")))))},f=a(23),g=a.n(f),b=a(24),v=a.n(b),w=a(25),y=a.n(w),N=a(26),k=a.n(N),S=function(){return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"portfolio-wrapper"},n.a.createElement("div",{className:"portfolio-preview-intro"},n.a.createElement("h1",{className:"portfolio-preview-h1"},"Full Stack Web Developer"),n.a.createElement("p",{className:"portfolio-preview-subtext"},"Over a year of experience building web applications, developing and integrating APIs, and working with databases.")),n.a.createElement("img",{src:k.a,className:"portfolio-preview-image",alt:"portfolio-preview-thumbnail"}),n.a.createElement("div",{className:"portfolio-piece-puppypal portfolio-piece"},n.a.createElement("a",{target:"_blank",href:"https://mysterious-retreat-15685.herokuapp.com/",className:"puppypal-image-link"},n.a.createElement("img",{src:v.a,className:"puppypal-image",alt:"puppypal-thumbnail"})),n.a.createElement("div",{className:"content puppypal-content"},n.a.createElement("h2",null,"PuppyPal"),n.a.createElement("p",{className:"content-description"},"PuppyPal is an application that gives you the ability to keep track of your dog's training progress. Build a custom set of goals to teach your dog, and log each session of training. When your pup has mastered the skill, you can add it to your collection of completed goals."),n.a.createElement("ul",{className:"language-list"},n.a.createElement("li",null,"MONGODB"),n.a.createElement("li",null,"EXPRESS"),n.a.createElement("li",null,"REACT"),n.a.createElement("li",null,"NODE.JS")))),n.a.createElement("div",{className:"portfolio-piece-autolog portfolio-piece"},n.a.createElement("div",{className:"content autolog-content"},n.a.createElement("h2",null,"Autolog"),n.a.createElement("p",{className:"content-description"},"AutoLog is an application that gives you the ability to track your car maintenance. With all your maintenance logged in one place, you\u2019ll no longer be wondering when the last time you completed a maintenance task was or when your next task is due."),n.a.createElement("ul",{className:"language-list"},n.a.createElement("li",null,"HTML"),n.a.createElement("li",null,"CSS"),n.a.createElement("li",null,"JAVASCRIPT/JQUERY"),n.a.createElement("li",null,"MONGODB"),n.a.createElement("li",null,"EXPRESS"),n.a.createElement("li",null,"NODE.JS"))),n.a.createElement("a",{target:"_blank",href:"https://socialist-toque-56844.herokuapp.com/",className:"autolog-image-link"},n.a.createElement("img",{src:g.a,className:"autolog-image",alt:"autolog-thumbnail"}))),n.a.createElement("div",{className:"portfolio-piece-twitter portfolio-piece"},n.a.createElement("a",{target:"_blank",href:"https://polar-tor-48427.herokuapp.com/",className:"twitter-image-link"},n.a.createElement("img",{src:y.a,className:"twitter-image",alt:"twitter-thumbnail"})),n.a.createElement("div",{className:"content twitter-content"},n.a.createElement("h2",null,"Twitter Synonym Finder"),n.a.createElement("p",{className:"content-description"},"The Twitter Synonym Finder is an app for helping you find the right words to Tweet. This project uses two APIs: the Datamuse API, a word-finding query engine, and the Twitter API. It is used to find synonyms to the words that you write in a Tweet. After rewording what you want to say, you can post your Tweet to Twitter directly from the app."),n.a.createElement("ul",{className:"language-list"},n.a.createElement("li",null,"HTML"),n.a.createElement("li",null,"CSS"),n.a.createElement("li",null,"JAVASCRIPT"),n.a.createElement("li",null,"JQUERY"))))))},A=function(){return n.a.createElement("div",{className:"contact"},n.a.createElement("div",{className:"contact-wrapper"},n.a.createElement("h1",null,"Get In Touch"),n.a.createElement("p",null,"Are you looking for a full stack developer? I'd love to chat. Send me a message at ",n.a.createElement("a",{href:"mailto:torimillerpdx@gmail.com"},"torimillerpdx@gmail.com")," and let's connect.")))},C=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("ul",{className:"footer-list-1 footer-text"},n.a.createElement("li",null,"Find me @"),n.a.createElement("a",{href:"https://www.linkedin.com/in/tori-miller-pdx/",target:"_blank",className:"footer-link"},"LinkedIn"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://github.com/torimiller",target:"_blank",className:"footer-link"},"Github")),n.a.createElement("ul",{className:"footer-list-2 footer-text"},n.a.createElement(r.b,{to:"/about",className:"footer-link"},"About"),n.a.createElement("br",null),n.a.createElement(r.b,{to:"/portfolio",className:"footer-link"},"Portfolio"),n.a.createElement("br",null),n.a.createElement(r.b,{to:"/contact",className:"footer-link"},"Contact")),n.a.createElement("p",{className:"footer-copyright footer-text"},"Copyright \xa9 2020 Tori Miller"))},P=a(30),x=a(8),T=a(28),I=a(29),O=Object(x.combineReducers)({}),j=[I.a],D=Object(x.createStore)(O,{},Object(T.composeWithDevTools)(x.applyMiddleware.apply(void 0,j)));var R=function(){return n.a.createElement(P.a,{store:D},n.a.createElement(r.a,null,n.a.createElement("section",{className:"container"},n.a.createElement(E,null),n.a.createElement(c.a,{exact:!0,path:"/",component:S}),n.a.createElement(c.a,{exact:!0,path:"/about",component:h}),n.a.createElement(c.a,{exact:!0,path:"/portfolio",component:S}),n.a.createElement(c.a,{exact:!0,path:"/contact",component:A}),n.a.createElement(C,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.ee38489a.chunk.js.map