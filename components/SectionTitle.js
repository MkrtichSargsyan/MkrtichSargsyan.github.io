import React from "react";

import styles from '../styles/SectionTitle.module.css'

export default function SectionTitle({title1,title2}) {
  return (
    <div className={styles.title}>
      <h2>PORTFOLIO</h2>
      <p>
        MY Projects <hr />
      </p>
    </div>
  );
}
