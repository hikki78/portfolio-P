import Link from "next/link";
import styles from "../styles/footer.module.scss";

const mainLinks = {
  Home: "/",
  Blog: "/About Me",
  Projects: "/projects",
};

const footerLinks = [
  [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/About Me" },
    { name: "Projects", url: "/projects" },
    { name: "RSS", url: "/feed.xml" },
  ],
  [
    { name: "Mail", url: "mailto:meghadrimukherjee680@gmail.com" },
    { name: "GitHub", url: "https://github.com/hikki78" },
    { name: "Twitter", url: "https://twitter.com/hikki_78" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/hikki78/" },
  ],
];
export function Footer({}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <ul className={styles.links}>
          {footerLinks[0].map((link) => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles.links}>
          {footerLinks[1].map((link) => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.copyright}>
        {" "}
        Made with 💖 by Meghadri Mukherjee {new Date().getFullYear()}
      </p>
    </footer>
  );
}
