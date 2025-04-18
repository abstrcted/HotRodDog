import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hi, I'm Celestin 👋</h1>
      
      <p className={styles.paragraph}>
        I'm a Computer Science student at the University of Washington who believes technology should make the world better, 
        one line of code at a time. By day, I'm diving into full-stack development, AI, and data analytics. By night, 
        you might find me analyzing football stats (I'm a bit of a data nerd when it comes to sports!) or leading 
        brainstorming sessions with my fellow entrepreneurs.
      </p>

      <p className={styles.paragraph}>
        As President of the Tech Startup Club, I've learned that great innovation comes from collaboration. 
        I love bringing people together, whether we're building new applications, tackling complex problems, 
        or connecting students with industry leaders. There's something special about seeing an idea transform 
        from a whiteboard sketch to a working product.
      </p>

      <p className={styles.paragraph}>
        When I'm not coding or crunching numbers, I'm probably trying out the latest tech gadget, playing pickup soccer, 
        or exploring Seattle's coffee shops with my laptop in tow. I'm a firm believer that the best ideas often come 
        from unexpected places – sometimes even over a perfectly brewed cup of coffee!
      </p>

      <p className={styles.paragraph}>
        I'm always excited to connect with fellow tech enthusiasts, startup founders, or anyone passionate about innovation. 
        Whether you want to discuss the latest tech trends, brainstorm startup ideas, or just chat about the beautiful game 
        of football, my inbox is open! 🚀
      </p>

    </div>
  );
};

export default About;
