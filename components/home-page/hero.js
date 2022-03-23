import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/hai.jpg" alt="An image showing Hai" width={300} height={300} />
      </div>
      <h1>Hi, I&apos;m Hai</h1>
      <p>I blog about web development - especially frontend framework like React.</p>
    </section>
  );
}
