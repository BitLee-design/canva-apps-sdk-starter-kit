import { Button, Rows, Text } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import styles from "styles/components.css";

export const App = () => {
  const onClick = () => {
    addNativeElement({
      type: "TEXT",
      children: ["Hello world!"],
    });
  };

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text>
          This my first Canvas app, made from Canvas Boilerplait <code>src/app.tsx</code> file,
          I will do my best to improve through time to time.
        </Text>
        <Button variant="primary" onClick={onClick} stretch>
          Know more about it
        </Button>
      </Rows>
    </div>
  );
};
