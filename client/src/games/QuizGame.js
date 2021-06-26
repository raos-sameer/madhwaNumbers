import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Container, Button } from "reactstrap";
import AppMenu from "../common/AppMenu";
const QuizGame = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <div>
      <AppMenu></AppMenu>
      <Container>
        <h3 className="header"> Pop quiz</h3>
        <div className="arrangeButtons">
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error}>
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="quiz"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="The best!"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="The worst."
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              <Button type="submit" variant="outlined" color="primary">
                Check Answer
              </Button>
            </FormControl>
          </form>
          >
        </div>
      </Container>
    </div>
  );
};

export default QuizGame;
