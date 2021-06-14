import React, { useEffect } from "react";
import { motion } from "framer-motion";
import bounce from "../script/bounce";
import "../skill.css";
export default function Contact() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    bounce();
  }, []);

  function handleSubmit(e) {
    alert("Your Message is sent!");
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 40,
  };

  return (
    <>
    <section>
    <div className="container home-page" style={{ zoom: "95%" }}>
        <div className="text-zone">
          <h1
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              C
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              n
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              a
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              c
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              m
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p>
            Drop a message here !!
          </p>

          <div className="contact">
            <iframe
              name="hidden_iframe"
              title="hidden_iframe"
              id="hidden_iframe"
              style={{
                display: "none",
              }}
            ></iframe>
            <form
              className="form"
              action="mailto:ritiksethi21@gmail.com"
              method="post"
              encType="text/plain"
              target="hidden_iframe"
              autoComplete="off"
              // onSubmit={handleSubmit}
            >
              <motion.input
                id="name"
                type="text"
                name="entry.649112156"
                placeholder="Name *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.1 }}
              />
              &nbsp;
              <motion.input
                id="email"
                type="email"
                name="entry.1560288382"
                placeholder="Email *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.2 }}
              />
              <br />
              <motion.input
                id="sbj"
                type="text"
                name="entry.1406382583"
                placeholder="Subject (optional)"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.4 }}
              />
              <br />
              <motion.textarea
                id="msg"
                type="text"
                name="entry.728219473"
                placeholder="Message *"
                required={true}
                cols="50"
                rows="10"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.7 }}
              ></motion.textarea>
              <br />
              <input
                id="sub-btn"
                type="submit"
                value="Send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              />
              {/* <button type="submit">SS</button> */}
            </form>
            
          </div>
        </div>

       
      </div>
     
    </section>
    <br />
    <br />
    <br />
    <br />
    <span></span>

      <section>
      <div className="major">
          <h1>
            <span className="dif" style={{ color: "#23ffde" }}>
              Let's get in touch 
            </span>
            
            </h1>
    <ul>
      <li class="gmail">
        <a href="mailto:ritiksethi21@gmail.com" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-google"></span>
        </a>
      </li>
      <li class="linkedin"> 
        <a href="https://www.linkedin.com/in/ritik-sethi/" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-linkedin"></span>
        </a>
      </li>
      <li class="github">
        <a href="https://github.com/ritiksethi21" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-github"></span>
        </a>      
        </li>
    </ul>
    <br />
    <br />
    <br />
    <ul>
      <li class="hackerrank">
        <a href="https://www.hackerrank.com/ritiksethi21" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-hackerrank"></span>
        </a>
      </li>
      <li class="codechef">
        <a href="https://www.codechef.com/users/ritiksethi2112" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <img src="https://www.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png" width="80px" />
          </span>
        </a>
      </li>
      <li class="gfg">
        <a href="https://auth.geeksforgeeks.org/user/ritiksethi21/practice/" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span><img src="https://img.icons8.com/color/452/GeeksforGeeks.png" width="80px" /></span>
        </a>
      </li>
     
    </ul>
    <br />
    <br />
    <br />
    <ul>
      
      <li class="fb">
        <a href="https://www.facebook.com/profile.php?id=100009242148963" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-facebook"></span>
          
        </a>
      </li>
      <li class="instagram">
        <a href="https://www.instagram.com/ritiksethi21/" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-instagram"></span>
        </a>
      </li>
      <li class="discord">
        <a href="https://discord.gg/FpHUTf6sFj" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-discord"></span>
        </a>
      </li>
    </ul>
  </div>
      </section>
      
    </>
  );
}
