import React, { useState } from "react";
import styles from "./FieldsOfSpecialty.module.scss";
import { Button } from "@material-ui/core";
import cx from "classnames";

type FieldProps = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  items: string[];
};

export const Field: React.FC<FieldProps> = ({
  icon: IconComponent,
  title,
  description,
  items,
}) => {
  const [expanded, setExpanded] = useState(false);

  const fieldDetailsClasses = cx(styles.fieldDetails, {
    [styles.fieldDetailsExpanded]: expanded,
  });

  return (
    <div className={styles.field}>
      <IconComponent className={styles.fieldIcon} />
      <div className={styles.fieldTitle}>{title}</div>
      <div className={styles.fieldDescription}>{description}</div>
      <div className={fieldDetailsClasses}>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <Button
        className={styles.readMore}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Zwiń" : "Rozwiń"}
      </Button>
    </div>
  );
};
