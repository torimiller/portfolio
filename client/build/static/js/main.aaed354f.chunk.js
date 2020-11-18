(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/tori-miller-resume.bbcc329a.pdf"},23:function(e,t,a){e.exports=a.p+"static/media/autolog.8535d391.png"},24:function(e,t,a){e.exports=a.p+"static/media/gooddog.55cda853.png"},25:function(e,t,a){e.exports=a.p+"static/media/twitter.f0d73a1e.png"},26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(20),r=a.n(l),i=(a(31),a(11)),c=a(12),s=a(6),m=a(14),u=a(13),p=a(7),d=a(1),h=(a(10),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(i.a)(this,a),console.log("Navbar constructor props:",e),(o=t.call(this,e)).state={contact:!1},o.handleAboutPath=o.handleAboutPath.bind(Object(s.a)(o)),o.handlePortfolioPath=o.handlePortfolioPath.bind(Object(s.a)(o)),o}return Object(c.a)(a,[{key:"setContact",value:function(){this.setState({portfolio:!1,about:!1,contact:!0})}},{key:"handleAboutPath",value:function(){this.props.handleAboutPath()}},{key:"handlePortfolioPath",value:function(){this.props.handlePortfolioPath()}},{key:"render",value:function(){var e=this.props.match;return console.log("Navbar this.props:",this.props),console.log("Navbar match:",e),n.a.createElement("nav",{className:"nav-wrapper"},n.a.createElement("h1",{className:"nav-h1"},"Tori Miller"),n.a.createElement("div",{className:"nav-links"},n.a.createElement("div",{className:"nav-item nav-item-portfolio"},n.a.createElement("span",{style:"portfolio"===this.props.currentNavItem?{borderBottom:"2px solid #FA72AB"}:{borderBottom:"none"}},n.a.createElement(p.b,{to:"/portfolio",className:"nav-link",style:"portfolio"===this.props.currentNavItem?{fontWeight:"700"}:{fontWeight:"500"},onClick:this.handlePortfolioPath},"Portfolio"))),n.a.createElement("div",{className:"nav-item nav-item-about"},n.a.createElement("span",{style:"about"===this.props.currentNavItem?{borderBottom:"2px solid #FA72AB"}:{borderBottom:"none"}},n.a.createElement(p.b,{to:"/about",className:"nav-link",style:"about"===this.props.currentNavItem?{fontWeight:"700"}:{fontWeight:"500"},onClick:this.handleAboutPath},"About")))))}}]),a}(n.a.Component)),g=a(22),f=a.n(g),E=function(e){return n.a.createElement(o.Fragment,null,e.handleAboutPath,console.log("About props:",e),n.a.createElement("div",{className:"about-wrapper"},n.a.createElement("div",{className:"about-col-left"},n.a.createElement("h1",{className:"about-h1"},"Full stack web developer with experience building web applications from scratch, developing and integrating APIs, and working with databases."),n.a.createElement("p",{className:"about-body-copy"},"I\u2019m a well-organized, dedicated, and versatile developer with a strong passion for technology and design. I\u2019ve worn many hats in my career between design, marketing, project management and sales. My work is driven by the will of making complicated things easy and pleasant to interact with.",n.a.createElement("br",null),n.a.createElement("br",null),"I now specialise in web development but my knowledge of multiple fields allows me to work on a project with the full scope in mind; simplifying the process of working together and producing a more cohesive experience for your clients and users. Feel free to contact me or browse my projects in my portfolio."),n.a.createElement("div",{className:"contact-wrapper"},n.a.createElement("p",null,"Are you looking for a full stack developer? I'd love to chat. Send me a message at ",n.a.createElement("a",{className:"contact-email",href:"mailto:torimillerpdx@gmail.com"},"torimillerpdx@gmail.com")," and let's connect.")),n.a.createElement("a",{href:f.a,download:!0},n.a.createElement("button",{className:"resume"},"Good Ol' Fashioned Resume"))),n.a.createElement("div",{className:"about-col-right"},n.a.createElement("ul",{className:"skills"},n.a.createElement("li",{className:"li-header"},"Web Application Development"),n.a.createElement("li",{className:"skills-li"},"Responsive HTML/CSS"),n.a.createElement("li",{className:"skills-li"},"Javascript (vanilla, React/Redux, jQuery)"),n.a.createElement("li",{className:"li-header"},"API Integration & Development"),n.a.createElement("li",{className:"skills-li"},"REST API integration"),n.a.createElement("li",{className:"skills-li"},"REST API development with Node.js"),n.a.createElement("li",{className:"li-header"},"Database Design"),n.a.createElement("li",{className:"skills-li"},"Database architectures in MongoDB, always aiming for performance, scale and stability")))))},b=a(23),v=a.n(b),N=a(24),w=a.n(N),y=a(25),k=a.n(y),P=function(e){return n.a.createElement(o.Fragment,null,console.log("Portfolio props:",e),n.a.createElement("div",{className:"portfolio-wrapper"},n.a.createElement("div",{className:"portfolio-piece-good-dog portfolio-piece"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://good-dog-app.herokuapp.com/",className:"good-dog-image-link"},n.a.createElement("img",{src:w.a,className:"good-dog-image",alt:"good-dog-thumbnail"})),n.a.createElement("div",{className:"content good-dog-content"},n.a.createElement("h2",null,"Good Dog"),n.a.createElement("p",{className:"content-description"},"Good Dog is an application that gives you the ability to keep track of your dog's training progress. Build a custom set of goals to teach your dog, and log each session of training. When your pup has mastered the skill, you can add it to your collection of completed goals."),n.a.createElement("ul",{className:"language-list"},n.a.createElement("li",null,"MONGODB"),n.a.createElement("li",null,"EXPRESS"),n.a.createElement("li",null,"REACT"),n.a.createElement("li",null,"NODE.JS")))),n.a.createElement("div",{className:"portfolio-piece-autolog portfolio-piece"},n.a.createElement("div",{className:"content autolog-content"},n.a.createElement("h2",null,"AutoLog"),n.a.createElement("p",{className:"content-description"},"AutoLog is an application that gives you the ability to track your car maintenance. With all your maintenance logged in one place, you\u2019ll no longer be wondering when the last time you completed a maintenance task was or when your next task is due."),n.a.createElement("ul",{className:"language-list"},n.a.createElement("li",null,"HTML"),n.a.createElement("li",null,"CSS"),n.a.createElement("li",null,"JAVASCRIPT/JQUERY"),n.a.createElement("li",null,"MONGODB"),n.a.createElement("li",null,"EXPRESS"),n.a.createElement("li",null,"NODE.JS"))),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://socialist-toque-56844.herokuapp.com/",className:"autolog-image-link"},n.a.createElement("img",{src:v.a,className:"autolog-image",alt:"autolog-thumbnail"}))),n.a.createElement("div",{className:"portfolio-piece-twitter portfolio-piece"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter-synonym-finder.herokuapp.com/",className:"twitter-image-link"},n.a.createElement("img",{src:k.a,className:"twitter-image",alt:"twitter-thumbnail"})),n.a.createElement("div",{className:"content twitter-content"},n.a.createElement("h2",null,"Twitter Synonym Finder"),n.a.createElement("p",{className:"content-description"},"The Twitter Synonym Finder is an app for helping you find the right words to Tweet. This project uses two APIs: the Datamuse API, a word-finding query engine, and the Twitter API. It is used to find synonyms to the words that you write in a Tweet. After rewording what you want to say, you can post your Tweet to Twitter directly from the app."),n.a.createElement("ul",{className:"language-list"},n.a.createElement("li",null,"REACT"),n.a.createElement("li",null,"CSS"))))))},A=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("ul",{className:"footer-list"},n.a.createElement("a",{href:"https://www.linkedin.com/in/tori-miller-pdx/",target:"_blank",rel:"noopener noreferrer",className:"footer-link"},"LinkedIn"),n.a.createElement("a",{href:"https://github.com/torimiller",target:"_blank",rel:"noopener noreferrer",className:"footer-link"},"Github"),n.a.createElement(p.b,{to:"/portfolio",className:"footer-link"},"Portfolio"),n.a.createElement(p.b,{to:"/about",className:"footer-link"},"About")))},I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).handleAboutPath=o.handleAboutPath.bind(Object(s.a)(o)),o.handlePortfolioPath=o.handlePortfolioPath.bind(Object(s.a)(o)),o.state={currentNavItem:"portfolio"},o}return Object(c.a)(a,[{key:"handleAboutPath",value:function(){this.setState({currentNavItem:"about"})}},{key:"handlePortfolioPath",value:function(){this.setState({currentNavItem:"portfolio"})}},{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement("section",{className:"container"},n.a.createElement(d.a,{component:function(){return n.a.createElement(h,{currentNavItem:e.state.currentNavItem,handleAboutPath:e.handleAboutPath,handlePortfolioPath:e.handlePortfolioPath})}}),n.a.createElement(d.a,{exact:!0,path:"/",component:function(){return n.a.createElement(P,{currentNavItem:e.state.currentNavItem})}}),n.a.createElement(d.a,{exact:!0,path:"/about",component:function(){return n.a.createElement(E,{currentNavItem:e.state.currentNavItem})}}),n.a.createElement(d.a,{exact:!0,path:"/portfolio",component:P}),n.a.createElement(A,null)))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.aaed354f.chunk.js.map